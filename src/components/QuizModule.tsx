/// File: src/components/QuizModule.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import ThemeSelector from "./ThemeSelector";
import MiniGameBreak from "./MiniGameBreak";
import { useStore } from "@/lib/store";
import { selectAdaptiveQuizQuestions, selectWeakAreaQuestions, weakestTheme } from "@/lib/analytics";
import { speak, stopSpeaking } from "@/lib/speech";
import { Difficulty, QuizItem } from "@/lib/types";

const DIFFICULTIES: Difficulty[] = ["easy", "medium", "hard"];
/** Show a 50-second "brain break" mini-game every time the student's
 *  lifetime answered-question count crosses a multiple of this. */
const MINI_GAME_INTERVAL = 15;

type Stage = "setup" | "in-progress" | "results";

const stripAccents = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
const normalizeAnswer = (s: string) => stripAccents(s.trim().toLowerCase());

/** Auto-generated prompts (see buildVocabQuestions in lib/data.ts) lead with
 *  a bracketed category tag, e.g. "[Redacción IB - Health and well-being]
 *  Si estás...". Split it out so it can render as its own small label
 *  instead of running into the question text on one bolded line. */
const splitPromptTag = (prompt: string): { tag: string | null; text: string } => {
  const match = prompt.match(/^\[([^\]]+)\]\s*/);
  return match ? { tag: match[1], text: prompt.slice(match[0].length) } : { tag: null, text: prompt };
};

/** Quiz & Puzzle module: theme + difficulty setup, then a short quiz
 *  (mcq / short-answer / sentence-ordering puzzle questions), then a score
 *  screen. Everything is graded automatically — every answered question is
 *  logged via recordQuestionResult, which powers lib/analytics.ts's
 *  weakness detection: quizzes are built adaptively (weaker questions
 *  resurface first) and a student can jump straight into a "weak areas"
 *  quiz built from their worst-performing questions across all themes. */
export default function QuizModule() {
  const {
    themes,
    questions,
    questionResults,
    completeQuiz,
    recordQuestionResult,
    awardMiniGameBonus,
    lastAward,
    clearLastAward,
    setActiveSession,
  } = useStore();
  const searchParams = useSearchParams();

  const [stage, setStage] = useState<Stage>("setup");
  const [themeId, setThemeId] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [quiz, setQuiz] = useState<QuizItem[]>([]);
  const [isWeakMode, setIsWeakMode] = useState(false);
  const [current, setCurrent] = useState(0);
  const [response, setResponse] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [lastQuestionResult, setLastQuestionResult] = useState<"correct" | "incorrect" | null>(null);
  const [missedItems, setMissedItems] = useState<QuizItem[]>([]);
  const [showMiniGame, setShowMiniGame] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const miniGameShownAt = useRef<number | null>(null);

  useEffect(() => stopSpeaking, []); // stop any playback if the module unmounts

  // Lets the global milestone/engagement popups know a quiz is in progress,
  // so they defer themselves until the student reaches the results screen
  // instead of interrupting mid-quiz — see lib/store.tsx's activeSession.
  useEffect(() => {
    setActiveSession(stage === "in-progress");
    return () => setActiveSession(false);
  }, [stage, setActiveSession]);

  const currentQuestion = quiz[current];
  const promptParts = useMemo(
    () => (currentQuestion ? splitPromptTag(currentQuestion.prompt) : { tag: null, text: "" }),
    [currentQuestion]
  );

  const togglePlayAudio = () => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
      return;
    }
    if (!currentQuestion?.audioText) return;
    setIsSpeaking(true);
    speak(currentQuestion.audioText, () => setIsSpeaking(false));
  };

  const recommendedThemeId = useMemo(() => weakestTheme(questionResults, themes)?.themeId ?? null, [questionResults, themes]);
  const selectedTheme = useMemo(() => themes.find((t) => t.id === themeId) ?? null, [themes, themeId]);

  const startQuiz = (forThemeId: string, forDifficulty: Difficulty) => {
    const picked = selectAdaptiveQuizQuestions(questions, forThemeId, forDifficulty, questionResults, 6);
    setQuiz(picked);
    setIsWeakMode(false);
    setCurrent(0);
    setCorrectCount(0);
    setResponse("");
    setMissedItems([]);
    setLastQuestionResult(null);
    clearLastAward();
    setStage("in-progress");
  };

  const startWeakAreaQuiz = () => {
    const picked = selectWeakAreaQuestions(questions, questionResults, 8);
    setQuiz(picked);
    setIsWeakMode(true);
    setThemeId(null);
    setCurrent(0);
    setCorrectCount(0);
    setResponse("");
    setMissedItems([]);
    setLastQuestionResult(null);
    clearLastAward();
    setStage("in-progress");
  };

  // Deep-link support: /quiz?theme=sharing-planet jumps straight into that
  // theme's setup, /quiz?mode=weak jumps straight into a weak-areas quiz —
  // both used by ProgressInsights' recommendation links.
  useEffect(() => {
    const mode = searchParams.get("mode");
    const theme = searchParams.get("theme");
    if (mode === "weak") {
      startWeakAreaQuiz();
    } else if (theme && themes.some((t) => t.id === theme)) {
      setThemeId(theme);
    }
    // Only run once on mount — this is a one-time deep-link check, not a live sync.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAnswer = (given: string) => {
    // Guards against double-counting a single question — e.g. the short-answer
    // input's Enter-key handler and its Submit button can both fire in quick
    // succession before React re-renders the disabled state, which would
    // otherwise record two results (and count two "answered") for one question.
    if (!currentQuestion || lastQuestionResult !== null) return;
    const isCorrect = normalizeAnswer(given) === normalizeAnswer(currentQuestion.correctAnswer);
    if (isCorrect) setCorrectCount((c) => c + 1);
    else setMissedItems((prev) => [...prev, currentQuestion]);
    recordQuestionResult(currentQuestion.id, currentQuestion.themeId, currentQuestion.difficulty, isCorrect);
    setLastQuestionResult(isCorrect ? "correct" : "incorrect");
  };

  const advance = () => {
    stopSpeaking();
    setIsSpeaking(false);
    setResponse("");
    setLastQuestionResult(null);
    if (current + 1 < quiz.length) {
      setCurrent((c) => c + 1);
      return;
    }
    if (isWeakMode) {
      // Weak-areas quizzes span multiple themes, so they're logged under a
      // dedicated "mixed-review" id at a nominal medium difficulty rather
      // than any single theme.
      completeQuiz("mixed-review", "medium", correctCount, quiz.length);
    } else if (themeId) {
      completeQuiz(themeId, difficulty, correctCount, quiz.length);
    }
    setStage("results");
  };

  const handleNextClick = () => {
    // Only offer the mini-game break at the very end of the quiz (never
    // between questions) so it can't interrupt a test in progress.
    const isLastQuestion = current + 1 >= quiz.length;
    const total = questionResults.length;
    if (isLastQuestion && total > 0 && total % MINI_GAME_INTERVAL === 0 && miniGameShownAt.current !== total) {
      miniGameShownAt.current = total;
      setShowMiniGame(true);
    } else {
      advance();
    }
  };

  const handleMiniGameFinish = (bonusPoints: number) => {
    awardMiniGameBonus(bonusPoints);
    setShowMiniGame(false);
    advance();
  };

  // Auto-advance shortly after a correct answer — long enough to see the
  // "¡Correcto!" confirmation, short enough not to feel like a wait. Wrong
  // answers still require a manual click on Next, since the student needs
  // time to actually read the correct answer/explanation before moving on.
  // Keeps a ref to the latest handleNextClick so the timer always calls the
  // current closure (with the current question/quiz state) without having
  // to re-run this effect — and therefore reset the timer — on every render.
  const handleNextClickRef = useRef(handleNextClick);
  handleNextClickRef.current = handleNextClick;
  useEffect(() => {
    if (lastQuestionResult !== "correct") return;
    const timer = setTimeout(() => handleNextClickRef.current(), 900);
    return () => clearTimeout(timer);
  }, [lastQuestionResult]);

  const restart = () => {
    stopSpeaking();
    setIsSpeaking(false);
    clearLastAward();
    setIsWeakMode(false);
    setStage("setup");
  };

  return (
    <>
      {showMiniGame && <MiniGameBreak onFinish={handleMiniGameFinish} />}

      {stage === "setup" && (
        <div className="flex flex-col gap-5">
          <div className="rounded-xl border border-brand-200 bg-brand-50 p-4">
            <p className="text-sm text-brand-800">
              The app tracks every answer and adapts: quizzes below prioritize the questions you've struggled with,
              and you can jump straight into a review of your weakest spots.
            </p>
            <button type="button" onClick={startWeakAreaQuiz} className="btn-accent mt-2 w-fit">
              ⚡ Practice my weak areas
            </button>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-slate-900">1. Choose a theme</h2>
            <ThemeSelector
              themes={themes}
              selectedThemeId={themeId}
              onSelect={setThemeId}
              recommendedThemeId={recommendedThemeId}
            />
          </div>
          <div>
            <h2 className="mb-2 text-lg font-bold text-slate-900">2. Choose a difficulty</h2>
            <div className="flex gap-2">
              {DIFFICULTIES.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDifficulty(d)}
                  className={`rounded-full border px-3 py-1.5 text-sm font-medium capitalize ${
                    difficulty === d
                      ? "border-brand-400 bg-brand-100 text-brand-800"
                      : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
          <button type="button" disabled={!themeId} onClick={() => themeId && startQuiz(themeId, difficulty)} className="btn-primary w-fit px-6 py-2.5">
            Start quiz
          </button>
        </div>
      )}

      {stage === "in-progress" && currentQuestion && (
        <div className="mx-auto max-w-xl">
          <p className="mb-2 text-sm text-slate-500">
            Question {current + 1} / {quiz.length} · {currentQuestion.difficulty} · {currentQuestion.points} pts
            {isWeakMode && " · Weak areas review"}
          </p>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            {promptParts.tag && (
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand-500">{promptParts.tag}</p>
            )}
            <p className="mb-4 text-base font-semibold text-slate-900">{promptParts.text}</p>

            {currentQuestion.type === "listening" && (
              <div className="mb-4">
                <button
                  type="button"
                  onClick={togglePlayAudio}
                  className={`btn-outline ${isSpeaking ? "border-red-300 bg-red-50 text-red-700 hover:bg-red-100" : ""}`}
                >
                  {isSpeaking ? "⏹ Stop" : "🔊 Play word"}
                </button>
                {lastQuestionResult && currentQuestion.audioText && (
                  <p className="mt-2 text-xs italic text-slate-500">You heard: &ldquo;{currentQuestion.audioText}&rdquo;</p>
                )}
              </div>
            )}

            {(currentQuestion.type === "mcq" || currentQuestion.type === "listening") && (
              <div className="flex flex-col gap-2">
                {currentQuestion.options?.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    disabled={lastQuestionResult !== null}
                    onClick={() => {
                      setResponse(opt);
                      checkAnswer(opt);
                    }}
                    className={`rounded-md border px-3 py-2 text-left text-sm ${
                      lastQuestionResult && response === opt
                        ? lastQuestionResult === "correct"
                          ? "border-green-400 bg-green-50"
                          : "border-red-400 bg-red-50"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {currentQuestion.type === "short" && (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={response}
                  disabled={lastQuestionResult !== null}
                  onChange={(e) => setResponse(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && response.trim()) checkAnswer(response);
                  }}
                  placeholder="Escribe tu respuesta en español..."
                  className="rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500"
                />
                {lastQuestionResult === null && (
                  <button type="button" onClick={() => checkAnswer(response)} disabled={!response.trim()} className="btn-primary w-fit">
                    Submit answer
                  </button>
                )}
              </div>
            )}

            {currentQuestion.type === "puzzle" && (
              <PuzzleAnswer
                options={currentQuestion.options ?? []}
                disabled={lastQuestionResult !== null}
                onSubmit={(sentence) => {
                  setResponse(sentence);
                  checkAnswer(sentence);
                }}
              />
            )}

            {lastQuestionResult && (
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p
                    className={`text-sm font-medium ${
                      lastQuestionResult === "correct" ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    {lastQuestionResult === "correct"
                      ? "¡Correcto!"
                      : `Incorrect — correct answer: "${currentQuestion.correctAnswer}"`}
                  </p>
                  <button type="button" onClick={handleNextClick} className="btn-primary">
                    {current + 1 < quiz.length ? "Next" : "Finish"}
                  </button>
                </div>
                {currentQuestion.explanation && (
                  <p className="text-xs text-slate-500 italic border-l-2 border-slate-300 pl-2">
                    💡 {currentQuestion.explanation}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {stage === "results" && (
        <div className="mx-auto max-w-xl rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Quiz complete!</h2>
          <p className="mt-2 text-3xl font-extrabold text-brand-600">
            {correctCount} / {quiz.length}
          </p>
          <p className="mt-1 text-sm text-slate-600">
            {isWeakMode ? "Weak areas review" : `Theme: ${selectedTheme?.name} · Difficulty: ${difficulty}`}
          </p>
          {lastAward && (
            <div className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
              <p className="font-semibold">+{lastAward.pointsAwarded} points</p>
              {lastAward.newBadges.length > 0 && (
                <p className="mt-1">
                  New badge{lastAward.newBadges.length > 1 ? "s" : ""}:{" "}
                  {lastAward.newBadges.map((b) => b.name).join(", ")}
                </p>
              )}
              <p className="mt-1 italic">{lastAward.message}</p>
            </div>
          )}
          {missedItems.length > 0 && (
            <div className="mt-4 rounded-lg bg-slate-50 p-3 text-left">
              <p className="mb-2 text-sm font-semibold text-slate-800">Questions to review</p>
              <ul className="flex flex-col gap-1.5">
                {missedItems.map((q) => (
                  <li key={q.id} className="text-xs text-slate-600">
                    <span className="font-medium">{q.prompt}</span> — {q.correctAnswer}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <button type="button" onClick={restart} className="btn-primary">
              Take another quiz
            </button>
            {missedItems.length > 0 && (
              <button type="button" onClick={startWeakAreaQuiz} className="btn-accent">
                Practice weak areas now
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

/** Sentence-ordering puzzle: student clicks scrambled word chips in order,
 *  building a sentence, then submits it for checking. */
function PuzzleAnswer({
  options,
  disabled,
  onSubmit,
}: {
  options: string[];
  disabled: boolean;
  onSubmit: (sentence: string) => void;
}) {
  // Use index-tagged tokens so duplicate words can both be picked.
  const tagged = useMemo(() => options.map((w, i) => `${w}#${i}`), [options]);
  const [picked, setPicked] = useState<string[]>([]);
  const available = tagged.filter((t) => !picked.includes(t));

  const words = (tokens: string[]) => tokens.map((t) => t.split("#")[0]);

  const removeAt = (index: number) => {
    setPicked((p) => p.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="mb-3 flex min-h-[2.5rem] flex-wrap gap-2 rounded-md border border-dashed border-slate-300 p-2">
        {picked.length === 0 && <span className="text-sm text-slate-400">Click words below in order...</span>}
        {picked.map((t, i) => (
          <button
            key={t}
            type="button"
            disabled={disabled}
            onClick={() => removeAt(i)}
            title="Remove this word"
            className="flex items-center gap-1.5 rounded bg-brand-100 px-2 py-1 text-sm text-brand-700 hover:bg-brand-200"
          >
            {t.split("#")[0]}
            <span className="text-brand-500">✕</span>
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {available.map((t) => (
          <button
            key={t}
            type="button"
            disabled={disabled}
            onClick={() => setPicked((p) => [...p, t])}
            className="rounded border border-slate-200 px-2 py-1 text-sm hover:bg-slate-50"
          >
            {t.split("#")[0]}
          </button>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <button type="button" disabled={disabled || picked.length === 0} onClick={() => setPicked([])} className="btn-outline">
          Reset
        </button>
        <button
          type="button"
          disabled={disabled || picked.length !== tagged.length}
          onClick={() => onSubmit(words(picked).join(" "))}
          className="btn-primary"
        >
          Submit sentence
        </button>
      </div>
    </div>
  );
}

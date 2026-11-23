/// File: src/components/QuizModule.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import ThemeSelector from "./ThemeSelector";
import ColorSplash from "./ColorSplash";
import { useStore } from "@/lib/store";
import { selectAdaptiveQuizQuestions, selectWeakAreaQuestions, weakestTheme } from "@/lib/analytics";
import { speak, stopSpeaking } from "@/lib/speech";
import { Difficulty, QuizItem } from "@/lib/types";
import { shuffle, uniqueVocab } from "@/lib/utils";
import { GRAMMAR_TOPICS, loadExercises } from "@/lib/grammar";
import { READING_PASSAGES } from "@/lib/reading";
import { PODCAST_EPISODES } from "@/lib/podcast";
import { getSpanishVoices } from "@/lib/speech";
import { LEVEL_STYLES, OPTION_LETTERS, TYPE_ICON } from "@/lib/quizUi";

const DIFFICULTIES: Difficulty[] = ["easy", "medium", "hard"];
/** Show a 50-second "brain break" mini-game every time the student's
 *  lifetime answered-question count crosses a multiple of this. */

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
    lastAward,
    clearLastAward,
    setActiveSession,
  } = useStore();
  const searchParams = useSearchParams();

  const [stage, setStage] = useState<Stage>("setup");
  const [themeId, setThemeId] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  // Quiz length (questions per quiz) and an optional listening-focus mode.
  const [quizLength, setQuizLength] = useState(6);
  // One focus mode at a time: adaptive (default), listening words, exam mix, reading passage, or podcast.
  // Spanish voices available in this browser, for the audio-question voice picker.
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceURI, setVoiceURI] = useState<string | undefined>(undefined);
  useEffect(() => {
    const load = () => setVoices(getSpanishVoices());
    load();
    window.speechSynthesis?.addEventListener?.("voiceschanged", load);
    return () => window.speechSynthesis?.removeEventListener?.("voiceschanged", load);
  }, []);
  const [focus, setFocus] = useState<"adaptive" | "listening" | "exam" | "reading" | "podcast">("adaptive");
  const listeningFocus = focus === "listening";
  const examMix = focus === "exam";
  const readingFocus = focus === "reading";
  const podcastFocus = focus === "podcast";
  // Optional subtopic filter and an exam-style mix (vocabulary + grammar).
  const [subtopic, setSubtopic] = useState<string | null>(null);
  const [quiz, setQuiz] = useState<QuizItem[]>([]);
  const [isWeakMode, setIsWeakMode] = useState(false);
  const [current, setCurrent] = useState(0);
  const [response, setResponse] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [lastQuestionResult, setLastQuestionResult] = useState<"correct" | "incorrect" | null>(null);
  const [missedItems, setMissedItems] = useState<QuizItem[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

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
    // Slightly slower than natural speed, with the voice the student picked (if any).
    speak(currentQuestion.audioText, () => setIsSpeaking(false), { rate: 0.9, voiceURI });
  };

  const recommendedThemeId = useMemo(() => weakestTheme(questionResults, themes)?.themeId ?? null, [questionResults, themes]);
  const selectedTheme = useMemo(() => themes.find((t) => t.id === themeId) ?? null, [themes, themeId]);

  // Listening-focus quiz: each question plays one theme word and asks for its English
  // meaning. Built from the theme vocabulary, so it adds listening practice without new data.
  const buildListeningQuiz = (forThemeId: string, forDifficulty: Difficulty, count: number): QuizItem[] => {
    const theme = themes.find((t) => t.id === forThemeId);
    const vocab = uniqueVocab((theme?.vocabulary ?? []).filter((v) => !subtopic || v.subtopic === subtopic));
    return shuffle(vocab)
      .slice(0, count)
      .map((v, i) => {
        const wrong = shuffle(vocab.filter((w) => w.en !== v.en)).slice(0, 3).map((w) => w.en);
        return {
          id: `listen-${forThemeId}-${i}-${v.es}`,
          themeId: forThemeId,
          type: "listening" as const,
          prompt: "Escucha la palabra y elige su significado en inglés.",
          options: shuffle([v.en, ...wrong]),
          correctAnswer: v.en,
          audioText: v.es,
          difficulty: forDifficulty,
          points: 10,
        };
      });
  };

  // Exam-mix half: grammar exercises from across the grammar topics, shaped like quiz items.
  const buildGrammarQuizItems = async (forThemeId: string, forDifficulty: Difficulty, count: number): Promise<QuizItem[]> => {
    const topics = GRAMMAR_TOPICS.filter((t) => t.id !== "listening-tenses" && t.id !== "heading-matching" && t.id !== "gap-fill");
    const lists = await Promise.all(
      shuffle(topics)
        .slice(0, 8)
        .map(async (t) => (await loadExercises(t.id)).map((ex) => ({ ex, topic: t.id })))
    );
    return shuffle(lists.flat())
      .filter(({ ex }) => ex.type === "mcq" || ex.type === "short")
      .slice(0, count)
      .map(({ ex, topic }) => ({
        id: `gram-${topic}-${ex.id}`,
        themeId: forThemeId,
        type: ex.type === "short" ? ("short" as const) : ("mcq" as const),
        prompt: ex.prompt,
        options: ex.type === "mcq" ? ex.options : undefined,
        correctAnswer: ex.correctAnswer,
        difficulty: forDifficulty,
        points: 10,
        explanation: ex.tip ?? ex.explanation,
      }));
  };

  // Reading and podcast focus: one passage or episode from the theme. Its questions are
  // shown one by one. True/false items become Verdadero/Falso choices.
  type SourceQuestion = { id: string; type: string; prompt: string; options?: string[]; correctAnswer: string; justification?: string };
  const passageQuestionItems = (
    source: { id: string; themeId: string; level: Difficulty; bodyEs: string; questions: SourceQuestion[] },
    forDifficulty: Difficulty,
    showText: boolean,
    audio: boolean
  ): QuizItem[] =>
    source.questions.map((q) => {
      const base = {
        id: `pass-${source.id}-${q.id}`,
        themeId: source.themeId,
        prompt: q.prompt,
        difficulty: forDifficulty,
        points: 10,
        explanation: q.justification ? `Evidencia en el texto: ${q.justification}` : undefined,
        context: showText ? source.bodyEs : undefined,
        audioText: audio ? source.bodyEs : undefined,
      };
      if (q.type === "true-false") {
        return { ...base, type: "mcq" as const, options: ["Verdadero", "Falso"], correctAnswer: q.correctAnswer === "true" ? "Verdadero" : "Falso" };
      }
      if (q.type === "mcq") return { ...base, type: "mcq" as const, options: q.options, correctAnswer: q.correctAnswer };
      return { ...base, type: "short" as const, correctAnswer: q.correctAnswer };
    });

  // Draws from several passages (or episodes) of the theme until `count` questions are collected,
  // so a 10-question quiz is not cut short when one passage has only 8 questions.
  const collectQuestions = <T,>(sources: T[], toItems: (source: T) => QuizItem[], count: number): QuizItem[] => {
    const out: QuizItem[] = [];
    for (const source of shuffle(sources)) {
      if (out.length >= count) break;
      out.push(...toItems(source));
    }
    return out.slice(0, Math.max(count, 1));
  };

  const buildPassageQuiz = (forThemeId: string, forDifficulty: Difficulty, count: number): QuizItem[] =>
    collectQuestions(READING_PASSAGES.filter((p) => p.themeId === forThemeId), (p) => passageQuestionItems(p, forDifficulty, true, false), count);

  // The transcript stays hidden; the student listens with the play button.
  const buildPodcastQuiz = (forThemeId: string, forDifficulty: Difficulty, count: number): QuizItem[] =>
    collectQuestions(PODCAST_EPISODES.filter((e) => e.themeId === forThemeId), (e) => passageQuestionItems(e, forDifficulty, false, true), count);

  const startQuiz = async (forThemeId: string, forDifficulty: Difficulty) => {
    // Subtopic filter applies to vocabulary-based questions.
    const themeBank = subtopic ? questions.filter((q) => q.themeId === forThemeId && q.subtopic === subtopic) : questions;
    let picked: QuizItem[];
    if (listeningFocus) {
      picked = buildListeningQuiz(forThemeId, forDifficulty, quizLength);
    } else if (readingFocus) {
      picked = buildPassageQuiz(forThemeId, forDifficulty, quizLength);
    } else if (podcastFocus) {
      picked = buildPodcastQuiz(forThemeId, forDifficulty, quizLength);
    } else if (examMix) {
      const half = Math.floor(quizLength / 2);
      const vocabPart = selectAdaptiveQuizQuestions(themeBank, forThemeId, forDifficulty, questionResults, quizLength - half);
      const grammarPart = await buildGrammarQuizItems(forThemeId, forDifficulty, half);
      picked = shuffle([...vocabPart, ...grammarPart]);
    } else {
      picked = selectAdaptiveQuizQuestions(themeBank, forThemeId, forDifficulty, questionResults, quizLength);
    }
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
              onSelect={(id) => {
                setThemeId(id);
                setSubtopic(null);
              }}
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
                  className={`rounded-full border px-3 py-1.5 text-sm font-medium capitalize transition ${
                    difficulty === d ? `border-transparent ${LEVEL_STYLES[d]}` : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
          {themeId && (
            <div>
              <h2 className="mb-2 text-lg font-bold text-slate-900">Subtopic (optional)</h2>
              <div className="flex flex-wrap gap-2">
                {["All", ...(themes.find((t) => t.id === themeId)?.subtopics ?? [])].map((sub) => {
                  const value = sub === "All" ? null : sub;
                  const active = subtopic === value;
                  return (
                    <button
                      key={sub}
                      type="button"
                      onClick={() => setSubtopic(value)}
                      aria-pressed={active}
                      className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                        active ? "border-brand-400 bg-brand-100 text-brand-800" : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {sub}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          <div>
            <h2 className="mb-2 text-lg font-bold text-slate-900">3. Choose options</h2>
            <div className="flex flex-wrap items-center gap-2">
              {[6, 10, 15].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setQuizLength(n)}
                  className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                    quizLength === n ? "border-brand-400 bg-brand-100 text-brand-800" : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {n} questions
                </button>
              ))}
              <button
                type="button"
                onClick={() => setFocus((f) => (f === "listening" ? "adaptive" : "listening"))}
                aria-pressed={listeningFocus}
                className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                  listeningFocus ? "border-amber-400 bg-amber-100 text-amber-800" : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                🎧 Listening focus
              </button>
              <button
                type="button"
                onClick={() => setFocus((f) => (f === "exam" ? "adaptive" : "exam"))}
                aria-pressed={examMix}
                className={`rounded-full border px-3 py-1.5 text-sm font-medium transition disabled:opacity-50 ${
                  examMix ? "border-brand-400 bg-brand-100 text-brand-800" : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                📚 Exam mix (vocab + grammar)
              </button>
              <button
                type="button"
                onClick={() => setFocus((f) => (f === "reading" ? "adaptive" : "reading"))}
                aria-pressed={readingFocus}
                className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                  readingFocus ? "border-green-400 bg-green-100 text-green-800" : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                📖 Reading passage
              </button>
              <button
                type="button"
                onClick={() => setFocus((f) => (f === "podcast" ? "adaptive" : "podcast"))}
                aria-pressed={podcastFocus}
                className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                  podcastFocus ? "border-rose-400 bg-rose-100 text-rose-800" : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                🎙️ Podcast listening
              </button>
            </div>
            {listeningFocus && (
              <p className="mt-2 text-xs text-slate-500">Each question plays a theme word aloud. Choose its English meaning.</p>
            )}
          </div>
          <button
            type="button"
            disabled={!themeId}
            onClick={() => themeId && startQuiz(themeId, difficulty)}
            className="btn-primary w-fit px-6 py-2.5"
          >
            Start quiz →
          </button>
        </div>
      )}

      {stage === "in-progress" && currentQuestion && (
        <div className="max-w-2xl">
          {/* Progress bar + status row, replacing the old plain-text "Question 1/6" line */}
          <div className="mb-3 flex items-center gap-3">
            <div className="flex flex-1 gap-1">
              {quiz.map((q, i) => (
                <div
                  key={q.id}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    i < current ? "bg-brand-400" : i === current ? "bg-brand-300" : "bg-slate-100"
                  }`}
                />
              ))}
            </div>
            <span className="shrink-0 text-xs font-medium text-slate-500">
              {current + 1} / {quiz.length}
            </span>
          </div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${LEVEL_STYLES[currentQuestion.difficulty]}`}>
              {currentQuestion.difficulty}
            </span>
            <span className="pill-badge">⭐ {currentQuestion.points} pts</span>
            {isWeakMode && <span className="pill-badge">⚡ Weak areas review</span>}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
            <div className="mb-3 flex items-start gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm">
                {TYPE_ICON[currentQuestion.type]}
              </span>
              <div className="min-w-0 flex-1 pt-1">
                {currentQuestion.context && (
                  <details open className="mb-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
                    <summary className="cursor-pointer text-xs font-semibold uppercase tracking-wide text-slate-500">Read the text</summary>
                    <div className="mt-2 flex flex-col gap-2 text-sm leading-relaxed text-slate-700">
                      {currentQuestion.context.split("\n\n").map((para, i) => (
                        <p key={i} className="whitespace-pre-line">{para}</p>
                      ))}
                    </div>
                  </details>
                )}
                {promptParts.tag && (
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand-500">{promptParts.tag}</p>
                )}
                <p className="text-base font-semibold leading-snug text-slate-900">{promptParts.text}</p>
              </div>
            </div>

            {(currentQuestion.type === "listening" || (currentQuestion.audioText && !currentQuestion.context)) && (
              <div className="mb-4 pl-[42px]">
                <button
                  type="button"
                  onClick={togglePlayAudio}
                  className={`btn-outline ${isSpeaking ? "border-red-300 bg-red-50 text-red-700 hover:bg-red-100" : ""}`}
                >
                  {isSpeaking ? "⏹ Stop" : currentQuestion.type === "listening" ? "🔊 Play word" : "🔊 Play episode"}
                </button>
                {voices.length > 0 && (
                  <label className="ml-2 inline-flex items-center gap-1.5 text-xs text-slate-500">
                    Voice
                    <select
                      value={voiceURI ?? ""}
                      onChange={(e) => setVoiceURI(e.target.value || undefined)}
                      className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700"
                    >
                      <option value="">Default Spanish voice</option>
                      {voices.map((v) => (
                        <option key={v.voiceURI} value={v.voiceURI}>
                          {v.name}
                        </option>
                      ))}
                    </select>
                  </label>
                )}
                {lastQuestionResult && currentQuestion.audioText && (
                  <p className="mt-2 text-xs italic text-slate-500">You heard: &ldquo;{currentQuestion.audioText}&rdquo;</p>
                )}
              </div>
            )}

            {(currentQuestion.type === "mcq" || currentQuestion.type === "listening") && (
              <div className="flex flex-col gap-2 pl-[42px]">
                {currentQuestion.options?.map((opt, i) => {
                  const picked = lastQuestionResult && response === opt;
                  const isRightAnswer = lastQuestionResult && opt === currentQuestion.correctAnswer;
                  return (
                    <button
                      key={opt}
                      type="button"
                      disabled={lastQuestionResult !== null}
                      onClick={() => {
                        setResponse(opt);
                        checkAnswer(opt);
                      }}
                      className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition ${
                        isRightAnswer
                          ? "border-green-400 bg-green-50 text-green-900"
                          : picked
                          ? "border-red-400 bg-red-50 text-red-900"
                          : "border-slate-200 hover:border-brand-300 hover:bg-slate-50"
                      } disabled:cursor-default`}
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          isRightAnswer
                            ? "bg-green-500 text-white"
                            : picked
                            ? "bg-red-500 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {OPTION_LETTERS[i] ?? i + 1}
                      </span>
                      <span className="flex-1">{opt}</span>
                      {isRightAnswer && <span className="text-green-600">✓</span>}
                      {picked && !isRightAnswer && <span className="text-red-600">✕</span>}
                    </button>
                  );
                })}
              </div>
            )}

            {currentQuestion.type === "short" && (
              <div className="flex flex-col gap-2 pl-[42px]">
                <input
                  type="text"
                  value={response}
                  disabled={lastQuestionResult !== null}
                  onChange={(e) => setResponse(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && response.trim()) checkAnswer(response);
                  }}
                  placeholder="Escribe tu respuesta en español..."
                  className="rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                />
                {lastQuestionResult === null && (
                  <button type="button" onClick={() => checkAnswer(response)} disabled={!response.trim()} className="btn-primary w-fit">
                    Submit answer
                  </button>
                )}
              </div>
            )}

            {currentQuestion.type === "puzzle" && (
              <div className="pl-[42px]">
                <PuzzleAnswer
                  // Forces a fresh mount (and therefore a reset `picked` state) on every
                  // question — without this, two consecutive puzzle-type questions reuse
                  // the same component instance and the previous question's picked-word
                  // chips bleed into the new one, leaving Submit checking a stale/garbage
                  // sentence instead of the words actually shown.
                  key={currentQuestion.id}
                  options={currentQuestion.options ?? []}
                  disabled={lastQuestionResult !== null}
                  onSubmit={(sentence) => {
                    setResponse(sentence);
                    checkAnswer(sentence);
                  }}
                />
              </div>
            )}

            {lastQuestionResult && (
              <div className="mt-4 ml-[42px] flex flex-col gap-2">
                <div
                  className={`flex flex-wrap items-center justify-between gap-2 rounded-lg px-3.5 py-2.5 ${
                    lastQuestionResult === "correct" ? "bg-green-50" : "bg-red-50"
                  }`}
                >
                  <p
                    className={`flex items-center gap-1.5 text-sm font-medium ${
                      lastQuestionResult === "correct" ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    {lastQuestionResult === "correct" ? (
                      <>✓ ¡Correcto!</>
                    ) : (
                      <>✕ Incorrect — correct answer: &ldquo;{currentQuestion.correctAnswer}&rdquo;</>
                    )}
                  </p>
                  <button type="button" onClick={handleNextClick} className="btn-primary">
                    {current + 1 < quiz.length ? "Next →" : "Finish"}
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

      {stage === "results" && (() => {
        const pct = quiz.length > 0 ? Math.round((correctCount / quiz.length) * 100) : 0;
        const ringColor = pct >= 80 ? "text-green-500" : pct >= 50 ? "text-amber-500" : "text-rose-500";
        return (
          <div className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-xs">
            <h2 className="text-xl font-bold text-slate-900">Quiz complete!</h2>

            <div className="relative mx-auto my-5 flex h-32 w-32 items-center justify-center">
              <ColorSplash />
              <svg viewBox="0 0 100 100" className="h-32 w-32 -rotate-90">
                <circle cx="50" cy="50" r="44" fill="none" strokeWidth="8" className="stroke-slate-100" />
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 44}`}
                  strokeDashoffset={`${2 * Math.PI * 44 * (1 - pct / 100)}`}
                  className={`${ringColor} transition-all duration-700`}
                  stroke="currentColor"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-extrabold text-slate-900">{pct}%</span>
                <span className="text-xs text-slate-500">
                  {correctCount}/{quiz.length}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600">
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
        );
      })()}
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
      <div className="mb-3 flex min-h-[3rem] flex-wrap items-center gap-2 rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 p-2.5">
        {picked.length === 0 && <span className="px-1 text-sm text-slate-400">Click words below in order...</span>}
        {picked.map((t, i) => (
          <button
            key={t}
            type="button"
            disabled={disabled}
            onClick={() => removeAt(i)}
            title="Remove this word"
            className="flex items-center gap-1.5 rounded-full bg-brand-100 py-1.5 pl-3 pr-2 text-sm font-medium text-brand-800 shadow-xs transition hover:bg-brand-200 disabled:cursor-default"
          >
            <span className="text-[10px] font-bold text-brand-500">{i + 1}</span>
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
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-slate-50 hover:shadow-xs disabled:cursor-default"
          >
            {t.split("#")[0]}
          </button>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2">
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
        {!disabled && (
          <span className="text-xs text-slate-400">
            {picked.length} / {tagged.length} words
          </span>
        )}
      </div>
    </div>
  );
}

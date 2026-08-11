/// File: src/components/VocabularyModule.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useStore } from "@/lib/store";
import { speak, stopSpeaking } from "@/lib/speech";
import { shuffle } from "@/lib/utils";
import { QuizItem, Theme, VocabItem } from "@/lib/types";
import { LEVEL_STYLES, OPTION_LETTERS, TYPE_ICON } from "@/lib/quizUi";
import ThemeSelector from "./ThemeSelector";
import VocabList from "./VocabList";
import ColorSplash from "./ColorSplash";

type Tab = "reference" | "learn" | "quiz";
type QuizStage = "setup" | "in-progress" | "results";

const TAB_LABEL: Record<Tab, string> = { reference: "📖 Reference", learn: "🧠 Learn", quiz: "📝 Quiz" };

const stripAccents = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
const normalizeAnswer = (s: string) => stripAccents(s.trim().toLowerCase());
/** Drops a leading Spanish article ("el acento" -> "acento") so Learn mode
 *  drills the noun itself rather than the gender article in front of it. */
const stripArticle = (es: string) => es.replace(/^(el|la|los|las|un|una|unos|unas)\s+/i, "");

/** Dedicated vocabulary hub, separate from Practice by Theme (which keeps its
 *  matching-game/fill-in-blank/listening exercises): a "Reference" tab to
 *  browse and search all 5 themes' vocabulary side by side (same pattern as
 *  the Grammar Cheat Sheet), a "Learn" tab (Quizlet Learn-style drill: each
 *  word is a multiple-choice meaning check immediately followed by a
 *  free-response recall of the same word), and a "Quiz" tab for pure
 *  vocabulary-only testing — pulling only the vocab-generator's questions
 *  (ids prefixed `${themeId}-v`) rather than the full mixed QUESTION_BANK,
 *  and skipping puzzle-type items since the sentence-builder UI is specific
 *  to QuizModule. */
export default function VocabularyModule() {
  const { themes } = useStore();
  const [tab, setTab] = useState<Tab>("reference");
  const [referenceThemeId, setReferenceThemeId] = useState(themes[0].id);
  const referenceTheme = themes.find((t) => t.id === referenceThemeId) ?? themes[0];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2 border-b border-slate-200">
        {(["reference", "learn", "quiz"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`-mb-px border-b-2 px-3 py-2 text-sm font-semibold capitalize transition ${
              tab === t ? "border-brand-500 text-brand-700" : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            {TAB_LABEL[t]}
          </button>
        ))}
      </div>

      {tab === "reference" && (
        <div className="flex flex-col gap-4">
          <nav className="flex gap-2 overflow-x-auto pb-1">
            {themes.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setReferenceThemeId(t.id)}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                  t.id === referenceThemeId
                    ? "border-brand-400 bg-brand-50 text-brand-800"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                {t.name}
              </button>
            ))}
          </nav>
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <VocabList key={referenceThemeId} vocabulary={referenceTheme.vocabulary} />
          </div>
        </div>
      )}

      {tab === "learn" && <VocabularyLearn />}

      {tab === "quiz" && <VocabularyQuiz />}
    </div>
  );
}

interface LearnItem {
  v: VocabItem;
  mcq: QuizItem;
  free: QuizItem;
}

/** One question instance in a Learn session's queue. `attempt` starts at 1;
 *  when a slot is answered incorrectly a fresh copy with `attempt + 1` is
 *  spliced back into the queue a few questions later, so a missed word comes
 *  back around for another try instead of the session just moving on. */
interface QueueSlot {
  key: string;
  item: LearnItem;
  phase: "mcq" | "free";
  attempt: number;
}

const LEARN_SESSION_SIZE = 10;
const RETRY_MIN_GAP = 3;
const RETRY_MAX_GAP = 6;

/** Pairs each vocabulary word with its auto-generated "meaning" MCQ (`-mcq-en`)
 *  and "type the Spanish word" free-response question (`-type-es`) from the
 *  same vocab-generator pass that powers the Quiz tab — index `i` here matches
 *  the `${themeId}-v${i}-...` ids assigned in data.ts's buildVocabQuestions,
 *  so distractors/explanations stay identical instead of being reinvented. */
function buildLearnQueue(theme: Theme, questions: QuizItem[]): LearnItem[] {
  const items: LearnItem[] = [];
  theme.vocabulary.forEach((v, i) => {
    const mcq = questions.find((q) => q.id === `${theme.id}-v${i}-mcq-en`);
    const free = questions.find((q) => q.id === `${theme.id}-v${i}-type-es`);
    if (mcq && free) items.push({ v, mcq, free });
  });
  return shuffle(items).slice(0, LEARN_SESSION_SIZE);
}

/** Builds the initial question sequence: every word's MCQ first, in shuffled
 *  order, then each word's free-response slot spliced in at a random later
 *  point (at least one other question away from its own MCQ) — so a word's
 *  two questions are never adjacent and the ordering is different each run. */
function buildInitialSlotQueue(items: LearnItem[]): QueueSlot[] {
  const queue: QueueSlot[] = shuffle(items.map((item, i) => ({ key: `${item.v.es}-mcq-${i}`, item, phase: "mcq" as const, attempt: 1 })));
  items.forEach((item, i) => {
    const mcqPos = queue.findIndex((s) => s.item === item && s.phase === "mcq");
    const minPos = mcqPos + 2;
    const insertPos = minPos > queue.length ? queue.length : minPos + Math.floor(Math.random() * (queue.length - minPos + 1));
    queue.splice(insertPos, 0, { key: `${item.v.es}-free-${i}`, item, phase: "free", attempt: 1 });
  });
  return queue;
}

function VocabularyLearn() {
  const { themes, questions, recordQuestionResult, completeQuiz, lastAward, clearLastAward, setActiveSession } = useStore();

  const [stage, setStage] = useState<QuizStage>("setup");
  const [themeId, setThemeId] = useState<string | null>(null);
  const [queue, setQueue] = useState<QueueSlot[]>([]);
  const [pointer, setPointer] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [mcqResponse, setMcqResponse] = useState<string | null>(null);
  const [mcqResult, setMcqResult] = useState<"correct" | "incorrect" | null>(null);
  const [freeResponse, setFreeResponse] = useState("");
  const [freeResult, setFreeResult] = useState<"correct" | "incorrect" | null>(null);
  const [firstTryCorrectCount, setFirstTryCorrectCount] = useState(0);
  const [missedWords, setMissedWords] = useState<VocabItem[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => stopSpeaking, []);

  useEffect(() => {
    setActiveSession(stage === "in-progress");
    return () => setActiveSession(false);
  }, [stage, setActiveSession]);

  const selectedTheme = themes.find((t) => t.id === themeId) ?? null;
  const current = queue[pointer];
  const result = current?.phase === "mcq" ? mcqResult : freeResult;

  const togglePlayWord = () => {
    if (!current) return;
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
      return;
    }
    setIsSpeaking(true);
    speak(current.item.v.es, () => setIsSpeaking(false));
  };

  const startLearn = (forThemeId: string) => {
    const theme = themes.find((t) => t.id === forThemeId);
    if (!theme) return;
    const items = buildLearnQueue(theme, questions);
    setQueue(buildInitialSlotQueue(items));
    setPointer(0);
    setTotalQuestions(items.length * 2);
    setMcqResponse(null);
    setMcqResult(null);
    setFreeResponse("");
    setFreeResult(null);
    setFirstTryCorrectCount(0);
    setMissedWords([]);
    clearLastAward();
    setStage("in-progress");
  };

  const addMissed = (word: VocabItem) => {
    setMissedWords((prev) => (prev.some((w) => w.es === word.es) ? prev : [...prev, word]));
  };

  const requeueCurrent = (slot: QueueSlot, atPointer: number) => {
    setQueue((prev) => {
      const gap = RETRY_MIN_GAP + Math.floor(Math.random() * (RETRY_MAX_GAP - RETRY_MIN_GAP + 1));
      const insertPos = Math.min(atPointer + gap, prev.length);
      const next = [...prev];
      next.splice(insertPos, 0, { ...slot, key: `${slot.key}-r${slot.attempt + 1}`, attempt: slot.attempt + 1 });
      return next;
    });
  };

  const checkMcq = (opt: string) => {
    if (!current || current.phase !== "mcq" || mcqResult !== null) return;
    const isCorrect = opt === current.item.mcq.correctAnswer;
    setMcqResponse(opt);
    setMcqResult(isCorrect ? "correct" : "incorrect");
    if (isCorrect) {
      if (current.attempt === 1) setFirstTryCorrectCount((c) => c + 1);
    } else {
      addMissed(current.item.v);
      requeueCurrent(current, pointer);
    }
    recordQuestionResult(current.item.mcq.id, current.item.mcq.themeId, current.item.mcq.difficulty, isCorrect);
  };

  const checkFree = () => {
    if (!current || current.phase !== "free" || freeResult !== null || !freeResponse.trim()) return;
    const isCorrect = normalizeAnswer(freeResponse) === normalizeAnswer(stripArticle(current.item.free.correctAnswer));
    setFreeResult(isCorrect ? "correct" : "incorrect");
    if (isCorrect) {
      if (current.attempt === 1) setFirstTryCorrectCount((c) => c + 1);
    } else {
      addMissed(current.item.v);
      requeueCurrent(current, pointer);
    }
    recordQuestionResult(current.item.free.id, current.item.free.themeId, current.item.free.difficulty, isCorrect);
  };

  const advance = () => {
    stopSpeaking();
    setIsSpeaking(false);
    if (pointer + 1 < queue.length) {
      setPointer((p) => p + 1);
      setMcqResponse(null);
      setMcqResult(null);
      setFreeResponse("");
      setFreeResult(null);
      return;
    }
    if (themeId) completeQuiz(`vocab-learn-${themeId}`, "medium", firstTryCorrectCount, totalQuestions);
    setStage("results");
  };

  // Auto-advance on correct, same pattern/reasoning as VocabularyQuiz.
  const advanceRef = useRef(advance);
  advanceRef.current = advance;
  useEffect(() => {
    if (result !== "correct") return;
    const timer = setTimeout(() => advanceRef.current(), 900);
    return () => clearTimeout(timer);
  }, [result]);

  const restart = () => {
    stopSpeaking();
    setIsSpeaking(false);
    clearLastAward();
    setStage("setup");
  };

  if (stage === "setup") {
    return (
      <div className="flex flex-col gap-5">
        <p className="text-sm text-slate-600">
          Quizlet Learn-style drill: every word starts as multiple choice; later in the (randomized) session
          you&apos;ll be asked to type it from memory. Anything you get wrong comes back around for another try.
        </p>
        <ThemeSelector themes={themes} selectedThemeId={themeId} onSelect={setThemeId} />
        <button type="button" disabled={!themeId} onClick={() => themeId && startLearn(themeId)} className="btn-primary w-fit px-6 py-2.5">
          Start learning
        </button>
      </div>
    );
  }

  if (stage === "in-progress" && current) {
    const q = current.phase === "mcq" ? current.item.mcq : current.item.free;
    // Both phases quote the bare noun (no leading article) so the drill focuses on the word itself.
    const promptText =
      current.phase === "mcq" ? `¿Qué significa '${stripArticle(current.item.v.es)}'?` : q.prompt;
    const displayCorrectAnswer = current.phase === "free" ? stripArticle(q.correctAnswer) : q.correctAnswer;
    const masteredPct = totalQuestions > 0 ? Math.round((firstTryCorrectCount / totalQuestions) * 100) : 0;
    return (
      <div className="max-w-2xl">
        <div className="mb-3 flex items-center gap-3">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-brand-400 transition-all duration-500" style={{ width: `${masteredPct}%` }} />
          </div>
          <span className="shrink-0 text-xs font-medium text-slate-500">
            {firstTryCorrectCount}/{totalQuestions} mastered
          </span>
        </div>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${LEVEL_STYLES[q.difficulty]}`}>
            {q.difficulty}
          </span>
          <span className="pill-badge">{selectedTheme?.name}</span>
          <span className="pill-badge">{current.phase === "mcq" ? "Multiple choice" : "Type from memory"}</span>
          {current.attempt > 1 && <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">🔁 Retry</span>}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-start gap-2.5">
            <button
              type="button"
              onClick={togglePlayWord}
              aria-label={`Play pronunciation of ${current.item.v.es}`}
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm transition ${
                isSpeaking ? "bg-brand-200 text-brand-800" : "bg-brand-50 text-slate-500 hover:bg-brand-100"
              }`}
            >
              {isSpeaking ? "⏹" : TYPE_ICON[q.type]}
            </button>
            <p className="flex-1 pt-1 text-base font-semibold leading-snug text-slate-900">{promptText}</p>
          </div>

          {current.phase === "mcq" && (
            <div className="flex flex-col gap-2 pl-[42px]">
              {current.item.mcq.options?.map((opt, i) => {
                const picked = mcqResult && mcqResponse === opt;
                const isRightAnswer = mcqResult && opt === current.item.mcq.correctAnswer;
                return (
                  <button
                    key={opt}
                    type="button"
                    disabled={mcqResult !== null}
                    onClick={() => checkMcq(opt)}
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
                        isRightAnswer ? "bg-green-500 text-white" : picked ? "bg-red-500 text-white" : "bg-slate-100 text-slate-500"
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

          {current.phase === "free" && (
            <div className="flex flex-col gap-2 pl-[42px]">
              <input
                type="text"
                value={freeResponse}
                disabled={freeResult !== null}
                onChange={(e) => setFreeResponse(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && freeResponse.trim()) checkFree();
                }}
                placeholder="Escribe la palabra en español (sin el artículo)..."
                className="rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
              {freeResult === null && (
                <button type="button" onClick={checkFree} disabled={!freeResponse.trim()} className="btn-primary w-fit">
                  Submit answer
                </button>
              )}
            </div>
          )}

          {result && (
            <div className="mt-4 ml-[42px] flex flex-col gap-2">
              <div className={`flex flex-wrap items-center justify-between gap-2 rounded-lg px-3.5 py-2.5 ${result === "correct" ? "bg-green-50" : "bg-red-50"}`}>
                <p className={`flex items-center gap-1.5 text-sm font-medium ${result === "correct" ? "text-green-700" : "text-red-700"}`}>
                  {result === "correct" ? (
                    <>✓ ¡Correcto!</>
                  ) : (
                    <>✕ Incorrect — correct answer: &ldquo;{displayCorrectAnswer}&rdquo; (you&apos;ll see this word again soon)</>
                  )}
                </p>
                <button type="button" onClick={advance} className="btn-primary">
                  {pointer + 1 < queue.length ? "Next →" : "Finish"}
                </button>
              </div>
              {q.explanation && <p className="border-l-2 border-slate-300 pl-2 text-xs italic text-slate-500">💡 {q.explanation}</p>}
            </div>
          )}
        </div>
      </div>
    );
  }

  const pct = totalQuestions > 0 ? Math.round((firstTryCorrectCount / totalQuestions) * 100) : 0;
  const ringColor = pct >= 80 ? "text-green-500" : pct >= 50 ? "text-amber-500" : "text-rose-500";
  return (
    <div className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">Learn session complete!</h2>

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
            {firstTryCorrectCount}/{totalQuestions} first try
          </span>
        </div>
      </div>

      <p className="text-sm text-slate-600">
        {selectedTheme?.name} · every word mastered
      </p>
      {lastAward && (
        <div className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
          <p className="font-semibold">+{lastAward.pointsAwarded} points</p>
          {lastAward.newBadges.length > 0 && (
            <p className="mt-1">New badge{lastAward.newBadges.length > 1 ? "s" : ""}: {lastAward.newBadges.map((b) => b.name).join(", ")}</p>
          )}
        </div>
      )}
      {missedWords.length > 0 && (
        <div className="mt-4 rounded-lg bg-slate-50 p-3 text-left">
          <p className="mb-2 text-sm font-semibold text-slate-800">Words that needed a retry</p>
          <ul className="flex flex-col gap-1.5">
            {missedWords.map((w) => (
              <li key={w.es} className="text-xs text-slate-600">
                <span className="font-medium">{w.es}</span> — {w.en}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        <button type="button" onClick={() => themeId && startLearn(themeId)} className="btn-accent">
          Practice again
        </button>
        <button type="button" onClick={restart} className="btn-outline">
          Choose another theme
        </button>
      </div>
    </div>
  );
}

function VocabularyQuiz() {
  const { themes, questions, recordQuestionResult, completeQuiz, lastAward, clearLastAward, setActiveSession } = useStore();

  const [stage, setStage] = useState<QuizStage>("setup");
  const [themeId, setThemeId] = useState<string | null>(null);
  const [quiz, setQuiz] = useState<QuizItem[]>([]);
  const [current, setCurrent] = useState(0);
  const [response, setResponse] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [lastResult, setLastResult] = useState<"correct" | "incorrect" | null>(null);
  const [missedItems, setMissedItems] = useState<QuizItem[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => stopSpeaking, []);

  useEffect(() => {
    setActiveSession(stage === "in-progress");
    return () => setActiveSession(false);
  }, [stage, setActiveSession]);

  const selectedTheme = themes.find((t) => t.id === themeId) ?? null;
  const currentQuestion = quiz[current];

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

  const startQuiz = (forThemeId: string) => {
    // Pure vocabulary questions only — the vocab generator's ids are all
    // prefixed `${themeId}-v`; everything else in QUESTION_BANK (hand-written
    // CORE_QUESTIONS, paragraph fill-ins) is skipped here on purpose, and
    // puzzle-type items are skipped since that UI lives in QuizModule only.
    const pool = questions.filter((q) => q.id.startsWith(`${forThemeId}-v`) && q.type !== "puzzle");
    setQuiz(shuffle(pool).slice(0, 10));
    setCurrent(0);
    setCorrectCount(0);
    setResponse("");
    setMissedItems([]);
    setLastResult(null);
    clearLastAward();
    setStage("in-progress");
  };

  const checkAnswer = (given: string) => {
    if (!currentQuestion || lastResult !== null) return;
    const isCorrect = normalizeAnswer(given) === normalizeAnswer(currentQuestion.correctAnswer);
    if (isCorrect) setCorrectCount((c) => c + 1);
    else setMissedItems((prev) => [...prev, currentQuestion]);
    recordQuestionResult(currentQuestion.id, currentQuestion.themeId, currentQuestion.difficulty, isCorrect);
    setLastResult(isCorrect ? "correct" : "incorrect");
  };

  const advance = () => {
    stopSpeaking();
    setIsSpeaking(false);
    setResponse("");
    setLastResult(null);
    if (current + 1 < quiz.length) {
      setCurrent((c) => c + 1);
      return;
    }
    if (themeId) completeQuiz(`vocab-${themeId}`, "medium", correctCount, quiz.length);
    setStage("results");
  };

  // Auto-advance on correct, same pattern/reasoning as QuizModule.
  const advanceRef = useRef(advance);
  advanceRef.current = advance;
  useEffect(() => {
    if (lastResult !== "correct") return;
    const timer = setTimeout(() => advanceRef.current(), 900);
    return () => clearTimeout(timer);
  }, [lastResult]);

  const restart = () => {
    stopSpeaking();
    setIsSpeaking(false);
    clearLastAward();
    setStage("setup");
  };

  if (stage === "setup") {
    return (
      <div className="flex flex-col gap-5">
        <p className="text-sm text-slate-600">
          Pick a theme for a pure vocabulary drill — translation, listening, and word-in-context questions pulled
          straight from that theme's full word bank.
        </p>
        <ThemeSelector themes={themes} selectedThemeId={themeId} onSelect={setThemeId} />
        <button type="button" disabled={!themeId} onClick={() => themeId && startQuiz(themeId)} className="btn-primary w-fit px-6 py-2.5">
          Start vocabulary quiz
        </button>
      </div>
    );
  }

  if (stage === "in-progress" && currentQuestion) {
    return (
      <div className="max-w-2xl">
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
          <span className="pill-badge">{selectedTheme?.name}</span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-start gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm">
              {TYPE_ICON[currentQuestion.type]}
            </span>
            <p className="flex-1 pt-1 text-base font-semibold leading-snug text-slate-900">{currentQuestion.prompt}</p>
          </div>

          {currentQuestion.type === "listening" && (
            <div className="mb-4 pl-[42px]">
              <button
                type="button"
                onClick={togglePlayAudio}
                className={`btn-outline ${isSpeaking ? "border-red-300 bg-red-50 text-red-700 hover:bg-red-100" : ""}`}
              >
                {isSpeaking ? "⏹ Stop" : "🔊 Play word"}
              </button>
              {lastResult && currentQuestion.audioText && (
                <p className="mt-2 text-xs italic text-slate-500">You heard: &ldquo;{currentQuestion.audioText}&rdquo;</p>
              )}
            </div>
          )}

          {(currentQuestion.type === "mcq" || currentQuestion.type === "listening") && (
            <div className="flex flex-col gap-2 pl-[42px]">
              {currentQuestion.options?.map((opt, i) => {
                const picked = lastResult && response === opt;
                const isRightAnswer = lastResult && opt === currentQuestion.correctAnswer;
                return (
                  <button
                    key={opt}
                    type="button"
                    disabled={lastResult !== null}
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
                        isRightAnswer ? "bg-green-500 text-white" : picked ? "bg-red-500 text-white" : "bg-slate-100 text-slate-500"
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
                disabled={lastResult !== null}
                onChange={(e) => setResponse(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && response.trim()) checkAnswer(response);
                }}
                placeholder="Escribe tu respuesta en español..."
                className="rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
              {lastResult === null && (
                <button type="button" onClick={() => checkAnswer(response)} disabled={!response.trim()} className="btn-primary w-fit">
                  Submit answer
                </button>
              )}
            </div>
          )}

          {lastResult && (
            <div className="mt-4 ml-[42px] flex flex-col gap-2">
              <div className={`flex flex-wrap items-center justify-between gap-2 rounded-lg px-3.5 py-2.5 ${lastResult === "correct" ? "bg-green-50" : "bg-red-50"}`}>
                <p className={`flex items-center gap-1.5 text-sm font-medium ${lastResult === "correct" ? "text-green-700" : "text-red-700"}`}>
                  {lastResult === "correct" ? (
                    <>✓ ¡Correcto!</>
                  ) : (
                    <>✕ Incorrect — correct answer: &ldquo;{currentQuestion.correctAnswer}&rdquo;</>
                  )}
                </p>
                <button type="button" onClick={advance} className="btn-primary">
                  {current + 1 < quiz.length ? "Next →" : "Finish"}
                </button>
              </div>
              {currentQuestion.explanation && (
                <p className="border-l-2 border-slate-300 pl-2 text-xs italic text-slate-500">💡 {currentQuestion.explanation}</p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  const pct = quiz.length > 0 ? Math.round((correctCount / quiz.length) * 100) : 0;
  const ringColor = pct >= 80 ? "text-green-500" : pct >= 50 ? "text-amber-500" : "text-rose-500";
  return (
    <div className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">Vocabulary quiz complete!</h2>

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

      <p className="text-sm text-slate-600">{selectedTheme?.name}</p>
      {lastAward && (
        <div className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
          <p className="font-semibold">+{lastAward.pointsAwarded} points</p>
          {lastAward.newBadges.length > 0 && (
            <p className="mt-1">New badge{lastAward.newBadges.length > 1 ? "s" : ""}: {lastAward.newBadges.map((b) => b.name).join(", ")}</p>
          )}
        </div>
      )}
      {missedItems.length > 0 && (
        <div className="mt-4 rounded-lg bg-slate-50 p-3 text-left">
          <p className="mb-2 text-sm font-semibold text-slate-800">Words to review</p>
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
        <button type="button" onClick={() => themeId && startQuiz(themeId)} className="btn-accent">
          Practice again
        </button>
        <button type="button" onClick={restart} className="btn-outline">
          Choose another theme
        </button>
      </div>
    </div>
  );
}

/// File: src/components/VocabularyModule.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useStore } from "@/lib/store";
import { speak, stopSpeaking } from "@/lib/speech";
import { shuffle } from "@/lib/utils";
import { QuizItem } from "@/lib/types";
import ThemeSelector from "./ThemeSelector";
import VocabList from "./VocabList";

type Tab = "reference" | "quiz";
type QuizStage = "setup" | "in-progress" | "results";

const stripAccents = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
const normalizeAnswer = (s: string) => stripAccents(s.trim().toLowerCase());

/** Dedicated vocabulary hub, separate from Practice by Theme (which keeps its
 *  matching-game/fill-in-blank/listening exercises): a "Reference" tab to
 *  browse and search all 5 themes' vocabulary side by side (same pattern as
 *  the Grammar Cheat Sheet), and a "Quiz" tab for pure vocabulary-only
 *  testing — pulling only the vocab-generator's questions (ids prefixed
 *  `${themeId}-v`) rather than the full mixed QUESTION_BANK, and skipping
 *  puzzle-type items since the sentence-builder UI is specific to
 *  QuizModule. */
export default function VocabularyModule() {
  const { themes } = useStore();
  const [tab, setTab] = useState<Tab>("reference");
  const [referenceThemeId, setReferenceThemeId] = useState(themes[0].id);
  const referenceTheme = themes.find((t) => t.id === referenceThemeId) ?? themes[0];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2 border-b border-slate-200">
        {(["reference", "quiz"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`-mb-px border-b-2 px-3 py-2 text-sm font-semibold capitalize transition ${
              tab === t ? "border-brand-500 text-brand-700" : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            {t === "reference" ? "📖 Reference" : "📝 Quiz"}
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
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <VocabList vocabulary={referenceTheme.vocabulary} />
          </div>
        </div>
      )}

      {tab === "quiz" && <VocabularyQuiz />}
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
      <div className="mx-auto max-w-xl">
        <p className="mb-2 text-sm text-slate-500">
          {selectedTheme?.name} · Question {current + 1} / {quiz.length}
        </p>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="mb-4 text-base font-semibold text-slate-900">{currentQuestion.prompt}</p>

          {currentQuestion.type === "listening" && (
            <div className="mb-4">
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
            <div className="flex flex-col gap-2">
              {currentQuestion.options?.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  disabled={lastResult !== null}
                  onClick={() => {
                    setResponse(opt);
                    checkAnswer(opt);
                  }}
                  className={`rounded-md border px-3 py-2 text-left text-sm ${
                    lastResult && response === opt
                      ? lastResult === "correct"
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
                disabled={lastResult !== null}
                onChange={(e) => setResponse(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && response.trim()) checkAnswer(response);
                }}
                placeholder="Escribe tu respuesta en español..."
                className="rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500"
              />
              {lastResult === null && (
                <button type="button" onClick={() => checkAnswer(response)} disabled={!response.trim()} className="btn-primary w-fit">
                  Submit answer
                </button>
              )}
            </div>
          )}

          {lastResult && (
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className={`text-sm font-medium ${lastResult === "correct" ? "text-green-700" : "text-red-700"}`}>
                  {lastResult === "correct" ? "¡Correcto!" : `Incorrect — correct answer: "${currentQuestion.correctAnswer}"`}
                </p>
                <button type="button" onClick={advance} className="btn-primary">
                  {current + 1 < quiz.length ? "Next" : "Finish"}
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

  return (
    <div className="mx-auto max-w-xl rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">Vocabulary quiz complete!</h2>
      <p className="mt-2 text-3xl font-extrabold text-brand-600">
        {correctCount} / {quiz.length}
      </p>
      <p className="mt-1 text-sm text-slate-600">{selectedTheme?.name}</p>
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

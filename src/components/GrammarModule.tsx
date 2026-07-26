/// File: src/components/GrammarModule.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { GRAMMAR_TOPICS } from "@/lib/grammar";
import { useStore } from "@/lib/store";
import { playCorrectDing, playIncorrectBuzz } from "@/lib/sound";
import { speak, stopSpeaking } from "@/lib/speech";
import SimpleExplainer from "./SimpleExplainer";
import { Difficulty, GrammarExercise, GrammarTopic } from "@/lib/types";

type Stage = "detail" | "practice" | "results";

const LEVEL_STYLES: Record<GrammarTopic["level"], string> = {
  beginner: "bg-green-100 text-green-700",
  intermediate: "bg-amber-100 text-amber-700",
  advanced: "bg-rose-100 text-rose-700",
};

const LEVEL_TO_DIFFICULTY: Record<GrammarTopic["level"], Difficulty> = {
  beginner: "easy",
  intermediate: "medium",
  advanced: "hard",
};

const stripAccents = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
const normalizeAnswer = (s: string) => stripAccents(s.trim().toLowerCase());

/** Grammar module: a persistent sidebar lists all 11 core IB Spanish B SL
 *  grammar topics (organized by structure, not by IB theme — grammar cuts
 *  across all five) so switching topics never requires backing out to a
 *  grid. Each topic shows its rule and examples, then a 10-question
 *  practice drill. Scored and graded automatically, same as the Quiz
 *  module — completing a drill awards points via the shared gamification
 *  system (lib/gamification.ts). The "listening-tenses" topic uses
 *  spoken-audio exercises instead of the usual fill-in/mcq conjugation
 *  drill — see togglePlayAudio(). The full cheat sheet (conjugation
 *  charts, por/para, etc.) lives at /grammar/reference, linked separately
 *  at the top since it's a reference page, not a practice topic. */
export default function GrammarModule() {
  const { completeQuiz, lastAward, clearLastAward } = useStore();

  const [stage, setStage] = useState<Stage>("detail");
  const [topicId, setTopicId] = useState<string>(GRAMMAR_TOPICS[0].id);
  const [current, setCurrent] = useState(0);
  const [response, setResponse] = useState("");
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [missed, setMissed] = useState<GrammarExercise[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const topic = useMemo(() => GRAMMAR_TOPICS.find((t) => t.id === topicId) ?? GRAMMAR_TOPICS[0], [topicId]);
  const [practiceExercises, setPracticeExercises] = useState<GrammarExercise[]>([]);

  const activePool = useMemo(() => (practiceExercises.length > 0 ? practiceExercises : topic.exercises.slice(0, 10)), [practiceExercises, topic]);
  const exercise = activePool[current];

  useEffect(() => stopSpeaking, []); // stop any playback if the module unmounts

  const togglePlayAudio = () => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
      return;
    }
    if (!exercise?.audioText) return;
    setIsSpeaking(true);
    speak(exercise.audioText, () => setIsSpeaking(false));
  };

  const viewTopic = (id: string) => {
    stopSpeaking();
    setIsSpeaking(false);
    clearLastAward();
    setTopicId(id);
    setPracticeExercises([]);
    setStage("detail");
  };

  const startPractice = () => {
    // Shuffle the topic's pool of exercises (at least 200 exercises) and pick 10 random ones per practice drill session
    const shuffled = [...topic.exercises].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 10);
    setPracticeExercises(selected);
    setCurrent(0);
    setCorrectCount(0);
    setMissed([]);
    setResponse("");
    setChecked(false);
    clearLastAward();
    setStage("practice");
  };

  const checkAnswer = (given: string) => {
    if (!exercise) return;
    const isCorrect = normalizeAnswer(given) === normalizeAnswer(exercise.correctAnswer);
    if (isCorrect) {
      setCorrectCount((c) => c + 1);
      playCorrectDing();
    } else {
      setMissed((prev) => [...prev, exercise]);
      playIncorrectBuzz();
    }
    setChecked(true);
  };

  const next = () => {
    stopSpeaking();
    setIsSpeaking(false);
    setResponse("");
    setChecked(false);
    if (current + 1 < activePool.length) {
      setCurrent((c) => c + 1);
      return;
    }
    completeQuiz(`grammar-${topic.id}`, LEVEL_TO_DIFFICULTY[topic.level], correctCount, activePool.length);
    setStage("results");
  };

  return (
    <div className="flex flex-col gap-5">
      {/* The cheat sheet now has its own "Cheat Sheet" link in the main navbar, right next to
          Grammar — no need to repeat it here too. */}
      <p className="text-sm text-slate-500">
        11 core grammar topics for IB Spanish B SL — pick one from the list to read the rule and practice.
      </p>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        {/* Sidebar: persistent topic list, horizontal-scroll pill row on mobile, stacked list on larger screens. */}
        <nav className="flex gap-2 overflow-x-auto pb-1 lg:w-72 lg:shrink-0 lg:flex-col lg:overflow-visible lg:pb-0">
          {GRAMMAR_TOPICS.map((t) => {
            const isListening = t.id === "listening-tenses";
            const active = t.id === topic.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => viewTopic(t.id)}
                className={`shrink-0 rounded-lg border p-3 text-left transition lg:shrink ${
                  active ? "border-brand-400 bg-brand-50" : "border-slate-200 bg-white hover:border-brand-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className={`whitespace-nowrap text-sm font-semibold lg:whitespace-normal ${active ? "text-brand-800" : "text-slate-800"}`}>
                    {t.name}
                  </p>
                  <span className={`hidden shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide lg:inline ${LEVEL_STYLES[t.level]}`}>
                    {t.level}
                  </span>
                </div>
                {isListening && <span className="mt-1 hidden text-[10px] font-medium text-slate-500 lg:block">🎧 Listening practice</span>}
              </button>
            );
          })}
        </nav>

        {/* Main content pane */}
        <div className="min-w-0 flex-1">
          {stage === "detail" && (
            <div key={topic.id} className="animate-fade-slide-up rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-2 flex items-center justify-between gap-2">
                <h2 className="text-lg font-bold text-slate-900">{topic.name}</h2>
                <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${LEVEL_STYLES[topic.level]}`}>
                  {topic.level}
                </span>
              </div>
              <SimpleExplainer>{topic.simpleExplanation}</SimpleExplainer>
              <p className="mb-4 text-sm text-slate-700">{topic.rule}</p>
              <p className="mb-2 text-sm font-semibold text-slate-800">Examples</p>
              <ul className="mb-4 flex flex-col gap-1.5">
                {topic.examples.map((ex) => (
                  <li key={ex.es} className="text-sm text-slate-700">
                    <span className="font-medium">{ex.es}</span> — <span className="text-slate-500">{ex.en}</span>
                  </li>
                ))}
              </ul>
              <button type="button" onClick={startPractice} className="btn-accent w-fit">
                Start practice (10 practice drill questions)
              </button>
            </div>
          )}

          {stage === "practice" && exercise && (
            <div>
              <p className="mb-2 text-sm text-slate-500">
                {topic.name} · Question {current + 1} / {activePool.length}
              </p>
              <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-brand-600 transition-all"
                  style={{ width: `${((current + (checked ? 1 : 0)) / activePool.length) * 100}%` }}
                />
              </div>
              <div key={exercise.id} className="animate-fade-slide-up rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="mb-4 text-base font-semibold text-slate-900">{exercise.prompt}</p>

                {exercise.type === "listening" && (
                  <div className="mb-4">
                    <button
                      type="button"
                      onClick={togglePlayAudio}
                      className={`btn-outline ${isSpeaking ? "border-red-300 bg-red-50 text-red-700 hover:bg-red-100" : ""}`}
                    >
                      {isSpeaking ? "⏹ Stop" : "🔊 Play sentence"}
                    </button>
                    {checked && exercise.audioText && (
                      <p className="mt-2 text-xs italic text-slate-500">You heard: &ldquo;{exercise.audioText}&rdquo;</p>
                    )}
                  </div>
                )}

                {exercise.type === "mcq" || exercise.type === "listening" ? (
                  <div className="flex flex-col gap-2">
                    {exercise.options?.map((opt) => {
                      const isPicked = checked && response === opt;
                      const isRight = isPicked && normalizeAnswer(opt) === normalizeAnswer(exercise.correctAnswer);
                      const isWrong = isPicked && !isRight;
                      return (
                        <button
                          key={opt}
                          type="button"
                          disabled={checked}
                          onClick={() => {
                            setResponse(opt);
                            checkAnswer(opt);
                          }}
                          className={`flex items-center justify-between rounded-md border px-3 py-2 text-left text-sm transition ${
                            isRight
                              ? "animate-pop-in border-green-400 bg-green-50"
                              : isWrong
                              ? "animate-shake border-red-400 bg-red-50"
                              : "border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          <span>{opt}</span>
                          {isRight && <span className="text-green-600">✓</span>}
                          {isWrong && <span className="text-red-600">✗</span>}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      value={response}
                      disabled={checked}
                      onChange={(e) => setResponse(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && response.trim()) checkAnswer(response);
                      }}
                      placeholder="Escribe tu respuesta en español..."
                      className={`rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500 ${
                        checked
                          ? normalizeAnswer(response) === normalizeAnswer(exercise.correctAnswer)
                            ? "animate-pop-in border-green-400"
                            : "animate-shake border-red-400"
                          : "border-slate-200"
                      }`}
                    />
                    {!checked && (
                      <button type="button" onClick={() => checkAnswer(response)} disabled={!response.trim()} className="btn-primary w-fit">
                        Submit answer
                      </button>
                    )}
                  </div>
                )}

                {checked && (
                  <div className="mt-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <p
                        className={`text-sm font-semibold ${
                          normalizeAnswer(response) === normalizeAnswer(exercise.correctAnswer) ? "text-green-700" : "text-red-700"
                        }`}
                      >
                        {normalizeAnswer(response) === normalizeAnswer(exercise.correctAnswer)
                          ? "¡Excelente! Correct answer."
                          : `Incorrect — correct answer: "${exercise.correctAnswer}"`}
                      </p>
                      <button type="button" onClick={next} className="btn-primary">
                        {current + 1 < activePool.length ? "Next question →" : "Finish topic"}
                      </button>
                    </div>

                    {normalizeAnswer(response) !== normalizeAnswer(exercise.correctAnswer) && (exercise.tip || exercise.explanation || topic.rule) && (
                      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-slate-800 shadow-sm animate-pop-in">
                        <div className="flex items-center gap-2 mb-1 text-amber-800 font-bold text-xs uppercase tracking-wider">
                          <span>💡 Tip to Improve & Master the Rule:</span>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed font-medium mb-1">
                          {exercise.tip ?? exercise.explanation ?? topic.rule}
                        </p>
                        {exercise.explanation && exercise.tip && (
                          <p className="text-xs text-slate-600 leading-relaxed border-t border-amber-200/60 pt-1.5 mt-1.5 italic">
                            {exercise.explanation}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {stage === "results" && (
            <div className="animate-fade-slide-up rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Practice complete!</h2>
              <p className="mt-2 text-3xl font-extrabold text-brand-600">
                {correctCount} / {topic.exercises.length}
              </p>
              <p className="mt-1 text-sm text-slate-600">{topic.name}</p>
              {lastAward && (
                <div className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
                  <p className="font-semibold">+{lastAward.pointsAwarded} points</p>
                  {lastAward.newBadges.length > 0 && (
                    <p className="mt-1">
                      New badge{lastAward.newBadges.length > 1 ? "s" : ""}:{" "}
                      {lastAward.newBadges.map((b) => b.name).join(", ")}
                    </p>
                  )}
                </div>
              )}
              {missed.length > 0 && (
                <div className="mt-4 rounded-lg bg-slate-50 p-3 text-left">
                  <p className="mb-2 text-sm font-semibold text-slate-800">Questions to review</p>
                  <ul className="flex flex-col gap-1.5">
                    {missed.map((ex) => (
                      <li key={ex.id} className="text-xs text-slate-600">
                        <span className="font-medium">{ex.prompt}</span> — {ex.correctAnswer}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                <button type="button" onClick={startPractice} className="btn-accent">
                  Practice again
                </button>
                <button type="button" onClick={() => setStage("detail")} className="btn-outline">
                  Back to topic overview
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

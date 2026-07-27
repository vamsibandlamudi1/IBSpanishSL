/// File: src/components/ReadingModule.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { READING_PASSAGES } from "@/lib/reading";
import { useStore } from "@/lib/store";
import { deriveJustification } from "@/lib/deriveJustification";
import { ReadingQuestion } from "@/lib/types";

const LEVEL_STYLES: Record<string, string> = {
  easy: "bg-green-100 text-green-700",
  medium: "bg-amber-100 text-amber-700",
  hard: "bg-rose-100 text-rose-700",
};

const stripAccents = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
const normalize = (s: string) => stripAccents(s.trim().toLowerCase());

/** Paper 1 style reading comprehension: pick a passage (sidebar, same
 *  pattern as GrammarModule's topic list), read the Spanish text, answer a
 *  mix of true/false (with justification, matching the real IB format),
 *  multiple choice, and short-answer questions, then check everything at
 *  once — mirroring how a reading paper is actually reviewed as a set
 *  rather than question-by-question. Scored and graded automatically,
 *  same as Quiz/Grammar — completing a passage awards points via the
 *  shared gamification system. */
export default function ReadingModule() {
  const { completeQuiz, recordQuestionResult, lastAward, clearLastAward, setActiveSession } = useStore();

  const [passageId, setPassageId] = useState(READING_PASSAGES[0].id);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const passage = useMemo(() => READING_PASSAGES.find((p) => p.id === passageId) ?? READING_PASSAGES[0], [passageId]);

  // Lets the global milestone/engagement popups know the student is mid-passage,
  // so they defer themselves until answers are checked — see lib/store.tsx's
  // activeSession.
  useEffect(() => {
    setActiveSession(!checked);
    return () => setActiveSession(false);
  }, [checked, setActiveSession]);

  const selectPassage = (id: string) => {
    setPassageId(id);
    setAnswers({});
    setChecked(false);
    clearLastAward();
  };

  const setAnswer = (questionId: string, value: string) => {
    if (checked) return;
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const isCorrect = (q: ReadingQuestion) => normalize(answers[q.id] ?? "") === normalize(q.correctAnswer);

  const checkAnswers = () => {
    setChecked(true);
    passage.questions.forEach((q) => recordQuestionResult(q.id, passage.themeId, passage.level, isCorrect(q)));
    const correctCount = passage.questions.filter(isCorrect).length;
    completeQuiz(`reading-${passage.id}`, passage.level, correctCount, passage.questions.length);
  };

  const answeredCount = passage.questions.filter((q) => (answers[q.id] ?? "").trim().length > 0).length;
  const correctCount = checked ? passage.questions.filter(isCorrect).length : 0;

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      {/* Sidebar: one passage per theme, same pattern as GrammarModule's topic list. */}
      <nav className="flex gap-2 overflow-x-auto pb-1 lg:w-72 lg:shrink-0 lg:flex-col lg:overflow-visible lg:pb-0">
        {READING_PASSAGES.map((p) => {
          const active = p.id === passage.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => selectPassage(p.id)}
              className={`shrink-0 rounded-lg border p-3 text-left transition lg:shrink ${
                active ? "border-brand-400 bg-brand-50" : "border-slate-200 bg-white hover:border-brand-300 hover:bg-slate-50"
              }`}
            >
              <p className={`whitespace-nowrap text-sm font-semibold lg:whitespace-normal ${active ? "text-brand-800" : "text-slate-800"}`}>
                {p.title}
              </p>
              <span className="mt-1 hidden text-[10px] font-medium uppercase tracking-wide text-slate-400 lg:block">{p.textType}</span>
            </button>
          );
        })}
      </nav>

      {/* Passage + questions */}
      <div key={passage.id} className="animate-fade-slide-up min-w-0 flex-1">
        <div className="mb-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-lg font-bold text-slate-900">{passage.title}</h2>
            <div className="flex items-center gap-1.5">
              <span className="pill-badge">{passage.textType}</span>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${LEVEL_STYLES[passage.level]}`}>
                {passage.level}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {passage.bodyEs.split("\n\n").map((para, i) => (
              <p key={i} className="whitespace-pre-line text-sm leading-relaxed text-slate-700">
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {passage.questions.map((q, i) => {
            const picked = answers[q.id];
            const correct = checked && isCorrect(q);
            const wrong = checked && !isCorrect(q);
            return (
              <div
                key={q.id}
                className={`rounded-xl border bg-white p-4 shadow-sm transition ${
                  correct ? "border-green-300 bg-green-50" : wrong ? "border-red-300 bg-red-50" : "border-slate-200"
                }`}
              >
                <p className="mb-3 text-sm font-semibold text-slate-900">
                  {i + 1}. {q.prompt}
                </p>

                {q.type === "true-false" && (
                  <div className="flex gap-2">
                    {["true", "false"].map((val) => (
                      <button
                        key={val}
                        type="button"
                        disabled={checked}
                        onClick={() => setAnswer(q.id, val)}
                        className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
                          picked === val ? "border-brand-400 bg-brand-100 text-brand-800" : "border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {val === "true" ? "Verdadero" : "Falso"}
                      </button>
                    ))}
                  </div>
                )}

                {q.type === "mcq" && (
                  <div className="flex flex-col gap-2">
                    {q.options?.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        disabled={checked}
                        onClick={() => setAnswer(q.id, opt)}
                        className={`rounded-md border px-3 py-2 text-left text-sm ${
                          picked === opt ? "border-brand-400 bg-brand-100 text-brand-800" : "border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {q.type === "short" && (
                  <input
                    type="text"
                    value={picked ?? ""}
                    disabled={checked}
                    onChange={(e) => setAnswer(q.id, e.target.value)}
                    placeholder="Escribe tu respuesta en español..."
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500"
                  />
                )}

                {checked && (
                  <p className={`mt-3 text-sm font-medium ${correct ? "text-green-700" : "text-red-700"}`}>
                    {correct ? "¡Correcto!" : `Incorrecto — respuesta correcta: "${q.correctAnswer === "true" ? "Verdadero" : q.correctAnswer === "false" ? "Falso" : q.correctAnswer}"`}
                    {(() => {
                      const justification = deriveJustification(q, passage.bodyEs);
                      return justification && <span className="ml-1 italic text-slate-500">({justification})</span>;
                    })()}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {!checked ? (
            <button type="button" onClick={checkAnswers} disabled={answeredCount === 0} className="btn-primary">
              Check answers ({answeredCount} / {passage.questions.length} answered)
            </button>
          ) : (
            <>
              <p className="text-lg font-bold text-slate-900">
                {correctCount} / {passage.questions.length} correct
              </p>
              <button type="button" onClick={() => selectPassage(passage.id)} className="btn-outline">
                Try again
              </button>
            </>
          )}
        </div>

        {checked && lastAward && (
          <div className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
            <p className="font-semibold">+{lastAward.pointsAwarded} points</p>
            {lastAward.newBadges.length > 0 && (
              <p className="mt-1">New badge{lastAward.newBadges.length > 1 ? "s" : ""}: {lastAward.newBadges.map((b) => b.name).join(", ")}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

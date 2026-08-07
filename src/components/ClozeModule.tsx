/// File: src/components/ClozeModule.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { CLOZE_PASSAGES } from "@/lib/cloze";
import { useStore } from "@/lib/store";
import { LEVEL_STYLES } from "@/lib/quizUi";

const stripAccents = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
const normalize = (s: string) => stripAccents(s.trim().toLowerCase());

/** IB-style gap-fill: one continuous passage with several numbered blanks,
 *  each filled from a shared word bank (dropdown per blank) and graded
 *  together as a set — the multi-blank counterpart to QuizModule's
 *  one-question-at-a-time format. Reuses the same store hooks (completeQuiz,
 *  recordQuestionResult) as Reading/Quiz so scoring, badges, and weak-area
 *  analytics all work the same way here. */
export default function ClozeModule() {
  const { completeQuiz, recordQuestionResult, lastAward, clearLastAward, setActiveSession } = useStore();

  const [passageId, setPassageId] = useState(CLOZE_PASSAGES[0].id);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const passage = useMemo(() => CLOZE_PASSAGES.find((p) => p.id === passageId) ?? CLOZE_PASSAGES[0], [passageId]);

  const wordBank = useMemo(() => {
    const words = [...passage.blanks.map((b) => b.correctAnswer), ...passage.distractors];
    // Deterministic shuffle (seeded by passage id) so the order isn't just
    // "answers first, distractors after" — a real giveaway.
    let seed = passage.id.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const rand = () => {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      return seed / 0x7fffffff;
    };
    return [...words].sort(() => rand() - 0.5);
  }, [passage]);

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

  const setAnswer = (n: number, value: string) => {
    if (checked) return;
    setAnswers((prev) => ({ ...prev, [n]: value }));
  };

  const isCorrect = (n: number) => {
    const blank = passage.blanks.find((b) => b.n === n);
    return !!blank && normalize(answers[n] ?? "") === normalize(blank.correctAnswer);
  };

  const checkAnswers = () => {
    if (checked) return;
    setChecked(true);
    passage.blanks.forEach((b) => recordQuestionResult(`${passage.id}-blank-${b.n}`, passage.themeId, passage.level, isCorrect(b.n)));
    const correctCount = passage.blanks.filter((b) => isCorrect(b.n)).length;
    completeQuiz(`cloze-${passage.id}`, passage.level, correctCount, passage.blanks.length);
  };

  const answeredCount = passage.blanks.filter((b) => (answers[b.n] ?? "").trim().length > 0).length;
  const correctCount = checked ? passage.blanks.filter((b) => isCorrect(b.n)).length : 0;

  // Render bodyEs, splitting on {{n}} markers and interleaving a <select> for each blank.
  const bodyParts = useMemo(() => {
    const parts: Array<{ text: string } | { blankN: number }> = [];
    const regex = /\{\{(\d+)\}\}/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(passage.bodyEs))) {
      if (match.index > lastIndex) parts.push({ text: passage.bodyEs.slice(lastIndex, match.index) });
      parts.push({ blankN: Number(match[1]) });
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < passage.bodyEs.length) parts.push({ text: passage.bodyEs.slice(lastIndex) });
    return parts;
  }, [passage]);

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      <nav className="flex gap-2 overflow-x-auto pb-1 lg:w-72 lg:shrink-0 lg:flex-col lg:overflow-visible lg:pb-0">
        {CLOZE_PASSAGES.map((p) => {
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
              <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${LEVEL_STYLES[p.level]}`}>
                {p.level}
              </span>
            </button>
          );
        })}
      </nav>

      <div key={passage.id} className="animate-fade-slide-up min-w-0 flex-1">
        <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-start gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm">📝</span>
            <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-2 pt-1">
              <h2 className="text-lg font-bold text-slate-900">{passage.title}</h2>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${LEVEL_STYLES[passage.level]}`}>
                {passage.level}
              </span>
            </div>
          </div>

          <div className="mb-4 rounded-lg bg-slate-50 p-3">
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">Banco de palabras</p>
            <div className="flex flex-wrap gap-1.5">
              {wordBank.map((w, i) => (
                <span key={`${w}-${i}`} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600">
                  {w}
                </span>
              ))}
            </div>
          </div>

          <p className="text-sm leading-loose text-slate-700">
            {bodyParts.map((part, i) => {
              if ("text" in part) return <span key={i}>{part.text}</span>;
              const n = part.blankN;
              const picked = answers[n] ?? "";
              const correct = checked && isCorrect(n);
              const wrong = checked && !isCorrect(n);
              return (
                <select
                  key={i}
                  value={picked}
                  disabled={checked}
                  onChange={(e) => setAnswer(n, e.target.value)}
                  className={`mx-1 rounded-md border px-1.5 py-0.5 text-sm font-medium outline-none transition focus:ring-2 focus:ring-brand-100 ${
                    correct
                      ? "border-green-400 bg-green-50 text-green-800"
                      : wrong
                      ? "border-red-400 bg-red-50 text-red-800"
                      : "border-slate-300 bg-white text-slate-700 focus:border-brand-400"
                  }`}
                >
                  <option value="">___</option>
                  {wordBank.map((w, wi) => (
                    <option key={`${w}-${wi}`} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
              );
            })}
          </p>

          {checked && (
            <div className="mt-4 flex flex-col gap-1.5 border-t border-slate-100 pt-3">
              {passage.blanks.map((b) => (
                <p
                  key={b.n}
                  className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium ${
                    isCorrect(b.n) ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                  }`}
                >
                  {isCorrect(b.n) ? "✓" : "✕"} {b.n}. {isCorrect(b.n) ? "¡Correcto!" : `Incorrecto — respuesta correcta: "${b.correctAnswer}"`}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {!checked ? (
            <button type="button" onClick={checkAnswers} disabled={answeredCount === 0} className="btn-primary">
              Verificar respuestas ({answeredCount} / {passage.blanks.length})
            </button>
          ) : (
            <>
              <p className="text-lg font-bold text-slate-900">
                {correctCount} / {passage.blanks.length} correct
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

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
  const { completeQuiz, recordQuestionResult, lastAward, clearLastAward, setActiveSession, quizAttempts } = useStore();
  // Best attempt per passage (recorded by completeQuiz as cloze-<passage id>) for the check marks.
  const bestByPassage = useMemo(() => {
    const map = new Map<string, { score: number; total: number }>();
    for (const a of quizAttempts) {
      if (!a.themeId.startsWith("cloze-")) continue;
      const id = a.themeId.slice("cloze-".length);
      const ex = map.get(id);
      if (!ex || a.score / a.total > ex.score / ex.total) map.set(id, { score: a.score, total: a.total });
    }
    return map;
  }, [quizAttempts]);

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

  // Words already placed in blanks are greyed out in the bank (duplicates count one by one).
  const usedCounts: Record<string, number> = {};
  Object.values(answers).forEach((v) => {
    if (v) usedCounts[v] = (usedCounts[v] ?? 0) + 1;
  });
  const isUsedChip = (i: number) => {
    const w = wordBank[i];
    const occurrence = wordBank.slice(0, i).filter((x) => x === w).length;
    return occurrence < (usedCounts[w] ?? 0);
  };

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      {/* Sidebar: passages grouped by level, with overall progress and check marks. */}
      <aside className="lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:w-72 lg:shrink-0 lg:overflow-y-auto lg:pr-1">
        <div className="mb-3 rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-sm font-semibold text-slate-800">
            {CLOZE_PASSAGES.filter((p) => bestByPassage.has(p.id)).length} of {CLOZE_PASSAGES.length} completed
          </p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-green-500 transition-all"
              style={{ width: `${(CLOZE_PASSAGES.filter((p) => bestByPassage.has(p.id)).length / CLOZE_PASSAGES.length) * 100}%` }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {(["easy", "medium", "hard"] as const).map((lvl) => {
            const items = CLOZE_PASSAGES.filter((p) => p.level === lvl);
            if (items.length === 0) return null;
            const done = items.filter((p) => bestByPassage.has(p.id)).length;
            return (
              <section key={lvl}>
                <div className="mb-1.5 flex items-center justify-between gap-2 px-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-500">{lvl}</span>
                  <span className="text-[11px] font-medium text-slate-400">{done}/{items.length}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {items.map((p) => {
                    const active = p.id === passage.id;
                    const best = bestByPassage.get(p.id);
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => selectPassage(p.id)}
                        className={`w-full rounded-lg border p-2.5 text-left transition ${
                          active ? "border-brand-400 bg-brand-50" : best ? "border-green-200 bg-green-50/50 hover:border-green-300" : "border-slate-200 bg-white hover:border-brand-300 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <span
                            title={best ? `Best score: ${best.score}/${best.total}` : "Not attempted yet"}
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                              best ? "bg-green-500 text-white" : "border border-slate-300 text-transparent"
                            }`}
                          >
                            ✓
                          </span>
                          <div className="min-w-0">
                            <p className={`text-sm font-semibold leading-snug ${active ? "text-brand-800" : "text-slate-800"}`}>{p.title}</p>
                            <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-400">
                              {p.level}
                              {best && <span className="ml-1.5 normal-case text-green-700">· {best.score}/{best.total}</span>}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </aside>

      <div key={passage.id} className="animate-fade-slide-up min-w-0 flex-1">
        <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
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
                <span
                  key={`${w}-${i}`}
                  className={`rounded-full border px-2.5 py-1 text-xs transition ${
                    isUsedChip(i) ? "border-slate-100 bg-slate-100 text-slate-400 line-through" : "border-slate-200 bg-white text-slate-600"
                  }`}
                >
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
                  {/* Hide words already placed in other blanks (a word that appears twice stays
                      available until both copies are used). The blank's own choice always stays. */}
                  {wordBank
                    .map((w, wi) => ({ w, wi, copy: wordBank.slice(0, wi).filter((x) => x === w).length }))
                    .filter(({ w, copy }) => {
                      const usedElsewhere = Object.entries(answers).filter(([k, v]) => Number(k) !== n && v === w).length;
                      return copy >= usedElsewhere || w === picked;
                    })
                    .map(({ w, wi }) => (
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
                  {isCorrect(b.n) ? "✓" : "✕"} {b.n}. {isCorrect(b.n) ? "¡Correcto!" : `Incorrecto${answers[b.n] ? `: escribiste "${answers[b.n]}" — ` : " — "}respuesta correcta: "${b.correctAnswer}"`}
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
              <button
                type="button"
                onClick={() => {
                  const i = CLOZE_PASSAGES.findIndex((p) => p.id === passage.id);
                  selectPassage(CLOZE_PASSAGES[(i + 1) % CLOZE_PASSAGES.length].id);
                }}
                className="btn-primary"
              >
                Next passage →
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

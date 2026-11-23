/// File: src/components/MockExamModule.tsx
"use client";

import { useEffect, useState } from "react";
import { MOCK_SETS, MockSet } from "@/lib/mock-exams";
import { useStore } from "@/lib/store";
import { ReadingQuestion } from "@/lib/types";
import { answersMatch } from "@/lib/utils";
import ListeningExam, { ExamMiss } from "./ListeningExam";
import WritingModule from "./WritingModule";

type Stage = "intro" | "writing" | "reading" | "listening" | "summary";

const WRITING_MINUTES = 75;
const READING_SECONDS = 60 * 60;
const LISTENING_SECONDS = 45 * 60;

interface PaperResult {
  correct: number;
  total: number;
  missed: ExamMiss[];
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

/** Counts down once a second while `active` is true. */
function useCountdown(seconds: number, active: boolean): number {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => setLeft((l) => (l > 0 ? l - 1 : 0)), 1000);
    return () => window.clearInterval(id);
  }, [active]);
  return left;
}

function isCorrect(q: ReadingQuestion, given: string): boolean {
  if (q.type === "short") return answersMatch(given, q.correctAnswer);
  return given === q.correctAnswer;
}

function correctText(q: ReadingQuestion): string {
  if (q.type === "true-false") return q.correctAnswer === "true" ? "Verdadero" : "Falso";
  return q.correctAnswer;
}

function Timer({ left, warnAt }: { left: number; warnAt: number }) {
  return (
    <p className={`font-mono text-lg font-bold ${left <= warnAt ? "text-red-600" : "text-slate-900"}`}>{formatTime(left)}</p>
  );
}

function ReadingPaper({ set, onDone }: { set: MockSet; onDone: (r: PaperResult) => void }) {
  const [passageIdx, setPassageIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<PaperResult | null>(null);
  const left = useCountdown(READING_SECONDS, result === null);

  const grade = (): PaperResult => {
    const missed: ExamMiss[] = [];
    let correct = 0;
    let total = 0;
    for (const p of set.reading) {
      for (const q of p.questions) {
        total++;
        const given = answers[q.id] ?? "";
        if (isCorrect(q, given)) correct++;
        else missed.push({ prompt: q.prompt, studentAnswer: given ? (q.type === "true-false" ? (given === "true" ? "Verdadero" : "Falso") : given) : "(sin respuesta)", correctAnswer: correctText(q) });
      }
    }
    return { correct, total, missed };
  };

  // Time's up: grade whatever has been answered.
  useEffect(() => {
    if (left === 0 && result === null) setResult(grade());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [left]);

  const passage = set.reading[passageIdx];
  const offset = set.reading.slice(0, passageIdx).reduce((n, p) => n + p.questions.length, 0);
  const submitted = result !== null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4">
        <p className="text-sm font-semibold text-slate-800">Paper 2 — Reading · 40 questions · 60 min</p>
        <Timer left={left} warnAt={300} />
      </div>
      <div className="flex flex-wrap gap-2">
        {set.reading.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setPassageIdx(i)}
            className={`rounded-full border px-3 py-1 text-sm font-semibold ${i === passageIdx ? "border-brand-500 bg-brand-50 text-brand-800" : "border-slate-200 bg-white text-slate-600"}`}
          >
            Texto {"ABC"[i]}
          </button>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="mb-3 text-base font-bold text-slate-900">{passage.title}</h2>
          <p className="whitespace-pre-line text-sm leading-relaxed text-slate-800">{passage.bodyEs}</p>
        </article>
        <div className="flex flex-col gap-3">
          {passage.questions.map((q, i) => {
            const n = offset + i + 1;
            const given = answers[q.id] ?? "";
            const ok = submitted ? isCorrect(q, given) : null;
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">
                  {n}. {q.prompt}
                  {ok !== null && <span className={`ml-2 text-xs font-bold ${ok ? "text-green-700" : "text-red-600"}`}>{ok ? "✓" : "✗"}</span>}
                </p>
                {q.type === "true-false" && (
                  <div className="mt-2 flex gap-2">
                    {[["true", "Verdadero"], ["false", "Falso"]].map(([v, label]) => (
                      <button
                        key={v}
                        type="button"
                        disabled={submitted}
                        onClick={() => setAnswers((a) => ({ ...a, [q.id]: v }))}
                        className={`rounded-md border px-3 py-1.5 text-sm ${given === v ? "border-brand-400 bg-brand-50" : "border-slate-200"}`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
                {q.type === "mcq" && (
                  <div className="mt-2 flex flex-col gap-1.5">
                    {(q.options ?? []).map((o, j) => (
                      <label key={o} className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm ${given === o ? "border-brand-400 bg-brand-50" : "border-slate-200"}`}>
                        <input type="radio" name={q.id} checked={given === o} disabled={submitted} onChange={() => setAnswers((a) => ({ ...a, [q.id]: o }))} />
                        <span>
                          {String.fromCharCode(65 + j)}. {o}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
                {q.type === "short" && (
                  <input
                    type="text"
                    value={given}
                    disabled={submitted}
                    onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                    className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    placeholder="Escribe tu respuesta"
                  />
                )}
                {submitted && !ok && <p className="mt-2 text-xs text-slate-600">Respuesta: {correctText(q)}</p>}
                {submitted && q.type === "true-false" && q.justification && (
                  <p className="mt-1 text-xs italic text-slate-500">“{q.justification}”</p>
                )}
              </div>
            );
          })}
          {!submitted ? (
            <button type="button" onClick={() => setResult(grade())} className="btn-primary w-fit px-5 py-2.5">
              Submit reading
            </button>
          ) : (
            <div className="flex flex-wrap items-center gap-3 rounded-xl border border-brand-200 bg-brand-50 p-4">
              <p className="text-base font-bold text-slate-900">
                Reading: {result.correct} / {result.total}
              </p>
              <button type="button" onClick={() => onDone(result)} className="btn-accent px-5 py-2.5">
                Continue to Listening →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ListeningPaper({ set, onDone }: { set: MockSet; onDone: (r: PaperResult) => void }) {
  const [idx, setIdx] = useState(0);
  const [acc, setAcc] = useState<PaperResult>({ correct: 0, total: 0, missed: [] });
  const left = useCountdown(LISTENING_SECONDS, true);
  const current = set.listening[idx];

  const handleDone = (correct: number, total: number, missed: ExamMiss[]) => {
    const next = { correct: acc.correct + correct, total: acc.total + total, missed: [...acc.missed, ...missed] };
    if (idx + 1 < set.listening.length) {
      setAcc(next);
      setIdx(idx + 1);
    } else {
      onDone(next);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4">
        <p className="text-sm font-semibold text-slate-800">
          Paper 2 — Listening · 25 questions · 45 min · Audio {"ABC"[idx]} of 3
        </p>
        <Timer left={left} warnAt={300} />
      </div>
      {left === 0 && (
        <p className="rounded-md bg-amber-50 p-3 text-sm text-amber-800">
          Time is up. Finish the audio you are on and continue; the remaining audios are not timed.
        </p>
      )}
      <ListeningExam key={current.id} examSet={current} onExamDone={handleDone} />
    </div>
  );
}

export default function MockExamModule({ set = MOCK_SETS[0] }: { set?: MockSet } = {}) {
  const [stage, setStage] = useState<Stage>("intro");
  const [reading, setReading] = useState<PaperResult | null>(null);
  const [listening, setListening] = useState<PaperResult | null>(null);
  const { completeQuiz } = useStore();

  const restart = () => {
    setReading(null);
    setListening(null);
    setStage("intro");
  };

  if (stage === "intro") {
    return (
      <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Mock Exam</p>
          <h2 className="text-xl font-extrabold text-slate-900">{set.title}</h2>
          <p className="mt-1 text-sm text-slate-500">
            A practice paper in the same layout as the official trial papers. Texts and questions are original practice
            material, not copied from any exam.
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-3 py-2 font-semibold">Paper</th>
                <th className="px-3 py-2 font-semibold">Questions</th>
                <th className="px-3 py-2 font-semibold">Time</th>
                <th className="px-3 py-2 font-semibold">Marks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="px-3 py-2">Paper 1 — Writing</td>
                <td className="px-3 py-2">1 task (choose from 3)</td>
                <td className="px-3 py-2">{WRITING_MINUTES} min</td>
                <td className="px-3 py-2">30 (feedback in the Writing module)</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Paper 2 — Reading</td>
                <td className="px-3 py-2">40 (3 texts)</td>
                <td className="px-3 py-2">60 min</td>
                <td className="px-3 py-2">40</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Paper 2 — Listening</td>
                <td className="px-3 py-2">25 (3 audios)</td>
                <td className="px-3 py-2">45 min</td>
                <td className="px-3 py-2">{set.listening.reduce((n, s) => n + s.totalMarks, 0)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">
          The reading paper submits itself when its time runs out. Listening shows its time but does not stop you.
        </p>
        <button type="button" onClick={() => setStage("writing")} className="btn-primary w-fit px-6 py-2.5">
          Start Paper 1 — Writing
        </button>
      </div>
    );
  }

  if (stage === "writing") {
    return (
      <div className="flex flex-col gap-4">
        <div className="rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm text-brand-800">
          Paper 1 — Writing. Suggested time: {WRITING_MINUTES} minutes. Choose one task and write 250–400 words in one of its
          three text types. Submit it for feedback, then continue.
        </div>
        <WritingModule />
        <button type="button" onClick={() => setStage("reading")} className="btn-accent w-fit px-5 py-2.5">
          Continue to Reading →
        </button>
      </div>
    );
  }

  if (stage === "reading") {
    return (
      <ReadingPaper
        set={set}
        onDone={(r) => {
          setReading(r);
          completeQuiz(`mock-${set.id}-reading`, "medium", r.correct, r.total);
          setStage("listening");
        }}
      />
    );
  }

  if (stage === "listening") {
    return (
      <ListeningPaper
        set={set}
        onDone={(r) => {
          setListening(r);
          completeQuiz(`mock-${set.id}-listening`, "medium", r.correct, r.total);
          setStage("summary");
        }}
      />
    );
  }

  const readingMissed = reading?.missed ?? [];
  const listeningMissed = listening?.missed ?? [];
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
      <h2 className="text-xl font-extrabold text-slate-900">{set.title} — results</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Paper 2 — Reading</p>
          <p className="text-2xl font-extrabold text-slate-900">
            {reading?.correct ?? 0} / {reading?.total ?? 40}
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Paper 2 — Listening</p>
          <p className="text-2xl font-extrabold text-slate-900">
            {listening?.correct ?? 0} / {listening?.total ?? 0}
          </p>
        </div>
      </div>
      <p className="text-sm text-slate-600">Paper 1 (Writing) is marked in the Writing module, not included in this total.</p>
      {[["Reading mistakes", readingMissed], ["Listening mistakes", listeningMissed]].map(([label, list]) => (
        <details key={label as string} className="rounded-xl border border-slate-200 p-4">
          <summary className="cursor-pointer text-sm font-semibold text-slate-800">
            {label as string} ({(list as ExamMiss[]).length})
          </summary>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-slate-700">
            {(list as ExamMiss[]).map((m, i) => (
              <li key={i}>
                <span className="font-medium">{m.prompt}</span>
                <br />
                <span className="text-xs text-slate-500">Your answer: {m.studentAnswer} · Correct: {m.correctAnswer}</span>
              </li>
            ))}
            {(list as ExamMiss[]).length === 0 && <li className="text-slate-500">No mistakes.</li>}
          </ul>
        </details>
      ))}
      <button type="button" onClick={restart} className="btn-outline w-fit px-5 py-2.5">
        Take it again
      </button>
    </div>
  );
}

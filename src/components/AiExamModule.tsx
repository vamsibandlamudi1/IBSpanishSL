/// File: src/components/AiExamModule.tsx
"use client";

import { useState } from "react";
import { speak, stopSpeaking } from "@/lib/speech";

// Shape returned by /api/generate-exam (see that route for the validation rules).
interface ExamQuestion {
  type: "true-false" | "mcq" | "short";
  prompt: string;
  options?: string[];
  correctAnswer: string;
  justification?: string;
}
interface GeneratedExam {
  writing: { theme: string; textType: string; instructions: string; instructionsEs: string; minWords: number; maxWords: number }[];
  listening: { title: string; theme: string; script: string; questions: ExamQuestion[] }[];
  reading: { title: string; theme: string; textType: string; body: string; questions: ExamQuestion[] }[];
  oral: { theme: string; photoDescription: string; discussion: string[] }[];
}

const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").trim().toLowerCase();

/** One question, answered and checked in place. */
function QuestionView({
  id,
  q,
  n,
  answers,
  setAnswer,
  checked,
}: {
  id: string;
  q: ExamQuestion;
  n: number;
  answers: Record<string, string>;
  setAnswer: (key: string, value: string) => void;
  checked: boolean;
}) {
  const given = answers[id] ?? "";
  const isRight = checked && (q.type === "short" ? norm(given) === norm(q.correctAnswer) : given === q.correctAnswer);
  const options = q.type === "true-false" ? [{ v: "true", l: "Verdadero" }, { v: "false", l: "Falso" }] : (q.options ?? []).map((o) => ({ v: o, l: o }));
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
      <p className="text-sm font-semibold text-slate-800">
        {n}. {q.prompt}
      </p>
      {q.type === "short" ? (
        <input
          value={given}
          onChange={(e) => setAnswer(id, e.target.value)}
          disabled={checked}
          placeholder="Escribe tu respuesta…"
          className="mt-2 w-full rounded-md border border-slate-200 px-3 py-1.5 text-sm outline-none focus:border-brand-400"
        />
      ) : (
        <div className="mt-2 flex flex-wrap gap-2">
          {options.map((o) => (
            <button
              key={o.v}
              type="button"
              disabled={checked}
              onClick={() => setAnswer(id, o.v)}
              className={`rounded-md border px-3 py-1.5 text-sm transition ${
                given === o.v ? "border-brand-400 bg-brand-100 text-brand-800" : "border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              {o.l}
            </button>
          ))}
        </div>
      )}
      {checked && (
        <p className={`mt-2 text-xs ${isRight ? "text-green-700" : "text-red-700"}`}>
          {isRight ? "Correct" : `Answer: ${q.type === "true-false" ? (q.correctAnswer === "true" ? "Verdadero" : "Falso") : q.correctAnswer}`}
          {q.justification && <span className="block text-slate-500">Evidence: “{q.justification}”</span>}
        </p>
      )}
    </div>
  );
}

const SECTION_TIMES = { listening: "45 min", reading: "1 h", writing: "1 h 15 min", oral: "15 min prep + oral" };

export default function AiExamModule() {
  const [exam, setExam] = useState<GeneratedExam | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [writingText, setWritingText] = useState<Record<number, string>>({});
  const [writingFeedback, setWritingFeedback] = useState<Record<number, string>>({});
  const [playing, setPlaying] = useState<number | null>(null);
  const [showScript, setShowScript] = useState<Record<number, boolean>>({});

  const generate = async () => {
    setLoading(true);
    setError(null);
    setAnswers({});
    setChecked({});
    setWritingText({});
    setWritingFeedback({});
    try {
      const res = await fetch("/api/generate-exam", { method: "POST" });
      const data = await res.json();
      if (data.available) setExam(data.exam);
      else setError(data.reason === "no-api-key" ? "Add ANTHROPIC_API_KEY to .env.local to generate an exam." : "The exam couldn't be generated this time. Try again.");
    } catch {
      setError("The exam couldn't be generated this time. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const setAnswer = (key: string, value: string) => setAnswers((a) => ({ ...a, [key]: value }));

  const score = (prefix: string, qs: ExamQuestion[]) => {
    const right = qs.filter((q, i) => {
      const id = `${prefix}-${i}`;
      const given = answers[id] ?? "";
      return q.type === "short" ? norm(given) === norm(q.correctAnswer) : given === q.correctAnswer;
    }).length;
    return `${right} / ${qs.length}`;
  };

  const playScript = (i: number, script: string) => {
    if (playing === i) {
      stopSpeaking();
      setPlaying(null);
      return;
    }
    setPlaying(i);
    speak(script, () => setPlaying(null), { rate: 0.9 });
  };

  const submitWriting = async (i: number) => {
    const task = exam!.writing[i];
    const text = writingText[i] ?? "";
    setWritingFeedback((f) => ({ ...f, [i]: "Marking…" }));
    try {
      const res = await fetch("/api/writing-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, textType: task.textType, instructions: task.instructions, minWords: task.minWords, maxWords: task.maxWords }),
      });
      const data = await res.json();
      const f = data.feedback;
      const summary = data.available && f ? (f.marks ? `Language ${f.marks.language}/10 · Message ${f.marks.message}/10 · Text type ${f.marks.conceptual}/10 (approximate). ${f.summary}` : f.summary) : "AI marking isn't available. Compare your text with the format tips in the Writing page.";
      setWritingFeedback((x) => ({ ...x, [i]: summary }));
    } catch {
      setWritingFeedback((x) => ({ ...x, [i]: "AI marking isn't available right now." }));
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-2xl border border-brand-200 bg-brand-50/40 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-bold text-slate-900">🤖 AI-generated exam</p>
            <p className="mt-1 text-xs text-slate-600">
              A new paper written by AI in the structure of the IB exam: 3 reading texts, 3 listening texts, 3 writing tasks (choose one) and 2 oral photos. Every reading justification is checked against its text.
            </p>
          </div>
          <button type="button" onClick={generate} disabled={loading} className="btn-primary px-5 py-2.5 disabled:opacity-60">
            {loading ? "Generating… (about 1 min)" : exam ? "Generate a new exam" : "Generate AI exam"}
          </button>
        </div>
        {error && <p className="mt-3 text-sm text-amber-700">{error}</p>}
      </div>

      {exam && (
        <>
          {/* Paper 2 listening */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-bold text-slate-900">Paper 2 — Listening</h3>
            <p className="mb-3 text-xs text-slate-500">Suggested time {SECTION_TIMES.listening}. Listen to each text, answer its questions, then check.</p>
            {exam.listening.map((l, i) => (
              <div key={i} className="mb-5 flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-slate-800">Audio {i + 1}: {l.title}</p>
                  <button type="button" onClick={() => playScript(i, l.script)} className="btn-outline px-3 py-1 text-xs">
                    {playing === i ? "⏹ Stop" : "🔊 Play audio"}
                  </button>
                  <button type="button" onClick={() => setShowScript((s) => ({ ...s, [i]: !s[i] }))} className="text-xs text-slate-500 underline">
                    {showScript[i] ? "Hide transcript" : "Show transcript (practice only)"}
                  </button>
                </div>
                {showScript[i] && <p className="whitespace-pre-line rounded-md bg-slate-50 p-3 text-sm text-slate-700">{l.script}</p>}
                {l.questions.map((q, j) => (
                  <QuestionView key={j} id={`l${i}-${j}`} q={q} n={j + 1} answers={answers} setAnswer={setAnswer} checked={!!checked[`l${i}`]} />
                ))}
                <div className="flex items-center gap-3">
                  {!checked[`l${i}`] ? (
                    <button type="button" onClick={() => setChecked((c) => ({ ...c, [`l${i}`]: true }))} className="btn-primary px-3 py-1.5 text-xs">Check answers</button>
                  ) : (
                    <span className="text-xs font-semibold text-slate-700">Score: {score(`l${i}`, l.questions)}</span>
                  )}
                </div>
              </div>
            ))}
          </section>

          {/* Paper 2 reading */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-bold text-slate-900">Paper 2 — Reading</h3>
            <p className="mb-3 text-xs text-slate-500">Suggested time {SECTION_TIMES.reading}.</p>
            {exam.reading.map((r, i) => (
              <div key={i} className="mb-6 flex flex-col gap-2">
                <p className="font-semibold text-slate-800">Text {i + 1}: {r.title} <span className="text-xs font-normal text-slate-500">({r.textType})</span></p>
                <div className="flex flex-col gap-2 rounded-md bg-slate-50 p-3 text-sm leading-relaxed text-slate-700">
                  {r.body.split("\n").filter(Boolean).map((p, k) => (
                    <p key={k}>{p}</p>
                  ))}
                </div>
                {r.questions.map((q, j) => (
                  <QuestionView key={j} id={`r${i}-${j}`} q={q} n={j + 1} answers={answers} setAnswer={setAnswer} checked={!!checked[`r${i}`]} />
                ))}
                <div className="flex items-center gap-3">
                  {!checked[`r${i}`] ? (
                    <button type="button" onClick={() => setChecked((c) => ({ ...c, [`r${i}`]: true }))} className="btn-primary px-3 py-1.5 text-xs">Check answers</button>
                  ) : (
                    <span className="text-xs font-semibold text-slate-700">Score: {score(`r${i}`, r.questions)}</span>
                  )}
                </div>
              </div>
            ))}
          </section>

          {/* Paper 1 writing */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-bold text-slate-900">Paper 1 — Writing</h3>
            <p className="mb-3 text-xs text-slate-500">Suggested time {SECTION_TIMES.writing}. Choose one task and write 250–400 words.</p>
            {exam.writing.map((w, i) => (
              <div key={i} className="mb-5 rounded-lg border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-800">Task {i + 1}: {w.textType}</p>
                <p className="mt-1 text-sm text-slate-700">{w.instructions}</p>
                <p className="mt-1 text-sm italic text-slate-500">{w.instructionsEs}</p>
                <textarea
                  value={writingText[i] ?? ""}
                  onChange={(e) => setWritingText((t) => ({ ...t, [i]: e.target.value }))}
                  rows={6}
                  placeholder="Escribe tu respuesta en español…"
                  className="mt-3 w-full rounded-md border border-slate-200 p-3 text-sm outline-none focus:border-brand-400"
                />
                <div className="mt-2 flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-400">{(writingText[i] ?? "").trim().split(/\s+/).filter(Boolean).length} words (target 250–400)</span>
                  <button type="button" onClick={() => submitWriting(i)} disabled={!(writingText[i] ?? "").trim()} className="btn-primary px-3 py-1.5 text-xs disabled:opacity-50">
                    Get feedback
                  </button>
                </div>
                {writingFeedback[i] && <p className="mt-2 text-sm text-slate-700">{writingFeedback[i]}</p>}
              </div>
            ))}
          </section>

          {/* Individual oral */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-bold text-slate-900">Individual Oral</h3>
            <p className="mb-3 text-xs text-slate-500">Choose one photo, prepare for 15 minutes, then present and discuss.</p>
            {exam.oral.map((o, i) => (
              <div key={i} className="mb-4 rounded-lg border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-800">Photo {i + 1}</p>
                <p className="mt-1 text-sm text-slate-700">{o.photoDescription}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Discussion questions</p>
                <ul className="mt-1 list-disc pl-5 text-sm text-slate-700">
                  {o.discussion.map((d, k) => (
                    <li key={k}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  );
}

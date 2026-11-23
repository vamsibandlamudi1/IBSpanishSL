/// File: src/components/ListeningExam.tsx
"use client";

import { useMemo, useState } from "react";
import { useStore } from "@/lib/store";
import { LISTENING_SETS, ListeningItem } from "@/lib/listening-sets";
import { speak, stopSpeaking } from "@/lib/speech";
import { answersMatch } from "@/lib/utils";

/** Paper 2 listening practice in the IB style: one text at a time, a maximum mark, the
 *  transcript hidden unless the student opens it, marks per item, and AI help after checking. */
export default function ListeningExam() {
  const [setIndex, setSetIndex] = useState(0);
  const set = LISTENING_SETS[setIndex];
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [checked, setChecked] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [showScript, setShowScript] = useState(false);
  const [help, setHelp] = useState<string | null>(null);
  const [helpState, setHelpState] = useState<"idle" | "loading" | "unavailable">("idle");
  const { themes, completeQuiz, quizAttempts } = useStore();
  const [filter, setFilter] = useState<"all" | "todo" | "done">("all");

  // Best attempt per set (recorded as listen-<set id>) for the check marks and progress.
  const bestBySet = useMemo(() => {
    const map = new Map<string, { score: number; total: number }>();
    for (const a of quizAttempts) {
      if (!a.themeId.startsWith("listen-")) continue;
      const id = a.themeId.slice("listen-".length);
      const ex = map.get(id);
      if (!ex || a.score / a.total > ex.score / ex.total) map.set(id, { score: a.score, total: a.total });
    }
    return map;
  }, [quizAttempts]);

  const goTo = (i: number) => {
    stopSpeaking();
    setPlaying(false);
    setSetIndex(i);
    setAnswers({});
    setChecked(false);
    setShowScript(false);
    setHelp(null);
    setHelpState("idle");
  };

  const togglePlay = () => {
    if (playing) {
      stopSpeaking();
      setPlaying(false);
      return;
    }
    setPlaying(true);
    speak(set.script, () => setPlaying(false), { rate: 0.9 });
  };

  /** Marks one item. Multiple choice: 1 mark. "Menciona N": one mark per different correct answer, up to N. */
  const markItem = (item: ListeningItem, i: number): number => {
    const given = answers[i];
    if (item.kind === "mc") return given === item.correct ? 1 : 0;
    if (item.kind === "ms") {
      const chosen = Array.isArray(given) ? given : [];
      return Math.min(item.marks, chosen.filter((c) => item.correct.includes(c)).length);
    }
    if (item.kind === "gap") {
      const parts = Array.isArray(given) ? given : [];
      return item.answers.filter((a, j) => answersMatch(parts[j] ?? "", a)).length;
    }
    if (item.kind === "sa") {
      return typeof given === "string" && item.answers.some((a) => answersMatch(given, a)) ? 1 : 0;
    }
    const parts = Array.isArray(given) ? given : [];
    const used = new Set<number>();
    let count = 0;
    for (const p of parts) {
      if (!p.trim()) continue;
      const idx = item.answers.findIndex((a, k) => !used.has(k) && answersMatch(p, a));
      if (idx >= 0) {
        used.add(idx);
        count++;
      }
    }
    return Math.min(item.marks, count);
  };

  const total = set.items.reduce((n, it, i) => n + (checked ? markItem(it, i) : 0), 0);

  const askHelp = async () => {
    setHelpState("loading");
    setHelp(null);
    try {
      const res = await fetch("/api/listening-help", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: set.title,
          script: set.script,
          score: total,
          total: set.totalMarks,
          items: set.items.map((it, i) => ({
            n: i + 1,
            prompt: it.prompt,
            correct: it.kind === "mc" ? it.correct : it.kind === "ms" ? it.correct.join(", ") : it.answers.join(", "),
            given: it.kind === "mc" ? String(answers[i] ?? "") : (Array.isArray(answers[i]) ? (answers[i] as string[]).filter(Boolean).join(", ") : ""),
            correctPoints: markItem(it, i),
            marks: it.marks,
          })),
        }),
      });
      const data = await res.json();
      if (data.available && data.text) {
        setHelp(data.text);
        setHelpState("idle");
      } else {
        setHelpState("unavailable");
      }
    } catch {
      setHelpState("unavailable");
    }
  };

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      <aside className="lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:w-72 lg:shrink-0 lg:overflow-y-auto lg:pr-1">
        <div className="mb-3 rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-sm font-semibold text-slate-800">
            {LISTENING_SETS.filter((st) => bestBySet.has(st.id)).length} of {LISTENING_SETS.length} completed
          </p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-green-500 transition-all"
              style={{ width: `${(LISTENING_SETS.filter((st) => bestBySet.has(st.id)).length / LISTENING_SETS.length) * 100}%` }}
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-1 rounded-lg bg-slate-100 p-1 text-xs font-semibold">
            {(["all", "todo", "done"] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-md py-1 transition ${filter === f ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-700"}`}
              >
                {f === "all" ? "All" : f === "todo" ? "To do" : "Done"}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {themes.map((th, ti) => {
            const sets = LISTENING_SETS.map((st, i) => ({ st, i })).filter(({ st }) => st.themeId === th.id);
            if (sets.length === 0) return null;
            const done = sets.filter(({ st }) => bestBySet.has(st.id)).length;
            const visible = sets.filter(({ st }) => filter === "all" || (filter === "done") === bestBySet.has(st.id));
            if (visible.length === 0) return null;
            return (
              <section key={th.id}>
                <div className="mb-1.5 flex items-center justify-between gap-2 px-1">
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-500">{th.name}</span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {done}/{sets.length}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  {th.subtopics.map((sub, si) => {
                    const group = visible.filter(({ st }) => st.subtopic === sub);
                    if (group.length === 0) return null;
                    return (
                      <div key={sub}>
                        <p className="mb-1 px-1 text-[11px] font-semibold text-slate-400">
                          {ti + 1}.{si + 1} - {sub}
                        </p>
                        <div className="flex flex-col gap-1.5">
                  {group.map(({ st, i }) => {
                    const active = i === setIndex;
                    const best = bestBySet.get(st.id);
                    return (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => goTo(i)}
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
                            <p className={`text-sm font-semibold leading-snug ${active ? "text-brand-800" : "text-slate-800"}`}>
                              {i + 1}. {st.title}
                            </p>
                            <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-400">
                              {st.totalMarks} marks
                              {best && <span className="ml-1.5 normal-case text-green-700">· {best.score}/{best.total}</span>}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col gap-5">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm font-bold text-slate-900">[Puntaje máximo: {set.totalMarks}]</p>
          <span className="text-xs text-slate-400">{set.title}</span>
        </div>
        <p className="mt-2 text-base font-semibold text-slate-900">{set.intro}</p>

        <div className="mt-4 flex flex-wrap items-center gap-3 rounded-lg bg-slate-50 p-3">
          <button type="button" onClick={togglePlay} className="btn-primary px-4 py-2 text-sm">
            {playing ? "⏹ Stop" : "▶ Play"}
          </button>
          <button type="button" onClick={() => setShowScript((v) => !v)} className="text-xs font-semibold text-slate-600 underline">
            {showScript ? "Hide transcript" : "Show transcript (practice only)"}
          </button>
        </div>
        {showScript && <p className="mt-3 whitespace-pre-line rounded-md bg-slate-50 p-3 text-sm leading-relaxed text-slate-700">{set.script}</p>}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
        {set.items.map((item, i) => {
          const mark = checked ? markItem(item, i) : null;
          return (
            <div key={i} className="mb-6 border-b border-slate-100 pb-5 last:border-0 last:pb-0">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold text-slate-900">
                  {i + 1}.{" "}
                  {item.kind === "gap" ? "Completa los espacios en blanco. Usa como máximo tres palabras por espacio." : item.prompt}
                </p>
                <span className="shrink-0 text-xs font-semibold text-slate-500">
                  [{item.marks}]{mark !== null && ` · ${mark}/${item.marks}`}
                </span>
              </div>

              {item.kind === "mc" && (
                <div className="mt-2 flex flex-col gap-1.5">
                  {item.options.map((o, j) => (
                    <label
                      key={o}
                      className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm ${answers[i] === o ? "border-brand-400 bg-brand-50" : "border-slate-200"}`}
                    >
                      <input type="radio" name={`q${setIndex}-${i}`} checked={answers[i] === o} disabled={checked} onChange={() => !checked && setAnswers((a) => ({ ...a, [i]: o }))} />
                      <span>
                        {String.fromCharCode(65 + j)}. {o}
                      </span>
                      {checked && o === item.correct && <span className="ml-auto text-xs font-semibold text-green-700">✓</span>}
                    </label>
                  ))}
                </div>
              )}

              {item.kind === "ms" && (
                <div className="mt-2 flex flex-col gap-1.5">
                  {item.options.map((o, j) => {
                    const chosen = Array.isArray(answers[i]) ? (answers[i] as string[]) : [];
                    const on = chosen.includes(o);
                    return (
                      <label key={o} className={`flex cursor-pointer items-start gap-2 rounded-md border px-3 py-2 text-sm ${on ? "border-brand-400 bg-brand-50" : "border-slate-200"}`}>
                        <input
                          type="checkbox"
                          checked={on}
                          disabled={checked}
                          onChange={() => {
                            if (checked) return;
                            const next = on ? chosen.filter((c) => c !== o) : chosen.length < item.marks ? [...chosen, o] : chosen;
                            setAnswers((a) => ({ ...a, [i]: next }));
                          }}
                        />
                        <span>
                          {String.fromCharCode(65 + j)}. {o}
                        </span>
                        {checked && item.correct.includes(o) && <span className="ml-auto text-xs font-semibold text-green-700">✓</span>}
                      </label>
                    );
                  })}
                </div>
              )}

              {item.kind === "gap" && (
                <div className="mt-2 flex flex-col gap-2 text-sm leading-loose text-slate-700">
                  <p>
                    {item.prompt.split("___").map((part, j, arr) => (
                      <span key={j}>
                        {part}
                        {j < arr.length - 1 && (
                          <input
                            value={Array.isArray(answers[i]) ? ((answers[i] as string[])[j] ?? "") : ""}
                            disabled={checked}
                            onChange={(e) => {
                              const next = [...(Array.isArray(answers[i]) ? (answers[i] as string[]) : [])];
                              next[j] = e.target.value;
                              setAnswers((a) => ({ ...a, [i]: next }));
                            }}
                            className="mx-1 w-36 rounded-md border border-slate-300 px-2 py-0.5 text-sm outline-none focus:border-brand-400"
                          />
                        )}
                      </span>
                    ))}
                  </p>
                  {checked && <p className="text-xs text-slate-500">Respuestas: {item.answers.join(" / ")}</p>}
                </div>
              )}

              {item.kind === "sa" && (
                <div className="mt-2">
                  <input
                    value={typeof answers[i] === "string" ? (answers[i] as string) : ""}
                    disabled={checked}
                    onChange={(e) => !checked && setAnswers((a) => ({ ...a, [i]: e.target.value }))}
                    placeholder="Escribe tu respuesta…"
                    className="w-full rounded-md border border-slate-200 px-3 py-1.5 text-sm outline-none focus:border-brand-400"
                  />
                  {checked && <p className="mt-1 text-xs text-slate-500">Respuesta: {item.answers.join(" / ")}</p>}
                </div>
              )}

              {item.kind === "menciona" && (
                <div className="mt-2 flex flex-col gap-2">
                  {Array.from({ length: item.marks }, (_, j) => {
                    const parts = Array.isArray(answers[i]) ? (answers[i] as string[]) : [];
                    return (
                      <input
                        key={j}
                        value={parts[j] ?? ""}
                        disabled={checked}
                        onChange={(e) => {
                          const next = [...(Array.isArray(answers[i]) ? (answers[i] as string[]) : [])];
                          next[j] = e.target.value;
                          setAnswers((a) => ({ ...a, [i]: next }));
                        }}
                        placeholder={`Respuesta ${j + 1}`}
                        className="w-full rounded-md border border-slate-200 px-3 py-1.5 text-sm outline-none focus:border-brand-400"
                      />
                    );
                  })}
                  {checked && <p className="text-xs text-slate-500">Respuestas válidas: {item.answers.join(" / ")}</p>}
                </div>
              )}
            </div>
          );
        })}

        <div className="mt-2 flex flex-wrap items-center gap-3">
          {!checked ? (
            <button
              type="button"
              onClick={() => {
                const t = set.items.reduce((n, it, i) => n + markItem(it, i), 0);
                completeQuiz(`listen-${set.id}`, "medium", t, set.totalMarks);
                setChecked(true);
              }}
              className="btn-primary px-4 py-2 text-sm"
            >
              Verificar respuestas
            </button>
          ) : (
            <>
              <p className="text-base font-bold text-slate-900">
                {total} / {set.totalMarks}
              </p>
              <button type="button" onClick={askHelp} disabled={helpState === "loading"} className="btn-outline text-sm disabled:opacity-50">
                {helpState === "loading" ? "Asking AI…" : "✨ AI help for this set"}
              </button>
              <button type="button" onClick={() => goTo(setIndex)} className="btn-outline text-sm">
                Try again
              </button>
            </>
          )}
        </div>

        {helpState === "unavailable" && (
          <p className="mt-3 text-xs text-amber-700">AI help isn&apos;t available right now (check ANTHROPIC_API_KEY).</p>
        )}
        {help && <p className="mt-4 whitespace-pre-line rounded-lg bg-brand-50/60 p-4 text-sm leading-relaxed text-slate-800">{help}</p>}
      </div>
      </div>
    </div>
  );
}

/// File: src/components/WordLookup.tsx
"use client";

import { useMemo, useState } from "react";
import { useStore } from "@/lib/store";
import { speak } from "@/lib/speech";

interface AiResult {
  word: string;
  en: string;
  also: string;
  exampleEs: string;
  exampleEn: string;
  note: string;
}

// Accent- and case-insensitive comparison, so "estres" finds "el estrés".
interface FreeResult {
  direct: string;
  senses: { partOfSpeech: string; definitions: string[] }[];
}

const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();

/** Quick word lookup in the navbar: searches the app's own theme vocabulary instantly, and
 *  offers an AI lookup (meaning, example, usage note) for any word or phrase. */
export default function WordLookup() {
  const { themes } = useStore();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [ai, setAi] = useState<AiResult | null>(null);
  const [aiState, setAiState] = useState<"idle" | "loading" | "unavailable">("idle");
  const [free, setFree] = useState<FreeResult | null>(null);
  const [freeState, setFreeState] = useState<"idle" | "loading" | "none">("idle");

  // Free lookup (Wiktionary + MyMemory): no API key and no AI credits. Runs on Enter.
  const freeLookup = async () => {
    const word = query.trim();
    if (!word) return;
    setFreeState("loading");
    setFree(null);
    try {
      const res = await fetch(`/api/dictionary?word=${encodeURIComponent(word)}`);
      const data = await res.json();
      if (data.available && data.result) {
        setFree(data.result);
        setFreeState("idle");
      } else {
        setFreeState("none");
      }
    } catch {
      setFreeState("none");
    }
  };

  const allVocab = useMemo(() => themes.flatMap((t) => t.vocabulary.map((v) => ({ ...v, theme: t.name }))), [themes]);

  const q = fold(query);
  const local = useMemo(() => {
    if (!q) return [];
    const seen = new Set<string>();
    return allVocab
      .filter((v) => {
        const es = fold(v.es);
        const en = fold(v.en);
        return es.includes(q) || en.includes(q);
      })
      .sort((a, b) => {
        const ea = fold(a.es).startsWith(q) ? 0 : 1;
        const eb = fold(b.es).startsWith(q) ? 0 : 1;
        return ea - eb;
      })
      .filter((v) => {
        const key = `${v.es}|${v.en}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .slice(0, 8);
  }, [allVocab, q]);

  const askAi = async () => {
    const word = query.trim();
    if (!word) return;
    setAiState("loading");
    setAi(null);
    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word }),
      });
      const data = await res.json();
      if (data.available && data.result) {
        setAi(data.result);
        setAiState("idle");
      } else {
        setAiState("unavailable");
      }
    } catch {
      setAiState("unavailable");
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Look up a Spanish word"
        title="Look up a Spanish word"
        className="flex h-8 items-center gap-1 rounded-full border border-slate-200 px-2.5 text-xs font-medium text-slate-600 hover:bg-slate-100"
      >
        🔎 <span className="hidden sm:inline">Word lookup</span>
      </button>

      {open && (
        <div className="absolute right-0 top-10 z-50 w-80 max-w-[90vw] rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              freeLookup();
            }}
            className="flex gap-2"
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setAi(null);
                setAiState("idle");
                setFree(null);
                setFreeState("idle");
              }}
              placeholder="Spanish or English word…"
              className="min-w-0 flex-1 rounded-md border border-slate-200 px-3 py-1.5 text-sm outline-none focus:border-brand-400"
            />
            <button type="submit" disabled={!query.trim() || freeState === "loading"} className="btn-primary px-3 py-1.5 text-xs disabled:opacity-50">
              {freeState === "loading" ? "…" : "Look up"}
            </button>
          </form>

          {query.trim() && (
            <div className="mt-3">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400">In your theme vocabulary</p>
              {local.length === 0 ? (
                <p className="text-xs text-slate-500">No match in the vocabulary. Press AI for a translation.</p>
              ) : (
                <ul className="flex flex-col gap-1">
                  {local.map((v, i) => (
                    <li key={i} className="flex items-center justify-between gap-2 rounded-md px-2 py-1 text-sm hover:bg-slate-50">
                      <span>
                        <span className="font-semibold text-slate-800">{v.es}</span>
                        <span className="text-slate-500"> — {v.en}</span>
                        <span className="block text-[10px] text-slate-400">{v.theme} · {v.subtopic}</span>
                      </span>
                      <button type="button" onClick={() => speak(v.es, undefined, { rate: 0.85 })} aria-label={`Hear ${v.es}`} className="text-xs text-slate-500 hover:text-slate-800">
                        🔊
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {freeState === "none" && query.trim() && (
            <p className="mt-3 text-xs text-slate-500">No free dictionary entry found. Try the AI button for a fuller explanation.</p>
          )}

          {free && (
            <div className="mt-3 rounded-lg border border-slate-200 p-3 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Free dictionary</p>
              {free.direct && (
                <p className="mt-1 text-base font-bold text-slate-900">
                  {query.trim()} — {free.direct}
                </p>
              )}
              {free.senses.map((sense, i) => (
                <div key={i} className="mt-2">
                  {sense.partOfSpeech && <p className="text-[11px] font-semibold uppercase text-slate-400">{sense.partOfSpeech}</p>}
                  <ul className="list-disc pl-5 text-slate-700">
                    {sense.definitions.map((d, k) => (
                      <li key={k}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <button
                type="button"
                onClick={askAi}
                disabled={aiState === "loading"}
                className="mt-3 text-xs font-semibold text-brand-700 underline disabled:opacity-50"
              >
                {aiState === "loading" ? "Asking AI…" : "Explain more with AI (uses credits)"}
              </button>
            </div>
          )}

          {aiState === "unavailable" && (
            <p className="mt-3 text-xs text-amber-700">AI lookup isn&apos;t available right now (check ANTHROPIC_API_KEY).</p>
          )}

          {ai && (
            <div className="mt-3 rounded-lg bg-brand-50/60 p-3 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">AI translation</p>
              <p className="mt-1 text-base font-bold text-slate-900">
                {ai.word} — {ai.en}
              </p>
              {ai.also && <p className="text-xs text-slate-600">Also: {ai.also}</p>}
              {ai.exampleEs && (
                <p className="mt-2 text-slate-700">
                  <span className="italic">“{ai.exampleEs}”</span>
                  <span className="block text-xs text-slate-500">{ai.exampleEn}</span>
                </p>
              )}
              {ai.note && <p className="mt-2 text-xs text-slate-600">Note: {ai.note}</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

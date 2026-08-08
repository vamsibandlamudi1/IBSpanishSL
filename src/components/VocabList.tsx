/// File: src/components/VocabList.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { VocabItem } from "@/lib/types";
import { speak, stopSpeaking } from "@/lib/speech";

const stripAccents = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");

/** Renders a theme's vocabulary (typically 60-70 words) as a searchable,
 *  alphabetized Spanish/English table instead of one long unsorted grid —
 *  the previous flat dump was hard to scan or jump to a specific word in.
 *  All words are shown; the table scrolls internally rather than paginating.
 *  Each row has a 🔊 button that speaks the Spanish word aloud (Web Speech
 *  API, see lib/speech.ts) so students can hear pronunciation on demand. */
export default function VocabList({ vocabulary }: { vocabulary: VocabItem[] }) {
  const [query, setQuery] = useState("");
  const [speakingWord, setSpeakingWord] = useState<string | null>(null);

  useEffect(() => stopSpeaking, []); // stop any playback if the list unmounts

  const handleSpeak = (word: string) => {
    setSpeakingWord(word);
    speak(word, () => setSpeakingWord((current) => (current === word ? null : current)));
  };

  const sorted = useMemo(() => [...vocabulary].sort((a, b) => a.es.localeCompare(b.es, "es")), [vocabulary]);

  const filtered = useMemo(() => {
    const q = stripAccents(query.trim().toLowerCase());
    if (!q) return sorted;
    return sorted.filter((v) => stripAccents(v.es.toLowerCase()).includes(q) || v.en.toLowerCase().includes(q));
  }, [sorted, query]);

  const isSearching = query.trim().length > 0;
  const visible = filtered;

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-slate-800">Example vocabulary</p>
        <span className="text-xs text-slate-400">{vocabulary.length} words</span>
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Spanish or English..."
        className="mt-2 w-full rounded-full border border-slate-200 px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-brand-500"
      />

      {visible.length === 0 ? (
        <p className="mt-3 text-sm text-slate-400">No words match &ldquo;{query}&rdquo;.</p>
      ) : (
        <div className="mt-3 overflow-hidden rounded-xl border border-slate-200">
          <div className="grid grid-cols-2 bg-slate-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
            <span>Español</span>
            <span>English</span>
          </div>
          <div className="divide-y divide-slate-100">
            {visible.map((v) => (
              <div key={v.es} className="grid grid-cols-2 items-center px-3 py-1.5 text-sm odd:bg-white even:bg-slate-50/60">
                <span className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleSpeak(v.es)}
                    aria-label={`Play pronunciation of ${v.es}`}
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs transition ${
                      speakingWord === v.es ? "bg-brand-200 text-brand-800" : "text-slate-400 hover:bg-slate-200 hover:text-slate-700"
                    }`}
                  >
                    🔊
                  </button>
                  <span className="font-medium text-slate-800">{v.es}</span>
                </span>
                <span className="text-slate-600">{v.en}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {isSearching && (
        <p className="mt-2 text-xs text-slate-400">
          {filtered.length} match{filtered.length === 1 ? "" : "es"}
        </p>
      )}
    </div>
  );
}

/// File: src/components/VocabList.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { VocabItem } from "@/lib/types";
import { speak, stopSpeaking } from "@/lib/speech";
import WordDetailPanel from "./WordDetailPanel";

const stripAccents = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");

/** Renders a theme's vocabulary as a searchable two-column layout:
 *  - Left: compact alphabetized word list with 🔊 quick-play
 *  - Right: sticky detail panel (big word, translation, subtopic tag, 2 example
 *    sentences with their own listen buttons) — appears on click.
 *  This mirrors how professional dictionary apps (WordReference, Collins) work:
 *  browse the list on the left, deep-dive a word on the right without losing
 *  your place in the list. */
export default function VocabList({ vocabulary }: { vocabulary: VocabItem[] }) {
  const [query, setQuery] = useState("");
  const [speakingWord, setSpeakingWord] = useState<string | null>(null);
  const [selectedWord, setSelectedWord] = useState<VocabItem | null>(null);

  useEffect(() => stopSpeaking, []);

  const handleSpeak = (word: string, e: React.MouseEvent) => {
    e.stopPropagation(); // don't also select the word
    setSpeakingWord(word);
    speak(word, () => setSpeakingWord((cur) => (cur === word ? null : cur)));
  };

  const sorted = useMemo(
    () => [...vocabulary].sort((a, b) => a.es.localeCompare(b.es, "es")),
    [vocabulary]
  );

  const filtered = useMemo(() => {
    const q = stripAccents(query.trim().toLowerCase());
    if (!q) return sorted;
    return sorted.filter(
      (v) =>
        stripAccents(v.es.toLowerCase()).includes(q) ||
        v.en.toLowerCase().includes(q)
    );
  }, [sorted, query]);

  const isSearching = query.trim().length > 0;

  return (
    <div className="vocab-split-layout">
      {/* ── LEFT: word list ──────────────────────────────────────────── */}
      <div className="vocab-list-pane">
        {/* Header row */}
        <div className="vocab-list-header">
          <div className="vocab-list-header-top">
            <p className="vocab-list-title">Vocabulary</p>
            <span className="vocab-list-count">{vocabulary.length} words</span>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Spanish or English…"
            className="vocab-search-input"
          />
          {isSearching && (
            <p className="vocab-search-count">
              {filtered.length} match{filtered.length === 1 ? "" : "es"}
            </p>
          )}
        </div>

        {/* Word rows */}
        <div className="vocab-word-list">
          {filtered.length === 0 ? (
            <p className="vocab-no-match">No words match &ldquo;{query}&rdquo;.</p>
          ) : (
            filtered.map((v) => {
              const isActive = selectedWord?.es === v.es;
              return (
                <button
                  key={`${v.es}-${v.subtopic}`}
                  type="button"
                  onClick={() => setSelectedWord(isActive ? null : v)}
                  className={`vocab-word-row ${isActive ? "vocab-word-row--active" : ""}`}
                >
                  <div className="vocab-word-row-left">
                    <button
                      type="button"
                      onClick={(e) => handleSpeak(v.es, e)}
                      aria-label={`Play pronunciation of ${v.es}`}
                      className={`vocab-word-speak-btn ${speakingWord === v.es ? "vocab-word-speak-btn--active" : ""}`}
                    >
                      🔊
                    </button>
                    <span className="vocab-word-es">{v.es}</span>
                  </div>
                  <span className="vocab-word-en">{v.en}</span>
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* ── RIGHT: detail panel ──────────────────────────────────────── */}
      <div className={`vocab-detail-pane ${selectedWord ? "vocab-detail-pane--visible" : ""}`}>
        <WordDetailPanel
          word={selectedWord}
          onClose={() => setSelectedWord(null)}
        />
      </div>
    </div>
  );
}

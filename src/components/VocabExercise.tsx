/// File: src/components/VocabExercise.tsx
"use client";

import { useMemo, useState } from "react";
import { VocabItem } from "@/lib/types";
import { speak } from "@/lib/speech";
import { shuffle } from "@/lib/utils";

/** The Theme Practice page's interactive exercise: a matching game (Spanish
 *  word -> English meaning) followed by a short fill-in-the-blank drill,
 *  both generated from the theme's vocabulary list in lib/data.ts. This is
 *  intentionally self-contained (no points/badges) — it's low-stakes
 *  practice, distinct from the scored Quiz Module. */
export default function VocabExercise({ vocabulary }: { vocabulary: VocabItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <MatchingGame vocabulary={vocabulary} />
      <FillInTheBlank vocabulary={vocabulary} />
    </div>
  );
}

function MatchingGame({ vocabulary }: { vocabulary: VocabItem[] }) {
  const words = useMemo(() => vocabulary.slice(0, 6), [vocabulary]);
  const [englishOrder] = useState(() => shuffle(words.map((w) => w.en)));
  const [selectedEs, setSelectedEs] = useState<string | null>(null);
  const [matched, setMatched] = useState<Record<string, string>>({});
  const [wrongFlash, setWrongFlash] = useState<string | null>(null);

  const handlePickEn = (en: string) => {
    if (!selectedEs) return;
    const correctEn = words.find((w) => w.es === selectedEs)?.en;
    if (correctEn === en) {
      setMatched((prev) => ({ ...prev, [selectedEs]: en }));
      setSelectedEs(null);
    } else {
      setWrongFlash(en);
      setTimeout(() => setWrongFlash(null), 500);
      setSelectedEs(null);
    }
  };

  const allMatched = Object.keys(matched).length === words.length;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="font-bold text-slate-900">Matching exercise</h3>
      <p className="mb-3 text-sm text-slate-600">
        Click a Spanish word, then click its English meaning.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          {words.map((w) => (
            <div key={w.es} className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => speak(w.es)}
                aria-label={`Play pronunciation of ${w.es}`}
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs text-slate-400 hover:bg-slate-200 hover:text-slate-700"
              >
                🔊
              </button>
              <button
                type="button"
                disabled={!!matched[w.es]}
                onClick={() => setSelectedEs(w.es)}
                className={`flex-1 rounded-md border px-2 py-1.5 text-left text-sm ${
                  matched[w.es]
                    ? "border-green-300 bg-green-50 text-green-700"
                    : selectedEs === w.es
                    ? "border-brand-500 bg-brand-50"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
              >
                {w.es}
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {englishOrder.map((en) => {
            const isMatched = Object.values(matched).includes(en);
            return (
              <button
                key={en}
                type="button"
                disabled={isMatched}
                onClick={() => handlePickEn(en)}
                className={`rounded-md border px-2 py-1.5 text-left text-sm ${
                  isMatched
                    ? "border-green-300 bg-green-50 text-green-700"
                    : wrongFlash === en
                    ? "border-red-400 bg-red-50"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
              >
                {en}
              </button>
            );
          })}
        </div>
      </div>
      {allMatched && (
        <p className="mt-3 text-sm font-medium text-green-700">
          Well done — you matched all {words.length} words!
        </p>
      )}
    </div>
  );
}

function FillInTheBlank({ vocabulary }: { vocabulary: VocabItem[] }) {
  const items = useMemo(() => vocabulary.slice(0, 4), [vocabulary]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const isCorrect = (es: string) => answers[es]?.trim().toLowerCase() === es.toLowerCase();
  const correctCount = items.filter((w) => isCorrect(w.es)).length;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="font-bold text-slate-900">Fill in the blank</h3>
      <p className="mb-3 text-sm text-slate-600">
        Type the Spanish word that matches the English meaning shown.
      </p>
      <div className="flex flex-col gap-3">
        {items.map((w) => (
          <div key={w.es}>
            <label className="text-sm text-slate-700">
              La palabra para <span className="font-semibold">&ldquo;{w.en}&rdquo;</span> es: ___
            </label>
            <input
              type="text"
              value={answers[w.es] ?? ""}
              onChange={(e) => setAnswers((prev) => ({ ...prev, [w.es]: e.target.value }))}
              onKeyDown={(e) => {
                if (e.key === "Enter") setChecked(true);
              }}
              placeholder="Escribe en español..."
              className={`mt-1 w-full rounded-md border px-2 py-1.5 text-sm outline-none focus:ring-2 focus:ring-brand-500 ${
                checked ? (isCorrect(w.es) ? "border-green-400" : "border-red-400") : "border-slate-200"
              }`}
            />
            {checked && !isCorrect(w.es) && (
              <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
                Correct answer: {w.es}
                <button
                  type="button"
                  onClick={() => speak(w.es)}
                  aria-label={`Play pronunciation of ${w.es}`}
                  className="flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-slate-400 hover:bg-slate-200 hover:text-slate-700"
                >
                  🔊
                </button>
              </p>
            )}
          </div>
        ))}
      </div>
      <button type="button" onClick={() => setChecked(true)} className="btn-primary mt-3 px-3 py-1.5">
        Check answers
      </button>
      {checked && (
        <p className="mt-2 text-sm font-medium text-slate-700">
          You got {correctCount} / {items.length} correct.
        </p>
      )}
    </div>
  );
}

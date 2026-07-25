/// File: src/components/PuzzlePopup.tsx
"use client";

import { useMemo, useState } from "react";
import { BRAIN_PUZZLES, MEMORY_PUZZLES, BrainPuzzle, MemoryPuzzle } from "@/lib/puzzles";
import { shuffle } from "@/lib/utils";

type PoolEntry = { kind: "brain"; puzzle: BrainPuzzle } | { kind: "memory"; puzzle: MemoryPuzzle };

const POOL: PoolEntry[] = [
  ...BRAIN_PUZZLES.map((puzzle): PoolEntry => ({ kind: "brain", puzzle })),
  ...MEMORY_PUZZLES.map((puzzle): PoolEntry => ({ kind: "memory", puzzle })),
];

/** A single quick puzzle popup shown whenever the student crosses a new
 *  100-point milestone (see PointsMilestoneWatcher.tsx) — "improve your
 *  thinking" brain breaks distinct from the Spanish-vocabulary mini-game
 *  that fires every 15 questions. Randomly picks one of the 50 puzzles in
 *  lib/puzzles.ts (mostly quick multiple-choice brain teasers, occasionally
 *  a small memory-matching game) and awards a small bonus on completion. */
export default function PuzzlePopup({ onClose }: { onClose: (bonusPoints: number) => void }) {
  const [entry] = useState<PoolEntry>(() => POOL[Math.floor(Math.random() * POOL.length)]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-amber-700">
            100-point milestone!
          </span>
        </div>
        <h3 className="mb-3 text-lg font-bold text-slate-900">🧠 Quick brain break</h3>
        {entry.kind === "brain" ? (
          <BrainPuzzleView puzzle={entry.puzzle} onDone={onClose} />
        ) : (
          <MemoryPuzzleView puzzle={entry.puzzle} onDone={onClose} />
        )}
      </div>
    </div>
  );
}

function BrainPuzzleView({ puzzle, onDone }: { puzzle: BrainPuzzle; onDone: (bonus: number) => void }) {
  const options = useMemo(() => shuffle(puzzle.options), [puzzle]);
  const [picked, setPicked] = useState<string | null>(null);

  const handlePick = (opt: string) => {
    if (picked) return;
    setPicked(opt);
  };

  const correct = picked === puzzle.correctAnswer;

  return (
    <div>
      <p className="mb-4 text-base font-medium text-slate-800">{puzzle.prompt}</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((opt) => {
          const showState = picked && (opt === puzzle.correctAnswer || opt === picked);
          return (
            <button
              key={opt}
              type="button"
              disabled={!!picked}
              onClick={() => handlePick(opt)}
              className={`rounded-md border px-3 py-2 text-left text-sm transition ${
                showState
                  ? opt === puzzle.correctAnswer
                    ? "border-green-400 bg-green-50"
                    : "border-red-400 bg-red-50"
                  : "border-slate-200 hover:bg-slate-50"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {picked && (
        <div className="mt-4">
          <p className={`text-sm font-medium ${correct ? "text-green-700" : "text-red-700"}`}>
            {correct ? "Nice thinking — correct!" : `Not quite — the answer was "${puzzle.correctAnswer}".`}
          </p>
          <button type="button" onClick={() => onDone(correct ? 10 : 5)} className="btn-accent mt-3">
            Continue ({correct ? "+10" : "+5"} points)
          </button>
        </div>
      )}
    </div>
  );
}

interface Card {
  key: string;
  pairIndex: number;
  label: string;
}

function MemoryPuzzleView({ puzzle, onDone }: { puzzle: MemoryPuzzle; onDone: (bonus: number) => void }) {
  const cards = useMemo<Card[]>(() => {
    const built: Card[] = puzzle.pairs.flatMap((pair, i) => [
      { key: `${i}-a`, pairIndex: i, label: pair.a },
      { key: `${i}-b`, pairIndex: i, label: pair.b },
    ]);
    return shuffle(built);
  }, [puzzle]);

  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  const allMatched = matched.size === puzzle.pairs.length;

  const handleFlip = (card: Card) => {
    if (locked || flipped.includes(card.key) || matched.has(card.pairIndex)) return;
    const next = [...flipped, card.key];
    setFlipped(next);

    if (next.length === 2) {
      setMoves((m) => m + 1);
      const [firstKey, secondKey] = next;
      const first = cards.find((c) => c.key === firstKey)!;
      const second = cards.find((c) => c.key === secondKey)!;
      if (first.pairIndex === second.pairIndex) {
        setMatched((prev) => new Set(prev).add(first.pairIndex));
        setFlipped([]);
      } else {
        setLocked(true);
        setTimeout(() => {
          setFlipped([]);
          setLocked(false);
        }, 700);
      }
    }
  };

  return (
    <div>
      <p className="mb-3 text-sm text-slate-600">
        Match the pairs: <span className="font-semibold">{puzzle.title}</span>
      </p>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {cards.map((card) => {
          const isRevealed = flipped.includes(card.key) || matched.has(card.pairIndex);
          return (
            <button
              key={card.key}
              type="button"
              onClick={() => handleFlip(card)}
              disabled={isRevealed}
              className={`flex h-14 items-center justify-center rounded-md border p-1 text-center text-xs font-medium transition ${
                matched.has(card.pairIndex)
                  ? "border-green-400 bg-green-50 text-green-700"
                  : isRevealed
                  ? "border-brand-400 bg-brand-50 text-brand-700"
                  : "border-slate-200 bg-slate-100 text-slate-400 hover:bg-slate-200"
              }`}
            >
              {isRevealed ? card.label : "?"}
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-slate-600">Moves: {moves}</p>
      {allMatched && (
        <div className="mt-3">
          <p className="text-sm font-medium text-green-700">Solved in {moves} moves!</p>
          <button type="button" onClick={() => onDone(15)} className="btn-accent mt-3">
            Continue (+15 points)
          </button>
        </div>
      )}
    </div>
  );
}

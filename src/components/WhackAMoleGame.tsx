/// File: src/components/WhackAMoleGame.tsx
"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 45;
const HOLES = 9;
const SPAWN_INTERVAL_MS = 700;
const POP_VISIBLE_MS = 650;

/** Classic whack-a-mole: click the mole as soon as it pops up. One of the
 *  rotating engagement mini-games (EngagementGameWatcher.tsx). */
export default function WhackAMoleGame({ onDone }: { onDone: (bonus: number) => void }) {
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const [activeHole, setActiveHole] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [over, setOver] = useState(false);
  const popTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!started || over) return;
    const spawnInterval = setInterval(() => {
      setActiveHole((prev) => {
        let next = Math.floor(Math.random() * HOLES);
        while (next === prev) next = Math.floor(Math.random() * HOLES);
        return next;
      });
      if (popTimeout.current) clearTimeout(popTimeout.current);
      popTimeout.current = setTimeout(() => setActiveHole(null), POP_VISIBLE_MS);
    }, SPAWN_INTERVAL_MS);
    return () => {
      clearInterval(spawnInterval);
      if (popTimeout.current) clearTimeout(popTimeout.current);
    };
  }, [started, over]);

  useEffect(() => {
    if (!started || over) return;
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(interval);
          setOver(true);
          setActiveHole(null);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [started, over]);

  const whack = (i: number) => {
    if (i !== activeHole) return;
    setScore((s) => s + 1);
    setActiveHole(null);
  };

  const bonus = score >= 18 ? 15 : score >= 10 ? 10 : score >= 4 ? 6 : 3;

  if (!started) {
    return (
      <div className="text-center">
        <p className="mb-4 text-sm text-slate-600">Click the mole as soon as it pops up! {DURATION} seconds.</p>
        <button type="button" onClick={() => setStarted(true)} className="btn-accent">
          Start
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-semibold text-slate-700">🔨 Score: {score}</span>
        <span className="rounded-full bg-amber-100 px-2 py-0.5 font-semibold text-amber-700">{timeLeft}s</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: HOLES }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => whack(i)}
            disabled={over}
            aria-label={`Hole ${i + 1}${activeHole === i ? " — mole up!" : ""}`}
            className="flex h-16 items-center justify-center rounded-lg border border-slate-300 bg-slate-100 text-3xl"
          >
            {activeHole === i ? <span className="animate-pop-in">🐹</span> : ""}
          </button>
        ))}
      </div>
      {over && (
        <div className="mt-4 text-center">
          <p className="text-sm font-medium text-slate-700">Final score: {score}</p>
          <button type="button" onClick={() => onDone(bonus)} className="btn-accent mt-3">
            Continue (+{bonus} points)
          </button>
        </div>
      )}
    </div>
  );
}

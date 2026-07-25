/// File: src/components/TargetShooterGame.tsx
"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 45;
const TARGET_TTL_MS = 900;

interface Target {
  id: number;
  x: number;
  y: number;
}

/** Carnival-style target gallery: click each bullseye before it vanishes.
 *  One of the rotating engagement mini-games (EngagementGameWatcher.tsx). */
export default function TargetShooterGame({ onDone }: { onDone: (bonus: number) => void }) {
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const [target, setTarget] = useState<Target | null>(null);
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [over, setOver] = useState(false);
  const nextId = useRef(0);
  const targetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const spawnTarget = () => {
    const id = nextId.current++;
    setTarget({ id, x: 8 + Math.random() * 84, y: 8 + Math.random() * 74 });
    targetTimeout.current = setTimeout(() => {
      setMisses((m) => m + 1);
      spawnTarget();
    }, TARGET_TTL_MS);
  };

  useEffect(() => {
    if (!started) return;
    spawnTarget();
    return () => {
      if (targetTimeout.current) clearTimeout(targetTimeout.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  useEffect(() => {
    if (!started || over) return;
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(interval);
          if (targetTimeout.current) clearTimeout(targetTimeout.current);
          setTarget(null);
          setOver(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [started, over]);

  const handleHit = () => {
    if (targetTimeout.current) clearTimeout(targetTimeout.current);
    setHits((h) => h + 1);
    spawnTarget();
  };

  const bonus = hits >= 22 ? 15 : hits >= 12 ? 10 : hits >= 5 ? 6 : 3;

  if (!started) {
    return (
      <div className="text-center">
        <p className="mb-4 text-sm text-slate-600">Click the targets as fast as you can before they disappear. {DURATION} seconds on the clock.</p>
        <button type="button" onClick={() => setStarted(true)} className="btn-accent">
          Start
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-semibold text-slate-700">🎯 Hits: {hits}</span>
        <span className="rounded-full bg-amber-100 px-2 py-0.5 font-semibold text-amber-700">{timeLeft}s</span>
      </div>
      <div className="relative h-64 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
        {target && !over && (
          <button
            type="button"
            onClick={handleHit}
            style={{ left: `${target.x}%`, top: `${target.y}%` }}
            className="animate-pop-in absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-500 text-lg shadow-md transition hover:scale-105"
          >
            🎯
          </button>
        )}
      </div>
      {over && (
        <div className="mt-4 text-center">
          <p className="text-sm font-medium text-slate-700">
            {hits} hits, {misses} missed.
          </p>
          <button type="button" onClick={() => onDone(bonus)} className="btn-accent mt-3">
            Continue (+{bonus} points)
          </button>
        </div>
      )}
    </div>
  );
}

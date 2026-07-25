/// File: src/components/ReactionTimerGame.tsx
"use client";

import { useEffect, useRef, useState } from "react";

const ROUNDS = 6;

/** Reaction-time tester: click as soon as the box turns green across
 *  several rounds, then see your average. One of the rotating engagement
 *  mini-games (EngagementGameWatcher.tsx). */
export default function ReactionTimerGame({ onDone }: { onDone: (bonus: number) => void }) {
  const [started, setStarted] = useState(false);
  const [round, setRound] = useState(0);
  const [phase, setPhase] = useState<"waiting" | "ready" | "tooSoon">("waiting");
  const [times, setTimes] = useState<number[]>([]);
  const [over, setOver] = useState(false);
  const readyAt = useRef(0);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startRound = () => {
    setPhase("waiting");
    const delay = 1000 + Math.random() * 2200;
    timeout.current = setTimeout(() => {
      readyAt.current = performance.now();
      setPhase("ready");
    }, delay);
  };

  useEffect(() => {
    if (started && round < ROUNDS && !over) startRound();
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, round]);

  const handleClick = () => {
    if (phase === "waiting") {
      if (timeout.current) clearTimeout(timeout.current);
      setPhase("tooSoon");
      return;
    }
    if (phase === "ready") {
      const elapsed = performance.now() - readyAt.current;
      setTimes((prev) => [...prev, elapsed]);
      if (round + 1 >= ROUNDS) setOver(true);
      else setRound((r) => r + 1);
    }
  };

  const avg = times.length ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : 0;
  const bonus = avg > 0 && avg <= 250 ? 15 : avg <= 350 ? 10 : avg <= 500 ? 6 : 3;

  if (!started) {
    return (
      <div className="text-center">
        <p className="mb-4 text-sm text-slate-600">Click as soon as the box turns green. {ROUNDS} rounds — lower average time wins!</p>
        <button type="button" onClick={() => setStarted(true)} className="btn-accent">
          Start
        </button>
      </div>
    );
  }

  if (over) {
    return (
      <div className="text-center">
        <p className="text-sm font-medium text-slate-700">Average reaction time: {avg}ms</p>
        <button type="button" onClick={() => onDone(bonus)} className="btn-accent mt-3">
          Continue (+{bonus} points)
        </button>
      </div>
    );
  }

  return (
    <div className="text-center">
      <p className="mb-2 text-sm text-slate-500">
        Round {round + 1} / {ROUNDS}
      </p>
      <button
        type="button"
        onClick={phase === "tooSoon" ? startRound : handleClick}
        className={`flex h-40 w-full items-center justify-center rounded-lg text-lg font-bold text-white transition ${
          phase === "ready" ? "bg-green-500" : phase === "tooSoon" ? "bg-amber-500" : "bg-slate-400"
        }`}
      >
        {phase === "waiting" ? "Wait for green..." : phase === "ready" ? "Click now!" : "Too soon! Tap to try again"}
      </button>
    </div>
  );
}

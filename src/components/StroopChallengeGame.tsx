/// File: src/components/StroopChallengeGame.tsx
"use client";

import { useEffect, useState } from "react";

const COLORS = [
  { name: "Red", class: "text-red-500" },
  { name: "Blue", class: "text-blue-500" },
  { name: "Green", class: "text-green-500" },
  { name: "Yellow", class: "text-yellow-500" },
  { name: "Purple", class: "text-purple-500" },
];
const DURATION = 45;

function randomRound() {
  const word = COLORS[Math.floor(Math.random() * COLORS.length)];
  const matches = Math.random() < 0.5;
  const otherColors = COLORS.filter((c) => c.name !== word.name);
  const ink = matches ? word : otherColors[Math.floor(Math.random() * otherColors.length)];
  return { word: word.name, inkClass: ink.class, matches };
}

/** Stroop-effect reaction challenge: does the word's meaning match its ink
 *  color? Answer Yes/No as fast as possible against the clock. One of the
 *  rotating engagement mini-games (EngagementGameWatcher.tsx). */
export default function StroopChallengeGame({ onDone }: { onDone: (bonus: number) => void }) {
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const [round, setRound] = useState(() => randomRound());
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [over, setOver] = useState(false);
  const [flash, setFlash] = useState<"right" | "wrong" | null>(null);

  useEffect(() => {
    if (!started || over) return;
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(interval);
          setOver(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [started, over]);

  const answer = (choice: boolean) => {
    if (over) return;
    if (choice === round.matches) {
      setScore((s) => s + 1);
      setFlash("right");
    } else {
      setWrong((w) => w + 1);
      setFlash("wrong");
    }
    setTimeout(() => setFlash(null), 150);
    setRound(randomRound());
  };

  const bonus = score >= 20 ? 15 : score >= 12 ? 10 : score >= 5 ? 6 : 3;

  if (!started) {
    return (
      <div className="text-center">
        <p className="mb-4 text-sm text-slate-600">
          Does the word&apos;s meaning match its ink color? Answer Yes/No as fast as you can. {DURATION} seconds.
        </p>
        <button type="button" onClick={() => setStarted(true)} className="btn-accent">
          Start
        </button>
      </div>
    );
  }

  if (over) {
    return (
      <div className="text-center">
        <p className="text-sm font-medium text-slate-700">
          {score} correct, {wrong} wrong.
        </p>
        <button type="button" onClick={() => onDone(bonus)} className="btn-accent mt-3">
          Continue (+{bonus} points)
        </button>
      </div>
    );
  }

  return (
    <div className={`rounded-lg text-center transition ${flash === "right" ? "bg-green-50" : flash === "wrong" ? "bg-red-50" : ""}`}>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-semibold text-slate-700">
          ✅ {score} · ❌ {wrong}
        </span>
        <span className="rounded-full bg-amber-100 px-2 py-0.5 font-semibold text-amber-700">{timeLeft}s</span>
      </div>
      <p className={`my-8 text-4xl font-extrabold ${round.inkClass}`}>{round.word}</p>
      <div className="flex justify-center gap-3 pb-2">
        <button type="button" onClick={() => answer(true)} className="btn-primary px-6">
          Yes, matches
        </button>
        <button type="button" onClick={() => answer(false)} className="btn-outline px-6">
          No
        </button>
      </div>
    </div>
  );
}

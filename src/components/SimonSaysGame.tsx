/// File: src/components/SimonSaysGame.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { playBeep } from "@/lib/sound";

const PADS = [
  { name: "Red", color: "bg-red-500", active: "bg-red-300", freq: 330 },
  { name: "Blue", color: "bg-blue-500", active: "bg-blue-300", freq: 392 },
  { name: "Green", color: "bg-green-500", active: "bg-green-300", freq: 440 },
  { name: "Yellow", color: "bg-yellow-500", active: "bg-yellow-300", freq: 523 },
];
const STEP_MS = 650;

/** Simon Says memory game: watch the flashing pattern, then repeat it —
 *  one step longer each round. One of the rotating engagement mini-games
 *  (EngagementGameWatcher.tsx). */
export default function SimonSaysGame({ onDone }: { onDone: (bonus: number) => void }) {
  const [started, setStarted] = useState(false);
  const [sequence, setSequence] = useState<number[]>([]);
  const [inputIndex, setInputIndex] = useState(0);
  const [activePad, setActivePad] = useState<number | null>(null);
  const [phase, setPhase] = useState<"showing" | "input" | "over">("showing");
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const rounds = Math.max(0, sequence.length - 1);

  const clearTimeouts = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  };

  const playSequence = (seq: number[]) => {
    setPhase("showing");
    seq.forEach((pad, i) => {
      timeouts.current.push(
        setTimeout(() => {
          setActivePad(pad);
          playBeep(PADS[pad].freq);
        }, i * STEP_MS)
      );
      timeouts.current.push(setTimeout(() => setActivePad(null), i * STEP_MS + 400));
    });
    timeouts.current.push(
      setTimeout(() => {
        setPhase("input");
        setInputIndex(0);
      }, seq.length * STEP_MS)
    );
  };

  const startGame = () => {
    setStarted(true);
    const first = [Math.floor(Math.random() * 4)];
    setSequence(first);
    playSequence(first);
  };

  useEffect(() => clearTimeouts, []);

  const handlePadClick = (pad: number) => {
    if (phase !== "input") return;
    setActivePad(pad);
    playBeep(PADS[pad].freq);
    setTimeout(() => setActivePad(null), 200);

    if (pad !== sequence[inputIndex]) {
      setPhase("over");
      return;
    }
    if (inputIndex + 1 === sequence.length) {
      const next = [...sequence, Math.floor(Math.random() * 4)];
      timeouts.current.push(
        setTimeout(() => {
          setSequence(next);
          playSequence(next);
        }, 500)
      );
    } else {
      setInputIndex((i) => i + 1);
    }
  };

  const bonus = rounds >= 8 ? 15 : rounds >= 5 ? 10 : rounds >= 2 ? 6 : 3;

  if (!started) {
    return (
      <div className="text-center">
        <p className="mb-4 text-sm text-slate-600">Watch the pattern, then repeat it by clicking the pads in the same order. It gets longer each round!</p>
        <button type="button" onClick={startGame} className="btn-accent">
          Start
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-2 text-sm font-semibold text-slate-700">Round: {rounds}</div>
      <div className="mx-auto grid w-52 grid-cols-2 gap-2">
        {PADS.map((pad, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handlePadClick(i)}
            disabled={phase !== "input"}
            aria-label={`${pad.name} pad`}
            className={`h-24 w-24 rounded-lg transition ${activePad === i ? pad.active : pad.color}`}
          />
        ))}
      </div>
      <p className="mt-2 text-center text-xs text-slate-400">{phase === "showing" ? "Watch..." : phase === "input" ? "Your turn!" : ""}</p>
      {phase === "over" && (
        <div className="mt-4 text-center">
          <p className="text-sm font-medium text-red-700">
            Wrong pad — you cleared {rounds} round{rounds === 1 ? "" : "s"}.
          </p>
          <button type="button" onClick={() => onDone(bonus)} className="btn-accent mt-3">
            Continue (+{bonus} points)
          </button>
        </div>
      )}
    </div>
  );
}

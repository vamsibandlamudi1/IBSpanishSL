/// File: src/components/RockPaperScissorsGame.tsx
"use client";

import { useState } from "react";

type Move = "rock" | "paper" | "scissors";
const MOVES: { key: Move; emoji: string }[] = [
  { key: "rock", emoji: "✊" },
  { key: "paper", emoji: "🖐" },
  { key: "scissors", emoji: "✌️" },
];
const BEATS: Record<Move, Move> = { rock: "scissors", paper: "rock", scissors: "paper" };
const ROUNDS = 5;

/** Best-of-5 Rock Paper Scissors against a random computer opponent. One of
 *  the rotating engagement mini-games (EngagementGameWatcher.tsx). */
export default function RockPaperScissorsGame({ onDone }: { onDone: (bonus: number) => void }) {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [round, setRound] = useState(0);
  const [lastResult, setLastResult] = useState<{ player: Move; computer: Move; outcome: "win" | "lose" | "draw" } | null>(null);

  const over = round >= ROUNDS;

  const play = (player: Move) => {
    if (over) return;
    const computer = MOVES[Math.floor(Math.random() * MOVES.length)].key;
    let outcome: "win" | "lose" | "draw" = "draw";
    if (player !== computer) outcome = BEATS[player] === computer ? "win" : "lose";
    if (outcome === "win") setWins((w) => w + 1);
    if (outcome === "lose") setLosses((l) => l + 1);
    setLastResult({ player, computer, outcome });
    setRound((r) => r + 1);
  };

  const bonus = wins >= 4 ? 15 : wins >= 3 ? 10 : wins >= 1 ? 6 : 3;
  const emojiFor = (m: Move) => MOVES.find((x) => x.key === m)?.emoji;

  if (over) {
    return (
      <div className="text-center">
        <p className="text-sm font-medium text-slate-700">
          You won {wins} of {ROUNDS} rounds against the computer.
        </p>
        <button type="button" onClick={() => onDone(bonus)} className="btn-accent mt-3">
          Continue (+{bonus} points)
        </button>
      </div>
    );
  }

  return (
    <div className="text-center">
      <p className="mb-3 text-sm text-slate-500">
        Round {round + 1} / {ROUNDS} · Wins: {wins} · Losses: {losses}
      </p>
      <div className="flex justify-center gap-3">
        {MOVES.map((m) => (
          <button
            key={m.key}
            type="button"
            onClick={() => play(m.key)}
            aria-label={m.key}
            className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white text-3xl shadow-sm transition hover:scale-105 hover:border-brand-300"
          >
            {m.emoji}
          </button>
        ))}
      </div>
      {lastResult && (
        <p
          className={`mt-4 text-sm font-medium ${
            lastResult.outcome === "win" ? "text-green-700" : lastResult.outcome === "lose" ? "text-red-700" : "text-slate-600"
          }`}
        >
          You: {emojiFor(lastResult.player)} vs Computer: {emojiFor(lastResult.computer)} —{" "}
          {lastResult.outcome === "win" ? "You win!" : lastResult.outcome === "lose" ? "You lose." : "Draw."}
        </p>
      )}
    </div>
  );
}

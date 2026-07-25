/// File: src/components/TicTacToeGame.tsx
"use client";

import { useEffect, useState } from "react";

type Cell = "X" | "O" | null;

const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function calculateWinner(board: Cell[]): Cell {
  for (const [a, b, c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
  }
  return null;
}

/** Win-if-possible, block-if-threatened, else center/corner/side — sharp
 *  enough to be a fun opponent without needing a full minimax search. */
function pickComputerMove(board: Cell[]): number {
  const empty = board.reduce<number[]>((acc, v, i) => (v === null ? [...acc, i] : acc), []);
  for (const i of empty) {
    const copy = [...board];
    copy[i] = "O";
    if (calculateWinner(copy) === "O") return i;
  }
  for (const i of empty) {
    const copy = [...board];
    copy[i] = "X";
    if (calculateWinner(copy) === "X") return i;
  }
  if (board[4] === null) return 4;
  const corners = [0, 2, 6, 8].filter((i) => board[i] === null);
  if (corners.length) return corners[Math.floor(Math.random() * corners.length)];
  const sides = [1, 3, 5, 7].filter((i) => board[i] === null);
  if (sides.length) return sides[Math.floor(Math.random() * sides.length)];
  return empty[0];
}

/** Quick Tic-Tac-Toe against a heuristic computer opponent — one of the
 *  rotating engagement mini-games shown by EngagementGameWatcher.tsx every
 *  10 minutes. Player is always X and moves first. */
export default function TicTacToeGame({ onDone }: { onDone: (bonus: number) => void }) {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [turn, setTurn] = useState<"player" | "computer">("player");
  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((c) => c !== null);
  const over = !!winner || isDraw;

  useEffect(() => {
    if (turn !== "computer" || over) return;
    const timeout = setTimeout(() => {
      const move = pickComputerMove(board);
      setBoard((prev) => {
        const next = [...prev];
        next[move] = "O";
        return next;
      });
      setTurn("player");
    }, 500);
    return () => clearTimeout(timeout);
  }, [turn, board, over]);

  const handleClick = (i: number) => {
    if (board[i] || over || turn !== "player") return;
    const next = [...board];
    next[i] = "X";
    setBoard(next);
    setTurn("computer");
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setTurn("player");
  };

  const bonus = winner === "X" ? 15 : isDraw ? 8 : winner === "O" ? 3 : 0;

  return (
    <div>
      <p className="mb-3 text-sm text-slate-600">You&apos;re X. Beat the computer!</p>
      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleClick(i)}
            disabled={!!cell || over || turn !== "player"}
            className={`flex h-16 items-center justify-center rounded-lg border text-2xl font-bold ${
              cell === "X"
                ? "border-brand-300 bg-brand-50 text-brand-700"
                : cell === "O"
                ? "border-slate-300 bg-slate-100 text-slate-700"
                : "border-slate-200 bg-white hover:bg-slate-50"
            }`}
          >
            {cell}
          </button>
        ))}
      </div>
      {!over && <p className="mt-3 text-sm text-slate-500">{turn === "player" ? "Your move..." : "Computer is thinking..."}</p>}
      {over && (
        <div className="mt-4">
          <p className={`text-sm font-medium ${winner === "X" ? "text-green-700" : winner === "O" ? "text-red-700" : "text-slate-700"}`}>
            {winner === "X" ? "You win! 🎉" : winner === "O" ? "Computer wins this time." : "It's a draw!"}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" onClick={reset} className="btn-outline">
              Play again
            </button>
            <button type="button" onClick={() => onDone(bonus)} className="btn-accent">
              Continue{bonus > 0 ? ` (+${bonus} points)` : ""}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

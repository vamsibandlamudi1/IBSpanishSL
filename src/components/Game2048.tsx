/// File: src/components/Game2048.tsx
"use client";

import { useEffect, useReducer, useState } from "react";

const SIZE = 4;
type Board = number[][];
type Direction = "left" | "right" | "up" | "down";

function emptyBoard(): Board {
  return Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
}

function addRandomTile(board: Board): Board {
  const empties: [number, number][] = [];
  board.forEach((row, r) => row.forEach((v, c) => v === 0 && empties.push([r, c])));
  if (empties.length === 0) return board;
  const [r, c] = empties[Math.floor(Math.random() * empties.length)];
  const next = board.map((row) => [...row]);
  next[r][c] = Math.random() < 0.9 ? 2 : 4;
  return next;
}

function slideRowLeft(row: number[]): { row: number[]; gained: number } {
  const nonZero = row.filter((v) => v !== 0);
  const merged: number[] = [];
  let gained = 0;
  let i = 0;
  while (i < nonZero.length) {
    if (nonZero[i] === nonZero[i + 1]) {
      const value = nonZero[i] * 2;
      merged.push(value);
      gained += value;
      i += 2;
    } else {
      merged.push(nonZero[i]);
      i += 1;
    }
  }
  while (merged.length < SIZE) merged.push(0);
  return { row: merged, gained };
}

/** Rotates the board 90° clockwise — used to reduce all four move
 *  directions to the same "slide left" logic. */
function rotateClockwise(board: Board): Board {
  const next = emptyBoard();
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) next[c][SIZE - 1 - r] = board[r][c];
  }
  return next;
}

function moveBoard(board: Board, direction: Direction): { board: Board; gained: number; moved: boolean } {
  const rotations = { left: 0, down: 1, right: 2, up: 3 }[direction];
  let working = board;
  for (let i = 0; i < rotations; i++) working = rotateClockwise(working);

  let gained = 0;
  const slid = working.map((row) => {
    const { row: newRow, gained: g } = slideRowLeft(row);
    gained += g;
    return newRow;
  });

  let result = slid;
  for (let i = 0; i < (4 - rotations) % 4; i++) result = rotateClockwise(result);

  const moved = JSON.stringify(result) !== JSON.stringify(board);
  return { board: result, gained, moved };
}

function canMove(board: Board): boolean {
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (board[r][c] === 0) return true;
      if (c < SIZE - 1 && board[r][c] === board[r][c + 1]) return true;
      if (r < SIZE - 1 && board[r][c] === board[r + 1][c]) return true;
    }
  }
  return false;
}

interface State {
  board: Board;
  score: number;
  won: boolean;
  over: boolean;
}

function initialState(): State {
  return { board: addRandomTile(addRandomTile(emptyBoard())), score: 0, won: false, over: false };
}

function reducer(state: State, action: { type: "move"; direction: Direction }): State {
  if (state.won || state.over) return state;
  const { board: moved, gained, moved: didMove } = moveBoard(state.board, action.direction);
  if (!didMove) return state;
  const withTile = addRandomTile(moved);
  const won = withTile.some((row) => row.includes(2048));
  const over = !won && !canMove(withTile);
  return { board: withTile, score: state.score + gained, won, over };
}

const TILE_COLORS: Record<number, string> = {
  2: "bg-slate-100 text-slate-700",
  4: "bg-slate-200 text-slate-700",
  8: "bg-amber-200 text-amber-900",
  16: "bg-amber-300 text-amber-900",
  32: "bg-orange-300 text-white",
  64: "bg-orange-400 text-white",
  128: "bg-yellow-300 text-white",
  256: "bg-yellow-400 text-white",
  512: "bg-yellow-500 text-white",
  1024: "bg-brand-400 text-white",
  2048: "bg-brand-600 text-white",
};

const KEY_TO_DIRECTION: Record<string, Direction> = {
  ArrowLeft: "left",
  ArrowRight: "right",
  ArrowUp: "up",
  ArrowDown: "down",
};

/** Classic 2048 sliding-tile puzzle — arrow keys merge matching tiles up to
 *  2048. One of the rotating engagement mini-games (EngagementGameWatcher).
 *  Uses useReducer (rather than nested setState calls) so React's Strict
 *  Mode double-invoking the updater in dev can't double-count merges. */
export default function Game2048({ onDone }: { onDone: (bonus: number) => void }) {
  const [started, setStarted] = useState(false);
  const [state, dispatch] = useReducer(reducer, undefined, initialState);

  useEffect(() => {
    if (!started) return;
    const onKey = (e: KeyboardEvent) => {
      const direction = KEY_TO_DIRECTION[e.key];
      if (!direction) return;
      e.preventDefault();
      dispatch({ type: "move", direction });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [started]);

  const bonus = state.won ? 15 : state.score >= 400 ? 10 : state.score >= 100 ? 6 : 3;
  const finished = state.won || state.over;

  if (!started) {
    return (
      <div className="text-center">
        <p className="mb-4 text-sm text-slate-600">Use the arrow keys to slide tiles — combine matching numbers to reach 2048!</p>
        <button type="button" onClick={() => setStarted(true)} className="btn-accent">
          Start
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-2 text-sm font-semibold text-slate-700">Score: {state.score}</div>
      <div className="grid grid-cols-4 gap-1.5 rounded-lg border border-slate-300 bg-slate-200 p-1.5">
        {state.board.flatMap((row, r) =>
          row.map((v, c) => (
            <div
              key={`${r}-${c}`}
              className={`flex aspect-square items-center justify-center rounded-md text-sm font-bold ${
                v === 0 ? "bg-slate-50" : (TILE_COLORS[v] ?? "bg-brand-700 text-white")
              }`}
            >
              {v !== 0 ? v : ""}
            </div>
          ))
        )}
      </div>
      {finished && (
        <div className="mt-4 text-center">
          <p className={`text-sm font-medium ${state.won ? "text-green-700" : "text-slate-700"}`}>
            {state.won ? "You reached 2048! 🎉" : "No more moves — game over."} Score: {state.score}
          </p>
          <button type="button" onClick={() => onDone(bonus)} className="btn-accent mt-3">
            Continue (+{bonus} points)
          </button>
        </div>
      )}
    </div>
  );
}

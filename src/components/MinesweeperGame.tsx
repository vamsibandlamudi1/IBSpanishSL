/// File: src/components/MinesweeperGame.tsx
"use client";

import { useMemo, useState } from "react";

const SIZE = 6;
const MINES = 6;

interface CellState {
  isMine: boolean;
  adjacent: number;
  revealed: boolean;
  flagged: boolean;
}

function neighborsOf(i: number): number[] {
  const row = Math.floor(i / SIZE);
  const col = i % SIZE;
  const result: number[] = [];
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      const r = row + dr;
      const c = col + dc;
      if (r >= 0 && r < SIZE && c >= 0 && c < SIZE) result.push(r * SIZE + c);
    }
  }
  return result;
}

function buildBoard(): CellState[] {
  const total = SIZE * SIZE;
  const mineIndexes = new Set<number>();
  while (mineIndexes.size < MINES) {
    mineIndexes.add(Math.floor(Math.random() * total));
  }
  const cells: CellState[] = Array.from({ length: total }, (_, i) => ({
    isMine: mineIndexes.has(i),
    adjacent: 0,
    revealed: false,
    flagged: false,
  }));
  cells.forEach((cell, i) => {
    if (cell.isMine) return;
    cell.adjacent = neighborsOf(i).filter((n) => cells[n].isMine).length;
  });
  return cells;
}

/** Reveals `start` and, if it has no adjacent mines, flood-fills outward
 *  through the connected region of zero-adjacent cells (classic Minesweeper
 *  "open area" behavior). */
function floodReveal(cells: CellState[], start: number): CellState[] {
  const next = cells.map((c) => ({ ...c }));
  const stack = [start];
  const seen = new Set<number>();
  while (stack.length) {
    const i = stack.pop()!;
    if (seen.has(i) || next[i].flagged) continue;
    seen.add(i);
    next[i].revealed = true;
    if (next[i].adjacent === 0 && !next[i].isMine) {
      neighborsOf(i).forEach((n) => {
        if (!next[n].revealed) stack.push(n);
      });
    }
  }
  return next;
}

/** Small 6x6 Minesweeper (6 mines) — one of the rotating engagement
 *  mini-games shown by EngagementGameWatcher.tsx every 10 minutes. Click to
 *  reveal; right-click or the flag-mode toggle (for touch devices) to flag a
 *  suspected mine. */
export default function MinesweeperGame({ onDone }: { onDone: (bonus: number) => void }) {
  const [cells, setCells] = useState<CellState[]>(() => buildBoard());
  const [flagMode, setFlagMode] = useState(false);
  const [lost, setLost] = useState(false);

  const won = useMemo(() => !lost && cells.every((c) => c.isMine || c.revealed), [cells, lost]);
  const over = lost || won;

  const toggleFlag = (i: number) => {
    setCells((prev) => prev.map((c, idx) => (idx === i ? { ...c, flagged: !c.flagged } : c)));
  };

  const reveal = (i: number) => {
    if (over || cells[i].revealed || cells[i].flagged) return;
    if (flagMode) {
      toggleFlag(i);
      return;
    }
    if (cells[i].isMine) {
      setCells((prev) => prev.map((c) => (c.isMine ? { ...c, revealed: true } : c)));
      setLost(true);
      return;
    }
    setCells((prev) => floodReveal(prev, i));
  };

  const reset = () => {
    setCells(buildBoard());
    setFlagMode(false);
    setLost(false);
  };

  const bonus = won ? 15 : lost ? 3 : 0;

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm text-slate-600">Clear the board without hitting a mine.</p>
        <button
          type="button"
          onClick={() => setFlagMode((f) => !f)}
          className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${
            flagMode ? "border-amber-300 bg-amber-100 text-amber-700" : "border-slate-200 text-slate-600 hover:bg-slate-50"
          }`}
        >
          🚩 {flagMode ? "Flagging on" : "Flag mode"}
        </button>
      </div>
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${SIZE}, minmax(0, 1fr))` }}>
        {cells.map((cell, i) => (
          <button
            key={i}
            type="button"
            onClick={() => reveal(i)}
            onContextMenu={(e) => {
              e.preventDefault();
              if (!cell.revealed && !over) toggleFlag(i);
            }}
            disabled={over}
            className={`flex h-9 w-9 items-center justify-center rounded-md border text-sm font-bold ${
              cell.revealed
                ? cell.isMine
                  ? "border-red-300 bg-red-100"
                  : "border-slate-200 bg-slate-50 text-slate-700"
                : "border-slate-300 bg-slate-200 hover:bg-slate-300"
            }`}
          >
            {cell.revealed ? (cell.isMine ? "💣" : cell.adjacent > 0 ? cell.adjacent : "") : cell.flagged ? "🚩" : ""}
          </button>
        ))}
      </div>
      {over && (
        <div className="mt-4">
          <p className={`text-sm font-medium ${won ? "text-green-700" : "text-red-700"}`}>
            {won ? "Cleared the board! 🎉" : "Boom — hit a mine."}
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

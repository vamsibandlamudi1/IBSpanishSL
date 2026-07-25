/// File: src/components/SnakeGame.tsx
"use client";

import { useEffect, useRef, useState } from "react";

const GRID = 14;
const TICK_MS = 150;

interface Point {
  x: number;
  y: number;
}

function randomEmptyCell(snake: Point[]): Point {
  while (true) {
    const p = { x: Math.floor(Math.random() * GRID), y: Math.floor(Math.random() * GRID) };
    if (!snake.some((s) => s.x === p.x && s.y === p.y)) return p;
  }
}

const START_SNAKE: Point[] = [
  { x: 7, y: 7 },
  { x: 6, y: 7 },
  { x: 5, y: 7 },
];

/** Classic grid Snake — arrow keys (or the on-screen buttons) steer, eat
 *  apples to grow, avoid the walls and your own tail. One of the rotating
 *  engagement mini-games (EngagementGameWatcher.tsx). */
export default function SnakeGame({ onDone }: { onDone: (bonus: number) => void }) {
  const [started, setStarted] = useState(false);
  const [snake, setSnake] = useState<Point[]>(START_SNAKE);
  const [apple, setApple] = useState<Point>({ x: 10, y: 7 });
  const [over, setOver] = useState(false);
  const directionRef = useRef<Point>({ x: 1, y: 0 });
  const pendingDirectionRef = useRef<Point>({ x: 1, y: 0 });

  const score = snake.length - START_SNAKE.length;

  const setDirection = (d: Point) => {
    const cur = directionRef.current;
    if (cur.x === -d.x && cur.y === -d.y) return; // no reversing into yourself
    pendingDirectionRef.current = d;
  };

  useEffect(() => {
    if (!started) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") setDirection({ x: 0, y: -1 });
      else if (e.key === "ArrowDown") setDirection({ x: 0, y: 1 });
      else if (e.key === "ArrowLeft") setDirection({ x: -1, y: 0 });
      else if (e.key === "ArrowRight") setDirection({ x: 1, y: 0 });
      else return;
      e.preventDefault();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [started]);

  useEffect(() => {
    if (!started || over) return;
    const interval = setInterval(() => {
      directionRef.current = pendingDirectionRef.current;
      setSnake((prev) => {
        const head = prev[0];
        const newHead = { x: head.x + directionRef.current.x, y: head.y + directionRef.current.y };
        if (newHead.x < 0 || newHead.x >= GRID || newHead.y < 0 || newHead.y >= GRID) {
          setOver(true);
          return prev;
        }
        if (prev.some((s) => s.x === newHead.x && s.y === newHead.y)) {
          setOver(true);
          return prev;
        }
        const ate = newHead.x === apple.x && newHead.y === apple.y;
        const next = [newHead, ...prev];
        if (ate) setApple(randomEmptyCell(next));
        else next.pop();
        return next;
      });
    }, TICK_MS);
    return () => clearInterval(interval);
  }, [started, over, apple]);

  const bonus = score >= 12 ? 15 : score >= 6 ? 10 : score >= 2 ? 6 : 3;

  if (!started) {
    return (
      <div className="text-center">
        <p className="mb-4 text-sm text-slate-600">
          Use the arrow keys (or the buttons below) to eat apples and grow — don&apos;t hit the walls or yourself!
        </p>
        <button type="button" onClick={() => setStarted(true)} className="btn-accent">
          Start
        </button>
      </div>
    );
  }

  const cellSet = new Set(snake.map((s) => `${s.x},${s.y}`));

  return (
    <div>
      <div className="mb-2 text-sm font-semibold text-slate-700">🍎 Score: {score}</div>
      <div
        className="grid overflow-hidden rounded-lg border border-slate-300 bg-white"
        style={{ gridTemplateColumns: `repeat(${GRID}, 1fr)`, aspectRatio: "1 / 1" }}
      >
        {Array.from({ length: GRID * GRID }, (_, i) => {
          const x = i % GRID;
          const y = Math.floor(i / GRID);
          const isHead = snake[0].x === x && snake[0].y === y;
          const isBody = !isHead && cellSet.has(`${x},${y}`);
          const isApple = apple.x === x && apple.y === y;
          return <div key={i} className={isHead ? "bg-green-700" : isBody ? "bg-green-400" : isApple ? "bg-red-500" : "bg-slate-50"} />;
        })}
      </div>
      <div className="mx-auto mt-3 grid w-28 grid-cols-3 gap-1">
        <span />
        <button type="button" onClick={() => setDirection({ x: 0, y: -1 })} aria-label="Move up" className="btn-outline px-0 py-1 text-xs">
          ▲
        </button>
        <span />
        <button type="button" onClick={() => setDirection({ x: -1, y: 0 })} aria-label="Move left" className="btn-outline px-0 py-1 text-xs">
          ◀
        </button>
        <span />
        <button type="button" onClick={() => setDirection({ x: 1, y: 0 })} aria-label="Move right" className="btn-outline px-0 py-1 text-xs">
          ▶
        </button>
        <span />
        <button type="button" onClick={() => setDirection({ x: 0, y: 1 })} aria-label="Move down" className="btn-outline px-0 py-1 text-xs">
          ▼
        </button>
        <span />
      </div>
      {over && (
        <div className="mt-4 text-center">
          <p className="text-sm font-medium text-red-700">Game over — final score: {score}</p>
          <button type="button" onClick={() => onDone(bonus)} className="btn-accent mt-3">
            Continue (+{bonus} points)
          </button>
        </div>
      )}
    </div>
  );
}

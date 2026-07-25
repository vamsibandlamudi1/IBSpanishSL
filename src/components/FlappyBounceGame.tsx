/// File: src/components/FlappyBounceGame.tsx
"use client";

import { useEffect, useRef, useState } from "react";

const WIDTH = 300;
const HEIGHT = 300;
const BIRD_X = 60;
const BIRD_R = 8;
const GRAVITY = 0.35;
const FLAP_VELOCITY = -6;
const PIPE_W = 36;
const GAP = 92;
const PIPE_SPEED = 2.2;
const PIPE_INTERVAL_FRAMES = 90;

interface Pipe {
  x: number;
  gapY: number;
  passed: boolean;
}

/** Flappy-bird-style bouncing ball: click, tap, or press space to flap
 *  against gravity and fly through the gaps. One of the rotating engagement
 *  mini-games (EngagementGameWatcher.tsx). */
export default function FlappyBounceGame({ onDone }: { onDone: (bonus: number) => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [started, setStarted] = useState(false);
  const [over, setOver] = useState(false);
  const [score, setScore] = useState(0);

  const birdYRef = useRef(HEIGHT / 2);
  const birdVRef = useRef(0);
  const pipesRef = useRef<Pipe[]>([]);
  const frameRef = useRef(0);
  const scoreRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const overRef = useRef(false);

  const flap = () => {
    if (overRef.current || !started) return;
    birdVRef.current = FLAP_VELOCITY;
  };

  useEffect(() => {
    if (!started) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        flap();
      }
    };
    window.addEventListener("keydown", onKey);

    const step = () => {
      frameRef.current += 1;
      birdVRef.current += GRAVITY;
      birdYRef.current += birdVRef.current;

      if (frameRef.current % PIPE_INTERVAL_FRAMES === 0) {
        const gapY = 40 + Math.random() * (HEIGHT - 80 - GAP);
        pipesRef.current.push({ x: WIDTH, gapY, passed: false });
      }
      pipesRef.current.forEach((p) => (p.x -= PIPE_SPEED));
      pipesRef.current = pipesRef.current.filter((p) => p.x + PIPE_W > 0);

      let collided = birdYRef.current - BIRD_R < 0 || birdYRef.current + BIRD_R > HEIGHT;
      for (const p of pipesRef.current) {
        if (
          BIRD_X + BIRD_R > p.x &&
          BIRD_X - BIRD_R < p.x + PIPE_W &&
          (birdYRef.current - BIRD_R < p.gapY || birdYRef.current + BIRD_R > p.gapY + GAP)
        ) {
          collided = true;
        }
        if (!p.passed && p.x + PIPE_W < BIRD_X) {
          p.passed = true;
          scoreRef.current += 1;
          setScore(scoreRef.current);
        }
      }

      if (collided) {
        overRef.current = true;
        setOver(true);
        return;
      }

      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.fillStyle = "#e0f2fe";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      ctx.fillStyle = "#16a34a";
      pipesRef.current.forEach((p) => {
        ctx.fillRect(p.x, 0, PIPE_W, p.gapY);
        ctx.fillRect(p.x, p.gapY + GAP, PIPE_W, HEIGHT - (p.gapY + GAP));
      });
      ctx.beginPath();
      ctx.arc(BIRD_X, birdYRef.current, BIRD_R, 0, Math.PI * 2);
      ctx.fillStyle = "#f59e0b";
      ctx.fill();

      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  const bonus = score >= 10 ? 15 : score >= 5 ? 10 : score >= 1 ? 6 : 3;

  if (!started) {
    return (
      <div className="text-center">
        <p className="mb-4 text-sm text-slate-600">Click/tap the game area or press space to flap and fly through the gaps.</p>
        <button type="button" onClick={() => setStarted(true)} className="btn-accent">
          Start
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-2 text-sm font-semibold text-slate-700">Score: {score}</div>
      <canvas
        ref={canvasRef}
        width={WIDTH}
        height={HEIGHT}
        onClick={flap}
        onTouchStart={(e) => {
          e.preventDefault();
          flap();
        }}
        className="w-full cursor-pointer touch-none rounded-lg border border-slate-200"
      />
      {over && (
        <div className="mt-4 text-center">
          <p className="text-sm font-medium text-red-700">Crashed! Final score: {score}</p>
          <button type="button" onClick={() => onDone(bonus)} className="btn-accent mt-3">
            Continue (+{bonus} points)
          </button>
        </div>
      )}
    </div>
  );
}

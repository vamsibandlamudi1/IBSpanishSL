/// File: src/components/BrickBreakerGame.tsx
"use client";

import { useEffect, useRef, useState } from "react";

const WIDTH = 320;
const HEIGHT = 260;
const PADDLE_W = 60;
const PADDLE_H = 8;
const PADDLE_Y = HEIGHT - 20;
const BALL_R = 6;
const ROWS = 4;
const COLS = 7;
const BRICK_W = 40;
const BRICK_H = 14;
const BRICK_GAP = 4;
const BRICK_TOP = 10;
const BRICK_LEFT = (WIDTH - (COLS * (BRICK_W + BRICK_GAP) - BRICK_GAP)) / 2;
const COLORS = ["#f87171", "#fb923c", "#facc15", "#4ade80"];

interface Brick {
  x: number;
  y: number;
  alive: boolean;
  color: string;
}

function buildBricks(): Brick[] {
  const bricks: Brick[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      bricks.push({
        x: BRICK_LEFT + c * (BRICK_W + BRICK_GAP),
        y: BRICK_TOP + r * (BRICK_H + BRICK_GAP),
        alive: true,
        color: COLORS[r % COLORS.length],
      });
    }
  }
  return bricks;
}

function freshBall() {
  return { x: WIDTH / 2, y: HEIGHT - 40, vx: 2.4, vy: -2.8 };
}

/** Paddle-and-ball brick breaker — move the mouse/finger to steer the
 *  paddle and clear the wall. One of the rotating engagement mini-games
 *  (EngagementGameWatcher.tsx). Canvas-based with a requestAnimationFrame
 *  loop; game state lives in refs so the loop doesn't need to re-subscribe
 *  every frame. */
export default function BrickBreakerGame({ onDone }: { onDone: (bonus: number) => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [started, setStarted] = useState(false);
  const [result, setResult] = useState<"won" | "lost" | null>(null);
  const [score, setScore] = useState(0);

  const paddleXRef = useRef(WIDTH / 2 - PADDLE_W / 2);
  const ballRef = useRef(freshBall());
  const bricksRef = useRef<Brick[]>(buildBricks());
  const livesRef = useRef(3);
  const scoreRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!started) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const handleMove = (clientX: number) => {
      const rect = canvas.getBoundingClientRect();
      const scale = WIDTH / rect.width;
      const x = (clientX - rect.left) * scale;
      paddleXRef.current = Math.min(WIDTH - PADDLE_W, Math.max(0, x - PADDLE_W / 2));
    };
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) handleMove(e.touches[0].clientX);
    };
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("touchmove", onTouchMove);

    const step = () => {
      const ball = ballRef.current;
      ball.x += ball.vx;
      ball.y += ball.vy;

      if (ball.x <= BALL_R || ball.x >= WIDTH - BALL_R) ball.vx *= -1;
      if (ball.y <= BALL_R) ball.vy *= -1;

      if (
        ball.vy > 0 &&
        ball.y + BALL_R >= PADDLE_Y &&
        ball.y + BALL_R <= PADDLE_Y + PADDLE_H &&
        ball.x >= paddleXRef.current &&
        ball.x <= paddleXRef.current + PADDLE_W
      ) {
        const hitPos = (ball.x - (paddleXRef.current + PADDLE_W / 2)) / (PADDLE_W / 2);
        ball.vx = hitPos * 3.2;
        ball.vy = -Math.abs(ball.vy);
      }

      for (const brick of bricksRef.current) {
        if (!brick.alive) continue;
        if (
          ball.x + BALL_R > brick.x &&
          ball.x - BALL_R < brick.x + BRICK_W &&
          ball.y + BALL_R > brick.y &&
          ball.y - BALL_R < brick.y + BRICK_H
        ) {
          brick.alive = false;
          ball.vy *= -1;
          scoreRef.current += 1;
          setScore(scoreRef.current);
          break;
        }
      }

      if (ball.y > HEIGHT) {
        livesRef.current -= 1;
        if (livesRef.current <= 0) {
          setResult("lost");
          return;
        }
        ballRef.current = freshBall();
      }

      if (bricksRef.current.every((b) => !b.alive)) {
        setResult("won");
        return;
      }

      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      bricksRef.current.forEach((b) => {
        if (!b.alive) return;
        ctx.fillStyle = b.color;
        ctx.fillRect(b.x, b.y, BRICK_W, BRICK_H);
      });
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(paddleXRef.current, PADDLE_Y, PADDLE_W, PADDLE_H);
      ctx.beginPath();
      ctx.arc(ballRef.current.x, ballRef.current.y, BALL_R, 0, Math.PI * 2);
      ctx.fillStyle = "#7c3aed";
      ctx.fill();

      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("touchmove", onTouchMove);
    };
  }, [started]);

  const bonus = result === "won" ? 15 : score >= 10 ? 10 : score >= 4 ? 6 : 3;

  if (!started) {
    return (
      <div className="text-center">
        <p className="mb-4 text-sm text-slate-600">Move your mouse (or finger) to steer the paddle and break all the bricks. 3 lives.</p>
        <button type="button" onClick={() => setStarted(true)} className="btn-accent">
          Start
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-2 text-sm font-semibold text-slate-700">Bricks broken: {score}</div>
      <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} className="w-full touch-none rounded-lg border border-slate-200" />
      {result && (
        <div className="mt-4 text-center">
          <p className={`text-sm font-medium ${result === "won" ? "text-green-700" : "text-red-700"}`}>
            {result === "won" ? "All bricks cleared! 🎉" : "Out of lives — game over."}
          </p>
          <button type="button" onClick={() => onDone(bonus)} className="btn-accent mt-3">
            Continue (+{bonus} points)
          </button>
        </div>
      )}
    </div>
  );
}

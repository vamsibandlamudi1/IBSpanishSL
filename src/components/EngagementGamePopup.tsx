/// File: src/components/EngagementGamePopup.tsx
"use client";

import { useState } from "react";
import TicTacToeGame from "./TicTacToeGame";
import MinesweeperGame from "./MinesweeperGame";
import TargetShooterGame from "./TargetShooterGame";
import BrickBreakerGame from "./BrickBreakerGame";
import FlappyBounceGame from "./FlappyBounceGame";
import WhackAMoleGame from "./WhackAMoleGame";
import SnakeGame from "./SnakeGame";
import Game2048 from "./Game2048";
import SimonSaysGame from "./SimonSaysGame";
import ReactionTimerGame from "./ReactionTimerGame";
import RockPaperScissorsGame from "./RockPaperScissorsGame";
import StroopChallengeGame from "./StroopChallengeGame";

type GameKind =
  | "tictactoe"
  | "minesweeper"
  | "target-shooter"
  | "brick-breaker"
  | "flappy-bounce"
  | "whack-a-mole"
  | "snake"
  | "2048"
  | "simon-says"
  | "reaction-timer"
  | "rock-paper-scissors"
  | "stroop";

const POOL: GameKind[] = [
  "tictactoe",
  "minesweeper",
  "target-shooter",
  "brick-breaker",
  "flappy-bounce",
  "whack-a-mole",
  "snake",
  "2048",
  "simon-says",
  "reaction-timer",
  "rock-paper-scissors",
  "stroop",
];

const TITLES: Record<GameKind, string> = {
  tictactoe: "❌⭕ Quick Tic-Tac-Toe",
  minesweeper: "💣 Mini Minesweeper",
  "target-shooter": "🎯 Target Gallery",
  "brick-breaker": "🧱 Brick Breaker",
  "flappy-bounce": "🐤 Flappy Bounce",
  "whack-a-mole": "🔨 Whack-a-Mole",
  snake: "🐍 Snake",
  "2048": "🔢 2048",
  "simon-says": "🎵 Simon Says",
  "reaction-timer": "⚡ Reaction Timer",
  "rock-paper-scissors": "✊🖐✌️ Rock Paper Scissors",
  stroop: "🌈 Color Match Challenge",
};

/** Popup shown every 10 minutes of app use (see EngagementGameWatcher.tsx) —
 *  a short, non-Spanish "just for fun" brain break to keep long study
 *  sessions engaging, distinct from the vocabulary-focused mini-games
 *  (MiniGameBreak, PuzzlePopup). Skippable at any time via "Not now" so it
 *  never blocks something like an in-progress oral recording; only awards a
 *  bonus if the student actually finishes a round. Picks one of twelve
 *  rotating arcade-style games at random each time. */
export default function EngagementGamePopup({ onClose }: { onClose: (bonusPoints: number) => void }) {
  const [game] = useState<GameKind>(() => POOL[Math.floor(Math.random() * POOL.length)]);

  const renderGame = () => {
    switch (game) {
      case "tictactoe":
        return <TicTacToeGame onDone={onClose} />;
      case "minesweeper":
        return <MinesweeperGame onDone={onClose} />;
      case "target-shooter":
        return <TargetShooterGame onDone={onClose} />;
      case "brick-breaker":
        return <BrickBreakerGame onDone={onClose} />;
      case "flappy-bounce":
        return <FlappyBounceGame onDone={onClose} />;
      case "whack-a-mole":
        return <WhackAMoleGame onDone={onClose} />;
      case "snake":
        return <SnakeGame onDone={onClose} />;
      case "2048":
        return <Game2048 onDone={onClose} />;
      case "simon-says":
        return <SimonSaysGame onDone={onClose} />;
      case "reaction-timer":
        return <ReactionTimerGame onDone={onClose} />;
      case "rock-paper-scissors":
        return <RockPaperScissorsGame onDone={onClose} />;
      case "stroop":
        return <StroopChallengeGame onDone={onClose} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <div className="mb-3 flex items-center justify-between">
          <span className="pill-badge">10-minute brain break</span>
          <button type="button" onClick={() => onClose(0)} className="text-sm text-slate-400 hover:text-slate-600">
            Not now ✕
          </button>
        </div>
        <h3 className="mb-3 text-lg font-bold text-slate-900">{TITLES[game]}</h3>
        {renderGame()}
      </div>
    </div>
  );
}

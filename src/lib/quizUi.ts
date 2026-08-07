/// File: src/lib/quizUi.ts
//
// Shared visual constants for QuizItem-based question UIs (QuizModule,
// VocabularyModule's vocab quiz, and any future one) so the difficulty
// color-coding, per-type icon, and MCQ letter labels stay identical instead
// of drifting between components that render the same QuizItem shape.

import { Difficulty, QuizItemType } from "./types";

export const LEVEL_STYLES: Record<Difficulty, string> = {
  easy: "bg-green-100 text-green-700",
  medium: "bg-amber-100 text-amber-700",
  hard: "bg-rose-100 text-rose-700",
};

export const TYPE_ICON: Record<QuizItemType, string> = {
  mcq: "☰",
  short: "✏️",
  puzzle: "🧩",
  listening: "🎧",
};

export const OPTION_LETTERS = ["A", "B", "C", "D", "E", "F"];

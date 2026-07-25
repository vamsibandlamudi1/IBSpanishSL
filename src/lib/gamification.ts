/// File: src/lib/gamification.ts
//
// Pure gamification rules, kept separate from the store so they're easy to
// read, test, and tweak independently of state-management concerns.
//
// ---> TO ADD A NEW BADGE RULE: add the Badge definition to BADGES in
// lib/data.ts, then add a matching check function below and call it from
// evaluateBadges(). Rules are plain code (not a dynamic DSL) per the
// project's "keep it simple" requirement.

import { AudioSubmission, Difficulty, QuizAttempt, Theme } from "./types";

/** +10 / +20 / +30 points for completing an easy / medium / hard quiz. */
export function pointsForQuizDifficulty(difficulty: Difficulty): number {
  switch (difficulty) {
    case "easy":
      return 10;
    case "medium":
      return 20;
    case "hard":
      return 30;
  }
}

/** Flat point award for completing one audio (oral practice) assignment. */
export const AUDIO_ASSIGNMENT_POINTS = 15;

/** Flat point award for completing one Paper 2 writing task — a bigger
 *  point value than an audio assignment since it's a longer piece of work. */
export const WRITING_ASSIGNMENT_POINTS = 20;

interface BadgeEvalContext {
  quizAttempts: QuizAttempt[];
  audioSubmissions: AudioSubmission[];
  /** Count of writing tasks submitted so far (including the one just submitted, if any) —
   *  a plain count rather than a full submissions array since no badge rule needs more detail. */
  writingCount: number;
  alreadyUnlocked: string[];
}

/** Returns the ids of any badges the student has newly qualified for
 *  (excluding ones already in `alreadyUnlocked`). Call this after logging a
 *  new QuizAttempt or AudioSubmission. */
export function evaluateBadges(ctx: BadgeEvalContext): string[] {
  const earned: string[] = [];
  const has = (id: string) => ctx.alreadyUnlocked.includes(id) || earned.includes(id);

  // Primer Paso: first quiz completed.
  if (!has("primer-paso") && ctx.quizAttempts.length >= 1) {
    earned.push("primer-paso");
  }

  // Sobresaliente: scored >= 80% on any quiz.
  if (!has("sobresaliente") && ctx.quizAttempts.some((a) => a.total > 0 && a.score / a.total >= 0.8)) {
    earned.push("sobresaliente");
  }

  // Tema Maestro: 3+ quizzes completed within the same theme.
  if (!has("tema-maestro")) {
    const byTheme = new Map<string, number>();
    for (const a of ctx.quizAttempts) {
      byTheme.set(a.themeId, (byTheme.get(a.themeId) ?? 0) + 1);
    }
    if ([...byTheme.values()].some((count) => count >= 3)) {
      earned.push("tema-maestro");
    }
  }

  // Grammar Ninja: 5+ quizzes completed overall.
  if (!has("grammar-ninja") && ctx.quizAttempts.length >= 5) {
    earned.push("grammar-ninja");
  }

  // Oral Explorer: first audio assignment submitted.
  if (!has("oral-explorer") && ctx.audioSubmissions.length >= 1) {
    earned.push("oral-explorer");
  }

  // Oral Maestro: 3+ audio assignments submitted.
  if (!has("oral-maestro") && ctx.audioSubmissions.length >= 3) {
    earned.push("oral-maestro");
  }

  // Escritor Estelar: first writing task submitted.
  if (!has("escritor-estelar") && ctx.writingCount >= 1) {
    earned.push("escritor-estelar");
  }

  return earned;
}

/** A short, learning-focused message shown alongside points/badges so the
 *  app doesn't over-focus on rewards for their own sake. */
export function achievementMessage(theme: Theme | undefined, kind: "quiz" | "audio" | "writing"): string {
  const topic = theme ? `"${theme.name}"` : "this topic";
  if (kind === "quiz") return `Nice work — you reinforced vocabulary and grammar in ${topic}!`;
  if (kind === "audio") return `Great practice — you built oral fluency and confidence talking about ${topic}!`;
  return `Well done — you practiced real exam-style writing for ${topic}!`;
}

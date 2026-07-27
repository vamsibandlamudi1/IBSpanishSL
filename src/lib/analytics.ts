/// File: src/lib/analytics.ts
//
// Weakness detection & adaptive practice. This is what lets the app "figure
// out the weakness and make the student perfect" without a teacher: every
// answered question is logged (see QuestionResult in lib/types.ts and
// recordQuestionResult in lib/store.tsx), and the functions here turn that
// log into (a) a per-theme accuracy breakdown, (b) a single "focus on this
// next" recommendation, and (c) quiz question orderings that surface the
// student's weakest material first.

import { Difficulty, QuestionResult, QuizItem, Theme } from "./types";
import { shuffle } from "./utils";

export interface ThemeAccuracy {
  themeId: string;
  themeName: string;
  correct: number;
  total: number;
  /** null when the student hasn't attempted any question in this theme yet. */
  accuracy: number | null;
}

/** Per-theme correct/total/accuracy, in theme order (not sorted). */
export function themeAccuracy(results: QuestionResult[], themes: Theme[]): ThemeAccuracy[] {
  return themes.map((t) => {
    const relevant = results.filter((r) => r.themeId === t.id);
    const correct = relevant.filter((r) => r.correct).length;
    const total = relevant.length;
    return { themeId: t.id, themeName: t.name, correct, total, accuracy: total > 0 ? correct / total : null };
  });
}

/** The theme most worth practicing next: lowest accuracy among themes with at
 *  least `minAttempts` answered questions. Returns null if the student hasn't
 *  answered enough questions yet for a reliable recommendation. */
export function weakestTheme(results: QuestionResult[], themes: Theme[], minAttempts = 3): ThemeAccuracy | null {
  const withEnoughData = themeAccuracy(results, themes).filter((t) => t.total >= minAttempts);
  if (withEnoughData.length === 0) return null;
  return withEnoughData.reduce((worst, t) => ((t.accuracy ?? 1) < (worst.accuracy ?? 1) ? t : worst));
}

/** Per-question accuracy, keyed by question id. Unattempted questions simply
 *  won't have an entry — callers treat that as "unknown", not "weak". */
function questionAccuracy(results: QuestionResult[]): Map<string, number> {
  const stats = new Map<string, { correct: number; total: number }>();
  for (const r of results) {
    const s = stats.get(r.questionId) ?? { correct: 0, total: 0 };
    s.total += 1;
    if (r.correct) s.correct += 1;
    stats.set(r.questionId, s);
  }
  const acc = new Map<string, number>();
  for (const [id, s] of stats) acc.set(id, s.correct / s.total);
  return acc;
}

/** Builds a themed quiz that still respects the requested difficulty (as the
 *  primary sort key, same as a plain quiz) but, within each difficulty
 *  bucket, orders questions by ascending accuracy so previously-missed
 *  questions resurface before ones the student has already mastered.
 *  Never-attempted questions are treated as medium priority (0.5) so they're
 *  mixed in rather than always pushed to the back.
 *
 *  Shuffles before sorting because Array.sort is stable: with a fresh
 *  profile (or any group of questions tied at the same accuracy — the
 *  common case, since every never-attempted question ties at 0.5), a
 *  priority-only sort is a no-op that always preserves the bank's fixed
 *  insertion order, so the exact same first `count` questions would come up
 *  every single time a theme/difficulty combo is picked. Shuffling first
 *  randomizes the order *within* each tied priority group while the stable
 *  sort still keeps lower-accuracy questions ahead of higher-accuracy ones.
 *
 *  That first shuffle only breaks ties, though — once a student has a
 *  handful of genuinely-distinct low-accuracy questions (i.e. actual wrong
 *  answers, not just untouched ones), those specific questions sort strictly
 *  ahead of everything else and would otherwise fill the same slots in
 *  *every* quiz for that theme/difficulty forever, crowding out fresh
 *  material. So instead of taking the top `count` outright, take a wider
 *  weak-biased candidate pool (3x the quiz size) from `preferred` alone and
 *  shuffle *that* before slicing — struggling questions still show up more
 *  often than mastered ones, but they no longer monopolize every single
 *  quiz. Widening only within `preferred` (not the combined list) matters
 *  because "hard" has just ~10-15 hand-written questions per theme (all the
 *  auto-generated vocab drills top out at "medium") — widening across the
 *  full list would happily pad a "hard" quiz out with easier `rest`
 *  questions even when there were already enough hard ones to fill it.
 *  `rest` stays a same-count-only fallback for themes that genuinely don't
 *  have enough same-difficulty questions to fill a quiz on their own. */
export function selectAdaptiveQuizQuestions(
  bank: QuizItem[],
  themeId: string,
  difficulty: Difficulty,
  results: QuestionResult[],
  count = 6
): QuizItem[] {
  const accuracy = questionAccuracy(results);
  const priority = (q: QuizItem) => accuracy.get(q.id) ?? 0.5;

  const themeQuestions = shuffle(bank.filter((q) => q.themeId === themeId));
  const preferred = themeQuestions.filter((q) => q.difficulty === difficulty).sort((a, b) => priority(a) - priority(b));
  const rest = themeQuestions.filter((q) => q.difficulty !== difficulty).sort((a, b) => priority(a) - priority(b));

  const preferredPicks = shuffle(preferred.slice(0, Math.max(count * 3, count))).slice(0, count);
  return preferredPicks.length >= count ? preferredPicks : [...preferredPicks, ...rest].slice(0, count);
}

/** Builds a cross-theme "remedial" quiz from the student's weakest questions
 *  overall (lowest accuracy first), used by the "Practice my weak areas"
 *  quick-start on the Quiz page. Falls back to a general sample if the
 *  student hasn't answered enough questions yet to have any weak spots.
 *  Shuffled before sorting for the same reason as selectAdaptiveQuizQuestions
 *  above — otherwise ties (e.g. several questions all at 0% or 100%) always
 *  resolve in the bank's fixed order, repeating the same quiz every time. */
export function selectWeakAreaQuestions(bank: QuizItem[], results: QuestionResult[], count = 8): QuizItem[] {
  const accuracy = questionAccuracy(results);
  const attempted = shuffle(bank.filter((q) => accuracy.has(q.id)));

  if (attempted.length < count) {
    // Not enough history yet — top off with a spread across themes/difficulties
    // so the "weak areas" quiz is still useful on day one.
    const remainingSlots = count - attempted.length;
    const unattempted = shuffle(bank.filter((q) => !accuracy.has(q.id))).slice(0, remainingSlots);
    return [...attempted.sort((a, b) => (accuracy.get(a.id) ?? 0.5) - (accuracy.get(b.id) ?? 0.5)), ...unattempted];
  }

  return [...attempted].sort((a, b) => (accuracy.get(a.id) ?? 0.5) - (accuracy.get(b.id) ?? 0.5)).slice(0, count);
}

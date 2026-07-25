/// File: src/lib/utils.ts
//
// Small generic helpers shared across components. Kept separate from the
// content/domain files (data.ts, grammar.ts, puzzles.ts) since these have
// no IB-specific meaning.

/** Fisher-Yates shuffle — returns a new array, doesn't mutate the input. */
export function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

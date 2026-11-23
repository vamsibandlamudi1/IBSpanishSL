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

/** Removes duplicate vocabulary entries (same Spanish term + English meaning
 *  within a subtopic). The source data has a few repeats, which caused duplicate
 *  list keys and repeated quiz items. */
export function uniqueVocab<T extends { es: string; en: string; subtopic?: string }>(items: T[]): T[] {
  const seen = new Set<string>();
  return items.filter((v) => {
    const key = `${v.es}|${v.en}|${v.subtopic ?? ""}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

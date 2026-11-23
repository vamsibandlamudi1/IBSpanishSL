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

/** Leading prepositions and articles that do not change the meaning of a short answer. */
const LEADING_FILLERS = new Set(["en", "de", "a", "por", "para", "con", "el", "la", "los", "las", "un", "una"]);

/** Compares a typed short answer with the expected one. Accents, case and punctuation are
 *  ignored, and leading prepositions/articles are optional ("su propio instituto" matches
 *  "en su propio instituto"). A typed answer that contains the whole expected answer (or the
 *  reverse) also counts when both have at least two words. */
export function answersMatch(given: string, expected: string): boolean {
  const clean = (s: string) =>
    s
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[.,;:!?¿¡"«»()—-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  const core = (s: string) => {
    const words = clean(s).split(" ").filter(Boolean);
    while (words.length > 1 && LEADING_FILLERS.has(words[0])) words.shift();
    return words.join(" ");
  };
  const g = core(given);
  const e = core(expected);
  if (!g || !e) return false;
  if (g === e) return true;
  const gw = g.split(" ").length;
  const ew = e.split(" ").length;
  return gw >= 2 && ew >= 2 && (g.includes(e) || e.includes(g));
}

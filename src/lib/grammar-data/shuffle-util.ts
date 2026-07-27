/** Deterministic-but-varied shuffle: order depends on a seed derived from
 *  the item itself (e.g. a string length or index), so option order differs
 *  from question to question without needing Math.random() — keeping the
 *  generated exercise sets reproducible on every load. Shared by the new
 *  generator-based grammar topics so the correct answer never lands in the
 *  same option slot every time (which several existing generators do by
 *  always building options as [correct, ...distractors]). */
export function shuffleFixed<T>(arr: T[], seed: number): T[] {
  const copy = [...arr];
  let s = seed;
  for (let i = copy.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

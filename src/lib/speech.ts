/// File: src/lib/speech.ts
//
// Shared helper around the browser's Web Speech API (speechSynthesis) so
// every module that speaks Spanish text — the oral-practice prompts
// (AudioAssignmentModule) and the per-word pronunciation buttons
// (VocabList, VocabExercise) — shares one implementation instead of
// duplicating utterance setup. No API key or network request; runs
// entirely in-browser, so voice quality/availability depends on the
// user's OS/browser.

export function speak(text: string, onEnd?: () => void) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    onEnd?.();
    return;
  }
  window.speechSynthesis.cancel(); // stop anything already playing
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  utterance.rate = 0.95;
  utterance.onend = () => onEnd?.();
  utterance.onerror = () => onEnd?.();
  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

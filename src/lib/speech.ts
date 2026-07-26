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

  // Stop any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  utterance.rate = 0.95;
  utterance.volume = 1.0;

  // macOS Safari requires explicit voice assignment to Spanish, otherwise it
  // silently fails or defaults to silent playback when no default Spanish voice is set.
  const voices = window.speechSynthesis.getVoices();
  const spanishVoice =
    voices.find((v) => v.lang.startsWith("es") && v.localService) ||
    voices.find((v) => v.lang.startsWith("es")) ||
    null;

  if (spanishVoice) {
    utterance.voice = spanishVoice;
  }

  utterance.onend = () => {
    onEnd?.();
  };
  utterance.onerror = () => {
    onEnd?.();
  };

  // Safari bug fix: Store utterance reference on window object to prevent Safari's
  // aggressive garbage collector from killing the speech audio mid-sentence.
  (window as any)._activeUtterance = utterance;

  // Resume synthesis engine in case Safari paused it automatically
  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

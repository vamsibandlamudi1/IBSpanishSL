/// File: src/lib/speech.ts
//
// Shared helper around the browser's Web Speech API (speechSynthesis) so
// every module that speaks Spanish text — the oral-practice prompts
// (AudioAssignmentModule), the per-word pronunciation buttons (VocabList,
// VocabExercise), and the Reading passage listen feature (ReadingModule) —
// shares one implementation instead of duplicating utterance setup. No API
// key or network request; runs entirely in-browser, so voice quality/
// availability depends on the user's OS/browser.

export interface SpeakOptions {
  /** 0.5–2, defaults to 0.95 (slightly slower than natural, easier to follow). */
  rate?: number;
  /** voiceURI of a specific SpeechSynthesisVoice to use, e.g. from getSpanishVoices(). */
  voiceURI?: string;
}

export function getSpanishVoices(): SpeechSynthesisVoice[] {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return [];
  return window.speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith("es"));
}

/** Picks a sensible default among the available Spanish voices.
 *
 *  Network ("Google ...") voices are preferred over local/on-device ones:
 *  quality varies wildly by OS for the local voices — Windows' bundled
 *  Spanish voices are decent, but macOS's default local Spanish voice
 *  (Mónica) sounds noticeably more robotic. Chrome's network voices sound
 *  good and consistent across every OS, so preferring them evens out that
 *  gap. Local voices remain the fallback since they work offline and on
 *  browsers (Safari) that don't expose network voices at all. */
export function pickDefaultSpanishVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  return (
    voices.find((v) => !v.localService && /^es/i.test(v.lang)) ||
    voices.find((v) => v.localService && /^es/i.test(v.lang)) ||
    voices[0] ||
    null
  );
}

export function speak(text: string, onEnd?: () => void, options?: SpeakOptions) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    onEnd?.();
    return;
  }

  // Stop any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  utterance.rate = options?.rate ?? 0.95;
  utterance.volume = 1.0;

  // macOS Safari requires explicit voice assignment to Spanish, otherwise it
  // silently fails or defaults to silent playback when no default Spanish voice is set.
  const voices = getSpanishVoices();
  const requested = options?.voiceURI ? voices.find((v) => v.voiceURI === options.voiceURI) : null;
  const spanishVoice = requested || pickDefaultSpanishVoice(voices);

  if (spanishVoice) {
    utterance.voice = spanishVoice;
    utterance.lang = spanishVoice.lang;
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

export function pauseSpeaking() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.pause();
  }
}

export function resumeSpeaking() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.resume();
  }
}

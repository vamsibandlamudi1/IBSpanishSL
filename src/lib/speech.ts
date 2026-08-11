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
  /** 0–2, defaults to 1 (the voice's natural pitch). PodcastModule shifts this per
   *  speaker (e.g. 1.15 / 0.8) so a two-host dialogue read by a single available
   *  voice still sounds like two distinct people instead of one voice talking to itself. */
  pitch?: number;
  /** Fired per spoken word (Chrome/Edge fire this reliably via utterance.onboundary;
   *  Safari's support is inconsistent, so callers must treat this as a nice-to-have,
   *  not something to depend on for correctness). charIndex/charLength index into
   *  the `text` passed to speak() — used by PodcastModule to highlight the word
   *  currently being read aloud. */
  onBoundary?: (charIndex: number, charLength: number) => void;
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

// Chrome has a long-standing bug (crbug.com/335907) where speechSynthesis
// silently stops producing audio for a single utterance once it would take
// roughly 15+ seconds to speak — a couple of sentences is fine, but a whole
// Reading passage or Podcast transcript passed as one utterance goes silent
// partway through (or never starts). Splitting into shorter per-sentence
// utterances and chaining them via onend sidesteps the bug entirely. A hard
// character cap is a safety net for the rare sentence with no punctuation
// for a long stretch.
const MAX_CHUNK_CHARS = 220;

function splitIntoSpeechChunks(text: string): { text: string; start: number }[] {
  const rough: { text: string; start: number }[] = [];
  const sentenceRe = /[^.!?\n]+(?:[.!?]+|\n+|$)\s*/g;
  let match: RegExpExecArray | null;
  while ((match = sentenceRe.exec(text))) {
    if (match[0].length === 0) {
      sentenceRe.lastIndex++;
      continue;
    }
    if (match[0].trim().length > 0) rough.push({ text: match[0], start: match.index });
  }
  if (rough.length === 0) return [{ text, start: 0 }];

  const chunks: { text: string; start: number }[] = [];
  for (const chunk of rough) {
    if (chunk.text.length <= MAX_CHUNK_CHARS) {
      chunks.push(chunk);
      continue;
    }
    let offset = 0;
    while (offset < chunk.text.length) {
      let end = Math.min(offset + MAX_CHUNK_CHARS, chunk.text.length);
      if (end < chunk.text.length) {
        const lastSpace = chunk.text.lastIndexOf(" ", end);
        if (lastSpace > offset) end = lastSpace + 1;
      }
      chunks.push({ text: chunk.text.slice(offset, end), start: chunk.start + offset });
      offset = end;
    }
  }
  return chunks;
}

// Bumped on every speak()/stopSpeaking() call so a chunk chain that's mid-flight
// when the student switches passages or hits stop knows to abandon itself
// instead of queuing up the next chunk of stale text.
let speakToken = 0;

export function speak(text: string, onEnd?: () => void, options?: SpeakOptions) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    onEnd?.();
    return;
  }

  // Stop any ongoing speech
  const token = ++speakToken;
  window.speechSynthesis.cancel();

  // macOS Safari requires explicit voice assignment to Spanish, otherwise it
  // silently fails or defaults to silent playback when no default Spanish voice is set.
  const voices = getSpanishVoices();
  const requested = options?.voiceURI ? voices.find((v) => v.voiceURI === options.voiceURI) : null;
  const spanishVoice = requested || pickDefaultSpanishVoice(voices);

  const chunks = splitIntoSpeechChunks(text);
  let i = 0;

  const speakNextChunk = () => {
    if (token !== speakToken) return; // superseded by a newer speak()/stopSpeaking() call
    if (i >= chunks.length) {
      onEnd?.();
      return;
    }
    const chunk = chunks[i++];
    const utterance = new SpeechSynthesisUtterance(chunk.text);
    utterance.lang = spanishVoice?.lang ?? "es-ES";
    utterance.rate = options?.rate ?? 0.95;
    utterance.pitch = options?.pitch ?? 1;
    utterance.volume = 1.0;
    if (spanishVoice) utterance.voice = spanishVoice;

    utterance.onend = () => {
      if (token !== speakToken) return;
      speakNextChunk();
    };
    utterance.onerror = () => {
      if (token !== speakToken) return;
      speakNextChunk(); // skip the failed chunk rather than aborting the rest of the episode
    };
    if (options?.onBoundary) {
      utterance.onboundary = (event) => {
        if (event.name && event.name !== "word") return; // ignore sentence-level boundaries when word ones are also firing
        options.onBoundary?.(chunk.start + event.charIndex, event.charLength ?? 0);
      };
    }

    // Safari bug fix: Store utterance reference on window object to prevent Safari's
    // aggressive garbage collector from killing the speech audio mid-sentence.
    (window as any)._activeUtterance = utterance;

    // Resume synthesis engine in case Safari paused it automatically
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }

    window.speechSynthesis.speak(utterance);
  };

  speakNextChunk();
}

export function stopSpeaking() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    speakToken++; // invalidate any in-flight chunk chain
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

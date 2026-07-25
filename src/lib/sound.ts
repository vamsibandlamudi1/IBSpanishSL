/// File: src/lib/sound.ts
//
// Tiny synthesized sound effects via the Web Audio API — no audio files or
// external services needed, in the same spirit as using the browser's
// built-in speechSynthesis for TTS elsewhere in the app (see
// AudioAssignmentModule.tsx). Each call builds a couple of short sine-wave
// tones and lets them decay — cheap, dependency-free "achievement" chimes.

let audioContext: AudioContext | null = null;

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  if (!audioContext) audioContext = new Ctor();
  return audioContext;
}

function playTone(ctx: AudioContext, frequency: number, startTime: number, duration: number, peakGain = 0.15) {
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(peakGain, startTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration);
}

/** Short two-note ascending chime — played when points are awarded. */
export function playPointsChime() {
  const ctx = getContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  playTone(ctx, 660, now, 0.15);
  playTone(ctx, 880, now + 0.1, 0.2);
}

/** Bigger three-note fanfare (C-E-G major triad) — played when a new badge unlocks. */
export function playBadgeFanfare() {
  const ctx = getContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  playTone(ctx, 523.25, now, 0.15); // C5
  playTone(ctx, 659.25, now + 0.12, 0.15); // E5
  playTone(ctx, 783.99, now + 0.24, 0.35); // G5
}

/** Very short single tone for one correct answer in a practice/quiz drill —
 *  deliberately smaller than playPointsChime, which fires once per
 *  completed quiz/assignment rather than per question. */
export function playCorrectDing() {
  const ctx = getContext();
  if (!ctx) return;
  playTone(ctx, 880, ctx.currentTime, 0.12, 0.12);
}

/** Very short low tone for one incorrect answer, paired with a brief shake
 *  animation on the answer control. */
export function playIncorrectBuzz() {
  const ctx = getContext();
  if (!ctx) return;
  playTone(ctx, 180, ctx.currentTime, 0.18, 0.1);
}

/** Single configurable-pitch beep — used for game pads/buttons (e.g. Simon
 *  Says) that need a distinct tone per option rather than a fixed chime. */
export function playBeep(frequency: number) {
  const ctx = getContext();
  if (!ctx) return;
  playTone(ctx, frequency, ctx.currentTime, 0.2, 0.1);
}

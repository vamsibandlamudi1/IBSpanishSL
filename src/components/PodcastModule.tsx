/// File: src/components/PodcastModule.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PODCAST_EPISODES } from "@/lib/podcast";
import { COMMON_WORD_GLOSSES } from "@/lib/spanishCommonWords";
import { useStore } from "@/lib/store";
import { deriveJustification } from "@/lib/deriveJustification";
import { ReadingQuestion } from "@/lib/types";
import { getSpanishVoices, pauseSpeaking, pickDefaultSpanishVoice, resumeSpeaking, speak, stopSpeaking } from "@/lib/speech";

const LEVEL_STYLES: Record<string, string> = {
  easy: "bg-green-100 text-green-700",
  medium: "bg-amber-100 text-amber-700",
  hard: "bg-rose-100 text-rose-700",
};

const stripAccents = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
const normalize = (s: string) => stripAccents(s.trim().toLowerCase());
const stripPunct = (s: string) => s.replace(/^[¿¡"'«»(),.;:!?—-]+|["'«»(),.;:!?—-]+$/g, "");
const normalizeWord = (s: string) => stripAccents(stripPunct(s).toLowerCase());

interface Token {
  text: string;
  start: number;
  isWord: boolean;
}

/** Splits the transcript into whitespace/word runs, each tagged with its
 *  character offset in the original string — lets us line up the
 *  SpeechSynthesisUtterance's onboundary charIndex with a specific token
 *  (for the "currently spoken" highlight) without needing to pre-author any
 *  timing data alongside the transcript text. */
function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  const regex = /\S+|\s+/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text))) {
    tokens.push({ text: match[0], start: match.index, isWord: /\S/.test(match[0]) });
  }
  return tokens;
}

interface Turn {
  speaker: string;
  /** Text with the "Speaker: " label stripped — what actually gets spoken,
   *  so the host's name is never read aloud mid-sentence. */
  spoken: string;
  /** Offset of `spoken` (i.e. right after "Speaker: ") in the original bodyEs —
   *  added to each utterance's onboundary charIndex so the live-highlight
   *  lookup (keyed to bodyEs offsets via `tokens`) keeps working unchanged. */
  start: number;
}

/** Splits a "Marina: ...\n\nBen: ...\n\n..." transcript into per-speaker turns,
 *  each played as its own utterance with its own voice/pitch (see speakerVoices
 *  below) — the label itself is stripped from `spoken` so it isn't read aloud. */
function parseTurns(bodyEs: string): Turn[] {
  const turns: Turn[] = [];
  const paraRe = /[^\n]+(?:\n(?!\n)[^\n]*)*/g;
  let match: RegExpExecArray | null;
  while ((match = paraRe.exec(bodyEs))) {
    const para = match[0];
    const labelMatch = para.match(/^([A-Za-zÀ-ÿ]+):\s*/);
    if (labelMatch) {
      const start = match.index + labelMatch[0].length;
      turns.push({ speaker: labelMatch[1], spoken: para.slice(labelMatch[0].length), start });
    } else {
      turns.push({ speaker: "", spoken: para, start: match.index });
    }
  }
  return turns;
}

/** Listening comprehension, Notes-in-Spanish style: pick a ~10-minute
 *  two-host episode (sidebar, same pattern as ReadingModule's passage list),
 *  play it aloud with the currently-spoken word highlighted live, hover any
 *  underlined vocabulary word for its English meaning, then answer
 *  true/false, multiple choice, and short-answer comprehension questions —
 *  reusing ReadingQuestion's type and grading/justification logic verbatim
 *  since the shape is identical to a reading passage's questions. */
export default function PodcastModule() {
  const { completeQuiz, recordQuestionResult, lastAward, clearLastAward, setActiveSession, quizAttempts } = useStore();

  const [episodeId, setEpisodeId] = useState(PODCAST_EPISODES[0].id);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceURI, setVoiceURI] = useState("");
  const [rate, setRate] = useState(0.9);
  const [playState, setPlayState] = useState<"idle" | "playing" | "paused">("idle");
  const [isMac, setIsMac] = useState(false);
  const [activeCharIndex, setActiveCharIndex] = useState<number | null>(null);
  const activeWordRef = useRef<HTMLSpanElement | null>(null);
  // Bumped on stop/pause-through-episode-switch so a turn chain mid-flight
  // (waiting on the current speaker's utterance to end) knows to abandon
  // itself instead of speaking the next turn over a episode the student left.
  const playGenRef = useRef(0);

  const episode = useMemo(() => PODCAST_EPISODES.find((e) => e.id === episodeId) ?? PODCAST_EPISODES[0], [episodeId]);
  const tokens = useMemo(() => tokenize(episode.bodyEs), [episode]);
  const turns = useMemo(() => parseTurns(episode.bodyEs), [episode]);

  // Two-host dialogue needs to sound like two people: use a second distinct
  // Spanish voice for the second speaker when the browser/OS exposes one,
  // otherwise fall back to shifting pitch up/down on the single available
  // voice — works even in Chrome, which typically exposes only one Spanish
  // network voice.
  const speakerVoices = useMemo(() => {
    const names = Array.from(new Set(turns.map((t) => t.speaker).filter(Boolean)));
    const primary = voices.find((v) => v.voiceURI === voiceURI) ?? null;
    const secondary = voices.find((v) => v.voiceURI !== voiceURI) ?? null;
    const map = new Map<string, { voiceURI?: string; pitch: number }>();
    names.forEach((name, i) => {
      if (i === 0) {
        map.set(name, { voiceURI: primary?.voiceURI ?? voiceURI, pitch: 1 });
      } else if (secondary) {
        map.set(name, { voiceURI: secondary.voiceURI, pitch: 1 });
      } else {
        // Subtle shift, not a cartoonish one — a big pitch swing reads as
        // more robotic, not less, on the browser's synthetic voices.
        map.set(name, { voiceURI: primary?.voiceURI ?? voiceURI, pitch: i % 2 === 1 ? 0.92 : 1.08 });
      }
    });
    return map;
  }, [turns, voices, voiceURI]);

  // Base layer of ~240 common words (articles, pronouns, "antes", "aunque",
  // etc.) so hovering works for ordinary running text, not just the curated
  // key terms — then each episode's own vocabulary list overrides/adds to
  // it. Single-word entries only; multi-word phrases ("consumo responsable")
  // still appear in the vocabulary list below but aren't reliably matchable
  // against one transcript token, so they're left un-glossed inline.
  const vocabMap = useMemo(() => {
    const map = new Map<string, string>(Object.entries(COMMON_WORD_GLOSSES));
    for (const v of episode.vocabulary ?? []) {
      if (!/\s/.test(v.es.trim())) map.set(normalizeWord(v.es), v.en);
    }
    return map;
  }, [episode]);

  // Best (highest-scoring) attempt per episode, keyed by episode id — powers the
  // completed checkmark + score shown on each entry in the sidebar list.
  const bestAttemptByEpisode = useMemo(() => {
    const map = new Map<string, { score: number; total: number }>();
    for (const attempt of quizAttempts) {
      if (!attempt.themeId.startsWith("podcast-")) continue;
      const id = attempt.themeId.slice("podcast-".length);
      const existing = map.get(id);
      if (!existing || attempt.score / attempt.total > existing.score / existing.total) {
        map.set(id, { score: attempt.score, total: attempt.total });
      }
    }
    return map;
  }, [quizAttempts]);

  useEffect(() => {
    setActiveSession(!checked);
    return () => setActiveSession(false);
  }, [checked, setActiveSession]);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const loadVoices = () => {
      const spanish = getSpanishVoices();
      setVoices(spanish);
      setVoiceURI((prev) => prev || pickDefaultSpanishVoice(spanish)?.voiceURI || "");
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    setIsMac(/Mac|iPhone|iPad/.test(window.navigator.platform ?? window.navigator.userAgent));
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  // Stop any playback when leaving the episode so audio never keeps reading
  // an episode that's no longer on screen.
  useEffect(() => {
    return () => {
      playGenRef.current++;
      stopSpeaking();
    };
  }, [episodeId]);

  useEffect(() => {
    activeWordRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [activeCharIndex]);

  const playEpisode = () => {
    const gen = ++playGenRef.current;
    setPlayState("playing");

    let i = 0;
    const playNextTurn = () => {
      if (gen !== playGenRef.current) return; // stopped/switched since this was scheduled
      if (i >= turns.length) {
        setPlayState("idle");
        setActiveCharIndex(null);
        return;
      }
      const turn = turns[i++];
      const audio = speakerVoices.get(turn.speaker);
      speak(
        turn.spoken,
        () => {
          if (gen === playGenRef.current) playNextTurn();
        },
        {
          rate,
          voiceURI: audio?.voiceURI ?? voiceURI,
          pitch: audio?.pitch ?? 1,
          onBoundary: (charIndex) => setActiveCharIndex(turn.start + charIndex),
        }
      );
    };
    playNextTurn();
  };

  const togglePause = () => {
    if (playState === "playing") {
      pauseSpeaking();
      setPlayState("paused");
    } else if (playState === "paused") {
      resumeSpeaking();
      setPlayState("playing");
    }
  };

  const stopEpisode = () => {
    playGenRef.current++; // invalidate any pending turn chain
    stopSpeaking();
    setPlayState("idle");
    setActiveCharIndex(null);
  };

  const selectEpisode = (id: string) => {
    playGenRef.current++;
    stopSpeaking();
    setPlayState("idle");
    setActiveCharIndex(null);
    setEpisodeId(id);
    setAnswers({});
    setChecked(false);
    clearLastAward();
  };

  const setAnswer = (questionId: string, value: string) => {
    if (checked) return;
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const isCorrect = (q: ReadingQuestion) => normalize(answers[q.id] ?? "") === normalize(q.correctAnswer);

  const checkAnswers = () => {
    if (checked) return;
    setChecked(true);
    episode.questions.forEach((q) => recordQuestionResult(q.id, episode.themeId, episode.level, isCorrect(q)));
    const correctCount = episode.questions.filter(isCorrect).length;
    completeQuiz(`podcast-${episode.id}`, episode.level, correctCount, episode.questions.length);
  };

  const answeredCount = episode.questions.filter((q) => (answers[q.id] ?? "").trim().length > 0).length;
  const correctCount = checked ? episode.questions.filter(isCorrect).length : 0;

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      {/* Sidebar: one episode per IB theme, same pattern as ReadingModule's passage list. */}
      <nav className="flex gap-2 overflow-x-auto pb-1 lg:w-72 lg:shrink-0 lg:flex-col lg:overflow-visible lg:pb-0">
        {PODCAST_EPISODES.map((e) => {
          const active = e.id === episode.id;
          const best = bestAttemptByEpisode.get(e.id);
          return (
            <button
              key={e.id}
              type="button"
              onClick={() => selectEpisode(e.id)}
              className={`shrink-0 rounded-lg border p-3 text-left transition lg:shrink ${
                active ? "border-brand-400 bg-brand-50" : "border-slate-200 bg-white hover:border-brand-300 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-1.5">
                {best && (
                  <span className="text-xs text-green-600" title={`Best score: ${best.score}/${best.total}`}>
                    ✓
                  </span>
                )}
                <p className={`whitespace-nowrap text-sm font-semibold lg:whitespace-normal ${active ? "text-brand-800" : "text-slate-800"}`}>
                  {e.title}
                </p>
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="hidden text-[10px] font-medium uppercase tracking-wide text-slate-400 lg:block">{e.durationLabel}</span>
                {best && <span className="text-[10px] font-medium text-green-600">{best.score}/{best.total}</span>}
              </div>
            </button>
          );
        })}
      </nav>

      {/* Episode + questions */}
      <div key={episode.id} className="animate-fade-slide-up min-w-0 flex-1">
        <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-lg font-bold text-slate-900">{episode.title}</h2>
            <div className="flex items-center gap-1.5">
              <span className="pill-badge">🎙️ {episode.durationLabel}</span>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${LEVEL_STYLES[episode.level]}`}>
                {episode.level}
              </span>
            </div>
          </div>
          <p className="mb-3 text-sm text-slate-500">{episode.description}</p>

          <div className="mb-3 flex flex-wrap items-center gap-2 rounded-lg bg-slate-50 p-2.5">
            {playState === "idle" ? (
              <button
                type="button"
                onClick={playEpisode}
                className="flex items-center gap-1.5 rounded-full border border-brand-300 bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700 hover:bg-brand-100"
              >
                🔊 Escuchar
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={togglePause}
                  className="flex items-center gap-1.5 rounded-full border border-brand-300 bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700 hover:bg-brand-100"
                >
                  {playState === "playing" ? "⏸ Pausar" : "▶ Reanudar"}
                </button>
                <button
                  type="button"
                  onClick={stopEpisode}
                  className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  ⏹ Parar
                </button>
              </>
            )}

            <select
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="rounded-md border border-slate-200 bg-white px-2 py-1.5 text-xs text-slate-600"
              title="Velocidad de lectura"
            >
              <option value={0.7}>0.7x</option>
              <option value={0.9}>0.9x</option>
              <option value={1}>1x</option>
              <option value={1.15}>1.15x</option>
            </select>

            {voices.length > 1 && (
              <select
                value={voiceURI}
                onChange={(e) => setVoiceURI(e.target.value)}
                className="min-w-0 max-w-[220px] rounded-md border border-slate-200 bg-white px-2 py-1.5 text-xs text-slate-600"
                title="Voz"
              >
                {voices.map((v) => (
                  <option key={v.voiceURI} value={v.voiceURI}>
                    {v.name} ({v.lang}){v.localService ? "" : " • red"}
                  </option>
                ))}
              </select>
            )}

            {isMac && !voices.some((v) => !v.localService) && (
              <span className="text-[11px] text-slate-400">
                Voz robótica en Mac — pruébalo en Chrome para voces de mejor calidad.
              </span>
            )}
          </div>

          <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
            {tokens.map((t, i) => {
              if (!t.isWord) return t.text;
              const isActive = activeCharIndex !== null && activeCharIndex >= t.start && activeCharIndex < t.start + t.text.length;
              const gloss = vocabMap.get(normalizeWord(t.text));
              return (
                <span
                  key={i}
                  ref={isActive ? activeWordRef : undefined}
                  className={[
                    isActive ? "rounded bg-mint-200 text-slate-900" : "",
                    gloss ? "group relative inline-block cursor-help border-b border-dotted border-brand-400" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {t.text}
                  {gloss && (
                    <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-1 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white shadow-lg group-hover:block">
                      {gloss}
                    </span>
                  )}
                </span>
              );
            })}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {episode.questions.map((q, i) => {
            const picked = answers[q.id];
            const correct = checked && isCorrect(q);
            const wrong = checked && !isCorrect(q);
            return (
              <div
                key={q.id}
                className={`rounded-2xl border bg-white p-4 shadow-sm transition ${
                  correct ? "border-green-300 bg-green-50" : wrong ? "border-red-300 bg-red-50" : "border-slate-200"
                }`}
              >
                <p className="mb-3 text-sm font-semibold text-slate-900">
                  {i + 1}. {q.prompt}
                </p>

                {q.type === "true-false" && (
                  <div className="flex gap-2">
                    {["true", "false"].map((val) => (
                      <button
                        key={val}
                        type="button"
                        disabled={checked}
                        onClick={() => setAnswer(q.id, val)}
                        className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
                          picked === val ? "border-brand-400 bg-brand-100 text-brand-800" : "border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {val === "true" ? "Verdadero" : "Falso"}
                      </button>
                    ))}
                  </div>
                )}

                {q.type === "mcq" && (
                  <div className="flex flex-col gap-2">
                    {q.options?.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        disabled={checked}
                        onClick={() => setAnswer(q.id, opt)}
                        className={`rounded-md border px-3 py-2 text-left text-sm ${
                          picked === opt ? "border-brand-400 bg-brand-100 text-brand-800" : "border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {q.type === "short" && (
                  <input
                    type="text"
                    value={picked ?? ""}
                    disabled={checked}
                    onChange={(e) => setAnswer(q.id, e.target.value)}
                    placeholder="Escribe tu respuesta en español..."
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500"
                  />
                )}

                {checked && (
                  <p className={`mt-3 text-sm font-medium ${correct ? "text-green-700" : "text-red-700"}`}>
                    {correct ? "¡Correcto!" : `Incorrecto — respuesta correcta: "${q.correctAnswer === "true" ? "Verdadero" : q.correctAnswer === "false" ? "Falso" : q.correctAnswer}"`}
                    {(() => {
                      const justification = deriveJustification(q, episode.bodyEs);
                      return justification && <span className="ml-1 italic text-slate-500">({justification})</span>;
                    })()}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {!checked ? (
            <button type="button" onClick={checkAnswers} disabled={answeredCount === 0} className="btn-primary">
              Check answers ({answeredCount} / {episode.questions.length} answered)
            </button>
          ) : (
            <>
              <p className="text-lg font-bold text-slate-900">
                {correctCount} / {episode.questions.length} correct
              </p>
              <button type="button" onClick={() => selectEpisode(episode.id)} className="btn-outline">
                Try again
              </button>
            </>
          )}
        </div>

        {checked && lastAward && (
          <div className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
            <p className="font-semibold">+{lastAward.pointsAwarded} points</p>
            {lastAward.newBadges.length > 0 && (
              <p className="mt-1">New badge{lastAward.newBadges.length > 1 ? "s" : ""}: {lastAward.newBadges.map((b) => b.name).join(", ")}</p>
            )}
          </div>
        )}

        {episode.vocabulary && episode.vocabulary.length > 0 && (
          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">Vocabulario clave</h3>
            <p className="mb-2 text-xs text-slate-400">
              Las palabras subrayadas en el guion también muestran su significado al pasar el ratón por encima.
            </p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {episode.vocabulary.map((v) => (
                <button
                  key={v.es}
                  type="button"
                  onClick={() => speak(v.es, undefined, { rate: 0.85, voiceURI })}
                  className="flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-slate-50"
                  title="Escuchar pronunciación"
                >
                  <span className="font-medium text-slate-800">🔊 {v.es}</span>
                  <span className="text-slate-500">{v.en}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

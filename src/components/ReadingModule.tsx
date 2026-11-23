/// File: src/components/ReadingModule.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { READING_PASSAGES } from "@/lib/reading";
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

/** Paper 2 style reading comprehension: pick a passage (sidebar, same
 *  pattern as GrammarModule's topic list), read the Spanish text, answer a
 *  mix of true/false (with justification, matching the real IB format),
 *  multiple choice, and short-answer questions, then check everything at
 *  once — mirroring how a reading paper is actually reviewed as a set
 *  rather than question-by-question. Scored and graded automatically,
 *  same as Quiz/Grammar — completing a passage awards points via the
 *  shared gamification system. */
export default function ReadingModule() {
  const { completeQuiz, recordQuestionResult, lastAward, clearLastAward, setActiveSession, quizAttempts, themes } = useStore();
  const [filter, setFilter] = useState<"all" | "todo" | "done">("all");
  const [collapsedThemes, setCollapsedThemes] = useState<Record<string, boolean>>({});

  const [passageId, setPassageId] = useState(READING_PASSAGES[0].id);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceURI, setVoiceURI] = useState("");
  const [rate, setRate] = useState(0.9);
  const [playState, setPlayState] = useState<"idle" | "playing" | "paused">("idle");
  const [isMac, setIsMac] = useState(false);

  const passage = useMemo(() => READING_PASSAGES.find((p) => p.id === passageId) ?? READING_PASSAGES[0], [passageId]);

  // Best (highest-scoring) attempt per passage, keyed by passage id — powers the
  // completed checkmark + score shown on each entry in the sidebar list.
  const bestAttemptByPassage = useMemo(() => {
    const map = new Map<string, { score: number; total: number }>();
    for (const attempt of quizAttempts) {
      if (!attempt.themeId.startsWith("reading-")) continue;
      const id = attempt.themeId.slice("reading-".length);
      const existing = map.get(id);
      if (!existing || attempt.score / attempt.total > existing.score / existing.total) {
        map.set(id, { score: attempt.score, total: attempt.total });
      }
    }
    return map;
  }, [quizAttempts]);

  // Lets the global milestone/engagement popups know the student is mid-passage,
  // so they defer themselves until answers are checked — see lib/store.tsx's
  // activeSession.
  useEffect(() => {
    setActiveSession(!checked);
    return () => setActiveSession(false);
  }, [checked, setActiveSession]);

  // Voices load asynchronously in most browsers (Chrome fires
  // onvoiceschanged once the list — including network voices — is ready).
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

  // Stop any playback when leaving the passage (switching passages or
  // navigating away) so audio never keeps reading a passage that's no longer on screen.
  useEffect(() => {
    return () => stopSpeaking();
  }, [passageId]);

  const playPassage = () => {
    setPlayState("playing");
    speak(passage.bodyEs, () => setPlayState("idle"), { rate, voiceURI });
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

  const stopPassage = () => {
    stopSpeaking();
    setPlayState("idle");
  };

  const selectPassage = (id: string) => {
    stopSpeaking();
    setPlayState("idle");
    setPassageId(id);
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
    // Guards against double-counting the whole passage — a rapid double-click
    // on "Check answers" before React re-renders the button away would
    // otherwise record every question in the passage twice.
    if (checked) return;
    setChecked(true);
    passage.questions.forEach((q) => recordQuestionResult(q.id, passage.themeId, passage.level, isCorrect(q)));
    const correctCount = passage.questions.filter(isCorrect).length;
    completeQuiz(`reading-${passage.id}`, passage.level, correctCount, passage.questions.length);
  };

  const answeredCount = passage.questions.filter((q) => (answers[q.id] ?? "").trim().length > 0).length;
  const correctCount = checked ? passage.questions.filter(isCorrect).length : 0;

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      {/* Sidebar: passages grouped by theme, with overall progress, a
          to-do/done filter, and a check + score on completed passages. */}
      <aside className="lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:w-72 lg:shrink-0 lg:overflow-y-auto lg:pr-1">
        <div className="mb-3 rounded-xl border border-slate-200 bg-white p-3">
          <div className="flex items-baseline justify-between gap-2">
            <p className="text-sm font-semibold text-slate-800">
              {READING_PASSAGES.filter((p) => bestAttemptByPassage.has(p.id)).length} of {READING_PASSAGES.length} completed
            </p>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-green-500 transition-all"
              style={{
                width: `${(READING_PASSAGES.filter((p) => bestAttemptByPassage.has(p.id)).length / READING_PASSAGES.length) * 100}%`,
              }}
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-1 rounded-lg bg-slate-100 p-1 text-xs font-semibold">
            {(["all", "todo", "done"] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-md py-1 transition ${filter === f ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-700"}`}
              >
                {f === "all" ? "All" : f === "todo" ? "To do" : "Done"}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {themes.map((th) => {
            const themePassages = READING_PASSAGES.filter((p) => p.themeId === th.id);
            const doneInTheme = themePassages.filter((p) => bestAttemptByPassage.has(p.id)).length;
            const visible = themePassages.filter((p) => {
              const isDone = bestAttemptByPassage.has(p.id);
              return filter === "all" || (filter === "done" ? isDone : !isDone);
            });
            if (visible.length === 0) return null;
            const collapsed = !!collapsedThemes[th.id];
            return (
              <section key={th.id}>
                <button
                  type="button"
                  onClick={() => setCollapsedThemes((c) => ({ ...c, [th.id]: !c[th.id] }))}
                  className="mb-1.5 flex w-full items-center justify-between gap-2 px-1 text-left"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-500">{th.name}</span>
                  <span className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                    {doneInTheme}/{themePassages.length}
                    <span className={`transition ${collapsed ? "-rotate-90" : ""}`}>▾</span>
                  </span>
                </button>
                {!collapsed && (
                  <div className="flex flex-col gap-1.5">
                    {visible.map((p) => {
                      const active = p.id === passage.id;
                      const best = bestAttemptByPassage.get(p.id);
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => selectPassage(p.id)}
                          className={`w-full rounded-lg border p-2.5 text-left transition ${
                            active
                              ? "border-brand-400 bg-brand-50"
                              : best
                              ? "border-green-200 bg-green-50/50 hover:border-green-300"
                              : "border-slate-200 bg-white hover:border-brand-300 hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            <span
                              title={best ? `Best score: ${best.score}/${best.total}` : "Not attempted yet"}
                              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                                best ? "bg-green-500 text-white" : "border border-slate-300 text-transparent"
                              }`}
                            >
                              ✓
                            </span>
                            <div className="min-w-0">
                              <p className={`text-sm font-semibold leading-snug ${active ? "text-brand-800" : "text-slate-800"}`}>{p.title}</p>
                              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-400">
                                {p.textType}
                                {best && <span className="ml-1.5 normal-case text-green-700">· {best.score}/{best.total}</span>}
                              </p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </aside>

      {/* Passage + questions */}
      <div key={passage.id} className="animate-fade-slide-up min-w-0 flex-1">
        <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-lg font-bold text-slate-900">{passage.title}</h2>
            <div className="flex items-center gap-1.5">
              <span className="pill-badge">{passage.textType}</span>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${LEVEL_STYLES[passage.level]}`}>
                {passage.level}
              </span>
            </div>
          </div>

          <div className="mb-3 flex flex-wrap items-center gap-2 rounded-lg bg-slate-50 p-2.5">
            {playState === "idle" ? (
              <button
                type="button"
                onClick={playPassage}
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
                  onClick={stopPassage}
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

          <div className="flex flex-col gap-3">
            {passage.bodyEs.split("\n\n").map((para, i) => (
              <p key={i} className="whitespace-pre-line text-sm leading-relaxed text-slate-700">
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {passage.questions.map((q, i) => {
            const picked = answers[q.id];
            const correct = checked && isCorrect(q);
            const wrong = checked && !isCorrect(q);
            return (
              <div
                key={q.id}
                className={`rounded-2xl border bg-white p-4 shadow-xs transition ${
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
                      const justification = deriveJustification(q, passage.bodyEs);
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
              Check answers ({answeredCount} / {passage.questions.length} answered)
            </button>
          ) : (
            <>
              <p className="text-lg font-bold text-slate-900">
                {correctCount} / {passage.questions.length} correct
              </p>
              <button type="button" onClick={() => selectPassage(passage.id)} className="btn-outline">
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

        {passage.vocabulary && passage.vocabulary.length > 0 && (
          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">Vocabulario clave</h3>
            <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {passage.vocabulary.map((v) => (
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

/// File: src/components/AudioAssignmentModule.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useStore } from "@/lib/store";
import { speak, stopSpeaking } from "@/lib/speech";
import { AudioTask, Theme } from "@/lib/types";
import { ORAL_IMAGE_CREDITS } from "@/lib/oralImageCredits";
import { DISCUSSION_QUESTIONS } from "@/lib/oralQuestions";

type RecordingState = "idle" | "recording" | "recorded";

/** Individual Oral simulation: shows a task card (image placeholder +
 *  instructions), speaks the prompt aloud in Spanish using the browser's
 *  text-to-speech (Web Speech API `speechSynthesis`), records the student's
 *  response with `MediaRecorder`, and — since there's no teacher to review
 *  submissions — automatically transcribes the recording with the Web
 *  Speech API's `SpeechRecognition` and generates simple, encouraging
 *  feedback based on word count and theme-vocabulary usage. */
/** Turns "audio-sharing-planet-human-rights" (themeId "sharing-planet") into
 *  "Human Rights" — used to distinguish the 5 tasks within the same theme in
 *  the task picker, which previously all showed the same theme name. */
/** Groups a theme's tasks by subtopic, so the two photos for one subtopic
 *  (e.g. "lifestyles" and "lifestyles-2") sit on one row as Photo 1 / Photo 2. */
function groupBySubtopic(tasks: AudioTask[]): { label: string; tasks: AudioTask[] }[] {
  const groups = new Map<string, AudioTask[]>();
  for (const t of tasks) {
    const base = t.id.replace(/-2$/, "");
    groups.set(base, [...(groups.get(base) ?? []), t]);
  }
  return [...groups.entries()].map(([base, list]) => ({
    label: subtopicLabel({ ...list[0], id: base }),
    tasks: list,
  }));
}

function subtopicLabel(task: AudioTask): string {
  const prefix = `audio-${task.themeId}-`;
  const suffix = task.id.startsWith(prefix) ? task.id.slice(prefix.length) : task.id;
  return suffix
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function AudioAssignmentModule() {
  const { themes, audioTasks, submitAudio, lastAward, clearLastAward } = useStore();
  const [taskId, setTaskId] = useState<string | null>(audioTasks[0]?.id ?? null);
  const task = audioTasks.find((t) => t.id === taskId) ?? null;
  const theme = themes.find((t) => t.id === task?.themeId);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="mb-2 text-lg font-bold text-slate-900">Choose an oral practice task</h2>
        <div className="flex flex-col gap-3">
          {themes.map((th) => {
            const tasksForTheme = audioTasks.filter((t) => t.themeId === th.id);
            if (tasksForTheme.length === 0) return null;
            return (
              <div key={th.id}>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{th.name}</p>
                <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 xl:grid-cols-3">
                  {groupBySubtopic(tasksForTheme).map(({ label, tasks }) => (
                    <div key={label} className="flex flex-wrap items-center gap-2">
                      <span className="w-40 shrink-0 text-sm font-medium text-slate-700">{label}</span>
                      {tasks.map((t, i) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => {
                            setTaskId(t.id);
                            clearLastAward();
                          }}
                          className={`rounded-full border px-3 py-1 text-xs font-medium ${taskId === t.id
                            ? "border-brand-400 bg-brand-100 text-brand-800"
                            : "border-slate-200 text-slate-600 hover:bg-slate-50"
                            }`}
                        >
                          Photo {i + 1}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {task && (
        <TaskCard
          key={task.id} // reset recorder state when switching tasks
          task={task}
          theme={theme}
          onSubmitted={(audioUrl, transcript, feedback) => submitAudio(task.id, audioUrl, transcript, feedback)}
          lastAward={lastAward}
        />
      )}
    </div>
  );
}

/** Very lightweight automatic feedback: no teacher review needed. Counts
 *  roughly how many words the student spoke and how many of the theme's
 *  target vocabulary items showed up in the transcript. This is intentionally
 *  simple (keyword spotting, not real pronunciation/grammar grading) but
 *  gives the student something actionable immediately after recording. */
function buildAutoFeedback(transcript: string, theme: Theme | undefined): string {
  const words = transcript.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) {
    return "Recording saved! Automatic transcription wasn't available for this attempt, but your practice still counts.";
  }

  const lower = transcript.toLowerCase();
  const vocab = theme?.vocabulary ?? [];
  const used = vocab.filter((v) => lower.includes(v.es.replace(/^(el|la|los|las)\s+/, "")));
  const missed = vocab.filter((v) => !used.includes(v)).slice(0, 3);

  const parts = [`You spoke about ${words.length} words.`];
  if (used.length > 0) {
    parts.push(`Great use of target vocabulary: ${used.map((v) => v.es).join(", ")}.`);
  } else {
    parts.push("Try weaving in more theme vocabulary next time.");
  }
  if (missed.length > 0) {
    parts.push(`Words to try next time: ${missed.map((v) => v.es).join(", ")}.`);
  }
  return parts.join(" ");
}

/** Asks the server-side /api/feedback route (Claude API) for richer feedback
 *  than the local keyword heuristic. Returns null if no API key is
 *  configured, the request fails, or the model declines — callers should
 *  fall back to buildAutoFeedback() in that case. See
 *  src/app/api/feedback/route.ts for the server-side implementation. */
async function fetchAiFeedback(params: {
  transcript: string;
  themeName?: string;
  targetVocab?: string;
  instructions?: string;
}): Promise<string | null> {
  try {
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.available ? (data.feedback as string) : null;
  } catch {
    return null;
  }
}

function TaskCard({
  task,
  theme,
  onSubmitted,
  lastAward,
}: {
  task: AudioTask;
  theme: Theme | undefined;
  onSubmitted: (audioUrl: string, transcript?: string, feedback?: string) => void;
  lastAward: ReturnType<typeof useStore>["lastAward"];
}) {
  const [mediaSupported, setMediaSupported] = useState(true);
  const [speechToTextSupported, setSpeechToTextSupported] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [state, setState] = useState<RecordingState>("idle");
  const [seconds, setSeconds] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [transcript, setTranscript] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [feedbackSource, setFeedbackSource] = useState<"ai" | "local" | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Image loading & zoom states
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // 15-minute preparation countdown (IB Individual Oral prep time). Recording
  // stays available throughout, so students can start early.
  const PREP_SECONDS = 15 * 60;
  const [prepLeft, setPrepLeft] = useState<number | null>(null);
  useEffect(() => {
    if (prepLeft === null || prepLeft <= 0) return;
    const t = setTimeout(() => setPrepLeft(prepLeft - 1), 1000);
    return () => clearTimeout(t);
  }, [prepLeft]);

  // Discussion questions shown after the presentation: three at a time, rotated.
  const [discussionPage, setDiscussionPage] = useState(0);
  // AI follow-up questions generated from the student's own presentation (null = use the bank).
  const [aiQuestions, setAiQuestions] = useState<{ es: string; en: string }[] | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiFailed, setAiFailed] = useState(false);
  // SpeechRecognition has no standard TS lib types yet, so this stays loosely typed.
  const recognitionRef = useRef<any>(null);
  const transcriptRef = useRef("");

  // Ref to the stimulus <img>. If the browser already has the photo cached,
  // onLoad may never fire (it can run before React attaches the handler), so
  // on every task change we also check img.complete directly.
  const stimulusImgRef = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
    setIsZoomed(false);
    setAiQuestions(null);
    setAiFailed(false);
    const img = stimulusImgRef.current;
    if (img && img.complete && img.naturalWidth > 0) setImageLoaded(true);
  }, [task.id]);

  useEffect(() => {
    setMediaSupported(typeof window !== "undefined" && !!navigator.mediaDevices && typeof MediaRecorder !== "undefined");
    const SpeechRecognitionCtor =
      typeof window !== "undefined" ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition : null;
    setSpeechToTextSupported(!!SpeechRecognitionCtor);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      window.speechSynthesis?.cancel();
      recognitionRef.current?.stop();
    };
  }, []);

  const togglePlayPrompt = () => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
      return;
    }
    setIsSpeaking(true);
    speak(`${task.imageDescriptionEs} ${task.instructionsEs}`, () => setIsSpeaking(false));
  };

  const startRecording = async () => {
    setError(null);
    stopSpeaking();
    setIsSpeaking(false);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        setAudioUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((t) => t.stop());
      };
      recorder.start();
      mediaRecorderRef.current = recorder;

      // Start live transcription alongside recording, so we have a transcript
      // the moment the student stops — no upload/processing step needed.
      transcriptRef.current = "";
      setTranscript("");
      const SpeechRecognitionCtor =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognitionCtor) {
        const recognition = new SpeechRecognitionCtor();
        recognition.lang = "es-ES";
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.onresult = (event: any) => {
          let finalText = "";
          for (let i = 0; i < event.results.length; i++) {
            if (event.results[i].isFinal) finalText += event.results[i][0].transcript + " ";
          }
          transcriptRef.current = finalText;
          setTranscript(finalText);
        };
        recognition.onerror = () => {
          /* Ignore recognition errors (e.g. no speech) — recording still works without it. */
        };
        recognition.start();
        recognitionRef.current = recognition;
      }

      setState("recording");
      setSeconds(0);
      timerRef.current = setInterval(() => {
        setSeconds((s) => {
          if (s + 1 >= task.maxDurationSeconds) {
            stopRecording();
          }
          return s + 1;
        });
      }, 1000);
    } catch {
      setError("Microphone access was denied or is unavailable. Check your browser permissions.");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    recognitionRef.current?.stop();
    if (timerRef.current) clearInterval(timerRef.current);
    setState("recorded");
  };

  const handleSubmit = async () => {
    const finalTranscript = transcriptRef.current.trim();
    setAnalyzing(true);

    const aiFeedback = await fetchAiFeedback({
      transcript: finalTranscript,
      themeName: theme?.name,
      targetVocab: theme?.vocabulary.slice(0, 12).map((v) => v.es).join(", "),
      instructions: task.instructions,
    });
    const finalFeedback = aiFeedback ?? buildAutoFeedback(finalTranscript, theme);

    setFeedback(finalFeedback);
    setFeedbackSource(aiFeedback ? "ai" : "local");
    onSubmitted(audioUrl ?? "placeholder://no-audio-captured", finalTranscript || undefined, finalFeedback);
    setSubmitted(true);
    setAnalyzing(false);
  };

  const reset = () => {
    setState("idle");
    setSeconds(0);
    setAudioUrl(null);
    setTranscript("");
    setSubmitted(false);
    setAnalyzing(false);
    setFeedback(null);
    setFeedbackSource(null);
    setError(null);
  };

  const showRealImage = task.imageUrl && !imageError;
  // Photo credit (author, licence, source page) keyed by the image file name.
  const imageKey = task.imageUrl?.split("/").pop()?.replace(/\.[a-z]+$/i, "") ?? "";
  const imageCredit = ORAL_IMAGE_CREDITS[imageKey];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
      {/* IB Oral Photo Stimulus Container */}
      <div className="mb-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-inner">
        <div className="relative flex min-h-[240px] items-center justify-center sm:min-h-[320px]">
          <span
            className="absolute left-3 top-3 z-10 rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-purple-300 backdrop-blur-md border border-purple-500/30 shadow-md"
          >
            IB Oral Stimulus
          </span>

          {showRealImage && (
            <button
              type="button"
              onClick={() => setIsZoomed(true)}
              className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-md border border-white/20 hover:bg-slate-800 transition-colors shadow-md"
              title="Click to view high-res photo"
            >
              🔍 Enlarge image
            </button>
          )}

          {showRealImage ? (
            <div className="relative w-full h-full min-h-[240px] sm:min-h-[320px] flex items-center justify-center bg-slate-950">
              {!imageLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-900 text-slate-400">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-purple-500 border-t-transparent" />
                  <span className="text-xs">Loading photo stimulus...</span>
                </div>
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={stimulusImgRef}
                src={task.imageUrl}
                alt={task.imageDescription}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                onClick={() => setIsZoomed(true)}
                className={`max-h-[360px] w-full object-cover transition-opacity duration-300 cursor-pointer ${imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
              />
            </div>
          ) : (
            <div className="relative flex flex-col items-center justify-center w-full min-h-[280px] p-6 text-center bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 rounded-lg overflow-hidden border border-purple-500/20 shadow-2xl">
              {/* Decorative background circles */}
              <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-purple-500/10 blur-2xl pointer-events-none" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />

              <div className="z-10 flex items-center gap-4 mb-4">
                {task.sceneEmoji.map((emoji, i) => (
                  <div key={i} className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-3xl sm:text-4xl shadow-lg transition-transform hover:scale-105">
                    {emoji}
                  </div>
                ))}
              </div>

              <div className="z-10 max-w-lg mt-2 px-4 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-purple-500/30">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300 block mb-1">
                  Generated Visual Stimulus Card
                </span>
                <p className="text-sm font-medium text-slate-100 leading-relaxed">
                  {task.imageDescription}
                </p>
              </div>

              {imageError && (
                <button
                  type="button"
                  onClick={() => {
                    setImageError(false);
                    setImageLoaded(false);
                  }}
                  className="z-10 mt-3 text-xs text-purple-300 hover:text-purple-100 underline decoration-purple-400/50"
                >
                  🔄 Retry loading original photo
                </button>
              )}
            </div>
          )}
        </div>
        <div className="bg-slate-950/90 border-t border-slate-800 p-3.5 text-slate-200">
          <p className="text-xs font-semibold uppercase tracking-wide text-purple-400 mb-0.5">Stimulus Description</p>
          <p className="text-sm text-slate-200 leading-relaxed">{task.imageDescription}</p>
          {showRealImage && !imageCredit && (
            <p className="mt-2 text-[11px] text-slate-400">AI-generated illustration.</p>
          )}
          {imageCredit && (
            <p className="mt-2 text-[11px] text-slate-400">
              Photo:{" "}
              <a href={imageCredit.page} target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-200">
                {imageCredit.author}
              </a>
              , {imageCredit.license}
            </p>
          )}
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {isZoomed && showRealImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xs"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl border border-white/20 bg-slate-950 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsZoomed(false)}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-lg font-bold text-white hover:bg-red-600 transition-colors"
            >
              ✕
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={task.imageUrl}
              alt={task.imageDescription}
              className="max-h-[80vh] w-full object-contain rounded-xl"
            />
            <p className="mt-2 text-center text-xs text-slate-300 px-4 py-1">
              {task.imageDescription}
            </p>
          </div>
        </div>
      )}
      <p className="mb-1 text-sm font-semibold text-slate-900">Instructions</p>
      <p className="mb-3 text-sm text-slate-700">{task.instructions}</p>
      <button
        type="button"
        onClick={togglePlayPrompt}
        className={`mb-4 w-fit rounded-full border px-3 py-1.5 text-sm font-medium ${isSpeaking
          ? "border-red-300 bg-red-50 text-red-700 hover:bg-red-100"
          : "border-brand-300 bg-brand-50 text-brand-700 hover:bg-brand-100"
          }`}
      >
        {isSpeaking ? "⏹ Stop" : "🔊 Play prompt in Spanish"}
      </button>
      <div className="mb-4 flex flex-wrap items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
        {prepLeft === null && (
          <button type="button" onClick={() => setPrepLeft(PREP_SECONDS)} className="btn-outline w-fit px-3 py-1.5 text-sm">
            ⏱ Start 15-minute prep
          </button>
        )}
        {prepLeft !== null && prepLeft > 0 && (
          <p className="text-sm text-slate-700">
            Prep time left:{" "}
            <strong className="font-mono">
              {String(Math.floor(prepLeft / 60)).padStart(2, "0")}:{String(prepLeft % 60).padStart(2, "0")}
            </strong>{" "}
            <span className="text-slate-500">Make notes: a brief structure, a few key words and one example.</span>
          </p>
        )}
        {prepLeft === 0 && <p className="text-sm font-medium text-green-700">Prep time is over. Start recording when ready.</p>}
        <p className="text-xs text-slate-500">
          Presentation: up to {Math.round(task.maxDurationSeconds / 60)} minutes. Prepare briefly, then record.
        </p>
      </div>

      {!mediaSupported && (
        <p className="rounded-md bg-amber-50 p-3 text-sm text-amber-800">
          Your browser doesn&apos;t support in-page audio recording (MediaRecorder API). Use a recent version of
          Chrome, Edge, or Firefox, and make sure the page is served over HTTPS or localhost.
        </p>
      )}

      {mediaSupported && (
        <div className="flex flex-col gap-3">
          {error && <p className="text-sm text-red-600">{error}</p>}

          {state === "idle" && (
            <button type="button" onClick={startRecording} className="w-fit rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">
              ● Start recording
            </button>
          )}

          {state === "recording" && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 animate-pulse rounded-full bg-red-600" />
                <span className="text-sm text-slate-700">
                  Recording... {seconds}s / {task.maxDurationSeconds}s
                </span>
                <button type="button" onClick={stopRecording} className="btn-primary px-3 py-1.5">
                  ■ Stop
                </button>
              </div>
              {speechToTextSupported && transcript && (
                <p className="rounded-md bg-slate-50 p-2 text-xs italic text-slate-500">Live transcript: {transcript}</p>
              )}
            </div>
          )}

          {state === "recorded" && audioUrl && (
            <div className="flex flex-col gap-3">
              <audio controls src={audioUrl} className="w-full" />
              {!submitted ? (
                <div className="flex gap-2">
                  <button type="button" onClick={handleSubmit} disabled={analyzing} className="btn-primary w-fit disabled:cursor-wait">
                    {analyzing ? "Analyzing your recording..." : "Submit assignment"}
                  </button>
                  <button type="button" onClick={reset} disabled={analyzing} className="btn-outline w-fit">
                    Record again
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-green-700">
                    Submitted! Here&apos;s your {feedbackSource === "ai" ? "AI-generated" : "automatic"} feedback:
                  </p>
                  {feedback && (
                    <p className="rounded-lg bg-slate-100 p-3 text-sm text-slate-700">{feedback}</p>
                  )}
                  {lastAward && (
                    <div className="rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
                      <p className="font-semibold">+{lastAward.pointsAwarded} points</p>
                      {lastAward.newBadges.length > 0 && (
                        <p className="mt-1">
                          New badge{lastAward.newBadges.length > 1 ? "s" : ""}:{" "}
                          {lastAward.newBadges.map((b) => b.name).join(", ")}
                        </p>
                      )}
                      <p className="mt-1 italic">{lastAward.message}</p>
                    </div>
                  )}
                  <button type="button" onClick={reset} className="btn-outline w-fit">
                    Practice again
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      {(() => {
        const bank = DISCUSSION_QUESTIONS[task.themeId] ?? [];
        const pages = Math.max(1, Math.ceil(bank.length / 3));
        const page = discussionPage % pages;
        const bankShown = bank.slice(page * 3, page * 3 + 3);
        const shown = aiQuestions ?? bankShown;
        const generateWithAi = async () => {
          setAiLoading(true);
          setAiFailed(false);
          try {
            const res = await fetch("/api/oral-questions", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                theme: theme?.name ?? task.themeId,
                imageDescription: task.imageDescription,
                transcript,
              }),
            });
            const data = await res.json();
            if (data.available && Array.isArray(data.questions) && data.questions.length === 3) {
              setAiQuestions(data.questions);
            } else {
              setAiFailed(true);
            }
          } catch {
            setAiFailed(true);
          } finally {
            setAiLoading(false);
          }
        };
        if (bank.length === 0 && !aiQuestions) return null;
        return (
          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold text-slate-800">
                💬 {aiQuestions ? "AI follow-up questions" : "Discussion questions"}
              </p>
              <div className="flex items-center gap-3">
                {!aiQuestions && bank.length > 3 && (
                  <button type="button" onClick={() => setDiscussionPage((d) => d + 1)} className="text-xs font-semibold text-brand-700 hover:underline">
                    More questions →
                  </button>
                )}
                <button
                  type="button"
                  onClick={generateWithAi}
                  disabled={aiLoading}
                  className="rounded-full border border-brand-300 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800 hover:bg-brand-100 disabled:cursor-wait disabled:opacity-60"
                >
                  {aiLoading ? "Generating…" : aiQuestions ? "✨ Regenerate" : "✨ Generate from my presentation"}
                </button>
              </div>
            </div>
            <p className="mb-3 text-xs text-slate-500">
              {aiQuestions
                ? "Written for your presentation. Answer each one in Spanish with an opinion and an example."
                : "After your presentation the examiner asks follow-up questions. Answer each one in Spanish with an opinion and an example."}
            </p>
            {aiFailed && (
              <p className="mb-2 text-xs text-amber-700">AI questions aren&apos;t available right now, so the practice bank is shown instead.</p>
            )}
            <ol className="flex flex-col gap-2">
              {shown.map((q, i) => (
                <li key={q.es} className="rounded-lg bg-slate-50 p-3">
                  <p className="text-sm text-slate-800">
                    {aiQuestions ? i + 1 : page * 3 + i + 1}. {q.es}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">{q.en}</p>
                </li>
              ))}
            </ol>
          </div>
        );
      })()}
    </div>
  );
}

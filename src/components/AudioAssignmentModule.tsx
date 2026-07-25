/// File: src/components/AudioAssignmentModule.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useStore } from "@/lib/store";
import { speak, stopSpeaking } from "@/lib/speech";
import { AudioTask, Theme } from "@/lib/types";

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
                <div className="flex flex-wrap gap-2">
                  {tasksForTheme.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => {
                        setTaskId(t.id);
                        clearLastAward();
                      }}
                      className={`rounded-full border px-3 py-1.5 text-sm font-medium ${taskId === t.id
                        ? "border-brand-400 bg-brand-100 text-brand-800"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                    >
                      {subtopicLabel(t)}
                    </button>
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
  // SpeechRecognition has no standard TS lib types yet, so this stays loosely typed.
  const recognitionRef = useRef<any>(null);
  const transcriptRef = useRef("");

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
    setIsZoomed(false);
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

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
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
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {isZoomed && showRealImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
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
      <p className="mb-4 text-xs text-slate-500">
        You have up to {Math.round(task.maxDurationSeconds / 60)} minutes to speak. Prepare briefly, then record.
      </p>

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
    </div>
  );
}

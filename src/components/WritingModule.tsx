/// File: src/components/WritingModule.tsx
"use client";

import { useMemo, useState } from "react";
import { WRITING_PROMPTS } from "@/lib/writing";
import { useStore } from "@/lib/store";
import { WritingPrompt } from "@/lib/types";

const LEVEL_STYLES: Record<string, string> = {
  easy: "bg-green-100 text-green-700",
  medium: "bg-amber-100 text-amber-700",
  hard: "bg-rose-100 text-rose-700",
};

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/** Lightweight fallback feedback when no API key is configured (or the AI
 *  request fails): checks length against the target range and points the
 *  student back at the format-tips checklist. Not real grammar/content
 *  grading — just enough to keep the app useful without a key. */
function buildLocalFeedback(wordCount: number, prompt: WritingPrompt): string {
  const parts: string[] = [];
  if (wordCount < prompt.minWords) {
    parts.push(`Your response is ${wordCount} words — try to reach at least ${prompt.minWords} words for a ${prompt.textType.toLowerCase()}.`);
  } else if (wordCount > prompt.maxWords) {
    parts.push(`Your response is ${wordCount} words, a bit over the ${prompt.maxWords}-word target — see if you can be more concise.`);
  } else {
    parts.push(`Good length — ${wordCount} words, right in the ${prompt.minWords}-${prompt.maxWords} word target range.`);
  }
  parts.push(
    "Automatic grammar/content feedback wasn't available for this attempt, but your practice still counts — check your work against the format tips above."
  );
  return parts.join(" ");
}

/** Asks the server-side /api/writing-feedback route (Claude API) for richer
 *  examiner-style feedback than the local length check. Returns null if no
 *  API key is configured, the request fails, or the model declines —
 *  callers fall back to buildLocalFeedback() in that case. */
async function fetchAiFeedback(params: {
  text: string;
  textType: string;
  instructions: string;
  minWords: number;
  maxWords: number;
}): Promise<string | null> {
  try {
    const res = await fetch("/api/writing-feedback", {
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

/** Paper 2 style writing: pick a prompt (sidebar, same pattern as
 *  GrammarModule/ReadingModule), read the task + format-convention tips,
 *  write a response in Spanish with a live word counter, then submit for
 *  examiner-style feedback — via the Claude API when a key is configured
 *  (see /api/writing-feedback), falling back to a local length check
 *  otherwise. Awards points via the shared gamification system on submit;
 *  the written text itself isn't persisted, only the submission count. */
export default function WritingModule() {
  const { submitWriting, lastAward, clearLastAward } = useStore();

  const [promptId, setPromptId] = useState(WRITING_PROMPTS[0].id);
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [feedbackSource, setFeedbackSource] = useState<"ai" | "local" | null>(null);

  const prompt = useMemo(() => WRITING_PROMPTS.find((p) => p.id === promptId) ?? WRITING_PROMPTS[0], [promptId]);
  const wordCount = countWords(text);
  const inRange = wordCount >= prompt.minWords && wordCount <= prompt.maxWords;

  const selectPrompt = (id: string) => {
    setPromptId(id);
    setText("");
    setSubmitted(false);
    setFeedback(null);
    setFeedbackSource(null);
    clearLastAward();
  };

  const handleSubmit = async () => {
    setAnalyzing(true);
    const aiFeedback = await fetchAiFeedback({
      text,
      textType: prompt.textType,
      instructions: prompt.instructions,
      minWords: prompt.minWords,
      maxWords: prompt.maxWords,
    });
    const finalFeedback = aiFeedback ?? buildLocalFeedback(wordCount, prompt);
    setFeedback(finalFeedback);
    setFeedbackSource(aiFeedback ? "ai" : "local");
    submitWriting(prompt.id);
    setSubmitted(true);
    setAnalyzing(false);
  };

  const reset = () => {
    setText("");
    setSubmitted(false);
    setFeedback(null);
    setFeedbackSource(null);
  };

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      {/* Sidebar: one prompt per theme, same pattern as GrammarModule/ReadingModule. */}
      <nav className="flex gap-2 overflow-x-auto pb-1 lg:w-72 lg:shrink-0 lg:flex-col lg:overflow-visible lg:pb-0">
        {WRITING_PROMPTS.map((p) => {
          const active = p.id === prompt.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => selectPrompt(p.id)}
              className={`shrink-0 rounded-lg border p-3 text-left transition lg:shrink ${
                active ? "border-brand-400 bg-brand-50" : "border-slate-200 bg-white hover:border-brand-300 hover:bg-slate-50"
              }`}
            >
              <p className={`whitespace-nowrap text-sm font-semibold lg:whitespace-normal ${active ? "text-brand-800" : "text-slate-800"}`}>
                {p.textType}
              </p>
            </button>
          );
        })}
      </nav>

      <div key={prompt.id} className="animate-fade-slide-up min-w-0 flex-1">
        <div className="mb-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-lg font-bold text-slate-900">{prompt.textType}</h2>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${LEVEL_STYLES[prompt.level]}`}>
              {prompt.level}
            </span>
          </div>
          <p className="text-sm text-slate-700">{prompt.instructions}</p>
          <p className="mt-1 text-sm italic text-slate-500">{prompt.instructionsEs}</p>

          <p className="mb-1 mt-4 text-sm font-semibold text-slate-800">Format tips</p>
          <ul className="flex flex-col gap-1">
            {prompt.formatTips.map((tip) => (
              <li key={tip} className="flex items-start gap-1.5 text-sm text-slate-600">
                <span className="text-brand-500">✓</span> {tip}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-slate-400">
            Target length: {prompt.minWords}–{prompt.maxWords} words
          </p>
        </div>

        {!submitted ? (
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={12}
              placeholder="Escribe tu respuesta aquí en español..."
              className="w-full rounded-md border border-slate-200 p-3 text-sm outline-none focus:ring-2 focus:ring-brand-500"
            />
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
              <span className={`text-xs font-semibold ${inRange ? "text-green-600" : "text-amber-600"}`}>
                {wordCount} / {prompt.minWords}–{prompt.maxWords} words
              </span>
              <button type="button" onClick={handleSubmit} disabled={wordCount === 0 || analyzing} className="btn-primary disabled:cursor-wait">
                {analyzing ? "Analyzing your writing..." : "Submit for feedback"}
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-green-700">
              Submitted! Here&apos;s your {feedbackSource === "ai" ? "AI-generated" : "automatic"} feedback:
            </p>
            {feedback && <p className="mt-2 rounded-lg bg-slate-100 p-3 text-sm text-slate-700">{feedback}</p>}
            {lastAward && (
              <div className="mt-3 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
                <p className="font-semibold">+{lastAward.pointsAwarded} points</p>
                {lastAward.newBadges.length > 0 && (
                  <p className="mt-1">
                    New badge{lastAward.newBadges.length > 1 ? "s" : ""}: {lastAward.newBadges.map((b) => b.name).join(", ")}
                  </p>
                )}
                <p className="mt-1 italic">{lastAward.message}</p>
              </div>
            )}
            <button type="button" onClick={reset} className="btn-outline mt-3">
              Write another
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

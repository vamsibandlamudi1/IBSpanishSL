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

/** Structured feedback shape shared by the AI route (/api/writing-feedback)
 *  and the local fallback below, so the UI always renders the same way
 *  regardless of source — organized around the two real IB Paper 2
 *  assessment criteria (Language, Message) plus concrete, actionable
 *  strengths/improvements instead of one dense paragraph. */
interface WritingFeedback {
  summary: string;
  strengths: string[];
  improvements: string[];
  languageComment: string;
  messageComment: string;
  /** A full rewrite of the student's own submission, polished to full-marks
   *  quality — only present for AI feedback (the local fallback can't write
   *  Spanish prose), so callers should check for it before rendering. */
  improvedVersion?: string;
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/** Lightweight fallback feedback when no API key is configured (or the AI
 *  request fails): checks length against the target range and points the
 *  student back at the format-tips checklist. Not real grammar/content
 *  grading — just enough to keep the app useful without a key. */
function buildLocalFeedback(wordCount: number, prompt: WritingPrompt): WritingFeedback {
  const lengthNote =
    wordCount < prompt.minWords
      ? `Your response is ${wordCount} words — try to reach at least ${prompt.minWords} words for a ${prompt.textType.toLowerCase()}.`
      : wordCount > prompt.maxWords
      ? `Your response is ${wordCount} words, a bit over the ${prompt.maxWords}-word target — see if you can be more concise.`
      : `Good length — ${wordCount} words, right in the ${prompt.minWords}-${prompt.maxWords} word target range.`;
  return {
    summary: "Automatic grammar/content feedback wasn't available for this attempt, but your practice still counts.",
    strengths: [],
    improvements: [lengthNote, "Check your work against the format tips above."],
    languageComment: "",
    messageComment: "",
  };
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
}): Promise<WritingFeedback | null> {
  try {
    const res = await fetch("/api/writing-feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.available ? (data.feedback as WritingFeedback) : null;
  } catch {
    return null;
  }
}

/** Paper 2 style writing: pick a prompt (sidebar, same pattern as
 *  GrammarModule/ReadingModule), read the task + format-convention tips,
 *  write a response in Spanish with a live word counter, then submit for
 *  examiner-style feedback — via the Claude API when a key is configured
 *  (see /api/writing-feedback), falling back to a local length check
 *  otherwise. Shows the submitted text alongside the feedback so students
 *  can cross-reference exactly what the comments refer to. Awards points
 *  via the shared gamification system on submit; the written text itself
 *  isn't persisted, only the submission count. */
export default function WritingModule() {
  const { submitWriting, lastAward, clearLastAward } = useStore();

  const [promptId, setPromptId] = useState(WRITING_PROMPTS[0].id);
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState<WritingFeedback | null>(null);
  const [feedbackSource, setFeedbackSource] = useState<"ai" | "local" | null>(null);
  const [showModel, setShowModel] = useState(false);

  const prompt = useMemo(() => WRITING_PROMPTS.find((p) => p.id === promptId) ?? WRITING_PROMPTS[0], [promptId]);
  const wordCount = countWords(text);
  const inRange = wordCount >= prompt.minWords && wordCount <= prompt.maxWords;

  const selectPrompt = (id: string) => {
    setPromptId(id);
    setText("");
    setSubmitted(false);
    setFeedback(null);
    setFeedbackSource(null);
    setShowModel(false);
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
    setSubmittedText(text);
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
    setShowModel(false);
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
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="mb-2 text-sm font-semibold text-slate-800">Your response ({countWords(submittedText)} words)</p>
              <p className="whitespace-pre-wrap rounded-lg bg-slate-50 p-3 text-sm leading-relaxed text-slate-700">{submittedText}</p>
            </div>

            {feedback && (
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="mb-3 text-sm font-medium text-green-700">
                  Submitted! Here&apos;s your {feedbackSource === "ai" ? "AI-generated" : "automatic"} feedback:
                </p>

                <p className="mb-4 text-sm text-slate-700">{feedback.summary}</p>

                {feedback.strengths.length > 0 && (
                  <div className="mb-4">
                    <p className="mb-1.5 text-sm font-semibold text-green-700">✓ Strengths</p>
                    <ul className="flex flex-col gap-1.5">
                      {feedback.strengths.map((s, i) => (
                        <li key={i} className="rounded-lg bg-green-50 p-2.5 text-sm text-slate-700">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {feedback.improvements.length > 0 && (
                  <div className="mb-4">
                    <p className="mb-1.5 text-sm font-semibold text-amber-700">→ Ways to improve</p>
                    <ul className="flex flex-col gap-1.5">
                      {feedback.improvements.map((s, i) => (
                        <li key={i} className="rounded-lg bg-amber-50 p-2.5 text-sm text-slate-700">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {(feedback.languageComment || feedback.messageComment) && (
                  <div className="mb-1 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {feedback.languageComment && (
                      <div className="rounded-lg border border-slate-200 p-3">
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Language (Criterion A)</p>
                        <p className="text-sm text-slate-700">{feedback.languageComment}</p>
                      </div>
                    )}
                    {feedback.messageComment && (
                      <div className="rounded-lg border border-slate-200 p-3">
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Message (Criterion B)</p>
                        <p className="text-sm text-slate-700">{feedback.messageComment}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {feedback?.improvedVersion && (
              <div className="rounded-xl border border-mint-200 bg-mint-50 p-5 shadow-sm">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-mint-800">📝 Model answer (full-marks version)</p>
                  <button type="button" onClick={() => setShowModel((v) => !v)} className="text-xs font-semibold text-mint-700 hover:underline">
                    {showModel ? "Hide" : "Show"}
                  </button>
                </div>
                <p className="mb-2 text-xs text-mint-700">
                  Built from your own ideas and content, rewritten to hit the target and fix issues — compare it to
                  yours to see exactly what changed. Don&apos;t just copy it for a real exam; understand why each
                  change works.
                </p>
                {showModel && (
                  <p className="whitespace-pre-wrap rounded-lg bg-white p-3 text-sm leading-relaxed text-slate-700">
                    {feedback.improvedVersion}
                  </p>
                )}
              </div>
            )}

            {lastAward && (
              <div className="rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
                <p className="font-semibold">+{lastAward.pointsAwarded} points</p>
                {lastAward.newBadges.length > 0 && (
                  <p className="mt-1">
                    New badge{lastAward.newBadges.length > 1 ? "s" : ""}: {lastAward.newBadges.map((b) => b.name).join(", ")}
                  </p>
                )}
                <p className="mt-1 italic">{lastAward.message}</p>
              </div>
            )}

            <button type="button" onClick={reset} className="btn-outline w-fit">
              Write another
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/// File: src/app/api/exam-feedback/route.ts
//
// Server-side only, same pattern as src/app/api/writing-feedback/route.ts and
// src/app/api/feedback/route.ts: reads ANTHROPIC_API_KEY server-side only,
// turns a completed Practice Exam's section scores + specific missed
// questions into a holistic report — an estimated IB 1-7 grade, per-section
// feedback, and concrete next-study-steps tied to what was actually missed.
// Always responds 200 with `available: false` on any failure — the caller
// (PracticeExamModule.tsx) falls back to a local percentage-based estimate
// in that case, so the app keeps working without an API key.

import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const MODEL = process.env.ANTHROPIC_MODEL || "claude-opus-5";
const client = process.env.ANTHROPIC_API_KEY ? new Anthropic() : null;

const SYSTEM_PROMPT = `You are a supportive IB Spanish B examiner reviewing a student's completed full-length practice exam. You receive the student's score (correct/total) in each auto-graded section — Reading comprehension, Reading strategies (heading-matching & word-bank gap-fill), Listening, Grammar, and Vocabulary — plus a list of the specific questions they got wrong, each with the prompt, the student's answer, and the correct answer. Writing and Speaking are assessed separately elsewhere and are NOT part of what you're scoring here.

Respond with ONLY a JSON object (no markdown code fences, no text outside the JSON) matching exactly this shape:
{
  "estimatedGrade": integer from 1 to 7, an estimate on the official IB grade scale based ONLY on these auto-graded sections,
  "gradeRationale": "1-2 sentences explaining the estimate — mention it's based only on the auto-graded sections (Writing/Speaking are scored separately) and reflects a rough, not official, estimate",
  "summary": "2-3 sentence warm, encouraging overall assessment of this attempt",
  "sectionFeedback": [
    { "section": "Reading", "comment": "1-2 sentences on how this section went", "tip": "one concrete, specific tip for this section" },
    ... one entry per section that had at least one question (skip sections with total: 0)
  ],
  "priorityFocus": ["2-4 concrete, specific next-study-steps — reference the ACTUAL missed questions/patterns you were given, e.g. 'Review the preterite vs. imperfect distinction — you mixed these up in 2 grammar questions' rather than generic advice like 'practice more grammar'"]
}

Be warm and encouraging, like a supportive teacher — not a strict grader. Ground every piece of feedback in the actual data given; never invent details. If a section was answered perfectly, say so briefly and positively instead of inventing a criticism. If very few questions were missed overall, keep priorityFocus short and specific rather than padding it.`;

interface ExamFeedback {
  estimatedGrade: number;
  gradeRationale: string;
  summary: string;
  sectionFeedback: { section: string; comment: string; tip: string }[];
  priorityFocus: string[];
}

interface ScorePayload {
  section: string;
  correct: number;
  total: number;
}

interface MissedPayload {
  section: string;
  prompt: string;
  studentAnswer: string;
  correctAnswer: string;
}

/** Best-effort parse of the model's JSON response, tolerant of stray
 *  markdown fences or missing fields — mirrors parseFeedback() in
 *  writing-feedback/route.ts. */
function parseFeedback(raw: string): ExamFeedback | null {
  const cleaned = raw
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```\s*$/, "")
    .trim();
  try {
    const parsed = JSON.parse(cleaned);
    const grade = Number(parsed.estimatedGrade);
    if (!Number.isFinite(grade)) return null;
    return {
      estimatedGrade: Math.min(7, Math.max(1, Math.round(grade))),
      gradeRationale: typeof parsed.gradeRationale === "string" ? parsed.gradeRationale : "",
      summary: typeof parsed.summary === "string" ? parsed.summary : raw,
      sectionFeedback: Array.isArray(parsed.sectionFeedback)
        ? parsed.sectionFeedback
            .filter((s: unknown): s is Record<string, unknown> => typeof s === "object" && s !== null)
            .map((s: Record<string, unknown>) => ({
              section: typeof s.section === "string" ? s.section : "",
              comment: typeof s.comment === "string" ? s.comment : "",
              tip: typeof s.tip === "string" ? s.tip : "",
            }))
        : [],
      priorityFocus: Array.isArray(parsed.priorityFocus) ? parsed.priorityFocus.filter((s: unknown) => typeof s === "string") : [],
    };
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  let body: { scores?: ScorePayload[]; missed?: MissedPayload[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ available: false, reason: "bad-request" }, { status: 200 });
  }

  const scores = Array.isArray(body.scores) ? body.scores : [];
  if (scores.length === 0 || scores.every((s) => s.total === 0)) {
    return NextResponse.json({ available: false, reason: "no-scores" }, { status: 200 });
  }
  if (!client) {
    return NextResponse.json({ available: false, reason: "no-api-key" }, { status: 200 });
  }

  // Cap the missed-question list sent to the model — the exam has at most
  // ~41 auto-graded questions total, so this is a safety bound, not a
  // real-world constraint.
  const missed = (Array.isArray(body.missed) ? body.missed : []).slice(0, 30);

  try {
    const message = await client.messages.create({
      model: MODEL,
      max_tokens: 1400,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: [
            "Section scores:",
            ...scores.map((s) => `- ${s.section}: ${s.correct}/${s.total}`),
            "",
            missed.length > 0 ? "Missed questions:" : "No missed questions — a perfect run on the auto-graded sections.",
            ...missed.map(
              (m) => `- [${m.section}] "${m.prompt}" — student answered "${m.studentAnswer}", correct answer was "${m.correctAnswer}"`
            ),
          ].join("\n"),
        },
      ],
    });

    if (message.stop_reason === "refusal") {
      return NextResponse.json({ available: false, reason: "refused" }, { status: 200 });
    }

    const textBlock = message.content.find((block) => block.type === "text");
    const raw = textBlock && textBlock.type === "text" ? textBlock.text.trim() : "";
    if (!raw) {
      return NextResponse.json({ available: false, reason: "empty-response" }, { status: 200 });
    }

    const feedback = parseFeedback(raw);
    if (!feedback) {
      return NextResponse.json({ available: false, reason: "parse-error" }, { status: 200 });
    }

    return NextResponse.json({ available: true, feedback });
  } catch (error) {
    console.error("AI exam feedback request failed:", error);
    return NextResponse.json({ available: false, reason: "error" }, { status: 200 });
  }
}

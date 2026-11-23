/// File: src/app/api/writing-feedback/route.ts
//
// Server-side only, same pattern as src/app/api/feedback/route.ts (oral
// feedback): reads ANTHROPIC_API_KEY server-side only, turns a student's
// Paper 1 writing submission into structured, examiner-style feedback using
// the Claude API — organized around the two real IB Paper 1 assessment
// criteria (Language, Message) plus concrete strengths/improvements, so the
// UI can render it as clear sections instead of one dense paragraph. Always
// responds 200 with `available: false` on any failure — the caller
// (WritingModule.tsx) falls back to a local heuristic in that case, so the
// app keeps working without an API key.

import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const MODEL = process.env.ANTHROPIC_MODEL || "claude-haiku-5-5";
const client = process.env.ANTHROPIC_API_KEY ? new Anthropic() : null;

const SYSTEM_PROMPT = `You are a supportive IB Spanish B examiner giving feedback on a student's Paper 1 writing submission. You receive the required text type (e.g. formal letter, blog post), the task instructions, the target word range, and the student's Spanish text.

Write every feedback field in English (quote the student's Spanish only where useful). Respond with ONLY a JSON object (no markdown code fences, no text outside the JSON) matching exactly this shape:
{
  "summary": "1-2 sentence warm, encouraging overall assessment",
  "strengths": ["2-3 specific things the student did well — quote or paraphrase their actual words where useful, e.g. \\"Your greeting 'Hola Carlos' correctly matches the informal register.\\""],
  "improvements": ["2-4 specific, actionable suggestions — say exactly what to add, fix, or expand, and where in the text, e.g. \\"After the second paragraph, add a sentence explaining how the change affected your relationships.\\""],
  "languageComment": "1-2 sentences on vocabulary range, grammar accuracy, and register — this maps to IB Criterion A: Language",
  "messageComment": "1-2 sentences on task achievement, organization, and content — this maps to IB Criterion B: Message",
  "conceptualComment": "1-2 sentences on whether the text follows the conventions of the text type (greeting/sign-off, register, format, audience, purpose) — this maps to IB Criterion C: Conceptual understanding",
  "marks": { "language": 0, "message": 0, "conceptual": 0 },
  "improvedVersion": "A full rewrite of the student's submission in Spanish, within the target word range, that would score full marks. Keep it recognizably based on the student's own ideas, content, and structure — expand underdeveloped parts, fix grammar/spelling/accents, correct the register and format conventions for the text type, and add richer vocabulary/connectors — rather than writing a completely different, unrelated text. This is the single most important field: never leave it empty."
}

Marks: give an APPROXIMATE practice mark out of 10 for each criterion (language, message, conceptual), based on the descriptions above. Be honest and calibrated: a short or off-topic submission should score low, a full-length, accurate, well-structured one high. These are practice estimates, not official IB marks, so do not claim otherwise.

Keep the whole JSON compact: the improvedVersion must stay within the target word range, and each list item must be one sentence. Always close every string and bracket so the JSON is complete.

Be warm and encouraging, like a supportive teacher — not a strict grader. Keep quotes from the student's text short. If the submission is very short or off-topic, gently note that in "summary" and focus "improvements" on developing it further rather than harshly criticizing. Still produce a full "improvedVersion" even for a very short or weak submission, built out from whatever ideas the student did include.`;

interface WritingFeedback {
  summary: string;
  strengths: string[];
  improvements: string[];
  languageComment: string;
  messageComment: string;
  conceptualComment: string;
  marks: { language: number; message: number; conceptual: number } | null;
  improvedVersion: string;
}

/** Clamp the three 0-10 criterion marks; null if any is missing or invalid. */
function parseMarks(value: unknown): WritingFeedback["marks"] {
  if (!value || typeof value !== "object") return null;
  const v = value as Record<string, unknown>;
  const clamp = (n: unknown) => (typeof n === "number" && Number.isFinite(n) ? Math.min(10, Math.max(0, Math.round(n))) : null);
  const language = clamp(v.language), message = clamp(v.message), conceptual = clamp(v.conceptual);
  if (language === null || message === null || conceptual === null) return null;
  return { language, message, conceptual };
}

/** Best-effort parse of the model's JSON response into a WritingFeedback
 *  shape, tolerant of stray markdown fences or missing fields — if parsing
 *  fails entirely, the raw text becomes the summary so nothing is lost. */
function parseFeedback(raw: string): WritingFeedback {
  // Take the outermost {...} so stray text or code fences around the JSON don't break parsing.
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  const cleaned = start >= 0 && end > start ? raw.slice(start, end + 1) : raw;
  try {
    const parsed = JSON.parse(cleaned);
    return {
      summary: typeof parsed.summary === "string" ? parsed.summary : raw,
      strengths: Array.isArray(parsed.strengths) ? parsed.strengths.filter((s: unknown) => typeof s === "string") : [],
      improvements: Array.isArray(parsed.improvements) ? parsed.improvements.filter((s: unknown) => typeof s === "string") : [],
      languageComment: typeof parsed.languageComment === "string" ? parsed.languageComment : "",
      messageComment: typeof parsed.messageComment === "string" ? parsed.messageComment : "",
      conceptualComment: typeof parsed.conceptualComment === "string" ? parsed.conceptualComment : "",
      marks: parseMarks(parsed.marks),
      improvedVersion: typeof parsed.improvedVersion === "string" ? parsed.improvedVersion : "",
    };
  } catch {
    return { summary: raw, strengths: [], improvements: [], languageComment: "", messageComment: "", conceptualComment: "", marks: null, improvedVersion: "" };
  }
}

export async function POST(request: NextRequest) {
  let body: { text?: string; textType?: string; instructions?: string; minWords?: number; maxWords?: number };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ available: false, reason: "bad-request" }, { status: 200 });
  }

  const text = (body.text ?? "").trim();
  if (!text) {
    return NextResponse.json({ available: false, reason: "no-text" }, { status: 200 });
  }
  if (!client) {
    return NextResponse.json({ available: false, reason: "no-api-key" }, { status: 200 });
  }

  try {
    const message = await client.messages.create({
      model: MODEL,
      max_tokens: 4000,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: [
            `Text type: ${body.textType || "unknown"}`,
            `Task instructions: ${body.instructions || "n/a"}`,
            `Target word count: ${body.minWords ?? "?"}-${body.maxWords ?? "?"} words`,
            "",
            `Student's submission:\n"""${text}"""`,
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

    return NextResponse.json({ available: true, feedback: parseFeedback(raw) });
  } catch (error) {
    console.error("AI writing feedback request failed:", error);
    return NextResponse.json({ available: false, reason: "error" }, { status: 200 });
  }
}

/// File: src/app/api/oral-questions/route.ts
//
// Server-side only, same pattern as /api/feedback and /api/writing-feedback:
// reads ANTHROPIC_API_KEY on the server, asks Claude for three examiner-style
// follow-up questions based on the student's own presentation, and always
// responds 200 with `available: false` on any failure so the caller can fall
// back to the built-in question bank (see AudioAssignmentModule.tsx).

import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const MODEL = process.env.ANTHROPIC_MODEL || "claude-haiku-5-5";
const client = process.env.ANTHROPIC_API_KEY ? new Anthropic() : null;

const SYSTEM_PROMPT = `You are an IB Spanish B SL examiner preparing follow-up questions for the discussion part of the Individual Oral. You receive the theme, the photo's description, and the student's presentation transcript.

Write exactly 3 follow-up questions in Spanish, at B1-B2 level, that:
- build on something specific the student said (or, if the transcript is empty, on the photo),
- invite an opinion, a comparison, or an example rather than a yes/no answer,
- stay within the theme.

Respond with ONLY a JSON array (no markdown fences, no text outside the JSON) of 3 objects:
[{"es": "<question in Spanish>", "en": "<short English translation>"}]`;

interface Question {
  es: string;
  en: string;
}

function parseQuestions(raw: string): Question[] | null {
  // Take the outermost [...] so stray text or code fences around the JSON don't break parsing.
  const start = raw.indexOf("[");
  const end = raw.lastIndexOf("]");
  const cleaned = start >= 0 && end > start ? raw.slice(start, end + 1) : raw;
  try {
    const parsed = JSON.parse(cleaned);
    // Accept a bare array, or an object wrapping the array under any key.
    const list = Array.isArray(parsed) ? parsed : Object.values(parsed ?? {}).find(Array.isArray);
    if (!Array.isArray(list)) return null;
    const valid = (list as { es?: unknown; en?: unknown }[])
      .filter((q) => typeof q.es === "string" && typeof q.en === "string" && q.es.trim().length > 0)
      .slice(0, 3)
      .map((q) => ({ es: (q.es as string).trim(), en: (q.en as string).trim() }));
    return valid.length === 3 ? valid : null;
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  let body: { theme?: string; imageDescription?: string; transcript?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ available: false, reason: "bad-request" }, { status: 200 });
  }
  if (!client) {
    return NextResponse.json({ available: false, reason: "no-api-key" }, { status: 200 });
  }

  try {
    const message = await client.messages.create({
      model: MODEL,
      max_tokens: 1200,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: [
            `Theme: ${body.theme || "unknown"}`,
            `Photo: ${body.imageDescription || "n/a"}`,
            `Student's presentation transcript:\n"""${(body.transcript || "").trim() || "(no transcript)"}"""`,
          ].join("\n"),
        },
      ],
    });

    const textBlock = message.content.find((block) => block.type === "text");
    const raw = textBlock && textBlock.type === "text" ? textBlock.text.trim() : "";
    const questions = raw ? parseQuestions(raw) : null;
    if (!questions) {
      console.error("Oral question reply could not be parsed:", raw);
      return NextResponse.json({ available: false, reason: "unparsed" }, { status: 200 });
    }
    return NextResponse.json({ available: true, questions });
  } catch (error) {
    console.error("AI oral-question request failed:", error);
    return NextResponse.json({ available: false, reason: "error" }, { status: 200 });
  }
}

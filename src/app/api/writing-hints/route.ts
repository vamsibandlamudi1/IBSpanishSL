/// File: src/app/api/writing-hints/route.ts
//
// Server-side only, same pattern as the other AI routes: reads ANTHROPIC_API_KEY
// on the server, and returns a planning guide for a Paper 1 task (outline,
// useful vocabulary, connectors) before the student writes. Always responds 200
// with `available: false` on failure, so the UI can fall back to the static tips.

import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const MODEL = process.env.ANTHROPIC_MODEL || "claude-haiku-5-5";
const client = process.env.ANTHROPIC_API_KEY ? new Anthropic() : null;

const SYSTEM_PROMPT = `You help an IB Spanish B SL student PLAN a Paper 1 writing answer. You do NOT write the answer. You receive the text type, the task, and the word range.

Respond with ONLY a JSON object (no markdown, no text outside the JSON):
{
  "outline": ["3-5 short steps: what to put in each paragraph, in English"],
  "vocabulary": [{"es": "Spanish word or phrase", "en": "English meaning"}],
  "connectors": ["4-6 Spanish linking words or phrases suited to this text type, e.g. 'en primer lugar', 'sin embargo'"],
  "conventions": "one sentence in English on the register and format conventions for this text type"
}
The vocabulary array must contain EXACTLY 6 objects, each with an es and an en field, relevant to this task.
Keep everything short, accurate and at B1-B2 level.`;

interface Plan {
  outline: string[];
  vocabulary: { es: string; en: string }[];
  connectors: string[];
  conventions: string;
}

function parsePlan(raw: string): Plan | null {
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  try {
    const p = JSON.parse(raw.slice(start, end + 1));
    const strings = (v: unknown) => (Array.isArray(v) ? v.filter((x): x is string => typeof x === "string" && x.trim().length > 0) : []);
    const vocabulary = Array.isArray(p.vocabulary)
      ? p.vocabulary
          .filter((v: { es?: unknown; en?: unknown }) => typeof v?.es === "string" && typeof v?.en === "string")
          .map((v: { es: string; en: string }) => ({ es: v.es.trim(), en: v.en.trim() }))
      : [];
    const plan: Plan = {
      outline: strings(p.outline),
      vocabulary,
      connectors: strings(p.connectors),
      conventions: typeof p.conventions === "string" ? p.conventions : "",
    };
    return plan.outline.length > 0 ? plan : null;
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  let body: { textType?: string; instructions?: string; theme?: string; minWords?: number; maxWords?: number };
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
            `Text type: ${body.textType || "unknown"}`,
            `Theme: ${body.theme || "unknown"}`,
            `Task: ${body.instructions || "n/a"}`,
            `Target length: ${body.minWords ?? 250}-${body.maxWords ?? 400} words`,
          ].join("\n"),
        },
      ],
    });
    const textBlock = message.content.find((block) => block.type === "text");
    const raw = textBlock && textBlock.type === "text" ? textBlock.text.trim() : "";
    const plan = raw ? parsePlan(raw) : null;
    if (!plan) {
      return NextResponse.json({ available: false, reason: "unparsed" }, { status: 200 });
    }
    return NextResponse.json({ available: true, plan });
  } catch (error) {
    console.error("AI writing-hints request failed:", error);
    return NextResponse.json({ available: false, reason: "error" }, { status: 200 });
  }
}

/// File: src/app/api/writing-feedback/route.ts
//
// Server-side only, same pattern as src/app/api/feedback/route.ts (oral
// feedback): reads ANTHROPIC_API_KEY server-side only, turns a student's
// Paper 2 writing submission into examiner-style feedback using the Claude
// API. Always responds 200 with `available: false` on any failure — the
// caller (WritingModule.tsx) falls back to a local heuristic in that case,
// so the app keeps working without an API key.

import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const MODEL = process.env.ANTHROPIC_MODEL || "claude-opus-5";
const client = process.env.ANTHROPIC_API_KEY ? new Anthropic() : null;

const SYSTEM_PROMPT = `You are a supportive IB Spanish B examiner giving quick feedback on a student's Paper 2 writing submission. You receive the required text type (e.g. formal letter, blog post), the task instructions, the target word range, and the student's Spanish text.

In 4-5 short sentences, written in English:
- Comment on whether the text follows the expected format/conventions for the given text type (greeting, register, closing, structure).
- Comment on task achievement — did they address what the prompt asked?
- Comment on their Spanish vocabulary range and grammar accuracy.
- Name one specific strength.
- Suggest one concrete thing to improve next time.

Be warm and encouraging, like a supportive teacher — not a strict grader. Do not quote large chunks of the text back. If the submission is very short or off-topic, gently note that and encourage a fuller attempt rather than harshly criticizing.`;

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
      max_tokens: 400,
      system: SYSTEM_PROMPT,
      output_config: { effort: "low" },
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
    const feedback = textBlock && textBlock.type === "text" ? textBlock.text.trim() : "";
    if (!feedback) {
      return NextResponse.json({ available: false, reason: "empty-response" }, { status: 200 });
    }

    return NextResponse.json({ available: true, feedback });
  } catch (error) {
    console.error("AI writing feedback request failed:", error);
    return NextResponse.json({ available: false, reason: "error" }, { status: 200 });
  }
}

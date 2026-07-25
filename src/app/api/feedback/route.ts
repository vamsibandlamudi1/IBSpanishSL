/// File: src/app/api/feedback/route.ts
//
// Server-side only: this is the one place ANTHROPIC_API_KEY is read (see
// .env.local.example). It never reaches the browser — the client only ever
// calls this same-origin route. Turns a student's oral-practice transcript
// into short, encouraging examiner-style feedback using the Claude API.
//
// ---> TO CHANGE MODELS: set ANTHROPIC_MODEL in .env.local (e.g. to a
// faster/cheaper model for high-volume classroom use).
//
// If ANTHROPIC_API_KEY isn't configured, or the request fails for any
// reason, this always responds 200 with `available: false` rather than an
// error — the caller (AudioAssignmentModule.tsx) falls back to the local
// keyword-matching feedback in that case, so the app keeps working without
// an API key.

import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const MODEL = process.env.ANTHROPIC_MODEL || "claude-opus-5";
const client = process.env.ANTHROPIC_API_KEY ? new Anthropic() : null;

const SYSTEM_PROMPT = `You are a supportive IB Spanish B SL examiner giving quick feedback on a student's oral practice recording for the Individual Oral. You receive an auto-transcribed transcript (expect minor transcription errors), the theme, the task instructions, and target vocabulary for the theme.

In 3-4 short sentences, written in English:
- Comment on their Spanish vocabulary range and grammar accuracy based on the transcript.
- Name one specific strength.
- Suggest one concrete thing to practice next time.

Be warm and encouraging, like a supportive teacher — not a strict grader. Do not quote the transcript back at length. If the transcript is very short or seems incomplete, gently note that and encourage a fuller attempt next time rather than harshly criticizing.`;

export async function POST(request: NextRequest) {
  let body: { transcript?: string; themeName?: string; targetVocab?: string; instructions?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ available: false, reason: "bad-request" }, { status: 200 });
  }

  const transcript = (body.transcript ?? "").trim();
  if (!transcript) {
    return NextResponse.json({ available: false, reason: "no-transcript" }, { status: 200 });
  }
  if (!client) {
    return NextResponse.json({ available: false, reason: "no-api-key" }, { status: 200 });
  }

  try {
    const message = await client.messages.create({
      model: MODEL,
      max_tokens: 400,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: [
            `Theme: ${body.themeName || "unknown"}`,
            `Task instructions: ${body.instructions || "n/a"}`,
            `Target vocabulary for this theme: ${body.targetVocab || "n/a"}`,
            "",
            `Student's transcript:\n"""${transcript}"""`,
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
    console.error("AI feedback request failed:", error);
    return NextResponse.json({ available: false, reason: "error" }, { status: 200 });
  }
}

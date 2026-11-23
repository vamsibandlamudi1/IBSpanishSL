/// File: src/app/api/translate/route.ts
//
// Server-side only. Looks up any Spanish word or short phrase for the student: the English
// meaning, the most common sense, one example sentence, and a usage note. The model answers
// in tagged plain text (not JSON), which avoids the quotation-mark problems seen before.
// Responds 200 with `available: false` when there is no key or the reply is unusable.

import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const MODEL = process.env.ANTHROPIC_MODEL || "claude-haiku-5-5";
const client = process.env.ANTHROPIC_API_KEY ? new Anthropic() : null;

const SYSTEM = `You are a Spanish-English dictionary for an IB Spanish B SL student. Reply in exactly this layout, one field per line, nothing else:
EN: <the English meaning of the most common sense, 1-6 words>
ALSO: <up to 3 other English meanings, separated by commas, or none>
EXAMPLE_ES: <one short natural Spanish sentence using the word>
EXAMPLE_EN: <its English translation>
NOTE: <one short usage note for a student, in English: gender, register, a common mistake, or 'none'>`;

function field(raw: string, label: string): string {
  const m = new RegExp(`^${label}:\\s*(.+)$`, "m").exec(raw);
  return m ? m[1].trim() : "";
}

export async function POST(request: NextRequest) {
  let body: { word?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ available: false, reason: "bad-request" }, { status: 200 });
  }
  const word = (body.word ?? "").trim().slice(0, 80);
  if (!word) return NextResponse.json({ available: false, reason: "no-word" }, { status: 200 });
  if (!client) return NextResponse.json({ available: false, reason: "no-api-key" }, { status: 200 });

  try {
    const msg = await client.messages.create({
      model: MODEL,
      max_tokens: 3000,
      system: SYSTEM,
      messages: [{ role: "user", content: `Word or phrase: ${word}` }],
    });
    const block = msg.content.find((b) => b.type === "text");
    const raw = block && block.type === "text" ? block.text : "";
    const en = field(raw, "EN");
    if (!en) return NextResponse.json({ available: false, reason: "unparsed" }, { status: 200 });
    const also = field(raw, "ALSO");
    return NextResponse.json({
      available: true,
      result: {
        word,
        en,
        also: also && also.toLowerCase() !== "none" ? also : "",
        exampleEs: field(raw, "EXAMPLE_ES"),
        exampleEn: field(raw, "EXAMPLE_EN"),
        note: field(raw, "NOTE").toLowerCase() === "none" ? "" : field(raw, "NOTE"),
      },
    });
  } catch (error) {
    console.error("AI word lookup failed:", String(error).slice(0, 160));
    return NextResponse.json({ available: false, reason: "error" }, { status: 200 });
  }
}

/// File: src/app/api/listening-help/route.ts
//
// Server-side only. Gives a student AI help on one exam-style listening set after they
// have checked it: why each correct answer is right (with the evidence from the script),
// what they got wrong, and a few useful words from the text. Plain tagged text, like the
// other routes. Responds 200 with `available: false` when there is no key or the reply is empty.

import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const MODEL = process.env.ANTHROPIC_MODEL || "claude-haiku-5-5";
const client = process.env.ANTHROPIC_API_KEY ? new Anthropic() : null;

const SYSTEM = `You are a supportive IB Spanish B SL teacher helping a student after a listening practice. Write in English, briefly. Use exactly this layout:
OVERVIEW: <one sentence on how the student did>
ITEMS:
<one line per item you are given: "<number>. <why the correct answer is right, quoting the script briefly>"; if the student answered wrongly, add " You answered: <their answer>. Tip: <one short listening tip>">
VOCAB:
<6 useful Spanish words or phrases from the script, each as "word - English meaning", one per line>`;

interface ItemIn {
  n: number;
  prompt: string;
  correct: string;
  given: string;
  correctPoints: number;
  marks: number;
}

export async function POST(request: NextRequest) {
  let body: { title?: string; script?: string; items?: ItemIn[]; score?: number; total?: number };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ available: false, reason: "bad-request" }, { status: 200 });
  }
  if (!client) return NextResponse.json({ available: false, reason: "no-api-key" }, { status: 200 });
  const script = (body.script ?? "").slice(0, 3000);
  const items = (body.items ?? []).slice(0, 12);
  if (!script || items.length === 0) return NextResponse.json({ available: false, reason: "no-input" }, { status: 200 });

  const user = [
    `Text: ${body.title ?? ""}`,
    `Score: ${body.score ?? 0} / ${body.total ?? 0}`,
    `Script:\n"""${script}"""`,
    "Items:",
    ...items.map(
      (i) =>
        `${i.n}. ${i.prompt} | correct answer: ${i.correct} | student answer: ${i.given || "(blank)"} | marks ${i.correctPoints}/${i.marks}`
    ),
  ].join("\n");

  try {
    const msg = await client.messages.create({
      model: MODEL,
      max_tokens: 2500,
      system: SYSTEM,
      messages: [{ role: "user", content: user }],
    });
    const block = msg.content.find((b) => b.type === "text");
    const raw = block && block.type === "text" ? block.text.trim() : "";
    if (!raw) return NextResponse.json({ available: false, reason: "empty" }, { status: 200 });
    return NextResponse.json({ available: true, text: raw });
  } catch (error) {
    console.error("AI listening help failed:", String(error).slice(0, 160));
    return NextResponse.json({ available: false, reason: "error" }, { status: 200 });
  }
}

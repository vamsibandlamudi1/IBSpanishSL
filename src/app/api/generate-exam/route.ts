/// File: src/app/api/generate-exam/route.ts
//
// Server-side only. Builds a complete, original practice paper in the structure of the
// IB Spanish B SL exam: Paper 1 writing (3 tasks), Paper 2 listening (3 audio texts),
// Paper 2 reading (3 texts), and the Individual Oral (2 photos with discussion questions).
//
// The model answers in a simple tagged plain-text format (not JSON), because Spanish
// quotation marks inside JSON strings broke parsing. Each part is a separate short call,
// run in parallel. Every part is checked before it is returned: reading justifications
// must be verbatim quotes from the text, multiple-choice answers must be one of the
// options, and each section needs enough usable items.

import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const MODEL = process.env.ANTHROPIC_MODEL || "claude-haiku-5-5";
const client = process.env.ANTHROPIC_API_KEY ? new Anthropic() : null;

const THEMES = ["Identities", "Experiences", "Human Ingenuity", "Social Organization", "Sharing the Planet"];

const BASE =
  "You write material for an IB Spanish B SL practice paper. Write ORIGINAL material only, in B1-B2 Spanish. Follow the output format exactly. Do not add commentary.";

const QUESTION_FORMAT = `Write the questions as lines in this exact format, one per line, using the | character as separator:
Q | tf | true or false | the exact sentence copied from the text that proves the answer | the Spanish statement
Q | mcq | the correct option | a wrong option | another wrong option | the Spanish question
Q | short | expected answer in 1-4 words | the Spanish question
Use a mix of tf, mcq and short. At least one question about the text type or purpose.`;

type Q = { type: "true-false" | "mcq" | "short"; prompt: string; options?: string[]; correctAnswer: string; justification?: string };

const norm = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

/** Reads the Q lines of a part. Multiple-choice options are shuffled so the answer is not always first. */
function parseQuestions(raw: string, sourceText: string): Q[] {
  const body = norm(sourceText);
  const out: Q[] = [];
  for (const line of raw.split("\n")) {
    const parts = line.split("|").map((p) => p.trim());
    if (parts[0] !== "Q" || parts.length < 4) continue;
    const kind = parts[1].toLowerCase();
    if (kind === "tf" && parts.length >= 5) {
      const answer = parts[2].toLowerCase().startsWith("t") ? "true" : "false";
      const just = parts[3];
      const prompt = parts.slice(4).join(" | ");
      if (!just || !body.includes(norm(just)) || !prompt) continue;
      out.push({ type: "true-false", prompt, correctAnswer: answer, justification: just });
    } else if (kind === "mcq" && parts.length >= 5) {
      const correct = parts[2];
      const prompt = parts[parts.length - 1];
      const distractors = parts.slice(3, parts.length - 1).filter(Boolean);
      if (!correct || distractors.length < 2 || distractors.length > 3 || !prompt) continue;
      const options = [correct, ...distractors].sort(() => Math.random() - 0.5);
      out.push({ type: "mcq", prompt, options, correctAnswer: correct });
    } else if (kind === "short") {
      const answer = parts[2];
      const prompt = parts.slice(3).join(" | ");
      if (!answer || !prompt) continue;
      out.push({ type: "short", prompt, correctAnswer: answer });
    }
  }
  return out;
}

/** Text between a start and end marker. */
function between(raw: string, startMarker: string, endMarker: string): string {
  const s = raw.indexOf(startMarker);
  if (s < 0) return "";
  const from = s + startMarker.length;
  const e = raw.indexOf(endMarker, from);
  return (e < 0 ? raw.slice(from) : raw.slice(from, e)).trim();
}

function lineValue(raw: string, label: string): string {
  const m = new RegExp(`^${label}:\\s*(.+)$`, "m").exec(raw);
  return m ? m[1].trim() : "";
}

async function ask(system: string, user: string, maxTokens: number): Promise<string> {
  if (!client) return "";
  try {
    const msg = await client.messages.create({
      model: MODEL,
      max_tokens: maxTokens,
      system: `${BASE}\n\n${system}`,
      messages: [{ role: "user", content: user }],
    });
    const block = msg.content.find((b) => b.type === "text");
    return block && block.type === "text" ? block.text : "";
  } catch (error) {
    console.error("AI exam part failed:", String(error).slice(0, 160));
    return "";
  }
}

function pickThemes(n: number): string[] {
  const shuffled = [...THEMES].sort(() => Math.random() - 0.5);
  return Array.from({ length: n }, (_, i) => shuffled[i % shuffled.length]);
}

async function readingPart(theme: string) {
  const raw = await ask(
    `Write ONE reading text for the IB Spanish B SL reading paper, then 5 questions about it.
Use exactly this layout:
TITLE: <title>
TYPE: <text type, e.g. blog post, magazine article, interview, letter, report, review>
TEXT:
<180-240 words of Spanish, paragraphs separated by blank lines>
END_TEXT
${QUESTION_FORMAT}`,
    `Theme: ${theme}. Write the text and its questions now.`,
    8000
  );
  const body = between(raw, "TEXT:", "END_TEXT");
  const questions = parseQuestions(raw, body);
  if (body.length < 200 || questions.length < 4) return null;
  return { title: lineValue(raw, "TITLE") || "Text", theme, textType: lineValue(raw, "TYPE"), body, questions };
}

async function listeningPart(theme: string) {
  const raw = await ask(
    `Write ONE audio text for the IB Spanish B SL listening paper, then 4 questions about it. The text is a monologue, an interview, or a dialogue (speaker names at the start of each line).
Use exactly this layout:
TITLE: <title>
SCRIPT:
<120-170 words of Spanish>
END_SCRIPT
${QUESTION_FORMAT}`,
    `Theme: ${theme}. Write the audio script and its questions now.`,
    8000
  );
  const script = between(raw, "SCRIPT:", "END_SCRIPT");
  const questions = parseQuestions(raw, script);
  if (script.length < 150 || questions.length < 3) return null;
  return { title: lineValue(raw, "TITLE") || "Audio", theme, script, questions };
}

async function writingPart(themes: string[]) {
  const raw = await ask(
    `Write three exam writing tasks. Use one line per task in this exact format:
W | <text type: Formal letter, Blog post, Speech, Magazine article, Interview, Diary entry, Review, Report, Advertisement, or Opinion essay> | <English task naming the audience and purpose> | <the same task in Spanish>`,
    `Themes to use: ${themes.join(", ")}. Write the three tasks now.`,
    4000
  );
  return raw
    .split("\n")
    .map((l) => l.split("|").map((p) => p.trim()))
    .filter((p) => p[0] === "W" && p.length >= 4 && p[2].length > 20)
    .map((p, i) => ({
      theme: themes[i % themes.length],
      textType: p[1],
      instructions: p[2],
      instructionsEs: p.slice(3).join(" | "),
      minWords: 250,
      maxWords: 400,
    }));
}

async function oralPart(themes: string[]) {
  const raw = await ask(
    `Write two oral exam photo descriptions. Use one line per photo in this exact format:
O | <English description of a realistic photo scene> | <Spanish discussion question 1> | <Spanish discussion question 2> | <Spanish discussion question 3>`,
    `Themes to use: ${themes.join(", ")}. Write the two photos now.`,
    4000
  );
  return raw
    .split("\n")
    .map((l) => l.split("|").map((p) => p.trim()))
    .filter((p) => p[0] === "O" && p.length >= 4 && p[1].length > 10)
    .map((p, i) => ({
      theme: themes[i % themes.length],
      photoDescription: p[1],
      discussion: p.slice(2).filter(Boolean).slice(0, 3),
    }));
}

export async function POST(_request: NextRequest) {
  if (!client) {
    return NextResponse.json({ available: false, reason: "no-api-key" }, { status: 200 });
  }
  const [readingRaw, listeningRaw, writing, oral] = await Promise.all([
    Promise.all(pickThemes(3).map(readingPart)),
    Promise.all(pickThemes(3).map(listeningPart)),
    writingPart(pickThemes(3)),
    oralPart(pickThemes(2)),
  ]);
  const reading = readingRaw.filter((r): r is NonNullable<typeof r> => !!r);
  const listening = listeningRaw.filter((l): l is NonNullable<typeof l> => !!l);
  if (reading.length < 3 || listening.length < 3 || writing.length < 3 || oral.length < 2) {
    console.error("AI exam incomplete:", { reading: reading.length, listening: listening.length, writing: writing.length, oral: oral.length });
    return NextResponse.json({ available: false, reason: "incomplete" }, { status: 200 });
  }
  return NextResponse.json({ available: true, exam: { writing, listening, reading, oral } });
}

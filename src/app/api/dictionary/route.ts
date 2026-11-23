/// File: src/app/api/dictionary/route.ts
//
// Free word lookup, no API key and no AI credits. Combines two free public sources:
//  - Wiktionary (English edition): the Spanish section gives English definitions by part of speech.
//  - MyMemory translation: a direct Spanish-to-English translation of the word.
// Server-side so the browser never calls third-party APIs directly.

import { NextRequest, NextResponse } from "next/server";

const USER_AGENT = "IBSpanishSL-exam-prep/1.0";

interface Sense {
  partOfSpeech: string;
  definitions: string[];
}

const stripHtml = (s: string) =>
  s
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

async function wiktionary(word: string): Promise<Sense[]> {
  const res = await fetch(`https://en.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(word)}`, {
    headers: { "User-Agent": USER_AGENT },
    cache: "no-store",
  });
  if (!res.ok) return [];
  const data = (await res.json()) as Record<string, { partOfSpeech?: string; definitions?: { definition?: string }[] }[]>;
  const spanish = data.es ?? [];
  return spanish.slice(0, 4).map((entry) => ({
    partOfSpeech: entry.partOfSpeech ?? "",
    definitions: (entry.definitions ?? [])
      .map((d) => stripHtml(d.definition ?? ""))
      .filter((d) => d.length > 0 && d.length < 200)
      .slice(0, 3),
  })).filter((s) => s.definitions.length > 0);
}

async function translation(word: string): Promise<string> {
  const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=es|en`, {
    headers: { "User-Agent": USER_AGENT },
    cache: "no-store",
  });
  if (!res.ok) return "";
  const data = (await res.json()) as { responseData?: { translatedText?: string } };
  return stripHtml(data.responseData?.translatedText ?? "");
}

export async function GET(request: NextRequest) {
  const word = (request.nextUrl.searchParams.get("word") ?? "").trim().slice(0, 80);
  if (!word) return NextResponse.json({ available: false, reason: "no-word" }, { status: 200 });
  try {
    const [senses, direct] = await Promise.all([wiktionary(word), translation(word)]);
    if (senses.length === 0 && !direct) {
      return NextResponse.json({ available: false, reason: "not-found" }, { status: 200 });
    }
    return NextResponse.json({ available: true, result: { word, direct, senses } });
  } catch (error) {
    console.error("Free dictionary lookup failed:", String(error).slice(0, 160));
    return NextResponse.json({ available: false, reason: "error" }, { status: 200 });
  }
}

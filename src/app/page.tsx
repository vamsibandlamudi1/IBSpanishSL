/// File: src/app/page.tsx
"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import GamificationDashboard from "@/components/GamificationDashboard";
import ProgressInsights from "@/components/ProgressInsights";

/** The three assessments, with the weights and timings used throughout the app. */
const EXAM_PARTS = [
  {
    paper: "Paper 1",
    title: "Writing",
    weight: "25%",
    detail: "Write 250–400 words in one of three text types, in 1 h 15 min.",
    cta: "Practice writing",
    href: "/writing",
  },
  {
    paper: "Paper 2",
    title: "Listening & Reading",
    weight: "50%",
    detail: "Three audio passages in 45 min, then three written texts in 1 h.",
    cta: "Practice listening & reading",
    href: "/podcast",
  },
  {
    paper: "Individual Oral",
    title: "Speaking",
    weight: "25%",
    detail: "15 min of preparation, then present a photo and discuss the themes.",
    cta: "Practice speaking",
    href: "/audio",
  },
];

const QUICK_LINKS = [
  { href: "/theme-practice", title: "Practice by Theme", desc: "Review vocabulary and try matching/fill-in-the-blank exercises.", emoji: "📚" },
  { href: "/quiz", title: "Take a Quiz", desc: "Test yourself with multiple choice, short answer, and puzzles.", emoji: "📝" },
  { href: "/reading", title: "Reading", desc: "Paper 2 style comprehension passages, self-graded with justifications.", emoji: "📖" },
  { href: "/writing", title: "Writing", desc: "Paper 1 style tasks with instant, examiner-style feedback.", emoji: "✍️" },
  { href: "/grammar", title: "Grammar", desc: "Core grammar topics with rules, examples, and drills.", emoji: "🧩" },
  { href: "/audio", title: "Oral Practice", desc: "Simulate the Individual Oral: describe an image and speak.", emoji: "🎙️" },
  { href: "/practice-exam", title: "Practice Exam", desc: "A full generated exam covering every skill in one sitting.", emoji: "🏁" },
  { href: "/rewards", title: "Rewards", desc: "See your points, badges, and redeem prizes.", emoji: "🏆" },
];

export default function HomePage() {
  const { profile } = useStore();

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col items-center gap-4 py-6 text-center">
        <span className="pill-badge">100% Self-Graded · No Teacher Needed</span>
        <h1 className="max-w-2xl text-4xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-5xl">
          ¡Hola, {profile.name}! Prepare for your <span className="highlight-mark">IB Spanish B SL</span> exam
        </h1>
        <p className="max-w-xl text-slate-500">
          Practice all five IB themes across the three assessments, get examiner-style feedback on your writing and
          speaking, and see what to work on next.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Link href="/theme-practice" className="btn-primary px-6 py-3 text-base">
            Start practicing
          </Link>
          <Link href="/quiz" className="btn-accent px-6 py-3 text-base">
            Take a quiz
          </Link>
        </div>
      </section>

      <section>
        <p className="eyebrow mb-1">The exam</p>
        <h2 className="mb-3 text-lg font-bold text-slate-900">Three assessments, one plan</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {EXAM_PARTS.map((part) => (
            <Link
              key={part.title}
              href={part.href}
              className="group flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
            >
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{part.paper}</p>
                <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-sm font-bold text-brand-800">{part.weight}</span>
              </div>
              <p className="text-lg font-bold text-slate-900">{part.title}</p>
              <p className="text-sm text-slate-500">{part.detail}</p>
              <p className="mt-auto pt-2 text-sm font-semibold text-brand-700 group-hover:underline">{part.cta} →</p>
            </Link>
          ))}
        </div>
        <p className="mt-2 text-xs text-slate-400">Timings are for Standard Level. Check the official IB subject guide for your exam year.</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
        <GamificationDashboard compact />
      </section>

      <section>
        <ProgressInsights />
      </section>

      <section>
        <p className="eyebrow mb-1">Get started</p>
        <h2 className="mb-3 text-lg font-bold text-slate-900">Quick links</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-xs transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <p className="text-2xl">{link.emoji}</p>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-sm text-slate-500 transition group-hover:border-brand-300 group-hover:bg-brand-50 group-hover:text-brand-700">
                  →
                </span>
              </div>
              <p className="mt-2 font-bold text-slate-900">{link.title}</p>
              <p className="mt-1 text-sm text-slate-500">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

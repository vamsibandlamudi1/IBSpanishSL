/// File: src/app/page.tsx
"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import GamificationDashboard from "@/components/GamificationDashboard";
import ProgressInsights from "@/components/ProgressInsights";

const QUICK_LINKS = [
  { href: "/theme-practice", title: "Practice by Theme", desc: "Review vocabulary and try matching/fill-in-the-blank exercises.", emoji: "📚" },
  { href: "/quiz", title: "Take a Quiz", desc: "Test yourself with multiple choice, short answer, and puzzles.", emoji: "📝" },
  { href: "/reading", title: "Reading", desc: "Paper 1 style comprehension passages, self-graded with justifications.", emoji: "📖" },
  { href: "/writing", title: "Writing", desc: "Paper 2 style tasks with instant, examiner-style feedback.", emoji: "✍️" },
  { href: "/grammar", title: "Grammar", desc: "11 core grammar topics with rules, examples, and drills.", emoji: "🧩" },
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
          ¡Hola, {profile.name}! Get a <span className="highlight-mark">perfect 7</span> in Spanish B
        </h1>
        <p className="max-w-xl text-slate-500">
          Practice all five IB themes, take adaptive quizzes, and simulate your Individual Oral — earning points
          and badges along the way.
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

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
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
              className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
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

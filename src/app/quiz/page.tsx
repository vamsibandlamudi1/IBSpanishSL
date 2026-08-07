/// File: src/app/quiz/page.tsx
"use client";

import { Suspense, useState } from "react";
import QuizModule from "@/components/QuizModule";
import ClozeModule from "@/components/ClozeModule";

type Mode = "quiz" | "cloze";

export default function QuizPage() {
  const [mode, setMode] = useState<Mode>("quiz");

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="eyebrow mb-1">Quiz</p>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Test yourself, <span className="highlight-mark">earn points</span>
        </h1>
        <p className="mt-1 text-slate-500">
          {mode === "quiz"
            ? "Choose a theme and difficulty, then complete a short quiz to earn points."
            : "IB-style gap-fill: complete each passage using words from the word bank."}
        </p>
      </div>

      <div className="flex w-fit gap-1 rounded-full border border-slate-200 bg-white p-1">
        <button
          type="button"
          onClick={() => setMode("quiz")}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
            mode === "quiz" ? "bg-brand-100 text-brand-800" : "text-slate-600 hover:bg-slate-50"
          }`}
        >
          Quiz
        </button>
        <button
          type="button"
          onClick={() => setMode("cloze")}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
            mode === "cloze" ? "bg-brand-100 text-brand-800" : "text-slate-600 hover:bg-slate-50"
          }`}
        >
          Gap-fill
        </button>
      </div>

      {mode === "quiz" ? (
        // QuizModule reads ?theme=/?mode=weak via useSearchParams, which requires a Suspense boundary.
        <Suspense fallback={null}>
          <QuizModule />
        </Suspense>
      ) : (
        <ClozeModule />
      )}
    </div>
  );
}

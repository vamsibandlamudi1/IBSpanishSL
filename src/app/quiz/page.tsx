/// File: src/app/quiz/page.tsx
import { Suspense } from "react";
import QuizModule from "@/components/QuizModule";

export default function QuizPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="eyebrow mb-1">Quiz</p>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Test yourself, <span className="highlight-mark">earn points</span>
        </h1>
        <p className="mt-1 text-slate-500">Choose a theme and difficulty, then complete a short quiz to earn points.</p>
      </div>
      {/* QuizModule reads ?theme=/?mode=weak via useSearchParams, which requires a Suspense boundary. */}
      <Suspense fallback={null}>
        <QuizModule />
      </Suspense>
    </div>
  );
}

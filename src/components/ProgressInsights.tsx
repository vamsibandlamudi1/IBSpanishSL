/// File: src/components/ProgressInsights.tsx
"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import { themeAccuracy, weakestTheme } from "@/lib/analytics";

/** "The app figures out your weakness for you": a per-theme accuracy
 *  breakdown computed from every question the student has ever answered
 *  (lib/analytics.ts), plus a one-click way to drill into the weakest spot —
 *  either the single weakest theme, or a cross-theme quiz built entirely
 *  from previously-missed questions. No teacher input required. */
export default function ProgressInsights() {
  const { themes, questionResults } = useStore();
  const accuracyByTheme = themeAccuracy(questionResults, themes);
  const weakest = weakestTheme(questionResults, themes);
  const totalAnswered = questionResults.length;

  const barColor = (accuracy: number | null) => {
    if (accuracy === null) return "bg-slate-200";
    if (accuracy >= 0.8) return "bg-green-500";
    if (accuracy >= 0.5) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">Your progress by theme</h2>
        <span className="text-xs text-slate-500">{totalAnswered} question{totalAnswered === 1 ? "" : "s"} answered</span>
      </div>

      <div className="flex flex-col gap-3">
        {accuracyByTheme.map((t) => (
          <div key={t.themeId}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="font-medium text-slate-800">{t.themeName}</span>
              <span className="text-slate-500">
                {t.accuracy === null ? "Not attempted yet" : `${Math.round(t.accuracy * 100)}% (${t.correct}/${t.total})`}
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full ${barColor(t.accuracy)}`}
                style={{ width: `${t.accuracy === null ? 0 : Math.max(4, t.accuracy * 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-lg bg-brand-50 p-3">
        {weakest ? (
          <>
            <p className="text-sm text-brand-800">
              <span className="font-semibold">Focus area: {weakest.themeName}</span> — your accuracy there is{" "}
              {Math.round((weakest.accuracy ?? 0) * 100)}%. A little extra practice here will help the most.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Link href={`/quiz?theme=${weakest.themeId}`} className="btn-primary px-3 py-1.5 text-xs">
                Practice {weakest.themeName}
              </Link>
              <Link href="/quiz?mode=weak" className="btn-outline px-3 py-1.5 text-xs">
                Practice my weak questions
              </Link>
            </div>
          </>
        ) : (
          <p className="text-sm text-brand-800">
            Take a few quizzes and the app will automatically spot the topics you find hardest, so you know exactly
            what to practice next.
          </p>
        )}
      </div>
    </div>
  );
}

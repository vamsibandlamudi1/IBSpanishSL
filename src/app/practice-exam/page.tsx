/// File: src/app/practice-exam/page.tsx
import PracticeExamModule from "@/components/PracticeExamModule";

export default function PracticeExamPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="eyebrow mb-1">Practice Exam</p>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Simulate the <span className="highlight-mark">full exam</span>
        </h1>
        <p className="mt-1 text-slate-500">
          A generated, full-length session covering reading, listening, grammar, vocabulary, writing, and speaking —
          all in one sitting.
        </p>
      </div>
      <PracticeExamModule />
    </div>
  );
}

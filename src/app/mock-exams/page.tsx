/// File: src/app/mock-exams/page.tsx
import MockExamModule from "@/components/MockExamModule";

export default function MockExamsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="eyebrow mb-1">Mock Exams</p>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Sit a <span className="highlight-mark">timed mock paper</span>
        </h1>
        <p className="mt-1 text-slate-500">Writing, then reading and listening, with the same question counts and timings as the paper layout.</p>
      </div>
      <MockExamModule />
    </div>
  );
}

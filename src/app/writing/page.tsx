/// File: src/app/writing/page.tsx
import WritingModule from "@/components/WritingModule";

export default function WritingPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="eyebrow mb-1">Writing</p>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Paper 1: <span className="highlight-mark">writing practice</span>
        </h1>
        <p className="mt-1 text-slate-500">
          Paper 1 (25%, 1 h 15 min): on the exam you choose 1 of 3 tasks and write 250–400 words in the text type it
          asks for. Pick a task here, follow its format conventions, and get examiner-style feedback.
        </p>
      </div>
      <WritingModule />
    </div>
  );
}

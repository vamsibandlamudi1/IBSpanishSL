/// File: src/app/writing/page.tsx
import WritingModule from "@/components/WritingModule";

export default function WritingPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="eyebrow mb-1">Writing</p>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Paper 2: <span className="highlight-mark">writing practice</span>
        </h1>
        <p className="mt-1 text-slate-500">
          Pick a text type, write a response following its format conventions, and get examiner-style feedback.
        </p>
      </div>
      <WritingModule />
    </div>
  );
}

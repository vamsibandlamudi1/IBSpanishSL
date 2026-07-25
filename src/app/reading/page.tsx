/// File: src/app/reading/page.tsx
import ReadingModule from "@/components/ReadingModule";

export default function ReadingPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="eyebrow mb-1">Reading</p>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Paper 1: <span className="highlight-mark">reading comprehension</span>
        </h1>
        <p className="mt-1 text-slate-500">
          Read an authentic-style text, then answer true/false, multiple choice, and short-answer questions — just
          like the real exam.
        </p>
      </div>
      <ReadingModule />
    </div>
  );
}

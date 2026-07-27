/// File: src/app/vocabulary/page.tsx
import VocabularyModule from "@/components/VocabularyModule";

export default function VocabularyPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="eyebrow mb-1">Vocabulary</p>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Browse and <span className="highlight-mark">test</span> every word
        </h1>
        <p className="mt-1 text-slate-500">
          500+ words per theme — search the full reference list, or jump into a pure vocabulary quiz.
        </p>
      </div>
      <VocabularyModule />
    </div>
  );
}

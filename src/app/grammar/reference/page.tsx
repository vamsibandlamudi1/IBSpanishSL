/// File: src/app/grammar/reference/page.tsx
import Link from "next/link";
import GrammarCheatSheet from "@/components/GrammarCheatSheet";

export default function GrammarReferencePage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link href="/grammar" className="mb-2 inline-block text-sm font-medium text-brand-600 hover:underline">
          ← Back to Grammar
        </Link>
        <p className="eyebrow mb-1">Grammar</p>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          The complete <span className="highlight-mark">cheat sheet</span>
        </h1>
        <p className="mt-1 text-slate-500">Every conjugation chart and trouble spot on one page — jump to what you need.</p>
      </div>
      <GrammarCheatSheet />
    </div>
  );
}

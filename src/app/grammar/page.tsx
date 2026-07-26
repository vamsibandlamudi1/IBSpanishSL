/// File: src/app/grammar/page.tsx
import GrammarModule from "@/components/GrammarModule";

export const dynamic = 'force-dynamic';

export default function GrammarPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="eyebrow mb-1">Grammar</p>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Master the <span className="highlight-mark">rules</span>
        </h1>
        <p className="mt-1 text-slate-500">Core Spanish grammar structures, organized by topic — with rules, examples, and drills.</p>
      </div>
      <GrammarModule />
    </div>
  );
}

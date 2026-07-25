/// File: src/components/SimpleExplainer.tsx
"use client";

/** Plain-language explanation box, used above the denser rule text/tables
 *  in both the Grammar topic pages (GrammarModule) and the reference cheat
 *  sheet (GrammarCheatSheet) — written so a much younger reader could
 *  follow it, with several concrete examples. Pass multiple <p> children
 *  (or an array of paragraph strings) for a short multi-paragraph note;
 *  they're spaced automatically. */
export default function SimpleExplainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 rounded-lg border border-mint-200 bg-mint-50 p-3">
      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-mint-700">💡 In simple words</p>
      <div className="flex flex-col gap-2 text-sm leading-relaxed text-slate-700">{children}</div>
    </div>
  );
}

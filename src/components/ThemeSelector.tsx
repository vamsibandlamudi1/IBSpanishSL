/// File: src/components/ThemeSelector.tsx
"use client";

import { Theme } from "@/lib/types";

interface ThemeSelectorProps {
  themes: Theme[];
  selectedThemeId: string | null;
  onSelect: (themeId: string) => void;
  /** Theme id the app's weakness detection recommends focusing on next
   *  (see lib/analytics.ts weakestTheme). Shown with a small ribbon. */
  recommendedThemeId?: string | null;
}

/** Grid of the 5 official IB themes. Controlled component: the parent page
 *  owns the "selected theme" state and passes it back in via props, so this
 *  component can be reused anywhere a theme needs to be chosen (theme
 *  practice, quiz setup, audio task setup). */
export default function ThemeSelector({ themes, selectedThemeId, onSelect, recommendedThemeId }: ThemeSelectorProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {themes.map((theme) => {
        const active = theme.id === selectedThemeId;
        const recommended = theme.id === recommendedThemeId;
        return (
          <button
            key={theme.id}
            type="button"
            onClick={() => onSelect(theme.id)}
            className={`relative rounded-xl border p-4 text-left shadow-sm transition hover:shadow-md ${
              active ? "border-brand-500 bg-brand-50 ring-2 ring-brand-500" : "border-slate-200 bg-white"
            }`}
          >
            {recommended && (
              <span className="absolute -top-2 right-3 rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                Focus area
              </span>
            )}
            <h3 className="text-base font-bold text-slate-900">{theme.name}</h3>
            <p className="mt-1 text-sm text-slate-600">{theme.description}</p>
            <div className="mt-3 flex flex-wrap gap-1">
              {theme.subtopics.slice(0, 3).map((sub) => (
                <span key={sub} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                  {sub}
                </span>
              ))}
              {theme.subtopics.length > 3 && (
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                  +{theme.subtopics.length - 3} more
                </span>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

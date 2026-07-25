/// File: src/app/theme-practice/page.tsx
"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";
import ThemeSelector from "@/components/ThemeSelector";
import VocabExercise from "@/components/VocabExercise";
import VocabList from "@/components/VocabList";

export default function ThemePracticePage() {
  const { themes } = useStore();
  const [themeId, setThemeId] = useState<string | null>(null);
  const [subtopic, setSubtopic] = useState<string | null>(null);
  const theme = themes.find((t) => t.id === themeId) ?? null;

  const selectTheme = (id: string) => {
    setThemeId(id);
    setSubtopic(null);
  };

  const toggleSubtopic = (s: string) => {
    setSubtopic((prev) => (prev === s ? null : s));
  };

  const displayVocabulary = theme ? (subtopic ? theme.vocabulary.filter((v) => v.subtopic === subtopic) : theme.vocabulary) : [];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="eyebrow mb-1">Theme Practice</p>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Practice by <span className="highlight-mark">theme</span>
        </h1>
        <p className="mt-1 text-slate-500">Choose one of the 5 IB themes to review vocabulary and practice.</p>
      </div>

      <ThemeSelector themes={themes} selectedThemeId={themeId} onSelect={selectTheme} />

      {theme && (
        <div className="flex flex-col gap-5">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">{theme.name}</h2>
            <p className="text-sm text-slate-600">{theme.description}</p>
            <div className="mt-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-800">Subtopics</p>
                {subtopic && (
                  <button type="button" onClick={() => setSubtopic(null)} className="text-xs font-semibold text-brand-600 hover:underline">
                    Clear filter
                  </button>
                )}
              </div>
              <p className="mt-0.5 text-xs text-slate-400">Click a subtopic to focus the vocabulary and exercises below on just those words.</p>
              <div className="mt-1 flex flex-wrap gap-2">
                {theme.subtopics.map((s) => {
                  const active = s === subtopic;
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleSubtopic(s)}
                      aria-pressed={active}
                      className={`rounded-full px-2.5 py-1 text-xs font-medium transition ${
                        active ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="mt-4">
              <VocabList vocabulary={displayVocabulary} />
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold text-slate-900">
              Try it: quick exercises{subtopic ? ` — ${subtopic}` : ""}
            </h3>
            <VocabExercise key={subtopic ?? "all"} vocabulary={displayVocabulary} />
          </div>
        </div>
      )}
    </div>
  );
}

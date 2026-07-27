/// File: src/components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";

/** Light/dark toggle. The actual `dark` class on <html> is set synchronously
 *  by the inline script in layout.tsx (before React hydrates, so there's no
 *  flash of the wrong theme) — this component just mirrors that state into a
 *  button and flips it on click, persisting the explicit choice to
 *  localStorage so it's remembered on the next visit regardless of the
 *  system's color-scheme setting. */
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Ignore quota/availability errors — the toggle still works for this session.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-base hover:bg-slate-100"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}

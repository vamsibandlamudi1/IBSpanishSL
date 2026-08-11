/// File: src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useStore } from "@/lib/store";
import EngagementGamePopup from "./EngagementGamePopup";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/vocabulary", label: "Vocabulary" },
  { href: "/theme-practice", label: "Practice by Theme" },
  { href: "/quiz", label: "Quiz" },
  { href: "/reading", label: "Reading" },
  { href: "/podcast", label: "Podcast" },
  { href: "/writing", label: "Writing" },
  { href: "/grammar", label: "Grammar" },
  { href: "/grammar/reference", label: "Cheat Sheet" },
  { href: "/audio", label: "Oral Practice" },
  { href: "/practice-exam", label: "Practice Exam" },
  { href: "/rewards", label: "Rewards" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { profile, awardMiniGameBonus } = useStore();
  const [showGame, setShowGame] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-xl bg-brand-200 px-3 py-1.5 text-base font-extrabold tracking-tight text-slate-900">
            Prepa
          </span>
          <span className="hidden text-sm font-medium text-slate-500 sm:inline">IB Spanish B SL</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-1">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  active
                    ? "bg-mint-200 text-slate-900"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setShowGame(true)}
            aria-label="Play a mini-game break"
            title="Play a mini-game break"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-base hover:bg-slate-100"
          >
            🎮
          </button>
          <div className="flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
            ⭐ {profile.currentPoints} pts
          </div>
        </div>
      </div>
      {showGame && (
        <EngagementGamePopup
          onClose={(bonus) => {
            if (bonus > 0) awardMiniGameBonus(bonus);
            setShowGame(false);
          }}
        />
      )}
    </header>
  );
}

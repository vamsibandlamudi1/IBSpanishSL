/// File: src/components/PointsMilestoneWatcher.tsx
"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/lib/store";
import PuzzlePopup from "./PuzzlePopup";

/** Mounted once in the root layout (alongside Navbar) so it watches points
 *  across every page, not just the quiz page. Whenever the student's total
 *  points crosses a new multiple of 100, pops up a quick brain-teaser or
 *  memory game (see PuzzlePopup.tsx) as a fun milestone reward. Persists
 *  the highest milestone already shown so reloading/navigating doesn't
 *  re-trigger the same popup. Defers showing (without marking the milestone
 *  as shown) while `activeSession` is true — e.g. mid-way through a Practice
 *  Exam, which awards points after each section rather than only at the very
 *  end — so the popup surfaces right after the student finishes instead of
 *  interrupting them. */
export default function PointsMilestoneWatcher() {
  const { profile, activeSession, highestPuzzleMilestone, markPuzzleMilestoneShown, awardPuzzleBonus } = useStore();
  const [showPuzzle, setShowPuzzle] = useState(false);

  useEffect(() => {
    if (activeSession || showPuzzle) return;
    const currentMilestone = Math.floor(profile.currentPoints / 100) * 100;
    if (currentMilestone > 0 && currentMilestone > highestPuzzleMilestone) {
      markPuzzleMilestoneShown(currentMilestone);
      setShowPuzzle(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile.currentPoints, highestPuzzleMilestone, activeSession]);

  if (!showPuzzle) return null;

  return (
    <PuzzlePopup
      onClose={(bonus) => {
        awardPuzzleBonus(bonus);
        setShowPuzzle(false);
      }}
    />
  );
}

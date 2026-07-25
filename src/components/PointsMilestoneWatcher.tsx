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
 *  re-trigger the same popup. */
export default function PointsMilestoneWatcher() {
  const { profile, highestPuzzleMilestone, markPuzzleMilestoneShown, awardPuzzleBonus } = useStore();
  const [showPuzzle, setShowPuzzle] = useState(false);

  useEffect(() => {
    const currentMilestone = Math.floor(profile.currentPoints / 100) * 100;
    if (currentMilestone > 0 && currentMilestone > highestPuzzleMilestone && !showPuzzle) {
      markPuzzleMilestoneShown(currentMilestone);
      setShowPuzzle(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile.currentPoints, highestPuzzleMilestone]);

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

/// File: src/components/EngagementGameWatcher.tsx
"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/lib/store";
import EngagementGamePopup from "./EngagementGamePopup";

const INTERVAL_MS = 10 * 60 * 1000;

/** Fires a skippable, non-Spanish mini-game popup (Tic-Tac-Toe, Minesweeper,
 *  ...) every 10 minutes the app has been open, purely to keep long study
 *  sessions engaging — distinct from the points-milestone puzzle popup
 *  (PointsMilestoneWatcher.tsx) and the every-15-questions vocab mini-game
 *  (QuizModule.tsx), which are both progress-triggered rather than
 *  time-triggered. Mounted once in the root layout. */
export default function EngagementGameWatcher() {
  const { awardMiniGameBonus } = useStore();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setShow(true), INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  if (!show) return null;

  return (
    <EngagementGamePopup
      onClose={(bonus) => {
        if (bonus > 0) awardMiniGameBonus(bonus);
        setShow(false);
      }}
    />
  );
}

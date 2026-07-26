/// File: src/components/EngagementGameWatcher.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useStore } from "@/lib/store";
import EngagementGamePopup from "./EngagementGamePopup";

const INTERVAL_MS = 10 * 60 * 1000;

/** Fires a skippable, non-Spanish mini-game popup (Tic-Tac-Toe, Minesweeper,
 *  ...) every 10 minutes the app has been open, purely to keep long study
 *  sessions engaging — distinct from the points-milestone puzzle popup
 *  (PointsMilestoneWatcher.tsx) and the every-15-questions vocab mini-game
 *  (QuizModule.tsx), which are both progress-triggered rather than
 *  time-triggered. Mounted once in the root layout.
 *
 *  Since this timer runs regardless of what the student is doing, it's the
 *  most likely of the three to land mid-quiz/mid-exam. While `activeSession`
 *  is true, a due popup is remembered as pending rather than shown, and
 *  fires as soon as the session ends instead of interrupting it. */
export default function EngagementGameWatcher() {
  const { awardMiniGameBonus, activeSession } = useStore();
  const [show, setShow] = useState(false);
  const activeSessionRef = useRef(activeSession);
  const pendingRef = useRef(false);

  useEffect(() => {
    activeSessionRef.current = activeSession;
    if (!activeSession && pendingRef.current) {
      pendingRef.current = false;
      setShow(true);
    }
  }, [activeSession]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeSessionRef.current) {
        pendingRef.current = true;
      } else {
        setShow(true);
      }
    }, INTERVAL_MS);
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

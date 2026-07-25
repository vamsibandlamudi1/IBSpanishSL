/// File: src/components/AchievementToast.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useStore, AwardResult } from "@/lib/store";
import { playBadgeFanfare, playPointsChime } from "@/lib/sound";

interface StarSpec {
  id: number;
  dx: number;
  dy: number;
  delay: number;
}

const VISIBLE_MS = 3800;

/** Mounted once in the root layout so it celebrates achievements on every
 *  page: watches the store's `lastAward` (set when a quiz is completed or
 *  an oral assignment is submitted — see lib/store.tsx) and, whenever a
 *  genuinely new award appears, pops a small toast with an animated star
 *  burst and a short synthesized chime (bigger fanfare for a new badge).
 *  Purely a motivational flourish — the underlying points/badges are
 *  already awarded by the store; this just makes it feel good. */
export default function AchievementToast() {
  const { lastAward } = useStore();
  const [visible, setVisible] = useState(false);
  const [award, setAward] = useState<AwardResult | null>(null);
  const [stars, setStars] = useState<StarSpec[]>([]);
  const seenRef = useRef<AwardResult | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!lastAward || lastAward === seenRef.current || lastAward.pointsAwarded <= 0) return;
    seenRef.current = lastAward;

    setAward(lastAward);
    setStars(
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        dx: (Math.random() - 0.5) * 160,
        dy: -40 - Math.random() * 90,
        delay: Math.random() * 0.2,
      }))
    );
    setVisible(true);

    if (lastAward.newBadges.length > 0) playBadgeFanfare();
    else playPointsChime();

    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => setVisible(false), VISIBLE_MS);
  }, [lastAward]);

  useEffect(
    () => () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    },
    []
  );

  if (!visible || !award) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-[60] flex justify-center px-4">
      <div className="toast-pop pointer-events-auto relative overflow-visible rounded-xl border border-amber-200 bg-white px-5 py-3 shadow-lg">
        {stars.map((s) => {
          const style: React.CSSProperties & Record<string, string> = {
            "--dx": `${s.dx}px`,
            "--dy": `${s.dy}px`,
            animation: `star-pop 1s ease-out ${s.delay}s forwards`,
          };
          return (
            <span key={s.id} className="star-particle absolute left-1/2 top-1/2 text-lg" style={style}>
              ⭐
            </span>
          );
        })}
        <div className="relative flex items-center gap-2">
          <span className="text-2xl">{award.newBadges.length > 0 ? "🏅" : "🌟"}</span>
          <div>
            <p className="text-sm font-bold text-amber-700">+{award.pointsAwarded} points!</p>
            {award.newBadges.length > 0 && (
              <p className="text-xs font-semibold text-brand-700">
                New badge: {award.newBadges.map((b) => b.name).join(", ")}
              </p>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .toast-pop {
          animation: toast-in 0.25s ease-out;
        }
        @keyframes toast-in {
          from {
            transform: translateY(-16px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .star-particle {
          transform: translate(-50%, -50%) scale(0.4);
          opacity: 0;
        }
        @keyframes star-pop {
          0% {
            transform: translate(-50%, -50%) scale(0.4);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(0.9);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

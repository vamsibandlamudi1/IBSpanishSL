/// File: src/components/GamificationDashboard.tsx
"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";

/** Full rewards view: current points, unlocked badges (with locked ones
 *  greyed out for motivation), and a prize "store" where points can be
 *  redeemed. Pass `compact` to render just the points/badges summary
 *  (used on the Home dashboard). */
export default function GamificationDashboard({ compact = false }: { compact?: boolean }) {
  const { profile, allBadges, prizes, redeemPrize, resetProgress } = useStore();
  const [message, setMessage] = useState<string | null>(null);
  const [confirmingReset, setConfirmingReset] = useState(false);

  const unlocked = new Set(profile.badges);

  const handleRedeem = (prizeId: string) => {
    const result = redeemPrize(prizeId);
    setMessage(result.message);
    setTimeout(() => setMessage(null), 4000);
  };

  const handleReset = () => {
    resetProgress();
    setConfirmingReset(false);
    setMessage("All progress has been reset.");
    setTimeout(() => setMessage(null), 4000);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-4">
        <div className="rounded-xl bg-amber-50 px-5 py-4 text-center">
          <p className="text-3xl font-extrabold text-amber-700">{profile.currentPoints}</p>
          <p className="text-xs font-medium uppercase tracking-wide text-amber-600">Total points</p>
        </div>
        <div className="rounded-xl bg-brand-50 px-5 py-4 text-center">
          <p className="text-3xl font-extrabold text-brand-700">{profile.badges.length}</p>
          <p className="text-xs font-medium uppercase tracking-wide text-brand-600">Badges earned</p>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-base font-bold text-slate-900">Badges</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {allBadges.map((badge) => {
            const isUnlocked = unlocked.has(badge.id);
            return (
              <div
                key={badge.id}
                className={`rounded-lg border p-3 text-sm ${
                  isUnlocked ? "border-brand-300 bg-brand-50" : "border-slate-200 bg-slate-50 opacity-60"
                }`}
              >
                <p className="font-semibold text-slate-900">{isUnlocked ? "🏅" : "🔒"} {badge.name}</p>
                <p className="mt-1 text-xs text-slate-600">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {!compact && (
        <div>
          <h3 className="mb-2 text-base font-bold text-slate-900">Prize store</h3>
          {message && (
            <p className="mb-2 rounded-md bg-slate-100 px-3 py-2 text-sm text-slate-700">{message}</p>
          )}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {prizes.map((prize) => {
              const affordable = profile.currentPoints >= prize.costPoints;
              return (
                <div key={prize.id} className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{prize.name}</p>
                    <p className="text-xs text-slate-600">{prize.description}</p>
                    <p className="mt-1 text-xs font-medium text-amber-700">{prize.costPoints} pts</p>
                  </div>
                  <button type="button" disabled={!affordable} onClick={() => handleRedeem(prize.id)} className="btn-accent px-3 py-1.5 text-xs">
                    Redeem
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {!compact && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <h3 className="text-base font-bold text-red-900">Reset progress</h3>
          <p className="mt-1 text-sm text-red-700">
            Permanently erases your points, badges, quiz history, oral practice recordings, and redemptions on this
            device. This cannot be undone.
          </p>
          {!confirmingReset ? (
            <button
              type="button"
              onClick={() => setConfirmingReset(true)}
              className="mt-3 rounded-full border border-red-300 bg-white px-3 py-1.5 text-sm font-semibold text-red-700 hover:bg-red-100"
            >
              Reset all progress
            </button>
          ) : (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <p className="text-sm font-semibold text-red-900">Are you sure? This cannot be undone.</p>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-full bg-red-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-red-700"
              >
                Yes, erase everything
              </button>
              <button type="button" onClick={() => setConfirmingReset(false)} className="btn-outline px-3 py-1.5 text-sm">
                Cancel
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

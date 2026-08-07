/// File: src/components/ColorSplash.tsx
"use client";

import { useMemo } from "react";

// Brand-palette confetti colors so the celebration reads as part of this
// app's design language rather than generic rainbow confetti.
const COLORS = ["#7c6df2", "#2dd4bf", "#f59e0b", "#fb7185", "#38bdf8", "#34d399"];
const PIECE_COUNT = 28;

/** A brief burst of colored confetti pieces radiating from the center,
 *  animating out and fading over ~1s. Purely decorative — a bit of visual
 *  "relief" after the plain white quiz-results card, celebrating that the
 *  student finished. Mounts fresh (and re-plays) every time its parent
 *  conditionally renders it, so no trigger prop is needed — just render it
 *  once per results screen. */
export default function ColorSplash() {
  const pieces = useMemo(() => {
    return Array.from({ length: PIECE_COUNT }, (_, i) => {
      const angle = (Math.PI * 2 * i) / PIECE_COUNT + Math.random() * 0.3;
      const distance = 70 + Math.random() * 80;
      return {
        id: i,
        color: COLORS[i % COLORS.length],
        tx: Math.cos(angle) * distance,
        ty: Math.sin(angle) * distance,
        delay: Math.round(Math.random() * 120),
        square: i % 3 === 0,
      };
    });
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className={`confetti-piece ${p.square ? "rounded-sm" : "rounded-full"}`}
          style={
            {
              "--tx": `${p.tx}px`,
              "--ty": `${p.ty}px`,
              animationDelay: `${p.delay}ms`,
              backgroundColor: p.color,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

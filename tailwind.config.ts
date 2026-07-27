/// File: tailwind.config.ts
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Full scale (50-950) via Tailwind's built-in palettes, so every
        // brand-*/mint-* shade (e.g. brand-300, mint-800) actually exists —
        // a previous partial custom palette silently dropped classes like
        // text-brand-400 with no generated CSS and no build warning.
        brand: colors.violet,
        // Mint highlighter accent used behind key headline words and for
        // the active-nav-link pill, echoing aniko.ai's visual style.
        mint: colors.teal,
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-6px)" },
          "40%": { transform: "translateX(6px)" },
          "60%": { transform: "translateX(-4px)" },
          "80%": { transform: "translateX(4px)" },
        },
        "pop-in": {
          "0%": { transform: "scale(0.92)", opacity: "0.6" },
          "60%": { transform: "scale(1.03)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "fade-slide-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shake: "shake 0.4s ease-in-out",
        "pop-in": "pop-in 0.3s ease-out",
        "fade-slide-up": "fade-slide-up 0.25s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;

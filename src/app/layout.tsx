/// File: src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/lib/store";
import Navbar from "@/components/Navbar";
import PointsMilestoneWatcher from "@/components/PointsMilestoneWatcher";
import AchievementToast from "@/components/AchievementToast";
import EngagementGameWatcher from "@/components/EngagementGameWatcher";

export const metadata: Metadata = {
  title: "IB Spanish B SL Prep",
  description: "Classroom prototype for IB Spanish B SL exam preparation.",
  // The app intentionally mixes English UI copy with Spanish learning content
  // (vocab, reading passages, writing prompts, badge names...). Browsers like
  // Chrome tend to detect a mixed-language page as "Spanish" and offer/apply
  // full-page auto-translate, which silently translates the Spanish content
  // students are meant to read — defeating the point of the app. This asks
  // Chrome/Google Translate not to auto-translate; see also translate="no"
  // on <html> below.
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" translate="no">
      <body>
        {/* StoreProvider makes student profile, content, and gamification
            state available to every page via useStore() — see lib/store.tsx */}
        <StoreProvider>
          <Navbar />
          <PointsMilestoneWatcher />
          <AchievementToast />
          <EngagementGameWatcher />
          <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}

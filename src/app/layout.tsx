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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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

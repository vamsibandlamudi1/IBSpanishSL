/// File: src/app/podcast/page.tsx
import PodcastModule from "@/components/PodcastModule";

export default function PodcastPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="eyebrow mb-1">Podcast</p>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Listening: <span className="highlight-mark">podcast comprehension</span>
        </h1>
        <p className="mt-1 text-slate-500">
          Listen to a ~10-minute Notes-in-Spanish-style episode with the transcript highlighted word by word as it
          plays, hover any underlined word for its English meaning, then answer comprehension questions — one
          episode per IB theme.
        </p>
      </div>
      <PodcastModule />
    </div>
  );
}

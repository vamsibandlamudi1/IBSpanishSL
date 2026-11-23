/// File: src/app/podcast/page.tsx
import ListeningExam from "@/components/ListeningExam";

export default function PodcastPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="eyebrow mb-1">Listening</p>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Paper 2: <span className="highlight-mark">listening, exam style</span>
        </h1>
        <p className="mt-1 text-slate-500">
          Short texts with a maximum mark, like the real paper: multiple choice, choose-two statements, gap-fill and
          "menciona" items. Listen, answer, then check. The transcript stays hidden unless you open it, and AI help
          explains each set after you check it.
        </p>
      </div>
      <ListeningExam />
    </div>
  );
}

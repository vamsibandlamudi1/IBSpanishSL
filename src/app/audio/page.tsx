/// File: src/app/audio/page.tsx
import AudioAssignmentModule from "@/components/AudioAssignmentModule";

export default function AudioPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="eyebrow mb-1">Individual Oral Simulation</p>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Speak with <span className="highlight-mark">confidence</span>
        </h1>
        <p className="mt-1 text-slate-500">
          Practice describing an image and relating it to your own experience, just like the IB Individual Oral.
        </p>
      </div>
      <AudioAssignmentModule />
    </div>
  );
}

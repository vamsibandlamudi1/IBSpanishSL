/// File: src/components/PracticeExamModule.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { READING_PASSAGES } from "@/lib/reading";
import { GRAMMAR_TOPICS, loadExercises } from "@/lib/grammar";
import { useStore } from "@/lib/store";
import { speak, stopSpeaking } from "@/lib/speech";
import { deriveJustification } from "@/lib/deriveJustification";
import { Difficulty, GrammarExercise, QuizItem, ReadingPassage, ReadingQuestion } from "@/lib/types";
import WritingModule from "./WritingModule";
import AudioAssignmentModule from "./AudioAssignmentModule";

type Stage = "intro" | "reading" | "reading-strategies" | "listening" | "grammar" | "vocabulary" | "writing" | "speaking" | "summary";

const SECTION_STAGES: Stage[] = ["reading", "reading-strategies", "listening", "grammar", "vocabulary", "writing", "speaking"];
const SECTION_LABELS: Partial<Record<Stage, string>> = {
  reading: "Reading",
  "reading-strategies": "Reading Strategies",
  listening: "Listening",
  grammar: "Grammar",
  vocabulary: "Vocabulary",
  writing: "Writing",
  speaking: "Speaking",
};
/** Display labels for the summary score grid — separate from SECTION_LABELS
 *  because the score keys are camelCase object keys, not Stage strings. */
const SCORE_LABELS: Record<keyof typeof EMPTY_SCORES, string> = {
  reading: "Reading",
  readingStrategies: "Reading Strategies",
  listening: "Listening",
  grammar: "Grammar",
  vocabulary: "Vocabulary",
};

interface SectionScore {
  correct: number;
  total: number;
}

const EMPTY_SCORES = {
  reading: { correct: 0, total: 0 },
  readingStrategies: { correct: 0, total: 0 },
  listening: { correct: 0, total: 0 },
  grammar: { correct: 0, total: 0 },
  vocabulary: { correct: 0, total: 0 },
};

/** A single self-graded question, normalized down to one shared shape so
 *  reading/listening/grammar/vocabulary questions — which come from four
 *  differently-typed content pools — can all be rendered and checked by the
 *  same QuestionSetSection component below. */
interface ExamQuestion {
  id: string;
  prompt: string;
  type: "true-false" | "mcq" | "short" | "listening";
  options?: string[];
  correctAnswer: string;
  audioText?: string;
  justification?: string;
  /** Shown on a wrong answer alongside (or instead of) justification —
   *  carried through from GrammarExercise.tip/.explanation or
   *  QuizItem.explanation, which previously got silently dropped by the
   *  grammarToExam/quizToExam mappings below. */
  tip?: string;
  /** Present only for reading/vocabulary questions, which carry a real IB
   *  theme — lets QuestionSetSection log each answer via recordQuestionResult
   *  so exam activity counts toward "Your progress by theme" on the Home
   *  page, same as the standalone Reading/Quiz modules. Grammar topics
   *  aren't IB themes, so grammar/listening questions leave this unset and
   *  are intentionally not logged against a theme. */
  themeId?: string;
  difficulty?: Difficulty;
}

const readingToExam = (q: ReadingQuestion, passage: ReadingPassage): ExamQuestion => ({
  id: q.id,
  prompt: q.prompt,
  type: q.type,
  options: q.options,
  correctAnswer: q.correctAnswer,
  justification: deriveJustification(q, passage.bodyEs),
  themeId: passage.themeId,
  difficulty: passage.level,
});

const grammarToExam = (g: GrammarExercise): ExamQuestion => ({
  id: g.id,
  prompt: g.prompt,
  type: g.type,
  options: g.options,
  correctAnswer: g.correctAnswer,
  audioText: g.audioText,
  tip: g.tip ?? g.explanation,
});

const quizToExam = (q: QuizItem): ExamQuestion => ({
  id: q.id,
  prompt: q.prompt,
  type: q.type as "mcq" | "short" | "listening",
  options: q.options,
  correctAnswer: q.correctAnswer,
  audioText: q.audioText,
  themeId: q.themeId,
  difficulty: q.difficulty,
  tip: q.explanation,
});

const stripAccents = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
const normalizeAnswer = (s: string) => stripAccents(s.trim().toLowerCase());

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

/** Full-length practice exam: generates one randomized bundle covering every
 *  part of the IB Spanish B SL exam — reading, reading strategies (heading-
 *  matching, word-bank gap-fill), listening, grammar, vocabulary, writing,
 *  and speaking — and walks the student through it as a single guided
 *  session, section by section, with a combined score summary at the end.
 *  All question-based sections reuse the shared QuestionSetSection below
 *  (self-graded, same pattern as ReadingModule/GrammarModule); writing and
 *  speaking embed the existing WritingModule/AudioAssignmentModule
 *  components directly rather than reimplementing their (considerably more
 *  complex) AI-feedback and recording flows. Every section awards points via
 *  the same shared gamification system as the standalone modules. */
export default function PracticeExamModule() {
  const { questions, completeQuiz, clearLastAward, setActiveSession } = useStore();

  const [stage, setStage] = useState<Stage>("intro");
  const [examReading, setExamReading] = useState<ReadingPassage | null>(null);
  const [examReadingStrategies, setExamReadingStrategies] = useState<ExamQuestion[]>([]);
  const [examListening, setExamListening] = useState<ExamQuestion[]>([]);
  const [examGrammar, setExamGrammar] = useState<ExamQuestion[]>([]);
  const [examVocab, setExamVocab] = useState<ExamQuestion[]>([]);
  const [scores, setScores] = useState<Record<keyof typeof EMPTY_SCORES, SectionScore>>(EMPTY_SCORES);
  const [sectionPoints, setSectionPoints] = useState(0);

  // Lets the global milestone/engagement popups know the exam is in progress
  // — important here specifically, since the exam awards points after every
  // section (not just once at the very end), so a 100-point milestone can be
  // crossed mid-exam. Busy for the whole run, from the first section through
  // the last, so nothing interrupts between sections either — see
  // lib/store.tsx's activeSession.
  useEffect(() => {
    setActiveSession(stage !== "intro" && stage !== "summary");
    return () => setActiveSession(false);
  }, [stage, setActiveSession]);

  const generateExam = async () => {
    setExamReading(shuffle(READING_PASSAGES)[0]);

    // Lazy-load grammar exercises on demand (exercises are no longer bundled
    // in the static GRAMMAR_TOPICS array — see lib/grammar.ts).
    const listeningExs = await loadExercises("listening-tenses");
    setExamListening(shuffle(listeningExs).slice(0, 8).map(grammarToExam));

    // Heading-matching and gap-fill are IB Paper 1 reading strategies, not
    // grammar rules — pulled into their own section instead of the generic
    // grammar pool so the exam labels them accurately.
    const READING_STRATEGY_TOPICS = ["heading-matching", "gap-fill"];
    const strategyExs = (await Promise.all(READING_STRATEGY_TOPICS.map(loadExercises))).flat();
    setExamReadingStrategies(shuffle(strategyExs).slice(0, 8).map(grammarToExam));

    const grammarTopicIds = GRAMMAR_TOPICS.filter(
      (t) => t.id !== "listening-tenses" && !READING_STRATEGY_TOPICS.includes(t.id)
    ).map((t) => t.id);
    const allGrammarExs = (await Promise.all(grammarTopicIds.map(loadExercises))).flat();
    setExamGrammar(shuffle(allGrammarExs).slice(0, 10).map(grammarToExam));

    // Puzzle-type items are skipped — the sentence-builder UI is specific to
    // QuizModule and not worth duplicating just for the exam bundle.
    const vocabPool = questions.filter((q) => q.type !== "puzzle");
    setExamVocab(shuffle(vocabPool).slice(0, 10).map(quizToExam));

    setScores(EMPTY_SCORES);
    setSectionPoints(0);
    clearLastAward();
    setStage("reading");
  };

  const finishReading = (correct: number, total: number) => {
    setScores((s) => ({ ...s, reading: { correct, total } }));
    if (examReading) {
      const award = completeQuiz(`exam-reading-${examReading.id}`, examReading.level, correct, total);
      setSectionPoints((p) => p + award.pointsAwarded);
    }
    setStage("reading-strategies");
  };

  const finishReadingStrategies = (correct: number, total: number) => {
    setScores((s) => ({ ...s, readingStrategies: { correct, total } }));
    const award = completeQuiz("exam-reading-strategies", "medium", correct, total);
    setSectionPoints((p) => p + award.pointsAwarded);
    setStage("listening");
  };

  const finishListening = (correct: number, total: number) => {
    setScores((s) => ({ ...s, listening: { correct, total } }));
    const award = completeQuiz("exam-listening", "medium", correct, total);
    setSectionPoints((p) => p + award.pointsAwarded);
    setStage("grammar");
  };

  const finishGrammar = (correct: number, total: number) => {
    setScores((s) => ({ ...s, grammar: { correct, total } }));
    const award = completeQuiz("exam-grammar", "medium", correct, total);
    setSectionPoints((p) => p + award.pointsAwarded);
    setStage("vocabulary");
  };

  const finishVocabulary = (correct: number, total: number) => {
    setScores((s) => ({ ...s, vocabulary: { correct, total } }));
    const award = completeQuiz("exam-vocabulary", "medium", correct, total);
    setSectionPoints((p) => p + award.pointsAwarded);
    setStage("writing");
  };

  const currentSectionIndex = SECTION_STAGES.indexOf(stage);

  return (
    <div className="flex flex-col gap-5">
      {stage === "intro" && (
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-lg font-bold text-slate-900">Full practice exam</h2>
          <p className="mb-4 text-sm text-slate-600">
            A freshly randomized, full-length practice session covering every part of the IB Spanish B SL exam in one
            sitting:
          </p>
          <ul className="mb-5 flex flex-col gap-1.5 text-sm text-slate-700">
            <li>📖 Reading comprehension — 1 passage, 5 questions</li>
            <li>🧩 Reading strategies — 8 heading-matching &amp; word-bank gap-fill questions</li>
            <li>🎧 Listening comprehension — 8 audio questions</li>
            <li>✍️ Grammar — 10 questions across random topics</li>
            <li>🗂️ Vocabulary — 10 questions across random themes</li>
            <li>📝 Writing task — 1 Paper 2 style prompt</li>
            <li>🎙️ Speaking task — 1 Individual Oral simulation</li>
          </ul>
          <p className="mb-5 text-xs text-slate-400">
            Every section is shuffled fresh each time, so you can take it as many times as you like. Each section is
            scored and awards points automatically, same as the rest of the app.
          </p>
          <button type="button" onClick={generateExam} className="btn-primary px-6 py-2.5">
            Generate my practice exam
          </button>
        </div>
      )}

      {stage !== "intro" && stage !== "summary" && (
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm text-slate-500">
            Section {currentSectionIndex + 1} / {SECTION_STAGES.length} · {SECTION_LABELS[stage]}
          </p>
          <button type="button" onClick={() => setStage("intro")} className="text-xs font-medium text-slate-400 hover:text-slate-600 hover:underline">
            Exit exam
          </button>
        </div>
      )}

      {stage === "reading" && examReading && (
        <div key={examReading.id} className="animate-fade-slide-up flex flex-col gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-bold text-slate-900">{examReading.title}</h2>
              <span className="pill-badge">{examReading.textType}</span>
            </div>
            <div className="flex flex-col gap-3">
              {examReading.bodyEs.split("\n\n").map((para, i) => (
                <p key={i} className="whitespace-pre-line text-sm leading-relaxed text-slate-700">
                  {para}
                </p>
              ))}
            </div>
          </div>
          <QuestionSetSection
            items={examReading.questions.map((q) => readingToExam(q, examReading))}
            onContinue={finishReading}
            continueLabel="Continue to Reading Strategies →"
          />
        </div>
      )}

      {stage === "reading-strategies" && (
        <div className="animate-fade-slide-up flex flex-col gap-4">
          <div className="rounded-xl border border-brand-200 bg-brand-50 p-4">
            <p className="text-sm text-brand-800">
              These questions practice the reading STRATEGIES IB Paper 1 tests — matching a heading to a paragraph,
              and filling gaps from a word bank — not grammar rules.
            </p>
          </div>
          <QuestionSetSection items={examReadingStrategies} onContinue={finishReadingStrategies} continueLabel="Continue to Listening →" />
        </div>
      )}

      {stage === "listening" && (
        <div className="animate-fade-slide-up">
          <QuestionSetSection items={examListening} onContinue={finishListening} continueLabel="Continue to Grammar →" />
        </div>
      )}

      {stage === "grammar" && (
        <div className="animate-fade-slide-up">
          <QuestionSetSection items={examGrammar} onContinue={finishGrammar} continueLabel="Continue to Vocabulary →" />
        </div>
      )}

      {stage === "vocabulary" && (
        <div className="animate-fade-slide-up">
          <QuestionSetSection items={examVocab} onContinue={finishVocabulary} continueLabel="Continue to Writing →" />
        </div>
      )}

      {stage === "writing" && (
        <div className="animate-fade-slide-up flex flex-col gap-4">
          <div className="rounded-xl border border-brand-200 bg-brand-50 p-4">
            <p className="text-sm text-brand-800">
              Complete one Paper 2 writing task below — pick any prompt and submit it for feedback, same as the
              standalone Writing module.
            </p>
          </div>
          <WritingModule />
          <button type="button" onClick={() => setStage("speaking")} className="btn-accent w-fit">
            Continue to Speaking →
          </button>
        </div>
      )}

      {stage === "speaking" && (
        <div className="animate-fade-slide-up flex flex-col gap-4">
          <div className="rounded-xl border border-brand-200 bg-brand-50 p-4">
            <p className="text-sm text-brand-800">
              Complete one Individual Oral speaking task below — the same simulation as the standalone Oral Practice
              module.
            </p>
          </div>
          <AudioAssignmentModule />
          <button type="button" onClick={() => setStage("summary")} className="btn-accent w-fit">
            Finish exam →
          </button>
        </div>
      )}

      {stage === "summary" && (
        <div className="animate-fade-slide-up rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-1 text-xl font-bold text-slate-900">Practice exam complete! 🎉</h2>
          <p className="mb-5 text-sm text-slate-500">Here&apos;s how you did across every section.</p>

          <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {(Object.keys(scores) as (keyof typeof scores)[]).map((key) => {
              const s = scores[key];
              return (
                <div key={key} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                  <p className="text-2xl font-extrabold text-brand-700">{s.total > 0 ? `${s.correct}/${s.total}` : "—"}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{SCORE_LABELS[key]}</p>
                </div>
              );
            })}
          </div>

          <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-3 text-center text-sm font-semibold text-green-800">
              ✓ Writing task completed
            </div>
            <div className="rounded-xl border border-green-200 bg-green-50 p-3 text-center text-sm font-semibold text-green-800">
              ✓ Speaking task completed
            </div>
          </div>

          {sectionPoints > 0 && (
            <p className="mb-4 text-sm font-semibold text-amber-700">
              +{sectionPoints} points earned from the auto-graded sections — plus whatever your writing and speaking
              submissions awarded above.
            </p>
          )}

          <button type="button" onClick={generateExam} className="btn-primary">
            Take another practice exam
          </button>
        </div>
      )}
    </div>
  );
}

/** Shows a list of self-graded questions (any mix of true/false, multiple
 *  choice, short-answer, or listening), collects answers, grades everything
 *  at once on "Check answers" — mirroring ReadingModule's check-as-a-set
 *  pattern, which fits an exam section better than one-question-at-a-time —
 *  then hands the score back to the parent via onContinue. */
function QuestionSetSection({
  items,
  onContinue,
  continueLabel,
}: {
  items: ExamQuestion[];
  onContinue: (correct: number, total: number) => void;
  continueLabel: string;
}) {
  const { recordQuestionResult } = useStore();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  const isCorrect = (q: ExamQuestion) => normalizeAnswer(answers[q.id] ?? "") === normalizeAnswer(q.correctAnswer);
  const correctCount = items.filter(isCorrect).length;
  const answeredCount = items.filter((q) => (answers[q.id] ?? "").trim().length > 0).length;

  const handleCheck = () => {
    setChecked(true);
    items.forEach((q) => {
      if (q.themeId && q.difficulty) recordQuestionResult(q.id, q.themeId, q.difficulty, isCorrect(q));
    });
  };

  // Auto-continue to the next section shortly after checking — but only on
  // a perfect score. Sections here are graded as a whole batch, not one
  // question at a time like Quiz/Grammar, so "auto-advance on correct"
  // means "auto-advance when there's nothing wrong left to review." Any
  // miss still needs a manual click on Continue, since that's exactly when
  // the tip/justification is worth reading before moving on.
  const onContinueRef = useRef(onContinue);
  onContinueRef.current = onContinue;
  useEffect(() => {
    if (!checked || correctCount !== items.length) return;
    const timer = setTimeout(() => onContinueRef.current(correctCount, items.length), 900);
    return () => clearTimeout(timer);
  }, [checked]);

  const setAnswer = (id: string, value: string) => {
    if (checked) return;
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const togglePlay = (q: ExamQuestion) => {
    if (speakingId === q.id) {
      stopSpeaking();
      setSpeakingId(null);
      return;
    }
    if (!q.audioText) return;
    setSpeakingId(q.id);
    speak(q.audioText, () => setSpeakingId(null));
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((q, i) => {
        const picked = answers[q.id];
        const correct = checked && isCorrect(q);
        const wrong = checked && !isCorrect(q);
        return (
          <div
            key={q.id}
            className={`rounded-xl border bg-white p-4 shadow-sm transition ${
              correct ? "border-green-300 bg-green-50" : wrong ? "border-red-300 bg-red-50" : "border-slate-200"
            }`}
          >
            <p className="mb-3 text-sm font-semibold text-slate-900">
              {i + 1}. {q.prompt}
            </p>

            {q.type === "listening" && (
              <div className="mb-3">
                <button
                  type="button"
                  onClick={() => togglePlay(q)}
                  className={`btn-outline ${speakingId === q.id ? "border-red-300 bg-red-50 text-red-700 hover:bg-red-100" : ""}`}
                >
                  {speakingId === q.id ? "⏹ Stop" : "🔊 Play audio"}
                </button>
              </div>
            )}

            {q.type === "true-false" && (
              <div className="flex gap-2">
                {["true", "false"].map((val) => (
                  <button
                    key={val}
                    type="button"
                    disabled={checked}
                    onClick={() => setAnswer(q.id, val)}
                    className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
                      picked === val ? "border-brand-400 bg-brand-100 text-brand-800" : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {val === "true" ? "Verdadero" : "Falso"}
                  </button>
                ))}
              </div>
            )}

            {(q.type === "mcq" || q.type === "listening") && (
              <div className="flex flex-col gap-2">
                {q.options?.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    disabled={checked}
                    onClick={() => setAnswer(q.id, opt)}
                    className={`rounded-md border px-3 py-2 text-left text-sm ${
                      picked === opt ? "border-brand-400 bg-brand-100 text-brand-800" : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {q.type === "short" && (
              <input
                type="text"
                value={picked ?? ""}
                disabled={checked}
                onChange={(e) => setAnswer(q.id, e.target.value)}
                placeholder="Escribe tu respuesta en español..."
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500"
              />
            )}

            {checked && (
              <>
                <p className={`mt-3 text-sm font-medium ${correct ? "text-green-700" : "text-red-700"}`}>
                  {correct
                    ? "¡Correcto!"
                    : `Incorrecto — respuesta correcta: "${q.correctAnswer === "true" ? "Verdadero" : q.correctAnswer === "false" ? "Falso" : q.correctAnswer}"`}
                  {q.justification && <span className="ml-1 italic text-slate-500">({q.justification})</span>}
                </p>
                {!correct && q.tip && (
                  <p className="mt-1.5 text-xs text-slate-500">💡 {q.tip}</p>
                )}
              </>
            )}
          </div>
        );
      })}

      <div className="flex flex-wrap items-center gap-3">
        {!checked ? (
          <button type="button" onClick={handleCheck} disabled={answeredCount === 0} className="btn-primary">
            Check answers ({answeredCount} / {items.length} answered)
          </button>
        ) : (
          <>
            <p className="text-lg font-bold text-slate-900">
              {correctCount} / {items.length} correct
            </p>
            <button type="button" onClick={() => onContinue(correctCount, items.length)} className="btn-accent">
              {continueLabel}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

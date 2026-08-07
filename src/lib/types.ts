/// File: src/lib/types.ts
//
// Central content model for the app. Every module (quizzes, theme practice,
// audio tasks, gamification) reads and writes these shapes. The app has no
// teacher/admin role — all content lives in src/lib/data.ts and all grading
// (quizzes, oral practice) is automatic. If you add a new kind of content,
// extend an interface here first, then update src/lib/data.ts.

// ---------------------------------------------------------------------------
// Themes & subtopics
// ---------------------------------------------------------------------------

/** A vocabulary or key-phrase entry used in theme practice exercises. */
export interface VocabItem {
  es: string; // Spanish term
  en: string; // English meaning
  /** Which of the theme's `subtopics` entries this word belongs to — lets
   *  ThemePracticePage filter vocabulary down to a single subtopic when the
   *  student clicks it. Must match one of Theme.subtopics exactly. */
  subtopic: string;
}

export interface Theme {
  id: string; // e.g. "identities"
  name: string; // e.g. "Identities"
  description: string;
  subtopics: string[]; // official-style subtopic labels for the theme
  vocabulary: VocabItem[]; // sample vocabulary for practice exercises
}

// ---------------------------------------------------------------------------
// Quiz items
// ---------------------------------------------------------------------------

export type QuizItemType = "mcq" | "short" | "puzzle" | "listening";
export type Difficulty = "easy" | "medium" | "hard";

export interface QuizItem {
  id: string;
  themeId: string;
  type: QuizItemType;
  prompt: string;
  /** Multiple choice options ("mcq" and "listening"), or scrambled words to reorder ("puzzle"). Unused for "short". */
  options?: string[];
  /** Exact expected answer. For "mcq"/"listening" this matches one of `options`. For "puzzle" (sentence
   *  ordering) this is the correctly ordered sentence as a single string. */
  correctAnswer: string;
  /** The Spanish word/phrase spoken aloud (Web Speech API) for "listening" questions — hidden from view
   *  until the student answers, so they must rely on the audio rather than reading it. Unused otherwise. */
  audioText?: string;
  difficulty: Difficulty;
  /** Points value shown to the student for this individual question (used for in-quiz scoring feedback).
   *  The bigger "completion bonus" awarded to the student's profile is computed separately —
   *  see lib/gamification.ts pointsForQuizDifficulty(). */
  points: number;
  /** Optional explanation shown after the student answers, giving context about why the answer is correct. */
  explanation?: string;
}

// ---------------------------------------------------------------------------
// Audio tasks (Individual Oral simulation)
// ---------------------------------------------------------------------------

export interface AudioTask {
  id: string;
  themeId: string;
  /** Text placeholder standing in for the real photograph/image stimulus used in the IB Oral. */
  imageDescription: string;
  instructions: string;
  /** Spanish versions of the prompt, spoken aloud via the Web Speech API (speechSynthesis)
   *  so the task feels like a real oral exam prompt instead of just English instructions.
   *  See AudioAssignmentModule.tsx's "Play prompt" button. */
  imageDescriptionEs: string;
  instructionsEs: string;
  /** High-resolution photo URL for the IB Oral image stimulus. */
  imageUrl?: string;
  /** 3-4 emoji that visually represent the scene, rendered large on a gradient
   *  card as a fallback if the photograph fails to load. */
  sceneEmoji: string[];
  maxDurationSeconds: number;
}

/** A student's recorded response to an AudioTask. In this prototype `audioUrl` is a
 *  browser-local blob URL (or a placeholder string); wire this to real file storage
 *  (S3, a Next.js API route, etc.) for production use — see AudioAssignmentModule.tsx.
 *  `transcript` and `feedback` are produced automatically in-browser via the Web Speech
 *  API's SpeechRecognition (no teacher review needed) — see AudioAssignmentModule.tsx. */
export interface AudioSubmission {
  id: string;
  studentId: string;
  taskId: string;
  audioUrl: string;
  transcript?: string;
  feedback?: string;
  submittedAt: string; // ISO date string
}

// ---------------------------------------------------------------------------
// Gamification
// ---------------------------------------------------------------------------

export interface StudentProfile {
  id: string;
  name: string;
  currentPoints: number;
  badges: string[]; // unlocked Badge ids
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  /** Human-readable description of the unlock rule. The rule itself is implemented as a
   *  plain code function in lib/gamification.ts (evaluateBadges) rather than a dynamic DSL. */
  criteria: string;
}

export interface Prize {
  id: string;
  name: string;
  costPoints: number;
  description: string;
}

/** A logged record each time a student redeems a prize. */
export interface PrizeRedemption {
  id: string;
  prizeId: string;
  pointsSpent: number;
  redeemedAt: string; // ISO date string
}

/** A logged record each time a student finishes a quiz. Used both to compute the
 *  score screen and to evaluate milestone badges (e.g. "3 quizzes in one theme"). */
export interface QuizAttempt {
  id: string;
  /** Theme id, or "mixed-review" for an adaptive weak-areas quiz that spans multiple themes. */
  themeId: string;
  difficulty: Difficulty;
  score: number; // number of correct answers
  total: number; // number of questions in the quiz
  pointsAwarded: number;
  completedAt: string; // ISO date string
}

/** A single answered question, logged the moment it's checked (independent of whether the
 *  whole quiz is finished). This finer-grained log is what powers weakness detection —
 *  see lib/analytics.ts — since QuizAttempt alone only has an aggregate score. */
export interface QuestionResult {
  id: string;
  questionId: string;
  themeId: string;
  difficulty: Difficulty;
  correct: boolean;
  answeredAt: string; // ISO date string
}

// ---------------------------------------------------------------------------
// Grammar module — topic-organized (not theme-organized) practice
// ---------------------------------------------------------------------------

export interface GrammarExample {
  es: string;
  en: string;
}

export interface GrammarExercise {
  id: string;
  type: "mcq" | "short" | "listening";
  prompt: string;
  /** Present for "mcq" and "listening"; unused for "short". */
  options?: string[];
  /** The Spanish sentence spoken aloud (Web Speech API) for "listening"
   *  exercises — hidden from view until the student answers, so they must
   *  rely on the audio rather than reading it. Unused for other types. */
  audioText?: string;
  correctAnswer: string;
  /** Helpful feedback tip or rule explanation shown to the student when an answer is incorrect. */
  tip?: string;
  explanation?: string;
}

export interface GrammarTopic {
  id: string;
  name: string;
  level: "beginner" | "intermediate" | "advanced";
  /** Short plain-English explanation of the rule. */
  rule: string;
  /** An even simpler, "explain it to a 5th grader" version of the rule with
   *  one concrete example — shown above `rule` in a highlighted callout
   *  (see SimpleExplainer.tsx). */
  simpleExplanation: string;
  examples: GrammarExample[];
  exercises: GrammarExercise[];
}

// ---------------------------------------------------------------------------
// Reading comprehension (Paper 1 style)
// ---------------------------------------------------------------------------

export interface ReadingQuestion {
  id: string;
  type: "true-false" | "mcq" | "short";
  prompt: string;
  /** Present only for "mcq"; unused otherwise ("true-false" renders fixed Verdadero/Falso buttons). */
  options?: string[];
  /** "true"/"false" for true-false questions, the exact matching option for mcq, or the expected
   *  text for short-answer questions. */
  correctAnswer: string;
  /** A short quote from the passage justifying a true/false answer, shown after checking — mirrors
   *  the real IB Paper 1 requirement to justify true/false answers with evidence from the text. */
  justification?: string;
}

export interface ReadingVocabItem {
  es: string;
  en: string;
}

export interface ReadingPassage {
  id: string;
  themeId: string;
  title: string;
  /** The IB text type (blog post, formal email, magazine article...) — recognizing text-type
   *  conventions is itself an assessed Paper 1 skill, not just comprehension of content. */
  textType: string;
  level: Difficulty;
  bodyEs: string;
  questions: ReadingQuestion[];
  /** Key words drawn from the passage, shown after the questions to build vocabulary. */
  vocabulary?: ReadingVocabItem[];
}

// ---------------------------------------------------------------------------
// Writing (Paper 2 style)
// ---------------------------------------------------------------------------

export interface WritingPrompt {
  id: string;
  themeId: string;
  /** The IB text type this prompt asks the student to produce. */
  textType: string;
  level: Difficulty;
  /** The task instructions, as they'd appear on the exam paper. */
  instructions: string;
  instructionsEs: string;
  /** Format-convention reminders for this text type (e.g. "Dear... / Sincerely..." for a formal
   *  letter) — shown as a checklist so students know what the examiner is looking for structurally,
   *  separate from the content/language feedback they get after submitting. */
  formatTips: string[];
  minWords: number;
  maxWords: number;
}

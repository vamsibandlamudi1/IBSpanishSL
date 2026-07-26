/// File: src/lib/store.tsx
"use client";
//
// App-wide state, implemented as a React Context backed by localStorage.
// There is no teacher/admin role and no login flow — the app tracks a
// single local student profile and does all grading, gamification, and
// weakness detection itself (see lib/gamification.ts and lib/analytics.ts).
// Content (themes, questions, audio tasks, badges, prizes) is static data
// from lib/data.ts, exposed here for convenience so components only need
// one import (`useStore()`).
//
// ---> TO WIRE UP A REAL BACKEND: replace the localStorage read/write in the
// two useEffect hooks below with API calls (e.g. to Next.js Route Handlers),
// and swap STUDENT_ID for a real authenticated user id. The rest of the app
// only talks to this file's context, so components would not need to change.

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AUDIO_TASKS, BADGES, PRIZES, QUESTION_BANK, THEMES } from "./data";
import { WRITING_PROMPTS } from "./writing";
import {
  achievementMessage,
  evaluateBadges,
  pointsForQuizDifficulty,
  AUDIO_ASSIGNMENT_POINTS,
  WRITING_ASSIGNMENT_POINTS,
} from "./gamification";
import {
  AudioSubmission,
  Badge,
  Difficulty,
  PrizeRedemption,
  QuestionResult,
  QuizAttempt,
  StudentProfile,
} from "./types";

const STORAGE_KEY = "ib-spanish-app-state-v2";
const STUDENT_ID = "student-demo";

interface PersistedState {
  profile: StudentProfile;
  quizAttempts: QuizAttempt[];
  questionResults: QuestionResult[];
  audioSubmissions: AudioSubmission[];
  redemptions: PrizeRedemption[];
  /** Highest points-milestone (multiple of 100) for which the PuzzlePopup
   *  brain-break has already been shown — see PointsMilestoneWatcher.tsx.
   *  Prevents re-showing the same popup on every reload/navigation. */
  highestPuzzleMilestone: number;
  /** Count of Paper 2 writing tasks submitted — a plain count rather than a
   *  full submissions array since no feature needs per-submission detail
   *  (writing text itself isn't persisted, same spirit as not persisting
   *  full audio recordings server-side in this prototype). */
  writingCount: number;
}

function defaultState(): PersistedState {
  return {
    profile: { id: STUDENT_ID, name: "Estudiante", currentPoints: 0, badges: [] },
    quizAttempts: [],
    questionResults: [],
    audioSubmissions: [],
    redemptions: [],
    highestPuzzleMilestone: 0,
    writingCount: 0,
  };
}

/** Feedback shown right after an award (points/badges) so the UI can pop a toast. */
export interface AwardResult {
  pointsAwarded: number;
  newBadges: Badge[];
  message: string;
}

interface StoreContextValue extends PersistedState {
  // Static content — read-only, defined in lib/data.ts.
  themes: typeof THEMES;
  questions: typeof QUESTION_BANK;
  audioTasks: typeof AUDIO_TASKS;
  prizes: typeof PRIZES;
  allBadges: Badge[];

  lastAward: AwardResult | null;
  clearLastAward: () => void;

  /** True while the student is in the middle of a quiz/drill/exam section —
   *  set by QuizModule/GrammarModule/ReadingModule/PracticeExamModule. Lets
   *  the milestone/engagement popups (PointsMilestoneWatcher,
   *  EngagementGameWatcher) defer themselves until the student actually
   *  finishes, instead of interrupting mid-test. */
  activeSession: boolean;
  setActiveSession: (active: boolean) => void;

  // --- Student actions (the app grades everything itself) ---
  recordQuestionResult: (questionId: string, themeId: string, difficulty: Difficulty, correct: boolean) => void;
  completeQuiz: (themeId: string, difficulty: Difficulty, score: number, total: number) => AwardResult;
  submitAudio: (taskId: string, audioUrl: string, transcript?: string, feedback?: string) => AwardResult;
  /** Records one Paper 2 writing task as submitted and awards points/badges. Called once per
   *  submission — see WritingModule.tsx. The written text itself isn't persisted, only the count. */
  submitWriting: (promptId: string) => AwardResult;
  redeemPrize: (prizeId: string) => { ok: boolean; message: string };
  /** Small bonus from the between-quiz mini-game break — see MiniGameBreak.tsx. Deliberately
   *  separate from completeQuiz/submitAudio: it doesn't affect badges, just a fun top-up. */
  awardMiniGameBonus: (points: number) => void;
  /** Small bonus from a 100-point-milestone puzzle popup — see PuzzlePopup.tsx
   *  and PointsMilestoneWatcher.tsx. Same idea as awardMiniGameBonus, kept separate for clarity. */
  awardPuzzleBonus: (points: number) => void;
  markPuzzleMilestoneShown: (milestone: number) => void;
  /** Wipes all local progress (points, badges, quiz/audio history, redemptions) back to a
   *  fresh profile. Irreversible — the calling UI is responsible for confirming with the
   *  student first (see GamificationDashboard.tsx). Static content (themes/questions/etc.)
   *  is untouched since it isn't stored in localStorage to begin with. */
  resetProgress: () => void;
}

const StoreContext = createContext<StoreContextValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  // Start from defaults on the server and on first client render so SSR
  // output matches; real persisted data (if any) is loaded right after mount.
  const [state, setState] = useState<PersistedState>(defaultState);
  const [hydrated, setHydrated] = useState(false);
  const [lastAward, setLastAward] = useState<AwardResult | null>(null);
  const [activeSession, setActiveSession] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setState({ ...defaultState(), ...JSON.parse(raw) });
      }
    } catch {
      // Corrupt or unavailable storage: fall back to defaults silently.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return; // avoid clobbering saved data with defaults before load
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore quota/availability errors in this prototype.
    }
  }, [state, hydrated]);

  const value = useMemo<StoreContextValue>(() => {
    const applyAward = (points: number, newBadgeIds: string[], message: string): AwardResult => {
      const newBadges = BADGES.filter((b) => newBadgeIds.includes(b.id));
      const result: AwardResult = { pointsAwarded: points, newBadges, message };
      setLastAward(result);
      return result;
    };

    return {
      ...state,
      themes: THEMES,
      questions: QUESTION_BANK,
      audioTasks: AUDIO_TASKS,
      prizes: PRIZES,
      allBadges: BADGES,
      lastAward,
      clearLastAward: () => setLastAward(null),
      activeSession,
      setActiveSession,

      recordQuestionResult: (questionId, themeId, difficulty, correct) => {
        const result: QuestionResult = {
          id: `qr-${Date.now()}-${questionId}`,
          questionId,
          themeId,
          difficulty,
          correct,
          answeredAt: new Date().toISOString(),
        };
        setState((prev) => ({ ...prev, questionResults: [...prev.questionResults, result] }));
      },

      completeQuiz: (themeId, difficulty, score, total) => {
        const pointsAwarded = pointsForQuizDifficulty(difficulty);
        const attempt: QuizAttempt = {
          id: `attempt-${Date.now()}`,
          themeId,
          difficulty,
          score,
          total,
          pointsAwarded,
          completedAt: new Date().toISOString(),
        };

        let result: AwardResult = { pointsAwarded: 0, newBadges: [], message: "" };
        setState((prev) => {
          const quizAttempts = [...prev.quizAttempts, attempt];
          const newBadgeIds = evaluateBadges({
            quizAttempts,
            audioSubmissions: prev.audioSubmissions,
            writingCount: prev.writingCount,
            alreadyUnlocked: prev.profile.badges,
          });
          const theme = THEMES.find((t) => t.id === themeId);
          result = applyAward(pointsAwarded, newBadgeIds, achievementMessage(theme, "quiz"));
          return {
            ...prev,
            quizAttempts,
            profile: {
              ...prev.profile,
              currentPoints: prev.profile.currentPoints + pointsAwarded,
              badges: [...prev.profile.badges, ...newBadgeIds],
            },
          };
        });
        return result;
      },

      submitAudio: (taskId, audioUrl, transcript, feedback) => {
        const submission: AudioSubmission = {
          id: `submission-${Date.now()}`,
          studentId: STUDENT_ID,
          taskId,
          audioUrl,
          transcript,
          feedback,
          submittedAt: new Date().toISOString(),
        };

        let result: AwardResult = { pointsAwarded: 0, newBadges: [], message: "" };
        setState((prev) => {
          const audioSubmissions = [...prev.audioSubmissions, submission];
          const newBadgeIds = evaluateBadges({
            quizAttempts: prev.quizAttempts,
            audioSubmissions,
            writingCount: prev.writingCount,
            alreadyUnlocked: prev.profile.badges,
          });
          const task = AUDIO_TASKS.find((t) => t.id === taskId);
          const theme = THEMES.find((t) => t.id === task?.themeId);
          result = applyAward(AUDIO_ASSIGNMENT_POINTS, newBadgeIds, achievementMessage(theme, "audio"));
          return {
            ...prev,
            audioSubmissions,
            profile: {
              ...prev.profile,
              currentPoints: prev.profile.currentPoints + AUDIO_ASSIGNMENT_POINTS,
              badges: [...prev.profile.badges, ...newBadgeIds],
            },
          };
        });
        return result;
      },

      submitWriting: (promptId) => {
        let result: AwardResult = { pointsAwarded: 0, newBadges: [], message: "" };
        setState((prev) => {
          const writingCount = prev.writingCount + 1;
          const newBadgeIds = evaluateBadges({
            quizAttempts: prev.quizAttempts,
            audioSubmissions: prev.audioSubmissions,
            writingCount,
            alreadyUnlocked: prev.profile.badges,
          });
          const prompt = WRITING_PROMPTS.find((p) => p.id === promptId);
          const theme = THEMES.find((t) => t.id === prompt?.themeId);
          result = applyAward(WRITING_ASSIGNMENT_POINTS, newBadgeIds, achievementMessage(theme, "writing"));
          return {
            ...prev,
            writingCount,
            profile: {
              ...prev.profile,
              currentPoints: prev.profile.currentPoints + WRITING_ASSIGNMENT_POINTS,
              badges: [...prev.profile.badges, ...newBadgeIds],
            },
          };
        });
        return result;
      },

      redeemPrize: (prizeId) => {
        const prize = PRIZES.find((p) => p.id === prizeId);
        if (!prize) return { ok: false, message: "Prize not found." };
        if (state.profile.currentPoints < prize.costPoints) {
          return { ok: false, message: `You need ${prize.costPoints - state.profile.currentPoints} more points for this prize.` };
        }
        const redemption: PrizeRedemption = {
          id: `redemption-${Date.now()}`,
          prizeId,
          pointsSpent: prize.costPoints,
          redeemedAt: new Date().toISOString(),
        };
        setState((prev) => ({
          ...prev,
          redemptions: [...prev.redemptions, redemption],
          profile: { ...prev.profile, currentPoints: prev.profile.currentPoints - prize.costPoints },
        }));
        return { ok: true, message: `Redeemed "${prize.name}"! Enjoy your reward.` };
      },

      awardMiniGameBonus: (points) => {
        setState((prev) => ({
          ...prev,
          profile: { ...prev.profile, currentPoints: prev.profile.currentPoints + points },
        }));
      },

      awardPuzzleBonus: (points) => {
        setState((prev) => ({
          ...prev,
          profile: { ...prev.profile, currentPoints: prev.profile.currentPoints + points },
        }));
      },

      markPuzzleMilestoneShown: (milestone) => {
        setState((prev) => ({ ...prev, highestPuzzleMilestone: Math.max(prev.highestPuzzleMilestone, milestone) }));
      },

      resetProgress: () => {
        setLastAward(null);
        setState(defaultState());
      },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, lastAward, activeSession]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreContextValue {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within a StoreProvider");
  return ctx;
}

/// File: src/components/MiniGameBreak.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { THEMES } from "@/lib/data";
import { VocabItem } from "@/lib/types";
import { shuffle } from "@/lib/utils";

const DURATION_SECONDS = 50;
const ALL_VOCAB: VocabItem[] = THEMES.flatMap((t) => t.vocabulary);

interface BlitzQuestion {
  es: string;
  correctEn: string;
  options: string[];
}

function randomQuestion(): BlitzQuestion {
  const target = ALL_VOCAB[Math.floor(Math.random() * ALL_VOCAB.length)];
  const distractors = shuffle(ALL_VOCAB.filter((v) => v.en !== target.en)).slice(0, 3);
  return { es: target.es, correctEn: target.en, options: shuffle([target.en, ...distractors.map((d) => d.en)]) };
}

/** A short, upbeat "brain break" shown every 15 answered questions (see
 *  QuizModule.tsx) to keep motivation up during a long study session —
 *  a rapid vocabulary matching game against a 50-second countdown. Purely a
 *  fun bonus: it awards a small number of points but never affects badges or
 *  quiz scoring. */
export default function MiniGameBreak({ onFinish }: { onFinish: (bonusPoints: number) => void }) {
  const [timeLeft, setTimeLeft] = useState(DURATION_SECONDS);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState<BlitzQuestion>(randomQuestion);
  const [lastPicked, setLastPicked] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);
  const [done, setDone] = useState(false);
  const nextTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (done) return;
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(interval);
          setDone(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [done]);

  useEffect(() => () => {
    if (nextTimeout.current) clearTimeout(nextTimeout.current);
  }, []);

  const handleAnswer = (opt: string) => {
    if (locked || done) return;
    const correct = opt === question.correctEn;
    if (correct) setScore((s) => s + 1);
    setLastPicked(opt);
    setLocked(true);
    nextTimeout.current = setTimeout(() => {
      setLastPicked(null);
      setLocked(false);
      setQuestion(randomQuestion());
    }, 350);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">⚡ Vocab Blitz — Brain Break!</h3>
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-sm font-semibold text-amber-700">{timeLeft}s</span>
        </div>

        {!done ? (
          <>
            <p className="mb-3 text-xs text-slate-500">
              Nice work on 15 questions! Match as many words as you can before time runs out.
            </p>
            <p className="mb-3 text-2xl font-bold text-brand-700">{question.es}</p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {question.options.map((opt) => {
                const isCorrectOption = opt === question.correctEn;
                const isPicked = opt === lastPicked;
                const showState = locked && (isCorrectOption || isPicked);
                return (
                  <button
                    key={opt}
                    type="button"
                    disabled={locked}
                    onClick={() => handleAnswer(opt)}
                    className={`rounded-md border px-3 py-2 text-left text-sm transition ${
                      showState
                        ? isCorrectOption
                          ? "border-green-400 bg-green-50"
                          : "border-red-400 bg-red-50"
                        : "border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            <p className="mt-3 text-sm text-slate-600">Score: {score}</p>
          </>
        ) : (
          <div className="text-center">
            <p className="text-3xl font-extrabold text-brand-600">{score} correct!</p>
            <p className="mt-1 text-sm text-slate-600">+{score} bonus points</p>
            <button type="button" onClick={() => onFinish(score)} className="btn-accent mt-4">
              Continue quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

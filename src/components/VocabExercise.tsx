/// File: src/components/VocabExercise.tsx
"use client";

import { useMemo, useState } from "react";
import { VocabItem } from "@/lib/types";
import { speak } from "@/lib/speech";
import { shuffle } from "@/lib/utils";
import { PARAGRAPH_EXERCISES, ParagraphExercise } from "@/lib/paragraphData";

const stripAccents = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
const normalize = (s: string) => stripAccents(s.trim().toLowerCase());

export default function VocabExercise({ vocabulary, themeId, subtopic }: { vocabulary: VocabItem[]; themeId?: string; subtopic?: string | null }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <MatchingGame vocabulary={vocabulary} />
        <FillInTheBlank vocabulary={vocabulary} />
      </div>
      <ThemeListeningPractice vocabulary={vocabulary} />
      <ParagraphFillInTheBlank themeId={themeId} subtopic={subtopic} />
    </div>
  );
}

function MatchingGame({ vocabulary }: { vocabulary: VocabItem[] }) {
  // Randomly select 6 words from the vocabulary pool each rendered session
  const words = useMemo(() => shuffle([...vocabulary]).slice(0, 6), [vocabulary]);
  const [englishOrder] = useState(() => shuffle(words.map((w) => w.en)));
  const [selectedEs, setSelectedEs] = useState<string | null>(null);
  const [matched, setMatched] = useState<Record<string, string>>({});
  const [wrongFlash, setWrongFlash] = useState<string | null>(null);

  const handlePickEn = (en: string) => {
    if (!selectedEs) return;
    const correctEn = words.find((w) => w.es === selectedEs)?.en;
    if (correctEn === en) {
      setMatched((prev) => ({ ...prev, [selectedEs]: en }));
      setSelectedEs(null);
    } else {
      setWrongFlash(en);
      setTimeout(() => setWrongFlash(null), 500);
      setSelectedEs(null);
    }
  };

  const allMatched = Object.keys(matched).length === words.length;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="font-bold text-slate-900">Matching exercise</h3>
      <p className="mb-3 text-sm text-slate-600">
        Click a Spanish word, then click its English meaning.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          {words.map((w) => (
            <div key={w.es} className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => speak(w.es)}
                aria-label={`Play pronunciation of ${w.es}`}
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs text-slate-400 hover:bg-slate-200 hover:text-slate-700"
              >
                🔊
              </button>
              <button
                type="button"
                disabled={!!matched[w.es]}
                onClick={() => setSelectedEs(w.es)}
                className={`flex-1 rounded-md border px-2 py-1.5 text-left text-sm ${
                  matched[w.es]
                    ? "border-green-300 bg-green-50 text-green-700"
                    : selectedEs === w.es
                    ? "border-brand-500 bg-brand-50"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
              >
                {w.es}
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {englishOrder.map((en) => {
            const isMatched = Object.values(matched).includes(en);
            return (
              <button
                key={en}
                type="button"
                disabled={isMatched}
                onClick={() => handlePickEn(en)}
                className={`rounded-md border px-2 py-1.5 text-left text-sm ${
                  isMatched
                    ? "border-green-300 bg-green-50 text-green-700"
                    : wrongFlash === en
                    ? "border-red-400 bg-red-50"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
              >
                {en}
              </button>
            );
          })}
        </div>
      </div>
      {allMatched && (
        <p className="mt-3 text-sm font-medium text-green-700">
          Well done — you matched all {words.length} words!
        </p>
      )}
    </div>
  );
}

function FillInTheBlank({ vocabulary }: { vocabulary: VocabItem[] }) {
  // Randomly sample 5 words from the vocabulary pool
  const items = useMemo(() => shuffle([...vocabulary]).slice(0, 5), [vocabulary]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const isCorrect = (es: string) => normalize(answers[es] ?? "") === normalize(es);
  const correctCount = items.filter((w) => isCorrect(w.es)).length;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="font-bold text-slate-900">Vocabulary fill in the blank</h3>
      <p className="mb-3 text-sm text-slate-600">
        Type the Spanish word that matches the English meaning shown.
      </p>
      <div className="flex flex-col gap-3">
        {items.map((w) => (
          <div key={w.es}>
            <label className="text-sm text-slate-700">
              La palabra para <span className="font-semibold">&ldquo;{w.en}&rdquo;</span> es: ___
            </label>
            <input
              type="text"
              value={answers[w.es] ?? ""}
              onChange={(e) => setAnswers((prev) => ({ ...prev, [w.es]: e.target.value }))}
              onKeyDown={(e) => {
                if (e.key === "Enter") setChecked(true);
              }}
              placeholder="Escribe en español..."
              className={`mt-1 w-full rounded-md border px-2 py-1.5 text-sm outline-none focus:ring-2 focus:ring-brand-500 ${
                checked ? (isCorrect(w.es) ? "border-green-400 bg-green-50 text-green-800" : "border-red-400 bg-red-50 text-red-800") : "border-slate-200"
              }`}
            />
            {checked && !isCorrect(w.es) && (
              <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
                Correct answer: <span className="font-semibold text-slate-700">{w.es}</span>
                <button
                  type="button"
                  onClick={() => speak(w.es)}
                  aria-label={`Play pronunciation of ${w.es}`}
                  className="flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-slate-400 hover:bg-slate-200 hover:text-slate-700"
                >
                  🔊
                </button>
              </p>
            )}
          </div>
        ))}
      </div>
      <button type="button" onClick={() => setChecked(true)} className="btn-primary mt-3 px-3 py-1.5 text-xs">
        Check answers
      </button>
      {checked && (
        <p className="mt-2 text-sm font-medium text-slate-700">
          You got {correctCount} / {items.length} correct.
        </p>
      )}
    </div>
  );
}

function ThemeListeningPractice({ vocabulary }: { vocabulary: VocabItem[] }) {
  const pool = useMemo(() => shuffle([...vocabulary]), [vocabulary]);
  const [index, setIndex] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentItem = pool[index % pool.length];

  const options = useMemo(() => {
    if (!currentItem) return [];
    const wrong = vocabulary.filter((v) => v.en !== currentItem.en);
    const shuffledWrong = shuffle(wrong).slice(0, 3).map((v) => v.en);
    return shuffle([currentItem.en, ...shuffledWrong]);
  }, [currentItem, vocabulary]);

  if (!currentItem) return null;

  const playAudio = () => {
    setIsPlaying(true);
    speak(currentItem.es);
    setTimeout(() => setIsPlaying(false), 1500);
  };

  const handleSelect = (opt: string) => {
    if (checked) return;
    setSelectedOpt(opt);
  };

  const handleCheck = () => {
    if (!selectedOpt) return;
    setChecked(true);
    if (selectedOpt === currentItem.en) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    setChecked(false);
    setSelectedOpt(null);
    setIndex((i) => (i + 1) % pool.length);
  };

  const isCorrect = selectedOpt === currentItem.en;

  return (
    <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50/40 via-white to-orange-50/20 p-5 shadow-sm">
      <div className="flex items-center justify-between gap-2 border-b border-amber-100 pb-3">
        <div>
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-800">
            Audio Practice ({index + 1} / {pool.length})
          </span>
          <h3 className="mt-1 text-base font-bold text-slate-900">Theme Listening Comprehension</h3>
        </div>
        <button
          type="button"
          onClick={playAudio}
          className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition shadow-sm ${
            isPlaying ? "border-amber-400 bg-amber-100 text-amber-900 animate-pulse" : "border-amber-300 bg-white text-amber-700 hover:bg-amber-50"
          }`}
        >
          🔊 Listen ({currentItem.es})
        </button>
      </div>

      <p className="my-3 text-sm text-slate-600">
        Click the audio button to hear the Spanish term, then select its correct English meaning from the choices below:
      </p>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {options.map((opt) => {
          const isSelected = selectedOpt === opt;
          const isRight = checked && opt === currentItem.en;
          const isWrong = checked && isSelected && !isRight;

          return (
            <button
              key={opt}
              type="button"
              disabled={checked}
              onClick={() => handleSelect(opt)}
              className={`flex items-center justify-between rounded-lg border px-3.5 py-2.5 text-left text-sm font-medium transition ${
                isRight
                  ? "border-green-500 bg-green-50 text-green-900 font-bold"
                  : isWrong
                  ? "border-red-400 bg-red-50 text-red-900"
                  : isSelected
                  ? "border-amber-500 bg-amber-50 text-amber-900 font-semibold"
                  : "border-slate-200 bg-white hover:border-amber-300 hover:bg-amber-50/50 text-slate-700"
              }`}
            >
              <span>{opt}</span>
              {isRight && <span className="text-green-600 font-bold">✓</span>}
              {isWrong && <span className="text-red-500 font-bold">✗</span>}
            </button>
          );
        })}
      </div>

      {checked && (
        <div className={`mt-3 rounded-md p-2.5 text-xs font-medium ${isCorrect ? "bg-green-100 text-green-800" : "bg-rose-100 text-rose-900"}`}>
          {isCorrect ? (
            <p>¡Correcto! &ldquo;{currentItem.es}&rdquo; means &ldquo;{currentItem.en}&rdquo;.</p>
          ) : (
            <p>Incorrect. &ldquo;{currentItem.es}&rdquo; means &ldquo;{currentItem.en}&rdquo;.</p>
          )}
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500">Score: {score} listening questions correct</span>
        {!checked ? (
          <button type="button" onClick={handleCheck} disabled={!selectedOpt} className="btn-primary px-4 py-1.5 text-xs">
            Check answer
          </button>
        ) : (
          <button type="button" onClick={handleNext} className="btn-primary px-4 py-1.5 text-xs">
            Next audio question →
          </button>
        )}
      </div>
    </div>
  );
}

function ParagraphFillInTheBlank({ themeId, subtopic }: { themeId?: string; subtopic?: string | null }) {
  const exercises = useMemo(() => {
    let filtered = PARAGRAPH_EXERCISES;
    if (themeId) {
      filtered = filtered.filter((ex) => ex.themeId === themeId);
    }
    if (subtopic) {
      filtered = filtered.filter((ex) => ex.subtopic === subtopic);
    }
    return filtered.length > 0 ? filtered : PARAGRAPH_EXERCISES;
  }, [themeId, subtopic]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const currentExercise: ParagraphExercise | undefined = exercises[currentIndex % exercises.length];

  if (!currentExercise) return null;

  const isCorrect = normalize(userAnswer) === normalize(currentExercise.targetWord);

  const handleCheck = () => {
    setChecked(true);
    if (isCorrect) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    setChecked(false);
    setUserAnswer("");
    setCurrentIndex((i) => (i + 1) % exercises.length);
  };

  return (
    <div className="rounded-xl border border-brand-200 bg-gradient-to-br from-white via-brand-50/20 to-slate-50 p-5 shadow-sm">
      <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <span className="rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-700">
            Paragraph Practice ({currentIndex + 1} / {exercises.length})
          </span>
          <h3 className="mt-1 text-base font-bold text-slate-900">{currentExercise.title}</h3>
        </div>
        <button type="button" onClick={() => speak(`${currentExercise.textBefore} ${currentExercise.targetWord} ${currentExercise.textAfter}`)} className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-50">
          🔊 Escuchar párrafo
        </button>
      </div>

      <div className="my-4 rounded-lg border border-slate-200 bg-white p-4 text-slate-800 shadow-inner">
        <p className="text-base leading-relaxed">
          {currentExercise.textBefore}
          <span className="inline-block px-1">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !checked) handleCheck();
              }}
              placeholder={`[${currentExercise.translation}]`}
              disabled={checked}
              className={`min-w-[160px] rounded-md border-b-2 px-2 py-1 text-center font-bold outline-none transition ${
                checked
                  ? isCorrect
                    ? "border-green-500 bg-green-100 text-green-900"
                    : "border-red-500 bg-red-100 text-red-900"
                  : "border-brand-500 bg-brand-50/50 text-brand-900 focus:bg-white"
              }`}
            />
          </span>
          {currentExercise.textAfter}
        </p>
      </div>

      {/* Word Options / Hints */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-slate-500">Word options / Opciones:</p>
        <div className="mt-1 flex flex-wrap gap-2">
          {currentExercise.hints.map((hint) => (
            <button
              key={hint}
              type="button"
              disabled={checked}
              onClick={() => setUserAnswer(hint)}
              className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-xs hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
            >
              {hint}
            </button>
          ))}
        </div>
      </div>

      {checked && (
        <div className={`mb-4 rounded-md p-3 text-sm ${isCorrect ? "bg-green-100 text-green-800" : "bg-rose-100 text-rose-900"}`}>
          {isCorrect ? (
            <p className="font-bold">¡Excelente! Correct answer: &ldquo;{currentExercise.targetWord}&rdquo;</p>
          ) : (
            <p className="font-medium">
              Incorrect. The correct word is <strong className="underline">&ldquo;{currentExercise.targetWord}&rdquo;</strong> ({currentExercise.translation}).
            </p>
          )}
        </div>
      )}

      <div className="flex items-center justify-between">
        <p className="text-xs text-slate-500 font-medium">Completed: {score} correct in this session</p>
        {!checked ? (
          <button type="button" onClick={handleCheck} disabled={!userAnswer.trim()} className="btn-primary px-4 py-1.5 text-xs">
            Check answer
          </button>
        ) : (
          <button type="button" onClick={handleNext} className="btn-primary px-4 py-1.5 text-xs">
            Next paragraph →
          </button>
        )}
      </div>
    </div>
  );
}

import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

// Imperfect & perfect subjunctive: generated exercises. Each item becomes one multiple-choice and one typed question.
const SUBJ_ITEMS: [string, string[], string, string][] = [
  ["Si yo ___ rico, viajaría por el mundo.", ["fuera", "soy", "sea"], "fuera", "Imperfecto de subjuntivo en frases hipotéticas con 'si'."],
  ["Quería que tú ___ aquí conmigo.", ["estuvieras", "estás", "estés"], "estuvieras", "Querer que (pasado) + imperfecto de subjuntivo."],
  ["Era importante que ___ a tiempo.", ["llegáramos", "llegamos", "llegaremos"], "llegáramos", "Era importante que (pasado) → imperfecto de subjuntivo."],
  ["No creía que ellos ___ la verdad.", ["dijeran", "dicen", "digan"], "dijeran", "No creer que (pasado) → imperfecto de subjuntivo (irregular: dijeran)."],
  ["Pidió que le ___ la verdad.", ["dijeran", "dicen", "digan"], "dijeran", "Pedir que (pasado) → imperfecto de subjuntivo."],
  ["Espero que ___ bien el examen.", ["hayas hecho", "has hecho", "hubieras hecho"], "hayas hecho", "Pretérito perfecto de subjuntivo: haya + participio, con verbo principal en presente."],
  ["Me alegro de que ___ el trabajo.", ["hayas terminado", "has terminado", "hubieras terminado"], "hayas terminado", "Alegrarse de que + perfecto de subjuntivo."],
  ["Dudo que ___ la carta.", ["hayan recibido", "han recibido", "hubieran recibido"], "hayan recibido", "Dudar que + perfecto de subjuntivo."],
  ["Ojalá ___ más tiempo ayer.", ["hubiera tenido", "había tenido", "tenga"], "hubiera tenido", "Ojalá + pluscuamperfecto de subjuntivo = 'if only I had had'."],
  ["Si ___ más tiempo, habría ido.", ["hubiera tenido", "tenía", "tuviera"], "hubiera tenido", "Condicional pasado: si + pluscuamperfecto de subjuntivo."],
];

export const SUBJ_EXERCISES: GrammarExercise[] = (() => {
  const exercises: GrammarExercise[] = [];
  let n = 1;
  SUBJ_ITEMS.forEach(([prompt, options, answer, tip], i) => {
    exercises.push({ id: `sub-${n++}`, type: "mcq", prompt: `Elige la forma correcta: "${prompt}"`, options: shuffleFixed(options, i * 3 + 1), correctAnswer: answer, tip });
    exercises.push({ id: `sub-${n++}`, type: "short", prompt: `Escribe la palabra que completa la frase: "${prompt}"`, correctAnswer: answer, tip });
  });
  return exercises;
})();

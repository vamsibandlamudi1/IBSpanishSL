import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

// Question words & por qué: generated exercises. Each item becomes one multiple-choice and one typed question.
const QWORDS_ITEMS: [string, string[], string, string][] = [
  ["¿___ vives?", ["Dónde", "Cuándo", "Cómo"], "Dónde", "¿Dónde? = where."],
  ["¿___ llegas? ¿A las ocho?", ["Cuándo", "Dónde", "Cuánto"], "Cuándo", "¿Cuándo? = when."],
  ["¿___ cuesta el billete?", ["Cuánto", "Cuántos", "Cómo"], "Cuánto", "¿Cuánto? (singular) = how much."],
  ["¿___ personas hay en tu familia?", ["Cuántas", "Cuánto", "Cuál"], "Cuántas", "Cuántas concuerda con 'personas' (femenino plural)."],
  ["¿___ es el autor de este libro?", ["Quién", "Qué", "Cuál"], "Quién", "¿Quién? = who (persons)."],
  ["¿___ quieres: té o café?", ["Cuál", "Qué", "Quién"], "Cuál", "¿Cuál? = which one, when choosing."],
  ["¿___ estudias español?", ["Por qué", "Porque", "Porqué"], "Por qué", "¿Por qué? = why (dos palabras)."],
  ["No sé ___ llegó tarde.", ["por qué", "porque", "porqué"], "por qué", "'No sé por qué' = I don't know why."],
  ["Llegó tarde ___ había mucho tráfico.", ["porque", "por qué", "porqué"], "porque", "'Porque' responde al por qué: causa."],
  ["¿___ vienes conmigo?", ["Con quién", "Con qué", "Qué con"], "Con quién", "¿Con quién? = with whom (personas)."],
];

export const QWORDS_EXERCISES: GrammarExercise[] = (() => {
  const exercises: GrammarExercise[] = [];
  let n = 1;
  QWORDS_ITEMS.forEach(([prompt, options, answer, tip], i) => {
    exercises.push({ id: `qw-${n++}`, type: "mcq", prompt: `Elige la forma correcta: "${prompt}"`, options: shuffleFixed(options, i * 3 + 1), correctAnswer: answer, tip });
    exercises.push({ id: `qw-${n++}`, type: "short", prompt: `Escribe la palabra que completa la frase: "${prompt}"`, correctAnswer: answer, tip });
  });
  return exercises;
})();

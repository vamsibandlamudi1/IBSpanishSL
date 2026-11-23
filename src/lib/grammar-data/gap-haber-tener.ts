import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

// Haber vs. tener: generated exercises. Each item becomes one multiple-choice and one typed question.
const HABER_ITEMS: [string, string[], string, string][] = [
  ["___ muchos problemas en la ciudad.", ["Hay", "Tiene", "Han"], "Hay", "'Hay' = there is/are, no cambia."],
  ["Yo ___ dos hermanos.", ["tengo", "hay", "he"], "tengo", "Tener = tener (yo tengo)."],
  ["¿___ un banco cerca de aquí?", ["Hay", "Tiene", "Tienen"], "Hay", "Existencia → hay."],
  ["Ellos ___ una casa muy grande.", ["tienen", "hay", "han"], "tienen", "Posesión con 'ellos' → tienen."],
  ["___ que estudiar más para el examen.", ["Hay", "Tiene", "Tener"], "Hay", "'Hay que' + infinitivo = es necesario."],
  ["Nosotros ___ visto esa película.", ["hemos", "tenemos", "hay"], "hemos", "Haber como auxiliar: hemos visto."],
  ["Mi madre ___ mucha paciencia.", ["tiene", "hay", "ha"], "tiene", "Posesión: tener."],
  ["¿Cuántos años ___ tu hermano?", ["tiene", "hay", "ha"], "tiene", "Tener años = to be (age)."],
  ["En el parque ___ muchos niños.", ["hay", "tiene", "tienen"], "hay", "Existencia en un lugar → hay."],
  ["Tú ___ razón.", ["tienes", "hay", "has"], "tienes", "Tener razón = to be right; tú tienes."],
];

export const HABER_EXERCISES: GrammarExercise[] = (() => {
  const exercises: GrammarExercise[] = [];
  let n = 1;
  HABER_ITEMS.forEach(([prompt, options, answer, tip], i) => {
    exercises.push({ id: `hab-${n++}`, type: "mcq", prompt: `Elige la forma correcta: "${prompt}"`, options: shuffleFixed(options, i * 3 + 1), correctAnswer: answer, tip });
    exercises.push({ id: `hab-${n++}`, type: "short", prompt: `Escribe la palabra que completa la frase: "${prompt}"`, correctAnswer: answer, tip });
  });
  return exercises;
})();

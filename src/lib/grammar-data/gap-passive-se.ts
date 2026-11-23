import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

// Passive & 'se' impersonal: generated exercises. Each item becomes one multiple-choice and one typed question.
const PASSIVE_ITEMS: [string, string[], string, string][] = [
  ["La carta ___ escrita por mi abuela.", ["fue", "estuvo", "era"], "fue", "Voz pasiva: ser + participio (concuerda con 'la carta')."],
  ["En muchos países se ___ español.", ["habla", "hablan", "habló"], "habla", "Se impersonal + 3.ª persona singular ('español' es singular)."],
  ["En España se ___ mucha paella.", ["come", "comen", "comió"], "come", "Se impersonal: el verbo va en singular con 'paella'."],
  ["Los libros ___ publicados en 1990.", ["fueron", "fue", "estuvieron"], "fueron", "Pasiva: 'fueron' concuerda con 'los libros' (plural)."],
  ["Se ___ las puertas a las ocho.", ["abren", "abre", "abierto"], "abren", "Se + verbo en plural porque 'las puertas' es plural."],
  ["La casa ___ construida en 1950.", ["fue", "fueron", "estuvo"], "fue", "Pasiva con sujeto singular: fue construida."],
  ["Se ___ que el tiempo cambiará mañana.", ["dice", "dicen", "dijo"], "dice", "Se impersonal: 'se dice' (se dice que...)."],
  ["Estos problemas ___ resueltos por el equipo.", ["fueron", "fue", "estuvieron"], "fueron", "Pasiva con sujeto plural."],
  ["Se ___ mucha gente en la plaza.", ["ve", "ven", "vio"], "ve", "Se impersonal con 'mucha gente' (se ve mucha gente)."],
  ["Las ventanas ___ cerradas ayer por la noche.", ["fueron", "fue", "estaban"], "fueron", "Pasiva con sujeto plural: fueron cerradas."],
];

export const PASSIVE_EXERCISES: GrammarExercise[] = (() => {
  const exercises: GrammarExercise[] = [];
  let n = 1;
  PASSIVE_ITEMS.forEach(([prompt, options, answer, tip], i) => {
    exercises.push({ id: `pas-${n++}`, type: "mcq", prompt: `Elige la forma correcta: "${prompt}"`, options: shuffleFixed(options, i * 3 + 1), correctAnswer: answer, tip });
    exercises.push({ id: `pas-${n++}`, type: "short", prompt: `Escribe la palabra que completa la frase: "${prompt}"`, correctAnswer: answer, tip });
  });
  return exercises;
})();

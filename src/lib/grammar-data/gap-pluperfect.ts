import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

// Pluperfect (Pluscuamperfecto): generated exercises. Each item becomes one multiple-choice and one typed question.
const PLUPERFECT_ITEMS: [string, string[], string, string][] = [
  ["Cuando llegué a la estación, el tren ya ___ salido.", ["había", "ha", "fue"], "había", "Pluscuamperfecto: había + participio = algo terminado antes de otra acción pasada."],
  ["Nunca ___ sentido tanto calor antes.", ["había", "he", "hubo"], "había", "Con 'nunca' y una acción anterior a otra pasada, se usa el pluscuamperfecto."],
  ["Ellos ya ___ preparado la cena cuando llegamos.", ["habían", "han", "hubieron"], "habían", "Para 'ellos' la forma es 'habían'."],
  ["Yo ya ___ terminado el libro cuando me lo pediste.", ["había", "he", "hubo"], "había", "Yo: había + participio."],
  ["Tú ___ vivido en esa ciudad antes de 2010.", ["habías", "has", "hubiste"], "habías", "Tú: habías + participio."],
  ["Nosotros ___ visto la película antes de la clase.", ["habíamos", "hemos", "hubimos"], "habíamos", "Nosotros: habíamos + participio."],
  ["Ella ___ escrito la carta antes de salir.", ["había", "ha", "hubo"], "había", "Acción completada antes de 'salir' (pasado)."],
  ["Vosotros ya ___ comido cuando yo llegué.", ["habíais", "habéis", "habías"], "habíais", "Vosotros: habíais + participio."],
  ["Mis padres ___ vivido en España antes de mudarse aquí.", ["habían", "han", "hubieron"], "habían", "Pasado anterior a 'mudarse'."],
  ["Cuando llamé, ya te ___ dicho la verdad.", ["había", "he", "hube"], "había", "Lo dicho ya estaba hecho antes de la llamada."],
];

export const PLUPERFECT_EXERCISES: GrammarExercise[] = (() => {
  const exercises: GrammarExercise[] = [];
  let n = 1;
  PLUPERFECT_ITEMS.forEach(([prompt, options, answer, tip], i) => {
    exercises.push({ id: `plu-${n++}`, type: "mcq", prompt: `Elige la forma correcta: "${prompt}"`, options: shuffleFixed(options, i * 3 + 1), correctAnswer: answer, tip });
    exercises.push({ id: `plu-${n++}`, type: "short", prompt: `Escribe la palabra que completa la frase: "${prompt}"`, correctAnswer: answer, tip });
  });
  return exercises;
})();

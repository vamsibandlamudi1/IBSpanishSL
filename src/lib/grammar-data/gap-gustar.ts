import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

// Gustar & similar verbs: generated exercises. Each item becomes one multiple-choice and one typed question.
const GUSTAR_ITEMS: [string, string[], string, string][] = [
  ["A mí ___ el fútbol.", ["me gusta", "me gustan", "gusta"], "me gusta", "Singular 'el fútbol' → gusta; 'me' = a mí."],
  ["A nosotros ___ las películas.", ["nos gustan", "nos gusta", "gustamos"], "nos gustan", "Plural 'las películas' → gustan."],
  ["¿A ti te ___ bailar?", ["gusta", "gustas", "gustan"], "gusta", "Infinitivo (bailar) = singular → gusta."],
  ["A ellos ___ los deportes.", ["les gustan", "les gusta", "les gustamos"], "les gustan", "Plural 'los deportes' → gustan; 'les' = a ellos."],
  ["A mi hermana le ___ leer.", ["gusta", "gustan", "gustas"], "gusta", "Infinitivo → singular."],
  ["Me ___ los perros y los gatos.", ["encantan", "encanta", "encantamos"], "encantan", "Encantar concuerda con el sujeto plural (perros y gatos)."],
  ["Nos ___ viajar en tren.", ["encanta", "encantan", "encantas"], "encanta", "Infinitivo → singular."],
  ["¿Os ___ el café?", ["gusta", "gustan", "gustáis"], "gusta", "Singular 'el café' → gusta."],
  ["¿A usted le ___ la música clásica?", ["gusta", "gustan", "gusto"], "gusta", "Singular 'la música' → gusta."],
  ["Me ___ mucho las matemáticas.", ["interesan", "interesa", "interesamos"], "interesan", "Interesar: sujeto plural 'las matemáticas' → interesan."],
];

export const GUSTAR_EXERCISES: GrammarExercise[] = (() => {
  const exercises: GrammarExercise[] = [];
  let n = 1;
  GUSTAR_ITEMS.forEach(([prompt, options, answer, tip], i) => {
    exercises.push({ id: `gus-${n++}`, type: "mcq", prompt: `Elige la forma correcta: "${prompt}"`, options: shuffleFixed(options, i * 3 + 1), correctAnswer: answer, tip });
    exercises.push({ id: `gus-${n++}`, type: "short", prompt: `Escribe la palabra que completa la frase: "${prompt}"`, correctAnswer: answer, tip });
  });
  return exercises;
})();

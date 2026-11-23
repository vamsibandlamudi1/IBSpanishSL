import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

// Reported speech (Estilo indirecto): generated exercises. Each item becomes one multiple-choice and one typed question.
const REPORTED_ITEMS: [string, string[], string, string][] = [
  ["Ella dijo que ___ cansada.", ["estaba", "está", "estuvo"], "estaba", "Presente → imperfecto en estilo indirecto."],
  ["Él dijo que ___ al día siguiente.", ["vendría", "vendrá", "viene"], "vendría", "Futuro → condicional al pasar a estilo indirecto."],
  ["Mi madre me preguntó dónde ___.", ["estaba", "está", "estuvo"], "estaba", "La pregunta en presente pasa a imperfecto."],
  ["Dijeron que ___ llegado a casa.", ["habían", "han", "hubieron"], "habían", "Pretérito perfecto → pluscuamperfecto."],
  ["Ella me dijo que me ___ luego.", ["llamaría", "llamará", "llama"], "llamaría", "Futuro → condicional."],
  ["Él dijo que no ___ dinero.", ["tenía", "tiene", "tuvo"], "tenía", "Presente → imperfecto."],
  ["Preguntó qué ___ para cenar.", ["quería", "quiere", "quisiera"], "quería", "Presente → imperfecto."],
  ["Nos dijo que ___ más para el examen.", ["estudiáramos", "estudiábamos", "estudiamos"], "estudiáramos", "Imperativo → 'que' + subjuntivo en estilo indirecto."],
  ["Me dijo que ___ allí a las ocho.", ["fuera", "va", "iba"], "fuera", "Orden indirecta: 'que' + subjuntivo (imperfecto de subjuntivo tras un verbo en pasado)."],
  ["Ellos dijeron que ___ muy contentos.", ["estaban", "están", "estuvieron"], "estaban", "Presente → imperfecto."],
];

export const REPORTED_EXERCISES: GrammarExercise[] = (() => {
  const exercises: GrammarExercise[] = [];
  let n = 1;
  REPORTED_ITEMS.forEach(([prompt, options, answer, tip], i) => {
    exercises.push({ id: `rep-${n++}`, type: "mcq", prompt: `Elige la forma correcta: "${prompt}"`, options: shuffleFixed(options, i * 3 + 1), correctAnswer: answer, tip });
    exercises.push({ id: `rep-${n++}`, type: "short", prompt: `Escribe la palabra que completa la frase: "${prompt}"`, correctAnswer: answer, tip });
  });
  return exercises;
})();

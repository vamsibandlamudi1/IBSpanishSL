import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

// Spoken phrases for the Individual Oral discussion.
const ORAL_PHRASES_ITEMS: [string, string[], string, string][] = [
  ["Para dar tu opinión en la conversación, puedes decir:", ["En mi opinión", "Eso es todo", "Me da igual"], "En mi opinión", "Introducir la opinión con una expresión clara muestra control del idioma."],
  ["Para no estar de acuerdo con educación, dices:", ["Entiendo tu punto, pero", "¡Qué tontería!", "Eso es falso."], "Entiendo tu punto, pero", "Reconocer la idea del otro antes de discrepar es lo que valora el examinador."],
  ["Si necesitas tiempo para pensar, puedes decir:", ["Es una buena pregunta, déjame pensar", "Ni idea", "No sé nada"], "Es una buena pregunta, déjame pensar", "Ganar un momento con una frase natural es mejor que quedarte en silencio."],
  ["Para pedir que repitan la pregunta, dices:", ["¿Puede repetir, por favor?", "¿Qué?", "Otra vez"], "¿Puede repetir, por favor?", "Una petición educada es lo adecuado en un examen oral."],
  ["Para añadir un ejemplo, dices:", ["Por ejemplo", "Pues sí", "Y ya"], "Por ejemplo", "Los ejemplos concretos suben la nota de contenido."],
  ["Para mostrar que estás de acuerdo, dices:", ["Estoy totalmente de acuerdo", "Lo que sea", "Vale, ya"], "Estoy totalmente de acuerdo", "Expresar acuerdo y después añadir una razón da más desarrollo."],
  ["Para comparar dos ideas o fotos, dices:", ["Por un lado", "Uno es bueno y otro malo", "Este y ese"], "Por un lado", "'Por un lado... por otro lado' organiza una comparación."],
  ["Para hablar de una experiencia personal, empiezas con:", ["Cuando yo tenía diez años", "Yo nunca hago nada", "Mi vida es aburrida"], "Cuando yo tenía diez años", "Usar el pasado con una experiencia real demuestra el tiempo verbal."],
  ["Para expresar una duda, dices:", ["Me pregunto si", "Es evidente que no", "Seguro que sí"], "Me pregunto si", "Expresar duda es una función pedida en la conversación."],
  ["Para cambiar de tema con educación, dices:", ["Hablando de otra cosa", "Cállate", "Ya basta"], "Hablando de otra cosa", "Los conectores de transición mantienen la conversación fluida."],
  ["Para expresar una consecuencia en tu discurso, dices:", ["Como resultado", "Porque sí", "Me da igual"], "Como resultado", "Conectar causa y consecuencia muestra un argumento razonado."],
  ["Para preguntar al examinador con cortesía, dices:", ["¿Le importaría si...?", "¿Y tú qué?", "Vale, ¿no?"], "¿Le importaría si...?", "Las preguntas formales con condicional suenan respetuosas."],
];

export const ORAL_PHRASES_EXERCISES: GrammarExercise[] = (() => {
  const exercises: GrammarExercise[] = [];
  let n = 1;
  ORAL_PHRASES_ITEMS.forEach(([prompt, options, answer, tip], i) => {
    exercises.push({ id: `oral-${n++}`, type: "mcq", prompt: `Elige la expresión correcta: "${prompt}"`, options: shuffleFixed(options, i * 3 + 1), correctAnswer: answer, tip });
    exercises.push({ id: `oral-${n++}`, type: "short", prompt: `Escribe la expresión que completa la frase: "${prompt}"`, correctAnswer: answer, tip });
  });
  return exercises;
})();

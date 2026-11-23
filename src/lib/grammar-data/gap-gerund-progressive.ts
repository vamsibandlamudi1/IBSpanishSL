import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

// Gerund & progressive (-ndo): generated exercises. Each item becomes one multiple-choice and one typed question.
const GERUND_ITEMS: [string, string[], string, string][] = [
  ["Ahora mismo estoy ___ para el examen.", ["estudiando", "estudiado", "estudiar"], "estudiando", "Estar + gerundio = acción en curso."],
  ["Los niños siguen ___ la comida.", ["comiendo", "comido", "comer"], "comiendo", "Seguir + gerundio = continuar haciendo algo."],
  ["Mi hermana está ___ un libro.", ["leyendo", "leído", "leer"], "leyendo", "Gerundio irregular: leer → leyendo."],
  ["Llevamos dos horas ___.", ["esperando", "esperado", "esperar"], "esperando", "Llevar + tiempo + gerundio = duración hasta ahora."],
  ["¿Qué estás ___?", ["haciendo", "hecho", "hacer"], "haciendo", "Hacer → haciendo."],
  ["Mi abuela está ___ en el sofá.", ["durmiendo", "dormida", "dormir"], "durmiendo", "Gerundio irregular: dormir → durmiendo (o → u)."],
  ["Estoy ___ una canción nueva.", ["escuchando", "escuchado", "escuchar"], "escuchando", "Regular: escuchar → escuchando."],
  ["El camarero está ___ la cuenta.", ["pidiendo", "pedido", "pedir"], "pidiendo", "Cambio e → i en el gerundio: pedir → pidiendo."],
  ["Estamos ___ al cine esta tarde.", ["yendo", "ido", "ir"], "yendo", "Gerundio irregular: ir → yendo."],
  ["Los alumnos siguen ___ el examen.", ["escribiendo", "escribido", "escribir"], "escribiendo", "Seguir + gerundio."],
];

export const GERUND_EXERCISES: GrammarExercise[] = (() => {
  const exercises: GrammarExercise[] = [];
  let n = 1;
  GERUND_ITEMS.forEach(([prompt, options, answer, tip], i) => {
    exercises.push({ id: `ger-${n++}`, type: "mcq", prompt: `Elige la forma correcta: "${prompt}"`, options: shuffleFixed(options, i * 3 + 1), correctAnswer: answer, tip });
    exercises.push({ id: `ger-${n++}`, type: "short", prompt: `Escribe la palabra que completa la frase: "${prompt}"`, correctAnswer: answer, tip });
  });
  return exercises;
})();

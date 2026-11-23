import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

// Text-type conventions (greetings, sign-offs, register) for Paper 1 writing, Criterion C.
const REGISTER_ITEMS: [string, string[], string, string][] = [
  ["Escribes una carta formal a un director. ¿Cómo empiezas?", ["¡Hola, amigo!", "Estimado director:", "¡Qué tal!"], "Estimado director:", "Las cartas formales empiezan con 'Estimado/a' + título."],
  ["¿Cómo terminas una carta formal?", ["Atentamente", "Un abrazo", "¡Chao!"], "Atentamente", "'Atentamente' es un cierre formal; 'Un abrazo' es informal."],
  ["Escribes un correo informal a un amigo. ¿Cómo lo cierras?", ["Un abrazo,", "Cordialmente,", "Respetuosamente,"], "Un abrazo,", "Con un amigo se usa un cierre cálido e informal."],
  ["En un correo formal, ¿qué forma de tratamiento usas?", ["usted", "tú", "vosotros"], "usted", "En registro formal se usa 'usted' (y su forma verbal)."],
  ["Para pedir algo con cortesía en una carta formal, escribes:", ["Le agradecería si pudiera", "Dame esto ya", "Quiero que me des"], "Le agradecería si pudiera", "El condicional y el subjuntivo suavizan la petición."],
  ["Escribes un diario personal. ¿Cómo empiezas la entrada?", ["Querido diario,", "Estimado diario:", "Señor diario:"], "Querido diario,", "El diario se dirige a sí mismo, con un tono personal."],
  ["Para empezar un discurso en clase, dices:", ["Buenos días a todos", "Querido diario", "Hola, ¿qué tal?"], "Buenos días a todos", "Un discurso se dirige al público con un saludo formal."],
  ["Para terminar un discurso, dices:", ["Muchas gracias por su atención", "Adiós y nos vemos", "Ya no tengo nada que decir"], "Muchas gracias por su atención", "Los discursos terminan agradeciendo al público."],
  ["Para introducir tu opinión en un ensayo formal, escribes:", ["A mi modo de ver,", "Pues yo creo que sí,", "Me da igual,"], "A mi modo de ver,", "Un ensayo usa expresiones impersonales y formales para opinar."],
  ["Una postal de vacaciones suele empezar con:", ["¡Saludos desde...!", "Estimado Sr.:", "Introducción:"], "¡Saludos desde...!", "La postal es breve, informal y describe el lugar."],
  ["Un artículo de revista necesita sobre todo:", ["Un titular claro e informativo", "Una pregunta personal", "Muchos emojis"], "Un titular claro e informativo", "Los artículos empiezan con un titular que resume la noticia."],
  ["Un informe oficial se caracteriza por:", ["Un tono impersonal y datos concretos", "Emojis y exclamaciones", "Un diario personal"], "Un tono impersonal y datos concretos", "Los informes son objetivos y se basan en datos."],
  ["Para dar instrucciones (una receta o una guía), se usa sobre todo:", ["El imperativo", "El pretérito", "El condicional de cortesía"], "El imperativo", "Las instrucciones dan órdenes directas: 'Mezcla', 'Añade'."],
  ["Un anuncio publicitario busca sobre todo:", ["Captar la atención con un eslogan breve", "Explicar la historia completa", "Ser muy largo"], "Captar la atención con un eslogan breve", "Los anuncios son breves y persuasivos."],
  ["En una entrevista escrita, las preguntas suelen ir:", ["En forma de pregunta directa con ¿?", "Como lista de la compra", "Sin signos de puntuación"], "En forma de pregunta directa con ¿?", "Las entrevistas usan preguntas directas y respuestas del entrevistado."],
  ["Para el cierre de una carta formal dirigida a alguien, escribes:", ["Le saluda atentamente", "Adiós, hasta luego", "Besitos"], "Le saluda atentamente", "Es el cierre formal habitual en cartas oficiales."],
];

export const REGISTER_EXERCISES: GrammarExercise[] = (() => {
  const exercises: GrammarExercise[] = [];
  let n = 1;
  REGISTER_ITEMS.forEach(([prompt, options, answer, tip], i) => {
    exercises.push({ id: `reg-${n++}`, type: "mcq", prompt: `Elige la expresión correcta: "${prompt}"`, options: shuffleFixed(options, i * 3 + 1), correctAnswer: answer, tip });
    exercises.push({ id: `reg-${n++}`, type: "short", prompt: `Escribe la expresión que completa la frase: "${prompt}"`, correctAnswer: answer, tip });
  });
  return exercises;
})();

import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

// Essay connectors for Paper 1 writing and Paper 2 reading.
const CONNECTORS_ITEMS: [string, string[], string, string][] = [
  ["Me gusta leer; ___, no me gusta ver la televisión.", ["en cambio", "además", "por lo tanto"], "en cambio", "'En cambio' introduce un contraste entre dos ideas."],
  ["Estudié mucho; ___, saqué una buena nota.", ["por lo tanto", "sin embargo", "aunque"], "por lo tanto", "'Por lo tanto' expresa consecuencia: lo primero causa lo segundo."],
  ["___ llueve, salimos a pasear.", ["Aunque", "Porque", "Además"], "Aunque", "'Aunque' + indicativo introduce una concesión: 'even though'."],
  ["___ el transporte es caro, es muy cómodo.", ["Sin embargo", "Por eso", "Además"], "Sin embargo", "'Sin embargo' marca un contraste fuerte: 'however'."],
  ["Es divertido; ___ lado, es muy caro.", ["por otro", "de nuevo", "en primer lugar"], "por otro", "Para comparar dos lados: 'por un lado... por otro lado'."],
  ["___ todo, la salud es lo más importante.", ["Sobre todo", "Al final", "Por ejemplo"], "Sobre todo", "'Sobre todo' destaca lo más importante: 'above all'."],
  ["Hay muchos problemas ambientales; ___, la contaminación del aire.", ["por ejemplo", "sin embargo", "en conclusión"], "por ejemplo", "'Por ejemplo' introduce un ejemplo concreto."],
  ["___ concluir, creo que debemos actuar ya.", ["En conclusión", "En primer lugar", "Por ejemplo"], "En conclusión", "'En conclusión' introduce el cierre del texto."],
  ["___ lugar, hay que reducir el consumo de plástico.", ["En primer lugar", "Finalmente", "Además"], "En primer lugar", "'En primer lugar' organiza los argumentos en orden."],
  ["___ que es caro, lo compro porque lo necesito.", ["A pesar de", "Por eso", "Además"], "A pesar de", "'A pesar de que' + indicativo: 'despite the fact that'."],
  ["Llegó tarde ___ el tráfico estaba terrible.", ["porque", "pero", "aunque"], "porque", "'Porque' explica la causa."],
  ["Quiero ir al cine, ___ estoy cansado.", ["pero", "por lo tanto", "además"], "pero", "'Pero' introduce una objeción a lo anterior."],
  ["Es importante reciclar; ___, reduce la basura.", ["además", "sin embargo", "en cambio"], "además", "'Además' añade un argumento más a favor."],
  ["___ los jóvenes usan redes sociales, muchos adultos también.", ["Mientras que", "Por lo tanto", "Así que"], "Mientras que", "'Mientras que' compara dos grupos: 'whereas'."],
  ["No solo es barato, ___ también es sano.", ["sino también", "sin embargo", "por lo tanto"], "sino también", "'No solo... sino también' = 'not only... but also'."],
  ["Me acosté tarde; ___, estoy muy cansada hoy.", ["por eso", "aunque", "además"], "por eso", "'Por eso' expresa consecuencia: 'that's why'."],
  ["Muchas personas no tienen acceso a la educación. ___, el gobierno debe actuar.", ["Por eso", "Aunque", "En cambio"], "Por eso", "'Por eso' conecta una causa con su consecuencia."],
  ["Me encanta viajar; ___, mi hermana prefiere quedarse en casa.", ["en cambio", "además", "por eso"], "en cambio", "'En cambio' contrasta gustos: 'on the other hand'."],
];

export const CONNECTORS_EXERCISES: GrammarExercise[] = (() => {
  const exercises: GrammarExercise[] = [];
  let n = 1;
  CONNECTORS_ITEMS.forEach(([prompt, options, answer, tip], i) => {
    exercises.push({ id: `conn-${n++}`, type: "mcq", prompt: `Elige la expresión correcta: "${prompt}"`, options: shuffleFixed(options, i * 3 + 1), correctAnswer: answer, tip });
    exercises.push({ id: `conn-${n++}`, type: "short", prompt: `Escribe la expresión que completa la frase: "${prompt}"`, correctAnswer: answer, tip });
  });
  return exercises;
})();

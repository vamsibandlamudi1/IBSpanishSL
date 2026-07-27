import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

interface FalseCognate {
  es: string;
  trueMeaning: string;
  falseMeaning: string;
  sentence: string;
}

// 30 classic IB-relevant "falsos amigos" — words that look like an English
// word but mean something else. One hand-written example sentence per word;
// the generator below multiplies each into several question styles using
// deterministic (non-random) distractor picks from neighboring words in this
// same list, so results are reproducible and every loop is bounded by this
// fixed-length array — no risk of the infinite-loop class of bug the
// present-tense generator originally had.
const COGNATES: FalseCognate[] = [
  { es: "embarazada", trueMeaning: "pregnant", falseMeaning: "embarrassed", sentence: "Mi hermana está embarazada de seis meses." },
  { es: "realizar", trueMeaning: "to carry out / achieve", falseMeaning: "to realize", sentence: "El equipo va a realizar el proyecto este verano." },
  { es: "éxito", trueMeaning: "success", falseMeaning: "exit", sentence: "La película fue un gran éxito en todo el mundo." },
  { es: "fábrica", trueMeaning: "factory", falseMeaning: "fabric", sentence: "Mi padre trabaja en una fábrica de coches." },
  { es: "sopa", trueMeaning: "soup", falseMeaning: "soap", sentence: "De primer plato, tomamos sopa de verduras." },
  { es: "pie", trueMeaning: "foot", falseMeaning: "pie (dessert)", sentence: "Me duele mucho el pie derecho." },
  { es: "red", trueMeaning: "network", falseMeaning: "red (color)", sentence: "Necesito conectar mi ordenador a la red wifi." },
  { es: "campo", trueMeaning: "field / countryside", falseMeaning: "camp", sentence: "Pasamos el verano en el campo con mis abuelos." },
  { es: "sensible", trueMeaning: "sensitive", falseMeaning: "sensible", sentence: "Es una persona muy sensible; llora con las películas tristes." },
  { es: "largo", trueMeaning: "long", falseMeaning: "large", sentence: "El río Amazonas es muy largo." },
  { es: "constipado", trueMeaning: "has a cold", falseMeaning: "constipated", sentence: "No puedo salir hoy porque estoy constipado." },
  { es: "asistir", trueMeaning: "to attend", falseMeaning: "to assist", sentence: "Voy a asistir a la reunión mañana." },
  { es: "recordar", trueMeaning: "to remember", falseMeaning: "to record", sentence: "Siempre recuerdo mi primer día de clase." },
  { es: "carpeta", trueMeaning: "folder", falseMeaning: "carpet", sentence: "Guardé los documentos en una carpeta azul." },
  { es: "lectura", trueMeaning: "reading", falseMeaning: "lecture", sentence: "La lectura es mi actividad favorita los domingos." },
  { es: "molestar", trueMeaning: "to bother", falseMeaning: "to molest", sentence: "No quiero molestarte, pero necesito tu ayuda." },
  { es: "decepción", trueMeaning: "disappointment", falseMeaning: "deception", sentence: "Fue una gran decepción no ganar el premio." },
  { es: "idioma", trueMeaning: "language", falseMeaning: "idiom", sentence: "El español es un idioma muy hablado en el mundo." },
  { es: "suceso", trueMeaning: "event", falseMeaning: "success", sentence: "El periódico informó sobre el suceso ocurrido anoche." },
  { es: "actual", trueMeaning: "current / present-day", falseMeaning: "actual", sentence: "El actual presidente lleva dos años en el cargo." },
  { es: "pretender", trueMeaning: "to intend / try to", falseMeaning: "to pretend", sentence: "Pretendo terminar mis estudios el año que viene." },
  { es: "introducir", trueMeaning: "to insert / bring in", falseMeaning: "to introduce (a person)", sentence: "Vamos a introducir un nuevo producto al mercado." },
  { es: "argumento", trueMeaning: "plot (of a story)", falseMeaning: "argument (fight)", sentence: "El argumento de la película es muy original." },
  { es: "colegio", trueMeaning: "school (K-12)", falseMeaning: "college", sentence: "Mis hijos van a un colegio cerca de casa." },
  { es: "contestar", trueMeaning: "to answer", falseMeaning: "to contest", sentence: "Voy a contestar todas las preguntas del examen." },
  { es: "disgusto", trueMeaning: "annoyance / upset", falseMeaning: "disgust", sentence: "Se llevó un disgusto cuando perdió las llaves." },
  { es: "importar", trueMeaning: "to matter / be important", falseMeaning: "to import (a product)", sentence: "No me importa la hora a la que llegues." },
  { es: "librería", trueMeaning: "bookstore", falseMeaning: "library", sentence: "Compré este libro en la librería del centro." },
  { es: "simpático", trueMeaning: "nice / friendly", falseMeaning: "sympathetic", sentence: "Mi profesor de historia es muy simpático." },
  { es: "vaso", trueMeaning: "drinking glass", falseMeaning: "vase", sentence: "¿Me puedes traer un vaso de agua?" },
];

const CONTEXT_TEMPLATES = [
  (w: FalseCognate) => `En la frase: "${w.sentence}", ¿qué significa la palabra "${w.es}"?`,
  (w: FalseCognate) => `¿Cuál es el significado de "${w.es}" en este contexto: "${w.sentence}"?`,
  (w: FalseCognate) => `Lee la oración: "${w.sentence}". ¿Qué quiere decir "${w.es}" aquí?`,
  (w: FalseCognate) => `¡Ojo con los falsos amigos! En "${w.sentence}", "${w.es}" significa...`,
];

/** The short-answer question requires the student to type the meaning, so it
 *  needs a single clean phrase — trueMeaning sometimes carries a "/"
 *  alternative or a parenthetical clarifier for the MCQ options, which would
 *  make typed grading unreasonably strict. This strips those down to the
 *  primary phrase (e.g. "to carry out / achieve" → "to carry out"). */
function primaryMeaning(meaning: string): string {
  return meaning.split(" / ")[0].replace(/\s*\(.*?\)\s*$/, "").trim();
}

function createFalseCognates(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  let idCounter = 1;
  const n = COGNATES.length;

  const push = (type: "mcq" | "short", prompt: string, correctAnswer: string, options: string[] | undefined, tip: string) => {
    exercises.push({ id: `fc-${idCounter++}`, type, prompt, ...(options ? { options } : {}), correctAnswer, tip });
  };

  COGNATES.forEach((word, i) => {
    const distractor1 = COGNATES[(i + 5) % n].trueMeaning;
    const distractor2 = COGNATES[(i + 13) % n].trueMeaning;

    // 4 "meaning in context" MCQ variants, different phrasing each time.
    CONTEXT_TEMPLATES.forEach((template, ti) => {
      const options = shuffleFixed([word.trueMeaning, word.falseMeaning, distractor1, distractor2], i * 4 + ti);
      push(
        "mcq",
        template(word),
        word.trueMeaning,
        options,
        `"${word.es}" es un falso amigo: parece significar "${word.falseMeaning}" en inglés, pero en realidad significa "${word.trueMeaning}".`
      );
    });

    // 2 "reverse" MCQ variants: given the meaning, pick the Spanish word.
    const otherWord1 = COGNATES[(i + 7) % n].es;
    const otherWord2 = COGNATES[(i + 19) % n].es;
    push(
      "mcq",
      `¿Qué palabra en español significa "${word.trueMeaning}"?`,
      word.es,
      shuffleFixed([word.es, otherWord1, otherWord2, COGNATES[(i + 23) % n].es], i * 4 + 1),
      `"${word.es}" significa "${word.trueMeaning}" — no confundir con "${word.falseMeaning}", que es lo que parece decir en inglés.`
    );
    push(
      "mcq",
      `Si quieres decir "${word.trueMeaning}" en español, ¿qué palabra usas?`,
      word.es,
      shuffleFixed([word.es, otherWord2, otherWord1, COGNATES[(i + 11) % n].es], i * 4 + 2),
      `Recuerda: "${word.es}" NO significa "${word.falseMeaning}", aunque lo parezca.`
    );

    // 1 short-answer translation question (graded against a single clean
    // phrase — see primaryMeaning()).
    push(
      "short",
      `Traduce al inglés la palabra en negrita: "${word.sentence}" (la palabra es "${word.es}").`,
      primaryMeaning(word.trueMeaning),
      undefined,
      `"${word.es}" es un falso amigo — significa "${word.trueMeaning}", no "${word.falseMeaning}".`
    );
  });

  return exercises;
}

export const FALSE_COGNATES_EXERCISES: GrammarExercise[] = createFalseCognates();

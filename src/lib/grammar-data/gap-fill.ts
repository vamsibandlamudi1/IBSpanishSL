import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

interface GapWord {
  themeId: string;
  /** "A" or "B" — each theme's 8 words split into two groups of 4; each
   *  group's word bank is padded with 2 words borrowed from the OTHER
   *  group in the same theme, so the bank always has a couple more words
   *  than blanks (2 red herrings), matching the real IB Paper 1 format. */
  group: "A" | "B";
  word: string;
  cloze: string;
}

// 40 themed vocabulary words (8 per IB theme, split into two 4-word groups),
// each with a hand-written cloze sentence — addresses the "word-bank
// gap-fill" critical gap (IB Paper 1 frequently gives a word bank with a
// couple more words than blanks and asks students to fill each blank with
// the one word that fits both grammar and meaning).
const WORDS: GapWord[] = [
  // --- identities ---
  { themeId: "identities", group: "A", word: "autoestima", cloze: "Hacer ejercicio regularmente puede mejorar mucho tu ___." },
  { themeId: "identities", group: "A", word: "pertenecer", cloze: "Todos necesitamos sentir que ___ a un grupo." },
  { themeId: "identities", group: "A", word: "superarse", cloze: "La clave del éxito es ___ un poco más cada día." },
  { themeId: "identities", group: "A", word: "rasgo", cloze: "La generosidad es un ___ muy valorado en mi familia." },
  { themeId: "identities", group: "B", word: "orgulloso", cloze: "Mis padres están muy ___ de mis logros." },
  { themeId: "identities", group: "B", word: "aceptar", cloze: "Es importante ___ nuestras diferencias." },
  { themeId: "identities", group: "B", word: "personalidad", cloze: "Tiene una ___ muy fuerte y decidida." },
  { themeId: "identities", group: "B", word: "herencia", cloze: "El idioma que hablamos forma parte de nuestra ___ cultural." },

  // --- experiences ---
  { themeId: "experiences", group: "A", word: "aprendizaje", cloze: "Cada viaje es una oportunidad de ___." },
  { themeId: "experiences", group: "A", word: "superar", cloze: "Tuvo que ___ muchos obstáculos para terminar la carrera." },
  { themeId: "experiences", group: "A", word: "inolvidable", cloze: "Nuestro viaje a Perú fue una experiencia ___." },
  { themeId: "experiences", group: "A", word: "aventura", cloze: "Recorrer los Andes a pie fue toda una ___." },
  { themeId: "experiences", group: "B", word: "enriquecedor", cloze: "Vivir en otro país es muy ___ culturalmente." },
  { themeId: "experiences", group: "B", word: "arriesgarse", cloze: "A veces hay que ___ para conseguir lo que uno quiere." },
  { themeId: "experiences", group: "B", word: "vivencia", cloze: "Esa competición fue una ___ que nunca olvidaré." },
  { themeId: "experiences", group: "B", word: "madurar", cloze: "Esa experiencia me ayudó a ___ mucho como persona." },

  // --- human-ingenuity ---
  { themeId: "human-ingenuity", group: "A", word: "innovador", cloze: "Los estudiantes presentaron un proyecto muy ___." },
  { themeId: "human-ingenuity", group: "A", word: "invento", cloze: "La imprenta fue un ___ que cambió la historia." },
  { themeId: "human-ingenuity", group: "A", word: "avance", cloze: "Este ___ médico salvará muchas vidas." },
  { themeId: "human-ingenuity", group: "A", word: "eficaz", cloze: "El nuevo método resultó ser muy ___." },
  { themeId: "human-ingenuity", group: "B", word: "investigar", cloze: "Los científicos van a ___ una nueva vacuna." },
  { themeId: "human-ingenuity", group: "B", word: "descubrimiento", cloze: "Ese ___ revolucionó el mundo de la medicina." },
  { themeId: "human-ingenuity", group: "B", word: "tecnología", cloze: "La ___ avanza más rápido cada año." },
  { themeId: "human-ingenuity", group: "B", word: "sostenible", cloze: "Necesitamos soluciones más ___ para el planeta." },

  // --- social-organization ---
  { themeId: "social-organization", group: "A", word: "comunidad", cloze: "Toda la ___ participó en la limpieza del parque." },
  { themeId: "social-organization", group: "A", word: "solidaridad", cloze: "Mostraron mucha ___ con las familias afectadas." },
  { themeId: "social-organization", group: "A", word: "convivencia", cloze: "Las normas ayudan a mejorar la ___ en el aula." },
  { themeId: "social-organization", group: "A", word: "voluntariado", cloze: "Hacer ___ me enseñó el valor de ayudar a los demás." },
  { themeId: "social-organization", group: "B", word: "normas", cloze: "Es importante seguir las ___ de la escuela." },
  { themeId: "social-organization", group: "B", word: "respeto", cloze: "El ___ mutuo es la base de una buena convivencia." },
  { themeId: "social-organization", group: "B", word: "colaborar", cloze: "Todos debemos ___ para resolver este problema." },
  { themeId: "social-organization", group: "B", word: "desigualdad", cloze: "Todavía existe mucha ___ salarial entre hombres y mujeres." },

  // --- sharing-planet ---
  { themeId: "sharing-planet", group: "A", word: "contaminación", cloze: "La ___ del aire afecta a la salud de todos." },
  { themeId: "sharing-planet", group: "A", word: "reciclar", cloze: "Debemos ___ el plástico y el papel." },
  { themeId: "sharing-planet", group: "A", word: "sequía", cloze: "La ___ ha afectado gravemente a la agricultura." },
  { themeId: "sharing-planet", group: "A", word: "especie", cloze: "Esta ___ está en peligro de extinción." },
  { themeId: "sharing-planet", group: "B", word: "huella", cloze: "Podemos reducir nuestra ___ de carbono." },
  { themeId: "sharing-planet", group: "B", word: "reducir", cloze: "Es urgente ___ el uso de plástico." },
  { themeId: "sharing-planet", group: "B", word: "sostenibilidad", cloze: "La ___ debe ser una prioridad para todos." },
  { themeId: "sharing-planet", group: "B", word: "extinción", cloze: "Muchos animales están en peligro de ___." },
];

const PROMPT_TEMPLATES = [
  (bank: string, cloze: string) => `Banco de palabras: ${bank}.\nCompleta la frase con la palabra correcta: "${cloze}"`,
  (bank: string, cloze: string) => `Elige la palabra del banco que completa mejor la frase.\nBanco: ${bank}.\nFrase: "${cloze}"`,
  (bank: string, cloze: string) => `Solo una palabra del banco encaja aquí — ¡ojo con los distractores!\nBanco: ${bank}.\nFrase: "${cloze}"`,
  (bank: string, cloze: string) => `Completa el hueco usando el banco de palabras.\nBanco: ${bank}.\nFrase: "${cloze}"`,
  (bank: string, cloze: string) => `Rellena el espacio en blanco con la palabra adecuada del banco.\nBanco: ${bank}.\nFrase: "${cloze}"`,
];

/** Bounded by construction (WORDS.length x PROMPT_TEMPLATES.length, both
 *  fixed arrays) — no while(count < target) search, so this can't loop
 *  indefinitely the way the original present-tense generator did. */
function createGapFill(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  let idCounter = 1;

  const byTheme = new Map<string, GapWord[]>();
  for (const w of WORDS) byTheme.set(w.themeId, [...(byTheme.get(w.themeId) ?? []), w]);

  for (const words of byTheme.values()) {
    const groupA = words.filter((w) => w.group === "A").map((w) => w.word);
    const groupB = words.filter((w) => w.group === "B").map((w) => w.word);

    words.forEach((item, wi) => {
      const ownGroup = item.group === "A" ? groupA : groupB;
      const otherGroup = item.group === "A" ? groupB : groupA;
      // Word bank = this word's whole 4-word group + 2 borrowed distractors
      // from the other group — a couple more words than blanks, same ratio
      // the real exam uses.
      const bankWords = shuffleFixed([...ownGroup, otherGroup[0], otherGroup[1]], wi + 1);
      const bank = bankWords.join(", ");

      PROMPT_TEMPLATES.forEach((template) => {
        exercises.push({
          id: `gf-${idCounter++}`,
          type: "short",
          prompt: template(bank, item.cloze),
          correctAnswer: item.word,
          tip: `La palabra correcta es "${item.word}". Los otros términos del banco son distractores: encajan en el tema pero no en esta frase concreta.`,
        });
      });
    });
  }

  return exercises;
}

export const GAP_FILL_EXERCISES: GrammarExercise[] = createGapFill();

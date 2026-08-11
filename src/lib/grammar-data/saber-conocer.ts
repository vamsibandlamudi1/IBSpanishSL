import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

const SABER_FORMS = ["sé", "sabes", "sabe", "sabemos", "sabéis", "saben"];
const CONOCER_FORMS = ["conozco", "conoces", "conoce", "conocemos", "conocéis", "conocen"];

const SUBJECTS = [
  { idx: 0, title: "Yo" },
  { idx: 1, title: "Tú" },
  { idx: 2, title: "Ella" },
  { idx: 3, title: "Nosotros" },
  { idx: 4, title: "Vosotros" },
  { idx: 5, title: "Ellos" },
];

interface Context {
  verb: "saber" | "conocer";
  clause: string;
  tip: string;
}

// "Saber" = facts, information, or learned skills ("how to"). "Conocer" =
// familiarity with a person, place, or thing. Both are irregular in the yo
// form (sé / conozco), which is exactly where students slip up most.
const CONTEXTS: Context[] = [
  { verb: "saber", clause: "hablar tres idiomas", tip: "'Saber' + infinitivo = saber hacer algo (una habilidad aprendida)." },
  { verb: "saber", clause: "la respuesta correcta", tip: "'Saber' se usa para datos o información concreta." },
  { verb: "saber", clause: "qué hora es", tip: "'Saber' para información/hechos, no para personas o lugares." },
  { verb: "saber", clause: "nadar muy bien", tip: "'Saber' + infinitivo expresa una habilidad, no familiaridad." },
  { verb: "saber", clause: "cocinar platos italianos", tip: "Habilidad aprendida → 'saber' + infinitivo." },
  { verb: "saber", clause: "todos los verbos irregulares", tip: "Información memorizada → 'saber'." },
  { verb: "saber", clause: "dónde está la estación", tip: "Saber un dato (la ubicación como información), no 'conocer' el lugar en sí." },
  { verb: "saber", clause: "tocar la guitarra", tip: "Habilidad aprendida → 'saber' + infinitivo." },
  { verb: "saber", clause: "la verdad sobre lo que pasó", tip: "Información/hecho concreto → 'saber'." },
  { verb: "saber", clause: "que la reunión es mañana", tip: "'Saber que...' introduce un hecho conocido." },
  { verb: "saber", clause: "conducir desde los dieciocho años", tip: "Habilidad aprendida → 'saber' + infinitivo." },
  { verb: "saber", clause: "el número de teléfono de memoria", tip: "Información memorizada → 'saber'." },
  { verb: "saber", clause: "por qué llegó tarde", tip: "Saber la razón/el motivo (información) → 'saber'." },
  { verb: "saber", clause: "resolver ese tipo de problemas", tip: "Habilidad → 'saber' + infinitivo." },
  { verb: "conocer", clause: "a mi profesor de español", tip: "Familiaridad con una persona → 'conocer'." },
  { verb: "conocer", clause: "muy bien Madrid", tip: "Familiaridad con un lugar → 'conocer'." },
  { verb: "conocer", clause: "este restaurante", tip: "Estar familiarizado con un sitio/cosa → 'conocer'." },
  { verb: "conocer", clause: "a mi hermana desde hace años", tip: "Conocer a una persona (relación) → 'conocer'." },
  { verb: "conocer", clause: "la música de ese cantante", tip: "Familiaridad con una obra/artista → 'conocer'." },
  { verb: "conocer", clause: "bien la ciudad", tip: "Familiaridad con un lugar → 'conocer'." },
  { verb: "conocer", clause: "a los nuevos vecinos", tip: "Conocer (haber sido presentado) a una persona → 'conocer'." },
  { verb: "conocer", clause: "todos los museos de Barcelona", tip: "Familiaridad con lugares → 'conocer'." },
  { verb: "conocer", clause: "el libro, pero no lo ha leído entero", tip: "Estar familiarizado con algo (aunque sea superficialmente) → 'conocer'." },
  { verb: "conocer", clause: "a alguien que vive en Perú", tip: "Conocer a una persona → 'conocer'." },
  { verb: "conocer", clause: "un buen restaurante cerca de aquí", tip: "Familiaridad con un lugar/cosa → 'conocer'." },
  { verb: "conocer", clause: "la historia de esta familia", tip: "Estar familiarizado con una historia/tema (no un dato aislado) → 'conocer'." },
  { verb: "conocer", clause: "a los padres de su novio", tip: "Conocer (haber sido presentado) a personas → 'conocer'." },
  { verb: "conocer", clause: "esa canción de memoria", tip: "Familiaridad con una obra concreta → 'conocer' (aunque memorizarla use 'saber' — aquí el foco es la familiaridad con la canción)." },
];

function createSaberConocer(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  let idCounter = 1;

  const push = (type: "mcq" | "short", prompt: string, correctAnswer: string, options: string[] | undefined, tip: string) => {
    exercises.push({ id: `sc-${idCounter++}`, type, prompt, ...(options ? { options } : {}), correctAnswer, tip });
  };

  CONTEXTS.forEach((ctx, ci) => {
    SUBJECTS.forEach((subj, si) => {
      const forms = ctx.verb === "saber" ? SABER_FORMS : CONOCER_FORMS;
      const otherForms = ctx.verb === "saber" ? CONOCER_FORMS : SABER_FORMS;
      const correct = forms[subj.idx];
      const wrongVerbSameSubject = otherForms[subj.idx]; // the classic saber/conocer mix-up
      const distractor2 = forms[(subj.idx + 1) % forms.length];
      const distractor3 = otherForms[(subj.idx + 2) % otherForms.length];

      const sentence = `${subj.title} ___ ${ctx.clause}.`;
      const seed = ci * 6 + si;
      const isMcq = seed % 2 === 0;

      if (isMcq) {
        const options = shuffleFixed([correct, wrongVerbSameSubject, distractor2, distractor3], seed);
        push("mcq", `Completa con 'saber' o 'conocer' en la forma correcta: "${sentence}"`, correct, options, ctx.tip);
      } else {
        push(
          "short",
          `Conjuga 'saber' o 'conocer' correctamente para completar: "${sentence}"`,
          correct,
          undefined,
          ctx.tip
        );
      }
    });
  });

  return exercises;
}

export const SABER_CONOCER_EXERCISES: GrammarExercise[] = createSaberConocer();

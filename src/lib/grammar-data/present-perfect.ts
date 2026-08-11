import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

function createPresentPerfect(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  const set = new Set<string>();
  let idCounter = 1;
  // 8 of the 12 verbs have irregular past participles — the part of this
  // tense students actually need to memorize, since 'haber' itself is
  // perfectly regular (he, has, ha, hemos, habéis, han).
  const verbs = [
    { infinitive: "hablar", participle: "hablado" },
    { infinitive: "comer", participle: "comido" },
    { infinitive: "vivir", participle: "vivido" },
    { infinitive: "hacer", participle: "hecho" },
    { infinitive: "ver", participle: "visto" },
    { infinitive: "escribir", participle: "escrito" },
    { infinitive: "decir", participle: "dicho" },
    { infinitive: "poner", participle: "puesto" },
    { infinitive: "volver", participle: "vuelto" },
    { infinitive: "abrir", participle: "abierto" },
    { infinitive: "romper", participle: "roto" },
    { infinitive: "descubrir", participle: "descubierto" },
  ];
  const haberForms = ["he", "has", "ha", "hemos", "habéis", "han"];
  const subjects = [
    { name: "yo", idx: 0, title: "Yo" },
    { name: "tú", idx: 1, title: "Tú" },
    { name: "él", idx: 2, title: "Él" },
    { name: "ella", idx: 2, title: "Ella" },
    { name: "usted", idx: 2, title: "Usted" },
    { name: "nosotros", idx: 3, title: "Nosotros" },
    { name: "nosotras", idx: 3, title: "Nosotras" },
    { name: "vosotros", idx: 4, title: "Vosotros" },
    { name: "ellos", idx: 5, title: "Ellos" },
    { name: "ellas", idx: 5, title: "Ellas" },
    { name: "ustedes", idx: 5, title: "Ustedes" },
  ];
  const contexts = [
    "ya", "todavía no", "esta semana", "alguna vez", "nunca",
    "recientemente", "hoy", "este mes", "varias veces", "últimamente",
    "esta mañana", "este año", "dos veces", "por fin",
  ];

  let loopIndex = 0;
  while (exercises.length < 200) {
    const v = verbs[loopIndex % verbs.length];
    const s = subjects[loopIndex % subjects.length];
    const c = contexts[loopIndex % contexts.length];
    loopIndex++;

    const haber = haberForms[s.idx];
    const correct = `${haber} ${v.participle}`;
    const prompt = `${s.title} ___ (${v.infinitive}) ${c}.`;

    if (!set.has(prompt)) {
      set.add(prompt);
      const isMcq = exercises.length % 2 === 0;
      // Distractors: right participle/wrong haber (a different subject), and
      // right haber/wrong participle (a different verb) — the two mistakes
      // students actually make, rather than random noise.
      const wrongHaber = haberForms[(s.idx + 2) % haberForms.length];
      const wrongParticiple = verbs[(loopIndex + 3) % verbs.length].participle;
      const options = Array.from(
        new Set([correct, `${wrongHaber} ${v.participle}`, `${haber} ${wrongParticiple}`, `${wrongHaber} ${wrongParticiple}`])
      ).slice(0, 4);

      exercises.push({
        id: `pf-${idCounter++}`,
        type: isMcq ? "mcq" : "short",
        prompt: isMcq ? prompt : `Conjuga '${v.infinitive}' en pretérito perfecto con '${s.name}': ${s.title} ___ ${c}.`,
        ...(isMcq ? { options: shuffleFixed(options, prompt.length + loopIndex) } : {}),
        correctAnswer: correct,
        tip: `El pretérito perfecto de '${v.infinitive}' para '${s.name}' es '${correct}' — haber (${haber}) + participio (${v.participle}).${
          v.participle.endsWith("cho") || v.participle.endsWith("sto") || v.participle.endsWith("erto") || v.participle === "roto"
            ? " Este participio es irregular — no sigue el patrón normal -ado/-ido."
            : ""
        }`,
      });
    }
  }
  return exercises;
}

export const PRESENT_PERFECT_EXERCISES: GrammarExercise[] = createPresentPerfect();

import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

function createAffirmativeImperative(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  const set = new Set<string>();
  let idCounter = 1;
  // Regular verbs plus the eight classic irregular tú-command verbs
  // (di, haz, ve, pon, sal, sé, ten, ven) and two common stem-changers —
  // exactly the verbs the IB exam tends to test for commands/instructions.
  const verbs = [
    { infinitive: "hablar", forms: { tu: "habla", usted: "hable", nosotros: "hablemos", vosotros: "hablad", ustedes: "hablen" } },
    { infinitive: "comer", forms: { tu: "come", usted: "coma", nosotros: "comamos", vosotros: "comed", ustedes: "coman" } },
    { infinitive: "escribir", forms: { tu: "escribe", usted: "escriba", nosotros: "escribamos", vosotros: "escribid", ustedes: "escriban" } },
    { infinitive: "abrir", forms: { tu: "abre", usted: "abra", nosotros: "abramos", vosotros: "abrid", ustedes: "abran" } },
    { infinitive: "decir", forms: { tu: "di", usted: "diga", nosotros: "digamos", vosotros: "decid", ustedes: "digan" } },
    { infinitive: "hacer", forms: { tu: "haz", usted: "haga", nosotros: "hagamos", vosotros: "haced", ustedes: "hagan" } },
    { infinitive: "ir", forms: { tu: "ve", usted: "vaya", nosotros: "vamos", vosotros: "id", ustedes: "vayan" } },
    { infinitive: "poner", forms: { tu: "pon", usted: "ponga", nosotros: "pongamos", vosotros: "poned", ustedes: "pongan" } },
    { infinitive: "salir", forms: { tu: "sal", usted: "salga", nosotros: "salgamos", vosotros: "salid", ustedes: "salgan" } },
    { infinitive: "ser", forms: { tu: "sé", usted: "sea", nosotros: "seamos", vosotros: "sed", ustedes: "sean" } },
    { infinitive: "tener", forms: { tu: "ten", usted: "tenga", nosotros: "tengamos", vosotros: "tened", ustedes: "tengan" } },
    { infinitive: "venir", forms: { tu: "ven", usted: "venga", nosotros: "vengamos", vosotros: "venid", ustedes: "vengan" } },
    { infinitive: "cerrar", forms: { tu: "cierra", usted: "cierre", nosotros: "cerremos", vosotros: "cerrad", ustedes: "cierren" } },
    { infinitive: "volver", forms: { tu: "vuelve", usted: "vuelva", nosotros: "volvamos", vosotros: "volved", ustedes: "vuelvan" } },
  ];
  const persons: { key: "tu" | "usted" | "nosotros" | "vosotros" | "ustedes"; title: string; name: string }[] = [
    { key: "tu", title: "Tú", name: "tú" },
    { key: "usted", title: "Usted", name: "usted" },
    { key: "nosotros", title: "Nosotros/as", name: "nosotros" },
    { key: "vosotros", title: "Vosotros/as", name: "vosotros" },
    { key: "ustedes", title: "Ustedes", name: "ustedes" },
  ];
  const contexts = [
    "por favor", "ahora mismo", "antes de las ocho", "con cuidado", "en la reunión",
    "durante el viaje", "esta tarde", "antes de salir", "en la cocina", "para el examen",
    "con tus amigos", "en el trabajo", "todos los días", "de una vez", "en clase",
    "antes de comer", "con respeto",
  ];

  let loopIndex = 0;
  while (exercises.length < 200 && loopIndex < 20000) {
    const v = verbs[loopIndex % verbs.length];
    const p = persons[loopIndex % persons.length];
    const c = contexts[loopIndex % contexts.length];
    loopIndex++;

    const correct = v.forms[p.key];
    const prompt = `[Mandato — ${p.title}] ___ (${v.infinitive}) ${c}.`;

    if (!set.has(prompt)) {
      set.add(prompt);
      const isMcq = exercises.length % 2 === 0;
      const otherForms = Object.values(v.forms).filter((f) => f !== correct);
      const options = shuffleFixed(Array.from(new Set([correct, ...otherForms])).slice(0, 4), prompt.length + loopIndex);

      exercises.push({
        id: `ai-${idCounter++}`,
        type: isMcq ? "mcq" : "short",
        prompt: isMcq ? prompt : `Escribe el mandato afirmativo de '${v.infinitive}' para '${p.name}': ___ ${c}.`,
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: `El mandato afirmativo de '${v.infinitive}' para '${p.name}' es '${correct}'. Tú/Usted/Ustedes usan la raíz del subjuntivo (menos los ocho irregulares clásicos: di, haz, ve, pon, sal, sé, ten, ven); nosotros añade '-emos/-amos'; vosotros cambia la '-r' del infinitivo por '-d'.`,
      });
    }
  }
  return exercises;
}

export const AFFIRMATIVE_IMPERATIVE_EXERCISES: GrammarExercise[] = createAffirmativeImperative();

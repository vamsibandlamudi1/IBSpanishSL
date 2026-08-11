import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

function createNegativeCommands(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  const set = new Set<string>();
  let idCounter = 1;
  // Same 14 verbs as the Affirmative Commands topic, but here every person
  // uses the SUBJUNCTIVE form — the key rule this topic drills is that
  // negative commands are always subjunctive, even for tú and vosotros,
  // whose AFFIRMATIVE forms follow completely different patterns (e.g.
  // affirmative tú "ven" vs negative tú "no vengas"; affirmative vosotros
  // "hablad" vs negative vosotros "no habléis").
  const verbs = [
    { infinitive: "hablar", forms: { tu: "hables", usted: "hable", nosotros: "hablemos", vosotros: "habléis", ustedes: "hablen" } },
    { infinitive: "comer", forms: { tu: "comas", usted: "coma", nosotros: "comamos", vosotros: "comáis", ustedes: "coman" } },
    { infinitive: "escribir", forms: { tu: "escribas", usted: "escriba", nosotros: "escribamos", vosotros: "escribáis", ustedes: "escriban" } },
    { infinitive: "abrir", forms: { tu: "abras", usted: "abra", nosotros: "abramos", vosotros: "abráis", ustedes: "abran" } },
    { infinitive: "decir", forms: { tu: "digas", usted: "diga", nosotros: "digamos", vosotros: "digáis", ustedes: "digan" } },
    { infinitive: "hacer", forms: { tu: "hagas", usted: "haga", nosotros: "hagamos", vosotros: "hagáis", ustedes: "hagan" } },
    { infinitive: "ir", forms: { tu: "vayas", usted: "vaya", nosotros: "vayamos", vosotros: "vayáis", ustedes: "vayan" } },
    { infinitive: "poner", forms: { tu: "pongas", usted: "ponga", nosotros: "pongamos", vosotros: "pongáis", ustedes: "pongan" } },
    { infinitive: "salir", forms: { tu: "salgas", usted: "salga", nosotros: "salgamos", vosotros: "salgáis", ustedes: "salgan" } },
    { infinitive: "ser", forms: { tu: "seas", usted: "sea", nosotros: "seamos", vosotros: "seáis", ustedes: "sean" } },
    { infinitive: "tener", forms: { tu: "tengas", usted: "tenga", nosotros: "tengamos", vosotros: "tengáis", ustedes: "tengan" } },
    { infinitive: "venir", forms: { tu: "vengas", usted: "venga", nosotros: "vengamos", vosotros: "vengáis", ustedes: "vengan" } },
    { infinitive: "cerrar", forms: { tu: "cierres", usted: "cierre", nosotros: "cerremos", vosotros: "cerréis", ustedes: "cierren" } },
    { infinitive: "volver", forms: { tu: "vuelvas", usted: "vuelva", nosotros: "volvamos", vosotros: "volváis", ustedes: "vuelvan" } },
  ];
  const persons: { key: "tu" | "usted" | "nosotros" | "vosotros" | "ustedes"; title: string; name: string }[] = [
    { key: "tu", title: "Tú", name: "tú" },
    { key: "usted", title: "Usted", name: "usted" },
    { key: "nosotros", title: "Nosotros/as", name: "nosotros" },
    { key: "vosotros", title: "Vosotros/as", name: "vosotros" },
    { key: "ustedes", title: "Ustedes", name: "ustedes" },
  ];
  const contexts = [
    "por favor", "ahora mismo", "antes de las ocho", "sin permiso", "en la reunión",
    "durante el viaje", "esta tarde", "antes de salir", "en la cocina", "durante el examen",
    "con tus amigos", "en el trabajo", "todos los días", "de esa manera", "en clase",
    "antes de comer", "sin cuidado",
  ];

  let loopIndex = 0;
  while (exercises.length < 200 && loopIndex < 20000) {
    const v = verbs[loopIndex % verbs.length];
    const p = persons[loopIndex % persons.length];
    const c = contexts[loopIndex % contexts.length];
    loopIndex++;

    const correct = v.forms[p.key];
    const prompt = `[Mandato negativo — ${p.title}] No ___ (${v.infinitive}) ${c}.`;

    if (!set.has(prompt)) {
      set.add(prompt);
      const isMcq = exercises.length % 2 === 0;
      const otherForms = Object.values(v.forms).filter((f) => f !== correct);
      const options = shuffleFixed(Array.from(new Set([correct, ...otherForms])).slice(0, 4), prompt.length + loopIndex);

      exercises.push({
        id: `nc-${idCounter++}`,
        type: isMcq ? "mcq" : "short",
        prompt: isMcq ? prompt : `Escribe el mandato negativo de '${v.infinitive}' para '${p.name}': No ___ ${c}.`,
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: `El mandato negativo de '${v.infinitive}' para '${p.name}' es 'no ${correct}'. TODOS los mandatos negativos usan la forma del subjuntivo, sin excepción — a diferencia de los afirmativos de tú y vosotros, que tienen sus propios patrones.`,
      });
    }
  }
  return exercises;
}

export const NEGATIVE_COMMANDS_EXERCISES: GrammarExercise[] = createNegativeCommands();

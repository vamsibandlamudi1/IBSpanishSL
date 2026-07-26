import { GrammarExercise } from "../types";

function createFuture(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  const set = new Set<string>();
  let idCounter = 1;
  const verbs = [
    { infinitive: 'viajar', forms: ['viajaré', 'viajarás', 'viajará', 'viajaremos', 'viajaréis', 'viajarán'] },
    { infinitive: 'hablar', forms: ['hablaré', 'hablarás', 'hablará', 'hablaremos', 'hablaréis', 'hablarán'] },
    { infinitive: 'hacer', forms: ['haré', 'harás', 'hará', 'haremos', 'haréis', 'harán'] },
    { infinitive: 'vivir', forms: ['viviré', 'vivirás', 'vivirá', 'viviremos', 'viviréis', 'vivirán'] },
    { infinitive: 'llegar', forms: ['llegaré', 'llegarás', 'llegará', 'llegaremos', 'llegaréis', 'llegarán'] },
    { infinitive: 'tener', forms: ['tendré', 'tendrás', 'tendrá', 'tendremos', 'tendréis', 'tendrán'] },
    { infinitive: 'comer', forms: ['comeré', 'comerás', 'comerá', 'comeremos', 'comeréis', 'comerán'] },
    { infinitive: 'salir', forms: ['saldré', 'saldrás', 'saldrá', 'saldremos', 'saldréis', 'saldrán'] },
    { infinitive: 'poder', forms: ['podré', 'podrás', 'podrá', 'podremos', 'podréis', 'podrán'] },
    { infinitive: 'venir', forms: ['vendré', 'vendrás', 'vendrá', 'vendremos', 'vendréis', 'vendrán'] }
  ];
  const subjects = [
    { name: 'yo', idx: 0, title: 'Yo' },
    { name: 'tú', idx: 1, title: 'Tú' },
    { name: 'él', idx: 2, title: 'Él' },
    { name: 'ella', idx: 2, title: 'Ella' },
    { name: 'usted', idx: 2, title: 'Usted' },
    { name: 'nosotros', idx: 3, title: 'Nosotros' },
    { name: 'nosotras', idx: 3, title: 'Nosotras' },
    { name: 'vosotros', idx: 4, title: 'Vosotros' },
    { name: 'ellos', idx: 5, title: 'Ellos' },
    { name: 'ellas', idx: 5, title: 'Ellas' },
    { name: 'ustedes', idx: 5, title: 'Ustedes' }
  ];
  const contexts = [
    'mañana por la mañana', 'el próximo año', 'en el futuro', 'la semana que viene',
    'el mes próximo', 'pronto', 'después de graduarnos', 'este fin de semana',
    'en unos días', 'el año entrante', 'más tarde', 'en las próximas vacaciones',
    'el lunes que viene', 'dentro de poco', 'el próximo verano'
  ];

  let loopIndex = 0;
  while (exercises.length < 200) {
    const v = verbs[loopIndex % verbs.length];
    const s = subjects[loopIndex % subjects.length];
    const c = contexts[loopIndex % contexts.length];
    loopIndex++;

    const correct = v.forms[s.idx];
    const prompt = `${s.title} ___ (${v.infinitive}) ${c}.`;

    if (!set.has(prompt)) {
      set.add(prompt);
      const isMcq = exercises.length % 2 === 0;
      const otherForms = v.forms.filter(f => f !== correct);
      const options = Array.from(new Set([correct, ...otherForms])).slice(0, 4);

      exercises.push({
        id: `fu-${idCounter++}`,
        type: isMcq ? 'mcq' : 'short',
        prompt: isMcq ? prompt : `Conjuga '${v.infinitive}' en futuro con '${s.name}': ${s.title} ___ ${c}.`,
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: `Future tense form of '${v.infinitive}' for '${s.name}' is '${correct}'. Add endings (-é, -ás, -á, -emos, -éis, -án) to the infinitive.`
      });
    }
  }
  return exercises;
}

export const FUTURE_EXERCISES: GrammarExercise[] = createFuture();

import { GrammarExercise } from "../types";

function createConditional(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  const set = new Set<string>();
  let idCounter = 1;
  const verbs = [
    { infinitive: 'querer', forms: ['querría', 'querrías', 'querría', 'querríamos', 'querríais', 'querrían'] },
    { infinitive: 'poder', forms: ['podría', 'podrías', 'podría', 'podríamos', 'podríais', 'podrían'] },
    { infinitive: 'gustar', forms: ['gustaría', 'gustarías', 'gustaría', 'gustaríamos', 'gustaríais', 'gustarían'] },
    { infinitive: 'llegar', forms: ['llegaría', 'llegarías', 'llegaría', 'llegaríamos', 'llegaríais', 'llegarían'] },
    { infinitive: 'hablar', forms: ['hablaría', 'hablarías', 'hablaría', 'hablaríamos', 'hablaríais', 'hablarían'] },
    { infinitive: 'viajar', forms: ['viajaría', 'viajarías', 'viajaría', 'viajaríamos', 'viajaríais', 'viajarían'] },
    { infinitive: 'venir', forms: ['vendría', 'vendrías', 'vendría', 'vendríamos', 'vendríais', 'vendrían'] },
    { infinitive: 'hacer', forms: ['haría', 'harías', 'haría', 'haríamos', 'haríais', 'harían'] },
    { infinitive: 'deber', forms: ['debería', 'deberías', 'debería', 'deberíamos', 'deberíais', 'deberían'] },
    { infinitive: 'tener', forms: ['tendría', 'tendrías', 'tendría', 'tendríamos', 'tendríais', 'tendrían'] }
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
    'si tuviera tiempo libre', 'con mucho gusto', 'si fuera posible', 'en esas condiciones',
    'con tu ayuda', 'si pudiéramos viajar', 'sin ningún problema', 'por educación',
    'si hubiera dinero suficiente', 'con un poco más de práctica', 'en tu lugar',
    'si me lo pidieras', 'para solucionar el asunto', 'con la orientación adecuada', 'si tuviera la oportunidad'
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
        id: `co-${idCounter++}`,
        type: isMcq ? 'mcq' : 'short',
        prompt: isMcq ? prompt : `Conjuga '${v.infinitive}' en condicional con '${s.name}': ${s.title} ___ ${c}.`,
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: `Conditional tense form of '${v.infinitive}' for '${s.name}' is '${correct}'. Add endings (-ía, -ías, -ía, -íamos, -íais, -ían) to the infinitive.`
      });
    }
  }
  return exercises;
}

export const CONDITIONAL_EXERCISES: GrammarExercise[] = createConditional();

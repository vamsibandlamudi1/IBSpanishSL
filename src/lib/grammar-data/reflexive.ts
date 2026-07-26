import { GrammarExercise } from "../types";

function createReflexive(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  const set = new Set<string>();
  let idCounter = 1;
  const verbs = [
    { infinitive: 'despertarse', forms: ['me despierto', 'te despiertas', 'se despierta', 'nos despertamos', 'os despertáis', 'se despiertan'] },
    { infinitive: 'acostarse', forms: ['me acuesto', 'te acuestas', 'se acuesta', 'nos acostamos', 'os acostáis', 'se acuestan'] },
    { infinitive: 'lavarse', forms: ['me lavo', 'te lavas', 'se lava', 'nos lavamos', 'os laváis', 'se lavan'] },
    { infinitive: 'vestirse', forms: ['me visto', 'te vistes', 'se viste', 'nos vestimos', 'os vestís', 'se visten'] },
    { infinitive: 'llamarse', forms: ['me llamo', 'te llamas', 'se llama', 'nos llamamos', 'os llamáis', 'se llaman'] },
    { infinitive: 'levantarse', forms: ['me levanto', 'te levantas', 'se levanta', 'nos levantamos', 'os levantáis', 'se levantan'] },
    { infinitive: 'sentarse', forms: ['me siento', 'te sientas', 'se sienta', 'nos sentamos', 'os sentáis', 'se sientan'] },
    { infinitive: 'peinarse', forms: ['me peino', 'te peinas', 'se peina', 'nos peinamos', 'os peináis', 'se peinan'] },
    { infinitive: 'maquillarse', forms: ['me maquillo', 'te maquillas', 'se maquilla', 'nos maquillamos', 'os maquilláis', 'se maquillan'] },
    { infinitive: 'irse', forms: ['me voy', 'te vas', 'se va', 'nos vamos', 'os vais', 'se van'] }
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
    'a las siete de la mañana', 'temprano para ir al colegio', 'después de cenar',
    'cuidadosamente antes de salir', 'con rapidez por la mañana', 'todos los días',
    'por la noche', 'antes del entrenamiento', 'siempre los fines de semana', 'en la habitación',
    'después de ducharse', 'antes de ir a la escuela', 'los sábados', 'muy temprano', 'con cuidado'
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
        id: `re-${idCounter++}`,
        type: isMcq ? 'mcq' : 'short',
        prompt: isMcq ? prompt : `Completa con el verbo reflexivo: '${s.title} ___ (${v.infinitive}) ${c}.'`,
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: `Reflexive actions require matching pronouns: me, te, se, nos, os, se. Form for '${s.title}' is '${correct}'.`
      });
    }
  }
  return exercises;
}

export const REFLEXIVE_EXERCISES: GrammarExercise[] = createReflexive();

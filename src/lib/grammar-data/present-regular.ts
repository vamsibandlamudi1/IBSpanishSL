import { GrammarExercise } from "../types";

function createPresentRegular(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  const set = new Set<string>();
  let idCounter = 1;
  const verbs = [
    { infinitive: 'hablar', forms: ['hablo', 'hablas', 'habla', 'hablamos', 'habláis', 'hablan'] },
    { infinitive: 'comer', forms: ['como', 'comes', 'come', 'comemos', 'coméis', 'comen'] },
    { infinitive: 'vivir', forms: ['vivo', 'vives', 'vive', 'vivimos', 'vivís', 'viven'] },
    { infinitive: 'estudiar', forms: ['estudio', 'estudias', 'estudia', 'estudiamos', 'estudiáis', 'estudian'] },
    { infinitive: 'escribir', forms: ['escribo', 'escribes', 'escribe', 'escribimos', 'escribís', 'escriben'] },
    { infinitive: 'trabajar', forms: ['trabajo', 'trabajas', 'trabaja', 'trabajamos', 'trabajáis', 'trabajan'] },
    { infinitive: 'leer', forms: ['leo', 'lees', 'lee', 'leemos', 'leéis', 'leen'] },
    { infinitive: 'abrir', forms: ['abro', 'abres', 'abre', 'abrimos', 'abrís', 'abren'] },
    { infinitive: 'correr', forms: ['corro', 'corres', 'corre', 'corremos', 'corréis', 'corren'] },
    { infinitive: 'bailar', forms: ['bailo', 'bailas', 'baila', 'bailamos', 'bailáis', 'bailan'] },
    { infinitive: 'escuchar', forms: ['escucho', 'escuchas', 'escucha', 'escuchamos', 'escucháis', 'escuchan'] },
    { infinitive: 'aprender', forms: ['aprendo', 'aprendes', 'aprende', 'aprendemos', 'aprendéis', 'aprenden'] },
    { infinitive: 'comprender', forms: ['comprendo', 'comprendes', 'comprende', 'comprendemos', 'comprendéis', 'comprenden'] },
    { infinitive: 'recibir', forms: ['recibo', 'recibes', 'recibe', 'recibimos', 'recibís', 'reciben'] },
    { infinitive: 'comprar', forms: ['compro', 'compras', 'compra', 'compramos', 'compráis', 'compran'] }
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
    'todos los días', 'en el colegio', 'con frecuencia', 'cada mañana', 'por la tarde',
    'durante las vacaciones', 'con la familia', 'en la biblioteca', 'siempre', 'con mucho cuidado',
    'el fin de semana', 'en la universidad', 'con sus amigos', 'después de clases', 'en el trabajo'
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
        id: `pr-${idCounter++}`,
        type: isMcq ? 'mcq' : 'short',
        prompt: isMcq ? prompt : `Conjuga '${v.infinitive}' con '${s.name}': ${s.title} ___ ${c}.`,
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: `Present tense form of '${v.infinitive}' for '${s.name}' is '${correct}'. -ar: -o, -as, -a, -amos, -áis, -an; -er: -o, -es, -e, -emos, -éis, -en; -ir: -o, -es, -e, -imos, -ís, -en.`
      });
    }
  }
  return exercises;
}

export const PRESENT_REGULAR_EXERCISES: GrammarExercise[] = createPresentRegular();

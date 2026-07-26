import { GrammarExercise } from "../types";

function createPresentIrregular(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  const set = new Set<string>();
  let idCounter = 1;
  const verbs = [
    { infinitive: 'tener', forms: ['tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen'] },
    { infinitive: 'ir', forms: ['voy', 'vas', 'va', 'vamos', 'vais', 'van'] },
    { infinitive: 'hacer', forms: ['hago', 'haces', 'hace', 'hacemos', 'hacéis', 'hacen'] },
    { infinitive: 'ser', forms: ['soy', 'eres', 'es', 'somos', 'sois', 'son'] },
    { infinitive: 'estar', forms: ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'] },
    { infinitive: 'poder', forms: ['puedo', 'puedes', 'puede', 'podemos', 'podéis', 'pueden'] },
    { infinitive: 'querer', forms: ['quiero', 'quieres', 'quiere', 'queremos', 'queréis', 'quieren'] },
    { infinitive: 'decir', forms: ['digo', 'dices', 'dice', 'decimos', 'decís', 'dicen'] },
    { infinitive: 'venir', forms: ['vengo', 'vienes', 'viene', 'venimos', 'venís', 'vienen'] },
    { infinitive: 'saber', forms: ['sé', 'sabes', 'sabe', 'sabemos', 'sabéis', 'saben'] },
    { infinitive: 'ver', forms: ['veo', 'ves', 've', 'vemos', 'veis', 'ven'] },
    { infinitive: 'poner', forms: ['pongo', 'pones', 'pone', 'ponemos', 'ponen'] },
    { infinitive: 'salir', forms: ['salgo', 'sales', 'sale', 'salimos', 'salís', 'salen'] }
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
        id: `ir-${idCounter++}`,
        type: isMcq ? 'mcq' : 'short',
        prompt: isMcq ? prompt : `Conjuga '${v.infinitive}' con '${s.name}': ${s.title} ___ ${c}.`,
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: `Present tense irregular form of '${v.infinitive}' for '${s.name}' is '${correct}'. Common irregular verbs need to be memorized.`
      });
    }
  }
  return exercises;
}

export const PRESENT_IRREGULAR_EXERCISES: GrammarExercise[] = createPresentIrregular();

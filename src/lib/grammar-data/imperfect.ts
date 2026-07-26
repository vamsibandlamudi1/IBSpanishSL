import { GrammarExercise } from "../types";

function createImperfect(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  const set = new Set<string>();
  let idCounter = 1;
  const verbs = [
    { infinitive: 'jugar', forms: ['jugaba', 'jugabas', 'jugaba', 'jugábamos', 'jugabais', 'jugaban'] },
    { infinitive: 'vivir', forms: ['vivía', 'vivías', 'vivía', 'vivíamos', 'vivíais', 'vivían'] },
    { infinitive: 'tener', forms: ['tenía', 'tenías', 'tenía', 'teníamos', 'teníais', 'tenían'] },
    { infinitive: 'cantar', forms: ['cantaba', 'cantabas', 'cantaba', 'cantábamos', 'cantabais', 'cantaban'] },
    { infinitive: 'ser', forms: ['era', 'eras', 'era', 'éramos', 'erais', 'eran'] },
    { infinitive: 'ir', forms: ['iba', 'ibas', 'iba', 'íbamos', 'ibais', 'iban'] },
    { infinitive: 'ver', forms: ['veía', 'veías', 'veía', 'veíamos', 'veíais', 'veían'] },
    { infinitive: 'comer', forms: ['comía', 'comías', 'comía', 'comíamos', 'comíais', 'comían'] },
    { infinitive: 'estudiar', forms: ['estudiaba', 'estudiabas', 'estudiaba', 'estudiábamos', 'estudiabais', 'estudiaban'] },
    { infinitive: 'hablar', forms: ['hablaba', 'hablabas', 'hablaba', 'hablábamos', 'hablabais', 'hablaban'] }
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
    'cuando era niño/a', 'todos los veranos', 'siempre en aquella época', 'frecuentemente antes',
    'cada tarde de domingo', 'mientras vivía en Madrid', 'todos los años', 'a menudo',
    'cuando éramos jóvenes', 'cada fin de semana en el pueblo', 'mientras llovía', 'de pequeño/a',
    'por las mañanas', 'durante los veranos pasados', 'con regularidad'
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
        id: `im-${idCounter++}`,
        type: isMcq ? 'mcq' : 'short',
        prompt: isMcq ? prompt : `Conjuga '${v.infinitive}' en imperfecto con '${s.name}': ${s.title} ___ ${c}.`,
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: `Imperfect tense form of '${v.infinitive}' for '${s.name}' is '${correct}'. -ar: -aba, -abas, -aba, -ábamos, -abais, -aban; -er/-ir: -ía, -ías, -ía, -íamos, -íais, -ían.`
      });
    }
  }
  return exercises;
}

export const IMPERFECT_EXERCISES: GrammarExercise[] = createImperfect();

import { GrammarExercise } from "../types";

function createPreterite(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  const set = new Set<string>();
  let idCounter = 1;
  const verbs = [
    { infinitive: 'hablar', forms: ['hablé', 'hablaste', 'habló', 'hablamos', 'hablasteis', 'hablaron'] },
    { infinitive: 'comer', forms: ['comí', 'comiste', 'comió', 'comimos', 'comisteis', 'comieron'] },
    { infinitive: 'vivir', forms: ['viví', 'viviste', 'vivió', 'vivimos', 'vivisteis', 'vivieron'] },
    { infinitive: 'viajar', forms: ['viajé', 'viajaste', 'viajó', 'viajamos', 'viajasteis', 'viajaron'] },
    { infinitive: 'escribir', forms: ['escribí', 'escribiste', 'escribió', 'escribimos', 'escribisteis', 'escribieron'] },
    { infinitive: 'llegar', forms: ['llegué', 'llegaste', 'llegó', 'llegamos', 'llegasteis', 'llegaron'] },
    { infinitive: 'leer', forms: ['leí', 'leíste', 'leyó', 'leímos', 'leísteis', 'leyeron'] },
    { infinitive: 'hacer', forms: ['hice', 'hiciste', 'hizo', 'hicimos', 'hicisteis', 'hicieron'] },
    { infinitive: 'ir', forms: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'] },
    { infinitive: 'tener', forms: ['tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvisteis', 'tuvieron'] },
    { infinitive: 'estar', forms: ['estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron'] },
    { infinitive: 'decir', forms: ['dije', 'dijiste', 'dijo', 'dijimos', 'dijisteis', 'dijeron'] }
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
    'ayer por la tarde', 'el año pasado', 'la semana pasada', 'hace dos días', 'el mes pasado',
    'en 2020', 'durante las vacaciones pasadas', 'el domingo', 'anoche', 'el otro día',
    'el fin de semana pasado', 'en la mañana', 'después del examen', 'hace un momento', 'el verano pasado'
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
        id: `pt-${idCounter++}`,
        type: isMcq ? 'mcq' : 'short',
        prompt: isMcq ? prompt : `Conjuga '${v.infinitive}' en pretérito con '${s.name}': ${s.title} ___ ${c}.`,
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: `Preterite tense of '${v.infinitive}' for '${s.name}' is '${correct}'. -ar: -é, -aste, -ó, -amos, -asteis, -aron; -er/-ir: -í, -iste, -ió, -imos, -isteis, -ieron.`
      });
    }
  }
  return exercises;
}

export const PRETERITE_EXERCISES: GrammarExercise[] = createPreterite();

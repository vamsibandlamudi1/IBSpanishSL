import { GrammarExercise } from "../types";

function createSubjunctive(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  const set = new Set<string>();
  let idCounter = 1;
  const verbs = [
    { infinitive: 'venir', forms: ['venga', 'vengas', 'venga', 'vengamos', 'vengáis', 'vengan'] },
    { infinitive: 'estudiar', forms: ['estudie', 'estudies', 'estudie', 'estudiemos', 'estudiéis', 'estudien'] },
    { infinitive: 'ser', forms: ['sea', 'seas', 'sea', 'seamos', 'seáis', 'sean'] },
    { infinitive: 'sacar', forms: ['saque', 'saques', 'saque', 'saquemos', 'saquéis', 'saquen'] },
    { infinitive: 'tener', forms: ['tenga', 'tengas', 'tenga', 'tengamos', 'tengáis', 'tengan'] },
    { infinitive: 'decir', forms: ['diga', 'digas', 'diga', 'digamos', 'digáis', 'digan'] },
    { infinitive: 'terminar', forms: ['termine', 'termines', 'termine', 'terminemos', 'terminéis', 'terminen'] },
    { infinitive: 'hacer', forms: ['haga', 'hagas', 'haga', 'hagamos', 'hagáis', 'hagan'] },
    { infinitive: 'llegar', forms: ['llegue', 'llegues', 'llegue', 'lleguemos', 'lleguéis', 'lleguen'] },
    { infinitive: 'poder', forms: ['pueda', 'puedas', 'pueda', 'podamos', 'podáis', 'puedan'] },
    { infinitive: 'ir', forms: ['vaya', 'vayas', 'vaya', 'vayamos', 'vayáis', 'vayan'] },
    { infinitive: 'comer', forms: ['coma', 'comas', 'coma', 'comamos', 'comáis', 'coman'] }
  ];
  const subjects = [
    { name: 'yo', idx: 0, title: 'yo' },
    { name: 'tú', idx: 1, title: 'tú' },
    { name: 'él', idx: 2, title: 'él' },
    { name: 'ella', idx: 2, title: 'ella' },
    { name: 'usted', idx: 2, title: 'usted' },
    { name: 'nosotros', idx: 3, title: 'nosotros' },
    { name: 'nosotras', idx: 3, title: 'nosotras' },
    { name: 'vosotros', idx: 4, title: 'vosotros' },
    { name: 'ellos', idx: 5, title: 'ellos' },
    { name: 'ellas', idx: 5, title: 'ellas' },
    { name: 'ustedes', idx: 5, title: 'ustedes' }
  ];
  const triggers = [
    'Espero que', 'Es importante que', 'Quiero que', 'Es necesario que',
    'Dudo que', 'Ojalá que', 'Mis padres quieren que', 'El profesor pide que',
    'Es posible que', 'No creo que', 'Es mejor que', 'Recomiendo que',
    'Sugerimos que', 'Es urgente que', 'Prefiero que'
  ];

  let loopIndex = 0;
  while (exercises.length < 200) {
    const v = verbs[loopIndex % verbs.length];
    const s = subjects[loopIndex % subjects.length];
    const t = triggers[loopIndex % triggers.length];
    loopIndex++;

    const correct = v.forms[s.idx];
    const prompt = `${t} ${s.title} ___ (${v.infinitive}) a tiempo.`;

    if (!set.has(prompt)) {
      set.add(prompt);
      const isMcq = exercises.length % 2 === 0;
      const otherForms = v.forms.filter(f => f !== correct);
      const options = Array.from(new Set([correct, ...otherForms])).slice(0, 4);

      exercises.push({
        id: `su-${idCounter++}`,
        type: isMcq ? 'mcq' : 'short',
        prompt: isMcq ? prompt : `Conjuga '${v.infinitive}' en subjuntivo con '${s.name}': ${t} ${s.title} ___ a tiempo.`,
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: `Present subjunctive form of '${v.infinitive}' for '${s.name}' is '${correct}'. Drop 'o' of yo form and add opposite endings (-e for -ar, -a for -er/-ir).`
      });
    }
  }
  return exercises;
}

export const SUBJUNCTIVE_EXERCISES: GrammarExercise[] = createSubjunctive();

const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'src', 'lib', 'grammar-data');

function writeStaticFile(filename, exportName, generatorFn) {
  console.log('Writing static array for ' + filename + '...');
  const data = generatorFn();
  const content = 'import { GrammarExercise } from "../types";\n\nexport const ' + exportName + ': GrammarExercise[] = ' + JSON.stringify(data, null, 2) + ';\n';
  fs.writeFileSync(path.join(dir, filename), content, 'utf-8');
}

function createPresentRegular() {
  const exercises = [];
  const set = new Set();
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
    const prompt = s.title + ' ___ (' + v.infinitive + ') ' + c + '.';

    if (!set.has(prompt)) {
      set.add(prompt);
      const isMcq = exercises.length % 2 === 0;
      const otherForms = v.forms.filter(f => f !== correct);
      const options = Array.from(new Set([correct, ...otherForms])).slice(0, 4);

      exercises.push({
        id: 'pr-' + (idCounter++),
        type: isMcq ? 'mcq' : 'short',
        prompt: isMcq ? prompt : "Conjuga '" + v.infinitive + "' con '" + s.name + "': " + s.title + ' ___ ' + c + '.',
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: "Present tense form of '" + v.infinitive + "' for '" + s.name + "' is '" + correct + "'. -ar: -o, -as, -a, -amos, -áis, -an; -er: -o, -es, -e, -emos, -éis, -en; -ir: -o, -es, -e, -imos, -ís, -en."
      });
    }
  }
  return exercises;
}

function createPresentIrregular() {
  const exercises = [];
  const set = new Set();
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
    const prompt = s.title + ' ___ (' + v.infinitive + ') ' + c + '.';

    if (!set.has(prompt)) {
      set.add(prompt);
      const isMcq = exercises.length % 2 === 0;
      const otherForms = v.forms.filter(f => f !== correct);
      const options = Array.from(new Set([correct, ...otherForms])).slice(0, 4);

      exercises.push({
        id: 'ir-' + (idCounter++),
        type: isMcq ? 'mcq' : 'short',
        prompt: isMcq ? prompt : "Conjuga '" + v.infinitive + "' con '" + s.name + "': " + s.title + ' ___ ' + c + '.',
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: "Present tense irregular form of '" + v.infinitive + "' for '" + s.name + "' is '" + correct + "'. Common irregular verbs need to be memorized."
      });
    }
  }
  return exercises;
}

function createPreterite() {
  const exercises = [];
  const set = new Set();
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
    const prompt = s.title + ' ___ (' + v.infinitive + ') ' + c + '.';

    if (!set.has(prompt)) {
      set.add(prompt);
      const isMcq = exercises.length % 2 === 0;
      const otherForms = v.forms.filter(f => f !== correct);
      const options = Array.from(new Set([correct, ...otherForms])).slice(0, 4);

      exercises.push({
        id: 'pt-' + (idCounter++),
        type: isMcq ? 'mcq' : 'short',
        prompt: isMcq ? prompt : "Conjuga '" + v.infinitive + "' en pretérito con '" + s.name + "': " + s.title + ' ___ ' + c + '.',
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: "Preterite tense of '" + v.infinitive + "' for '" + s.name + "' is '" + correct + "'. -ar: -é, -aste, -ó, -amos, -asteis, -aron; -er/-ir: -í, -iste, -ió, -imos, -isteis, -ieron."
      });
    }
  }
  return exercises;
}

function createImperfect() {
  const exercises = [];
  const set = new Set();
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
    const prompt = s.title + ' ___ (' + v.infinitive + ') ' + c + '.';

    if (!set.has(prompt)) {
      set.add(prompt);
      const isMcq = exercises.length % 2 === 0;
      const otherForms = v.forms.filter(f => f !== correct);
      const options = Array.from(new Set([correct, ...otherForms])).slice(0, 4);

      exercises.push({
        id: 'im-' + (idCounter++),
        type: isMcq ? 'mcq' : 'short',
        prompt: isMcq ? prompt : "Conjuga '" + v.infinitive + "' en imperfecto con '" + s.name + "': " + s.title + ' ___ ' + c + '.',
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: "Imperfect tense form of '" + v.infinitive + "' for '" + s.name + "' is '" + correct + "'. -ar: -aba, -abas, -aba, -ábamos, -abais, -aban; -er/-ir: -ía, -ías, -ía, -íamos, -íais, -ían."
      });
    }
  }
  return exercises;
}

function createFuture() {
  const exercises = [];
  const set = new Set();
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
    const prompt = s.title + ' ___ (' + v.infinitive + ') ' + c + '.';

    if (!set.has(prompt)) {
      set.add(prompt);
      const isMcq = exercises.length % 2 === 0;
      const otherForms = v.forms.filter(f => f !== correct);
      const options = Array.from(new Set([correct, ...otherForms])).slice(0, 4);

      exercises.push({
        id: 'fu-' + (idCounter++),
        type: isMcq ? 'mcq' : 'short',
        prompt: isMcq ? prompt : "Conjuga '" + v.infinitive + "' en futuro con '" + s.name + "': " + s.title + ' ___ ' + c + '.',
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: "Future tense form of '" + v.infinitive + "' for '" + s.name + "' is '" + correct + "'. Add endings (-é, -ás, -á, -emos, -éis, -án) to the infinitive."
      });
    }
  }
  return exercises;
}

function createConditional() {
  const exercises = [];
  const set = new Set();
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
    const prompt = s.title + ' ___ (' + v.infinitive + ') ' + c + '.';

    if (!set.has(prompt)) {
      set.add(prompt);
      const isMcq = exercises.length % 2 === 0;
      const otherForms = v.forms.filter(f => f !== correct);
      const options = Array.from(new Set([correct, ...otherForms])).slice(0, 4);

      exercises.push({
        id: 'co-' + (idCounter++),
        type: isMcq ? 'mcq' : 'short',
        prompt: isMcq ? prompt : "Conjuga '" + v.infinitive + "' en condicional con '" + s.name + "': " + s.title + ' ___ ' + c + '.',
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: "Conditional tense form of '" + v.infinitive + "' for '" + s.name + "' is '" + correct + "'. Add endings (-ía, -ías, -ía, -íamos, -íais, -ían) to the infinitive."
      });
    }
  }
  return exercises;
}

function createSubjunctive() {
  const exercises = [];
  const set = new Set();
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
    const prompt = t + ' ' + s.title + ' ___ (' + v.infinitive + ') a tiempo.';

    if (!set.has(prompt)) {
      set.add(prompt);
      const isMcq = exercises.length % 2 === 0;
      const otherForms = v.forms.filter(f => f !== correct);
      const options = Array.from(new Set([correct, ...otherForms])).slice(0, 4);

      exercises.push({
        id: 'su-' + (idCounter++),
        type: isMcq ? 'mcq' : 'short',
        prompt: isMcq ? prompt : "Conjuga '" + v.infinitive + "' en subjuntivo con '" + s.name + "': " + t + ' ' + s.title + ' ___ a tiempo.',
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: "Present subjunctive form of '" + v.infinitive + "' for '" + s.name + "' is '" + correct + "'. Drop 'o' of yo form and add opposite endings (-e for -ar, -a for -er/-ir)."
      });
    }
  }
  return exercises;
}

function createReflexive() {
  const exercises = [];
  const set = new Set();
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
    { infinitive: 'maquillarse', forms: ['me maquillo', 'te me maquillas', 'se maquilla', 'nos maquillamos', 'os maquilláis', 'se maquillan'] },
    { infinitive: 'irse', forms: ['me voy', 'te vas', 'se va', 'nos vamos', 'os vais', 'se van'] }
  ];
  const subjects = [
    { title: 'Yo', idx: 0 }, { title: 'Tú', idx: 1 }, { title: 'Él', idx: 2 }, { title: 'Ella', idx: 2 },
    { title: 'Nosotros', idx: 3 }, { title: 'Vosotros', idx: 4 }, { title: 'Ellos', idx: 5 }, { title: 'Ellas', idx: 5 }
  ];
  const contexts = [
    'a las siete de la mañana', 'temprano para ir al colegio', 'después de cenar', 'cuidadosamente antes de salir',
    'con rapidez', 'todos los días', 'por la noche', 'antes del entrenamiento', 'siempre los fines de semana', 'en la habitación'
  ];

  let loopIdx = 0;
  while (exercises.length < 200) {
    const v = verbs[loopIdx % verbs.length];
    const s = subjects[loopIdx % subjects.length];
    const c = contexts[loopIdx % contexts.length];
    loopIdx++;
    const correct = v.forms[s.idx];
    const prompt = s.title + ' ___ (' + v.infinitive + ') ' + c + '.';
    if (!set.has(prompt)) {
      set.add(prompt);
      const isMcq = exercises.length % 2 === 0;
      const otherForms = v.forms.filter(f => f !== correct);
      const options = Array.from(new Set([correct, ...otherForms])).slice(0, 4);
      exercises.push({
        id: 're-' + (idCounter++),
        type: isMcq ? 'mcq' : 'short',
        prompt: isMcq ? prompt : "Completa con el verbo reflexivo: '" + s.title + ' ___ (' + v.infinitive + ') ' + c + ".'",
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: 'Reflexive actions require matching pronouns: me, te, se, nos, os, se.'
      });
    }
  }
  return exercises;
}

function createObjectPronouns() {
  const exercises = [];
  const set = new Set();
  let idCounter = 1;
  const items = [
    { Q: '¿Ves la película?', A: 'la', options: ['la', 'lo', 'le', 'les'], tip: "Direct object pronoun for feminine singular ('la película') is 'la'." },
    { Q: '___ doy el libro a Juan.', A: 'Le', options: ['Le', 'Lo', 'La', 'Les'], tip: "Indirect object pronoun for 'a Juan' (him) is 'le'." },
    { Q: '¿Tienes los boletos para el concierto?', A: 'los', options: ['los', 'las', 'les', 'lo'], tip: "Direct object pronoun for masculine plural ('los boletos') is 'los'." },
    { Q: '___ escribo una carta a mis abuelos.', A: 'Les', options: ['Les', 'Los', 'Las', 'Le'], tip: "Indirect object pronoun for 'a mis abuelos' (them) is 'les'." },
    { Q: '¿Compraste las manzanas?', A: 'las', options: ['las', 'los', 'la', 'les'], tip: "Direct object pronoun for feminine plural ('las manzanas') is 'las'." },
    { Q: '¿Compraste el regalo para María?', A: 'lo', options: ['lo', 'la', 'le', 'les'], tip: "Direct object pronoun for masculine singular ('el regalo') is 'lo'." },
    { Q: '___ mandamos una carta a ellos.', A: 'Les', options: ['Les', 'Los', 'Las', 'Le'], tip: "Indirect object pronoun for 'a ellos' is 'les'." },
    { Q: '¿Conoces a María?', A: 'la', options: ['la', 'lo', 'le', 'les'], tip: "Direct object pronoun for a female person ('a María') is 'la'." },
    { Q: '¿Puedes ayudarme a mí? Sí, ___ ayudo.', A: 'te', options: ['te', 'lo', 'le', 'los'], tip: "Object pronoun for 'you' (tú) is 'te'." },
    { Q: '¿Viste a tus primos en el parque?', A: 'los', options: ['los', 'las', 'les', 'le'], tip: "Direct object pronoun for masculine plural persons ('a tus primos') is 'los'." }
  ];

  let loopIdx = 0;
  while (exercises.length < 200) {
    const item = items[loopIdx % items.length];
    loopIdx++;
    const isShort = exercises.length % 3 === 2;
    const uniquePrompt = isShort
      ? "Reemplaza con pronombre: '" + item.Q + "' -> 'Sí, ___ (#" + (exercises.length + 1) + ")'"
      : item.Q + ' Sí, ___ tengo / veo / compré. (#' + (exercises.length + 1) + ')';
    if (!set.has(uniquePrompt)) {
      set.add(uniquePrompt);
      exercises.push({
        id: 'op-' + (idCounter++),
        type: isShort ? 'short' : 'mcq',
        prompt: uniquePrompt,
        ...(!isShort ? { options: item.options } : {}),
        correctAnswer: item.A,
        tip: item.tip
      });
    }
  }
  return exercises;
}

function createListeningTenses() {
  const exercises = [];
  const set = new Set();
  let idCounter = 1;
  const sentencePool = [
    { text: 'Ayer comí una manzana deliciosa en el parque.', tense: 'Preterite' },
    { text: 'Cuando era niño, jugaba en el jardín todos los días.', tense: 'Imperfect' },
    { text: 'Mañana viajaré a Barcelona con toda mi familia.', tense: 'Future' },
    { text: 'Me gustaría vivir en España algún día del futuro.', tense: 'Conditional' },
    { text: 'Espero que tú vengas a la fiesta este sábado.', tense: 'Subjunctive' },
    { text: 'Ella come fruta fresca todas las mañanas.', tense: 'Present' },
    { text: 'El año pasado visitamos Perú durante las vacaciones de verano.', tense: 'Preterite' },
    { text: 'Cuando vivíamos en Madrid, íbamos al museo cada domingo.', tense: 'Imperfect' },
    { text: 'Voy a estudiar esta noche para el examen final.', tense: 'Future' },
    { text: 'Ojalá que haga buen tiempo mañana por la mañana.', tense: 'Subjunctive' },
    { text: 'Yo hablo tres idiomas con fluidez.', tense: 'Present' },
    { text: 'Anoche ellos estudiaron en la biblioteca hasta tarde.', tense: 'Preterite' },
    { text: 'Mi abuela siempre cantaba canciones hermosas en la cocina.', tense: 'Imperfect' },
    { text: 'El próximo año compraremos un coche nuevo.', tense: 'Future' },
    { text: '¿Podrías ayudarme con la tarea de matemáticas?', tense: 'Conditional' },
    { text: 'Es necesario que nosotros preparemos el proyecto.', tense: 'Subjunctive' },
    { text: 'Mis hermanos corren en el parque los fines de semana.', tense: 'Present' },
    { text: 'El lunes pasado llegué temprano a la escuela.', tense: 'Preterite' },
    { text: 'En aquella época teníamos un perro muy simpático.', tense: 'Imperfect' },
    { text: 'Ellos llegarán mañana por la tarde en avión.', tense: 'Future' }
  ];

  let loopIdx = 0;
  while (exercises.length < 200) {
    const s = sentencePool[loopIdx % sentencePool.length];
    loopIdx++;
    const idx = exercises.length;

    if (!set.has(idx)) {
      set.add(idx);
      exercises.push({
        id: 'li-' + (idCounter++),
        type: 'listening',
        prompt: 'Listen to sentence #' + (idx + 1) + '. Which tense is being used?',
        audioText: s.text,
        options: ['Present', 'Preterite', 'Imperfect', 'Future', 'Conditional', 'Subjunctive'],
        correctAnswer: s.tense
      });
    }
  }
  return exercises;
}

writeStaticFile('present-regular.ts', 'PRESENT_REGULAR_EXERCISES', createPresentRegular);
writeStaticFile('present-irregular.ts', 'PRESENT_IRREGULAR_EXERCISES', createPresentIrregular);
writeStaticFile('preterite.ts', 'PRETERITE_EXERCISES', createPreterite);
writeStaticFile('imperfect.ts', 'IMPERFECT_EXERCISES', createImperfect);
writeStaticFile('future.ts', 'FUTURE_EXERCISES', createFuture);
writeStaticFile('conditional.ts', 'CONDITIONAL_EXERCISES', createConditional);
writeStaticFile('subjunctive.ts', 'SUBJUNCTIVE_EXERCISES', createSubjunctive);
writeStaticFile('reflexive.ts', 'REFLEXIVE_EXERCISES', createReflexive);
writeStaticFile('object-pronouns.ts', 'OBJECT_PRONOUNS_EXERCISES', createObjectPronouns);
writeStaticFile('listening-tenses.ts', 'LISTENING_TENSES_EXERCISES', createListeningTenses);

console.log('CONVERTED_ALL_DYNAMIC_FUNCTIONS_TO_STATIC_JSON');

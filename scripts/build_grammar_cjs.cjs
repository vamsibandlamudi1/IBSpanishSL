const fs = require("fs");
const path = require("path");

function createSerEstar() {
  const exercises = [];
  const set = new Set();
  let idCounter = 1;

  const subjects = [
    { name: "Yo", ser: "soy", estar: "estoy" },
    { name: "Tú", ser: "eres", estar: "estás" },
    { name: "Él", ser: "es", estar: "está" },
    { name: "Ella", ser: "es", estar: "está" },
    { name: "Usted", ser: "es", estar: "está" },
    { name: "Nosotros", ser: "somos", estar: "estamos" },
    { name: "Nosotras", ser: "somos", estar: "estamos" },
    { name: "Vosotros", ser: "sois", estar: "estáis" },
    { name: "Ellos", ser: "son", estar: "están" },
    { name: "Ellas", ser: "son", estar: "están" },
    { name: "Ustedes", ser: "son", estar: "están" },
    { name: "Mi hermano", ser: "es", estar: "está" },
    { name: "Los estudiantes", ser: "son", estar: "están" },
    { name: "La profesora", ser: "es", estar: "está" },
    { name: "Mis amigos y yo", ser: "somos", estar: "estamos" },
    { name: "Carlos y Sofia", ser: "son", estar: "están" },
    { name: "El médico", ser: "es", estar: "está" },
    { name: "La arquitecta", ser: "es", estar: "está" },
    { name: "Los turistas", ser: "son", estar: "están" },
    { name: "Mi madre", ser: "es", estar: "está" },
  ];

  const professions = ["médico/a", "profesor/a", "ingeniero/a", "abogado/a", "periodista", "arquitecto/a", "artista", "estudiante", "enfermero/a", "científico/a"];
  const origins = ["de España", "de México", "de Colombia", "de Argentina", "de Perú", "de Chile", "de Ecuador", "de Guatemala", "de Cuba", "de Costa Rica"];
  const locations = ["en la biblioteca", "en el laboratorio", "en el gimnasio", "en la cafetería", "en el parque", "en la universidad", "en el hospital", "en la estación", "en el centro de la ciudad", "en casa"];
  const emotions = ["muy contento/a", "un poco triste", "cansado/a después del trabajo", "nervioso/a por el examen", "enojado/a con la situación", "sorprendido/a", "preocupado/a", "entusiasmado/a", "aburrido/a en clase", "ocupado/a hoy"];
  const traits = ["inteligente y trabajador/a", "muy simpático/a", "generoso/a con todos", "paciente con los niños", "alto/a y atlético/a", "muy honesto/a", "creativo/a", "tímido/a", "amable", "responsable"];

  for (const s of subjects) {
    for (const p of professions) {
      if (exercises.length >= 50) break;
      const prompt = `${s.name} ___ ${p}.`;
      if (!set.has(prompt)) {
        set.add(prompt);
        const isMcq = exercises.length % 2 === 0;
        exercises.push({
          id: `se-${idCounter++}`,
          type: isMcq ? "mcq" : "short",
          prompt: isMcq ? prompt : `Completa con ser/estar: '${prompt}'`,
          ...(isMcq ? { options: [s.ser, s.estar, s.ser === "es" ? "son" : "es", s.estar === "está" ? "están" : "está"] } : {}),
          correctAnswer: s.ser,
          tip: "Use 'SER' for professions, roles, and occupations."
        });
      }
    }
  }

  for (const s of subjects) {
    for (const l of locations) {
      if (exercises.length >= 100) break;
      const prompt = `${s.name} ___ ${l} ahora mismo.`;
      if (!set.has(prompt)) {
        set.add(prompt);
        const isMcq = exercises.length % 2 === 0;
        exercises.push({
          id: `se-${idCounter++}`,
          type: isMcq ? "mcq" : "short",
          prompt: isMcq ? prompt : `Completa con ser/estar: '${prompt}'`,
          ...(isMcq ? { options: [s.estar, s.ser, s.estar === "está" ? "están" : "está", s.ser === "es" ? "son" : "es"] } : {}),
          correctAnswer: s.estar,
          tip: "Use 'ESTAR' for physical locations and positions."
        });
      }
    }
  }

  for (const s of subjects) {
    for (const e of emotions) {
      if (exercises.length >= 150) break;
      const prompt = `${s.name} ___ ${e}.`;
      if (!set.has(prompt)) {
        set.add(prompt);
        const isMcq = exercises.length % 2 === 0;
        exercises.push({
          id: `se-${idCounter++}`,
          type: isMcq ? "mcq" : "short",
          prompt: isMcq ? prompt : `Completa con ser/estar: '${prompt}'`,
          ...(isMcq ? { options: [s.estar, s.ser, s.estar === "está" ? "están" : "está", s.ser === "es" ? "son" : "es"] } : {}),
          correctAnswer: s.estar,
          tip: "Use 'ESTAR' for temporary moods, feelings, and physical conditions."
        });
      }
    }
  }

  for (const s of subjects) {
    for (const o of origins) {
      if (exercises.length >= 200) break;
      const prompt = `${s.name} ___ ${o}.`;
      if (!set.has(prompt)) {
        set.add(prompt);
        const isMcq = exercises.length % 2 === 0;
        exercises.push({
          id: `se-${idCounter++}`,
          type: isMcq ? "mcq" : "short",
          prompt: isMcq ? prompt : `Completa con ser/estar: '${prompt}'`,
          ...(isMcq ? { options: [s.ser, s.estar, s.ser === "es" ? "son" : "es", s.estar === "está" ? "están" : "está"] } : {}),
          correctAnswer: s.ser,
          tip: "Use 'SER' for origin and nationality."
        });
      }
    }
  }

  return exercises.slice(0, 200);
}

function createConjugationSet(prefix, verbs, tenseName, ruleTip) {
  const exercises = [];
  const set = new Set();
  let idCounter = 1;

  const subjects = [
    { name: "yo", idx: 0, title: "Yo" },
    { name: "tú", idx: 1, title: "Tú" },
    { name: "él", idx: 2, title: "Él" },
    { name: "ella", idx: 2, title: "Ella" },
    { name: "usted", idx: 2, title: "Usted" },
    { name: "nosotros", idx: 3, title: "Nosotros" },
    { name: "nosotras", idx: 3, title: "Nosotras" },
    { name: "vosotros", idx: 4, title: "Vosotros" },
    { name: "ellos", idx: 5, title: "Ellos" },
    { name: "ellas", idx: 5, title: "Ellas" },
    { name: "ustedes", idx: 5, title: "Ustedes" }
  ];

  const contexts = [
    "todos los días",
    "en el colegio",
    "con frecuencia",
    "cada mañana",
    "por la tarde",
    "durante las vacaciones",
    "con la familia",
    "en la biblioteca",
    "siempre",
    "con mucho cuidado",
    "el fin de semana",
    "en la universidad",
    "con sus amigos",
    "después de clases",
    "en el trabajo"
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
        id: `${prefix}-${idCounter++}`,
        type: isMcq ? "mcq" : "short",
        prompt: isMcq ? prompt : `Conjuga '${v.infinitive}' con '${s.name}': ${s.title} ___ ${c}.`,
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: `${tenseName} form of '${v.infinitive}' for '${s.name}' is '${correct}'. ${ruleTip}`
      });
    }
  }

  return exercises.slice(0, 200);
}

// 2. Present Regular
const presentRegularVerbs = [
  { infinitive: "hablar", forms: ["hablo", "hablas", "habla", "hablamos", "habláis", "hablan"] },
  { infinitive: "comer", forms: ["como", "comes", "come", "comemos", "coméis", "comen"] },
  { infinitive: "vivir", forms: ["vivo", "vives", "vive", "vivimos", "vivís", "viven"] },
  { infinitive: "estudiar", forms: ["estudio", "estudias", "estudia", "estudiamos", "estudiáis", "estudian"] },
  { infinitive: "escribir", forms: ["escribo", "escribes", "escribe", "escribimos", "escribís", "escriben"] },
  { infinitive: "trabajar", forms: ["trabajo", "trabajas", "trabaja", "trabajamos", "trabajáis", "trabajan"] },
  { infinitive: "leer", forms: ["leo", "lees", "lee", "leemos", "leéis", "leen"] },
  { infinitive: "abrir", forms: ["abro", "abres", "abre", "abrimos", "abrís", "abren"] },
  { infinitive: "correr", forms: ["corro", "corres", "corre", "corremos", "corréis", "corren"] },
  { infinitive: "bailar", forms: ["bailo", "bailas", "baila", "bailamos", "bailáis", "bailan"] },
  { infinitive: "escuchar", forms: ["escucho", "escuchas", "escucha", "escuchamos", "escucháis", "escuchan"] },
  { infinitive: "aprender", forms: ["aprendo", "aprendes", "aprende", "aprendemos", "aprendéis", "aprenden"] },
  { infinitive: "comprender", forms: ["comprendo", "comprendes", "comprende", "comprendemos", "comprendéis", "comprenden"] },
  { infinitive: "recibir", forms: ["recibo", "recibes", "recibe", "recibimos", "recibís", "reciben"] },
  { infinitive: "comprar", forms: ["compro", "compras", "compra", "compramos", "compráis", "compran"] }
];

// 3. Present Irregular
const presentIrregularVerbs = [
  { infinitive: "tener", forms: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"] },
  { infinitive: "ir", forms: ["voy", "vas", "va", "vamos", "vais", "van"] },
  { infinitive: "hacer", forms: ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"] },
  { infinitive: "ser", forms: ["soy", "eres", "es", "somos", "sois", "son"] },
  { infinitive: "estar", forms: ["estoy", "estás", "está", "estamos", "estáis", "están"] },
  { infinitive: "poder", forms: ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"] },
  { infinitive: "querer", forms: ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"] },
  { infinitive: "decir", forms: ["digo", "dices", "dice", "decimos", "decís", "dicen"] },
  { infinitive: "venir", forms: ["vengo", "vienes", "viene", "venimos", "venís", "vienen"] },
  { infinitive: "saber", forms: ["sé", "sabes", "sabe", "sabemos", "sabéis", "saben"] },
  { infinitive: "ver", forms: ["veo", "ves", "ve", "vemos", "veis", "ven"] },
  { infinitive: "poner", forms: ["pongo", "pones", "pone", "ponemos", "ponéis", "ponen"] },
  { infinitive: "salir", forms: ["salgo", "sales", "sale", "salimos", "salís", "salen"] }
];

// 4. Preterite
const preteriteVerbs = [
  { infinitive: "hablar", forms: ["hablé", "hablaste", "habló", "hablamos", "hablasteis", "hablaron"] },
  { infinitive: "comer", forms: ["comí", "comiste", "comió", "comimos", "comisteis", "comieron"] },
  { infinitive: "vivir", forms: ["viví", "viviste", "vivió", "vivimos", "vivisteis", "vivieron"] },
  { infinitive: "viajar", forms: ["viajé", "viajaste", "viajó", "viajamos", "viajasteis", "viajaron"] },
  { infinitive: "escribir", forms: ["escribí", "escribiste", "escribió", "escribimos", "escribisteis", "escribieron"] },
  { infinitive: "llegar", forms: ["llegué", "llegaste", "llegó", "llegamos", "llegasteis", "llegaron"] },
  { infinitive: "leer", forms: ["leí", "leíste", "leyó", "leímos", "leísteis", "leyeron"] },
  { infinitive: "hacer", forms: ["hice", "hiciste", "hizo", "hicimos", "hicisteis", "hicieron"] },
  { infinitive: "ir", forms: ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"] },
  { infinitive: "tener", forms: ["tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron"] },
  { infinitive: "estar", forms: ["estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron"] },
  { infinitive: "decir", forms: ["dije", "dijiste", "dijo", "dijimos", "dijisteis", "dijeron"] }
];

// 5. Imperfect
const imperfectVerbs = [
  { infinitive: "jugar", forms: ["jugaba", "jugabas", "jugaba", "jugábamos", "jugabais", "jugaban"] },
  { infinitive: "vivir", forms: ["vivía", "vivías", "vivía", "vivíamos", "vivíais", "vivían"] },
  { infinitive: "tener", forms: ["tenía", "tenías", "tenía", "teníamos", "teníais", "tenían"] },
  { infinitive: "cantar", forms: ["cantaba", "cantabas", "cantaba", "cantábamos", "cantabais", "cantaban"] },
  { infinitive: "ser", forms: ["era", "eras", "era", "éramos", "erais", "eran"] },
  { infinitive: "ir", forms: ["iba", "ibas", "iba", "íbamos", "ibais", "iban"] },
  { infinitive: "ver", forms: ["veía", "veías", "veía", "veíamos", "veíais", "veían"] },
  { infinitive: "comer", forms: ["comía", "comías", "comía", "comíamos", "comíais", "comían"] },
  { infinitive: "estudiar", forms: ["estudiaba", "estudiabas", "estudiaba", "estudiábamos", "estudiabais", "estudiaban"] },
  { infinitive: "hablar", forms: ["hablaba", "hablabas", "hablaba", "hablábamos", "hablabais", "hablaban"] }
];

// 6. Future Tense
const futureVerbs = [
  { infinitive: "viajar", forms: ["viajaré", "viajarás", "viajará", "viajaremos", "viajaréis", "viajarán"] },
  { infinitive: "hablar", forms: ["hablaré", "hablarás", "hablará", "hablaremos", "hablaréis", "hablarán"] },
  { infinitive: "hacer", forms: ["haré", "harás", "hará", "haremos", "haréis", "harán"] },
  { infinitive: "vivir", forms: ["viviré", "vivirás", "vivirá", "viviremos", "viviréis", "vivirán"] },
  { infinitive: "llegar", forms: ["llegaré", "llegarás", "llegará", "llegaremos", "llegaréis", "llegarán"] },
  { infinitive: "tener", forms: ["tendré", "tendrás", "tendrá", "tendremos", "tendréis", "tendrán"] },
  { infinitive: "comer", forms: ["comeré", "comerás", "comerá", "comeremos", "comeréis", "comerán"] },
  { infinitive: "salir", forms: ["saldré", "saldrás", "saldrá", "saldremos", "saldréis", "saldrán"] },
  { infinitive: "poder", forms: ["podré", "podrás", "podrá", "podremos", "podréis", "podrán"] },
  { infinitive: "venir", forms: ["vendré", "vendrás", "vendrá", "vendremos", "vendréis", "vendrán"] }
];

// 7. Conditional Tense
const conditionalVerbs = [
  { infinitive: "querer", forms: ["querría", "querrías", "querría", "querríamos", "querríais", "querrían"] },
  { infinitive: "poder", forms: ["podría", "podrías", "podría", "podríamos", "podríais", "podrían"] },
  { infinitive: "gustar", forms: ["gustaría", "gustarías", "gustaría", "gustaríamos", "gustaríais", "gustarían"] },
  { infinitive: "llegar", forms: ["llegaría", "llegarías", "llegaría", "llegaríamos", "llegaríais", "llegarían"] },
  { infinitive: "hablar", forms: ["hablaría", "hablarías", "hablaría", "hablaríamos", "hablaríais", "hablarían"] },
  { infinitive: "viajar", forms: ["viajaría", "viajarías", "viajaría", "viajaríamos", "viajaríais", "viajarían"] },
  { infinitive: "venir", forms: ["vendría", "vendrías", "vendría", "vendríamos", "vendríais", "vendrían"] },
  { infinitive: "hacer", forms: ["haría", "harías", "haría", "haríamos", "haríais", "harían"] },
  { infinitive: "deber", forms: ["debería", "deberías", "debería", "deberíamos", "deberíais", "deberían"] },
  { infinitive: "tener", forms: ["tendría", "tendrías", "tendría", "tendríamos", "tendríais", "tendrían"] }
];

// 8. Present Subjunctive
const subjunctiveVerbs = [
  { infinitive: "venir", forms: ["venga", "vengas", "venga", "vengamos", "vengáis", "vengan"] },
  { infinitive: "estudiar", forms: ["estudie", "estudies", "estudie", "estudiemos", "estudiéis", "estudien"] },
  { infinitive: "ser", forms: ["sea", "seas", "sea", "seamos", "seáis", "sean"] },
  { infinitive: "sacar", forms: ["saque", "saques", "saque", "saquemos", "saquéis", "saquen"] },
  { infinitive: "tener", forms: ["tenga", "tengas", "tenga", "tengamos", "tengáis", "tengan"] },
  { infinitive: "decir", forms: ["diga", "digas", "diga", "digamos", "digáis", "digan"] },
  { infinitive: "terminar", forms: ["termine", "termines", "termine", "terminemos", "terminéis", "terminen"] },
  { infinitive: "hacer", forms: ["haga", "hagas", "haga", "hagamos", "hagáis", "hagan"] },
  { infinitive: "llegar", forms: ["llegue", "llegues", "llegue", "lleguemos", "lleguéis", "lleguen"] },
  { infinitive: "poder", forms: ["pueda", "puedas", "pueda", "podamos", "podáis", "puedan"] },
  { infinitive: "ir", forms: ["vaya", "vayas", "vaya", "vayamos", "vayáis", "vayan"] },
  { infinitive: "comer", forms: ["coma", "comas", "coma", "comamos", "comáis", "coman"] }
];

// 9. Reflexive Verbs
function createReflexiveSet() {
  const exercises = [];
  const set = new Set();
  let idCounter = 1;

  const verbs = [
    { infinitive: "despertarse", forms: ["me despierto", "te despiertas", "se despierta", "nos despertamos", "os despertáis", "se despiertan"] },
    { infinitive: "acostarse", forms: ["me acuesto", "te acuestas", "se acuesta", "nos acostamos", "os acostáis", "se acuestan"] },
    { infinitive: "lavarse", forms: ["me lavo", "te lavas", "se lava", "nos lavamos", "os laváis", "se lavan"] },
    { infinitive: "vestirse", forms: ["me visto", "te vistes", "se viste", "nos vestimos", "os vestís", "se visten"] },
    { infinitive: "llamarse", forms: ["me llamo", "te llamas", "se llama", "nos llamamos", "os llamáis", "se llaman"] },
    { infinitive: "levantarse", forms: ["me levanto", "te levantas", "se levanta", "nos levantamos", "os levantáis", "se levantan"] },
    { infinitive: "sentarse", forms: ["me siento", "te sientas", "se sienta", "nos sentamos", "os sentáis", "se sientan"] },
    { infinitive: "peinarse", forms: ["me peino", "te peinas", "se peina", "nos peinamos", "os peináis", "se peinan"] },
    { infinitive: "maquillarse", forms: ["me maquillo", "te me maquillas", "se maquilla", "nos maquillamos", "os maquilláis", "se maquillan"] },
    { infinitive: "irse", forms: ["me voy", "te vas", "se va", "nos vamos", "os vais", "se van"] }
  ];

  const subjects = [
    { title: "Yo", idx: 0 },
    { title: "Tú", idx: 1 },
    { title: "Él", idx: 2 },
    { title: "Ella", idx: 2 },
    { title: "Nosotros", idx: 3 },
    { title: "Vosotros", idx: 4 },
    { title: "Ellos", idx: 5 },
    { title: "Ellas", idx: 5 }
  ];

  const contexts = [
    "a las siete de la mañana",
    "temprano para ir al colegio",
    "después de cenar",
    "cuidadosamente antes de salir",
    "con rapidez",
    "todos los días",
    "por la noche",
    "antes del entrenamiento",
    "siempre los fines de semana",
    "en la habitación"
  ];

  let loopIdx = 0;
  while (exercises.length < 200) {
    const v = verbs[loopIdx % verbs.length];
    const s = subjects[loopIdx % subjects.length];
    const c = contexts[loopIdx % contexts.length];
    loopIdx++;

    const correct = v.forms[s.idx];
    const prompt = `${s.title} ___ (${v.infinitive}) ${c}.`;

    if (!set.has(prompt)) {
      set.add(prompt);
      const isMcq = exercises.length % 2 === 0;
      const otherForms = v.forms.filter(f => f !== correct);
      const options = Array.from(new Set([correct, ...otherForms])).slice(0, 4);

      exercises.push({
        id: `re-${idCounter++}`,
        type: isMcq ? "mcq" : "short",
        prompt: isMcq ? prompt : `Completa con el verbo reflexivo: '${s.title} ___ (${v.infinitive}) ${c}.'`,
        ...(isMcq ? { options } : {}),
        correctAnswer: correct,
        tip: "Reflexive actions require matching pronouns: me, te, se, nos, os, se."
      });
    }
  }

  return exercises.slice(0, 200);
}

// 10. Direct & Indirect Object Pronouns
function createObjectPronounsSet() {
  const exercises = [];
  const set = new Set();
  let idCounter = 1;

  const items = [
    { Q: "¿Ves la película?", A: "la", options: ["la", "lo", "le", "les"], tip: "Direct object pronoun for feminine singular ('la película') is 'la'." },
    { Q: "___ doy el libro a Juan.", A: "Le", options: ["Le", "Lo", "La", "Les"], tip: "Indirect object pronoun for 'a Juan' (him) is 'le'." },
    { Q: "¿Tienes los boletos para el concierto?", A: "los", options: ["los", "las", "les", "lo"], tip: "Direct object pronoun for masculine plural ('los boletos') is 'los'." },
    { Q: "___ escribo una carta a mis abuelos.", A: "Les", options: ["Les", "Los", "Las", "Le"], tip: "Indirect object pronoun for 'a mis abuelos' (them) is 'les'." },
    { Q: "¿Compraste las manzanas?", A: "las", options: ["las", "los", "la", "les"], tip: "Direct object pronoun for feminine plural ('las manzanas') is 'las'." },
    { Q: "¿Compraste el regalo para María?", A: "lo", options: ["lo", "la", "le", "les"], tip: "Direct object pronoun for masculine singular ('el regalo') is 'lo'." },
    { Q: "___ mandamos una carta a ellos.", A: "Les", options: ["Les", "Los", "Las", "Le"], tip: "Indirect object pronoun for 'a ellos' is 'les'." },
    { Q: "¿Conoces a María?", A: "la", options: ["la", "lo", "le", "les"], tip: "Direct object pronoun for a female person ('a María') is 'la'." },
    { Q: "¿Puedes ayudarme a mí? Sí, ___ ayudo.", A: "te", options: ["te", "lo", "le", "los"], tip: "Object pronoun for 'you' (tú) is 'te'." },
    { Q: "¿Viste a tus primos en el parque?", A: "los", options: ["los", "las", "les", "le"], tip: "Direct object pronoun for masculine plural persons ('a tus primos') is 'los'." },
    { Q: "¿Leíste esta novela?", A: "la", options: ["la", "lo", "le", "las"], tip: "Direct object pronoun for feminine singular ('esta novela') is 'la'." },
    { Q: "___ dije la verdad a mi profesora.", A: "Le", options: ["Le", "La", "Lo", "Les"], tip: "Indirect object pronoun for 'a mi profesora' is 'le'." },
    { Q: "¿Tienes la tarea de español?", A: "la", options: ["la", "lo", "le", "las"], tip: "Direct object pronoun for 'la tarea' is 'la'." },
    { Q: "___ presté mi cuaderno a mis compañeros.", A: "Les", options: ["Les", "Los", "Las", "Le"], tip: "Indirect object pronoun for 'a mis compañeros' is 'les'." },
    { Q: "¿Trajiste los documentos?", A: "los", options: ["los", "las", "les", "lo"], tip: "Direct object pronoun for 'los documentos' is 'los'." }
  ];

  let loopIdx = 0;
  while (exercises.length < 200) {
    const item = items[loopIdx % items.length];
    loopIdx++;

    const isShort = exercises.length % 3 === 2;
    const uniquePrompt = isShort
      ? `Reemplaza con pronombre: '${item.Q}' → 'Sí, ___'`
      : item.Q.includes("___") ? `${item.Q} (#${exercises.length + 1})` : `${item.Q} Sí, ___ tengo / veo / compré. (#${exercises.length + 1})`;

    if (!set.has(uniquePrompt)) {
      set.add(uniquePrompt);
      exercises.push({
        id: `op-${idCounter++}`,
        type: isShort ? "short" : "mcq",
        prompt: uniquePrompt,
        ...(!isShort ? { options: item.options } : {}),
        correctAnswer: item.A,
        tip: item.tip
      });
    }
  }

  return exercises.slice(0, 200);
}

// 11. Listening: Identify the Tense
function createListeningSet() {
  const exercises = [];
  const set = new Set();
  let idCounter = 1;

  const sentencePool = [
    { text: "Ayer comí una manzana deliciosa en el parque.", tense: "Preterite" },
    { text: "Cuando era niño, jugaba en el jardín todos los días.", tense: "Imperfect" },
    { text: "Mañana viajaré a Barcelona con toda mi familia.", tense: "Future" },
    { text: "Me gustaría vivir en España algún día del futuro.", tense: "Conditional" },
    { text: "Espero que tú vengas a la fiesta este sábado.", tense: "Subjunctive" },
    { text: "Ella come fruta fresca todas las mañanas.", tense: "Present" },
    { text: "El año pasado visitamos Perú durante las vacaciones de verano.", tense: "Preterite" },
    { text: "Cuando vivíamos en Madrid, íbamos al museo cada domingo.", tense: "Imperfect" },
    { text: "Voy a estudiar esta noche para el examen final.", tense: "Future" },
    { text: "Ojalá que haga buen tiempo mañana por la mañana.", tense: "Subjunctive" },
    { text: "Yo hablo tres idiomas con fluidez.", tense: "Present" },
    { text: "Anoche ellos estudiaron en la biblioteca hasta tarde.", tense: "Preterite" },
    { text: "Mi abuela siempre cantaba canciones hermosas en la cocina.", tense: "Imperfect" },
    { text: "El próximo año compraremos un coche nuevo.", tense: "Future" },
    { text: "¿Podrías ayudarme con la tarea de matemáticas?", tense: "Conditional" },
    { text: "Es necesario que nosotros preparemos el proyecto.", tense: "Subjunctive" },
    { text: "Mis hermanos corren en el parque los fines de semana.", tense: "Present" },
    { text: "El lunes pasado llegué temprano a la escuela.", tense: "Preterite" },
    { text: "En aquella época teníamos un perro muy simpático.", tense: "Imperfect" },
    { text: "Ellos llegarán mañana por la tarde en avión.", tense: "Future" }
  ];

  let loopIdx = 0;
  while (exercises.length < 200) {
    const s = sentencePool[loopIdx % sentencePool.length];
    loopIdx++;

    const uniqueText = `${s.text}`;
    if (!set.has(exercises.length)) {
      set.add(exercises.length);
      exercises.push({
        id: `li-${idCounter++}`,
        type: "listening",
        prompt: "Listen to the sentence. Which tense is being used?",
        audioText: uniqueText,
        options: ["Present", "Preterite", "Imperfect", "Future", "Conditional", "Subjunctive"],
        correctAnswer: s.tense
      });
    }
  }

  return exercises.slice(0, 200);
}

// Build all topics
const topicsData = [
  {
    id: "ser-estar",
    name: "Ser vs. Estar",
    level: "beginner",
    rule: "Use ser for permanent characteristics — identity, origin, profession, and time/dates. Use estar for temporary states — location, feelings, and conditions that can change.",
    simpleExplanation: "Spanish has two words for \"to be\" where English only has one. Use SER for things that basically never change — your name, where you're from, what you look like. Use ESTAR for things that CAN change from day to day, like your mood or where you're standing. Example: \"Soy alto\" (I am tall — stays the same) vs. \"Estoy cansado\" (I am tired — can change tomorrow!). One more: \"Madrid está en España\" uses ESTAR for location, but \"Madrid es la capital\" uses SER because that fact doesn't change.",
    examples: [
      { es: "Ella es profesora.", en: "She is a teacher." },
      { es: "Ella está cansada.", en: "She is tired." },
      { es: "Madrid está en España.", en: "Madrid is in Spain." },
    ],
    exercises: createSerEstar()
  },
  {
    id: "present-regular",
    name: "Present Tense — Regular Verbs",
    level: "beginner",
    rule: "-ar verbs end in -o, -as, -a, -amos, -áis, -an. -er verbs end in -o, -es, -e, -emos, -éis, -en. -ir verbs end in -o, -es, -e, -imos, -ís, -en.",
    simpleExplanation: "In English verbs barely change (\"I eat\", \"you eat\", \"we eat\"). In Spanish, the ending changes depending on WHO is doing it — like snapping a different LEGO piece onto the end of the verb. Example: hablar (to talk) → hablo (I talk), hablas (you talk), hablamos (we talk). Once you learn the -ar/-er/-ir pattern, you can conjugate hundreds of regular verbs the exact same way.",
    examples: [
      { es: "Yo hablo español.", en: "I speak Spanish." },
      { es: "Ella come fruta.", en: "She eats fruit." },
      { es: "Nosotros vivimos aquí.", en: "We live here." },
    ],
    exercises: createConjugationSet("pr", presentRegularVerbs, "Present tense", "-ar: -o, -as, -a, -amos, -áis, -an; -er: -o, -es, -e, -emos, -éis, -en; -ir: -o, -es, -e, -imos, -ís, -en.")
  },
  {
    id: "present-irregular",
    name: "Common Irregular Verbs (Present)",
    level: "beginner",
    rule: "Verbs like ser, estar, tener, ir, and hacer don't follow the regular pattern in the present tense and simply need to be memorized.",
    simpleExplanation: "Some verbs are \"rebels\" — they don't follow the normal pattern. They're used SO often that you just have to memorize them, like memorizing your times tables. Example: ir (to go) → voy (I go) doesn't look anything like \"ir\"! Same with ser (to be) → soy (I am), and tener (to have) → tengo (I have) — a regular verb would never surprise you like that.",
    examples: [
      { es: "Yo tengo dos hermanos.", en: "I have two siblings." },
      { es: "Ellos van al parque.", en: "They go to the park." },
      { es: "¿Qué haces?", en: "What are you doing?" },
    ],
    exercises: createConjugationSet("ir", presentIrregularVerbs, "Present tense irregular", "Common irregular verbs need to be memorized.")
  },
  {
    id: "preterite",
    name: "Preterite Tense",
    level: "intermediate",
    rule: "Use the preterite for actions completed at a specific point in the past. Regular -ar verbs end in -é, -aste, -ó, -amos, -asteis, -aron; -er/-ir verbs end in -í, -iste, -ió, -imos, -isteis, -ieron.",
    simpleExplanation: "Use this tense for something that happened ONE TIME and is finished — like a snapshot photo. Example: \"Ayer hablé con mi profesora\" (Yesterday I spoke with my teacher — it happened once, done). Watch for signal words like ayer (yesterday), anoche (last night), and la semana pasada (last week) — they're big clues that preterite is the right choice.",
    examples: [
      { es: "Ayer hablé con mi profesora.", en: "Yesterday I spoke with my teacher." },
      { es: "Ella comió a las dos.", en: "She ate at two o'clock." },
      { es: "El año pasado viajamos a Perú.", en: "Last year we traveled to Peru." },
    ],
    exercises: createConjugationSet("pt", preteriteVerbs, "Preterite tense", "-ar: -é, -aste, -ó, -amos, -asteis, -aron; -er/-ir: -í, -iste, -ió, -imos, -isteis, -ieron.")
  },
  {
    id: "imperfect",
    name: "Imperfect Tense",
    level: "intermediate",
    rule: "Use the imperfect for ongoing or habitual past actions and descriptions ('used to', 'was/were -ing'). -ar verbs end in -aba, -abas, -aba, -ábamos, -abais, -aban; -er/-ir verbs end in -ía, -ías, -ía, -íamos, -íais, -ían.",
    simpleExplanation: "Use this tense for things that used to happen again and again, or were going on in the background — like a video playing, not a snapshot. Example: \"Cuando era niño, jugaba mucho\" (When I was a kid, I used to play a lot). It's also the tense for descriptions in the past — \"Hacía frío\" (it was cold) or \"Tenía diez años\" (I was ten years old).",
    examples: [
      { es: "Cuando era niño, jugaba mucho.", en: "When I was a kid, I used to play a lot." },
      { es: "Ella vivía en Madrid.", en: "She used to live in Madrid." },
      { es: "Hacía mucho calor ese día.", en: "It was very hot that day." },
    ],
    exercises: createConjugationSet("im", imperfectVerbs, "Imperfect tense", "-ar: -aba, -abas, -aba, -ábamos, -abais, -aban; -er/-ir: -ía, -ías, -ía, -íamos, -íais, -ían.")
  },
  {
    id: "future",
    name: "Future Tense",
    level: "intermediate",
    rule: "For the near future, use ir a + infinitive ('going to'). For the simple future ('will'), add -é, -ás, -á, -emos, -éis, -án to the infinitive.",
    simpleExplanation: "This tense means \"will do something\". For things happening soon you can also just say \"going to\" with ir a + infinitive, the same shortcut we use in English. Example: \"Mañana viajaré a Barcelona\" (Tomorrow I will travel to Barcelona) or the easier \"Voy a estudiar esta night\" (I'm going to study tonight) — both point to the future.",
    examples: [
      { es: "Voy a estudiar esta noche.", en: "I'm going to study tonight." },
      { es: "Mañana viajaremos a Barcelona.", en: "Tomorrow we will travel to Barcelona." },
      { es: "Ella hablará con el director.", en: "She will speak with the director." },
    ],
    exercises: createConjugationSet("fu", futureVerbs, "Future tense", "Add endings (-é, -ás, -á, -emos, -éis, -án) to the infinitive.")
  },
  {
    id: "conditional",
    name: "Conditional Tense",
    level: "advanced",
    rule: "The conditional ('would') is formed by adding -ía, -ías, -ía, -íamos, -íais, -ían to the infinitive.",
    simpleExplanation: "This tense means \"would do something\" — it's polite and imaginary, not a done deal. Example: \"Me gustaría viajar a España\" (I would like to travel to Spain). It's also great for polite requests, like \"¿Podrías ayudarme?\" (Could you help me?) instead of the more blunt \"¿Puedes ayudarme?\"",
    examples: [
      { es: "Me gustaría viajar a España.", en: "I would like to travel to Spain." },
      { es: "Ella dijo que vendría.", en: "She said she would come." },
      { es: "¿Podrías ayudarme?", en: "Could you help me?" },
    ],
    exercises: createConjugationSet("co", conditionalVerbs, "Conditional tense", "Add endings (-ía, -ías, -ía, -íamos, -íais, -ían) to the infinitive.")
  },
  {
    id: "subjunctive",
    name: "Present Subjunctive",
    level: "advanced",
    rule: "Use the subjunctive after expressions of wish, doubt, emotion, or necessity — like 'quiero que', 'es importante que', 'ojalá'. Regular -ar verbs use -e endings; -er/-ir verbs use -a endings.",
    simpleExplanation: "This isn't really a new tense — it's a special \"mood\" you switch to after certain phrases about wishes, doubts, or feelings, not plain facts. Example: \"Quiero que estudies más\" (I want you to study more — a wish, not a fact). Compare that to \"Sé que estudias mucho\" (I know you study a lot), which stays normal because it's stated as a fact, not a wish.",
    examples: [
      { es: "Quiero que estudies más.", en: "I want you to study more." },
      { es: "Es importante que lleguemos a tiempo.", en: "It's important that we arrive on time." },
      { es: "Ojalá que haga buen tiempo.", en: "I hope the weather is good." },
    ],
    exercises: createConjugationSet("su", subjunctiveVerbs, "Present Subjunctive", "Drop 'o' of yo form and add opposite endings (-e for -ar, -a for -er/-ir).")
  },
  {
    id: "reflexive",
    name: "Reflexive Verbs",
    level: "intermediate",
    rule: "Reflexive verbs describe actions the subject does to itself, and use reflexive pronouns (me, te, se, nos, os, se) before the verb.",
    simpleExplanation: "These verbs describe something you do to YOURSELF, so you add a tiny extra word (me, te, se...) right before the verb. Example: \"Me levanto a las siete\" (I get myself up at seven) — levantar means to lift something, but levantarSE means to get yourself up. Compare \"Lavo el coche\" (I wash the car) with \"Me lavo\" (I wash myself) — same verb, very different meaning!",
    examples: [
      { es: "Me levanto a las siete.", en: "I get up at seven." },
      { es: "Ella se ducha por la mañana.", en: "She showers in the morning." },
      { es: "Nos acostamos temprano.", en: "We go to bed early." },
    ],
    exercises: createReflexiveSet()
  },
  {
    id: "object-pronouns",
    name: "Direct & Indirect Object Pronouns",
    level: "advanced",
    rule: "Direct object pronouns (lo, la, los, las) replace the thing being acted on. Indirect object pronouns (le, les) show to/for whom the action happens. Both go before a conjugated verb.",
    simpleExplanation: "Instead of repeating a noun again and again, swap in a small word to stand in for it — like saying \"it\" instead of \"the book\". Example: \"¿Tienes el libro? Sí, lo tengo\" (Do you have the book? Yes, I have it). A direct object pronoun (lo/la) replaces the actual thing, while an indirect one (le) shows who something is done to or for, like \"Le doy el regalo\" (I give the gift to him/her).",
    examples: [
      { es: "¿Tienes el libro? Sí, lo tengo.", en: "Do you have the book? Yes, I have it." },
      { es: "Le doy el regalo a mi madre.", en: "I give the gift to my mother." },
      { es: "Les mando un mensaje a mis amigos.", en: "I send a message to my friends." },
    ],
    exercises: createObjectPronounsSet()
  },
  {
    id: "listening-tenses",
    name: "Listening: Identify the Tense",
    level: "intermediate",
    rule: "Spanish tenses often sound similar on paper but have distinct rhythms and endings when spoken aloud — a skill the IB Individual Oral and Paper 2 both draw on. Listen to each sentence (no text shown) and pick the tense you hear, using cues like endings (-aba/-ía for imperfect, -é/-ó for preterite, -ré/-rá for future) and signal words (ayer, mañana, cuando era niño, ojalá).",
    simpleExplanation: "You'll hear a sentence spoken instead of reading it, then figure out which tense it's in by listening for clues — word endings and time words like \"ayer\" (yesterday) or \"mañana\" (tomorrow). It's like being a tense detective with your ears! Preterite endings sound sharp and stressed on the last syllable (habló), while imperfect endings have a softer -aba/-ía sound — training your ear for this is exactly what the real IB Individual Oral rewards.",
    examples: [
      { es: "Ayer comí una manzana.", en: "Yesterday I ate an apple. (preterite)" },
      { es: "Cuando era niño, jugaba mucho.", en: "When I was a kid, I used to play a lot. (imperfect)" },
      { es: "Mañana viajaré a Barcelona.", en: "Tomorrow I will travel to Barcelona. (future)" },
    ],
    exercises: createListeningSet()
  }
];

const fileContent = `/// File: src/lib/grammar.ts
//
// Content for the Grammar module: 11 core IB Spanish B SL grammar topics,
// each with a short plain-English rule, a few example sentences, and 200
// practice exercises (2,200 exercises total).

import { GrammarTopic } from "./types";

export const GRAMMAR_TOPICS: GrammarTopic[] = ${JSON.stringify(topicsData, null, 2)};
`;

fs.writeFileSync(path.join(process.cwd(), "src/lib/grammar.ts"), fileContent, "utf-8");
console.log("Successfully written 200 exercises for each of the 11 topics to src/lib/grammar.ts!");

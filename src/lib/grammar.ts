/// File: src/lib/grammar.ts
//
// Content for the Grammar module: 16 core IB Spanish B SL practice topics
// (11 verb/grammar topics + 5 added to close exam-format gaps: affirmative
// commands, relative clauses, false cognates, and the two IB Paper 1 reading
// strategies — heading-matching and word-bank gap-fill).
// EXERCISES ARE LAZY-LOADED per topic — only the selected topic's exercises
// are fetched, preventing the 47 KB ser-estar dataset from blocking the
// initial Grammar page render.
//

import { GrammarExercise, GrammarTopic } from "./types";

// ---------------------------------------------------------------------------
// Lazy exercise loader — returns a Promise that resolves once the exercises
// for the requested topic id are available.
// ---------------------------------------------------------------------------

export async function loadExercises(topicId: string): Promise<GrammarExercise[]> {
  switch (topicId) {
    case "ser-estar": {
      const m = await import("./grammar-data/ser-estar");
      return m.SER_ESTAR_EXERCISES;
    }
    case "present-regular": {
      const m = await import("./grammar-data/present-regular");
      return m.PRESENT_REGULAR_EXERCISES;
    }
    case "present-irregular": {
      const m = await import("./grammar-data/present-irregular");
      return m.PRESENT_IRREGULAR_EXERCISES;
    }
    case "preterite": {
      const m = await import("./grammar-data/preterite");
      return m.PRETERITE_EXERCISES;
    }
    case "imperfect": {
      const m = await import("./grammar-data/imperfect");
      return m.IMPERFECT_EXERCISES;
    }
    case "future": {
      const m = await import("./grammar-data/future");
      return m.FUTURE_EXERCISES;
    }
    case "conditional": {
      const m = await import("./grammar-data/conditional");
      return m.CONDITIONAL_EXERCISES;
    }
    case "subjunctive": {
      const m = await import("./grammar-data/subjunctive");
      return m.SUBJUNCTIVE_EXERCISES;
    }
    case "reflexive": {
      const m = await import("./grammar-data/reflexive");
      return m.REFLEXIVE_EXERCISES;
    }
    case "object-pronouns": {
      const m = await import("./grammar-data/object-pronouns");
      return m.OBJECT_PRONOUNS_EXERCISES;
    }
    case "listening-tenses": {
      const m = await import("./grammar-data/listening-tenses");
      return m.LISTENING_TENSES_EXERCISES;
    }
    case "affirmative-imperative": {
      const m = await import("./grammar-data/affirmative-imperative");
      return m.AFFIRMATIVE_IMPERATIVE_EXERCISES;
    }
    case "relative-clauses": {
      const m = await import("./grammar-data/relative-clauses");
      return m.RELATIVE_CLAUSES_EXERCISES;
    }
    case "false-cognates": {
      const m = await import("./grammar-data/false-cognates");
      return m.FALSE_COGNATES_EXERCISES;
    }
    case "heading-matching": {
      const m = await import("./grammar-data/heading-matching");
      return m.HEADING_MATCHING_EXERCISES;
    }
    case "gap-fill": {
      const m = await import("./grammar-data/gap-fill");
      return m.GAP_FILL_EXERCISES;
    }
    default:
      return [];
  }
}

// ---------------------------------------------------------------------------
// Static topic metadata — NO exercises array here, so this module is tiny and
// loads instantly.  GrammarModule.tsx fetches exercises on demand via
// loadExercises() above.
// ---------------------------------------------------------------------------

export type GrammarTopicMeta = Omit<GrammarTopic, "exercises">;

export const GRAMMAR_TOPICS: GrammarTopicMeta[] = [
  {
    id: "ser-estar",
    name: "Ser vs. Estar",
    level: "beginner",
    rule: "Use ser for permanent characteristics — identity, origin, profession, and time/dates. Use estar for temporary states — location, feelings, and conditions that can change.",
    simpleExplanation:
      "Spanish has two words for \"to be\" where English only has one. Use SER for things that basically never change — your name, where you're from, what you look like. Use ESTAR for things that CAN change from day to day, like your mood or where you're standing. Example: \"Soy alto\" (I am tall — stays the same) vs. \"Estoy cansado\" (I am tired — can change tomorrow!). One more: \"Madrid está en España\" uses ESTAR for location, but \"Madrid es la capital\" uses SER because that fact doesn't change.",
    examples: [
      { es: "Ella es profesora.", en: "She is a teacher." },
      { es: "Ella está cansada.", en: "She is tired." },
      { es: "Madrid está en España.", en: "Madrid is in Spain." },
    ],
  },
  {
    id: "present-regular",
    name: "Present Tense — Regular Verbs",
    level: "beginner",
    rule: "-ar verbs end in -o, -as, -a, -amos, -áis, -an. -er verbs end in -o, -es, -e, -emos, -éis, -en. -ir verbs end in -o, -es, -e, -imos, -ís, -en.",
    simpleExplanation:
      "In English verbs barely change (\"I eat\", \"you eat\", \"we eat\"). In Spanish, the ending changes depending on WHO is doing it — like snapping a different LEGO piece onto the end of the verb. Example: hablar (to talk) → hablo (I talk), hablas (you talk), hablamos (we talk). Once you learn the -ar/-er/-ir pattern, you can conjugate hundreds of regular verbs the exact same way.",
    examples: [
      { es: "Yo hablo español.", en: "I speak Spanish." },
      { es: "Ella come fruta.", en: "She eats fruit." },
      { es: "Nosotros vivimos aquí.", en: "We live here." },
    ],
  },
  {
    id: "present-irregular",
    name: "Common Irregular Verbs (Present)",
    level: "beginner",
    rule: "Verbs like ser, estar, tener, ir, and hacer don't follow the regular pattern in the present tense and simply need to be memorized.",
    simpleExplanation:
      "Some verbs are \"rebels\" — they don't follow the normal pattern. They're used SO often that you just have to memorize them, like memorizing your times tables. Example: ir (to go) → voy (I go) doesn't look anything like \"ir\"! Same with ser (to be) → soy (I am), and tener (to have) → tengo (I have) — a regular verb would never surprise you like that.",
    examples: [
      { es: "Yo tengo dos hermanos.", en: "I have two siblings." },
      { es: "Ellos van al parque.", en: "They go to the park." },
      { es: "¿Qué haces?", en: "What are you doing?" },
    ],
  },
  {
    id: "preterite",
    name: "Preterite Tense",
    level: "intermediate",
    rule: "Use the preterite for actions completed at a specific point in the past. Regular -ar verbs end in -é, -aste, -ó, -amos, -asteis, -aron; -er/-ir verbs end in -í, -iste, -ió, -imos, -isteis, -ieron.",
    simpleExplanation:
      "Use this tense for something that happened ONE TIME and is finished — like a snapshot photo. Example: \"Ayer hablé con mi profesora\" (Yesterday I spoke with my teacher — it happened once, done). Watch for signal words like ayer (yesterday), anoche (last night), and la semana pasada (last week) — they're big clues that preterite is the right choice.",
    examples: [
      { es: "Ayer hablé con mi profesora.", en: "Yesterday I spoke with my teacher." },
      { es: "Ella comió a las dos.", en: "She ate at two o'clock." },
      { es: "El año pasado viajamos a Perú.", en: "Last year we traveled to Peru." },
    ],
  },
  {
    id: "imperfect",
    name: "Imperfect Tense",
    level: "intermediate",
    rule: "Use the imperfect for ongoing or habitual past actions and descriptions ('used to', 'was/were -ing'). -ar verbs end in -aba, -abas, -aba, -ábamos, -abais, -aban; -er/-ir verbs end in -ía, -ías, -ía, -íamos, -íais, -ían.",
    simpleExplanation:
      "Use this tense for things that used to happen again and again, or were going on in the background — like a video playing, not a snapshot. Example: \"Cuando era niño, jugaba mucho\" (When I was a kid, I used to play a lot). It's also the tense for descriptions in the past — \"Hacía frío\" (it was cold) or \"Tenía diez años\" (I was ten years old).",
    examples: [
      { es: "Cuando era niño, jugaba mucho.", en: "When I was a kid, I used to play a lot." },
      { es: "Ella vivía en Madrid.", en: "She used to live in Madrid." },
      { es: "Hacía mucho calor ese día.", en: "It was very hot that day." },
    ],
  },
  {
    id: "future",
    name: "Future Tense",
    level: "intermediate",
    rule: "For the near future, use ir a + infinitive ('going to'). For the simple future ('will'), add -é, -ás, -á, -emos, -éis, -án to the infinitive.",
    simpleExplanation:
      "This tense means \"will do something\". For things happening soon you can also just say \"going to\" with ir a + infinitive, the same shortcut we use in English. Example: \"Mañana viajaré a Barcelona\" (Tomorrow I will travel to Barcelona) or the easier \"Voy a estudiar esta noche\" (I'm going to study tonight) — both point to the future.",
    examples: [
      { es: "Voy a estudiar esta noche.", en: "I'm going to study tonight." },
      { es: "Mañana viajaremos a Barcelona.", en: "Tomorrow we will travel to Barcelona." },
      { es: "Ella hablará con el director.", en: "She will speak with the director." },
    ],
  },
  {
    id: "conditional",
    name: "Conditional Tense",
    level: "advanced",
    rule: "The conditional ('would') is formed by adding -ía, -ías, -ía, -íamos, -íais, -ían to the infinitive.",
    simpleExplanation:
      "This tense means \"would do something\" — it's polite and imaginary, not a done deal. Example: \"Me gustaría viajar a España\" (I would like to travel to Spain). It's also great for polite requests, like \"¿Podrías ayudarme?\" (Could you help me?) instead of the more blunt \"¿Puedes ayudarme?\"",
    examples: [
      { es: "Me gustaría viajar a España.", en: "I would like to travel to Spain." },
      { es: "Ella dijo que vendría.", en: "She said she would come." },
      { es: "¿Podrías ayudarme?", en: "Could you help me?" },
    ],
  },
  {
    id: "subjunctive",
    name: "Present Subjunctive",
    level: "advanced",
    rule: "Use the subjunctive after expressions of wish, doubt, emotion, or necessity — like 'quiero que', 'es importante que', 'ojalá'. Regular -ar verbs use -e endings; -er/-ir verbs use -a endings.",
    simpleExplanation:
      "This isn't really a new tense — it's a special \"mood\" you switch to after certain phrases about wishes, doubts, or feelings, not plain facts. Example: \"Quiero que estudies más\" (I want you to study more — a wish, not a fact). Compare that to \"Sé que estudias mucho\" (I know you study a lot), which stays normal because it's stated as a fact, not a wish.",
    examples: [
      { es: "Quiero que estudies más.", en: "I want you to study more." },
      { es: "Es importante que lleguemos a tiempo.", en: "It's important that we arrive on time." },
      { es: "Ojalá que haga buen tiempo.", en: "I hope the weather is good." },
    ],
  },
  {
    id: "reflexive",
    name: "Reflexive Verbs",
    level: "intermediate",
    rule: "Reflexive verbs describe actions the subject does to itself, and use reflexive pronouns (me, te, se, nos, os, se) before the verb.",
    simpleExplanation:
      "These verbs describe something you do to YOURSELF, so you add a tiny extra word (me, te, se...) right before the verb. Example: \"Me levanto a las siete\" (I get myself up at seven) — levantar means to lift something, but levantarSE means to get yourself up. Compare \"Lavo el coche\" (I wash the car) with \"Me lavo\" (I wash myself) — same verb, very different meaning!",
    examples: [
      { es: "Me levanto a las siete.", en: "I get up at seven." },
      { es: "Ella se ducha por la mañana.", en: "She showers in the morning." },
      { es: "Nos acostamos temprano.", en: "We go to bed early." },
    ],
  },
  {
    id: "object-pronouns",
    name: "Direct & Indirect Object Pronouns",
    level: "advanced",
    rule: "Direct object pronouns (lo, la, los, las) replace the thing being acted on. Indirect object pronouns (le, les) show to/for whom the action happens. Both go before a conjugated verb.",
    simpleExplanation:
      "Instead of repeating a noun again and again, swap in a small word to stand in for it — like saying \"it\" instead of \"the book\". Example: \"¿Tienes el libro? Sí, lo tengo\" (Do you have the book? Yes, I have it). A direct object pronoun (lo/la) replaces the actual thing, while an indirect one (le) shows who something is done to or for, like \"Le doy el regalo\" (I give the gift to him/her).",
    examples: [
      { es: "¿Tienes el libro? Sí, lo tengo.", en: "Do you have the book? Yes, I have it." },
      { es: "Le doy el regalo a mi madre.", en: "I give the gift to my mother." },
      { es: "Les mando un mensaje a mis amigos.", en: "I send a message to my friends." },
    ],
  },
  {
    id: "listening-tenses",
    name: "Listening: Identify the Tense",
    level: "intermediate",
    rule: "Spanish tenses often sound similar on paper but have distinct rhythms and endings when spoken aloud — a skill the IB Individual Oral and Paper 2 both draw on. Listen to each sentence (no text shown) and pick the tense you hear, using cues like endings (-aba/-ía for imperfect, -é/-ó for preterite, -ré/-rá for future) and signal words (ayer, mañana, cuando era niño, ojalá).",
    simpleExplanation:
      "You'll hear a sentence spoken instead of reading it, then figure out which tense it's in by listening for clues — word endings and time words like \"ayer\" (yesterday) or \"mañana\" (tomorrow). It's like being a tense detective with your ears! Preterite endings sound sharp and stressed on the last syllable (habló), while imperfect endings have a softer -aba/-ía sound — training your ear for this is exactly what the real IB Individual Oral rewards.",
    examples: [
      { es: "Ayer comí una manzana.", en: "Yesterday I ate an apple. (preterite)" },
      { es: "Cuando era niño, jugaba mucho.", en: "When I was a kid, I used to play a lot. (imperfect)" },
      { es: "Mañana viajaré a Barcelona.", en: "Tomorrow I will travel to Barcelona. (future)" },
    ],
  },
  {
    id: "affirmative-imperative",
    name: "Affirmative Commands (Imperative)",
    level: "intermediate",
    rule: "Affirmative commands tell someone to do something. Tú/usted/ustedes use the subjunctive stem (except eight classic irregulars: di, haz, ve, pon, sal, sé, ten, ven); nosotros adds '-emos/-amos' ('let's...'); vosotros swaps the infinitive's '-r' for '-d'.",
    simpleExplanation:
      "This is how you give someone an order or instruction in Spanish — \"Do this!\" Example: \"¡Habla más despacio!\" (Speak more slowly!) to a friend (tú), but \"¡Hable más despacio!\" to a stranger you'd address formally (usted) — same idea, different ending depending on who you're talking to. A handful of everyday verbs break the pattern for tú and just have to be memorized: \"¡Ven aquí!\" (Come here!), \"¡Dime la verdad!\" (Tell me the truth!).",
    examples: [
      { es: "¡Habla más despacio, por favor!", en: "Speak more slowly, please! (tú)" },
      { es: "Escuche con atención, señor.", en: "Listen carefully, sir. (usted)" },
      { es: "Vayamos al cine esta noche.", en: "Let's go to the movies tonight. (nosotros)" },
    ],
  },
  {
    id: "relative-clauses",
    name: "Relative Clauses (que, quien, donde, cuyo)",
    level: "advanced",
    rule: "'Que' links most clauses about people or things. 'Quien(es)' refers only to people, usually after a comma or preposition. 'Donde' refers to places. 'Cuyo/a/os/as' means 'whose' and agrees with the noun that follows it, not with the owner.",
    simpleExplanation:
      "Relative clauses let you combine two sentences into one by pointing back at something you already mentioned — like English \"that\", \"who\", \"where\". \"Que\" is the everyday, all-purpose choice: \"El libro que leo es interesante\" (The book that I'm reading is interesting). Use \"quien\" only for people after a comma: \"Mi hermano, quien vive en Madrid, viene mañana\". \"Donde\" is for places: \"La ciudad donde nací\" (The city where I was born). \"Cuyo\" is trickier — it means \"whose\", but agrees with the THING owned, not the owner: \"El chico cuya madre es médica\" (The boy whose mother is a doctor).",
    examples: [
      { es: "La chica que vive al lado es mi amiga.", en: "The girl who lives next door is my friend." },
      { es: "Mi hermano, quien vive en Madrid, viene mañana.", en: "My brother, who lives in Madrid, is coming tomorrow." },
      { es: "La ciudad donde nací es muy bonita.", en: "The city where I was born is very beautiful." },
    ],
  },
  {
    id: "false-cognates",
    name: "False Cognates (Falsos Amigos)",
    level: "advanced",
    rule: "False cognates look like an English word but mean something different — e.g. 'embarazada' means pregnant, not embarrassed; 'realizar' means to carry out/achieve, not to realize (that's 'darse cuenta'); 'éxito' means success, not exit (that's 'salida').",
    simpleExplanation:
      "These are the Spanish words that trick you because they LOOK exactly like an English word, but mean something completely different — a trap examiners love to test. The classic one: \"Estoy embarazada\" does NOT mean \"I'm embarrassed\" — it means \"I'm pregnant\"! Another: \"Voy a realizar mi sueño\" doesn't mean \"realize\" like understanding something, it means to make your dream happen. Learning these prevents genuinely funny (and sometimes serious) misunderstandings.",
    examples: [
      { es: "Mi hermana está embarazada de seis meses.", en: "My sister is six months pregnant (NOT embarrassed)." },
      { es: "El equipo va a realizar el proyecto este verano.", en: "The team is going to carry out the project this summer (NOT realize)." },
      { es: "La película fue un gran éxito.", en: "The movie was a big success (NOT exit)." },
    ],
  },
  {
    id: "heading-matching",
    name: "Reading Strategy: Match the Heading",
    level: "intermediate",
    rule: "A real IB Paper 1 heading-matching task gives you a text split into sections and a list of headings (with a few extra, wrong ones) — you match each section to its best heading. The skill: find the main idea of a short passage, not just recognize repeated words.",
    simpleExplanation:
      "This isn't a grammar rule — it's an exam SKILL. You'll read a short paragraph and pick which title best summarizes what it's actually about, from a few tempting-but-wrong options. The trap options usually mention a word that appears in the paragraph but isn't the main idea. Practicing this trains you to read for the big picture instead of getting distracted by individual words — exactly what IB Paper 1's heading-matching section rewards.",
    examples: [
      { es: "Un párrafo sobre reciclaje en casa", en: "→ best heading: \"Pequeños gestos, gran impacto\" (not just any sentence mentioning \"basura\")." },
      { es: "Un párrafo sobre un intercambio escolar", en: "→ best heading captures the OVERALL experience, not one detail from the middle." },
      { es: "Cada párrafo tiene un título correcto y varios títulos distractores.", en: "Each paragraph has one correct heading and several plausible-but-wrong distractors." },
    ],
  },
  {
    id: "gap-fill",
    name: "Reading Strategy: Word-Bank Gap-Fill",
    level: "intermediate",
    rule: "A real IB Paper 1 gap-fill task gives you a short word bank (usually a couple more words than blanks) and asks you to complete each blank with the word that fits both the grammar AND the meaning of the sentence — not just any word that 'sounds right'.",
    simpleExplanation:
      "You'll see a sentence with a blank and a small list of candidate words. Some words in the list are red herrings — they might be the right part of speech but the wrong meaning, or the right topic but the wrong grammatical form. This trains the exact skill IB Paper 1 tests: using both context and grammar together to pick the one word that truly fits, from a bank that's deliberately a little too big.",
    examples: [
      { es: "Banco: reciclar / contaminación / ahorrar / basura / energía / plástico", en: "Word bank example (Sharing the Planet theme)." },
      { es: "Debemos ___ agua para proteger el medioambiente.", en: "→ correct answer: \"ahorrar\" (to save), not \"reciclar\" — both are plausible topically, but only one fits this sentence's meaning." },
      { es: "Cada frase solo tiene una respuesta correcta del banco de palabras.", en: "Each sentence has exactly one correct answer from the word bank." },
    ],
  },
];

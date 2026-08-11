import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

interface SiPair {
  type: 1 | 2; // 1 = real/possible (si + present, + future); 2 = hypothetical (si + imperfect subjunctive, + conditional)
  siVerb: string;
  siForm: string;
  siDistractors: [string, string, string];
  siPrefix: string; // text from the start of the sentence up to (not including) siForm
  middle: string; // text between siForm and mainForm
  mainVerb: string;
  mainForm: string;
  mainDistractors: [string, string, string];
  mainSuffix: string; // text after mainForm to the end of the sentence
}

// 20 Type 1 (real/possible: "si" + present, + future — e.g. "Si estudias,
// aprobarás") and 20 Type 2 (hypothetical: "si" + imperfect subjunctive, +
// conditional — e.g. "Si tuviera tiempo, viajaría") pairs. This is the
// natural capstone of Conditional Tense + Present Subjunctive, which were
// covered separately but never combined into the actual "si" structure IB
// Paper 2 writing and the Individual Oral both expect.
const PAIRS: SiPair[] = [
  { type: 1, siVerb: "estudiar", siForm: "estudias", siDistractors: ["estudiarías", "estudiaste", "estudies"], siPrefix: "Si ", middle: " mucho, ", mainVerb: "aprobar", mainForm: "aprobarás", mainDistractors: ["apruebas", "aprobaste", "apruebes"], mainSuffix: " el examen." },
  { type: 1, siVerb: "llover", siForm: "llueve", siDistractors: ["llovía", "llovió", "llueva"], siPrefix: "Si ", middle: " mañana, no ", mainVerb: "ir", mainForm: "iremos", mainDistractors: ["vamos", "fuimos", "vayamos"], mainSuffix: " a la playa." },
  { type: 1, siVerb: "tener", siForm: "tienes", siDistractors: ["tendrías", "tuviste", "tengas"], siPrefix: "Si ", middle: " hambre, ", mainVerb: "comer", mainForm: "comeremos", mainDistractors: ["comemos", "comimos", "comamos"], mainSuffix: " algo." },
  { type: 1, siVerb: "terminar", siForm: "terminas", siDistractors: ["terminarías", "terminaste", "termines"], siPrefix: "Si ", middle: " la tarea, ", mainVerb: "poder", mainForm: "podrás", mainDistractors: ["puedes", "pudiste", "puedas"], mainSuffix: " salir." },
  { type: 1, siVerb: "hacer", siForm: "hace", siDistractors: ["hacía", "hizo", "haga"], siPrefix: "Si ", middle: " buen tiempo, ", mainVerb: "salir", mainForm: "saldremos", mainDistractors: ["salimos", "salíamos", "salgamos"], mainSuffix: " a pasear." },
  { type: 1, siVerb: "practicar", siForm: "practicas", siDistractors: ["practicarías", "practicaste", "practiques"], siPrefix: "Si ", middle: " todos los días, ", mainVerb: "mejorar", mainForm: "mejorarás", mainDistractors: ["mejoras", "mejoraste", "mejores"], mainSuffix: " mucho." },
  { type: 1, siVerb: "llamar", siForm: "llamas", siDistractors: ["llamarías", "llamaste", "llames"], siPrefix: "Si me ", middle: ", te ", mainVerb: "ayudar", mainForm: "ayudaré", mainDistractors: ["ayudo", "ayudé", "ayude"], mainSuffix: "." },
  { type: 1, siVerb: "venir", siForm: "vienes", siDistractors: ["vendrías", "viniste", "vengas"], siPrefix: "Si ", middle: " temprano, ", mainVerb: "cenar", mainForm: "cenaremos", mainDistractors: ["cenamos", "cenábamos", "cenemos"], mainSuffix: " juntos." },
  { type: 1, siVerb: "comprar", siForm: "compras", siDistractors: ["comprarías", "compraste", "compres"], siPrefix: "Si ", middle: " el billete hoy, ", mainVerb: "ser", mainForm: "será", mainDistractors: ["es", "fue", "sea"], mainSuffix: " más barato." },
  { type: 1, siVerb: "trabajar", siForm: "trabajas", siDistractors: ["trabajarías", "trabajaste", "trabajes"], siPrefix: "Si ", middle: " duro, ", mainVerb: "conseguir", mainForm: "conseguirás", mainDistractors: ["consigues", "conseguiste", "consigas"], mainSuffix: " tus metas." },
  { type: 1, siVerb: "dormir", siForm: "duermes", siDistractors: ["dormirías", "dormiste", "duermas"], siPrefix: "Si no ", middle: " bien, ", mainVerb: "estar", mainForm: "estarás", mainDistractors: ["estás", "estuviste", "estés"], mainSuffix: " cansado mañana." },
  { type: 1, siVerb: "estudiar", siForm: "estudiamos", siDistractors: ["estudiaríamos", "estudiábamos", "estudiemos"], siPrefix: "Si ", middle: " juntos, ", mainVerb: "entender", mainForm: "entenderemos", mainDistractors: ["entendemos", "entendimos", "entendamos"], mainSuffix: " mejor la gramática." },
  { type: 1, siVerb: "ahorrar", siForm: "ahorras", siDistractors: ["ahorrarías", "ahorraste", "ahorres"], siPrefix: "Si ", middle: " dinero, ", mainVerb: "poder", mainForm: "podrás", mainDistractors: ["puedes", "pudiste", "puedas"], mainSuffix: " viajar el próximo año." },
  { type: 1, siVerb: "perder", siForm: "perdemos", siDistractors: ["perderíamos", "perdíamos", "perdamos"], siPrefix: "Si ", middle: " el autobús, ", mainVerb: "tener", mainForm: "tendremos", mainDistractors: ["tenemos", "tuvimos", "tengamos"], mainSuffix: " que caminar." },
  { type: 1, siVerb: "aprender", siForm: "aprendes", siDistractors: ["aprenderías", "aprendiste", "aprendas"], siPrefix: "Si ", middle: " español, ", mainVerb: "tener", mainForm: "tendrás", mainDistractors: ["tienes", "tuviste", "tengas"], mainSuffix: " más oportunidades." },
  { type: 1, siVerb: "salir", siForm: "sales", siDistractors: ["saldrías", "saliste", "salgas"], siPrefix: "Si ", middle: " ahora, ", mainVerb: "llegar", mainForm: "llegarás", mainDistractors: ["llegas", "llegaste", "llegues"], mainSuffix: " a tiempo." },
  { type: 1, siVerb: "esperar", siForm: "esperas", siDistractors: ["esperarías", "esperaste", "esperes"], siPrefix: "Si me ", middle: ", ", mainVerb: "ir", mainForm: "iremos", mainDistractors: ["vamos", "fuimos", "vayamos"], mainSuffix: " juntos." },
  { type: 1, siVerb: "seguir", siForm: "sigues", siDistractors: ["seguirías", "seguiste", "sigas"], siPrefix: "Si ", middle: " las instrucciones, todo ", mainVerb: "salir", mainForm: "saldrá", mainDistractors: ["sale", "salió", "salga"], mainSuffix: " bien." },
  { type: 1, siVerb: "esforzarse", siForm: "esfuerzas", siDistractors: ["esforzarías", "esforzaste", "esfuerces"], siPrefix: "Si te ", middle: ", ", mainVerb: "lograr", mainForm: "lograrás", mainDistractors: ["logras", "lograste", "logres"], mainSuffix: " tus sueños." },
  { type: 1, siVerb: "reciclar", siForm: "reciclamos", siDistractors: ["reciclaríamos", "reciclábamos", "reciclemos"], siPrefix: "Si ", middle: " más, ", mainVerb: "ayudar", mainForm: "ayudaremos", mainDistractors: ["ayudamos", "ayudábamos", "ayudemos"], mainSuffix: " al medioambiente." },

  { type: 2, siVerb: "tener", siForm: "tuviera", siDistractors: ["tengo", "tendría", "tenía"], siPrefix: "Si ", middle: " más tiempo, ", mainVerb: "viajar", mainForm: "viajaría", mainDistractors: ["viajo", "viajé", "viaje"], mainSuffix: " por el mundo." },
  { type: 2, siVerb: "ser", siForm: "fuera", siDistractors: ["soy", "sería", "era"], siPrefix: "Si ", middle: " rico, ", mainVerb: "comprar", mainForm: "compraría", mainDistractors: ["compro", "compré", "compre"], mainSuffix: " una casa grande." },
  { type: 2, siVerb: "poder", siForm: "pudiera", siDistractors: ["puedo", "podría", "podía"], siPrefix: "Si ", middle: ", ", mainVerb: "cambiar", mainForm: "cambiaría", mainDistractors: ["cambio", "cambié", "cambie"], mainSuffix: " de trabajo." },
  { type: 2, siVerb: "saber", siForm: "supiera", siDistractors: ["sé", "sabría", "sabía"], siPrefix: "Si ", middle: " la respuesta, te la ", mainVerb: "decir", mainForm: "diría", mainDistractors: ["digo", "dije", "diga"], mainSuffix: "." },
  { type: 2, siVerb: "estudiar", siForm: "estudiara", siDistractors: ["estudio", "estudiaría", "estudiaba"], siPrefix: "Si ", middle: " más, ", mainVerb: "sacar", mainForm: "sacaría", mainDistractors: ["saco", "saqué", "saque"], mainSuffix: " mejores notas." },
  { type: 2, siVerb: "vivir", siForm: "viviera", siDistractors: ["vivo", "viviría", "vivía"], siPrefix: "Si ", middle: " en España, ", mainVerb: "hablar", mainForm: "hablaría", mainDistractors: ["hablo", "hablé", "hable"], mainSuffix: " español todos los días." },
  { type: 2, siVerb: "tener", siForm: "tuvieras", siDistractors: ["tienes", "tendrías", "tenías"], siPrefix: "Si ", middle: " un millón de euros, ¿qué ", mainVerb: "hacer", mainForm: "harías", mainDistractors: ["haces", "hiciste", "hagas"], mainSuffix: "?" },
  { type: 2, siVerb: "llover", siForm: "lloviera", siDistractors: ["llueve", "llovería", "llovía"], siPrefix: "Si ", middle: " menos, la cosecha ", mainVerb: "ser", mainForm: "sería", mainDistractors: ["es", "fue", "sea"], mainSuffix: " mejor." },
  { type: 2, siVerb: "ser", siForm: "fuéramos", siDistractors: ["somos", "seríamos", "éramos"], siPrefix: "Si ", middle: " más jóvenes, ", mainVerb: "viajar", mainForm: "viajaríamos", mainDistractors: ["viajamos", "viajábamos", "viajemos"], mainSuffix: " más." },
  { type: 2, siVerb: "querer", siForm: "quisiera", siDistractors: ["quiero", "querría", "quería"], siPrefix: "Si ", middle: ", ", mainVerb: "poder", mainForm: "podría", mainDistractors: ["puedo", "pude", "pueda"], mainSuffix: " terminar el proyecto hoy." },
  { type: 2, siVerb: "hacer", siForm: "hiciera", siDistractors: ["hago", "haría", "hacía"], siPrefix: "Si ", middle: " ejercicio cada día, me ", mainVerb: "sentirse", mainForm: "sentiría", mainDistractors: ["siento", "sentí", "sienta"], mainSuffix: " mejor." },
  { type: 2, siVerb: "venir", siForm: "vinieras", siDistractors: ["vienes", "vendrías", "venías"], siPrefix: "Si ", middle: " a la fiesta, te lo ", mainVerb: "pasarlo", mainForm: "pasarías", mainDistractors: ["pasas", "pasaste", "pases"], mainSuffix: " genial." },
  { type: 2, siVerb: "dar", siForm: "dieran", siDistractors: ["dan", "darían", "daban"], siPrefix: "Si me ", middle: " la oportunidad, la ", mainVerb: "aceptar", mainForm: "aceptaría", mainDistractors: ["acepto", "acepté", "acepte"], mainSuffix: "." },
  { type: 2, siVerb: "estar", siForm: "estuviéramos", siDistractors: ["estamos", "estaríamos", "estábamos"], siPrefix: "Si ", middle: " de vacaciones, ", mainVerb: "dormir", mainForm: "dormiríamos", mainDistractors: ["dormimos", "dormíamos", "durmamos"], mainSuffix: " más." },
  { type: 2, siVerb: "pedir", siForm: "pidieras", siDistractors: ["pides", "pedirías", "pedías"], siPrefix: "Si ", middle: " ayuda, alguien te ", mainVerb: "ayudar", mainForm: "ayudaría", mainDistractors: ["ayuda", "ayudó", "ayude"], mainSuffix: "." },
  { type: 2, siVerb: "ver", siForm: "vieras", siDistractors: ["ves", "verías", "veías"], siPrefix: "Si ", middle: " esa película, ", mainVerb: "llorar", mainForm: "llorarías", mainDistractors: ["lloras", "lloraste", "llores"], mainSuffix: "." },
  { type: 2, siVerb: "tener", siForm: "tuviéramos", siDistractors: ["tenemos", "tendríamos", "teníamos"], siPrefix: "Si no ", middle: " exámenes, ", mainVerb: "estar", mainForm: "estaríamos", mainDistractors: ["estamos", "estuvimos", "estemos"], mainSuffix: " más relajados." },
  { type: 2, siVerb: "poder", siForm: "pudiéramos", siDistractors: ["podemos", "podríamos", "podíamos"], siPrefix: "Si ", middle: " volar, no ", mainVerb: "necesitar", mainForm: "necesitaríamos", mainDistractors: ["necesitamos", "necesitábamos", "necesitemos"], mainSuffix: " aviones." },
  { type: 2, siVerb: "ser", siForm: "fuera", siDistractors: ["soy", "sería", "era"], siPrefix: "Si ", middle: " profesor, ", mainVerb: "enseñar", mainForm: "enseñaría", mainDistractors: ["enseño", "enseñé", "enseñe"], mainSuffix: " de otra manera." },
  { type: 2, siVerb: "tener", siForm: "tuviera", siDistractors: ["tengo", "tendría", "tenía"], siPrefix: "Si ", middle: " un perro, lo ", mainVerb: "pasear", mainForm: "pasearía", mainDistractors: ["paseo", "paseé", "pasee"], mainSuffix: " cada día." },
];

function typeTip(pair: SiPair): string {
  return pair.type === 1
    ? "Tipo 1 (posible/real): 'si' + PRESENTE, + FUTURO — describe una condición realista."
    : "Tipo 2 (hipotético): 'si' + IMPERFECTO DE SUBJUNTIVO, + CONDICIONAL — describe algo imaginario o poco probable.";
}

function createSiClauses(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  let idCounter = 1;

  const push = (type: "mcq" | "short", prompt: string, correctAnswer: string, options: string[] | undefined, tip: string) => {
    exercises.push({ id: `sq-${idCounter++}`, type, prompt, ...(options ? { options } : {}), correctAnswer, tip });
  };

  PAIRS.forEach((pair, i) => {
    const fullSentence = `${pair.siPrefix}${pair.siForm}${pair.middle}${pair.mainForm}${pair.mainSuffix}`;
    const siBlankSentence = `${pair.siPrefix}___${pair.middle}${pair.mainForm}${pair.mainSuffix}`;
    const mainBlankSentence = `${pair.siPrefix}${pair.siForm}${pair.middle}___${pair.mainSuffix}`;
    const tip = `${typeTip(pair)} Aquí: "${fullSentence}"`;

    // Blank 1: the "si"-clause verb.
    const siOptions = shuffleFixed([pair.siForm, ...pair.siDistractors], i * 3 + 1);
    push("mcq", `Completa la cláusula 'si': "${siBlankSentence}"`, pair.siForm, siOptions, tip);
    push(
      "short",
      `Conjuga '${pair.siVerb}' correctamente para completar: "${siBlankSentence}"`,
      pair.siForm,
      undefined,
      tip
    );

    // Blank 2: the main-clause verb.
    const mainOptions = shuffleFixed([pair.mainForm, ...pair.mainDistractors], i * 3 + 2);
    push("mcq", `Completa la cláusula principal: "${mainBlankSentence}"`, pair.mainForm, mainOptions, tip);
  });

  return exercises;
}

export const SI_CLAUSES_EXERCISES: GrammarExercise[] = createSiClauses();

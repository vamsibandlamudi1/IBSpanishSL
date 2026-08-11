import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

interface ConnectorItem {
  sentence: string;
  answer: "que" | "como" | "de";
  tip: string;
}

// The genuinely hard part of Spanish comparatives isn't the adjective — it's
// picking the right connector: 'que' after más/menos (unequal), 'como' after
// tan (equal), 'de' after a superlative ('el más ... de'). These 32 items
// drill exactly that choice.
const CONNECTOR_ITEMS: ConnectorItem[] = [
  { sentence: "Mi hermano es más alto ___ yo.", answer: "que", tip: "Comparación de desigualdad: más/menos + adjetivo + QUE." },
  { sentence: "Este examen es menos difícil ___ el anterior.", answer: "que", tip: "'Menos... que' compara dos cosas de forma desigual." },
  { sentence: "Ella corre más rápido ___ su hermano.", answer: "que", tip: "'Más... que' con un adverbio funciona igual que con un adjetivo." },
  { sentence: "Madrid es más grande ___ Toledo.", answer: "que", tip: "Comparación de desigualdad → QUE." },
  { sentence: "Este coche es menos caro ___ aquel.", answer: "que", tip: "'Menos... que' compara dos cosas de forma desigual." },
  { sentence: "Mi perro es más grande ___ tu gato.", answer: "que", tip: "Comparación de desigualdad → QUE." },
  { sentence: "La película fue más interesante ___ el libro.", answer: "que", tip: "Comparación de desigualdad → QUE." },
  { sentence: "Este restaurante es menos popular ___ el otro.", answer: "que", tip: "Comparación de desigualdad → QUE." },
  { sentence: "Ana estudia más ___ Marta.", answer: "que", tip: "Comparación de desigualdad → QUE, incluso sin adjetivo explícito." },
  { sentence: "Este ejercicio es más fácil ___ el último.", answer: "que", tip: "Comparación de desigualdad → QUE." },
  { sentence: "Barcelona tiene más habitantes ___ Sevilla.", answer: "que", tip: "Comparación de desigualdad → QUE." },
  { sentence: "Mi abuela es más fuerte ___ parece.", answer: "que", tip: "Comparación de desigualdad → QUE." },
  { sentence: "Mi hermana es tan alta ___ yo.", answer: "como", tip: "Comparación de igualdad: TAN + adjetivo + COMO." },
  { sentence: "Este libro es tan interesante ___ la película.", answer: "como", tip: "'Tan... como' compara dos cosas de forma igual." },
  { sentence: "Ella corre tan rápido ___ su hermano.", answer: "como", tip: "Comparación de igualdad → COMO." },
  { sentence: "Este hotel es tan caro ___ aquel.", answer: "como", tip: "Comparación de igualdad → COMO." },
  { sentence: "Mi perro es tan grande ___ tu gato.", answer: "como", tip: "Comparación de igualdad → COMO." },
  { sentence: "El examen de historia fue tan difícil ___ el de matemáticas.", answer: "como", tip: "Comparación de igualdad → COMO." },
  { sentence: "Este pueblo es tan bonito ___ aquella ciudad.", answer: "como", tip: "Comparación de igualdad → COMO." },
  { sentence: "Mi coche es tan rápido ___ el tuyo.", answer: "como", tip: "Comparación de igualdad → COMO." },
  { sentence: "Ana es tan inteligente ___ su hermano.", answer: "como", tip: "Comparación de igualdad → COMO." },
  { sentence: "Este restaurante es tan bueno ___ el otro.", answer: "como", tip: "Comparación de igualdad → COMO." },
  { sentence: "La playa está tan limpia ___ el año pasado.", answer: "como", tip: "Comparación de igualdad → COMO." },
  { sentence: "Mi trabajo es tan estresante ___ el tuyo.", answer: "como", tip: "Comparación de igualdad → COMO." },
  { sentence: "Este es el restaurante más caro ___ la ciudad.", answer: "de", tip: "Superlativo: el/la/los/las (más) + adjetivo + DE (no 'en')." },
  { sentence: "Ella es la estudiante más inteligente ___ la clase.", answer: "de", tip: "Superlativo → DE, aunque en inglés se diría 'in the class'." },
  { sentence: "Este es el edificio más alto ___ Madrid.", answer: "de", tip: "Superlativo → DE." },
  { sentence: "Es el mejor jugador ___ el equipo.", answer: "de", tip: "Superlativo → DE, incluso con formas irregulares como 'mejor'." },
  { sentence: "Esta es la playa más bonita ___ toda la costa.", answer: "de", tip: "Superlativo → DE." },
  { sentence: "Es el examen más difícil ___ todo el curso.", answer: "de", tip: "Superlativo → DE." },
  { sentence: "Este museo es el más famoso ___ la ciudad.", answer: "de", tip: "Superlativo → DE." },
  { sentence: "Ella es la más rápida ___ todas las corredoras.", answer: "de", tip: "Superlativo → DE." },
];

interface IrregularItem {
  sentence: string;
  answer: string;
  options: string[];
  tip: string;
}

// Four irregular comparatives/superlatives that don't follow the más/menos +
// adjective pattern at all — a classic IB trap ('más bueno' and 'más malo'
// are both wrong).
const IRREGULAR_ITEMS: IrregularItem[] = [
  { sentence: "Su examen fue ___ que el mío.", answer: "mejor", options: ["mejor", "más bueno", "buen", "bien"], tip: "'Mejor' es la forma comparativa irregular de 'bueno' — nunca digas 'más bueno'." },
  { sentence: "El tiempo hoy es ___ que ayer.", answer: "peor", options: ["peor", "más malo", "mal", "malamente"], tip: "'Peor' es la forma comparativa irregular de 'malo' — nunca digas 'más malo'." },
  { sentence: "Mi hermano es ___ que yo.", answer: "mayor", options: ["mayor", "más grande", "más viejo", "grande"], tip: "Para la EDAD se usa 'mayor' — 'más grande' se reserva para el tamaño físico." },
  { sentence: "Mi hermana es ___ que yo.", answer: "menor", options: ["menor", "más pequeña", "más chica", "pequeña"], tip: "Para la EDAD se usa 'menor' — 'más pequeña' se reserva normalmente para el tamaño." },
  { sentence: "Esta película es ___ que la anterior.", answer: "mejor", options: ["mejor", "más buena", "buena", "bien"], tip: "'Mejor' no cambia por género — es igual para masculino y femenino." },
  { sentence: "El ambiente aquí es ___ que en mi ciudad.", answer: "peor", options: ["peor", "más malo", "mala", "malamente"], tip: "'Peor' tampoco cambia por género." },
  { sentence: "Mi abuelo es el ___ de la familia.", answer: "mayor", options: ["mayor", "más grande", "más viejo", "grande"], tip: "Superlativo de edad: 'el mayor' = the oldest." },
  { sentence: "Mi primo es el ___ de todos.", answer: "menor", options: ["menor", "más pequeño", "más chico", "pequeño"], tip: "Superlativo de edad: 'el menor' = the youngest." },
  { sentence: "Sus resultados fueron ___ que los nuestros.", answer: "mejores", options: ["mejores", "más buenos", "buenos", "bien"], tip: "'Mejor' se pluraliza como 'mejores' — no cambia por género, solo por número." },
  { sentence: "Las notas de este año son ___ que las del año pasado.", answer: "peores", options: ["peores", "más malas", "malas", "mal"], tip: "'Peor' se pluraliza como 'peores'." },
];

const CONNECTOR_TEMPLATES: ((s: string) => string)[] = [
  (s) => `Completa con 'que', 'como' o 'de': "${s}"`,
  (s) => `Elige el conector correcto: "${s}"`,
];

const IRREGULAR_TEMPLATES: ((s: string) => string)[] = [
  (s) => `Completa con la forma comparativa correcta: "${s}"`,
  (s) => `Elige la forma correcta: "${s}"`,
];

function createComparatives(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  let idCounter = 1;

  const push = (type: "mcq" | "short", prompt: string, correctAnswer: string, options: string[] | undefined, tip: string) => {
    exercises.push({ id: `cm-${idCounter++}`, type, prompt, ...(options ? { options } : {}), correctAnswer, tip });
  };

  CONNECTOR_ITEMS.forEach((item, i) => {
    CONNECTOR_TEMPLATES.forEach((template, ti) => {
      const options = shuffleFixed(["que", "como", "de"], i * 2 + ti);
      push("mcq", template(item.sentence), item.answer, options, item.tip);
    });
    push("short", `Completa con 'que', 'como' o 'de': "${item.sentence}"`, item.answer, undefined, item.tip);
  });

  IRREGULAR_ITEMS.forEach((item, i) => {
    IRREGULAR_TEMPLATES.forEach((template, ti) => {
      const options = shuffleFixed(item.options, i * 2 + ti + 1);
      push("mcq", template(item.sentence), item.answer, options, item.tip);
    });
    push("short", `Completa con la forma comparativa correcta: "${item.sentence}"`, item.answer, undefined, item.tip);
  });

  return exercises;
}

export const COMPARATIVES_EXERCISES: GrammarExercise[] = createComparatives();

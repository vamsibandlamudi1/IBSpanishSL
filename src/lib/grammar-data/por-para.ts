import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

interface PorParaItem {
  sentence: string; // full sentence with a single ___ blank
  answer: "por" | "para";
  tip: string;
}

// 20 "para" uses (destination, deadline, purpose/goal, recipient, opinion,
// employer, comparison) and 20 "por" uses (duration, exchange/price, means,
// reason/cause, "through/along", fixed expressions, agent of passive) — the
// two hardest-to-distinguish prepositions for English speakers, and a
// flagged gap since neither was covered by any existing topic.
const PARA_ITEMS: PorParaItem[] = [
  { sentence: "Salimos ___ Madrid mañana.", answer: "para", tip: "Destino: 'para' + lugar indica hacia dónde te diriges." },
  { sentence: "Este regalo es ___ mi madre.", answer: "para", tip: "Destinatario/recipiente: 'para' indica para quién es algo." },
  { sentence: "Estudio mucho ___ aprobar el examen.", answer: "para", tip: "Propósito: 'para' + infinitivo = 'in order to'." },
  { sentence: "Necesito el informe ___ el viernes.", answer: "para", tip: "Fecha límite: 'para' señala el plazo, cuándo algo debe estar listo." },
  { sentence: "___ mí, el español es fácil.", answer: "para", tip: "Opinión personal: '___ mí' = 'in my opinion / for me'." },
  { sentence: "Trabaja ___ una empresa internacional.", answer: "para", tip: "Empleador: 'trabajar para' + empresa/persona indica para quién trabajas." },
  { sentence: "___ ser tan joven, sabe mucho.", answer: "para", tip: "Comparación/expectativa: '___ ser...' = 'considering / for being...'." },
  { sentence: "Compré flores ___ mi abuela.", answer: "para", tip: "Destinatario: la acción se hace en beneficio de esa persona." },
  { sentence: "El tren sale ___ Barcelona a las ocho.", answer: "para", tip: "Destino del viaje." },
  { sentence: "Necesitamos más tiempo ___ terminar el proyecto.", answer: "para", tip: "Propósito: 'para' + infinitivo indica el objetivo de la acción." },
  { sentence: "La tarea es ___ el lunes.", answer: "para", tip: "Fecha límite de entrega." },
  { sentence: "Este libro es ___ los principiantes.", answer: "para", tip: "Destinatario/uso previsto: para quién está pensado algo." },
  { sentence: "Fuimos al gimnasio ___ hacer ejercicio.", answer: "para", tip: "Propósito de la acción." },
  { sentence: "___ mi hermano, viajar es lo más importante.", answer: "para", tip: "Opinión: '___ + persona' indica el punto de vista de alguien." },
  { sentence: "El avión sale ___ Londres esta noche.", answer: "para", tip: "Destino." },
  { sentence: "Ahorro dinero ___ comprarme un coche.", answer: "para", tip: "Propósito/objetivo del ahorro." },
  { sentence: "Trabaja ___ ganar experiencia, no solo dinero.", answer: "para", tip: "Propósito: el motivo por el que trabaja." },
  { sentence: "El proyecto debe estar listo ___ el jueves.", answer: "para", tip: "Fecha límite." },
  { sentence: "Hizo una tarta ___ el cumpleaños de su amiga.", answer: "para", tip: "Propósito/ocasión: para qué evento es." },
  { sentence: "___ ser extranjero, habla español muy bien.", answer: "para", tip: "Comparación con lo esperado: 'considering that...'." },
];

const POR_ITEMS: PorParaItem[] = [
  { sentence: "Pasamos ___ el parque de camino a casa.", answer: "por", tip: "Movimiento a través de un lugar: 'por' = 'through'." },
  { sentence: "Viajamos ___ tres semanas.", answer: "por", tip: "Duración: 'por' + periodo de tiempo." },
  { sentence: "Pagué veinte euros ___ el libro.", answer: "por", tip: "Intercambio/precio: 'por' indica lo que se paga a cambio de algo." },
  { sentence: "Te llamo ___ teléfono esta noche.", answer: "por", tip: "Medio/instrumento: 'por' + medio de comunicación." },
  { sentence: "Gracias ___ tu ayuda.", answer: "por", tip: "Razón/causa: 'por' explica el motivo del agradecimiento." },
  { sentence: "El paquete fue enviado ___ correo.", answer: "por", tip: "Medio: cómo se envió algo." },
  { sentence: "Caminamos ___ la playa toda la tarde.", answer: "por", tip: "Movimiento a lo largo de un lugar: 'por' = 'along'." },
  { sentence: "Lo hizo ___ amor, no por dinero.", answer: "por", tip: "Razón/causa/motivación detrás de una acción." },
  { sentence: "Estudiamos ___ la mañana.", answer: "por", tip: "Parte del día: 'por la mañana/tarde/noche' es una expresión fija." },
  { sentence: "El cuadro fue pintado ___ Picasso.", answer: "por", tip: "Agente de la voz pasiva: 'por' introduce quién hizo la acción." },
  { sentence: "Cambié mi coche viejo ___ uno nuevo.", answer: "por", tip: "Intercambio: 'por' indica lo que se da a cambio de otra cosa." },
  { sentence: "___ suerte, no llovió durante la excursión.", answer: "por", tip: "Expresión fija: '___ suerte' = 'luckily'." },
  { sentence: "Fue castigado ___ llegar tarde.", answer: "por", tip: "Razón/causa: el motivo del castigo." },
  { sentence: "Trabajamos ___ la tarde en el proyecto.", answer: "por", tip: "Parte del día en la que ocurre la acción." },
  { sentence: "Multiplica cuatro ___ tres.", answer: "por", tip: "Matemáticas: 'por' se usa para la multiplicación (4 × 3 = cuatro por tres)." },
  { sentence: "Doy las gracias ___ el regalo.", answer: "por", tip: "Razón del agradecimiento." },
  { sentence: "Fuimos ___ avión a Nueva York.", answer: "por", tip: "Medio de transporte." },
  { sentence: "El autor fue premiado ___ su novela.", answer: "por", tip: "Razón/causa del premio." },
  { sentence: "Corrimos ___ el bosque durante una hora.", answer: "por", tip: "Movimiento a través de un lugar, combinado con duración." },
  { sentence: "___ fin, terminamos el examen.", answer: "por", tip: "Expresión fija: '___ fin' = 'finally'." },
];

const MCQ_TEMPLATES: ((s: string) => string)[] = [
  (s) => `Completa con 'por' o 'para': "${s}"`,
  (s) => `Elige la preposición correcta: "${s}"`,
];

function createPorPara(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  let idCounter = 1;
  const all = [...PARA_ITEMS, ...POR_ITEMS];

  const push = (type: "mcq" | "short", prompt: string, correctAnswer: string, options: string[] | undefined, tip: string) => {
    exercises.push({ id: `pp-${idCounter++}`, type, prompt, ...(options ? { options } : {}), correctAnswer, tip });
  };

  all.forEach((item, i) => {
    MCQ_TEMPLATES.forEach((template, ti) => {
      const options = shuffleFixed(["por", "para"], i * 2 + ti);
      push("mcq", template(item.sentence), item.answer, options, item.tip);
    });
    push("short", `Completa la frase con 'por' o 'para': "${item.sentence}"`, item.answer, undefined, item.tip);
  });

  return exercises;
}

export const POR_PARA_EXERCISES: GrammarExercise[] = createPorPara();

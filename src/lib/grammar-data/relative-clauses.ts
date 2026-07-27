import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

/** Relative clause exercises, built from five hand-checked template
 *  categories (que / quien(es) / donde / cuyo-forms / el cual-forms) rather
 *  than one giant cross-product — each template only combines with nouns/
 *  clauses that stay grammatically correct together, unlike the tense
 *  drills where any verb+subject+context combination is automatically
 *  valid. Uses plain bounded for-loops (not a while-loop searching for N
 *  unique items) so there's no risk of the infinite-loop class of bug the
 *  present-tense generator originally had — every loop here is bounded by
 *  a fixed array length and simply stops when it runs out of combinations. */
function createRelativeClauses(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  let idCounter = 1;
  const PRONOUN_OPTIONS_BASE = ["que", "quien", "donde", "cuyo"];

  const push = (type: "mcq" | "short", prompt: string, correctAnswer: string, options: string[] | undefined, tip: string) => {
    exercises.push({
      id: `rc-${idCounter++}`,
      type,
      prompt,
      ...(options ? { options } : {}),
      correctAnswer,
      tip,
    });
  };

  // --- Category 1: "que" (the everyday, all-purpose relative pronoun) ---
  const quePairs: { subject: string; clause: string }[] = [
    { subject: "El libro", clause: "compré la semana pasada" },
    { subject: "La película", clause: "vimos anoche" },
    { subject: "El restaurante", clause: "recomendó mi amiga" },
    { subject: "La canción", clause: "escuchamos en la radio" },
    { subject: "El coche", clause: "compró mi padre" },
    { subject: "La casa", clause: "visitamos ayer" },
    { subject: "El examen", clause: "hicimos el lunes" },
    { subject: "La ciudad", clause: "conocimos el verano pasado" },
    { subject: "El proyecto", clause: "presentamos en clase" },
    { subject: "La aplicación", clause: "descargué ayer" },
    { subject: "El chico", clause: "conocí en el viaje" },
    { subject: "La profesora", clause: "enseña matemáticas" },
    { subject: "El vecino", clause: "vive enfrente" },
    { subject: "La doctora", clause: "trabaja en el hospital" },
    { subject: "El escritor", clause: "ganó el premio" },
    { subject: "La cantante", clause: "escuchamos ayer" },
    { subject: "El entrenador", clause: "dirige el equipo" },
    { subject: "La periodista", clause: "escribió el artículo" },
  ];
  const queDetails = ["interesante", "importante", "especial", "popular"];
  for (const pair of quePairs) {
    for (const detail of queDetails) {
      const sentence = `${pair.subject} ___ ${pair.clause} es ${detail}.`;
      const filled = `${pair.subject} que ${pair.clause} es ${detail}.`;
      push("mcq", sentence, "que", shuffleFixed(PRONOUN_OPTIONS_BASE, filled.length), "Cuando la frase se refiere a una persona o cosa sin pausa ni coma, 'que' es casi siempre correcto.");
      push("short", `Completa con el pronombre relativo correcto: '${sentence}'`, "que", undefined, "'Que' es el pronombre relativo más común en español, válido para personas y cosas.");
    }
  }

  // --- Category 2: "quien(es)" (people only, after a comma or preposition) ---
  const quienSingular: { subject: string; clause: string; main: string }[] = [
    { subject: "Mi hermano", clause: "vive en Madrid", main: "viene a visitarnos en Navidad" },
    { subject: "Mi profesora de historia", clause: "estudió en Londres", main: "nos enseña con mucha pasión" },
    { subject: "Mi mejor amiga", clause: "juega al tenis", main: "me ayudó con la mudanza" },
    { subject: "El director del colegio", clause: "trabaja aquí desde hace veinte años", main: "dio un discurso emotivo" },
    { subject: "Mi vecino", clause: "es médico", main: "me ayudó cuando estaba enfermo" },
    { subject: "La chica nueva", clause: "llegó la semana pasada", main: "ya tiene muchos amigos" },
    { subject: "Mi tío", clause: "vivió en Argentina", main: "cuenta historias fascinantes" },
    { subject: "La escritora", clause: "ganó el premio nacional", main: "vendrá a nuestro colegio" },
    { subject: "Mi entrenador", clause: "fue jugador profesional", main: "nos exige mucho" },
    { subject: "La doctora Ruiz", clause: "trabaja en el hospital central", main: "salvó muchas vidas" },
    { subject: "Mi compañero de clase", clause: "toca la guitarra", main: "formará una banda" },
    { subject: "La alcaldesa", clause: "ganó las elecciones", main: "prometió mejorar el transporte" },
  ];
  const quienPlural: { subject: string; clause: string; main: string }[] = [
    { subject: "Mis padres", clause: "viven en el campo", main: "vienen a vernos cada verano" },
    { subject: "Mis primas", clause: "estudian medicina", main: "quieren ser cirujanas" },
    { subject: "Los vecinos", clause: "acaban de mudarse", main: "organizaron una fiesta" },
    { subject: "Mis compañeros de equipo", clause: "entrenan todos los días", main: "ganaron el campeonato" },
    { subject: "Los profesores", clause: "trabajan en este colegio", main: "organizaron la excursión" },
    { subject: "Mis abuelos", clause: "emigraron hace cuarenta años", main: "volvieron a visitar su pueblo" },
    { subject: "Los turistas", clause: "visitaron el museo", main: "quedaron impresionados" },
    { subject: "Mis hermanas", clause: "viven en el extranjero", main: "nos llaman cada domingo" },
  ];
  for (const item of [...quienSingular, ...quienPlural]) {
    const pronoun = quienPlural.includes(item) ? "quienes" : "quien";
    const sentence = `${item.subject}, ___ ${item.clause}, ${item.main}.`;
    const filled = `${item.subject}, ${pronoun} ${item.clause}, ${item.main}.`;
    push("mcq", sentence, pronoun, shuffleFixed([...PRONOUN_OPTIONS_BASE.filter((p) => p !== "quien"), pronoun], filled.length), "'Quien/quienes' se usa para personas, normalmente después de una coma — señala información adicional, no esencial.");
    push("short", `Completa con el pronombre relativo correcto: '${sentence}'`, pronoun, undefined, "'Quien' (singular) y 'quienes' (plural) se refieren solo a personas.");
  }

  // --- Category 3: "donde" (places) ---
  const dondePairs: { subject: string; clause: string; main: string }[] = [
    { subject: "La ciudad", clause: "nací", main: "es muy bonita" },
    { subject: "El pueblo", clause: "pasamos las vacaciones", main: "tiene playas increíbles" },
    { subject: "El restaurante", clause: "cenamos anoche", main: "sirve comida deliciosa" },
    { subject: "El colegio", clause: "estudié", main: "todavía existe" },
    { subject: "El parque", clause: "jugamos de niños", main: "ha cambiado mucho" },
    { subject: "La casa", clause: "vivimos ahora", main: "es muy antigua" },
    { subject: "El país", clause: "nacieron mis abuelos", main: "está en Sudamérica" },
    { subject: "El barrio", clause: "creció mi madre", main: "sigue siendo tranquilo" },
    { subject: "El hotel", clause: "nos alojamos", main: "tenía una piscina enorme" },
    { subject: "La calle", clause: "vivo", main: "está cerca del centro" },
    { subject: "El bosque", clause: "acampamos", main: "estaba lleno de animales" },
    { subject: "El museo", clause: "trabajaba mi tía", main: "cerró el año pasado" },
    { subject: "La universidad", clause: "estudia mi hermano", main: "es muy prestigiosa" },
    { subject: "El hospital", clause: "nací", main: "ha sido renovado" },
    { subject: "El café", clause: "nos conocimos", main: "ya no existe" },
  ];
  for (const item of dondePairs) {
    const sentence = `${item.subject} ___ ${item.clause} ${item.main}.`;
    const filled = `${item.subject} donde ${item.clause} ${item.main}.`;
    push("mcq", sentence, "donde", shuffleFixed(PRONOUN_OPTIONS_BASE, filled.length), "'Donde' se usa para hablar de un lugar — equivale a 'in which/where' en inglés.");
    push("short", `Completa con el pronombre relativo correcto: '${sentence}'`, "donde", undefined, "'Donde' reemplaza un lugar mencionado antes en la frase.");
  }

  // --- Category 4: "cuyo/a/os/as" (whose — agrees with the thing owned) ---
  const cuyoItems: { subject: string; form: "cuyo" | "cuya" | "cuyos" | "cuyas"; noun: string; rest: string }[] = [
    { subject: "El chico", form: "cuya", noun: "madre", rest: "es médica es mi vecino" },
    { subject: "La mujer", form: "cuyo", noun: "hijo", rest: "estudia en Madrid es profesora" },
    { subject: "El escritor", form: "cuyos", noun: "libros", rest: "ganaron premios vive en Barcelona" },
    { subject: "La actriz", form: "cuyas", noun: "películas", rest: "son famosas vino a la ciudad" },
    { subject: "El país", form: "cuya", noun: "economía", rest: "crece rápido atrae inversión" },
    { subject: "La empresa", form: "cuyos", noun: "productos", rest: "son ecológicos tiene mucho éxito" },
    { subject: "El estudiante", form: "cuyas", noun: "notas", rest: "son excelentes recibió una beca" },
    { subject: "La familia", form: "cuya", noun: "casa", rest: "se quemó recibió ayuda del gobierno" },
    { subject: "El profesor", form: "cuyas", noun: "clases", rest: "son divertidas es mi favorito" },
    { subject: "La ciudad", form: "cuyos", noun: "museos", rest: "son gratuitos recibe muchos turistas" },
    { subject: "El jugador", form: "cuyo", noun: "talento", rest: "es excepcional firmó un contrato nuevo" },
    { subject: "La cantante", form: "cuya", noun: "voz", rest: "es única ganó el concurso" },
    { subject: "El equipo", form: "cuyos", noun: "jugadores", rest: "entrenan mucho ganó el campeonato" },
    { subject: "La organización", form: "cuyos", noun: "proyectos", rest: "ayudan al medioambiente recibió un premio" },
    { subject: "El niño", form: "cuyos", noun: "dibujos", rest: "ganaron el concurso está muy feliz" },
  ];
  const CUYO_FORMS = ["cuyo", "cuya", "cuyos", "cuyas"];
  for (const item of cuyoItems) {
    const sentence = `${item.subject} ___ ${item.noun} ${item.rest}.`;
    const filled = `${item.subject} ${item.form} ${item.noun} ${item.rest}.`;
    push("mcq", sentence, item.form, shuffleFixed(CUYO_FORMS, filled.length), `'Cuyo/a/os/as' concuerda en género y número con '${item.noun}' (lo poseído), no con '${item.subject}' (el poseedor).`);
    push("short", `Completa con la forma correcta de 'cuyo': '${sentence}'`, item.form, undefined, `'Cuyo' significa 'whose' y siempre concuerda con el sustantivo que sigue: aquí, '${item.noun}'.`);
  }

  // --- Category 5: "el/la cual, los/las cuales" (formal, often after a preposition) ---
  const elCualItems: { subject: string; form: string; clauseRest: string; main: string }[] = [
    { subject: "La empresa", form: "la cual", clauseRest: "para ___ trabajo", main: "es multinacional" },
    { subject: "El edificio", form: "el cual", clauseRest: "en ___ vivo", main: "tiene cien años" },
    { subject: "Los estudiantes", form: "los cuales", clauseRest: "con ___ estudié", main: "ahora son médicos" },
    { subject: "Las razones", form: "las cuales", clauseRest: "por ___ se fue", main: "todavía no están claras" },
    { subject: "El proyecto", form: "el cual", clauseRest: "sobre ___ hablamos", main: "fue aprobado" },
    { subject: "La reunión", form: "la cual", clauseRest: "durante ___ se decidió todo", main: "duró tres horas" },
    { subject: "Los documentos", form: "los cuales", clauseRest: "sin ___ no podemos continuar", main: "se perdieron" },
    { subject: "La razón", form: "la cual", clauseRest: "por ___ llegó tarde", main: "fue el tráfico" },
    { subject: "El método", form: "el cual", clauseRest: "mediante ___ aprendimos", main: "es muy eficaz" },
    { subject: "Las políticas", form: "las cuales", clauseRest: "según ___ se rige la empresa", main: "cambiaron este año" },
    { subject: "El árbol", form: "el cual", clauseRest: "bajo ___ nos sentamos", main: "tiene cien años" },
    { subject: "La ventana", form: "la cual", clauseRest: "a través de ___ vi todo", main: "estaba rota" },
    { subject: "Los amigos", form: "los cuales", clauseRest: "con ___ viajé", main: "viven en distintos países" },
    { subject: "La calle", form: "la cual", clauseRest: "por ___ pasamos", main: "estaba cerrada" },
    { subject: "El motivo", form: "el cual", clauseRest: "por ___ renunció", main: "sigue siendo un misterio" },
  ];
  const EL_CUAL_FORMS = ["el cual", "la cual", "los cuales", "las cuales"];
  for (const item of elCualItems) {
    const sentence = `${item.subject} ${item.clauseRest} ${item.main}.`;
    const filled = sentence.replace("___", item.form);
    push("mcq", sentence, item.form, shuffleFixed(EL_CUAL_FORMS, filled.length), `'El/la cual, los/las cuales' concuerda en género y número con '${item.subject.toLowerCase()}' y suele usarse tras una preposición, en un registro más formal que 'que'.`);
    push("short", `Completa con la forma correcta de 'el cual': '${sentence}'`, item.form, undefined, "Después de preposiciones (para, con, sin, según, mediante...) el español formal prefiere 'el/la cual' o 'los/las cuales'.");
  }

  return exercises;
}


export const RELATIVE_CLAUSES_EXERCISES: GrammarExercise[] = createRelativeClauses();

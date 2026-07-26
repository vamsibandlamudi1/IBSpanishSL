import { GrammarExercise } from "../types";

function createListeningTenses(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  const set = new Set<number>();
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
        id: `li-${idCounter++}`,
        type: 'listening',
        prompt: `Listen to sentence #${idx + 1}. Which tense is being used?`,
        audioText: s.text,
        options: ['Present', 'Preterite', 'Imperfect', 'Future', 'Conditional', 'Subjunctive'],
        correctAnswer: s.tense
      });
    }
  }
  return exercises;
}

export const LISTENING_TENSES_EXERCISES: GrammarExercise[] = createListeningTenses();

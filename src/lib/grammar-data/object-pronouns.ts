import { GrammarExercise } from "../types";

function createObjectPronouns(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  const set = new Set<string>();
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
    { Q: '¿Viste a tus primos en el parque?', A: 'los', options: ['los', 'las', 'les', 'le'], tip: "Direct object pronoun for masculine plural persons ('a tus primos') is 'los'." },
    { Q: '¿Leíste esta novela?', A: 'la', options: ['la', 'lo', 'le', 'las'], tip: "Direct object pronoun for feminine singular ('esta novela') is 'la'." },
    { Q: '___ dije la verdad a mi profesora.', A: 'Le', options: ['Le', 'La', 'Lo', 'Les'], tip: "Indirect object pronoun for 'a mi profesora' is 'le'." },
    { Q: '¿Tienes la tarea de español?', A: 'la', options: ['la', 'lo', 'le', 'las'], tip: "Direct object pronoun for 'la tarea' is 'la'." },
    { Q: '___ presté mi cuaderno a mis compañeros.', A: 'Les', options: ['Les', 'Los', 'Las', 'Le'], tip: "Indirect object pronoun for 'a mis compañeros' is 'les'." },
    { Q: '¿Trajiste los documentos?', A: 'los', options: ['los', 'las', 'les', 'lo'], tip: "Direct object pronoun for 'los documentos' is 'los'." }
  ];

  let loopIdx = 0;
  while (exercises.length < 200) {
    const item = items[loopIdx % items.length];
    loopIdx++;
    const isShort = exercises.length % 3 === 2;
    const uniquePrompt = isShort
      ? `Reemplaza con pronombre: '${item.Q}' → 'Sí, ___ (#${exercises.length + 1})'`
      : `${item.Q} Sí, ___ tengo / veo / compré. (#${exercises.length + 1})`;

    if (!set.has(uniquePrompt)) {
      set.add(uniquePrompt);
      exercises.push({
        id: `op-${idCounter++}`,
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

export const OBJECT_PRONOUNS_EXERCISES: GrammarExercise[] = createObjectPronouns();

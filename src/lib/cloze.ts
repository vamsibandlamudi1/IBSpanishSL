/// File: src/lib/cloze.ts
//
// IB-style gap-fill (cloze) paragraphs: one continuous Spanish text per
// passage with several numbered blanks, all graded together as a set —
// mirrors the real IB "complete the text with words from the box" format
// (tests grammar — prepositions, connectors, verb tense/mood — as much as
// vocabulary, since a real passage forces choices a standalone MCQ can't).
// 3 passages per theme (15 total), spanning easy/medium/hard. See
// components/ClozeModule.tsx for the rendering/grading UI.

import { ClozePassage } from "./types";

export const CLOZE_PASSAGES: ClozePassage[] = [
  // --- identities ---
  {
    id: "cloze-identities-1",
    themeId: "identities",
    title: "Creciendo entre dos idiomas",
    level: "easy",
    bodyEs:
      "Me llamo Yara y {{1}} dieciséis años. Nací en Marruecos, pero {{2}} los ocho años vivo en Barcelona con mi familia. " +
      "En casa hablamos árabe, {{3}} en el instituto hablo catalán y español con mis compañeros. Al principio {{4}} muy difícil " +
      "cambiar de idioma constantemente, {{5}} ahora ya no lo noto casi nunca. Mis padres siempre dicen que {{6}} orgullosos de " +
      "que hable tres idiomas tan bien. Cuando alguien me pregunta de dónde soy, {{7}} que soy de los dos sitios a la vez.",
    blanks: [
      { n: 1, correctAnswer: "tengo" },
      { n: 2, correctAnswer: "desde" },
      { n: 3, correctAnswer: "pero" },
      { n: 4, correctAnswer: "era" },
      { n: 5, correctAnswer: "pero" },
      { n: 6, correctAnswer: "están" },
      { n: 7, correctAnswer: "digo" },
    ],
    distractors: ["hasta", "estoy", "soy", "porque"],
  },
  {
    id: "cloze-identities-2",
    themeId: "identities",
    title: "El tatuaje de mi abuela",
    level: "medium",
    bodyEs:
      "La semana pasada le pregunté a mi abuela {{1}} el pequeño tatuaje que tiene en la muñeca. Me contó que {{2}} lo hizo " +
      "cuando tenía apenas veinte años, en contra de la voluntad de sus padres. \"En esa época, {{3}} las mujeres se tatuaban, " +
      "y mucho menos en mi pueblo\", me explicó. {{4}} embargo, ella quería demostrar que su cuerpo {{5}} suyo y de nadie más. " +
      "Hoy, más de cuarenta años después, sigue sin arrepentirse. Me di cuenta de que la identidad no es algo fijo: {{6}} construye " +
      "poco a poco, incluso {{7}} decisiones pequeñas que en su momento parecen enormes.",
    blanks: [
      { n: 1, correctAnswer: "por" },
      { n: 2, correctAnswer: "se" },
      { n: 3, correctAnswer: "casi ninguna" },
      { n: 4, correctAnswer: "sin" },
      { n: 5, correctAnswer: "era" },
      { n: 6, correctAnswer: "se" },
      { n: 7, correctAnswer: "con" },
    ],
    distractors: ["para", "muchas", "estaba"],
  },
  {
    id: "cloze-identities-3",
    themeId: "identities",
    title: "Ni de aquí ni de allá",
    level: "hard",
    bodyEs:
      "Cuando visito el país de mis padres, la gente nota enseguida {{1}} mi acento no es del todo local, aunque lo hable con " +
      "fluidez. Cuando estoy en mi ciudad de nacimiento, algunos compañeros todavía me preguntan {{2}} vengo \"en realidad\", " +
      "{{3}} llevo aquí toda la vida. Durante años, esto me hacía sentir que no {{4}} completamente a ningún lugar. Ahora, sin " +
      "embargo, prefiero pensar que pertenezco a los dos {{5}} vez, en lugar de tener que elegir uno. Es posible que esta " +
      "sensación de estar entre dos mundos nunca {{6}} desaparezca del todo, pero he aprendido a que no me {{7}} tanto.",
    blanks: [
      { n: 1, correctAnswer: "que" },
      { n: 2, correctAnswer: "de dónde" },
      { n: 3, correctAnswer: "aunque" },
      { n: 4, correctAnswer: "pertenecía" },
      { n: 5, correctAnswer: "a la" },
      { n: 6, correctAnswer: "se" },
      { n: 7, correctAnswer: "pese" },
    ],
    distractors: ["porque", "sino", "importe"],
  },

  // --- experiences ---
  {
    id: "cloze-experiences-1",
    themeId: "experiences",
    title: "Mi primer día de intercambio",
    level: "easy",
    bodyEs:
      "Ayer {{1}} mi primer día en el instituto francés. Me desperté muy nerviosa {{2}} no conocía a nadie todavía. Mi familia " +
      "de acogida me {{3}} un desayuno enorme antes de salir, aunque yo casi no {{4}} comer de los nervios. En clase de " +
      "historia, una chica se sentó a mi lado {{5}} me ayudó a seguir la lección. Al final del día, {{6}} mucho más tranquila " +
      "que por la mañana. Esa noche escribí en mi diario que {{7}} sido un día agotador, pero también muy bonito.",
    blanks: [
      { n: 1, correctAnswer: "fue" },
      { n: 2, correctAnswer: "porque" },
      { n: 3, correctAnswer: "preparó" },
      { n: 4, correctAnswer: "podía" },
      { n: 5, correctAnswer: "y" },
      { n: 6, correctAnswer: "estaba" },
      { n: 7, correctAnswer: "había" },
    ],
    distractors: ["era", "aunque", "pudo"],
  },
  {
    id: "cloze-experiences-2",
    themeId: "experiences",
    title: "El susto en la montaña",
    level: "medium",
    bodyEs:
      "Llevábamos ya tres horas caminando {{1}} el sendero cuando empezó a llover con mucha fuerza. Mi hermano quería {{2}} " +
      "adelante, pero nuestro guía insistió en {{3}} volviéramos al refugio inmediatamente, {{4}} el camino se estaba " +
      "poniendo peligroso. Al principio nos pareció una exageración, {{5}} en cuanto vimos el barro en el sendero entendimos " +
      "que tenía razón. Llegamos al refugio empapados pero {{6}}. Esa experiencia me enseñó que, en la montaña, hay que " +
      "escuchar siempre a quien {{7}} más experiencia que uno.",
    blanks: [
      { n: 1, correctAnswer: "por" },
      { n: 2, correctAnswer: "seguir" },
      { n: 3, correctAnswer: "que" },
      { n: 4, correctAnswer: "porque" },
      { n: 5, correctAnswer: "pero" },
      { n: 6, correctAnswer: "a salvo" },
      { n: 7, correctAnswer: "tenga" },
    ],
    distractors: ["para", "sino", "tiene"],
  },
  {
    id: "cloze-experiences-3",
    themeId: "experiences",
    title: "Volver al pueblo después de diez años",
    level: "hard",
    bodyEs:
      "No había vuelto al pueblo de mis abuelos {{1}} que tenía ocho años, así que apenas reconocí las calles cuando por fin " +
      "{{2}} de vuelta. Es curioso: de niña me parecía un lugar enorme, y ahora, siendo adulta, me sorprende {{3}} pequeño es " +
      "en realidad. Si hubiera sabido {{4}} triste iba a sentirme al ver la casa de mi abuela abandonada, {{5}} habría " +
      "preparado mejor emocionalmente. Aun así, no me arrepiento de haber ido: fue una experiencia que {{6}} necesitaba vivir " +
      "para entender de dónde vengo, {{7}} lo dolorosa que resultó en algunos momentos.",
    blanks: [
      { n: 1, correctAnswer: "desde" },
      { n: 2, correctAnswer: "regresé" },
      { n: 3, correctAnswer: "qué" },
      { n: 4, correctAnswer: "lo" },
      { n: 5, correctAnswer: "me" },
      { n: 6, correctAnswer: "necesitaba" },
      { n: 7, correctAnswer: "pese a" },
    ],
    distractors: ["hasta", "por", "aunque"],
  },

  // --- human-ingenuity ---
  {
    id: "cloze-human-ingenuity-1",
    themeId: "human-ingenuity",
    title: "Mi primer robot casero",
    level: "easy",
    bodyEs:
      "El mes pasado {{1}} construir mi primer robot pequeño con piezas recicladas. No {{2}} ninguna experiencia previa, así " +
      "que tuve que aprender viendo vídeos en internet. Al principio el robot no {{3}} moverse en línea recta, {{4}} después " +
      "de ajustar los motores varias veces, por fin funcionó. Se lo enseñé {{5}} mi profesora de tecnología y le encantó tanto " +
      "que ahora quiere que lo presente en la feria de ciencias. Estoy muy {{6}} de lo que conseguí hacer {{7}} un poco de " +
      "paciencia y muchos intentos fallidos.",
    blanks: [
      { n: 1, correctAnswer: "decidí" },
      { n: 2, correctAnswer: "tenía" },
      { n: 3, correctAnswer: "quería" },
      { n: 4, correctAnswer: "pero" },
      { n: 5, correctAnswer: "a" },
      { n: 6, correctAnswer: "orgullosa" },
      { n: 7, correctAnswer: "con" },
    ],
    distractors: ["sino", "para", "contenta"],
  },
  {
    id: "cloze-human-ingenuity-2",
    themeId: "human-ingenuity",
    title: "La aplicación que inventamos en clase",
    level: "medium",
    bodyEs:
      "Para el proyecto final de tecnología, mi grupo decidió {{1}} una aplicación que ayudara a los estudiantes a organizar " +
      "sus horarios de estudio. Trabajamos {{2}} ella durante casi dos meses, {{3}} algunas semanas fueron más productivas que " +
      "otras. Lo más difícil no fue programarla, {{4}} conseguir que otros estudiantes la probaran y nos dieran su opinión " +
      "sincera. Cuando por fin la presentamos, el profesor nos dijo que {{5}} la mejor idea que había visto en años. Ahora " +
      "estamos pensando en publicarla de verdad, aunque eso {{6}} pedir ayuda a alguien {{7}} sepa de diseño gráfico.",
    blanks: [
      { n: 1, correctAnswer: "crear" },
      { n: 2, correctAnswer: "en" },
      { n: 3, correctAnswer: "aunque" },
      { n: 4, correctAnswer: "sino" },
      { n: 5, correctAnswer: "era" },
      { n: 6, correctAnswer: "signifique" },
      { n: 7, correctAnswer: "que" },
    ],
    distractors: ["por", "pero", "significa"],
  },
  {
    id: "cloze-human-ingenuity-3",
    themeId: "human-ingenuity",
    title: "Cuando la inteligencia artificial se equivoca",
    level: "hard",
    bodyEs:
      "Aunque la inteligencia artificial {{1}} avanzando a una velocidad impresionante, es importante recordar que también " +
      "comete errores, {{2}} a veces graves. El mes pasado, un programa de reconocimiento facial confundió a dos personas " +
      "completamente distintas, {{3}} generó serias dudas sobre su uso en la seguridad pública. Los expertos insisten en que " +
      "estos sistemas {{4}} entrenarse con datos mucho más diversos {{5}} de que se cometan menos errores de este tipo. De lo " +
      "contrario, corremos el riesgo de que decisiones importantes {{6}} tomadas por algoritmos que, sin {{7}} quererlo, " +
      "perjudican a ciertos grupos más que a otros.",
    blanks: [
      { n: 1, correctAnswer: "sigue" },
      { n: 2, correctAnswer: "y" },
      { n: 3, correctAnswer: "lo cual" },
      { n: 4, correctAnswer: "deben" },
      { n: 5, correctAnswer: "antes" },
      { n: 6, correctAnswer: "sean" },
      { n: 7, correctAnswer: "siquiera" },
    ],
    distractors: ["está", "pero", "después"],
  },

  // --- social-organization ---
  {
    id: "cloze-social-organization-1",
    themeId: "social-organization",
    title: "Un día de voluntariado",
    level: "easy",
    bodyEs:
      "El sábado pasado {{1}} de voluntaria en un comedor social del barrio. Llegué {{2}} las nueve de la mañana y me " +
      "asignaron la tarea de servir la comida. Al principio {{3}} un poco de vergüenza porque no sabía hablar con los " +
      "usuarios, {{4}} enseguida empecé a sentirme más cómoda. Una señora mayor me contó que llevaba viniendo {{5}} tres " +
      "años y que este comedor {{6}} muy importante para ella. Al final del día entendí que ayudar a los demás también " +
      "{{7}} ayuda a uno mismo a ver la vida de otra manera.",
    blanks: [
      { n: 1, correctAnswer: "trabajé" },
      { n: 2, correctAnswer: "a" },
      { n: 3, correctAnswer: "tenía" },
      { n: 4, correctAnswer: "pero" },
      { n: 5, correctAnswer: "hace" },
      { n: 6, correctAnswer: "era" },
      { n: 7, correctAnswer: "te" },
    ],
    distractors: ["desde", "sino", "estaba"],
  },
  {
    id: "cloze-social-organization-2",
    themeId: "social-organization",
    title: "La reunión del consejo estudiantil",
    level: "medium",
    bodyEs:
      "En la última reunión del consejo estudiantil, propusimos {{1}} el instituto instalara más papeleras de reciclaje en " +
      "el patio. Algunos miembros dudaban {{2}} realmente serviría de algo, {{3}} después de un largo debate votamos a " +
      "favor de intentarlo. El director nos pidió que {{4}} un plan detallado antes de aprobar el presupuesto, {{5}} que " +
      "tuvimos que reunirnos dos veces más esa semana. Fue agotador, {{6}} embargo, ver cómo un grupo de estudiantes podía " +
      "influir en una decisión real me hizo sentir que nuestra voz {{7}} de verdad.",
    blanks: [
      { n: 1, correctAnswer: "que" },
      { n: 2, correctAnswer: "de que" },
      { n: 3, correctAnswer: "pero" },
      { n: 4, correctAnswer: "presentáramos" },
      { n: 5, correctAnswer: "así" },
      { n: 6, correctAnswer: "sin" },
      { n: 7, correctAnswer: "importaba" },
    ],
    distractors: ["porque", "presentamos", "con"],
  },
  {
    id: "cloze-social-organization-3",
    themeId: "social-organization",
    title: "La huelga que dividió a mi barrio",
    level: "hard",
    bodyEs:
      "Cuando los trabajadores del transporte público {{1}} en huelga, todo el barrio se dividió entre quienes los apoyaban " +
      "y quienes solo pensaban en las molestias del día a día. Mi vecina, que lleva treinta años {{2}} en la empresa, decía " +
      "que era la única forma de que sus reclamos {{3}} tomados en serio. Otros vecinos, en cambio, se quejaban de que {{4}} " +
      "imposible llegar al trabajo a tiempo. Personalmente, creo que es fácil criticar una huelga {{5}} que a uno no le " +
      "afecte directamente, y mucho más difícil ponerse en el lugar de quienes llevan meses {{6}} un salario digno {{7}} " +
      "conseguirlo.",
    blanks: [
      { n: 1, correctAnswer: "se declararon" },
      { n: 2, correctAnswer: "trabajando" },
      { n: 3, correctAnswer: "fueran" },
      { n: 4, correctAnswer: "era" },
      { n: 5, correctAnswer: "cuando" },
      { n: 6, correctAnswer: "pidiendo" },
      { n: 7, correctAnswer: "sin" },
    ],
    distractors: ["fueron", "porque", "con"],
  },

  // --- sharing-planet ---
  {
    id: "cloze-sharing-planet-1",
    themeId: "sharing-planet",
    title: "Un fin de semana sin plástico",
    level: "easy",
    bodyEs:
      "Este fin de semana {{1}} intentar no usar nada de plástico de un solo uso. Fue más difícil de lo que {{2}}: incluso " +
      "el pan del supermercado venía envuelto en plástico. {{3}} embargo, conseguí llevar mi propia bolsa de tela y una " +
      "botella reutilizable a todas partes. Mi madre {{4}} sorprendió mucho cuando le conté el experimento, {{5}} decidió " +
      "unirse el domingo. Al final del fin de semana, {{6}} cuenta de cuántas decisiones pequeñas tomamos cada día sin " +
      "pensar {{7}} el planeta.",
    blanks: [
      { n: 1, correctAnswer: "decidí" },
      { n: 2, correctAnswer: "esperaba" },
      { n: 3, correctAnswer: "sin" },
      { n: 4, correctAnswer: "se" },
      { n: 5, correctAnswer: "y" },
      { n: 6, correctAnswer: "me di" },
      { n: 7, correctAnswer: "en" },
    ],
    distractors: ["con", "esperaban", "pero"],
  },
  {
    id: "cloze-sharing-planet-2",
    themeId: "sharing-planet",
    title: "La sequía que cambió la cosecha",
    level: "medium",
    bodyEs:
      "Este año la sequía {{1}} sido tan fuerte que muchos agricultores de la región perdieron gran parte de la cosecha. Mi " +
      "tío, que lleva cultivando olivos {{2}} más de veinte años, nunca {{3}} visto algo parecido. Dice que antes {{4}} " +
      "suficiente con regar una vez por semana, pero que ahora eso ya no basta. Los expertos afirman que, {{5}} no se toman " +
      "medidas urgentes, este tipo de sequías {{6}} cada vez más frecuentes. Por eso mi tío está estudiando técnicas de " +
      "riego más eficientes {{7}} adaptarse a este nuevo clima.",
    blanks: [
      { n: 1, correctAnswer: "ha" },
      { n: 2, correctAnswer: "desde hace" },
      { n: 3, correctAnswer: "había" },
      { n: 4, correctAnswer: "era" },
      { n: 5, correctAnswer: "si" },
      { n: 6, correctAnswer: "serán" },
      { n: 7, correctAnswer: "para" },
    ],
    distractors: ["desde", "estaba", "por"],
  },
  {
    id: "cloze-sharing-planet-3",
    themeId: "sharing-planet",
    title: "El debate sobre el parque eólico",
    level: "hard",
    bodyEs:
      "Cuando el ayuntamiento anunció que {{1}} a construir un parque eólico cerca del pueblo, la comunidad se dividió de " +
      "inmediato. Algunos vecinos celebraban que por fin {{2}} a producir energía limpia sin depender tanto de los " +
      "combustibles fósiles. Otros temían que las turbinas {{3}} el paisaje y afectaran negativamente al turismo, del que " +
      "vive buena parte del pueblo. Un grupo de biólogos advirtió, {{4}} su lado, que el proyecto debía revisarse {{5}} no " +
      "afectar a las aves migratorias que pasan por la zona cada otoño. Al final, el ayuntamiento aceptó reducir el número " +
      "de turbinas, aunque {{6}} claro que la decisión no {{7}} a nadie del todo.",
    blanks: [
      { n: 1, correctAnswer: "iban" },
      { n: 2, correctAnswer: "fueran" },
      { n: 3, correctAnswer: "arruinaran" },
      { n: 4, correctAnswer: "por" },
      { n: 5, correctAnswer: "para" },
      { n: 6, correctAnswer: "quedó" },
      { n: 7, correctAnswer: "convenció" },
    ],
    distractors: ["eran", "arruinarían", "aunque"],
  },
  {
    id: "cloze-identities-4",
    themeId: "identities",
    title: "Mi nombre, mi historia",
    level: "easy",
    bodyEs:
      "Me llamo Amaia, un nombre vasco que significa \"final\" o \"fin\". Mis padres lo eligieron porque {{1}} nací el último día del año. De pequeña, no {{2}} muy contenta con mi nombre porque nadie sabía pronunciarlo bien fuera del País Vasco.\n\n" +
      "Con el tiempo, {{3}} cuenta de que mi nombre era, en realidad, algo especial: una conexión directa con la tierra de mis abuelos. Ahora, cuando alguien me pregunta {{4}} significa \"Amaia\", me encanta poder contar esa historia.\n\n" +
      "Mi hermano, en cambio, {{5}} llama Jon, un nombre mucho más fácil de pronunciar, {{6}} igual de vasco. Los dos crecimos orgullosos de nuestras raíces, aunque de formas distintas. Al final, entendí que un nombre no {{7}} solo una palabra: es una pequeña puerta hacia quiénes somos.",
    blanks: [
      { n: 1, correctAnswer: "yo" },
      { n: 2, correctAnswer: "estaba" },
      { n: 3, correctAnswer: "me di" },
      { n: 4, correctAnswer: "qué" },
      { n: 5, correctAnswer: "se" },
      { n: 6, correctAnswer: "pero" },
      { n: 7, correctAnswer: "es" },
    ],
    distractors: ["era", "por qué", "sino"],
  },
  {
    id: "cloze-identities-5",
    themeId: "identities",
    title: "Carta a mi futuro yo bilingüe",
    level: "medium",
    bodyEs:
      "Querido yo del futuro:\n\n" +
      "Ahora mismo estoy aprendiendo mi tercer idioma, y {{1}} cuesta muchísimo. A veces mezclo palabras de los tres sin darme cuenta, {{2}} mi profesora dice que eso es completamente normal.\n\n" +
      "Espero que para cuando leas esto, ya {{3}} logrado hablar con fluidez, y que no {{4}} olvidado lo difícil que fue al principio. Quiero que recuerdes que cada error que cometiste {{5}} parte del proceso, no un fracaso.\n\n" +
      "Ojalá, dentro de unos años, puedas viajar y usar estos idiomas {{6}} conectar con gente que jamás habrías conocido de otra forma. Y ojalá, sobre todo, sigas sintiéndote {{7}} orgulloso de todo el esfuerzo que hiciste.",
    blanks: [
      { n: 1, correctAnswer: "me" },
      { n: 2, correctAnswer: "pero" },
      { n: 3, correctAnswer: "hayas" },
      { n: 4, correctAnswer: "hayas" },
      { n: 5, correctAnswer: "fue" },
      { n: 6, correctAnswer: "para" },
      { n: 7, correctAnswer: "tan" },
    ],
    distractors: ["te", "porque", "por"],
  },
  {
    id: "cloze-identities-6",
    themeId: "identities",
    title: "Reportaje: Jóvenes que cambian de nombre",
    level: "hard",
    bodyEs:
      "Cada vez más jóvenes deciden legalmente cambiar su nombre para que {{1}} refleje mejor quiénes son, según un estudio reciente sobre identidad de género y cultural.\n\n" +
      "\"No fue una decisión que {{2}} de la noche a la mañana\", explica Dani, de diecinueve años, quien cambió su nombre hace dos años. \"Llevaba mucho tiempo sintiendo que mi nombre {{3}} correspondía con quien era.\"\n\n" +
      "Los expertos consultados señalan que este fenómeno, {{4}} lejos de ser una moda pasajera, refleja una mayor libertad social para que los jóvenes {{5}} su propia identidad sin miedo al juicio ajeno. Sin embargo, el proceso legal sigue siendo lento y costoso en muchos países, {{6}} desanima a quienes no cuentan con suficiente apoyo familiar o económico.\n\n" +
      "\"Ojalá en el futuro este proceso {{7}} más accesible para todos\", concluye Dani.",
    blanks: [
      { n: 1, correctAnswer: "los" },
      { n: 2, correctAnswer: "tomara" },
      { n: 3, correctAnswer: "no" },
      { n: 4, correctAnswer: "lejos" },
      { n: 5, correctAnswer: "construyan" },
      { n: 6, correctAnswer: "lo cual" },
      { n: 7, correctAnswer: "sea" },
    ],
    distractors: ["les", "tomó", "construyen"],
  },
  {
    id: "cloze-identities-7",
    themeId: "identities",
    title: "Foro: ¿Se puede tener más de una identidad nacional?",
    level: "medium",
    bodyEs:
      "Publicado por usuario RaícesDobles:\n\n" +
      "Nací en Alemania de padres turcos, y toda mi vida {{1}} preguntado si soy más alemán o más turco. La verdad es que nunca {{2}} sentido que tenía que elegir uno de los dos.\n\n" +
      "Respuesta de usuario CiudadanaGlobal:\n\n" +
      "Te entiendo perfectamente. Yo crecí {{3}} dos culturas también, y durante años pensé que tenía un problema. Ahora creo que tener varias identidades {{4}} una riqueza, no una contradicción.\n\n" +
      "Respuesta de usuario RaícesDobles:\n\n" +
      "Gracias {{5}} tu respuesta. Últimamente pienso que la pregunta correcta no {{6}} \"¿de dónde eres realmente?\", sino \"¿qué partes de cada cultura quieres conservar?\". Esa forma de verlo me {{7}} ayudado mucho a sentirme en paz conmigo mismo.",
    blanks: [
      { n: 1, correctAnswer: "me he" },
      { n: 2, correctAnswer: "he" },
      { n: 3, correctAnswer: "entre" },
      { n: 4, correctAnswer: "es" },
      { n: 5, correctAnswer: "por" },
      { n: 6, correctAnswer: "es" },
      { n: 7, correctAnswer: "ha" },
    ],
    distractors: ["soy he", "había", "para"],
  },
  {
    id: "cloze-identities-8",
    themeId: "identities",
    title: "Guía: Cómo apoyar a un amigo que está explorando su identidad",
    level: "easy",
    bodyEs:
      "Si un amigo o amiga te cuenta que está explorando su identidad, {{1}} pasos sencillos pueden marcar una gran diferencia.\n\n" +
      "Primero, escucha sin juzgar. No hace falta que {{2}} todas las respuestas; a veces basta con estar presente. Segundo, respeta el ritmo de la otra persona: nadie {{3}} obligado a tener todo resuelto de inmediato.\n\n" +
      "Tercero, {{4}} cuidado con las preguntas que haces. Algunas, aunque bienintencionadas, pueden sentirse invasivas. Es mejor esperar {{5}} que la persona comparta lo que quiera compartir, cuando quiera hacerlo.\n\n" +
      "Por último, recuerda que tu amistad no {{6}} cambiar por esto. Al contrario: apoyar a alguien en este proceso suele {{7}} el vínculo mucho más fuerte.",
    blanks: [
      { n: 1, correctAnswer: "estos" },
      { n: 2, correctAnswer: "tengas" },
      { n: 3, correctAnswer: "está" },
      { n: 4, correctAnswer: "ten" },
      { n: 5, correctAnswer: "a" },
      { n: 6, correctAnswer: "debe" },
      { n: 7, correctAnswer: "hacer" },
    ],
    distractors: ["esos", "tienes", "haz"],
  },
  {
    id: "cloze-identities-9",
    themeId: "identities",
    title: "Reseña: la novela gráfica 'Dos apellidos'",
    level: "hard",
    bodyEs:
      "\"Dos apellidos\" narra la historia de Lucía, una joven que descubre a los dieciséis años que fue adoptada, y que decide buscar {{1}} familia biológica sin saber qué encontrará.\n\n" +
      "Lo que más destaca de esta novela gráfica es que evita cualquier final fácil: cuando Lucía por fin {{2}} con su madre biológica, la autora no {{3}} intenta convertir el reencuentro en algo perfectamente feliz. Al contrario, muestra la complejidad de amar a dos familias {{4}} vez.\n\n" +
      "El dibujo, en blanco y negro salvo por pequeños detalles en color, refuerza esta idea: {{5}} colores aparecen, precisamente, en los momentos en los que Lucía se siente más segura de sí misma.\n\n" +
      "Si algo se le puede criticar es que el ritmo decae {{6}} la mitad, {{7}} el desenlace compensa con creces esa lentitud.",
    blanks: [
      { n: 1, correctAnswer: "a su" },
      { n: 2, correctAnswer: "se encuentra" },
      { n: 3, correctAnswer: "ni" },
      { n: 4, correctAnswer: "a la" },
      { n: 5, correctAnswer: "los" },
      { n: 6, correctAnswer: "hacia" },
      { n: 7, correctAnswer: "pero" },
    ],
    distractors: ["su", "se encontró", "aunque"],
  },
  {
    id: "cloze-experiences-4",
    themeId: "experiences",
    title: "Diario: Perdida en el metro de Tokio",
    level: "easy",
    bodyEs:
      "Querido diario:\n\n" +
      "Hoy me perdí completamente en el metro de Tokio y {{1}} fue, sorprendentemente, uno de los mejores momentos del viaje. Cogí la línea equivocada {{2}} no entendía bien los carteles, y terminé en un barrio que no estaba en ninguna guía turística.\n\n" +
      "Al principio {{3}} un poco de pánico, pero después decidí simplemente explorar. Encontré un pequeño restaurante donde nadie hablaba inglés, {{4}} el dueño se esforzó muchísimo por ayudarme con gestos y una sonrisa enorme.\n\n" +
      "Comí el mejor ramen de mi vida {{5}} conocer su nombre en el menú. A veces perderse {{6}} exactamente lo que necesitas para descubrir algo que jamás {{7}} planeado.",
    blanks: [
      { n: 1, correctAnswer: "eso" },
      { n: 2, correctAnswer: "porque" },
      { n: 3, correctAnswer: "sentí" },
      { n: 4, correctAnswer: "pero" },
      { n: 5, correctAnswer: "sin" },
      { n: 6, correctAnswer: "es" },
      { n: 7, correctAnswer: "habría" },
    ],
    distractors: ["eran", "aunque", "con"],
  },
  {
    id: "cloze-experiences-5",
    themeId: "experiences",
    title: "Entrevista: Superviviente de un naufragio en un crucero de aventura",
    level: "hard",
    bodyEs:
      "— Marcos, cuéntanos qué pasó aquella noche en el barco.\n\n" +
      "— Estábamos navegando cuando, de repente, sentimos que el barco {{1}} empezado a inclinarse. Nadie sabía exactamente qué {{2}} pasando, y eso fue lo más aterrador.\n\n" +
      "— ¿Qué hicisteis en ese momento?\n\n" +
      "— El capitán ordenó que todos {{3}} a los botes salvavidas de inmediato. Recuerdo que mi mano temblaba tanto que apenas {{4}} atar el chaleco salvavidas.\n\n" +
      "— ¿Qué es lo que más recuerdas de esas horas en el mar?\n\n" +
      "— El silencio. Nadie hablaba, {{5}} de vez en cuando alguien rezaba en voz baja. Cuando por fin vimos las luces del barco de rescate, {{6}} llorando todos a la vez.\n\n" +
      "— ¿Cómo te ha cambiado esta experiencia?\n\n" +
      "— Ahora valoro cada día {{7}} manera que antes nunca imaginé posible.",
    blanks: [
      { n: 1, correctAnswer: "había" },
      { n: 2, correctAnswer: "estaba" },
      { n: 3, correctAnswer: "subiéramos" },
      { n: 4, correctAnswer: "podía" },
      { n: 5, correctAnswer: "salvo" },
      { n: 6, correctAnswer: "nos pusimos" },
      { n: 7, correctAnswer: "de una" },
    ],
    distractors: ["fue", "subimos", "nos ponemos"],
  },
  {
    id: "cloze-experiences-6",
    themeId: "experiences",
    title: "Anuncio: Curso de supervivencia en la selva",
    level: "easy",
    bodyEs:
      "¿Te atreves a vivir una experiencia diferente? Nuestro curso de supervivencia en la selva amazónica está diseñado {{1}} quienes buscan algo más que unas vacaciones normales.\n\n" +
      "Durante cinco días, aprenderás {{2}} construir un refugio, encontrar agua potable y orientarte sin GPS, siempre acompañado {{3}} guías indígenas con más de veinte años de experiencia.\n\n" +
      "\"Nunca pensé que {{4}} capaz de hacer fuego sin cerillas, y ahora sé hacerlo\", cuenta Beatriz, participante del mes pasado.\n\n" +
      "No {{5}} necesaria experiencia previa, aunque sí una condición física básica. El precio incluye todo el equipo, las comidas y el {{6}} hasta el campamento base.\n\n" +
      "Las plazas son limitadas a doce personas por grupo, {{7}} que la experiencia sea realmente personalizada.",
    blanks: [
      { n: 1, correctAnswer: "para" },
      { n: 2, correctAnswer: "a" },
      { n: 3, correctAnswer: "de" },
      { n: 4, correctAnswer: "sería" },
      { n: 5, correctAnswer: "es" },
      { n: 6, correctAnswer: "transporte" },
      { n: 7, correctAnswer: "para" },
    ],
    distractors: ["por", "está", "porte"],
  },
  {
    id: "cloze-experiences-7",
    themeId: "experiences",
    title: "Publicación: Un año viviendo en una furgoneta",
    level: "medium",
    bodyEs:
      "Hace exactamente un año que {{1}} mi apartamento y me mudé a vivir en una furgoneta convertida. Mucha gente me pregunta si {{2}} arrepentido, y la respuesta sincera es: para nada. 🚐\n\n" +
      "Al principio fue difícil acostumbrarme a tener tan poco espacio, {{3}} con el tiempo aprendí que necesitaba muchas menos cosas de las que pensaba. Ahora despierto {{4}} lugares distintos casi cada semana: playas, montañas, bosques.\n\n" +
      "No voy a mentir: hay días difíciles, sobre todo cuando llueve fuerte {{5}} el techo, o cuando no encuentro dónde ducharme. {{6}} embargo, ninguno de esos inconvenientes se compara con la libertad que siento cada mañana.\n\n" +
      "Si alguien me hubiera dicho hace dos años que {{7}} a vivir así, no le habría creído.",
    blanks: [
      { n: 1, correctAnswer: "dejé" },
      { n: 2, correctAnswer: "me he" },
      { n: 3, correctAnswer: "pero" },
      { n: 4, correctAnswer: "en" },
      { n: 5, correctAnswer: "sobre" },
      { n: 6, correctAnswer: "Sin" },
      { n: 7, correctAnswer: "iba" },
    ],
    distractors: ["salí", "he", "Con"],
  },
  {
    id: "cloze-experiences-8",
    themeId: "experiences",
    title: "Postal desde un pueblo fantasma",
    level: "easy",
    bodyEs:
      "¡Hola, Marta!\n\n" +
      "Te escribo desde un pueblo minero abandonado en pleno desierto. Nadie {{1}} vivido aquí desde hace más de sesenta años, pero las casas siguen {{2}} pie, como congeladas en el tiempo.\n\n" +
      "Caminar {{3}} estas calles vacías da un poco de escalofríos, la verdad, pero también es fascinante imaginar cómo {{4}} la vida aquí antes. Encontramos hasta una vieja escuela con pupitres todavía dentro.\n\n" +
      "El guía nos contó que el pueblo {{5}} abandonado de repente cuando cerró la mina, y que muchas familias se fueron sin llevarse casi nada.\n\n" +
      "Mañana seguimos {{6}} camino hacia la costa. ¡Te escribiré {{7}} cuando lleguemos!\n\n" +
      "Un abrazo,\nSofía",
    blanks: [
      { n: 1, correctAnswer: "ha" },
      { n: 2, correctAnswer: "en" },
      { n: 3, correctAnswer: "por" },
      { n: 4, correctAnswer: "era" },
      { n: 5, correctAnswer: "fue" },
      { n: 6, correctAnswer: "nuestro" },
      { n: 7, correctAnswer: "otra vez" },
    ],
    distractors: ["había", "para", "estuvo"],
  },
  {
    id: "cloze-experiences-9",
    themeId: "experiences",
    title: "Informe: El turismo de catástrofes, ¿ético o morboso?",
    level: "hard",
    bodyEs:
      "El llamado \"turismo oscuro\" —visitar lugares asociados con tragedias humanas, como Chernóbil o campos de batalla— {{1}} generando un debate cada vez más intenso entre historiadores y turistas.\n\n" +
      "Quienes defienden esta práctica argumentan que {{2}} una forma poderosa de educación histórica: es distinto leer sobre una tragedia que {{3}} de pie en el lugar donde ocurrió. Según ellos, mientras el objetivo {{4}} recordar y aprender, la práctica tiene valor.\n\n" +
      "Los críticos, {{5}} embargo, sostienen que muchos visitantes buscan simplemente una experiencia impactante para publicar en redes sociales, sin ningún interés genuino en comprender lo sucedido. \"El problema no es visitar estos lugares\", explica una historiadora consultada, \"sino {{6}} se hace con el debido respeto\".\n\n" +
      "Ambos bandos coinciden, {{7}} menos, en que estos sitios exigen normas claras de comportamiento para los visitantes.",
    blanks: [
      { n: 1, correctAnswer: "está" },
      { n: 2, correctAnswer: "es" },
      { n: 3, correctAnswer: "estar" },
      { n: 4, correctAnswer: "sea" },
      { n: 5, correctAnswer: "sin" },
      { n: 6, correctAnswer: "cómo" },
      { n: 7, correctAnswer: "al" },
    ],
    distractors: ["fue", "era", "porque"],
  },
  {
    id: "cloze-human-ingenuity-4",
    themeId: "human-ingenuity",
    title: "Diario: Mi primer hackatón",
    level: "easy",
    bodyEs:
      "Querido diario:\n\n" +
      "Hoy terminó mi primer hackatón y todavía no puedo creer que {{1}} sobrevivido cuarenta y ocho horas casi sin dormir. Mi equipo y yo {{2}} construir una aplicación para ayudar a personas mayores a pedir cita médica online.\n\n" +
      "A las tres de la madrugada, nuestro código {{3}} dejó de funcionar y {{4}} pensé que todo el esfuerzo había sido en vano. Por suerte, uno de mis compañeros encontró el error justo {{5}} tiempo.\n\n" +
      "Al final no ganamos el primer premio, {{6}} un mentor nos dijo que nuestra idea tenía mucho potencial real. Estoy agotada, pero también {{7}} orgullosa de lo que logramos en tan poco tiempo.",
    blanks: [
      { n: 1, correctAnswer: "haya" },
      { n: 2, correctAnswer: "logramos" },
      { n: 3, correctAnswer: "se" },
      { n: 4, correctAnswer: "casi" },
      { n: 5, correctAnswer: "a" },
      { n: 6, correctAnswer: "pero" },
      { n: 7, correctAnswer: "muy" },
    ],
    distractors: ["había", "logremos", "tan"],
  },
  {
    id: "cloze-human-ingenuity-5",
    themeId: "human-ingenuity",
    title: "Correo: Queja sobre un asistente virtual defectuoso",
    level: "medium",
    bodyEs:
      "Estimado equipo de soporte técnico:\n\n" +
      "Les escribo porque el asistente virtual que instalé la semana pasada {{1}} funcionando correctamente desde el primer día. Cada vez que le pido {{2}} encienda las luces, apaga la calefacción en su lugar.\n\n" +
      "Ya {{3}} probado a reiniciarlo varias veces, siguiendo exactamente las instrucciones del manual, pero el problema persiste. Es posible que {{4}} un fallo en la última actualización del software, ya que el problema empezó justo después {{5}} instalarla.\n\n" +
      "Les agradecería que {{6}} enviaran un técnico o, en su defecto, que me explicaran cómo solucionarlo yo mismo. Espero su respuesta {{7}} la mayor brevedad posible.\n\n" +
      "Atentamente,\nCarlos Medina",
    blanks: [
      { n: 1, correctAnswer: "no está" },
      { n: 2, correctAnswer: "que" },
      { n: 3, correctAnswer: "he" },
      { n: 4, correctAnswer: "haya" },
      { n: 5, correctAnswer: "de" },
      { n: 6, correctAnswer: "me" },
      { n: 7, correctAnswer: "con" },
    ],
    distractors: ["está", "habrá", "en"],
  },
  {
    id: "cloze-human-ingenuity-6",
    themeId: "human-ingenuity",
    title: "Entrevista con la ganadora de un premio de diseño sostenible",
    level: "hard",
    bodyEs:
      "— Marina, tu diseño de mobiliario hecho con residuos plásticos {{1}} sorprendido a todo el jurado. ¿Cómo surgió la idea?\n\n" +
      "— Todo empezó cuando {{2}} cuenta de la cantidad de plástico que se acumulaba en la playa cerca de mi taller. Pensé que, {{3}} lugar de quejarme, podía intentar hacer algo útil con ese material.\n\n" +
      "— ¿Fue difícil conseguir que el plástico reciclado {{4}} suficientemente resistente para muebles?\n\n" +
      "— Muchísimo. Tardé casi dos años en encontrar la fórmula correcta. Hubo momentos en los que {{5}} tirar la toalla, pero cada fracaso me enseñaba algo nuevo sobre el material.\n\n" +
      "— ¿Qué le dirías a otros diseñadores que quieran seguir un camino similar?\n\n" +
      "— Que no {{6}} miedo a equivocarse muchas veces. Si todo hubiera salido bien a la primera, probablemente {{7}} aprendido mucho menos de lo que aprendí.",
    blanks: [
      { n: 1, correctAnswer: "ha" },
      { n: 2, correctAnswer: "me di" },
      { n: 3, correctAnswer: "en" },
      { n: 4, correctAnswer: "fuera" },
      { n: 5, correctAnswer: "estuve a punto de" },
      { n: 6, correctAnswer: "tengan" },
      { n: 7, correctAnswer: "habría" },
    ],
    distractors: ["había", "es punto de", "tienen"],
  },
  {
    id: "cloze-human-ingenuity-7",
    themeId: "human-ingenuity",
    title: "Publicación: Probé un traductor con auriculares en tiempo real",
    level: "easy",
    bodyEs:
      "Ayer probé por primera vez unos auriculares que traducen conversaciones en tiempo real, y quería contaros {{1}} experiencia. 🎧\n\n" +
      "Los usé para hablar con un vendedor que solo hablaba japonés, y la verdad es que funcionaron {{2}} mejor de lo que esperaba. Había un pequeño retraso, {{3}} entendible dado que la tecnología traduce mientras hablas.\n\n" +
      "Lo que menos me gustó fue que, con frases muy largas, {{4}} costaba entender bien el contexto completo. Aun así, para conversaciones básicas, creo que {{5}} una herramienta increíble para viajeros.\n\n" +
      "¿Sustituirán algún día a aprender idiomas de verdad? No lo creo, {{6}} desde luego facilitan muchísimo la comunicación cuando no tienes tiempo {{7}} estudiar un idioma nuevo.",
    blanks: [
      { n: 1, correctAnswer: "mi" },
      { n: 2, correctAnswer: "mucho" },
      { n: 3, correctAnswer: "algo" },
      { n: 4, correctAnswer: "le" },
      { n: 5, correctAnswer: "es" },
      { n: 6, correctAnswer: "pero" },
      { n: 7, correctAnswer: "de" },
    ],
    distractors: ["mucha", "fue", "sino"],
  },
  {
    id: "cloze-human-ingenuity-8",
    themeId: "human-ingenuity",
    title: "Informe: Drones que plantan árboles",
    level: "medium",
    bodyEs:
      "Una empresa de tecnología ambiental ha desarrollado drones capaces de plantar semillas de árboles a gran escala, {{1}} objetivo es acelerar la reforestación en zonas de difícil acceso.\n\n" +
      "Según el informe, cada dron {{2}} plantar hasta cien semillas por minuto, disparándolas hacia el suelo dentro de cápsulas biodegradables llenas de nutrientes. Esto permite reforestar terrenos montañosos {{3}} los que sería imposible enviar trabajadores humanos con seguridad.\n\n" +
      "Los primeros resultados, {{4}} embargo, son mixtos: mientras algunas zonas muestran una tasa de germinación superior al setenta por ciento, otras apenas superan el treinta por ciento, dependiendo del tipo de suelo.\n\n" +
      "Los responsables del proyecto afirman que seguirán ajustando la tecnología {{5}} que la tasa de éxito {{6}} más consistente en distintos climas, con el objetivo de plantar mil millones de árboles {{7}} de 2030.",
    blanks: [
      { n: 1, correctAnswer: "cuyo" },
      { n: 2, correctAnswer: "puede" },
      { n: 3, correctAnswer: "en" },
      { n: 4, correctAnswer: "sin" },
      { n: 5, correctAnswer: "hasta" },
      { n: 6, correctAnswer: "sea" },
      { n: 7, correctAnswer: "antes" },
    ],
    distractors: ["cuya", "podría", "es"],
  },
  {
    id: "cloze-human-ingenuity-9",
    themeId: "human-ingenuity",
    title: "Discurso: Presentación de un prototipo estudiantil",
    level: "hard",
    bodyEs:
      "Buenas tardes a todos.\n\n" +
      "Hace seis meses, cuando empezamos este proyecto, jamás {{1}} imaginado que estaríamos hoy aquí, presentando un prototipo funcional ante ustedes. Nuestro equipo {{2}} formado por cinco estudiantes que ni siquiera se conocían antes de este curso.\n\n" +
      "Este dispositivo, {{3}} detecta fugas de gas en cocinas domésticas, nació de una idea muy simple: la abuela de uno de nosotros {{4}} sufrió un accidente doméstico que pudo haberse evitado.\n\n" +
      "Queremos agradecer a nuestros profesores, {{5}} paciencia y apoyo hicieron posible que este proyecto avanzara incluso cuando estuvimos a punto de abandonarlo. También queremos animar a otros estudiantes {{6}} que no tengan miedo de proponer ideas que parezcan, al principio, demasiado ambiciosas.\n\n" +
      "Si nosotros pudimos convertir una idea de clase en algo real, {{7}} también puede.\n\n" +
      "Muchas gracias.",
    blanks: [
      { n: 1, correctAnswer: "habríamos" },
      { n: 2, correctAnswer: "está" },
      { n: 3, correctAnswer: "que" },
      { n: 4, correctAnswer: "casi" },
      { n: 5, correctAnswer: "cuya" },
      { n: 6, correctAnswer: "a" },
      { n: 7, correctAnswer: "cualquiera" },
    ],
    distractors: ["hubiéramos", "estuvo", "cuyo"],
  },
  {
    id: "cloze-social-organization-4",
    themeId: "social-organization",
    title: "Diario: Mi primer turno en el banco de alimentos",
    level: "easy",
    bodyEs:
      "Querido diario:\n\n" +
      "Hoy hice mi primer turno como voluntaria en el banco de alimentos del barrio. {{1}} las ocho de la mañana ya había una fila enorme de personas esperando.\n\n" +
      "Al principio no sabía muy bien {{2}} organizar las cajas, pero una voluntaria con más experiencia me {{3}} explicó todo con mucha paciencia. Lo que más me sorprendió fue {{4}} cantidad de familias con niños pequeños que vinieron.\n\n" +
      "Una madre me dio las gracias {{5}} tanta amabilidad que casi me hizo llorar. Nunca había pensado en {{6}} útil que puede sentirse uno ayudando a los demás.\n\n" +
      "Pienso volver el próximo sábado, y esta vez {{7}} llevaré a mi hermano también.",
    blanks: [
      { n: 1, correctAnswer: "A" },
      { n: 2, correctAnswer: "cómo" },
      { n: 3, correctAnswer: "lo" },
      { n: 4, correctAnswer: "la" },
      { n: 5, correctAnswer: "con" },
      { n: 6, correctAnswer: "lo" },
      { n: 7, correctAnswer: "me" },
    ],
    distractors: ["En", "una", "por"],
  },
  {
    id: "cloze-social-organization-5",
    themeId: "social-organization",
    title: "Informe: El auge de las cooperativas de jóvenes emprendedores",
    level: "hard",
    bodyEs:
      "Un estudio publicado esta semana revela que el número de cooperativas fundadas por menores de veinticinco años {{1}} triplicado en la última década, un fenómeno {{2}} los expertos atribuyen al deseo de esta generación de conciliar rentabilidad con impacto social.\n\n" +
      "A diferencia de las empresas tradicionales, en una cooperativa cada socio tiene {{3}} voto, sin importar cuánto capital haya invertido. Este modelo, según el informe, {{4}} especialmente popular en sectores como la alimentación ecológica y el reciclaje textil.\n\n" +
      "\"No creo que {{5}} funcionado hace veinte años\", afirma una de las investigadoras, \"pero hoy los consumidores jóvenes valoran mucho más el origen ético de lo que compran\".\n\n" +
      "El informe concluye que, {{6}} las cooperativas juveniles sigan creciendo a este ritmo, {{7}} representar una parte significativa de la economía en la próxima década.",
    blanks: [
      { n: 1, correctAnswer: "se ha" },
      { n: 2, correctAnswer: "que" },
      { n: 3, correctAnswer: "un" },
      { n: 4, correctAnswer: "es" },
      { n: 5, correctAnswer: "hubiera" },
      { n: 6, correctAnswer: "si" },
      { n: 7, correctAnswer: "podrían" },
    ],
    distractors: ["ha", "está", "habría"],
  },
  {
    id: "cloze-social-organization-6",
    themeId: "social-organization",
    title: "Anuncio: Se buscan mediadores escolares",
    level: "easy",
    bodyEs:
      "¿Te interesa ayudar a resolver conflictos entre compañeros de forma pacífica? El instituto busca estudiantes {{1}} formarse como mediadores escolares este trimestre.\n\n" +
      "El programa consiste en ocho sesiones de formación, {{2}} las que aprenderás técnicas de escucha activa y resolución de conflictos. Después, {{3}} turnos rotativos durante los recreos para ayudar a otros estudiantes a solucionar sus diferencias sin llegar a peleas.\n\n" +
      "\"No hace falta {{4}} tengas experiencia previa, solo ganas de ayudar\", explica la coordinadora del programa.\n\n" +
      "Los mediadores reciben un certificado oficial {{5}} final del curso, muy valorado en futuras solicitudes universitarias. Las plazas son limitadas, {{6}} que se recomienda apuntarse cuanto {{7}}.",
    blanks: [
      { n: 1, correctAnswer: "para" },
      { n: 2, correctAnswer: "durante" },
      { n: 3, correctAnswer: "harás" },
      { n: 4, correctAnswer: "que" },
      { n: 5, correctAnswer: "al" },
      { n: 6, correctAnswer: "así" },
      { n: 7, correctAnswer: "antes" },
    ],
    distractors: ["por", "entre", "harías"],
  },
  {
    id: "cloze-social-organization-7",
    themeId: "social-organization",
    title: "Foro: ¿Deberían las empresas pagar por prácticas no remuneradas?",
    level: "medium",
    bodyEs:
      "Publicado por usuario Practicante_2024:\n\n" +
      "Llevo dos meses haciendo prácticas sin cobrar nada, y aunque {{1}} aprendiendo mucho, empiezo a preguntarme si esto {{2}} justo. Trabajo las mismas horas que mis compañeros contratados.\n\n" +
      "Respuesta de usuario RRHH_Ana:\n\n" +
      "Entiendo tu frustración, pero muchas empresas {{3}} pueden permitirse pagar prácticas, especialmente las pequeñas. Aun así, coincido en que debería {{4}} algún tipo de compensación mínima.\n\n" +
      "Respuesta de usuario Practicante_2024:\n\n" +
      "El problema es que esto favorece a quienes {{5}} permitirse trabajar gratis, mientras que otros ni siquiera pueden aceptar la oportunidad {{6}} necesitan un sueldo para vivir.\n\n" +
      "Respuesta de usuario Legal_Marcos:\n\n" +
      "Totalmente de acuerdo. En mi opinión, {{7}} debería existir una ley que regule esto claramente en todos los sectores.",
    blanks: [
      { n: 1, correctAnswer: "estoy" },
      { n: 2, correctAnswer: "sea" },
      { n: 3, correctAnswer: "no" },
      { n: 4, correctAnswer: "haber" },
      { n: 5, correctAnswer: "pueden" },
      { n: 6, correctAnswer: "porque" },
      { n: 7, correctAnswer: "ya" },
    ],
    distractors: ["soy", "es", "puedan"],
  },
  {
    id: "cloze-social-organization-8",
    themeId: "social-organization",
    title: "Postal desde una asamblea vecinal",
    level: "easy",
    bodyEs:
      "¡Hola, tía!\n\n" +
      "Te escribo desde la asamblea vecinal, {{1}} llevamos ya dos horas debatiendo sobre el nuevo parque infantil. Nunca había visto {{2}} gente tan apasionada discutiendo sobre columpios y toboganes.\n\n" +
      "Un vecino propuso {{3}} el parque tuviera zonas accesibles para niños con discapacidad, y {{4}} idea gustó tanto que la aprobamos casi por unanimidad.\n\n" +
      "Al final entendí algo importante: la democracia de verdad {{5}} empieza en estas reuniones pequeñas, no solo en las grandes elecciones. Me siento orgullosa {{6}} vivir en un barrio donde la gente todavía se organiza así.\n\n" +
      "¡Te contaré {{7}} sale todo cuando empiece la construcción!\n\n" +
      "Un beso,\nInés",
    blanks: [
      { n: 1, correctAnswer: "donde" },
      { n: 2, correctAnswer: "tanta" },
      { n: 3, correctAnswer: "que" },
      { n: 4, correctAnswer: "la" },
      { n: 5, correctAnswer: "se" },
      { n: 6, correctAnswer: "de" },
      { n: 7, correctAnswer: "cómo" },
    ],
    distractors: ["tanto", "esa", "cual"],
  },
  {
    id: "cloze-social-organization-9",
    themeId: "social-organization",
    title: "Reseña: Documental sobre el movimiento sindical",
    level: "hard",
    bodyEs:
      "\"Puños en alto\" repasa la historia del movimiento sindical en el país a través de testimonios de trabajadores que {{1}} vivido, en primera persona, las huelgas más importantes de las últimas cinco décadas.\n\n" +
      "Lo más valioso del documental es que no {{2}} idealiza el pasado ni presenta el presente como una época de derrotas. Al contrario, muestra cómo las luchas laborales {{3}} transformado con el tiempo, adaptándose a un mercado de trabajo cada vez más precario.\n\n" +
      "Uno de los momentos más potentes ocurre cuando una antigua sindicalista, ya jubilada, explica que jamás {{4}} imaginado, de joven, que algún día {{5}} contarles esta historia a sus nietos entre lágrimas.\n\n" +
      "Si algo se le puede reprochar al documental es su duración: con casi tres horas, {{6}} tramos se vuelven repetitivos. Aun así, es una obra necesaria {{7}} cualquiera que quiera entender de dónde vienen muchos derechos laborales actuales.",
    blanks: [
      { n: 1, correctAnswer: "han" },
      { n: 2, correctAnswer: "lo" },
      { n: 3, correctAnswer: "se han" },
      { n: 4, correctAnswer: "habría" },
      { n: 5, correctAnswer: "estaría" },
      { n: 6, correctAnswer: "algunos" },
      { n: 7, correctAnswer: "para" },
    ],
    distractors: ["habían", "estaba", "algunas"],
  },
  {
    id: "cloze-sharing-planet-4",
    themeId: "sharing-planet",
    title: "Diario: Adoptar un tramo de playa",
    level: "easy",
    bodyEs:
      "Querido diario:\n\n" +
      "Hoy mi familia y yo {{1}} apuntamos a un programa que permite \"adoptar\" un tramo de playa para mantenerlo limpio durante todo el año. Nos {{2}} tocado un tramo pequeño cerca del faro.\n\n" +
      "Cada mes tendremos que venir {{3}} recoger basura y anotar qué tipo de residuos encontramos, para {{4}} los científicos puedan estudiar la contaminación de la zona.\n\n" +
      "Hoy encontramos, sobre todo, colillas y tapones de plástico. Mi hermano pequeño se {{5}} muy serio con su tarea, como si {{6}} el guardián oficial de la playa.\n\n" +
      "Me gusta pensar que, aunque {{7}} sea un gesto pequeño, entre muchas familias como la nuestra podemos marcar una diferencia real.",
    blanks: [
      { n: 1, correctAnswer: "nos" },
      { n: 2, correctAnswer: "ha" },
      { n: 3, correctAnswer: "a" },
      { n: 4, correctAnswer: "que" },
      { n: 5, correctAnswer: "tomó" },
      { n: 6, correctAnswer: "fuera" },
      { n: 7, correctAnswer: "esto" },
    ],
    distractors: ["se", "había", "tomé"],
  },
  {
    id: "cloze-sharing-planet-5",
    themeId: "sharing-planet",
    title: "Correo: Propuesta de huerto comunitario en el instituto",
    level: "medium",
    bodyEs:
      "Estimada directora Ibáñez:\n\n" +
      "Le escribo en nombre del club de ciencias para proponer que {{1}} un pequeño huerto comunitario en el patio trasero del instituto, actualmente sin uso.\n\n" +
      "Creemos que este proyecto {{2}} beneficios tanto educativos como ambientales: los estudiantes de biología podrían aprender sobre cultivo sostenible, {{3}} el huerto también reduciría la huella de carbono de la cafetería al producir parte de sus propios vegetales.\n\n" +
      "Somos conscientes de que {{4}} necesario un presupuesto inicial para herramientas y semillas, {{5}} varios estudiantes ya se han ofrecido a buscar patrocinadores locales.\n\n" +
      "Le agradeceríamos mucho que {{6}} considerar esta propuesta en la próxima reunión del consejo escolar. Quedamos a su disposición {{7}} cualquier duda adicional.\n\n" +
      "Atentamente,\nEl club de ciencias",
    blanks: [
      { n: 1, correctAnswer: "se cree" },
      { n: 2, correctAnswer: "traería" },
      { n: 3, correctAnswer: "mientras que" },
      { n: 4, correctAnswer: "será" },
      { n: 5, correctAnswer: "pero" },
      { n: 6, correctAnswer: "pudiera" },
      { n: 7, correctAnswer: "para" },
    ],
    distractors: ["se creará", "traerá", "sino"],
  },
  {
    id: "cloze-sharing-planet-6",
    themeId: "sharing-planet",
    title: "Entrevista a un guardabosques sobre los incendios forestales",
    level: "hard",
    bodyEs:
      "— Ricardo, llevas veinte años como guardabosques. ¿{{1}} han cambiado los incendios en ese tiempo?\n\n" +
      "— Muchísimo. Antes teníamos una temporada de incendios bien definida; ahora el fuego puede aparecer casi en cualquier época, {{2}} las sequías se han vuelto mucho más frecuentes.\n\n" +
      "— ¿Cuál dirías que es la causa principal hoy en día?\n\n" +
      "— La mayoría {{3}} provocados por negligencia humana, no por causas naturales. Basta una colilla mal apagada para que {{4}} arder cientos de hectáreas.\n\n" +
      "— ¿Qué es lo que más le preocupa del futuro?\n\n" +
      "— Que, si las temperaturas siguen subiendo, dentro de pocos años {{5}} tengamos los recursos suficientes para controlar incendios de esta magnitud.\n\n" +
      "— ¿Qué mensaje le daría a la gente que visita estos bosques?\n\n" +
      "— Que actúen como si cada chispa {{6}} pudiera provocar un desastre, porque, lamentablemente, cada vez {{7}} más cierto.",
    blanks: [
      { n: 1, correctAnswer: "Cómo" },
      { n: 2, correctAnswer: "porque" },
      { n: 3, correctAnswer: "son" },
      { n: 4, correctAnswer: "empiecen" },
      { n: 5, correctAnswer: "no" },
      { n: 6, correctAnswer: "les" },
      { n: 7, correctAnswer: "es" },
    ],
    distractors: ["Cuánto", "pero", "eran"],
  },
  {
    id: "cloze-sharing-planet-7",
    themeId: "sharing-planet",
    title: "Guía: Cómo reducir el desperdicio de comida en casa",
    level: "easy",
    bodyEs:
      "Cada año, millones de toneladas de comida se tiran a la basura {{1}} necesidad. Sigue estos consejos sencillos para reducir el desperdicio en tu propia cocina.\n\n" +
      "Primero, planifica tus comidas antes {{2}} ir al supermercado: así evitarás comprar cosas que después {{3}} quedarán olvidadas en la nevera.\n\n" +
      "Segundo, aprende a usar las sobras de forma creativa. Un arroz del día anterior {{4}} convertirse fácilmente en una tortilla o una sopa.\n\n" +
      "Tercero, no te fíes solo de la fecha de caducidad: muchos alimentos siguen siendo seguros {{5}} comer un tiempo después, si {{6}} han conservado correctamente.\n\n" +
      "Por último, congela lo que no vayas a consumir pronto. Un simple congelador bien organizado puede {{7}} muchísima comida cada mes.",
    blanks: [
      { n: 1, correctAnswer: "sin" },
      { n: 2, correctAnswer: "de" },
      { n: 3, correctAnswer: "te" },
      { n: 4, correctAnswer: "puede" },
      { n: 5, correctAnswer: "para" },
      { n: 6, correctAnswer: "se" },
      { n: 7, correctAnswer: "salvar" },
    ],
    distractors: ["con", "a", "le"],
  },
  {
    id: "cloze-sharing-planet-8",
    themeId: "sharing-planet",
    title: "Publicación: El día que vi un tiburón ballena",
    level: "medium",
    bodyEs:
      "¡No me lo puedo creer todavía! Hoy, buceando en la costa, {{1}} apareció de la nada un tiburón ballena de casi ocho metros. 🦈\n\n" +
      "Al principio {{2}} un miedo enorme, aunque el guía nos había explicado que estos animales {{3}} totalmente inofensivos para los humanos, ya que solo se alimentan de plancton.\n\n" +
      "Nadar {{4}} lado de un animal tan gigantesco y tan tranquilo fue una de las experiencias más impresionantes de mi vida. Es una pena que esta especie {{5}} en peligro de extinción por la pesca ilegal y la contaminación de los océanos.\n\n" +
      "Espero que las nuevas leyes de protección marina {{6}} suficientes para que las próximas generaciones también {{7}} disfrutar de encuentros como este.",
    blanks: [
      { n: 1, correctAnswer: "se" },
      { n: 2, correctAnswer: "sentí" },
      { n: 3, correctAnswer: "son" },
      { n: 4, correctAnswer: "al" },
      { n: 5, correctAnswer: "esté" },
      { n: 6, correctAnswer: "sean" },
      { n: 7, correctAnswer: "puedan" },
    ],
    distractors: ["nos", "estuve", "están"],
  },
  {
    id: "cloze-sharing-planet-9",
    themeId: "sharing-planet",
    title: "Informe: La paradoja del turismo de naturaleza",
    level: "hard",
    bodyEs:
      "Un nuevo informe advierte que el propio éxito del ecoturismo podría estar {{1}} contra los ecosistemas que pretende proteger, en lo que los investigadores llaman \"la paradoja del turismo de naturaleza\".\n\n" +
      "Según el estudio, cuantas más personas visitan una reserva natural para \"conectar con la naturaleza\", {{2}} presión sufre esa misma naturaleza: más senderos, más tráfico, más residuos. En algunos parques nacionales, el número de visitantes {{3}} multiplicado por diez en apenas quince años.\n\n" +
      "\"No decimos que la gente {{4}} de visitar estos lugares\", aclara uno de los autores del informe, \"sino que es urgente que {{5}} límites claros y sistemas de reserva previa, como ya hacen algunos países\".\n\n" +
      "El informe recomienda también que una parte de los ingresos del turismo {{6}} directamente a la conservación del propio ecosistema, algo que actualmente ocurre en {{7}} de la mitad de los destinos analizados.",
    blanks: [
      { n: 1, correctAnswer: "actuando" },
      { n: 2, correctAnswer: "mayor" },
      { n: 3, correctAnswer: "se ha" },
      { n: 4, correctAnswer: "deje" },
      { n: 5, correctAnswer: "existan" },
      { n: 6, correctAnswer: "se destine" },
      { n: 7, correctAnswer: "menos" },
    ],
    distractors: ["actuado", "mejor", "había"],
  },
];

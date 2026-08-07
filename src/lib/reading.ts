/// File: src/lib/reading.ts
//
// Paper 1 style reading comprehension: 20 passages per IB theme (100
// total, 500 questions), spanning nearly every official IB Spanish B text
// type (blog post, diary entry, magazine article, interview, formal
// email/letter, opinion column/essay, advertisement, forum post,
// instructional guide, official report, speech, postcard, review, social
// media post, newspaper article), with repeats reused across fresh topics
// once the type list is exhausted. Recognizing text-type conventions is
// itself an assessed skill, not just understanding the content. Each
// passage has 5 questions mixing true/false-with-justification (the real
// IB Paper 1 format), multiple choice, and short answer. All content is
// original, written to mirror the style/rigor of past IB papers — not copied from
// any real exam. See components/ReadingModule.tsx.

import { ReadingPassage } from "./types";

export const READING_PASSAGES: ReadingPassage[] = [
  {
    id: "reading-identities",
    themeId: "identities",
    title: "Mi vida bilingüe",
    textType: "Blog post",
    level: "medium",
    bodyEs:
      "Me llamo Sofía y tengo dieciséis años. Vivo en Miami, pero mis padres son de Colombia, así que crecí hablando dos idiomas: español en casa e inglés en el colegio. Al principio, cambiar de idioma todo el día era agotador, pero ahora es parte natural de mi identidad.\n\n" +
      "Cuando tenía diez años, no quería hablar español fuera de casa porque tenía miedo de que mis compañeros se rieran de mi acento. Sin embargo, con el tiempo entendí que mi bilingüismo es una ventaja, no un problema. Puedo comunicarme con mi familia en Colombia, entender películas en dos idiomas y ayudar a mis amigos con la tarea de español.\n\n" +
      "El año pasado, participé en un intercambio escolar y viajé a Bogotá durante tres semanas. Fue increíble sentirme completamente en casa, aunque nunca había vivido allí. Hablar dos idiomas no significa tener dos identidades separadas, sino una identidad más rica y flexible.\n\n" +
      "Hoy en día, animo a otros jóvenes bilingües a sentirse orgullosos de su idioma. Nuestra manera de hablar cuenta nuestra historia.",
    questions: [
      {
        id: "identities-q1",
        type: "true-false",
        prompt: "Sofía siempre se sintió orgullosa de hablar español.",
        correctAnswer: "false",
        justification: "\"no quería hablar español fuera de casa porque tenía miedo de que mis compañeros se rieran de mi acento\"",
      },
      {
        id: "identities-q2",
        type: "true-false",
        prompt: "Sofía viajó a Colombia el año pasado.",
        correctAnswer: "true",
        justification: "\"El año pasado, participé en un intercambio escolar y viajé a Bogotá\"",
      },
      {
        id: "identities-q3",
        type: "mcq",
        prompt: "¿Por qué no quería hablar español Sofía de niña?",
        options: ["Tenía miedo de que se rieran de su acento", "No le gustaba el idioma", "Sus padres se lo prohibían", "No lo hablaba bien"],
        correctAnswer: "Tenía miedo de que se rieran de su acento",
      },
      {
        id: "identities-q4",
        type: "mcq",
        prompt: "¿Qué tipo de texto es este?",
        options: ["Un blog personal", "Una carta formal", "Un artículo científico", "Un anuncio publicitario"],
        correctAnswer: "Un blog personal",
      },
      {
        id: "identities-q5",
        type: "short",
        prompt: "¿Cuánto tiempo duró el intercambio escolar de Sofía?",
        correctAnswer: "tres semanas",
      },
    ],
    vocabulary: [
      { es: "dieciséis", en: "sixteen" },
      { es: "hablando", en: "speaking" },
      { es: "principio", en: "beginning" },
      { es: "identidad", en: "identity" },
      { es: "compañeros", en: "classmates / colleagues" },
      { es: "intercambio", en: "exchange" },
      { es: "increíble", en: "incredible" },
      { es: "completamente", en: "completely" },
    ],
  },
  {
    id: "reading-experiences",
    themeId: "experiences",
    title: "Un viaje inolvidable",
    textType: "Diary entry",
    level: "easy",
    bodyEs:
      "Querido diario:\n\n" +
      "Hoy terminó nuestro viaje a Perú y todavía no puedo creer todo lo que vivimos. Llegamos a Cusco hace diez días, cansados pero emocionados. El primer día, casi no podíamos respirar bien por la altura, pero poco a poco nos acostumbramos.\n\n" +
      "Lo más increíble fue la caminata hasta Machu Picchu. Caminamos durante dos días por senderos rodeados de montañas verdes. Cuando por fin llegamos y vimos las ruinas entre la niebla, se me llenaron los ojos de lágrimas. Nunca había visto algo tan impresionante.\n\n" +
      "También conocimos a una familia local que nos invitó a comer en su casa. Nos prepararon un plato tradicional con papas y maíz, y nos contaron historias sobre sus tradiciones incas. Fue un momento muy especial porque no lo esperábamos.\n\n" +
      "Mañana volvemos a casa, y aunque estoy feliz de ver a mis amigos otra vez, sé que voy a extrañar este lugar. Este viaje me enseñó que las mejores experiencias muchas veces son las que no planeamos.",
    questions: [
      {
        id: "experiences-q1",
        type: "true-false",
        prompt: "El viaje fue a México.",
        correctAnswer: "false",
        justification: "\"nuestro viaje a Perú\"",
      },
      {
        id: "experiences-q2",
        type: "true-false",
        prompt: "La familia local invitó a los viajeros a comer en su casa.",
        correctAnswer: "true",
        justification: "\"una familia local que nos invitó a comer en su casa\"",
      },
      {
        id: "experiences-q3",
        type: "mcq",
        prompt: "¿Cuánto tiempo caminaron hasta Machu Picchu?",
        options: ["Dos días", "Diez días", "Una semana", "Un día"],
        correctAnswer: "Dos días",
      },
      {
        id: "experiences-q4",
        type: "mcq",
        prompt: "¿Qué tipo de texto es este?",
        options: ["Una entrada de diario", "Un correo formal", "Un informe científico", "Un anuncio"],
        correctAnswer: "Una entrada de diario",
      },
      {
        id: "experiences-q5",
        type: "short",
        prompt: "¿Qué ingredientes tenía el plato tradicional que les prepararon?",
        correctAnswer: "papas y maíz",
      },
    ],
    vocabulary: [
      { es: "querido", en: "dear / beloved" },
      { es: "todavía", en: "still / yet" },
      { es: "llegamos", en: "we arrived" },
      { es: "increíble", en: "incredible" },
      { es: "familia", en: "family" },
      { es: "historias", en: "stories" },
      { es: "tradiciones", en: "traditions" },
      { es: "momento", en: "moment" },
    ],
  },
  {
    id: "reading-human-ingenuity",
    themeId: "human-ingenuity",
    title: "Robots que ayudan en casa",
    textType: "Magazine article",
    level: "hard",
    bodyEs:
      "En los últimos años, la robótica doméstica ha avanzado a una velocidad sorprendente. Ya no hablamos solo de aspiradoras robóticas, sino de asistentes capaces de realizar tareas más complejas, como doblar la ropa o preparar comidas sencillas.\n\n" +
      "Según los expertos, esta tecnología puede ser especialmente útil para personas mayores o con movilidad reducida, ya que les permite vivir de forma más independiente. Por ejemplo, en Japón, varios hogares de ancianos ya utilizan robots sociales que conversan con los residentes y les recuerdan tomar sus medicamentos.\n\n" +
      "Sin embargo, no todo el mundo está convencido. Algunos críticos argumentan que depender demasiado de la tecnología podría aumentar el aislamiento social, ya que las personas interactuarían menos con otros seres humanos. Además, estos dispositivos todavía son muy caros para la mayoría de las familias.\n\n" +
      "A pesar de las dudas, los ingenieros continúan mejorando estos robots cada año. Muchos creen que, en una década, tener un asistente robótico en casa será tan normal como tener un teléfono inteligente hoy en día.",
    questions: [
      {
        id: "human-ingenuity-q1",
        type: "true-false",
        prompt: "Los robots sociales en Japón recuerdan a los residentes tomar sus medicamentos.",
        correctAnswer: "true",
        justification: "\"utilizan robots sociales que conversan con los residentes y les recuerdan tomar sus medicamentos\"",
      },
      {
        id: "human-ingenuity-q2",
        type: "true-false",
        prompt: "Todos los expertos están de acuerdo en que estos robots son beneficiosos.",
        correctAnswer: "false",
        justification: "\"no todo el mundo está convencido\"",
      },
      {
        id: "human-ingenuity-q3",
        type: "mcq",
        prompt: "Según el texto, ¿cuál es una desventaja posible de los robots domésticos?",
        options: ["Pueden aumentar el aislamiento social", "Son demasiado lentos", "No pueden limpiar", "Solo funcionan en Japón"],
        correctAnswer: "Pueden aumentar el aislamiento social",
      },
      {
        id: "human-ingenuity-q4",
        type: "mcq",
        prompt: "¿Qué tipo de texto es este?",
        options: ["Un artículo de revista", "Una entrada de diario", "Una receta de cocina", "Un mensaje de texto"],
        correctAnswer: "Un artículo de revista",
      },
      {
        id: "human-ingenuity-q5",
        type: "short",
        prompt: "Según los ingenieros, ¿cuándo será normal tener un asistente robótico en casa?",
        correctAnswer: "en una década",
      },
    ],
    vocabulary: [
      { es: "robótica", en: "robotics" },
      { es: "hablamos", en: "we speak / talk" },
      { es: "preparar", en: "to prepare" },
      { es: "expertos", en: "experts" },
      { es: "tecnología", en: "technology" },
      { es: "especialmente", en: "especially" },
      { es: "personas", en: "people" },
      { es: "demasiado", en: "too much" },
    ],
  },
  {
    id: "reading-social-organization",
    themeId: "social-organization",
    title: "Solicitud de voluntariado",
    textType: "Formal email",
    level: "medium",
    bodyEs:
      "Estimado señor Ramírez:\n\n" +
      "Le escribo para expresar mi interés en el programa de voluntariado que su organización ofrece para jóvenes de mi colegio. Vi el anuncio en el tablón de la biblioteca y me pareció una oportunidad excelente para ayudar a mi comunidad.\n\n" +
      "Actualmente estudio el Bachillerato Internacional y, aunque tengo un horario exigente, puedo dedicar los sábados por la mañana al proyecto. Tengo experiencia dando clases particulares de matemáticas a estudiantes más jóvenes y creo que estas habilidades podrían ser útiles para el programa de apoyo escolar que mencionan en su página web.\n\n" +
      "Además, me interesa mucho el trabajo comunitario porque considero que es fundamental que los jóvenes participemos activamente en la sociedad, en lugar de esperar a ser adultos para contribuir.\n\n" +
      "Quedo a la espera de más información sobre el proceso de selección y los siguientes pasos.\n\n" +
      "Atentamente,\nDaniela Torres",
    questions: [
      {
        id: "social-organization-q1",
        type: "true-false",
        prompt: "Daniela puede ayudar solo los domingos.",
        correctAnswer: "false",
        justification: "\"puedo dedicar los sábados por la mañana al proyecto\"",
      },
      {
        id: "social-organization-q2",
        type: "true-false",
        prompt: "Daniela tiene experiencia dando clases de matemáticas.",
        correctAnswer: "true",
        justification: "\"Tengo experiencia dando clases particulares de matemáticas\"",
      },
      {
        id: "social-organization-q3",
        type: "mcq",
        prompt: "¿Dónde vio Daniela el anuncio del programa?",
        options: ["En el tablón de la biblioteca", "En redes sociales", "En un periódico", "En la radio"],
        correctAnswer: "En el tablón de la biblioteca",
      },
      {
        id: "social-organization-q4",
        type: "mcq",
        prompt: "¿Qué tipo de texto es este?",
        options: ["Un correo formal", "Una entrada de diario", "Un artículo de opinión", "Una receta"],
        correctAnswer: "Un correo formal",
      },
      {
        id: "social-organization-q5",
        type: "short",
        prompt: "¿Qué estudia Daniela actualmente?",
        correctAnswer: "el Bachillerato Internacional",
      },
    ],
    vocabulary: [
      { es: "voluntariado", en: "volunteering" },
      { es: "organización", en: "organization" },
      { es: "actualmente", en: "currently" },
      { es: "internacional", en: "international" },
      { es: "experiencia", en: "experience" },
      { es: "estudiantes", en: "students" },
      { es: "comunitario", en: "community (adj.)" },
      { es: "información", en: "information" },
    ],
  },
  {
    id: "reading-sharing-planet",
    themeId: "sharing-planet",
    title: "¿Consumidores responsables?",
    textType: "Opinion column",
    level: "hard",
    bodyEs:
      "Cada vez más jóvenes afirman preocuparse por el medio ambiente, pero, ¿realmente cambiamos nuestros hábitos de consumo? Según un estudio reciente, el setenta por ciento de los adolescentes dice que le importa el cambio climático, aunque solo una minoría reduce activamente su consumo de plástico o de ropa de moda rápida.\n\n" +
      "Es fácil compartir un artículo sobre la contaminación en redes sociales, pero es más difícil renunciar a comprar ropa nueva cada mes o llevar siempre una botella reutilizable. El verdadero cambio requiere pequeñas acciones diarias, no solo buenas intenciones.\n\n" +
      "Por supuesto, no toda la responsabilidad recae en los individuos. Las grandes empresas producen la mayor parte de la contaminación mundial, y los gobiernos deben regular sus prácticas. Sin embargo, esto no significa que las decisiones personales no importen.\n\n" +
      "Si cada persona joven comprara solo lo necesario, reciclara correctamente y apoyara a marcas responsables, el impacto colectivo sería enorme. La pregunta no es si nos importa el planeta, sino si estamos dispuestos a actuar en consecuencia.",
    questions: [
      {
        id: "sharing-planet-q1",
        type: "true-false",
        prompt: "Según el estudio, la mayoría de los adolescentes reduce activamente su consumo de plástico.",
        correctAnswer: "false",
        justification: "\"solo una minoría reduce activamente su consumo de plástico\"",
      },
      {
        id: "sharing-planet-q2",
        type: "true-false",
        prompt: "El autor cree que solo los gobiernos son responsables de la contaminación.",
        correctAnswer: "false",
        justification: "\"esto no significa que las decisiones personales no importen\"",
      },
      {
        id: "sharing-planet-q3",
        type: "mcq",
        prompt: "Según el texto, ¿qué porcentaje de adolescentes dice que le importa el cambio climático?",
        options: ["70%", "30%", "50%", "90%"],
        correctAnswer: "70%",
      },
      {
        id: "sharing-planet-q4",
        type: "mcq",
        prompt: "¿Qué tipo de texto es este?",
        options: ["Un artículo de opinión", "Una carta formal", "Una entrada de diario", "Un correo electrónico"],
        correctAnswer: "Un artículo de opinión",
      },
      {
        id: "sharing-planet-q5",
        type: "short",
        prompt: "Según el texto, ¿quiénes producen la mayor parte de la contaminación mundial?",
        correctAnswer: "las grandes empresas",
      },
    ],
    vocabulary: [
      { es: "realmente", en: "really" },
      { es: "reciente", en: "recent" },
      { es: "adolescentes", en: "teenagers" },
      { es: "climático", en: "climate (adj.)" },
      { es: "compartir", en: "to share" },
      { es: "contaminación", en: "pollution" },
      { es: "decisiones", en: "decisions" },
      { es: "personales", en: "personal" },
    ],
  },

  // --- Second passage per theme, a different text type each time ---
  {
    id: "reading-identities-2",
    themeId: "identities",
    title: "Entrevista: Creciendo entre dos culturas",
    textType: "Magazine interview",
    level: "medium",
    bodyEs:
      "Esta semana entrevistamos a Marcos, un estudiante de dieciocho años que nació en España pero cuya familia es de Marruecos.\n\n" +
      "Periodista: Marcos, ¿cómo describirías tu identidad?\n" +
      "Marcos: Es complicado. En casa, hablamos árabe y seguimos muchas tradiciones marroquíes. En el colegio, hablo español y vivo como cualquier adolescente español. A veces siento que tengo dos vidas diferentes.\n\n" +
      "Periodista: ¿Ha sido difícil encontrar un equilibrio?\n" +
      "Marcos: Sí, especialmente de niño. Quería encajar con mis amigos, así que a veces evitaba hablar de mi cultura marroquí. Ahora que soy mayor, entiendo que no tengo que elegir entre las dos culturas.\n\n" +
      "Periodista: ¿Qué consejo darías a otros jóvenes en tu situación?\n" +
      "Marcos: Les diría que su identidad no tiene que ser simple. Puedes amar dos países, dos idiomas y dos formas de vida al mismo tiempo. Eso te hace más rico, no más confundido.\n\n" +
      "Periodista: Gracias por compartir tu historia, Marcos.\n" +
      "Marcos: Gracias a vosotros por escucharla.",
    questions: [
      {
        id: "identities-2-q1",
        type: "true-false",
        prompt: "Marcos nació en Marruecos.",
        correctAnswer: "false",
        justification: "\"un estudiante de dieciocho años que nació en España\"",
      },
      {
        id: "identities-2-q2",
        type: "true-false",
        prompt: "De niño, Marcos evitaba hablar de su cultura marroquí.",
        correctAnswer: "true",
        justification: "\"a veces evitaba hablar de mi cultura marroquí\"",
      },
      {
        id: "identities-2-q3",
        type: "mcq",
        prompt: "¿Qué idioma hablan en casa de Marcos?",
        options: ["Árabe", "Español", "Francés", "Inglés"],
        correctAnswer: "Árabe",
      },
      {
        id: "identities-2-q4",
        type: "mcq",
        prompt: "¿Qué tipo de texto es este?",
        options: ["Una entrevista", "Una entrada de diario", "Un correo formal", "Una receta"],
        correctAnswer: "Una entrevista",
      },
      {
        id: "identities-2-q5",
        type: "short",
        prompt: "Según Marcos, ¿qué edad tiene?",
        correctAnswer: "dieciocho años",
      },
    ],
    vocabulary: [
      { es: "estudiante", en: "student" },
      { es: "dieciocho", en: "eighteen" },
      { es: "identidad", en: "identity" },
      { es: "tradiciones", en: "traditions" },
      { es: "cualquier", en: "any" },
      { es: "adolescente", en: "teenager" },
      { es: "diferentes", en: "different" },
      { es: "especialmente", en: "especially" },
    ],
  },
  {
    id: "reading-experiences-2",
    themeId: "experiences",
    title: "¡Vive la aventura de tu vida!",
    textType: "Advertisement",
    level: "easy",
    bodyEs:
      "¿Buscas unas vacaciones diferentes? ¡Aventura Total te ofrece la experiencia perfecta para jóvenes viajeros!\n\n" +
      "Nuestro programa de dos semanas te lleva a través de la selva amazónica, donde dormirás en cabañas ecológicas, navegarás en canoa por el río y aprenderás sobre las plantas medicinales con guías indígenas locales.\n\n" +
      "No necesitas experiencia previa: solo ganas de explorar y respetar la naturaleza. El precio incluye alojamiento, todas las comidas y transporte desde la ciudad más cercana.\n\n" +
      "\"Este viaje cambió completamente mi forma de ver el mundo\", dice Laura, de diecisiete años, que participó el verano pasado. \"Conocí a gente increíble y aprendí a valorar cosas que antes ni notaba.\"\n\n" +
      "Las plazas son limitadas, así que reserva tu lugar antes de que termine el mes. ¡No dejes pasar esta oportunidad única!",
    questions: [
      {
        id: "experiences-2-q1",
        type: "true-false",
        prompt: "El programa dura un mes.",
        correctAnswer: "false",
        justification: "\"Nuestro programa de dos semanas\"",
      },
      {
        id: "experiences-2-q2",
        type: "true-false",
        prompt: "Se necesita experiencia previa para participar.",
        correctAnswer: "false",
        justification: "\"No necesitas experiencia previa\"",
      },
      {
        id: "experiences-2-q3",
        type: "mcq",
        prompt: "¿Qué incluye el precio del viaje?",
        options: ["Alojamiento, comidas y transporte", "Solo el alojamiento", "Solo las comidas", "Nada, todo se paga aparte"],
        correctAnswer: "Alojamiento, comidas y transporte",
      },
      {
        id: "experiences-2-q4",
        type: "mcq",
        prompt: "¿Qué tipo de texto es este?",
        options: ["Un anuncio publicitario", "Una entrada de diario", "Una entrevista", "Un informe"],
        correctAnswer: "Un anuncio publicitario",
      },
      {
        id: "experiences-2-q5",
        type: "short",
        prompt: "¿Cuántos años tiene Laura, la estudiante que participó el verano pasado?",
        correctAnswer: "diecisiete años",
      },
    ],
    vocabulary: [
      { es: "diferentes", en: "different" },
      { es: "experiencia", en: "experience" },
      { es: "jóvenes", en: "young people" },
      { es: "programa", en: "program" },
      { es: "necesitas", en: "you need" },
      { es: "completamente", en: "completely" },
      { es: "diecisiete", en: "seventeen" },
      { es: "increíble", en: "incredible" },
    ],
  },
  {
    id: "reading-human-ingenuity-2",
    themeId: "human-ingenuity",
    title: "Foro: ¿Deberíamos preocuparnos por la inteligencia artificial?",
    textType: "Online forum post",
    level: "hard",
    bodyEs:
      "Publicado por usuario Carlos_92:\n\n" +
      "Últimamente pienso mucho en cómo la inteligencia artificial está cambiando todo, desde cómo estudiamos hasta cómo trabajamos. Por un lado, me parece increíble que un programa pueda ayudarme a resolver problemas de matemáticas en segundos. Por otro lado, me preocupa que muchos trabajos vayan a desaparecer en el futuro.\n\n" +
      "Respuesta de usuario Elena_R:\n\n" +
      "Entiendo tu preocupación, pero creo que la IA también va a crear nuevos tipos de trabajo que ni siquiera imaginamos todavía. Es como cuando apareció internet: mucha gente tenía miedo, pero al final se crearon millones de empleos nuevos.\n\n" +
      "Respuesta de usuario Carlos_92:\n\n" +
      "Puede ser, pero creo que es importante que aprendamos a usar estas herramientas de forma responsable desde ahora, en vez de esperar a que sea demasiado tarde. En mi colegio, todavía no nos enseñan nada sobre esto.\n\n" +
      "Respuesta de usuario Miguelito_2005:\n\n" +
      "Totalmente de acuerdo. Deberían incluir clases sobre inteligencia artificial en el currículo escolar. Es el futuro, nos guste o no.",
    questions: [
      {
        id: "human-ingenuity-2-q1",
        type: "true-false",
        prompt: "Carlos_92 piensa que la IA solo tiene aspectos negativos.",
        correctAnswer: "false",
        justification: "\"me parece increíble que un programa pueda ayudarme a resolver problemas de matemáticas en segundos\"",
      },
      {
        id: "human-ingenuity-2-q2",
        type: "true-false",
        prompt: "Elena_R compara la IA con la llegada de internet.",
        correctAnswer: "true",
        justification: "\"Es como cuando apareció internet\"",
      },
      {
        id: "human-ingenuity-2-q3",
        type: "mcq",
        prompt: "Según Carlos_92, ¿qué falta en su colegio?",
        options: ["Clases sobre inteligencia artificial", "Clases de matemáticas", "Clases de idiomas", "Actividades deportivas"],
        correctAnswer: "Clases sobre inteligencia artificial",
      },
      {
        id: "human-ingenuity-2-q4",
        type: "mcq",
        prompt: "¿Qué tipo de texto es este?",
        options: ["Una publicación de foro", "Una carta formal", "Un anuncio", "Una receta"],
        correctAnswer: "Una publicación de foro",
      },
      {
        id: "human-ingenuity-2-q5",
        type: "short",
        prompt: "¿Quién está de acuerdo con la idea de incluir clases sobre inteligencia artificial en el currículo?",
        correctAnswer: "Miguelito_2005",
      },
    ],
    vocabulary: [
      { es: "publicado", en: "posted / published" },
      { es: "inteligencia", en: "intelligence" },
      { es: "artificial", en: "artificial" },
      { es: "increíble", en: "incredible" },
      { es: "problemas", en: "problems" },
      { es: "respuesta", en: "answer / reply" },
      { es: "importante", en: "important" },
      { es: "totalmente", en: "totally" },
    ],
  },
  {
    id: "reading-social-organization-2",
    themeId: "social-organization",
    title: "Cómo organizar una campaña de voluntariado en tu colegio",
    textType: "Instructional guide",
    level: "medium",
    bodyEs:
      "¿Quieres organizar una campaña de voluntariado en tu colegio pero no sabes por dónde empezar? Sigue estos pasos:\n\n" +
      "Primero, elige una causa que te importe de verdad, como ayudar a personas mayores, proteger el medio ambiente o apoyar a familias con pocos recursos. Es más fácil motivar a otros cuando tú mismo estás motivado.\n\n" +
      "Segundo, habla con un profesor o con la dirección del colegio para pedir permiso y apoyo. Ellos pueden ayudarte con el espacio, los materiales o incluso con contactos útiles.\n\n" +
      "Tercero, forma un pequeño equipo de compañeros interesados. No intentes hacerlo todo solo: repartir las tareas hace que el proyecto sea más manejable y divertido.\n\n" +
      "Cuarto, promociona tu campaña con carteles, anuncios en redes sociales o presentaciones en clase. Cuanta más gente sepa sobre el proyecto, más fácil será conseguir participantes.\n\n" +
      "Por último, no olvides agradecer a todos los que participaron al final de la campaña. Reconocer su esfuerzo anima a la gente a colaborar en el futuro.",
    questions: [
      {
        id: "social-organization-2-q1",
        type: "true-false",
        prompt: "El texto recomienda hacer todo el proyecto solo, sin ayuda.",
        correctAnswer: "false",
        justification: "\"No intentes hacerlo todo solo\"",
      },
      {
        id: "social-organization-2-q2",
        type: "true-false",
        prompt: "El primer paso es hablar con la dirección del colegio.",
        correctAnswer: "false",
        justification: "\"Primero, elige una causa que te importe de verdad\"",
      },
      {
        id: "social-organization-2-q3",
        type: "mcq",
        prompt: "Según el texto, ¿por qué es importante formar un equipo?",
        options: ["Repartir las tareas hace que el proyecto sea más manejable", "Es obligatorio por ley", "Los profesores lo exigen", "Es más barato"],
        correctAnswer: "Repartir las tareas hace que el proyecto sea más manejable",
      },
      {
        id: "social-organization-2-q4",
        type: "mcq",
        prompt: "¿Qué tipo de texto es este?",
        options: ["Una guía de instrucciones", "Una entrada de diario", "Un poema", "Una entrevista"],
        correctAnswer: "Una guía de instrucciones",
      },
      {
        id: "social-organization-2-q5",
        type: "short",
        prompt: "Según el texto, ¿qué se debe hacer al final de la campaña?",
        correctAnswer: "agradecer a todos los que participaron",
      },
    ],
    vocabulary: [
      { es: "organizar", en: "to organize" },
      { es: "voluntariado", en: "volunteering" },
      { es: "personas", en: "people" },
      { es: "materiales", en: "materials" },
      { es: "compañeros", en: "classmates / colleagues" },
      { es: "conseguir", en: "to get / achieve" },
      { es: "participantes", en: "participants" },
      { es: "colaborar", en: "to collaborate" },
    ],
  },
  {
    id: "reading-sharing-planet-2",
    themeId: "sharing-planet",
    title: "Informe: El impacto del turismo en las islas Galápagos",
    textType: "Report",
    level: "hard",
    bodyEs:
      "Las islas Galápagos, conocidas por su biodiversidad única, reciben cada año a más de doscientos mil turistas. Aunque el turismo genera importantes ingresos económicos para Ecuador, también representa una amenaza seria para el frágil ecosistema de las islas.\n\n" +
      "Según datos recientes, el aumento del turismo ha provocado la introducción de especies invasoras que compiten con la fauna local, como las tortugas gigantes y las iguanas marinas. Además, el crecimiento de la población humana en las islas ha aumentado la producción de basura y el consumo de agua.\n\n" +
      "Las autoridades ecuatorianas han implementado varias medidas para reducir este impacto, como limitar el número de visitantes por sitio y exigir que todos los turistas viajen acompañados de un guía certificado. Sin embargo, algunos expertos consideran que estas medidas no son suficientes.\n\n" +
      "Para proteger las Galápagos a largo plazo, muchos científicos recomiendan un modelo de turismo más sostenible, que limite aún más el número de visitantes y priorice la educación ambiental sobre el entretenimiento.",
    questions: [
      {
        id: "sharing-planet-2-q1",
        type: "true-false",
        prompt: "Las Galápagos reciben más de doscientos mil turistas al año.",
        correctAnswer: "true",
        justification: "\"reciben cada año a más de doscientos mil turistas\"",
      },
      {
        id: "sharing-planet-2-q2",
        type: "true-false",
        prompt: "Todos los expertos piensan que las medidas actuales son suficientes.",
        correctAnswer: "false",
        justification: "\"algunos expertos consideran que estas medidas no son suficientes\"",
      },
      {
        id: "sharing-planet-2-q3",
        type: "mcq",
        prompt: "Según el texto, ¿qué problema causan las especies invasoras?",
        options: ["Compiten con la fauna local", "Mejoran el ecosistema", "No tienen ningún efecto", "Ayudan a las tortugas"],
        correctAnswer: "Compiten con la fauna local",
      },
      {
        id: "sharing-planet-2-q4",
        type: "mcq",
        prompt: "¿Qué tipo de texto es este?",
        options: ["Un informe", "Una entrada de diario", "Un anuncio", "Una carta personal"],
        correctAnswer: "Un informe",
      },
      {
        id: "sharing-planet-2-q5",
        type: "short",
        prompt: "¿Qué deben hacer los turistas según las nuevas medidas?",
        correctAnswer: "viajar acompañados de un guía certificado",
      },
    ],
    vocabulary: [
      { es: "doscientos", en: "two hundred" },
      { es: "importantes", en: "important (pl.)" },
      { es: "representa", en: "represents" },
      { es: "aumento", en: "increase" },
      { es: "aumentado", en: "increased" },
      { es: "consumo", en: "consumption" },
      { es: "expertos", en: "experts" },
      { es: "educación", en: "education" },
    ],
  },

  // --- Third passage per theme, filling out the remaining official IB text types ---
  {
    id: "reading-identities-3",
    themeId: "identities",
    title: "Discurso: La riqueza de nuestras diferencias",
    textType: "Speech",
    level: "hard",
    bodyEs:
      "Buenos días a todos.\n\n" +
      "Hoy quiero hablarles de algo que creo que a veces olvidamos: la riqueza de nuestras diferencias. En este colegio, tenemos estudiantes de más de veinte países distintos. Hablamos idiomas diferentes, celebramos festividades diferentes y, sin embargo, compartimos las mismas aulas todos los días.\n\n" +
      "Cuando llegué a este colegio hace tres años, me sentía fuera de lugar. Mi acento era distinto, mi comida era distinta, incluso mi forma de saludar era distinta. Al principio, intenté esconder estas diferencias para encajar mejor. Sin embargo, con el tiempo entendí algo importante: nuestras diferencias no nos separan, nos enriquecen.\n\n" +
      "Cada uno de nosotros trae algo único a esta comunidad. Cuando compartimos nuestras tradiciones, nuestra comida y nuestras historias, todos aprendemos algo nuevo. La verdadera fortaleza de este colegio no está en que seamos todos iguales, sino en que somos completamente diferentes y, aun así, formamos una sola comunidad.\n\n" +
      "Por eso, hoy les pido que no tengan miedo de mostrar quiénes son realmente. Nuestras diferencias son, sin duda, nuestra mayor fortaleza.\n\n" +
      "Muchas gracias.",
    questions: [
      {
        id: "identities-3-q1",
        type: "true-false",
        prompt: "La estudiante se sintió cómoda inmediatamente al llegar al colegio.",
        correctAnswer: "false",
        justification: "\"me sentía fuera de lugar\"",
      },
      {
        id: "identities-3-q2",
        type: "true-false",
        prompt: "Según la estudiante, las diferencias enriquecen a la comunidad.",
        correctAnswer: "true",
        justification: "\"nuestras diferencias no nos separan, nos enriquecen\"",
      },
      {
        id: "identities-3-q3",
        type: "mcq",
        prompt: "¿Cuántos países distintos hay representados en el colegio, según el discurso?",
        options: ["Más de veinte", "Diez", "Cinco", "Cien"],
        correctAnswer: "Más de veinte",
      },
      {
        id: "identities-3-q4",
        type: "mcq",
        prompt: "¿Qué tipo de texto es este?",
        options: ["Un discurso", "Una entrada de diario", "Un correo formal", "Un anuncio"],
        correctAnswer: "Un discurso",
      },
      {
        id: "identities-3-q5",
        type: "short",
        prompt: "¿Qué intentó hacer la estudiante al principio para encajar mejor?",
        correctAnswer: "esconder estas diferencias",
      },
    ],
    vocabulary: [
      { es: "estudiantes", en: "students" },
      { es: "distintos", en: "different" },
      { es: "diferentes", en: "different" },
      { es: "principio", en: "beginning" },
      { es: "importante", en: "important" },
      { es: "comunidad", en: "community" },
      { es: "tradiciones", en: "traditions" },
      { es: "completamente", en: "completely" },
    ],
  },
  {
    id: "reading-experiences-3",
    themeId: "experiences",
    title: "Postal desde la Patagonia",
    textType: "Postcard",
    level: "easy",
    bodyEs:
      "¡Hola familia!\n\n" +
      "Os escribo desde un pequeño pueblo en la Patagonia argentina. Llevamos cuatro días aquí y el paisaje es simplemente espectacular: montañas nevadas, lagos de color turquesa y un silencio que no había experimentado nunca en la ciudad.\n\n" +
      "Ayer hicimos una caminata de seis horas hasta un glaciar. Hacía mucho frío, pero valió totalmente la pena. Cuando llegamos, nos sentamos a comer un sándwich mientras mirábamos cómo se desprendían trozos de hielo del glaciar. Fue un momento mágico.\n\n" +
      "Mañana nos vamos a otro pueblo más al sur. Todavía no tengo buena conexión a internet, así que no podré escribiros mucho durante los próximos días.\n\n" +
      "Os echo de menos a todos. ¡Nos vemos pronto!\n\n" +
      "Con cariño,\nMarta",
    questions: [
      {
        id: "experiences-3-q1",
        type: "true-false",
        prompt: "Marta lleva un mes en la Patagonia.",
        correctAnswer: "false",
        justification: "\"Llevamos cuatro días aquí\"",
      },
      {
        id: "experiences-3-q2",
        type: "true-false",
        prompt: "Marta hizo una caminata hasta un glaciar.",
        correctAnswer: "true",
        justification: "\"hicimos una caminata de seis horas hasta un glaciar\"",
      },
      {
        id: "experiences-3-q3",
        type: "mcq",
        prompt: "¿Cuánto tiempo duró la caminata hasta el glaciar?",
        options: ["Seis horas", "Un día", "Dos horas", "Cuatro días"],
        correctAnswer: "Seis horas",
      },
      {
        id: "experiences-3-q4",
        type: "mcq",
        prompt: "¿Qué tipo de texto es este?",
        options: ["Una postal", "Un correo formal", "Un artículo", "Una entrevista"],
        correctAnswer: "Una postal",
      },
      {
        id: "experiences-3-q5",
        type: "short",
        prompt: "¿Por qué no podrá Marta escribir mucho en los próximos días?",
        correctAnswer: "no tiene buena conexión a internet",
      },
    ],
    vocabulary: [
      { es: "familia", en: "family" },
      { es: "escribo", en: "I write" },
      { es: "pequeño", en: "small" },
      { es: "simplemente", en: "simply" },
      { es: "totalmente", en: "totally" },
      { es: "llegamos", en: "we arrived" },
      { es: "momento", en: "moment" },
      { es: "internet", en: "internet" },
    ],
  },
  {
    id: "reading-human-ingenuity-3",
    themeId: "human-ingenuity",
    title: "Reseña: La nueva aplicación EcoRuta",
    textType: "Review",
    level: "medium",
    bodyEs:
      "EcoRuta es una aplicación nueva que promete ayudarte a reducir tu huella de carbono calculando la opción de transporte más ecológica para cada trayecto. La probé durante dos semanas y estos son mis resultados.\n\n" +
      "Lo primero que me gustó fue lo fácil que es de usar: solo tienes que introducir tu punto de partida y tu destino, y la aplicación te muestra varias opciones (bicicleta, transporte público, caminar o coche compartido) junto con el tiempo estimado y la cantidad de CO2 que ahorrarías.\n\n" +
      "Sin embargo, la aplicación todavía tiene algunos problemas. En dos ocasiones, me recomendó una ruta en bicicleta que en realidad no era segura, ya que pasaba por una carretera muy transitada sin carril bici. Además, la aplicación consume bastante batería del teléfono.\n\n" +
      "En general, creo que EcoRuta es una herramienta útil para quienes quieren tomar decisiones más sostenibles, pero todavía necesita mejorar la precisión de sus rutas. Le doy tres estrellas de cinco.",
    questions: [
      {
        id: "human-ingenuity-3-q1",
        type: "true-false",
        prompt: "El autor probó la aplicación durante dos meses.",
        correctAnswer: "false",
        justification: "\"La probé durante dos semanas\"",
      },
      {
        id: "human-ingenuity-3-q2",
        type: "true-false",
        prompt: "Según el autor, la aplicación siempre recomienda rutas seguras en bicicleta.",
        correctAnswer: "false",
        justification: "\"me recomendó una ruta en bicicleta que en realidad no era segura\"",
      },
      {
        id: "human-ingenuity-3-q3",
        type: "mcq",
        prompt: "¿Cuántas estrellas de cinco le da el autor a la aplicación?",
        options: ["Tres", "Cinco", "Una", "Cuatro"],
        correctAnswer: "Tres",
      },
      {
        id: "human-ingenuity-3-q4",
        type: "mcq",
        prompt: "¿Qué tipo de texto es este?",
        options: ["Una reseña", "Una carta formal", "Una entrada de diario", "Un discurso"],
        correctAnswer: "Una reseña",
      },
      {
        id: "human-ingenuity-3-q5",
        type: "short",
        prompt: "Según el texto, ¿qué otro problema tiene la aplicación además de las rutas inseguras?",
        correctAnswer: "consume bastante batería",
      },
    ],
    vocabulary: [
      { es: "aplicación", en: "application / app" },
      { es: "reducir", en: "to reduce" },
      { es: "resultados", en: "results" },
      { es: "problemas", en: "problems" },
      { es: "realidad", en: "reality" },
      { es: "bastante", en: "quite / enough" },
      { es: "teléfono", en: "phone" },
      { es: "decisiones", en: "decisions" },
    ],
  },
  {
    id: "reading-social-organization-3",
    themeId: "social-organization",
    title: "Publicación: ¡Únete al club de debate!",
    textType: "Social media post",
    level: "easy",
    bodyEs:
      "🎤 CLUB DE DEBATE — ¡Nuevos miembros bienvenidos! 🎤\n\n" +
      "¿Te gusta discutir sobre temas actuales? ¿Quieres mejorar tu capacidad de hablar en público? ¡El club de debate del colegio busca nuevos miembros!\n\n" +
      "Nos reunimos todos los miércoles a las 15:30 en el aula 204. No necesitas experiencia previa, solo ganas de participar y aprender.\n\n" +
      "Este trimestre vamos a debatir temas como el uso de las redes sociales, el cambio climático y la educación a distancia. También participaremos en una competición interescolar en marzo.\n\n" +
      "👉 Comenta \"YO VOY\" si quieres apuntarte, o escríbenos un mensaje privado para más información.\n\n" +
      "#ClubDeDebate #ExpresaTuOpinión\n\n" +
      "💬 Comentarios (3)\n" +
      "Laura_G: ¡Yo voy! Llevo tiempo queriendo unirme 😊\n" +
      "Pedro_M: ¿Hay que pagar algo para participar?\n" +
      "Club_Debate_Oficial: @Pedro_M ¡No, la participación es totalmente gratuita!",
    questions: [
      {
        id: "social-organization-3-q1",
        type: "true-false",
        prompt: "Es necesario tener experiencia previa para unirse al club.",
        correctAnswer: "false",
        justification: "\"No necesitas experiencia previa\"",
      },
      {
        id: "social-organization-3-q2",
        type: "true-false",
        prompt: "El club se reúne los lunes.",
        correctAnswer: "false",
        justification: "\"Nos reunimos todos los miércoles\"",
      },
      {
        id: "social-organization-3-q3",
        type: "mcq",
        prompt: "¿Cuándo se reúne el club de debate?",
        options: ["Los miércoles a las 15:30", "Los viernes a las 10:00", "Los lunes a las 15:30", "Los sábados"],
        correctAnswer: "Los miércoles a las 15:30",
      },
      {
        id: "social-organization-3-q4",
        type: "mcq",
        prompt: "¿Qué tipo de texto es este?",
        options: ["Una publicación en redes sociales", "Una carta formal", "Un discurso", "Una reseña"],
        correctAnswer: "Una publicación en redes sociales",
      },
      {
        id: "social-organization-3-q5",
        type: "short",
        prompt: "¿En qué aula se reúne el club de debate?",
        correctAnswer: "aula 204",
      },
    ],
    vocabulary: [
      { es: "necesitas", en: "you need" },
      { es: "experiencia", en: "experience" },
      { es: "aprender", en: "to learn" },
      { es: "trimestre", en: "term / trimester" },
      { es: "climático", en: "climate (adj.)" },
      { es: "educación", en: "education" },
      { es: "información", en: "information" },
      { es: "totalmente", en: "totally" },
    ],
  },
  {
    id: "reading-sharing-planet-3",
    themeId: "sharing-planet",
    title: "Estudiantes plantan mil árboles en su ciudad",
    textType: "Newspaper article",
    level: "hard",
    bodyEs:
      "Un grupo de más de doscientos estudiantes de institutos de la región participó el pasado sábado en una jornada de reforestación urbana, plantando más de mil árboles en distintos parques de la ciudad.\n\n" +
      "La iniciativa, organizada por una coalición de clubes ambientales escolares, buscaba concienciar a la población sobre la importancia de los espacios verdes urbanos, especialmente después de las olas de calor registradas el verano pasado.\n\n" +
      "\"Queríamos hacer algo concreto, no solo hablar del problema\", explicó Ana Belén Ruiz, de diecisiete años, una de las organizadoras del evento. \"Cada árbol que plantamos hoy ayudará a reducir la temperatura de la ciudad en el futuro.\"\n\n" +
      "Según los expertos, los árboles urbanos pueden reducir la temperatura local hasta en dos grados durante los meses de verano, además de mejorar la calidad del aire y ofrecer sombra a los peatones.\n\n" +
      "El ayuntamiento ha anunciado que apoyará futuras iniciativas similares y ha prometido destinar una parte del presupuesto municipal a la creación de nuevos espacios verdes en los próximos dos años.",
    questions: [
      {
        id: "sharing-planet-3-q1",
        type: "true-false",
        prompt: "Participaron menos de cien estudiantes en la jornada.",
        correctAnswer: "false",
        justification: "\"más de doscientos estudiantes\"",
      },
      {
        id: "sharing-planet-3-q2",
        type: "true-false",
        prompt: "El ayuntamiento ha prometido apoyar futuras iniciativas similares.",
        correctAnswer: "true",
        justification: "\"El ayuntamiento ha anunciado que apoyará futuras iniciativas similares\"",
      },
      {
        id: "sharing-planet-3-q3",
        type: "mcq",
        prompt: "Según los expertos, ¿cuánto pueden reducir la temperatura los árboles urbanos?",
        options: ["Hasta dos grados", "Diez grados", "Medio grado", "No tienen ningún efecto"],
        correctAnswer: "Hasta dos grados",
      },
      {
        id: "sharing-planet-3-q4",
        type: "mcq",
        prompt: "¿Qué tipo de texto es este?",
        options: ["Un artículo periodístico", "Una postal", "Una publicación en redes sociales", "Un discurso"],
        correctAnswer: "Un artículo periodístico",
      },
      {
        id: "sharing-planet-3-q5",
        type: "short",
        prompt: "¿Cuántos árboles se plantaron durante la jornada?",
        correctAnswer: "más de mil",
      },
    ],
    vocabulary: [
      { es: "doscientos", en: "two hundred" },
      { es: "estudiantes", en: "students" },
      { es: "institutos", en: "secondary schools" },
      { es: "distintos", en: "different" },
      { es: "especialmente", en: "especially" },
      { es: "problema", en: "problem" },
      { es: "diecisiete", en: "seventeen" },
      { es: "ayuntamiento", en: "town hall / city council" },
    ],
  },

  // --- Fourth through tenth items for identities, added by parallel content-drafting pass ---
{
    id: "reading-identities-4",
    themeId: "identities",
    title: "Refugio Verde: retiro de bienestar en la montaña",
    textType: "Advertisement",
    level: "easy",
    bodyEs:
      "¿Buscas cambiar de ritmo de vida? Refugio Verde es un centro de retiro situado en las montañas de Asturias, a solo dos horas de Oviedo. Ofrecemos programas de una semana pensados para personas que quieren desconectar del estrés diario y adoptar hábitos más saludables.\n\n" +
      "Durante tu estancia, participarás en clases de yoga al amanecer, talleres de cocina vegetariana y largas caminatas por el bosque. No hay televisión ni conexión wifi en las habitaciones, porque creemos que la desconexión digital es tan importante como el ejercicio físico.\n\n" +
      "Nuestro equipo incluye a nutricionistas y terapeutas que te ayudarán a diseñar un plan personalizado según tus objetivos: perder peso, dormir mejor o simplemente recuperar la calma. El precio del programa de siete días es de 450 euros, con alojamiento y todas las comidas incluidas.\n\n" +
      "Más de dos mil personas han visitado Refugio Verde desde su apertura en 2019, y el 90% afirma que repetiría la experiencia. Reserva tu plaza antes de fin de mes y recibirás un descuento del quince por ciento.\n\n" +
      "¡Te esperamos en Refugio Verde, donde el bienestar empieza contigo!",
    questions: [
      { id: "identities-4-q1", type: "true-false", prompt: "Refugio Verde está a dos horas de Oviedo.", correctAnswer: "true", justification: "\"a solo dos horas de Oviedo\"" },
      { id: "identities-4-q2", type: "true-false", prompt: "Las habitaciones tienen conexión wifi.", correctAnswer: "false", justification: "\"No hay televisión ni conexión wifi en las habitaciones\"" },
      { id: "identities-4-q3", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un anuncio publicitario", "Una entrevista", "Un informe oficial", "Una entrada de blog"], correctAnswer: "Un anuncio publicitario" },
      { id: "identities-4-q4", type: "mcq", prompt: "¿Cuánto cuesta el programa de siete días?", options: ["450 euros", "150 euros", "900 euros", "45 euros"], correctAnswer: "450 euros" },
      { id: "identities-4-q5", type: "short", prompt: "¿Qué porcentaje de visitantes afirma que repetiría la experiencia?", correctAnswer: "el 90%" },
    ],
    vocabulary: [
      { es: "cambiar", en: "to change" },
      { es: "programas", en: "programs" },
      { es: "personas", en: "people" },
      { es: "quieren", en: "they want" },
      { es: "importante", en: "important" },
      { es: "simplemente", en: "simply" },
      { es: "programa", en: "program" },
      { es: "experiencia", en: "experience" },
    ],
  },
  {
    id: "reading-identities-5",
    themeId: "identities",
    title: "Los adolescentes españoles duermen cada vez menos",
    textType: "Newspaper article",
    level: "medium",
    bodyEs:
      "Un nuevo estudio de la Universidad de Valencia revela que los adolescentes españoles duermen, en promedio, seis horas y media por noche, muy por debajo de las ocho o nueve horas recomendadas por los expertos para esta etapa de la vida.\n\n" +
      "La investigación, publicada la semana pasada, encuestó a más de mil doscientos estudiantes de entre catorce y dieciocho años en institutos de toda España. Según los resultados, el uso del móvil antes de dormir es el principal culpable: el 68% de los encuestados reconoce mirar redes sociales en la cama.\n\n" +
      "\"No se trata solo de cantidad de horas, sino de calidad del sueño\", explica la doctora Elena Roig, coautora del estudio. \"Un adolescente que duerme mal tiene más dificultad para concentrarse en clase y es más propenso a sufrir ansiedad.\"\n\n" +
      "El estudio también señala que los fines de semana los jóvenes intentan compensar el sueño perdido durmiendo hasta tarde, una estrategia que, según los especialistas, altera aún más el reloj biológico.\n\n" +
      "Los autores del informe recomiendan a los centros educativos retrasar la hora de entrada a las clases y a las familias establecer horarios sin pantallas al menos una hora antes de acostarse.",
    questions: [
      { id: "identities-5-q1", type: "true-false", prompt: "Los adolescentes duermen entre ocho y nueve horas cada noche.", correctAnswer: "false", justification: "\"duermen, en promedio, seis horas y media por noche\"" },
      { id: "identities-5-q2", type: "true-false", prompt: "Más de mil doscientos estudiantes participaron en la encuesta.", correctAnswer: "true", justification: "\"encuestó a más de mil doscientos estudiantes\"" },
      { id: "identities-5-q3", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un artículo de periódico", "Una postal", "Un correo personal", "Un folleto"], correctAnswer: "Un artículo de periódico" },
      { id: "identities-5-q4", type: "mcq", prompt: "Según el estudio, ¿cuál es el principal culpable de la falta de sueño?", options: ["El uso del móvil antes de dormir", "Los exámenes escolares", "El café", "El ruido en casa"], correctAnswer: "El uso del móvil antes de dormir" },
      { id: "identities-5-q5", type: "short", prompt: "¿Qué recomiendan los autores del informe a los centros educativos?", correctAnswer: "retrasar la hora de entrada a las clases" },
    ],
    vocabulary: [
      { es: "adolescentes", en: "teenagers" },
      { es: "doscientos", en: "two hundred" },
      { es: "estudiantes", en: "students" },
      { es: "dieciocho", en: "eighteen" },
      { es: "institutos", en: "secondary schools" },
      { es: "resultados", en: "results" },
      { es: "adolescente", en: "teenager" },
      { es: "educativos", en: "educational" },
    ],
  },
  {
    id: "reading-identities-6",
    themeId: "identities",
    title: "Entre dos idiomas",
    textType: "Online forum post",
    level: "medium",
    bodyEs:
      "Publicado por Marisol_84 en el foro \"Hablantes de dos mundos\"\n\n" +
      "Hola a todos. Soy nueva en este foro y quería compartir algo que me ha pasado toda la vida. Nací en Texas, pero mis padres son mexicanos y en casa siempre hablamos español. En el colegio, en cambio, todo era en inglés, y durante años sentí que vivía entre dos identidades sin pertenecer del todo a ninguna.\n\n" +
      "Cuando visito a mi familia en Guadalajara, algunos primos me dicen que hablo \"español de gringa\", con acento raro y palabras mezcladas con el inglés. Pero en Texas, mis compañeros de clase a veces se burlaban de mi acento cuando hablaba inglés. Durante mucho tiempo esto me hizo sentir insegura.\n\n" +
      "Ahora, con veintitrés años, pienso de otra manera. Creo que ser bilingüe no significa pertenecer a medias a dos culturas, sino tener acceso completo a ambas. El español y el inglés son igual de míos, y cambiar de uno a otro, lo que llamamos \"code-switching\", es simplemente parte de quién soy.\n\n" +
      "¿Alguien más aquí ha sentido algo parecido? Me encantaría leer vuestras experiencias, sobre todo si crecisteis hablando dos idiomas en casa.",
    questions: [
      { id: "identities-6-q1", type: "true-false", prompt: "Marisol nació en México.", correctAnswer: "false", justification: "\"Nací en Texas\"" },
      { id: "identities-6-q2", type: "true-false", prompt: "De niña, Marisol se sentía insegura por su forma de hablar.", correctAnswer: "true", justification: "\"esto me hizo sentir insegura\"" },
      { id: "identities-6-q3", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una publicación en un foro", "Una carta formal", "Un artículo científico", "Un anuncio"], correctAnswer: "Una publicación en un foro" },
      { id: "identities-6-q4", type: "mcq", prompt: "Según Marisol, ¿qué es el \"code-switching\"?", options: ["Cambiar entre el español y el inglés", "Estudiar un tercer idioma", "Un examen de la escuela", "Un tipo de acento tejano"], correctAnswer: "Cambiar entre el español y el inglés" },
      { id: "identities-6-q5", type: "short", prompt: "¿Cuántos años tiene Marisol ahora?", correctAnswer: "veintitrés" },
    ],
    vocabulary: [
      { es: "publicado", en: "posted / published" },
      { es: "compartir", en: "to share" },
      { es: "hablamos", en: "we speak / talk" },
      { es: "compañeros", en: "classmates / colleagues" },
      { es: "culturas", en: "cultures" },
      { es: "completo", en: "complete / full" },
      { es: "simplemente", en: "simply" },
      { es: "hablando", en: "speaking" },
    ],
  },
  {
    id: "reading-identities-7",
    themeId: "identities",
    title: "Por qué dejé de comer carne",
    textType: "Opinion column",
    level: "hard",
    bodyEs:
      "Hace tres años dejé de comer carne, y todavía hay quien me pregunta, con una mezcla de curiosidad y sospecha, por qué lo hice. La respuesta es sencilla: mis valores cambiaron, y quise que mi manera de comer reflejara lo que pienso sobre el mundo.\n\n" +
      "No pretendo convencer a nadie de que abandone la carne de la noche a la mañana. Lo que sí defiendo es que comer, lejos de ser un acto neutro, es también una declaración de principios. Cada plato que elegimos dice algo sobre nuestra relación con los animales, con el planeta y con nuestra propia salud.\n\n" +
      "Algunos críticos argumentan que el vegetarianismo es una moda pasajera de las grandes ciudades, alejada de la realidad de quienes no pueden elegir qué comer. Entiendo esa crítica, y no la descarto del todo: el privilegio importa, y no todo el mundo tiene el mismo acceso a alternativas. Pero eso no invalida el debate de fondo.\n\n" +
      "Lo importante, creo yo, no es que todos lleguemos a la misma conclusión, sino que nos atrevamos a preguntarnos por qué comemos lo que comemos. Esa pregunta, incómoda para algunos, es en el fondo una pregunta sobre quiénes somos y en qué creemos.",
    questions: [
      { id: "identities-7-q1", type: "true-false", prompt: "El autor dejó de comer carne hace tres años.", correctAnswer: "true", justification: "\"Hace tres años dejé de comer carne\"" },
      { id: "identities-7-q2", type: "true-false", prompt: "El autor quiere obligar a todos a dejar de comer carne inmediatamente.", correctAnswer: "false", justification: "\"No pretendo convencer a nadie de que abandone la carne de la noche a la mañana\"" },
      { id: "identities-7-q3", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una columna de opinión", "Una receta de cocina", "Un correo formal", "Un folleto publicitario"], correctAnswer: "Una columna de opinión" },
      { id: "identities-7-q4", type: "mcq", prompt: "Según el autor, ¿qué representa la comida que elegimos?", options: ["Una declaración de principios", "Solo una necesidad biológica", "Una tradición familiar obligatoria", "Un tema sin importancia"], correctAnswer: "Una declaración de principios" },
      { id: "identities-7-q5", type: "short", prompt: "¿Qué critican algunos sobre el vegetarianismo, según el texto?", correctAnswer: "que es una moda pasajera de las grandes ciudades" },
    ],
    vocabulary: [
      { es: "todavía", en: "still / yet" },
      { es: "respuesta", en: "answer / reply" },
      { es: "planeta", en: "planet" },
      { es: "grandes", en: "big / large (pl.)" },
      { es: "realidad", en: "reality" },
      { es: "quienes", en: "who (plural)" },
      { es: "entiendo", en: "I understand" },
      { es: "importante", en: "important" },
    ],
  },
  {
    id: "reading-identities-8",
    themeId: "identities",
    title: "Informe anual sobre la infancia y las nuevas tecnologías",
    textType: "Official report",
    level: "hard",
    bodyEs:
      "El presente informe, elaborado por el Observatorio Nacional de la Infancia, analiza el uso de dispositivos digitales entre niños y adolescentes de seis a diecisiete años durante el último año escolar.\n\n" +
      "Los datos, recogidos a partir de encuestas realizadas en 340 centros educativos, muestran que el tiempo medio de pantalla ha aumentado un 22% respecto al informe anterior. Los niños de entre seis y nueve años pasan una media de dos horas diarias frente a una pantalla, cifra que se eleva a casi cinco horas entre los adolescentes de quince a diecisiete años.\n\n" +
      "El informe destaca que el uso educativo de la tecnología, como hacer los deberes o investigar para un trabajo escolar, representa solamente el 18% del tiempo total de pantalla; el resto se dedica principalmente a redes sociales, vídeos y videojuegos.\n\n" +
      "Entre las recomendaciones, el Observatorio propone que las familias establezcan acuerdos claros sobre los horarios de uso, que las escuelas incluyan la educación digital en el currículo desde primaria, y que los fabricantes de aplicaciones limiten las notificaciones dirigidas a menores de edad.\n\n" +
      "El informe completo, con datos desglosados por comunidad autónoma, estará disponible en la página web del Observatorio a partir del próximo mes.",
    questions: [
      { id: "identities-8-q1", type: "true-false", prompt: "El tiempo de pantalla ha disminuido respecto al informe anterior.", correctAnswer: "false", justification: "\"el tiempo medio de pantalla ha aumentado un 22%\"" },
      { id: "identities-8-q2", type: "true-false", prompt: "Los adolescentes de quince a diecisiete años pasan casi cinco horas diarias frente a una pantalla.", correctAnswer: "true", justification: "\"cifra que se eleva a casi cinco horas entre los adolescentes de quince a diecisiete años\"" },
      { id: "identities-8-q3", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un informe oficial", "Una carta personal", "Una reseña", "Un poema"], correctAnswer: "Un informe oficial" },
      { id: "identities-8-q4", type: "mcq", prompt: "¿Qué porcentaje del tiempo de pantalla se dedica a fines educativos?", options: ["18%", "50%", "22%", "68%"], correctAnswer: "18%" },
      { id: "identities-8-q5", type: "short", prompt: "¿Cuántos centros educativos participaron en las encuestas?", correctAnswer: "340" },
    ],
    vocabulary: [
      { es: "adolescentes", en: "teenagers" },
      { es: "diecisiete", en: "seventeen" },
      { es: "educativos", en: "educational" },
      { es: "aumentado", en: "increased" },
      { es: "tecnología", en: "technology" },
      { es: "representa", en: "represents" },
      { es: "recomendaciones", en: "recommendations" },
      { es: "educación", en: "education" },
    ],
  },
  // --- Fourth through tenth items for experiences, added by parallel content-drafting pass ---
{
    id: "reading-experiences-4",
    themeId: "experiences",
    title: "Mochileros en los Andes: una aventura inolvidable",
    textType: "Magazine article",
    level: "medium",
    bodyEs:
      "Para muchos jóvenes, recorrer los Andes a pie se ha convertido en el viaje soñado. Cada julio, cientos de mochileros llegan a la pequeña ciudad de Huarán, en Perú, para iniciar una ruta de ocho días que atraviesa valles, ríos y pueblos indígenas antes de llegar a un mirador situado a más de cuatro mil metros de altitud.\n\n" +
      "Marta Gil, una estudiante española de veintitrés años, hizo la ruta el año pasado junto a tres amigas. \"No llevábamos guía ni mapa detallado; solo una brújula y muchas ganas de perdernos un poco\", recuerda entre risas. Según cuenta, lo más difícil no fue el cansancio físico, sino aprender a convivir con la incertidumbre: noches sin cobertura, tormentas repentinas y comidas compartidas con desconocidos que, al final del viaje, se convirtieron en amigos.\n\n" +
      "Los expertos en turismo de aventura recomiendan preparar el cuerpo con al menos un mes de entrenamiento antes de emprender una ruta de este tipo, ya que la altitud puede provocar mareos y falta de aire incluso en personas con buena condición física. También aconsejan llevar ropa impermeable, pues el clima andino cambia varias veces en un mismo día.\n\n" +
      "Para Marta, sin embargo, el verdadero valor del viaje no estuvo en el paisaje, sino en lo que aprendió sobre sí misma. \"Volví a casa siendo una persona más paciente y más agradecida\", afirma.",
    questions: [
      { id: "experiences-4-q1", type: "true-false", prompt: "La ruta descrita dura ocho días.", correctAnswer: "true", justification: "\"una ruta de ocho días\"" },
      { id: "experiences-4-q2", type: "true-false", prompt: "Marta hizo el viaje completamente sola.", correctAnswer: "false", justification: "\"junto a tres amigas\"" },
      { id: "experiences-4-q3", type: "mcq", prompt: "Según los expertos, ¿qué se recomienda antes de hacer la ruta?", options: ["Entrenar el cuerpo durante al menos un mes", "Contratar siempre un guía profesional", "Evitar llevar ropa impermeable", "Viajar únicamente en invierno"], correctAnswer: "Entrenar el cuerpo durante al menos un mes" },
      { id: "experiences-4-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un artículo de revista", "Una entrada de diario", "Una postal", "Un anuncio publicitario"], correctAnswer: "Un artículo de revista" },
      { id: "experiences-4-q5", type: "short", prompt: "¿A qué altitud se encuentra el mirador final de la ruta?", correctAnswer: "más de cuatro mil metros" },
    ],
    vocabulary: [
      { es: "jóvenes", en: "young people" },
      { es: "estudiante", en: "student" },
      { es: "difícil", en: "difficult" },
      { es: "aprender", en: "to learn" },
      { es: "comidas", en: "meals" },
      { es: "expertos", en: "experts" },
      { es: "preparar", en: "to prepare" },
      { es: "personas", en: "people" },
    ],
  },
  {
    id: "reading-experiences-5",
    themeId: "experiences",
    title: "¿Cómo celebráis el Año Nuevo en vuestro país?",
    textType: "Forum post",
    level: "easy",
    bodyEs:
      "Publicado por Nico_84 en el foro \"Culturas del Mundo\"\n\n" +
      "¡Hola a todos! Soy Nico, tengo veintiocho años y vivo en Montevideo, Uruguay. Este año quiero hacer algo diferente para el Año Nuevo y me encantaría conocer cómo lo celebráis en otros países.\n\n" +
      "Aquí, la tradición más curiosa es comer doce uvas, una por cada campanada del reloj a medianoche, mientras pedimos un deseo para cada mes del año siguiente. Muchas familias también queman un muñeco de trapo que representa el año viejo, como símbolo de dejar atrás los problemas. Además, es común salir a la calle con una maleta vacía y dar una vuelta a la manzana corriendo, para asegurar que el próximo año esté lleno de viajes.\n\n" +
      "El año pasado organicé una cena con quince amigos y, sinceramente, fue una de las noches más divertidas de mi vida. Sin embargo, este año mi pareja y yo pensamos viajar a otro país para vivir la fiesta de otra manera.\n\n" +
      "¿Alguien conoce tradiciones parecidas o completamente distintas? Me interesa especialmente saber si en algún lugar se celebra con actividades al aire libre en lugar de cenas familiares. ¡Gracias de antemano por vuestras respuestas!",
    questions: [
      { id: "experiences-5-q1", type: "true-false", prompt: "Nico vive en Uruguay.", correctAnswer: "true", justification: "\"vivo en Montevideo, Uruguay\"" },
      { id: "experiences-5-q2", type: "true-false", prompt: "Nico organizó una cena con treinta amigos el año pasado.", correctAnswer: "false", justification: "\"una cena con quince amigos\"" },
      { id: "experiences-5-q3", type: "mcq", prompt: "¿Qué hacen algunas familias con un muñeco de trapo?", options: ["Lo queman como símbolo de dejar atrás los problemas", "Lo regalan a los vecinos", "Lo guardan durante todo el año", "Lo llevan a la iglesia"], correctAnswer: "Lo queman como símbolo de dejar atrás los problemas" },
      { id: "experiences-5-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una publicación en un foro", "Un informe oficial", "Un discurso", "Una reseña"], correctAnswer: "Una publicación en un foro" },
      { id: "experiences-5-q5", type: "short", prompt: "¿Cuántas uvas se comen por tradición a medianoche?", correctAnswer: "doce" },
    ],
    vocabulary: [
      { es: "publicado", en: "posted / published" },
      { es: "culturas", en: "cultures" },
      { es: "representa", en: "represents" },
      { es: "problemas", en: "problems" },
      { es: "tradiciones", en: "traditions" },
      { es: "completamente", en: "completely" },
      { es: "especialmente", en: "especially" },
      { es: "actividades", en: "activities" },
    ],
  },
  {
    id: "reading-experiences-6",
    themeId: "experiences",
    title: "Solicitud de información sobre la ceremonia de graduación",
    textType: "Formal email",
    level: "medium",
    bodyEs:
      "Asunto: Solicitud de reunión sobre la ceremonia de graduación\n\n" +
      "Estimada directora Robles:\n\n" +
      "Le escribo en representación del consejo estudiantil de último año para solicitar una reunión antes del quince de septiembre, con el fin de organizar los detalles de la ceremonia de graduación de este curso.\n\n" +
      "Como usted sabe, esta ceremonia representa un momento muy importante en la vida de los ciento diez estudiantes que finalizan sus estudios este año. Nos gustaría proponer algunos cambios respecto a ediciones anteriores: en primer lugar, que la ceremonia se celebre al aire libre, en el patio central, en lugar del gimnasio; en segundo lugar, que cada estudiante pueda invitar a un máximo de cuatro familiares, dos más que el año pasado.\n\n" +
      "Asimismo, el consejo estudiantil ha recaudado casi mil doscientos euros mediante actividades solidarias durante el curso, que nos gustaría destinar a la decoración y a un pequeño obsequio conmemorativo para cada graduado.\n\n" +
      "Quedamos a la espera de su respuesta y de una fecha posible para reunirnos. Le agradecemos de antemano su atención y su apoyo constante a las iniciativas estudiantiles.\n\n" +
      "Atentamente,\n\n" +
      "Diego Fuentes\nPresidente del Consejo Estudiantil",
    questions: [
      { id: "experiences-6-q1", type: "true-false", prompt: "La ceremonia de graduación afecta a ciento diez estudiantes.", correctAnswer: "true", justification: "\"ciento diez estudiantes\"" },
      { id: "experiences-6-q2", type: "true-false", prompt: "El consejo estudiantil propone celebrar la ceremonia en el gimnasio.", correctAnswer: "false", justification: "\"en lugar del gimnasio\"" },
      { id: "experiences-6-q3", type: "mcq", prompt: "¿Cuánto dinero ha recaudado el consejo estudiantil?", options: ["Casi mil doscientos euros", "Exactamente dos mil euros", "Quinientos euros", "No ha recaudado dinero"], correctAnswer: "Casi mil doscientos euros" },
      { id: "experiences-6-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un correo electrónico formal", "Una entrada de diario", "Un anuncio publicitario", "Una publicación en redes sociales"], correctAnswer: "Un correo electrónico formal" },
      { id: "experiences-6-q5", type: "short", prompt: "¿Cuántos familiares podrá invitar cada estudiante, según la propuesta?", correctAnswer: "cuatro" },
    ],
    vocabulary: [
      { es: "organizar", en: "to organize" },
      { es: "representa", en: "represents" },
      { es: "importante", en: "important" },
      { es: "estudiantes", en: "students" },
      { es: "estudiante", en: "student" },
      { es: "doscientos", en: "two hundred" },
      { es: "actividades", en: "activities" },
      { es: "atentamente", en: "sincerely (letter closing)" },
    ],
  },
  {
    id: "reading-experiences-7",
    themeId: "experiences",
    title: "Entrevista: \"Emigrar me enseñó a empezar de nuevo\"",
    textType: "Interview",
    level: "hard",
    bodyEs:
      "El mes pasado hablamos con Rosa Delgado, enfermera colombiana que emigró a Canadá hace nueve años, sobre su experiencia como inmigrante y los retos de reconstruir una vida en otro país.\n\n" +
      "Entrevistador: Rosa, ¿por qué decidiste emigrar?\n\n" +
      "Rosa: Decidí irme en dos mil quince, después de terminar mis estudios de enfermería. En Colombia tenía trabajo, pero quería más estabilidad y la posibilidad de ahorrar para el futuro. Una prima que ya vivía en Toronto me animó a intentarlo.\n\n" +
      "Entrevistador: ¿Cuáles fueron las mayores dificultades al llegar?\n\n" +
      "Rosa: Sin duda, el idioma. Aunque había estudiado inglés, no estaba preparada para entender los acentos ni el vocabulario médico especializado. Tardé casi dos años en conseguir que reconocieran mi título y pudiera trabajar como enfermera de nuevo; mientras tanto, trabajé limpiando oficinas.\n\n" +
      "Entrevistador: ¿Qué es lo que más extrañas de Colombia?\n\n" +
      "Rosa: La comida, sin duda, y la manera en que la gente se saluda en la calle, incluso sin conocerse. Aquí todo es más reservado.\n\n" +
      "Entrevistador: ¿Volverías a tomar la misma decisión?\n\n" +
      "Rosa: Sin dudarlo. Fue difícil, pero también me enseñó a empezar de nuevo y a valorar cosas que antes daba por sentado.",
    questions: [
      { id: "experiences-7-q1", type: "true-false", prompt: "Rosa emigró a Canadá en dos mil quince.", correctAnswer: "true", justification: "\"Decidí irme en dos mil quince\"" },
      { id: "experiences-7-q2", type: "true-false", prompt: "Rosa consiguió trabajar como enfermera inmediatamente al llegar a Canadá.", correctAnswer: "false", justification: "\"Tardé casi dos años en conseguir que reconocieran mi título\"" },
      { id: "experiences-7-q3", type: "mcq", prompt: "¿Qué hizo Rosa mientras esperaba que reconocieran su título?", options: ["Trabajó limpiando oficinas", "Volvió a estudiar enfermería", "Trabajó como profesora de inglés", "No trabajó durante ese tiempo"], correctAnswer: "Trabajó limpiando oficinas" },
      { id: "experiences-7-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrevista", "Un folleto", "Una guía de instrucciones", "Una reseña"], correctAnswer: "Una entrevista" },
      { id: "experiences-7-q5", type: "short", prompt: "¿Quién animó a Rosa a emigrar a Canadá?", correctAnswer: "una prima" },
    ],
    vocabulary: [
      { es: "hablamos", en: "we speak / talk" },
      { es: "experiencia", en: "experience" },
      { es: "estudios", en: "studies" },
      { es: "trabajo", en: "work / job" },
      { es: "mayores", en: "elderly / older people" },
      { es: "entender", en: "to understand" },
      { es: "conseguir", en: "to get / achieve" },
      { es: "trabajar", en: "to work" },
    ],
  },
  {
    id: "reading-experiences-8",
    themeId: "experiences",
    title: "Informe: proyecto de historias orales en la residencia de mayores",
    textType: "Report",
    level: "medium",
    bodyEs:
      "Informe sobre el proyecto \"Voces con Historia\", desarrollado entre marzo y junio en la Residencia San Ignacio\n\n" +
      "Resumen: Este informe describe los resultados del proyecto \"Voces con Historia\", una iniciativa que reunió a dieciocho estudiantes de secundaria con veinticinco residentes de la Residencia San Ignacio con el objetivo de recopilar relatos personales sobre sus vidas.\n\n" +
      "Metodología: Durante doce semanas, los estudiantes visitaron la residencia una vez por semana para realizar entrevistas grabadas. Cada estudiante trabajó con uno o dos residentes, documentando historias sobre la infancia, el trabajo, la familia y momentos decisivos de sus vidas. En total se grabaron más de cuarenta horas de testimonios.\n\n" +
      "Resultados: El noventa por ciento de los residentes participantes afirmó sentirse \"escuchado y valorado\" tras el proyecto, según las encuestas realizadas al finalizar. Varios estudiantes señalaron que la experiencia cambió su percepción sobre la vejez y les ayudó a desarrollar habilidades de escucha activa.\n\n" +
      "Conclusiones y recomendaciones: Se recomienda repetir el proyecto el próximo curso escolar y ampliar el número de residentes participantes a cuarenta. Asimismo, se propone publicar una selección de los relatos en un pequeño libro conmemorativo para compartir con las familias.",
    questions: [
      { id: "experiences-8-q1", type: "true-false", prompt: "El proyecto duró doce semanas.", correctAnswer: "true", justification: "\"Durante doce semanas\"" },
      { id: "experiences-8-q2", type: "true-false", prompt: "Menos de la mitad de los residentes se sintió escuchado y valorado tras el proyecto.", correctAnswer: "false", justification: "\"El noventa por ciento de los residentes participantes afirmó sentirse\"" },
      { id: "experiences-8-q3", type: "mcq", prompt: "¿Cuántas horas de testimonios se grabaron en total?", options: ["Más de cuarenta horas", "Menos de diez horas", "Exactamente cien horas", "No se grabó ningún testimonio"], correctAnswer: "Más de cuarenta horas" },
      { id: "experiences-8-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un informe", "Una postal", "Un anuncio publicitario", "Una entrada de diario"], correctAnswer: "Un informe" },
      { id: "experiences-8-q5", type: "short", prompt: "¿Cuántos estudiantes participaron en el proyecto?", correctAnswer: "dieciocho" },
    ],
    vocabulary: [
      { es: "resultados", en: "results" },
      { es: "dieciocho", en: "eighteen" },
      { es: "estudiantes", en: "students" },
      { es: "personales", en: "personal" },
      { es: "estudiante", en: "student" },
      { es: "participantes", en: "participants" },
      { es: "experiencia", en: "experience" },
      { es: "recomendaciones", en: "recommendations" },
    ],
  },
  // --- Fourth through tenth items for human-ingenuity, added by parallel content-drafting pass ---
{
    id: "reading-human-ingenuity-4",
    themeId: "human-ingenuity",
    title: "Correo electrónico: Problema con mi portátil nuevo",
    textType: "Formal email/letter",
    level: "medium",
    bodyEs:
      "Estimados señores de TecnoMundo:\n\n" +
      "Les escribo porque hace tres semanas compré un portátil de su marca, el modelo Aurora 15, en la tienda del centro comercial Plaza Norte. Pagué 850 euros y elegí este ordenador porque la publicidad prometía una batería que duraba doce horas sin necesidad de cargador. Sin embargo, desde el primer día la batería apenas dura tres horas, incluso cuando cierro todos los programas y bajo el brillo de la pantalla.\n\n" +
      "Además, el portátil se calienta mucho después de treinta minutos de uso y el ventilador hace un ruido bastante molesto. Llamé al servicio técnico el lunes pasado y una empleada muy amable me explicó que podía llevar el aparato a la tienda para revisarlo, pero no me garantizó ni una reparación gratuita ni un plazo concreto.\n\n" +
      "Como todavía conservo el recibo y la garantía cubre dos años, les pido que sustituyan el portátil por uno nuevo o que me devuelvan el dinero. Adjunto una copia de la factura y espero su respuesta en los próximos diez días.\n\n" +
      "Atentamente,\nMarta Iglesias Ruiz",
    questions: [
      { id: "human-ingenuity-4-q1", type: "true-false", prompt: "Marta compró el portátil hace tres semanas.", correctAnswer: "true", justification: "\"hace tres semanas compré un portátil\"" },
      { id: "human-ingenuity-4-q2", type: "true-false", prompt: "La batería del portátil dura doce horas, tal como prometía la publicidad.", correctAnswer: "false", justification: "\"desde el primer día la batería apenas dura tres horas\"" },
      { id: "human-ingenuity-4-q3", type: "mcq", prompt: "¿Qué pide Marta a la empresa?", options: ["Que le devuelvan el dinero o le den un portátil nuevo", "Que le regalen un cargador nuevo", "Que le envíen un manual de instrucciones", "Que le hagan un descuento en la próxima compra"], correctAnswer: "Que le devuelvan el dinero o le den un portátil nuevo" },
      { id: "human-ingenuity-4-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un correo electrónico formal", "Una entrada de diario", "Un anuncio publicitario", "Una crítica de producto"], correctAnswer: "Un correo electrónico formal" },
      { id: "human-ingenuity-4-q5", type: "short", prompt: "¿Cuánto pagó Marta por el portátil?", correctAnswer: "850 euros" },
    ],
    vocabulary: [
      { es: "escribo", en: "I write" },
      { es: "semanas", en: "weeks" },
      { es: "necesidad", en: "need" },
      { es: "programas", en: "programs" },
      { es: "pantalla", en: "screen" },
      { es: "bastante", en: "quite / enough" },
      { es: "respuesta", en: "answer / reply" },
      { es: "atentamente", en: "sincerely (letter closing)" },
    ],
  },
  {
    id: "reading-human-ingenuity-5",
    themeId: "human-ingenuity",
    title: "Diario: Una noche en el festival de cortometrajes",
    textType: "Diary entry",
    level: "easy",
    bodyEs:
      "Querido diario:\n\n" +
      "Hoy ha sido un día increíble. Por fin fui al Festival de Cortometrajes de mi ciudad, algo que llevaba esperando desde hace meses. Compré la entrada hace un mes, cuando todavía costaba solo doce euros, porque después subió el precio a dieciocho.\n\n" +
      "Llegué al cine a las seis de la tarde y la sala ya estaba casi llena. Se proyectaron ocho cortometrajes de directores jóvenes, la mayoría estudiantes de cine. Mi favorito se llamaba 'El último tren' y trataba de un maquinista que descubre un pueblo abandonado. Cuando terminó, el público aplaudió durante casi un minuto entero.\n\n" +
      "Después de la proyección, hubo un coloquio con tres de los directores. Uno de ellos, un chico de solo diecinueve años, contó que había grabado toda la película con el teléfono de su hermana porque no tenía dinero para una cámara profesional. Me pareció inspirador escuchar que el talento importa más que el equipo caro.\n\n" +
      "Salí del cine pasadas las diez de la noche, todavía pensando en las historias que había visto. Creo que algún día me gustaría hacer mis propios cortometrajes.\n\n" +
      "Hasta mañana,\nDaniela",
    questions: [
      { id: "human-ingenuity-5-q1", type: "true-false", prompt: "Daniela pagó dieciocho euros por la entrada.", correctAnswer: "false", justification: "\"cuando todavía costaba solo doce euros\"" },
      { id: "human-ingenuity-5-q2", type: "true-false", prompt: "En el festival se proyectaron ocho cortometrajes.", correctAnswer: "true", justification: "\"Se proyectaron ocho cortometrajes de directores jóvenes\"" },
      { id: "human-ingenuity-5-q3", type: "mcq", prompt: "¿Cómo grabó su película el director de diecinueve años?", options: ["Con el teléfono de su hermana", "Con una cámara profesional alquilada", "Con la cámara de la universidad", "No lo grabó él mismo"], correctAnswer: "Con el teléfono de su hermana" },
      { id: "human-ingenuity-5-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrada de diario", "Un correo electrónico formal", "Un folleto publicitario", "Un informe oficial"], correctAnswer: "Una entrada de diario" },
      { id: "human-ingenuity-5-q5", type: "short", prompt: "¿Cómo se titulaba el cortometraje favorito de Daniela?", correctAnswer: "El último tren" },
    ],
    vocabulary: [
      { es: "querido", en: "dear / beloved" },
      { es: "increíble", en: "incredible" },
      { es: "todavía", en: "still / yet" },
      { es: "dieciocho", en: "eighteen" },
      { es: "jóvenes", en: "young people" },
      { es: "estudiantes", en: "students" },
      { es: "teléfono", en: "phone" },
      { es: "historias", en: "stories" },
    ],
  },
  {
    id: "reading-human-ingenuity-6",
    themeId: "human-ingenuity",
    title: "Columna de opinión: ¿Nos está robando la atención las redes sociales?",
    textType: "Opinion essay/column",
    level: "hard",
    bodyEs:
      "En los últimos diez años, el tiempo medio que pasamos mirando la pantalla del móvil se ha triplicado, y gran parte de ese tiempo lo dedicamos a las redes sociales. Según un estudio reciente realizado en varios institutos de la capital, los adolescentes revisan sus perfiles hasta noventa veces al día. La pregunta que deberíamos hacernos no es si las redes sociales son buenas o malas, sino qué estamos perdiendo mientras las usamos.\n\n" +
      "No cabe duda de que estas plataformas han facilitado la comunicación entre personas que viven lejos y han dado voz a colectivos que antes no tenían espacio en los medios tradicionales. Sin embargo, también han fomentado una cultura de comparación constante que afecta a la autoestima de muchos jóvenes.\n\n" +
      "Algunos defienden que la solución está en prohibir el uso del móvil en las aulas, pero esta medida, aunque bienintencionada, no resuelve el problema de fondo: hemos diseñado aplicaciones capaces de captar nuestra atención durante horas, y luego nos sorprende que la gente prefiera un vídeo de treinta segundos a un libro.\n\n" +
      "En mi opinión, la verdadera solución no consiste en eliminar la tecnología, sino en enseñar desde pequeños a usarla con criterio, del mismo modo que enseñamos a cruzar la calle con cuidado.",
    questions: [
      { id: "human-ingenuity-6-q1", type: "true-false", prompt: "Según el estudio, los adolescentes revisan sus perfiles hasta noventa veces al día.", correctAnswer: "true", justification: "\"revisan sus perfiles hasta noventa veces al día\"" },
      { id: "human-ingenuity-6-q2", type: "true-false", prompt: "Según el autor, la mejor solución es eliminar la tecnología por completo.", correctAnswer: "false", justification: "\"la verdadera solución no consiste en eliminar la tecnología\"" },
      { id: "human-ingenuity-6-q3", type: "mcq", prompt: "Según el texto, ¿qué han fomentado las redes sociales entre los jóvenes?", options: ["Una cultura de comparación constante", "Una mayor concentración en los estudios", "Un descenso en el uso del móvil", "Una reducción del tiempo en pantalla"], correctAnswer: "Una cultura de comparación constante" },
      { id: "human-ingenuity-6-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una columna de opinión", "Una entrada de diario", "Una postal", "Un folleto publicitario"], correctAnswer: "Una columna de opinión" },
      { id: "human-ingenuity-6-q5", type: "short", prompt: "Según el texto, ¿dónde se realizó el estudio mencionado?", correctAnswer: "institutos de la capital" },
    ],
    vocabulary: [
      { es: "pantalla", en: "screen" },
      { es: "sociales", en: "social" },
      { es: "reciente", en: "recent" },
      { es: "institutos", en: "secondary schools" },
      { es: "adolescentes", en: "teenagers" },
      { es: "personas", en: "people" },
      { es: "constante", en: "constant" },
      { es: "tecnología", en: "technology" },
    ],
  },
  {
    id: "reading-human-ingenuity-7",
    themeId: "human-ingenuity",
    title: "Anuncio: Bicicletas eléctricas VoltiBici",
    textType: "Advertisement",
    level: "easy",
    bodyEs:
      "¿Cansado de llegar tarde por los atascos? ¡Descubre las nuevas bicicletas eléctricas VoltiBici!\n\n" +
      "Con solo pulsar un botón, nuestras bicicletas te ayudan a pedalear más rápido y sin cansarte. La batería dura hasta cincuenta kilómetros con una sola carga y se recarga completamente en tres horas. Además, pesan solo dieciséis kilos, así que puedes subirlas fácilmente al portal de tu edificio.\n\n" +
      "Durante todo el mes de agosto, si compras una VoltiBici en cualquiera de nuestras tiendas, recibirás un casco y un candado antirrobo totalmente gratis. El precio normal es de novecientos euros, pero con este descuento pagarás solo setecientos cincuenta.\n\n" +
      "Más de dos mil clientes ya han cambiado el coche por la bicicleta eléctrica para ir al trabajo o a la universidad. Todas nuestras bicicletas incluyen, además, una aplicación móvil gratuita que muestra la ruta más rápida y evita las calles con mucho tráfico.\n\n" +
      "Visítanos en nuestra tienda de la calle Mayor, número 45, o llama al 912 345 678 para más información. ¡No dejes que el tráfico controle tu vida!",
    questions: [
      { id: "human-ingenuity-7-q1", type: "true-false", prompt: "La batería de la bicicleta dura hasta cincuenta kilómetros con una sola carga.", correctAnswer: "true", justification: "\"La batería dura hasta cincuenta kilómetros\"" },
      { id: "human-ingenuity-7-q2", type: "true-false", prompt: "La promoción de agosto no incluye ningún regalo.", correctAnswer: "false", justification: "\"recibirás un casco y un candado antirrobo totalmente gratis\"" },
      { id: "human-ingenuity-7-q3", type: "mcq", prompt: "¿Cuánto cuesta la bicicleta durante la promoción de agosto?", options: ["Setecientos cincuenta euros", "Novecientos euros", "Dieciséis euros", "Cincuenta euros"], correctAnswer: "Setecientos cincuenta euros" },
      { id: "human-ingenuity-7-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un anuncio publicitario", "Una entrada de diario", "Un correo electrónico formal", "Una columna de opinión"], correctAnswer: "Un anuncio publicitario" },
      { id: "human-ingenuity-7-q5", type: "short", prompt: "¿Cuántos kilos pesa la bicicleta VoltiBici?", correctAnswer: "dieciséis kilos" },
    ],
    vocabulary: [
      { es: "llegar", en: "to arrive" },
      { es: "completamente", en: "completely" },
      { es: "dieciséis", en: "sixteen" },
      { es: "tiendas", en: "stores" },
      { es: "totalmente", en: "totally" },
      { es: "trabajo", en: "work / job" },
      { es: "aplicación", en: "application / app" },
      { es: "información", en: "information" },
    ],
  },
  {
    id: "reading-human-ingenuity-8",
    themeId: "human-ingenuity",
    title: "Entrevista: Hablamos con una joven inventora",
    textType: "Interview",
    level: "medium",
    bodyEs:
      "El periódico escolar entrevistó esta semana a Sofía Marín, de diecisiete años, que ganó el primer premio en la Feria Nacional de Jóvenes Inventores gracias a un sistema que limpia el agua de lluvia para regar plantas en las escuelas.\n\n" +
      "¿Cómo se te ocurrió la idea?\n\n" +
      "Empezó como un proyecto de clase. Vi que en el patio de mi instituto se desperdiciaba mucha agua de lluvia y pensé que se podía aprovechar para el huerto escolar. Al principio solo era un tubo conectado a un depósito, pero con la ayuda de mi profesor de tecnología lo convertimos en un sistema con un filtro y un sensor que mide cuánta agua necesitan las plantas.\n\n" +
      "¿Cuánto tiempo tardaste en construirlo?\n\n" +
      "Más de seis meses. Tuve que rediseñar el filtro tres veces porque las primeras versiones se atascaban con las hojas.\n\n" +
      "¿Qué planes tienes ahora?\n\n" +
      "Quiero instalar el sistema en otros tres colegios de la región antes de terminar el año. También me han invitado a presentar el proyecto en un congreso de estudiantes en otro país, así que estoy muy emocionada.\n\n" +
      "¿Algún consejo para otros jóvenes que quieran inventar algo?\n\n" +
      "Que no tengan miedo de equivocarse. Casi todo lo que funciona ahora empezó siendo un error.",
    questions: [
      { id: "human-ingenuity-8-q1", type: "true-false", prompt: "Sofía tardó menos de un mes en construir su sistema.", correctAnswer: "false", justification: "\"Más de seis meses\"" },
      { id: "human-ingenuity-8-q2", type: "true-false", prompt: "El sistema de Sofía sirve para regar las plantas de las escuelas.", correctAnswer: "true", justification: "\"limpia el agua de lluvia para regar plantas en las escuelas\"" },
      { id: "human-ingenuity-8-q3", type: "mcq", prompt: "¿Por qué tuvo Sofía que rediseñar el filtro tres veces?", options: ["Porque las primeras versiones se atascaban con las hojas", "Porque el depósito era demasiado pequeño", "Porque el sensor no funcionaba", "Porque el instituto no tenía suficiente agua"], correctAnswer: "Porque las primeras versiones se atascaban con las hojas" },
      { id: "human-ingenuity-8-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrevista", "Un anuncio publicitario", "Una entrada de diario", "Un correo electrónico formal"], correctAnswer: "Una entrevista" },
      { id: "human-ingenuity-8-q5", type: "short", prompt: "¿Cuántos años tiene Sofía Marín?", correctAnswer: "diecisiete años" },
    ],
    vocabulary: [
      { es: "escolar", en: "school (adj.)" },
      { es: "diecisiete", en: "seventeen" },
      { es: "nacional", en: "national" },
      { es: "proyecto", en: "project" },
      { es: "instituto", en: "secondary school" },
      { es: "principio", en: "beginning" },
      { es: "tecnología", en: "technology" },
      { es: "estudiantes", en: "students" },
    ],
  },
  // --- Fourth through tenth items for social-organization, added by parallel content-drafting pass ---
{
    id: "reading-social-organization-4",
    themeId: "social-organization",
    title: "Blog: Mi primer año como profesora voluntaria",
    textType: "Blog post",
    level: "easy",
    bodyEs:
      "Hace un año empecé a trabajar como voluntaria en un centro comunitario cerca de mi casa. Doy clases de lectura y escritura a personas adultas que, por diferentes razones, no terminaron la escuela primaria. Al principio tenía miedo de no saber cómo enseñar, porque nunca había sido profesora.\n\n" +
      "La primera estudiante que tuve se llamaba Rosa. Tenía sesenta y dos años y quería aprender a leer para poder escribir cartas a su nieta, que vive en otro país. Trabajamos juntas dos veces por semana durante ocho meses. Cuando por fin pudo leer un cuento completo sola, las dos lloramos de alegría.\n\n" +
      "Ahora tengo seis estudiantes y he aprendido que la paciencia es más importante que cualquier técnica de enseñanza. Cada persona aprende a su propio ritmo, y mi trabajo no es solo enseñar letras, sino también dar confianza.\n\n" +
      "El centro necesita más voluntarios porque hay una lista de espera de veinte personas. Si tienes un par de horas libres a la semana y quieres cambiar la vida de alguien, te animo a intentarlo. No hace falta tener experiencia previa, solo ganas de ayudar.",
    questions: [
      { id: "social-organization-4-q1", type: "true-false", prompt: "Rosa tenía sesenta y dos años.", correctAnswer: "true", justification: "\"Tenía sesenta y dos años\"" },
      { id: "social-organization-4-q2", type: "true-false", prompt: "La autora ya tenía experiencia previa como profesora antes de ser voluntaria.", correctAnswer: "false", justification: "\"nunca había sido profesora\"" },
      { id: "social-organization-4-q3", type: "mcq", prompt: "¿Por qué quería Rosa aprender a leer?", options: ["Para escribir cartas a su nieta", "Para conseguir un trabajo nuevo", "Para leer el periódico", "Para ayudar a sus hijos con la tarea"], correctAnswer: "Para escribir cartas a su nieta" },
      { id: "social-organization-4-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrada de blog", "Un correo electrónico formal", "Un artículo de periódico", "Una entrevista"], correctAnswer: "Una entrada de blog" },
      { id: "social-organization-4-q5", type: "short", prompt: "¿Cuántos estudiantes tiene la autora ahora?", correctAnswer: "seis estudiantes" },
    ],
    vocabulary: [
      { es: "comunitario", en: "community (adj.)" },
      { es: "diferentes", en: "different" },
      { es: "principio", en: "beginning" },
      { es: "estudiante", en: "student" },
      { es: "estudiantes", en: "students" },
      { es: "importante", en: "important" },
      { es: "voluntarios", en: "volunteers" },
      { es: "experiencia", en: "experience" },
    ],
  },
  {
    id: "reading-social-organization-5",
    themeId: "social-organization",
    title: "Columna de opinión: ¿Es el teletrabajo el futuro?",
    textType: "Opinion essay",
    level: "medium",
    bodyEs:
      "Desde que muchas empresas empezaron a permitir el teletrabajo, el debate no ha parado. Para algunos, trabajar desde casa es la mayor conquista laboral de la última década. Para otros, representa una amenaza para la cultura de equipo y la creatividad que nace del contacto cara a cara.\n\n" +
      "En mi opinión, el teletrabajo trae beneficios innegables. Elimina horas perdidas en el transporte, permite organizar mejor el tiempo familiar y, según varios estudios recientes, aumenta la productividad de muchos empleados. Yo mismo trabajo desde casa tres días a la semana desde hace dos años y he notado que rindo mejor cuando puedo elegir mi propio horario.\n\n" +
      "Sin embargo, no todo es positivo. He observado que los empleados nuevos tardan más en integrarse en el equipo cuando no comparten una oficina con sus compañeros. Además, algunas personas confiesan sentirse más solas y trabajan más horas de las necesarias porque no saben cuándo \"desconectar\".\n\n" +
      "Por eso creo que la solución ideal no es elegir entre una opción u otra, sino encontrar un modelo híbrido: unos días en la oficina para reunirse y colaborar, y otros días en casa para concentrarse. Las empresas que ofrezcan esta flexibilidad serán, sin duda, las más atractivas para los futuros trabajadores.",
    questions: [
      { id: "social-organization-5-q1", type: "true-false", prompt: "El autor trabaja desde casa cinco días a la semana.", correctAnswer: "false", justification: "\"trabajo desde casa tres días a la semana\"" },
      { id: "social-organization-5-q2", type: "true-false", prompt: "Según el autor, los empleados nuevos tardan más en integrarse cuando no comparten una oficina.", correctAnswer: "true", justification: "\"los empleados nuevos tardan más en integrarse en el equipo cuando no comparten una oficina\"" },
      { id: "social-organization-5-q3", type: "mcq", prompt: "¿Qué modelo de trabajo propone el autor como solución ideal?", options: ["Un modelo híbrido", "El teletrabajo total", "Trabajar siempre en la oficina", "Un horario nocturno"], correctAnswer: "Un modelo híbrido" },
      { id: "social-organization-5-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una columna de opinión", "Una entrada de diario", "Un folleto", "Una postal"], correctAnswer: "Una columna de opinión" },
      { id: "social-organization-5-q5", type: "short", prompt: "¿Desde hace cuánto tiempo trabaja el autor desde casa tres días a la semana?", correctAnswer: "dos años" },
    ],
    vocabulary: [
      { es: "empresas", en: "companies" },
      { es: "trabajar", en: "to work" },
      { es: "representa", en: "represents" },
      { es: "organizar", en: "to organize" },
      { es: "estudios", en: "studies" },
      { es: "compañeros", en: "classmates / colleagues" },
      { es: "encontrar", en: "to find" },
      { es: "colaborar", en: "to collaborate" },
    ],
  },
  {
    id: "reading-social-organization-6",
    themeId: "social-organization",
    title: "Entrevista: presidenta de la asociación de vecinos",
    textType: "Interview",
    level: "easy",
    bodyEs:
      "Esta semana hablamos con Marta Delgado, presidenta de la Asociación de Vecinos del barrio de Miraflores desde hace tres años, sobre los cambios que ha vivido la comunidad.\n\n" +
      "¿Qué proyectos ha impulsado la asociación últimamente?\n" +
      "El año pasado organizamos la limpieza del parque central, que estaba bastante abandonado. Conseguimos que el ayuntamiento instalara bancos nuevos y una zona de juegos infantiles. También creamos un huerto comunitario donde cualquier vecino puede cultivar verduras.\n\n" +
      "¿Cómo ha cambiado la participación de los vecinos desde que usted empezó?\n" +
      "Mucho. Al principio solo veníamos ocho o nueve personas a las reuniones. Ahora, gracias a un grupo de mensajería que creamos, a veces llegamos a cuarenta personas en los eventos importantes. La gente se siente más escuchada.\n\n" +
      "¿Cuál es el mayor reto que enfrenta el barrio ahora mismo?\n" +
      "Sin duda, el ruido nocturno de algunos bares nuevos. Hemos recibido muchas quejas de familias con niños pequeños. Estamos negociando con el ayuntamiento para establecer horarios más estrictos.\n\n" +
      "¿Algún mensaje para los vecinos que todavía no participan?\n" +
      "Que se animen. Cada pequeña acción, como recoger la basura de la calle o avisar de un problema, hace que el barrio sea un lugar mejor para todos.",
    questions: [
      { id: "social-organization-6-q1", type: "true-false", prompt: "Marta Delgado es presidenta de la asociación desde hace tres años.", correctAnswer: "true", justification: "\"presidenta de la Asociación de Vecinos del barrio de Miraflores desde hace tres años\"" },
      { id: "social-organization-6-q2", type: "true-false", prompt: "Al principio, a las reuniones asistían cuarenta personas.", correctAnswer: "false", justification: "\"solo veníamos ocho o nueve personas a las reuniones\"" },
      { id: "social-organization-6-q3", type: "mcq", prompt: "¿Cuál es el mayor reto que enfrenta el barrio según Marta?", options: ["El ruido nocturno de algunos bares", "La falta de parques", "El precio de las viviendas", "La contaminación del aire"], correctAnswer: "El ruido nocturno de algunos bares" },
      { id: "social-organization-6-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrevista", "Un anuncio", "Una reseña", "Un informe oficial"], correctAnswer: "Una entrevista" },
      { id: "social-organization-6-q5", type: "short", prompt: "¿Qué crearon los vecinos para que cualquier persona pudiera cultivar verduras?", correctAnswer: "un huerto comunitario" },
    ],
    vocabulary: [
      { es: "hablamos", en: "we speak / talk" },
      { es: "asociación", en: "association" },
      { es: "comunidad", en: "community" },
      { es: "ayuntamiento", en: "town hall / city council" },
      { es: "comunitario", en: "community (adj.)" },
      { es: "cualquier", en: "any" },
      { es: "principio", en: "beginning" },
      { es: "importantes", en: "important (pl.)" },
    ],
  },
  {
    id: "reading-social-organization-7",
    themeId: "social-organization",
    title: "Artículo: El ayuntamiento aprueba nuevas cámaras de vigilancia",
    textType: "Newspaper article",
    level: "hard",
    bodyEs:
      "El pleno municipal aprobó ayer, con dieciocho votos a favor y siete en contra, la instalación de cuarenta y cinco cámaras de vigilancia en las principales plazas y calles comerciales de la ciudad. La medida, que entrará en vigor en octubre, busca reducir los robos menores, que según datos de la policía local aumentaron un catorce por ciento el año pasado.\n\n" +
      "La concejala de Seguridad, Beatriz Osorio, defendió el proyecto asegurando que las cámaras \"no sustituyen el trabajo policial, sino que lo complementan\". Según explicó, las imágenes solo se conservarán durante treinta días y estarán bajo el control de un juez en caso de que se necesiten como prueba en una investigación.\n\n" +
      "Sin embargo, la propuesta no ha convencido a todos. La asociación Ciudadanos por la Privacidad calificó la medida de \"excesiva\" y advirtió de que un aumento de la vigilancia no garantiza necesariamente una reducción real de la delincuencia. Varios comerciantes del centro, en cambio, se mostraron a favor, ya que llevan meses pidiendo mayor seguridad tras una serie de robos en sus tiendas.\n\n" +
      "El proyecto costará alrededor de doscientos mil euros y se financiará con fondos municipales. Las primeras cámaras se instalarán en la Plaza Mayor y en la avenida principal antes de que termine el año.",
    questions: [
      { id: "social-organization-7-q1", type: "true-false", prompt: "El pleno municipal aprobó la instalación de cuarenta y cinco cámaras de vigilancia.", correctAnswer: "true", justification: "\"la instalación de cuarenta y cinco cámaras de vigilancia\"" },
      { id: "social-organization-7-q2", type: "true-false", prompt: "Las imágenes de las cámaras se conservarán durante un año.", correctAnswer: "false", justification: "\"las imágenes solo se conservarán durante treinta días\"" },
      { id: "social-organization-7-q3", type: "mcq", prompt: "¿Quién se opuso a la medida?", options: ["La asociación Ciudadanos por la Privacidad", "La concejala de Seguridad", "Los comerciantes del centro", "La policía local"], correctAnswer: "La asociación Ciudadanos por la Privacidad" },
      { id: "social-organization-7-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un artículo de periódico", "Un folleto", "Una entrada de diario", "Una postal"], correctAnswer: "Un artículo de periódico" },
      { id: "social-organization-7-q5", type: "short", prompt: "¿Cuánto costará el proyecto de las cámaras de vigilancia?", correctAnswer: "doscientos mil euros" },
    ],
    vocabulary: [
      { es: "dieciocho", en: "eighteen" },
      { es: "cuarenta", en: "forty" },
      { es: "reducir", en: "to reduce" },
      { es: "proyecto", en: "project" },
      { es: "trabajo", en: "work / job" },
      { es: "asociación", en: "association" },
      { es: "doscientos", en: "two hundred" },
      { es: "principal", en: "main" },
    ],
  },
  {
    id: "reading-social-organization-8",
    themeId: "social-organization",
    title: "Foro: ¿Se puede mantener una amistad solo por internet?",
    textType: "Forum post",
    level: "medium",
    bodyEs:
      "Publicado por Nico_84 en el foro «Vida y Amistad»\n\n" +
      "Hola a todos. Quería preguntaros algo que llevo pensando desde hace semanas. Hace cuatro años me mudé a otra ciudad por motivos de trabajo y, desde entonces, mi mejor amigo de la infancia y yo solo hablamos por videollamada o por mensajes. Nos vemos en persona quizás una vez al año, cuando voy de visita a mi pueblo.\n\n" +
      "Al principio pensaba que la amistad se iba a debilitar con la distancia, pero la verdad es que seguimos hablando casi todos los días de cosas pequeñas: qué hemos comido, una serie que estamos viendo, un problema en el trabajo. Cuando nos vemos en persona, es como si no hubiera pasado el tiempo.\n\n" +
      "Sin embargo, tengo otras amistades que sí se han perdido completamente al no vivir cerca. Con esas personas, los mensajes se volvieron cada vez más cortos hasta que dejamos de escribirnos.\n\n" +
      "¿Vosotros creéis que una amistad puede mantenerse fuerte solo a través de una pantalla, o pensáis que hace falta el contacto físico de vez en cuando para que dure de verdad? Me encantaría leer vuestras experiencias.",
    questions: [
      { id: "social-organization-8-q1", type: "true-false", prompt: "Nico se mudó de ciudad hace cuatro años.", correctAnswer: "true", justification: "\"Hace cuatro años me mudé a otra ciudad\"" },
      { id: "social-organization-8-q2", type: "true-false", prompt: "Nico ve a su mejor amigo en persona todas las semanas.", correctAnswer: "false", justification: "\"Nos vemos en persona quizás una vez al año\"" },
      { id: "social-organization-8-q3", type: "mcq", prompt: "¿Qué le ha pasado a algunas otras amistades de Nico?", options: ["Se han perdido completamente", "Se han hecho más fuertes", "Se han mudado a su ciudad", "Han empezado a trabajar juntos"], correctAnswer: "Se han perdido completamente" },
      { id: "social-organization-8-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una publicación de un foro", "Un correo electrónico formal", "Un informe oficial", "Un discurso"], correctAnswer: "Una publicación de un foro" },
      { id: "social-organization-8-q5", type: "short", prompt: "¿Con qué frecuencia se ve Nico con su mejor amigo en persona?", correctAnswer: "una vez al año" },
    ],
    vocabulary: [
      { es: "publicado", en: "posted / published" },
      { es: "hablamos", en: "we speak / talk" },
      { es: "principio", en: "beginning" },
      { es: "hablando", en: "speaking" },
      { es: "pequeñas", en: "small (fem. pl.)" },
      { es: "problema", en: "problem" },
      { es: "completamente", en: "completely" },
      { es: "personas", en: "people" },
    ],
  },
  // --- Fourth through tenth items for sharing-planet, added by parallel content-drafting pass ---
{
    id: "reading-sharing-planet-4",
    themeId: "sharing-planet",
    title: "Mi semana sin plástico",
    textType: "Blog post",
    level: "easy",
    bodyEs:
      "Hoy empiezo un reto personal: pasar siete días sin usar plástico de un solo uso. Sé que no será fácil, porque el plástico está en casi todo lo que compro, pero quiero intentarlo y compartir la experiencia con vosotros en este blog.\n\n" +
      "Esta mañana fui al mercado con mis propias bolsas de tela y un frasco de cristal para comprar aceitunas. La vendedora se sorprendió un poco, pero me ayudó sin problema. También decidí llevar mi propia botella de agua reutilizable en vez de comprar botellas de plástico, algo que hacía todos los días sin pensarlo.\n\n" +
      "Lo más difícil ha sido en el supermercado. Casi todas las frutas y verduras vienen envueltas en plástico, incluso las que ya tienen su propia piel, como los plátanos. Al final solo pude comprar lo que estaba a granel.\n\n" +
      "Sé que un solo cambio no va a resolver el problema de la contaminación, pero creo que, si muchas personas hacen pequeños esfuerzos, el impacto conjunto puede ser enorme. Mañana os contaré cómo me fue en el trabajo, donde el café siempre viene en vasos desechables.",
    questions: [
      { id: "sharing-planet-4-q1", type: "true-false", prompt: "La autora llevó sus propias bolsas de tela al mercado.", correctAnswer: "true", justification: "\"fui al mercado con mis propias bolsas de tela\"" },
      { id: "sharing-planet-4-q2", type: "true-false", prompt: "El plástico no es un problema en el supermercado, según la autora.", correctAnswer: "false", justification: "\"Lo más difícil ha sido en el supermercado\"" },
      { id: "sharing-planet-4-q3", type: "mcq", prompt: "¿Qué le sorprendió a la autora en el supermercado?", options: ["Que casi toda la fruta viene envuelta en plástico", "Que no había frutas frescas", "Que los precios habían subido mucho", "Que el supermercado había cerrado"], correctAnswer: "Que casi toda la fruta viene envuelta en plástico" },
      { id: "sharing-planet-4-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrada de blog", "Un informe oficial", "Un artículo de periódico", "Una carta formal"], correctAnswer: "Una entrada de blog" },
      { id: "sharing-planet-4-q5", type: "short", prompt: "¿Cuántos días dura el reto de la autora?", correctAnswer: "siete días" },
    ],
    vocabulary: [
      { es: "compartir", en: "to share" },
      { es: "experiencia", en: "experience" },
      { es: "problema", en: "problem" },
      { es: "verduras", en: "vegetables" },
      { es: "resolver", en: "to solve" },
      { es: "contaminación", en: "pollution" },
      { es: "personas", en: "people" },
      { es: "pequeños", en: "small (pl.)" },
    ],
  },
  {
    id: "reading-sharing-planet-5",
    themeId: "sharing-planet",
    title: "Diario de un voluntario en el centro de refugiados",
    textType: "Diary entry",
    level: "medium",
    bodyEs:
      "Martes, 14 de marzo\n\n" +
      "Hoy ha sido mi tercer día como voluntario en el centro de acogida para refugiados que hay cerca de mi barrio. Ayudo a las familias recién llegadas a rellenar formularios y a encontrar clases de español gratuitas.\n\n" +
      "Esta mañana conocí a Amina, una mujer que llegó hace dos semanas con sus tres hijos después de huir de un conflicto en su país. Me contó que lo más duro no fue el viaje, sino la incertidumbre de no saber si podría quedarse legalmente. Escuchar su historia me hizo entender que el derecho a la protección no es solo una idea abstracta, sino algo que determina la vida diaria de miles de personas.\n\n" +
      "Por la tarde organizamos una pequeña fiesta de bienvenida con comida de varios países. Fue bonito ver a niños de culturas tan distintas jugar juntos como si no existieran fronteras entre ellos.\n\n" +
      "Antes de irme, la coordinadora del centro me explicó que necesitan más voluntarios que puedan enseñar idiomas, porque muchas familias esperan meses antes de conseguir una plaza en un curso. Voy a preguntar si puedo ayudar también los fines de semana.",
    questions: [
      { id: "sharing-planet-5-q1", type: "true-false", prompt: "Amina llegó al centro hace dos semanas.", correctAnswer: "true", justification: "\"llegó hace dos semanas\"" },
      { id: "sharing-planet-5-q2", type: "true-false", prompt: "Según Amina, lo más difícil fue el viaje.", correctAnswer: "false", justification: "\"lo más duro no fue el viaje, sino la incertidumbre\"" },
      { id: "sharing-planet-5-q3", type: "mcq", prompt: "¿Qué necesita el centro de acogida, según la coordinadora?", options: ["Más voluntarios para enseñar idiomas", "Más comida para las fiestas", "Más espacio para dormir", "Más dinero del gobierno"], correctAnswer: "Más voluntarios para enseñar idiomas" },
      { id: "sharing-planet-5-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrada de diario", "Un anuncio", "Una reseña", "Un discurso"], correctAnswer: "Una entrada de diario" },
      { id: "sharing-planet-5-q5", type: "short", prompt: "¿Cuántos hijos tiene Amina?", correctAnswer: "tres" },
    ],
    vocabulary: [
      { es: "familias", en: "families" },
      { es: "encontrar", en: "to find" },
      { es: "historia", en: "history / story" },
      { es: "entender", en: "to understand" },
      { es: "personas", en: "people" },
      { es: "culturas", en: "cultures" },
      { es: "voluntarios", en: "volunteers" },
      { es: "conseguir", en: "to get / achieve" },
    ],
  },
  {
    id: "reading-sharing-planet-6",
    themeId: "sharing-planet",
    title: "Carta a la alcaldesa sobre el monumento a la paz",
    textType: "Formal letter",
    level: "hard",
    bodyEs:
      "Estimada señora alcaldesa:\n\n" +
      "Me dirijo a usted en nombre de la Asociación Juvenil por la Paz de nuestra ciudad para proponerle la construcción de un monumento dedicado a las víctimas de todos los conflictos armados, tanto pasados como actuales.\n\n" +
      "Como usted sabe, el próximo mes se cumplen veinte años del fin de la guerra que afectó a nuestra región. Creemos que la ciudad necesita un espacio público donde los ciudadanos puedan reflexionar sobre lo ocurrido y comprometerse con la construcción de un futuro más pacífico. Actualmente no existe ningún lugar de este tipo en el municipio.\n\n" +
      "Nuestra asociación ha reunido más de mil quinientas firmas de vecinos que apoyan esta iniciativa, y varios artistas locales se han ofrecido a diseñar la obra sin cobrar honorarios. Solo necesitaríamos que el ayuntamiento cediera un pequeño espacio en el parque central y aportara los materiales de construcción.\n\n" +
      "Estaríamos encantados de reunirnos con usted y su equipo para presentar el proyecto con más detalle. Quedamos a la espera de su respuesta y le agradecemos de antemano la atención prestada.\n\n" +
      "Atentamente,\nCarlos Reyes\nPresidente, Asociación Juvenil por la Paz",
    questions: [
      { id: "sharing-planet-6-q1", type: "true-false", prompt: "La asociación ha reunido más de mil quinientas firmas.", correctAnswer: "true", justification: "\"más de mil quinientas firmas\"" },
      { id: "sharing-planet-6-q2", type: "true-false", prompt: "Ya existe un monumento a la paz en la ciudad.", correctAnswer: "false", justification: "\"Actualmente no existe ningún lugar de este tipo en el municipio\"" },
      { id: "sharing-planet-6-q3", type: "mcq", prompt: "¿Qué piden los artistas locales a cambio de diseñar el monumento?", options: ["Nada, se ofrecen sin cobrar", "Un salario muy alto", "Materiales de construcción", "Un espacio con su nombre"], correctAnswer: "Nada, se ofrecen sin cobrar" },
      { id: "sharing-planet-6-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una carta formal", "Una entrada de diario", "Un anuncio publicitario", "Una reseña"], correctAnswer: "Una carta formal" },
      { id: "sharing-planet-6-q5", type: "short", prompt: "¿Cuántos años hace que terminó la guerra que afectó a la región?", correctAnswer: "veinte años" },
    ],
    vocabulary: [
      { es: "asociación", en: "association" },
      { es: "actualmente", en: "currently" },
      { es: "ayuntamiento", en: "town hall / city council" },
      { es: "materiales", en: "materials" },
      { es: "proyecto", en: "project" },
      { es: "respuesta", en: "answer / reply" },
      { es: "antemano", en: "beforehand (de antemano)" },
      { es: "atentamente", en: "sincerely (letter closing)" },
    ],
  },
  {
    id: "reading-sharing-planet-7",
    themeId: "sharing-planet",
    title: "El mundo en tu plato",
    textType: "Magazine article",
    level: "medium",
    bodyEs:
      "Basta con caminar unas pocas calles en cualquier gran ciudad para comprobar hasta qué punto la globalización ha transformado nuestra manera de comer. En una misma manzana es posible encontrar un restaurante japonés, una pizzería italiana, un puesto de tacos mexicanos y una tienda de especias indias.\n\n" +
      "Según un estudio reciente, el número de restaurantes de cocina extranjera en las grandes ciudades ha aumentado un sesenta por ciento en la última década. \"Antes, para probar comida tailandesa había que viajar a Tailandia. Ahora la tenemos a la vuelta de la esquina\", explica la chef Marta Solano, que dirige un restaurante de fusión asiática en el centro de la ciudad.\n\n" +
      "Sin embargo, no todo el mundo ve este fenómeno de manera positiva. Algunos críticos argumentan que la globalización culinaria puede diluir las tradiciones locales y convertir platos históricos en versiones simplificadas pensadas para turistas. Otros, en cambio, sostienen que el intercambio cultural a través de la comida fomenta la comprensión entre pueblos distintos.\n\n" +
      "Lo que parece innegable es que, gracias a este intercambio, millones de personas pueden hoy conocer sabores de otras culturas sin salir de su propio barrio, algo impensable hace solo unas décadas.",
    questions: [
      { id: "sharing-planet-7-q1", type: "true-false", prompt: "El número de restaurantes de cocina extranjera ha aumentado un sesenta por ciento en la última década.", correctAnswer: "true", justification: "\"ha aumentado un sesenta por ciento en la última década\"" },
      { id: "sharing-planet-7-q2", type: "true-false", prompt: "Todos los críticos consideran positiva la globalización culinaria.", correctAnswer: "false", justification: "\"no todo el mundo ve este fenómeno de manera positiva\"" },
      { id: "sharing-planet-7-q3", type: "mcq", prompt: "¿Qué opinan algunos críticos sobre la globalización culinaria?", options: ["Que puede diluir las tradiciones locales", "Que es completamente positiva", "Que no afecta a los restaurantes", "Que solo existe en Asia"], correctAnswer: "Que puede diluir las tradiciones locales" },
      { id: "sharing-planet-7-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un artículo de revista", "Una carta formal", "Un correo electrónico", "Un folleto"], correctAnswer: "Un artículo de revista" },
      { id: "sharing-planet-7-q5", type: "short", prompt: "¿Cómo se llama la chef entrevistada en el artículo?", correctAnswer: "Marta Solano" },
    ],
    vocabulary: [
      { es: "cualquier", en: "any" },
      { es: "encontrar", en: "to find" },
      { es: "reciente", en: "recent" },
      { es: "aumentado", en: "increased" },
      { es: "tradiciones", en: "traditions" },
      { es: "intercambio", en: "exchange" },
      { es: "distintos", en: "different" },
      { es: "millones", en: "millions" },
    ],
  },
  {
    id: "reading-sharing-planet-8",
    themeId: "sharing-planet",
    title: "Foro: ¿Vale la pena comprar ropa de segunda mano?",
    textType: "Forum post",
    level: "easy",
    bodyEs:
      "Publicado por EcoLucia92\n\n" +
      "Hola a todos. Llevo un año comprando casi toda mi ropa en tiendas de segunda mano y quería compartir mi experiencia por si a alguien le sirve de ayuda.\n\n" +
      "Al principio lo hacía solo para ahorrar dinero, pero pronto descubrí que también es una forma de reducir el impacto ambiental de la industria textil, que según he leído es una de las que más contamina el planeta. Además, encuentro prendas únicas que nadie más en mi ciudad tiene, algo que nunca conseguía en las tiendas normales.\n\n" +
      "Al principio me daba un poco de vergüenza decir que mi ropa era usada, pero ahora lo cuento con orgullo. Mis amigas siempre me preguntan dónde compro las cosas que llevo puestas.\n\n" +
      "Eso sí, hay que tener paciencia: no siempre se encuentra la talla o el estilo que se busca, y hay que revisar bien las prendas antes de comprarlas para asegurarse de que estén en buen estado.\n\n" +
      "¿Alguien más tiene experiencia con esto? Me encantaría conocer otras tiendas de segunda mano recomendadas, sobre todo en el centro de la ciudad.",
    questions: [
      { id: "sharing-planet-8-q1", type: "true-false", prompt: "EcoLucia92 empezó a comprar ropa de segunda mano solo por razones ambientales.", correctAnswer: "false", justification: "\"Al principio lo hacía solo para ahorrar dinero\"" },
      { id: "sharing-planet-8-q2", type: "true-false", prompt: "A EcoLucia92 le da vergüenza ahora decir que su ropa es usada.", correctAnswer: "false", justification: "\"ahora lo cuento con orgullo\"" },
      { id: "sharing-planet-8-q3", type: "mcq", prompt: "¿Qué dificultad menciona EcoLucia92 sobre comprar ropa de segunda mano?", options: ["No siempre se encuentra la talla o el estilo deseado", "Es mucho más cara que la ropa nueva", "Las tiendas están muy lejos de su casa", "Nadie vende ropa de buena calidad"], correctAnswer: "No siempre se encuentra la talla o el estilo deseado" },
      { id: "sharing-planet-8-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una publicación de un foro", "Un informe oficial", "Una entrevista", "Un folleto"], correctAnswer: "Una publicación de un foro" },
      { id: "sharing-planet-8-q5", type: "short", prompt: "¿Qué pide EcoLucia92 al final de su publicación?", correctAnswer: "recomendaciones de tiendas de segunda mano" },
    ],
    vocabulary: [
      { es: "publicado", en: "posted / published" },
      { es: "tiendas", en: "stores" },
      { es: "compartir", en: "to share" },
      { es: "experiencia", en: "experience" },
      { es: "alguien", en: "someone" },
      { es: "principio", en: "beginning" },
      { es: "reducir", en: "to reduce" },
      { es: "impacto", en: "impact" },
    ],
  },
  {
    "id": "reading-identities-9",
    "themeId": "identities",
    "title": "Informe sobre el bienestar emocional de los adolescentes",
    "textType": "Official report",
    "level": "hard",
    "bodyEs": "Según un estudio reciente publicado por la Consejería de Salud, el sesenta por ciento de los jóvenes de entre 14 y 18 años declara sentir ansiedad relacionada con el rendimiento académico y la presión de los exámenes finales.\n\nEl informe revela que las redes sociales juegan un papel ambivalente en la vida diaria de los estudiantes: mientras que un setenta por ciento afirma que las utiliza para mantener el contacto con sus amigos, más de la mitad admite que la comparación constante con vidas aparentemente ideales de otros usuarios genera baja autoestima e insatisfacción corporal.\n\nPor otro lado, los expertos destacan la importancia del ejercicio físico regular como factor protector. Los adolescentes que practican deporte al menos tres veces por semana presentan niveles de estrés notablemente inferiores y una mejor calidad del sueño en comparación con aquellos que llevan un estilo de vida sedentario.\n\nEn sus recomendaciones finales, la Consejería insta a los centros educativos a implementar programas de educación emocional y a promover actividades de ocio al aire libre sin dispositivos electrónicos.",
    "questions": [
      {
        "id": "identities-9-q1",
        "type": "true-false",
        "prompt": "El sesenta por ciento de los jóvenes siente ansiedad por los exámenes.",
        "correctAnswer": "true",
        "justification": "\"el sesenta por ciento de los jóvenes de entre 14 y 18 años declara sentir ansiedad relacionada con el rendimiento académico\""
      },
      {
        "id": "identities-9-q2",
        "type": "true-false",
        "prompt": "Practicar deporte aumenta los niveles de estrés según el informe.",
        "correctAnswer": "false",
        "justification": "\"Los adolescentes que practican deporte... presentan niveles de estrés notablemente inferiores\""
      },
      {
        "id": "identities-9-q3",
        "type": "mcq",
        "prompt": "¿Qué impacto negativo tienen las redes sociales en más de la mitad de los jóvenes?",
        "options": [
          "Generan baja autoestima e insatisfacción corporal",
          "Les impiden hacer deporte",
          "Hacen que saquen peores notas",
          "Les obligan a comprar cosas"
        ],
        "correctAnswer": "Generan baja autoestima e insatisfacción corporal"
      },
      {
        "id": "identities-9-q4",
        "type": "mcq",
        "prompt": "¿Qué tipo de texto es este?",
        "options": [
          "Un informe oficial",
          "Una entrada de diario",
          "Un poema",
          "Una carta informal"
        ],
        "correctAnswer": "Un informe oficial"
      },
      {
        "id": "identities-9-q5",
        "type": "short",
        "prompt": "¿Cuántas veces a la semana se recomienda hacer deporte?",
        "correctAnswer": "al menos tres veces"
      }
    ],
    vocabulary: [
      { es: "publicado", en: "posted / published" },
      { es: "estudiantes", en: "students" },
      { es: "constante", en: "constant" },
      { es: "adolescentes", en: "teenagers" },
      { es: "recomendaciones", en: "recommendations" },
      { es: "educativos", en: "educational" },
      { es: "programas", en: "programs" },
      { es: "actividades", en: "activities" },
    ],
  },
  {
    "id": "reading-identities-10",
    "themeId": "identities",
    "title": "Entrevista: 'La dieta mediterránea cambió mi vida'",
    "textType": "Interview",
    "level": "medium",
    "bodyEs": "Entrevistador: Hoy hablamos con Javier Gómez, un estudiante universitario de 20 años que decidió cambiar radicalmente sus hábitos alimenticios tras experimentar fatiga constante durante el primer semestre.\n\nJavier: Solía comer comida rápida y productos ultraprocesados porque no tenía tiempo para cocinar. Estaba cansado todo el día y me costaba concentrarme en las clases.\n\nEntrevistador: ¿Cómo descubriste la dieta mediterránea?\n\nJavier: Mi abuela me enseñó a preparar platos sencillos a base de verduras de temporada, legumbres, pescado y aceite de oliva virgen extra. Al principio me parecía aburrido, pero en un par de semanas noté un cambio enorme en mi nivel de energía y en mi humor.\n\nEntrevistador: ¿Qué consejo le darías a otros jóvenes de tu edad?\n\nJavier: Que cocinar en casa no es una pérdida de tiempo, sino una inversión en salud. Preparar tus propias comidas te da control total sobre lo que ingieres.",
    "questions": [
      {
        "id": "identities-10-q1",
        "type": "true-false",
        "prompt": "Javier siempre ha comido saludable desde niño.",
        "correctAnswer": "false",
        "justification": "\"Solía comer comida rápida y productos ultraprocesados\""
      },
      {
        "id": "identities-10-q2",
        "type": "true-false",
        "prompt": "La abuela de Javier le enseñó a cocinar platos sencillos.",
        "correctAnswer": "true",
        "justification": "\"Mi abuela me enseñó a preparar platos sencillos\""
      },
      {
        "id": "identities-10-q3",
        "type": "mcq",
        "prompt": "¿Por qué comía comida rápida Javier al principio?",
        "options": [
          "Porque no tenía tiempo para cocinar",
          "Porque no le gustaban las verduras",
          "Porque era más cara",
          "Porque vivía en un hotel"
        ],
        "correctAnswer": "Porque no tenía tiempo para cocinar"
      },
      {
        "id": "identities-10-q4",
        "type": "mcq",
        "prompt": "¿Qué tipo de texto es este?",
        "options": [
          "Una entrevista",
          "Un folleto publicitario",
          "Una novela",
          "Una carta formal"
        ],
        "correctAnswer": "Una entrevista"
      },
      {
        "id": "identities-10-q5",
        "type": "short",
        "prompt": "¿Cuántos años tiene Javier?",
        "correctAnswer": "veinte años"
      }
    ],
    vocabulary: [
      { es: "hablamos", en: "we speak / talk" },
      { es: "estudiante", en: "student" },
      { es: "cambiar", en: "to change" },
      { es: "constante", en: "constant" },
      { es: "preparar", en: "to prepare" },
      { es: "verduras", en: "vegetables" },
      { es: "principio", en: "beginning" },
      { es: "semanas", en: "weeks" },
    ],
  },
  {
    "id": "reading-experiences-9",
    "themeId": "experiences",
    "title": "Reseña: Mi intercambio cultural en Salamanca",
    "textType": "Review",
    "level": "medium",
    "bodyEs": "Pasar un trimestre completo en Salamanca como estudiante de intercambio ha sido, sin lugar a dudas, la mejor decisión que he tomado en mi vida escolar.\n\nSalamanca es una ciudad universitaria llena de vida, historia y cultura. Durante tres meses viví con una familia de acogida encantadora que me trató como a un hijo más. Cenar juntos cada noche hablando en español sobre nuestras costumbres me ayudó a mejorar mi fluidez mucho más rápido que en cualquier aula tradicional.\n\nLo que más me sorprendió fue la flexibilidad de los horarios españoles: comer a las tres de la tarde y cenar a las diez requiere un tiempo de adaptación, pero pronto te acostumbras a disfrutar del ritmo de vida relajado.\n\nRecomiendo sin dudarlo este programa a cualquier estudiante que desee perfeccionar su español y sumergirse en la rica herencia cultural de España.",
    "questions": [
      {
        "id": "experiences-9-q1",
        "type": "true-false",
        "prompt": "El autor vivió en una residencia de estudiantes en Salamanca.",
        "correctAnswer": "false",
        "justification": "\"viví con una familia de acogida encantadora\""
      },
      {
        "id": "experiences-9-q2",
        "type": "true-false",
        "prompt": "Al autor le sorprendieron los horarios de las comidas en España.",
        "correctAnswer": "true",
        "justification": "\"Lo que más me sorprendió fue la flexibilidad de los horarios españoles\""
      },
      {
        "id": "experiences-9-q3",
        "type": "mcq",
        "prompt": "¿Qué le ayudó al autor a mejorar su fluidez rápidamente?",
        "options": [
          "Cenar con la familia de acogida hablando en español",
          "Estudiar en la biblioteca diez horas",
          "Ver la televisión solo",
          "Leer diccionarios"
        ],
        "correctAnswer": "Cenar con la familia de acogida hablando en español"
      },
      {
        "id": "experiences-9-q4",
        "type": "mcq",
        "prompt": "¿Qué tipo de texto es este?",
        "options": [
          "Una reseña",
          "Un contrato",
          "Una receta de cocina",
          "Un discurso"
        ],
        "correctAnswer": "Una reseña"
      },
      {
        "id": "experiences-9-q5",
        "type": "short",
        "prompt": "¿Cuántos meses duró el intercambio escolar?",
        "correctAnswer": "tres meses"
      }
    ],
    vocabulary: [
      { es: "trimestre", en: "term / trimester" },
      { es: "completo", en: "complete / full" },
      { es: "estudiante", en: "student" },
      { es: "intercambio", en: "exchange" },
      { es: "historia", en: "history / story" },
      { es: "hablando", en: "speaking" },
      { es: "cualquier", en: "any" },
      { es: "recomiendo", en: "I recommend" },
    ],
  },
  {
    "id": "reading-human-ingenuity-9",
    "themeId": "human-ingenuity",
    "title": "Discurso en el club de robótica escolar",
    "textType": "Speech",
    "level": "hard",
    "bodyEs": "Estimados compañeros, profesores y apasionados de la tecnología:\n\nEs un honor estar hoy aquí para celebrar el quinto aniversario de nuestro club de robótica. Cuando empezamos en un pequeño aula del sótano con apenas tres ordenadores viejos, nadie imaginaba que llegaríamos a diseñar un prototipo capaz de competir a nivel nacional.\n\nLa inteligencia artificial y la automatización suelen despertar incertidumbre sobre el futuro del empleo. Sin embargo, nuestro objetivo como inventores jóvenes no debe ser reemplazar a los seres humanos, sino crear tecnologías que resuelvan problemas reales, como la limpieza de los océanos o la asistencia a personas mayores.\n\nLa verdadera innovación nace de la curiosidad, el trabajo en equipo y la capacidad de aprender de los errores. Invito a cada uno de vosotros a seguir experimentando con creatividad y ética.",
    "questions": [
      {
        "id": "human-ingenuity-9-q1",
        "type": "true-false",
        "prompt": "El club de robótica empezó hace diez años.",
        "correctAnswer": "false",
        "justification": "\"celebrar el quinto aniversario de nuestro club de robótica\""
      },
      {
        "id": "human-ingenuity-9-q2",
        "type": "true-false",
        "prompt": "El orador cree que la tecnología debe resolver problemas reales.",
        "correctAnswer": "true",
        "justification": "\"crear tecnologías que resuelvan problemas reales\""
      },
      {
        "id": "human-ingenuity-9-q3",
        "type": "mcq",
        "prompt": "¿Dónde empezó el club de robótica según el discurso?",
        "options": [
          "En un pequeño aula del sótano",
          "En un laboratorio universitario",
          "En la biblioteca pública",
          "En un garaje de una casa"
        ],
        "correctAnswer": "En un pequeño aula del sótano"
      },
      {
        "id": "human-ingenuity-9-q4",
        "type": "mcq",
        "prompt": "¿Qué tipo de texto es este?",
        "options": [
          "Un discurso",
          "Una entrevista",
          "Un folleto",
          "Una entrada de diario"
        ],
        "correctAnswer": "Un discurso"
      },
      {
        "id": "human-ingenuity-9-q5",
        "type": "short",
        "prompt": "¿Cuántos ordenadores viejos tenían al principio?",
        "correctAnswer": "tres ordenadores"
      }
    ],
    vocabulary: [
      { es: "compañeros", en: "classmates / colleagues" },
      { es: "tecnología", en: "technology" },
      { es: "robótica", en: "robotics" },
      { es: "imaginaba", en: "imagined" },
      { es: "nacional", en: "national" },
      { es: "inteligencia", en: "intelligence" },
      { es: "artificial", en: "artificial" },
      { es: "problemas", en: "problems" },
    ],
  },
  {
    "id": "reading-social-organization-9",
    "themeId": "social-organization",
    "title": "Folleto: Voluntariado juvenil en el centro vecinal",
    "textType": "Instructional guide",
    "level": "easy",
    "bodyEs": "¡Únete al programa de voluntariado 'Jóvenes Activos' de nuestro barrio!\n\n¿Tienes más de 14 años y quieres marcar la diferencia en tu comunidad? Nuestro centro vecinal busca estudiantes con entusiasmo para participar en las siguientes actividades los fines de semana:\n\n1. Apoyo escolar: ayuda a niños de primaria con sus deberes de matemáticas y lectura los sábados por la mañana.\n2. Taller digital para mayores: enseña a nuestros abuelos a usar smartphones y hacer videollamadas con sus familias.\n3. Huerto urbano: colabora en el cultivo de verduras orgánicas que luego se donan al comedor social.\n\nRequisitos: no se requiere experiencia previa, solo ganas de colaborar dos horas a la semana. Al finalizar el trimestre recibirás un certificado oficial útil para tu currículum.",
    "questions": [
      {
        "id": "social-organization-9-q1",
        "type": "true-false",
        "prompt": "Es necesario tener experiencia previa para ser voluntario.",
        "correctAnswer": "false",
        "justification": "\"no se requiere experiencia previa\""
      },
      {
        "id": "social-organization-9-q2",
        "type": "true-false",
        "prompt": "Los voluntarios reciben un certificado oficial al final del trimestre.",
        "correctAnswer": "true",
        "justification": "\"recibirás un certificado oficial útil para tu currículum\""
      },
      {
        "id": "social-organization-9-q3",
        "type": "mcq",
        "prompt": "¿A quiénes ayudan los voluntarios en el taller digital?",
        "options": [
          "A los abuelos del barrio",
          "A niños de primaria",
          "A profesores de instituto",
          "A turistas de la ciudad"
        ],
        "correctAnswer": "A los abuelos del barrio"
      },
      {
        "id": "social-organization-9-q4",
        "type": "mcq",
        "prompt": "¿Qué tipo de texto es este?",
        "options": [
          "Un folleto informativo",
          "Una entrada de blog",
          "Un examen",
          "Una novela"
        ],
        "correctAnswer": "Un folleto informativo"
      },
      {
        "id": "social-organization-9-q5",
        "type": "short",
        "prompt": "¿Cuántas horas a la semana se pide colaborar?",
        "correctAnswer": "dos horas"
      }
    ],
    vocabulary: [
      { es: "voluntariado", en: "volunteering" },
      { es: "diferencia", en: "difference" },
      { es: "comunidad", en: "community" },
      { es: "estudiantes", en: "students" },
      { es: "actividades", en: "activities" },
      { es: "experiencia", en: "experience" },
      { es: "colaborar", en: "to collaborate" },
      { es: "trimestre", en: "term / trimester" },
    ],
  },
  {
    "id": "reading-sharing-planet-9",
    "themeId": "sharing-planet",
    "title": "Artículo: La crisis global del agua dulce",
    "textType": "Newspaper article",
    "level": "hard",
    "bodyEs": "Aunque el setenta por ciento de la superficie terrestre está cubierta por agua, solo el dos coma cinco por ciento es agua dulce apta para el consumo humano, y la mayor parte se encuentra atrapada en glaciares y mantos de hielo inaccesibles.\n\nEl cambio climático, sumado al crecimiento demográfico y a la agricultura intensiva, está acelerando la escasez de agua potable en regiones que antes se consideraban abundantes. Según datos de la ONU, en el año 2050 más de dos mil millones de personas vivirán en países con estrés hídrico grave.\n\nExpertos reunidos esta semana en el Foro Mundial del Agua advierten que la innovación en desalinización limpia y la eficiencia en el riego agrícola son urgentes. Sin una gestión sostenible del agua dulce, el desarrollo social y económico del planeta se verá seriamente amenazado.",
    "questions": [
      {
        "id": "sharing-planet-9-q1",
        "type": "true-false",
        "prompt": "El dos coma cinco por ciento del agua de la Tierra es agua dulce.",
        "correctAnswer": "true",
        "justification": "\"solo el dos coma cinco por ciento es agua dulce\""
      },
      {
        "id": "sharing-planet-9-q2",
        "type": "true-false",
        "prompt": "Toda el agua dulce de la Tierra es fácilmente accesible.",
        "correctAnswer": "false",
        "justification": "\"la mayor parte se encuentra atrapada en glaciares y mantos de hielo inaccesibles\""
      },
      {
        "id": "sharing-planet-9-q3",
        "type": "mcq",
        "prompt": "¿Cuántas personas sufrirán estrés hídrico grave en 2050 según la ONU?",
        "options": [
          "Más de dos mil millones",
          "Un millón",
          "La mitad del mundo",
          "Nadie"
        ],
        "correctAnswer": "Más de dos mil millones"
      },
      {
        "id": "sharing-planet-9-q4",
        "type": "mcq",
        "prompt": "¿Qué tipo de texto es este?",
        "options": [
          "Un artículo de periódico",
          "Una carta informal",
          "Una poesía",
          "Un menú"
        ],
        "correctAnswer": "Un artículo de periódico"
      },
      {
        "id": "sharing-planet-9-q5",
        "type": "short",
        "prompt": "¿Qué porcentaje de la Tierra está cubierto por agua?",
        "correctAnswer": "setenta por ciento"
      }
    ],
    vocabulary: [
      { es: "setenta", en: "seventy" },
      { es: "ciento", en: "hundred / percent" },
      { es: "consumo", en: "consumption" },
      { es: "climático", en: "climate (adj.)" },
      { es: "millones", en: "millions" },
      { es: "personas", en: "people" },
      { es: "expertos", en: "experts" },
      { es: "planeta", en: "planet" },
    ],
  },
  {
    id: "reading-identities-11",
    themeId: "identities",
    title: "Mi primer día en el instituto nuevo",
    textType: "Diary entry",
    level: "easy",
    bodyEs:
      "Querido diario:\n\n" +
      "Hoy fue mi primer día en el instituto nuevo. Estoy muy nerviosa porque no conozco a nadie todavía. Mi familia se mudó a esta ciudad hace dos semanas por el trabajo de mi padre.\n\n" +
      "En la clase de español, la profesora me presentó a todos mis compañeros. Se llama la señora Ruiz y es muy simpática. Una chica que se llama Ana se sentó a mi lado y me habló durante el descanso. Creo que vamos a ser amigas.\n\n" +
      "Después de las clases, fui a la cafetería con Ana y otros dos chicos. Hablamos sobre música y series de televisión. Por primera vez desde que llegamos, no me sentí tan sola.\n\n" +
      "Mañana tengo clase de arte, mi asignatura favorita. Espero hacer más amigos pronto. Este cambio es difícil, pero creo que va a ser una buena experiencia para mí.",
    questions: [
      { id: "identities-11-q1", type: "true-false", prompt: "La familia de la autora se mudó hace dos semanas.", correctAnswer: "true", justification: "\"Mi familia se mudó a esta ciudad hace dos semanas\"" },
      { id: "identities-11-q2", type: "true-false", prompt: "La autora se sintió sola todo el día.", correctAnswer: "false", justification: "\"no me sentí tan sola\"" },
      { id: "identities-11-q3", type: "mcq", prompt: "¿Cómo se llama la chica que se sentó al lado de la autora?", options: ["Ana", "Ruiz", "Marta", "Sofía"], correctAnswer: "Ana" },
      { id: "identities-11-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrada de diario", "Un correo formal", "Un artículo de periódico", "Un anuncio"], correctAnswer: "Una entrada de diario" },
      { id: "identities-11-q5", type: "short", prompt: "¿Cuál es la asignatura favorita de la autora?", correctAnswer: "arte" },
    ],
    vocabulary: [
      { es: "querido", en: "dear / beloved" },
      { es: "instituto", en: "secondary school" },
      { es: "todavía", en: "still / yet" },
      { es: "profesora", en: "teacher (fem.)" },
      { es: "compañeros", en: "classmates / colleagues" },
      { es: "hablamos", en: "we speak / talk" },
      { es: "llegamos", en: "we arrived" },
      { es: "experiencia", en: "experience" },
    ],
  },
  {
    id: "reading-identities-12",
    themeId: "identities",
    title: "Postal desde el pueblo de mis abuelos",
    textType: "Postcard",
    level: "medium",
    bodyEs:
      "¡Hola, Carla!\n\n" +
      "Te escribo desde el pueblo donde nacieron mis abuelos, un lugar pequeño en el norte de España que apenas tiene doscientos habitantes. Llevo aquí una semana de vacaciones y, sinceramente, no esperaba sentirme tan conectada con este sitio.\n\n" +
      "Mis abuelos emigraron a la ciudad hace más de cuarenta años, pero muchas cosas siguen igual: la plaza principal, la iglesia de piedra y hasta la panadería donde mi abuela compraba el pan de niña. Los vecinos me reconocen por mi apellido y me cuentan anécdotas de mi familia que yo nunca había escuchado.\n\n" +
      "Ayer fui a la casa donde creció mi abuelo. Ahora está abandonada, pero pude entrar y caminar por las habitaciones vacías. Fue una experiencia extraña, como si estuviera tocando una parte de mi propia historia que hasta ahora solo conocía por fotos.\n\n" +
      "Creo que entender de dónde viene tu familia te ayuda a entender quién eres tú. Volveré a la ciudad el domingo, pero seguro que regreso pronto a este pueblo.\n\n" +
      "Un abrazo,\nElena",
    questions: [
      { id: "identities-12-q1", type: "true-false", prompt: "Los abuelos de Elena todavía viven en el pueblo.", correctAnswer: "false", justification: "\"Mis abuelos emigraron a la ciudad hace más de cuarenta años\"" },
      { id: "identities-12-q2", type: "true-false", prompt: "El pueblo tiene una población muy grande.", correctAnswer: "false", justification: "\"apenas tiene doscientos habitantes\"" },
      { id: "identities-12-q3", type: "mcq", prompt: "¿Qué hizo Elena ayer?", options: ["Visitó la casa donde creció su abuelo", "Conoció a sus abuelos por primera vez", "Compró pan en la panadería de su abuela", "Se mudó permanentemente al pueblo"], correctAnswer: "Visitó la casa donde creció su abuelo" },
      { id: "identities-12-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una postal", "Un informe oficial", "Una reseña", "Un anuncio"], correctAnswer: "Una postal" },
      { id: "identities-12-q5", type: "short", prompt: "¿Cuánto tiempo lleva Elena en el pueblo?", correctAnswer: "una semana" },
    ],
    vocabulary: [
      { es: "escribo", en: "I write" },
      { es: "doscientos", en: "two hundred" },
      { es: "sentirme", en: "to feel (myself)" },
      { es: "cuarenta", en: "forty" },
      { es: "principal", en: "main" },
      { es: "experiencia", en: "experience" },
      { es: "historia", en: "history / story" },
      { es: "entender", en: "to understand" },
    ],
  },
  {
    id: "reading-experiences-10",
    themeId: "experiences",
    title: "Lo que nadie te cuenta sobre estudiar un año en el extranjero",
    textType: "Blog post",
    level: "hard",
    bodyEs:
      "Cuando decidí pasar mi último año de instituto estudiando en Francia, todo el mundo me hablaba de las ventajas: aprendería un idioma nuevo, haría amigos internacionales y volvería siendo una persona más independiente. Lo que nadie mencionó fue lo duro que sería adaptarme emocionalmente.\n\n" +
      "Los primeros dos meses fueron, sin exagerar, los más difíciles de mi vida. Aunque hablaba francés con cierta fluidez, no entendía los chistes, las referencias culturales ni las normas sociales no escritas que rigen las amistades entre adolescentes franceses. Muchas noches llamaba a mis padres llorando, convencida de que había cometido un error.\n\n" +
      "Lo que finalmente cambió las cosas no fue hacer un esfuerzo sobrehumano, sino aceptar que no pasaba nada por sentirme perdida durante un tiempo. Una profesora me dijo una frase que nunca olvidaré: \"No hace falta que te sientas como en casa desde el primer día; basta con que sigas apareciendo\". Así que seguí apareciendo: al club de teatro, a las cenas familiares con mi familia de acogida, a las clases donde apenas entendía la mitad de lo que se decía.\n\n" +
      "Hacia el tercer mes, algo cambió. Empecé a soñar en francés. Entendí un chiste sin que nadie tuviera que explicármelo. Y, sobre todo, dejé de contar los días que faltaban para volver a casa.\n\n" +
      "Si alguien me preguntara hoy si recomiendo esta experiencia, le diría que sí, pero con una advertencia: nadie te cuenta que hay que tocar fondo antes de empezar a disfrutarlo de verdad.",
    questions: [
      { id: "experiences-10-q1", type: "true-false", prompt: "Los primeros meses en Francia fueron fáciles para la autora.", correctAnswer: "false", justification: "\"los primeros dos meses fueron, sin exagerar, los más difíciles de mi vida\"" },
      { id: "experiences-10-q2", type: "true-false", prompt: "La autora dejó de contar los días que faltaban para volver a casa.", correctAnswer: "true", justification: "\"dejé de contar los días que faltaban para volver a casa\"" },
      { id: "experiences-10-q3", type: "mcq", prompt: "Según el texto, ¿qué le costaba entender a la autora al principio?", options: ["Los chistes y las normas sociales no escritas", "La gramática básica del francés", "Los horarios del instituto", "El mapa de la ciudad"], correctAnswer: "Los chistes y las normas sociales no escritas" },
      { id: "experiences-10-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrada de blog", "Un informe oficial", "Un anuncio publicitario", "Una receta"], correctAnswer: "Una entrada de blog" },
      { id: "experiences-10-q5", type: "short", prompt: "¿En qué mes empezó a soñar la autora en francés?", correctAnswer: "el tercer mes" },
    ],
    vocabulary: [
      { es: "instituto", en: "secondary school" },
      { es: "persona", en: "person" },
      { es: "sociales", en: "social" },
      { es: "adolescentes", en: "teenagers" },
      { es: "sentirme", en: "to feel (myself)" },
      { es: "profesora", en: "teacher (fem.)" },
      { es: "recomiendo", en: "I recommend" },
      { es: "experiencia", en: "experience" },
    ],
  },
  {
    id: "reading-experiences-11",
    themeId: "experiences",
    title: "Publicación: Mi primer maratón",
    textType: "Social media post",
    level: "medium",
    bodyEs:
      "¡Lo logré! 🏃‍♀️ Después de seis meses de entrenamiento, hoy terminé mi primer maratón: 42 kilómetros que jamás pensé que sería capaz de correr.\n\n" +
      "No voy a mentir, los kilómetros del veinticinco al treinta y cinco fueron una tortura. En un momento quise abandonar, pero pensé en toda la gente que me apoyó durante los entrenamientos de las seis de la mañana, incluso cuando llovía, y seguí corriendo.\n\n" +
      "Crucé la meta en cuatro horas y doce minutos. No es un tiempo espectacular, pero para mí es una victoria enorme, porque hace un año ni siquiera podía correr diez minutos sin parar.\n\n" +
      "Gracias a todos los que comentaron y me animaron esta mañana mientras compartía mi ubicación en directo. Esta comunidad de corredores es una de las mejores cosas que me ha pasado este año.\n\n" +
      "¿Cuál fue vuestro primer gran reto deportivo? Contádmelo en los comentarios. 💪 #primerarmaraton #corredora",
    questions: [
      { id: "experiences-11-q1", type: "true-false", prompt: "La autora terminó el maratón en menos de cuatro horas.", correctAnswer: "false", justification: "\"Crucé la meta en cuatro horas y doce minutos\"" },
      { id: "experiences-11-q2", type: "true-false", prompt: "Hace un año, la autora podía correr fácilmente diez minutos seguidos.", correctAnswer: "false", justification: "\"hace un año ni siquiera podía correr diez minutos sin parar\"" },
      { id: "experiences-11-q3", type: "mcq", prompt: "¿Cuántos kilómetros tiene un maratón, según el texto?", options: ["42", "10", "25", "100"], correctAnswer: "42" },
      { id: "experiences-11-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una publicación en redes sociales", "Un informe médico", "Una carta formal", "Un artículo científico"], correctAnswer: "Una publicación en redes sociales" },
      { id: "experiences-11-q5", type: "short", prompt: "¿Cuántos meses entrenó la autora antes del maratón?", correctAnswer: "seis meses" },
    ],
    vocabulary: [
      { es: "primer", en: "first" },
      { es: "treinta", en: "thirty" },
      { es: "momento", en: "moment" },
      { es: "incluso", en: "even / including" },
      { es: "cuatro", en: "four" },
      { es: "minutos", en: "minutes" },
      { es: "gracias", en: "thanks" },
      { es: "comunidad", en: "community" },
    ],
  },
  {
    id: "reading-human-ingenuity-10",
    themeId: "human-ingenuity",
    title: "Guía rápida: cómo reciclar tu móvil viejo",
    textType: "Instructional guide",
    level: "easy",
    bodyEs:
      "¿Tienes un teléfono móvil viejo guardado en un cajón? Sigue estos pasos sencillos para reciclarlo correctamente.\n\n" +
      "Primero, haz una copia de seguridad de tus fotos y contactos. Puedes usar una aplicación en la nube o conectar el teléfono a un ordenador.\n\n" +
      "Segundo, borra todos tus datos personales. Ve a la configuración del teléfono y selecciona la opción de \"restablecer datos de fábrica\". Así nadie podrá ver tu información.\n\n" +
      "Tercero, quita la tarjeta SIM y la tarjeta de memoria si las tiene. Guárdalas o destrúyelas si ya no las necesitas.\n\n" +
      "Cuarto, lleva el móvil a un punto de reciclaje electrónico. Muchas tiendas de tecnología y ayuntamientos tienen contenedores especiales para este tipo de residuos.\n\n" +
      "Un móvil contiene metales valiosos como el oro y la plata, además de materiales que pueden contaminar el medioambiente si no se reciclan bien. ¡Con estos cuatro pasos, ayudas al planeta y liberas espacio en casa!",
    questions: [
      { id: "human-ingenuity-10-q1", type: "true-false", prompt: "Se debe hacer una copia de seguridad antes de borrar los datos.", correctAnswer: "true", justification: "\"Primero, haz una copia de seguridad... Segundo, borra todos tus datos personales\"" },
      { id: "human-ingenuity-10-q2", type: "true-false", prompt: "Los móviles viejos se deben tirar a la basura normal.", correctAnswer: "false", justification: "\"lleva el móvil a un punto de reciclaje electrónico\"" },
      { id: "human-ingenuity-10-q3", type: "mcq", prompt: "¿Qué se debe hacer en el segundo paso?", options: ["Restablecer los datos de fábrica", "Comprar un móvil nuevo", "Llamar al fabricante", "Vender el móvil"], correctAnswer: "Restablecer los datos de fábrica" },
      { id: "human-ingenuity-10-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una guía instructiva", "Un poema", "Una crítica de cine", "Una carta personal"], correctAnswer: "Una guía instructiva" },
      { id: "human-ingenuity-10-q5", type: "short", prompt: "Menciona un metal valioso que contienen los móviles.", correctAnswer: "oro" },
    ],
    vocabulary: [
      { es: "teléfono", en: "phone" },
      { es: "primero", en: "first" },
      { es: "aplicación", en: "application / app" },
      { es: "personales", en: "personal" },
      { es: "información", en: "information" },
      { es: "necesitas", en: "you need" },
      { es: "tecnología", en: "technology" },
      { es: "materiales", en: "materials" },
    ],
  },
  {
    id: "reading-human-ingenuity-11",
    themeId: "human-ingenuity",
    title: "Estudiantes crean una app que traduce el lenguaje de signos en tiempo real",
    textType: "Newspaper article",
    level: "medium",
    bodyEs:
      "Un grupo de cinco estudiantes de un instituto de Valencia ha desarrollado una aplicación móvil capaz de traducir el lenguaje de signos español a texto y voz en tiempo real, utilizando solo la cámara de un teléfono inteligente.\n\n" +
      "El proyecto, llamado SignoYa, nació después de que uno de los estudiantes, Pau Ferrer, conociera a un compañero de clase con discapacidad auditiva. \"Nos dimos cuenta de que la comunicación diaria era un obstáculo constante para él, y quisimos hacer algo al respecto\", explica Pau.\n\n" +
      "La aplicación utiliza inteligencia artificial para reconocer los movimientos de las manos y convertirlos en palabras en cuestión de segundos. Aunque todavía está en fase de pruebas y solo reconoce un vocabulario limitado de unas trescientas señas, los creadores esperan ampliarlo significativamente el próximo año.\n\n" +
      "El equipo presentó su proyecto en una feria de innovación juvenil y ganó el primer premio en la categoría de tecnología social. Ahora buscan financiación para convertir SignoYa en una aplicación disponible para todo el público.\n\n" +
      "\"Lo más importante para nosotros no es el premio, sino saber que esto puede cambiar la vida de muchas personas\", concluye Pau.",
    questions: [
      { id: "human-ingenuity-11-q1", type: "true-false", prompt: "La aplicación fue creada por un solo estudiante.", correctAnswer: "false", justification: "\"Un grupo de cinco estudiantes\"" },
      { id: "human-ingenuity-11-q2", type: "true-false", prompt: "SignoYa ganó el primer premio en una feria de innovación.", correctAnswer: "true", justification: "\"ganó el primer premio en la categoría de tecnología social\"" },
      { id: "human-ingenuity-11-q3", type: "mcq", prompt: "¿Cuántas señas reconoce actualmente la aplicación?", options: ["Unas trescientas", "Mil", "Cincuenta", "Todas las existentes"], correctAnswer: "Unas trescientas" },
      { id: "human-ingenuity-11-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un artículo de periódico", "Una entrada de diario", "Una postal", "Un menú"], correctAnswer: "Un artículo de periódico" },
      { id: "human-ingenuity-11-q5", type: "short", prompt: "¿Cómo se llama el estudiante entrevistado en el artículo?", correctAnswer: "Pau Ferrer" },
    ],
    vocabulary: [
      { es: "estudiantes", en: "students" },
      { es: "instituto", en: "secondary school" },
      { es: "aplicación", en: "application / app" },
      { es: "constante", en: "constant" },
      { es: "inteligencia", en: "intelligence" },
      { es: "artificial", en: "artificial" },
      { es: "tecnología", en: "technology" },
      { es: "importante", en: "important" },
    ],
  },
  {
    id: "reading-social-organization-10",
    themeId: "social-organization",
    title: "Informe del consejo escolar sobre la convivencia en los centros educativos",
    textType: "Official report",
    level: "hard",
    bodyEs:
      "El presente informe, elaborado por el Consejo Escolar Municipal, examina los resultados de una encuesta realizada entre el alumnado de secundaria de la región con el objetivo de evaluar el clima de convivencia en los centros educativos durante el curso actual.\n\n" +
      "Según los datos recogidos, un setenta y ocho por ciento del alumnado afirma sentirse seguro en su centro educativo, una cifra que representa un ligero descenso respecto al curso anterior. Entre las principales preocupaciones señaladas por los estudiantes destacan el acoso escolar, tanto presencial como en redes sociales, y la falta de espacios de mediación entre iguales.\n\n" +
      "El informe subraya que los centros que cuentan con programas de mediación escolar y delegados de convivencia registran índices significativamente más bajos de conflictos graves. Asimismo, se observa que el alumnado valora positivamente la existencia de canales anónimos para denunciar situaciones de acoso.\n\n" +
      "Entre las recomendaciones del Consejo se incluyen: implementar programas de mediación en todos los centros antes de que finalice el próximo curso escolar, aumentar la formación del profesorado en la detección temprana de conflictos, y crear una comisión de seguimiento que evaluará la convivencia trimestralmente.\n\n" +
      "El informe completo será presentado a las familias en la próxima reunión del consejo escolar, prevista para el mes que viene.",
    questions: [
      { id: "social-organization-10-q1", type: "true-false", prompt: "El porcentaje de alumnado que se siente seguro ha aumentado respecto al curso anterior.", correctAnswer: "false", justification: "\"una cifra que representa un ligero descenso respecto al curso anterior\"" },
      { id: "social-organization-10-q2", type: "true-false", prompt: "Los centros con programas de mediación tienen menos conflictos graves.", correctAnswer: "true", justification: "\"registran índices significativamente más bajos de conflictos graves\"" },
      { id: "social-organization-10-q3", type: "mcq", prompt: "¿Qué porcentaje del alumnado afirma sentirse seguro en su centro?", options: ["78%", "50%", "22%", "100%"], correctAnswer: "78%" },
      { id: "social-organization-10-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un informe oficial", "Una carta personal", "Un anuncio", "Una reseña"], correctAnswer: "Un informe oficial" },
      { id: "social-organization-10-q5", type: "short", prompt: "¿Cuándo se presentará el informe completo a las familias?", correctAnswer: "el mes que viene" },
    ],
    vocabulary: [
      { es: "presente", en: "present" },
      { es: "resultados", en: "results" },
      { es: "educativos", en: "educational" },
      { es: "sentirse", en: "to feel (oneself)" },
      { es: "representa", en: "represents" },
      { es: "estudiantes", en: "students" },
      { es: "programas", en: "programs" },
      { es: "recomendaciones", en: "recommendations" },
    ],
  },
  {
    id: "reading-social-organization-11",
    themeId: "social-organization",
    title: "Discurso de la candidata a delegada de clase",
    textType: "Speech",
    level: "medium",
    bodyEs:
      "Buenos días a todos y a todas.\n\n" +
      "Me llamo Irene y me presento como candidata a delegada de nuestra clase este año. Llevo tres años en este instituto y siempre he creído que los estudiantes deberíamos tener más voz en las decisiones que nos afectan directamente.\n\n" +
      "Si me eligen, mi primera propuesta será organizar reuniones mensuales donde todos podáis compartir vuestras ideas y quejas de forma abierta, sin miedo a hablar. También quiero trabajar junto a la dirección para mejorar las instalaciones del patio, que llevan años sin renovarse.\n\n" +
      "Sé que no puedo prometer soluciones inmediatas para todos los problemas, pero sí puedo prometer que escucharé a cada uno de vosotros y que llevaré vuestras propuestas a las reuniones del consejo escolar con seriedad y compromiso.\n\n" +
      "Creo firmemente que una clase unida puede conseguir cambios reales. Por eso os pido vuestro voto: no para mí, sino para todos nosotros.\n\n" +
      "Muchas gracias.",
    questions: [
      { id: "social-organization-11-q1", type: "true-false", prompt: "Irene lleva tres años en el instituto.", correctAnswer: "true", justification: "\"Llevo tres años en este instituto\"" },
      { id: "social-organization-11-q2", type: "true-false", prompt: "Irene promete resolver todos los problemas de inmediato.", correctAnswer: "false", justification: "\"no puedo prometer soluciones inmediatas para todos los problemas\"" },
      { id: "social-organization-11-q3", type: "mcq", prompt: "¿Cuál es la primera propuesta de Irene si es elegida?", options: ["Organizar reuniones mensuales", "Cambiar el horario de clases", "Eliminar los exámenes", "Crear un equipo de fútbol"], correctAnswer: "Organizar reuniones mensuales" },
      { id: "social-organization-11-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un discurso", "Una receta", "Un correo electrónico", "Una crítica"], correctAnswer: "Un discurso" },
      { id: "social-organization-11-q5", type: "short", prompt: "¿Qué instalación quiere mejorar Irene?", correctAnswer: "el patio" },
    ],
    vocabulary: [
      { es: "instituto", en: "secondary school" },
      { es: "estudiantes", en: "students" },
      { es: "decisiones", en: "decisions" },
      { es: "organizar", en: "to organize" },
      { es: "compartir", en: "to share" },
      { es: "trabajar", en: "to work" },
      { es: "problemas", en: "problems" },
      { es: "conseguir", en: "to get / achieve" },
    ],
  },
  {
    id: "reading-sharing-planet-10",
    themeId: "sharing-planet",
    title: "Anuncio: Únete a la limpieza de la playa",
    textType: "Advertisement",
    level: "easy",
    bodyEs:
      "¡Este sábado, limpiamos la playa juntos!\n\n" +
      "¿Te preocupa el medioambiente? Únete a nuestra jornada de limpieza en la playa de El Palmar. Necesitamos voluntarios de todas las edades.\n\n" +
      "Quedamos a las nueve de la mañana en la entrada principal de la playa. La actividad dura tres horas y ofrecemos guantes, bolsas y agua gratis para todos los participantes.\n\n" +
      "No hace falta experiencia, solo ganas de ayudar. Al final de la jornada, habrá un pequeño almuerzo para todos los voluntarios.\n\n" +
      "Cada año recogemos más de doscientos kilos de basura, ¡y con tu ayuda podemos recoger más todavía!\n\n" +
      "Para apuntarte, escribe a limpiezaplaya@correo.com o simplemente preséntate el sábado. ¡Te esperamos!",
    questions: [
      { id: "sharing-planet-10-q1", type: "true-false", prompt: "Es necesario tener experiencia previa para participar.", correctAnswer: "false", justification: "\"No hace falta experiencia, solo ganas de ayudar\"" },
      { id: "sharing-planet-10-q2", type: "true-false", prompt: "La actividad dura todo el día.", correctAnswer: "false", justification: "\"La actividad dura tres horas\"" },
      { id: "sharing-planet-10-q3", type: "mcq", prompt: "¿A qué hora empieza la actividad?", options: ["A las nueve de la mañana", "A las doce del mediodía", "A las seis de la tarde", "A medianoche"], correctAnswer: "A las nueve de la mañana" },
      { id: "sharing-planet-10-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un anuncio", "Un informe científico", "Una entrada de diario", "Una entrevista"], correctAnswer: "Un anuncio" },
      { id: "sharing-planet-10-q5", type: "short", prompt: "¿Cuántos kilos de basura se recogen normalmente cada año?", correctAnswer: "más de doscientos kilos" },
    ],
    vocabulary: [
      { es: "preocupa", en: "worries" },
      { es: "voluntarios", en: "volunteers" },
      { es: "principal", en: "main" },
      { es: "participantes", en: "participants" },
      { es: "experiencia", en: "experience" },
      { es: "pequeño", en: "small" },
      { es: "doscientos", en: "two hundred" },
      { es: "simplemente", en: "simply" },
    ],
  },
  {
    id: "reading-sharing-planet-11",
    themeId: "sharing-planet",
    title: "Entrevista con una bióloga marina sobre el coral en peligro",
    textType: "Interview",
    level: "medium",
    bodyEs:
      "Hablamos con la doctora Marina Vidal, bióloga marina que lleva quince años estudiando los arrecifes de coral del Caribe, sobre la crisis que atraviesan estos ecosistemas.\n\n" +
      "— Doctora Vidal, ¿qué está pasando con los corales?\n\n" +
      "— La situación es preocupante. El aumento de la temperatura del mar provoca lo que llamamos \"blanqueamiento\": el coral expulsa las algas de las que depende para sobrevivir y, si el calor persiste demasiado tiempo, muere. En las últimas dos décadas hemos perdido casi la mitad de los arrecifes de coral del planeta.\n\n" +
      "— ¿Hay alguna solución?\n\n" +
      "— Existen varias líneas de trabajo. Algunos equipos cultivan corales resistentes al calor en laboratorios para después trasplantarlos al océano. También es fundamental reducir la contaminación costera y limitar la pesca en zonas de arrecife. Pero, sin duda, la medida más importante es frenar el cambio climático global.\n\n" +
      "— ¿Qué puede hacer una persona normal para ayudar?\n\n" +
      "— Cosas pequeñas suman: usar protector solar que no dañe el coral, apoyar políticas ambientales y, sobre todo, informarse y compartir lo que está pasando. Los arrecifes de coral sostienen a millones de especies marinas; si desaparecen, las consecuencias serán enormes para todo el océano.",
    questions: [
      { id: "sharing-planet-11-q1", type: "true-false", prompt: "Se ha perdido casi la mitad de los arrecifes de coral del planeta en las últimas dos décadas.", correctAnswer: "true", justification: "\"hemos perdido casi la mitad de los arrecifes de coral del planeta\"" },
      { id: "sharing-planet-11-q2", type: "true-false", prompt: "Según la doctora Vidal, no existe ninguna solución posible.", correctAnswer: "false", justification: "\"Existen varias líneas de trabajo\"" },
      { id: "sharing-planet-11-q3", type: "mcq", prompt: "¿Qué causa el 'blanqueamiento' del coral?", options: ["El aumento de la temperatura del mar", "La falta de peces", "El exceso de lluvia", "La luz de la luna"], correctAnswer: "El aumento de la temperatura del mar" },
      { id: "sharing-planet-11-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrevista", "Un anuncio", "Una postal", "Un poema"], correctAnswer: "Una entrevista" },
      { id: "sharing-planet-11-q5", type: "short", prompt: "¿Cuántos años lleva la doctora Vidal estudiando los arrecifes?", correctAnswer: "quince años" },
    ],
    vocabulary: [
      { es: "hablamos", en: "we speak / talk" },
      { es: "situación", en: "situation" },
      { es: "demasiado", en: "too much" },
      { es: "solución", en: "solution" },
      { es: "contaminación", en: "pollution" },
      { es: "importante", en: "important" },
      { es: "climático", en: "climate (adj.)" },
      { es: "compartir", en: "to share" },
    ],
  },
  {
    id: "reading-identities-13",
    themeId: "identities",
    title: "Correo: Solicitud de cambio de horario con la orientadora",
    textType: "Formal email",
    level: "easy",
    bodyEs:
      "Estimada señora Torres:\n\n" +
      "Le escribo para pedir una cita con usted esta semana. Me gustaría hablar sobre cómo organizar mejor mi horario de estudio, porque últimamente me siento muy estresado y no sé cómo manejar tantas tareas al mismo tiempo.\n\n" +
      "Mis clases de la tarde son las que más problemas me causan, ya que llego cansado después del entrenamiento de baloncesto. He pensado que tal vez podría cambiar la hora de una de mis asignaturas optativas, pero no estoy seguro de cómo hacerlo.\n\n" +
      "¿Podría reunirse conmigo el jueves por la mañana, antes de que empiecen las clases? Le agradecería mucho su ayuda, ya que confío en sus consejos.\n\n" +
      "Atentamente,\nDaniel Herrera",
    questions: [
      { id: "identities-13-q1", type: "true-false", prompt: "Daniel se siente estresado por sus tareas.", correctAnswer: "true", justification: "\"últimamente me siento muy estresado\"" },
      { id: "identities-13-q2", type: "true-false", prompt: "Daniel quiere reunirse con la orientadora el lunes.", correctAnswer: "false", justification: "\"¿Podría reunirse conmigo el jueves por la mañana...?\"" },
      { id: "identities-13-q3", type: "mcq", prompt: "¿Por qué llega cansado Daniel a las clases de la tarde?", options: ["Por el entrenamiento de baloncesto", "Por trabajar por las noches", "Por dormir poco", "Por hacer los deberes tarde"], correctAnswer: "Por el entrenamiento de baloncesto" },
      { id: "identities-13-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un correo formal", "Una entrada de diario", "Un anuncio", "Una reseña"], correctAnswer: "Un correo formal" },
      { id: "identities-13-q5", type: "short", prompt: "¿Qué deporte practica Daniel?", correctAnswer: "baloncesto" },
    ],
    vocabulary: [
      { es: "escribo", en: "I write" },
      { es: "organizar", en: "to organize" },
      { es: "horario", en: "schedule" },
      { es: "estudio", en: "study" },
      { es: "problemas", en: "problems" },
      { es: "cambiar", en: "to change" },
      { es: "hacerlo", en: "to do it" },
      { es: "atentamente", en: "sincerely (letter closing)" },
    ],
  },
  {
    id: "reading-identities-14",
    themeId: "identities",
    title: "Guía: Cómo llevar un diario personal para conocerte mejor",
    textType: "Instructional guide",
    level: "medium",
    bodyEs:
      "Llevar un diario personal es una de las formas más sencillas de entender mejor tus propios pensamientos y emociones. Aquí tienes algunos pasos para empezar.\n\n" +
      "Primero, elige un momento fijo del día, como antes de dormir, para escribir durante diez minutos sin interrupciones. No hace falta que sea perfecto; lo importante es la honestidad, no la ortografía.\n\n" +
      "Segundo, en lugar de solo describir lo que pasó, pregúntate cómo te hizo sentir cada situación y por qué reaccionaste de esa manera. Esta reflexión es la que realmente ayuda a conocerte mejor.\n\n" +
      "Tercero, relee tus entradas antiguas de vez en cuando. Notarás patrones en tu forma de pensar que quizás no habías notado antes, y verás cuánto has cambiado con el tiempo.\n\n" +
      "Por último, no te preocupes si algunos días no tienes nada que escribir. Lo importante es la constancia, no la perfección.",
    questions: [
      { id: "identities-14-q1", type: "true-false", prompt: "Según la guía, la ortografía es lo más importante al escribir.", correctAnswer: "false", justification: "\"no hace falta que sea perfecto; lo importante es la honestidad, no la ortografía\"" },
      { id: "identities-14-q2", type: "true-false", prompt: "Se recomienda releer las entradas antiguas de vez en cuando.", correctAnswer: "true", justification: "\"relee tus entradas antiguas de vez en cuando\"" },
      { id: "identities-14-q3", type: "mcq", prompt: "¿Qué se debe hacer en el segundo paso?", options: ["Preguntarse cómo te hizo sentir cada situación", "Escribir solo los hechos, sin emociones", "Compartir el diario con amigos", "Escribir una hora cada día"], correctAnswer: "Preguntarse cómo te hizo sentir cada situación" },
      { id: "identities-14-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una guía instructiva", "Un poema", "Una entrevista", "Un anuncio"], correctAnswer: "Una guía instructiva" },
      { id: "identities-14-q5", type: "short", prompt: "¿Cuántos minutos se recomienda escribir cada día?", correctAnswer: "diez minutos" },
    ],
    vocabulary: [
      { es: "entender", en: "to understand" },
      { es: "empezar", en: "to begin" },
      { es: "primero", en: "first" },
      { es: "momento", en: "moment" },
      { es: "minutos", en: "minutes" },
      { es: "importante", en: "important" },
      { es: "situación", en: "situation" },
      { es: "realmente", en: "really" },
    ],
  },
  {
    id: "reading-identities-15",
    themeId: "identities",
    title: "La generación que creció con una identidad digital",
    textType: "Magazine article",
    level: "hard",
    bodyEs:
      "A diferencia de generaciones anteriores, los jóvenes de hoy han construido una parte importante de su identidad en internet desde edades cada vez más tempranas. Perfiles, publicaciones y fotos forman un archivo público de quiénes son —o de quiénes quieren aparentar ser— ante el mundo.\n\n" +
      "Según varios estudios recientes, esta exposición constante genera una presión particular: la necesidad de mantener una imagen coherente en todas las plataformas, incluso cuando la identidad de un adolescente todavía está en pleno desarrollo. Los psicólogos advierten que esta discrepancia entre el \"yo real\" y el \"yo digital\" puede generar ansiedad significativa.\n\n" +
      "Sin embargo, no todo son desventajas. Para muchos jóvenes, especialmente aquellos que se sienten aislados en su entorno inmediato, internet ofrece comunidades donde pueden explorar aspectos de su identidad —orientación, intereses, valores— con mayor libertad que en su vida cotidiana.\n\n" +
      "La clave, según los expertos, no está en rechazar la vida digital, sino en enseñar a los jóvenes a distinguir entre la representación curada de una persona en línea y la persona completa y compleja que hay detrás de la pantalla.",
    questions: [
      { id: "identities-15-q1", type: "true-false", prompt: "Según el artículo, la identidad digital siempre es idéntica a la identidad real.", correctAnswer: "false", justification: "\"la discrepancia entre el 'yo real' y el 'yo digital' puede generar ansiedad significativa\"" },
      { id: "identities-15-q2", type: "true-false", prompt: "Internet puede ofrecer comunidades útiles para jóvenes aislados.", correctAnswer: "true", justification: "\"internet ofrece comunidades donde pueden explorar aspectos de su identidad... con mayor libertad\"" },
      { id: "identities-15-q3", type: "mcq", prompt: "Según los expertos, ¿cuál es la clave para manejar la identidad digital?", options: ["Distinguir entre la representación en línea y la persona completa", "Eliminar todas las redes sociales", "Publicar solo contenido perfecto", "Evitar hablar de la vida digital"], correctAnswer: "Distinguir entre la representación en línea y la persona completa" },
      { id: "identities-15-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un artículo de revista", "Una postal", "Un correo informal", "Un menú"], correctAnswer: "Un artículo de revista" },
      { id: "identities-15-q5", type: "short", prompt: "¿Qué genera la discrepancia entre el 'yo real' y el 'yo digital', según los psicólogos?", correctAnswer: "ansiedad" },
    ],
    vocabulary: [
      { es: "diferencia", en: "difference" },
      { es: "importante", en: "important" },
      { es: "identidad", en: "identity" },
      { es: "internet", en: "internet" },
      { es: "constante", en: "constant" },
      { es: "necesidad", en: "need" },
      { es: "adolescente", en: "teenager" },
      { es: "especialmente", en: "especially" },
    ],
  },
  {
    id: "reading-identities-16",
    themeId: "identities",
    title: "Reseña: 'Encontrarme a mí misma', de Valeria Núñez",
    textType: "Review",
    level: "medium",
    bodyEs:
      "'Encontrarme a mí misma' es un libro que toda persona adolescente debería leer al menos una vez. La autora, Valeria Núñez, combina su propia experiencia con la ansiedad social con consejos prácticos respaldados por la psicología.\n\n" +
      "Lo que más destaca del libro no es la teoría, sino los ejercicios al final de cada capítulo: pequeñas actividades de reflexión que realmente invitan al lector a pensar en su propia identidad, en lugar de limitarse a leer pasivamente.\n\n" +
      "Mi única crítica es que algunos capítulos se sienten repetitivos, especialmente los centrados en la autoestima, que podrían haberse combinado en uno solo. Aun así, esto no resta valor al mensaje central del libro: nadie tiene que encajar en un solo molde para sentirse completo.\n\n" +
      "En resumen, recomiendo este libro a cualquier joven que esté pasando por un momento de confusión sobre quién es o quién quiere llegar a ser. Le doy cuatro estrellas de cinco.",
    questions: [
      { id: "identities-16-q1", type: "true-false", prompt: "El libro incluye ejercicios de reflexión al final de cada capítulo.", correctAnswer: "true", justification: "\"los ejercicios al final de cada capítulo: pequeñas actividades de reflexión\"" },
      { id: "identities-16-q2", type: "true-false", prompt: "Según la reseña, todos los capítulos del libro son igual de originales.", correctAnswer: "false", justification: "\"algunos capítulos se sienten repetitivos\"" },
      { id: "identities-16-q3", type: "mcq", prompt: "¿Cuántas estrellas de cinco le da el autor de la reseña al libro?", options: ["Cuatro", "Cinco", "Tres", "Dos"], correctAnswer: "Cuatro" },
      { id: "identities-16-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una reseña", "Un informe oficial", "Una receta", "Un anuncio"], correctAnswer: "Una reseña" },
      { id: "identities-16-q5", type: "short", prompt: "¿Cómo se llama la autora del libro reseñado?", correctAnswer: "Valeria Núñez" },
    ],
    vocabulary: [
      { es: "adolescente", en: "teenager" },
      { es: "experiencia", en: "experience" },
      { es: "actividades", en: "activities" },
      { es: "realmente", en: "really" },
      { es: "identidad", en: "identity" },
      { es: "especialmente", en: "especially" },
      { es: "recomiendo", en: "I recommend" },
      { es: "cualquier", en: "any" },
    ],
  },
  {
    id: "reading-identities-17",
    themeId: "identities",
    title: "Publicación: Dejar de compararme con los demás",
    textType: "Social media post",
    level: "easy",
    bodyEs:
      "Hoy quiero compartir algo personal. Durante mucho tiempo, comparaba mi vida con la de mis amigos en las redes sociales y siempre sentía que yo no era suficiente.\n\n" +
      "Hace unos meses decidí dejar de seguir cuentas que me hacían sentir mal conmigo misma. Al principio fue raro, pero poco a poco empecé a sentirme más tranquila y más contenta con mi propia vida.\n\n" +
      "Ahora entiendo que las fotos perfectas de internet casi nunca muestran la realidad completa. Todos tenemos días difíciles, aunque no los publiquemos.\n\n" +
      "Si alguien más se siente así, quiero decirle que no está solo. Aprender a quererte a ti mismo lleva tiempo, pero vale totalmente la pena. 💛 #saludmental #autoestima",
    questions: [
      { id: "identities-17-q1", type: "true-false", prompt: "La autora dejó de seguir cuentas que la hacían sentir mal.", correctAnswer: "true", justification: "\"decidí dejar de seguir cuentas que me hacían sentir mal conmigo misma\"" },
      { id: "identities-17-q2", type: "true-false", prompt: "Según la autora, las fotos de internet siempre muestran la realidad completa.", correctAnswer: "false", justification: "\"las fotos perfectas de internet casi nunca muestran la realidad completa\"" },
      { id: "identities-17-q3", type: "mcq", prompt: "¿Cómo se sintió la autora después de dejar de seguir esas cuentas?", options: ["Más tranquila y contenta", "Más triste", "Sin cambios", "Más ansiosa"], correctAnswer: "Más tranquila y contenta" },
      { id: "identities-17-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una publicación en redes sociales", "Un informe oficial", "Una carta formal", "Un menú"], correctAnswer: "Una publicación en redes sociales" },
      { id: "identities-17-q5", type: "short", prompt: "¿Qué decidió hacer la autora hace unos meses?", correctAnswer: "dejar de seguir cuentas que la hacían sentir mal" },
    ],
    vocabulary: [
      { es: "compartir", en: "to share" },
      { es: "sociales", en: "social" },
      { es: "principio", en: "beginning" },
      { es: "sentirme", en: "to feel (myself)" },
      { es: "entiendo", en: "I understand" },
      { es: "internet", en: "internet" },
      { es: "realidad", en: "reality" },
      { es: "totalmente", en: "totally" },
    ],
  },
  {
    id: "reading-identities-18",
    themeId: "identities",
    title: "Mi lucha silenciosa con el síndrome del impostor",
    textType: "Blog post",
    level: "hard",
    bodyEs:
      "Durante años pensé que el éxito académico eliminaría la sensación constante de que, en cualquier momento, alguien descubriría que en realidad no soy tan capaz como parezco. Ahora sé que tiene nombre: síndrome del impostor.\n\n" +
      "Cuando conseguí una beca competitiva el año pasado, en lugar de sentirme orgullosa, pasé semanas convencida de que había sido un error del comité de selección. Cada elogio de mis profesores lo atribuía a la suerte, nunca a mi propio esfuerzo.\n\n" +
      "Lo que finalmente empezó a cambiar las cosas fue hablar abiertamente del tema con una amiga que, para mi sorpresa, admitió sentir exactamente lo mismo a pesar de ser una de las estudiantes más brillantes de mi clase. Descubrir que no estaba sola fue liberador.\n\n" +
      "Si hay algo que he aprendido es que reconocer tus propios logros, sin atribuirlos constantemente a factores externos, no es arrogancia: es simplemente justicia contigo mismo. Sigo trabajando en ello, pero al menos ahora sé que no soy la única que lucha con esto en silencio.",
    questions: [
      { id: "identities-18-q1", type: "true-false", prompt: "La autora se sintió orgullosa inmediatamente después de conseguir la beca.", correctAnswer: "false", justification: "\"en lugar de sentirme orgullosa, pasé semanas convencida de que había sido un error\"" },
      { id: "identities-18-q2", type: "true-false", prompt: "Hablar con una amiga ayudó a la autora a sentirse menos sola.", correctAnswer: "true", justification: "\"Descubrir que no estaba sola fue liberador\"" },
      { id: "identities-18-q3", type: "mcq", prompt: "¿Qué atribuía la autora a la suerte en lugar de a su propio esfuerzo?", options: ["Los elogios de sus profesores", "Sus notas bajas", "Sus amistades", "Sus vacaciones"], correctAnswer: "Los elogios de sus profesores" },
      { id: "identities-18-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrada de blog", "Un informe oficial", "Un anuncio publicitario", "Una receta"], correctAnswer: "Una entrada de blog" },
      { id: "identities-18-q5", type: "short", prompt: "¿Cómo se llama la condición psicológica descrita en el texto?", correctAnswer: "síndrome del impostor" },
    ],
    vocabulary: [
      { es: "constante", en: "constant" },
      { es: "cualquier", en: "any" },
      { es: "momento", en: "moment" },
      { es: "alguien", en: "someone" },
      { es: "realidad", en: "reality" },
      { es: "sentirme", en: "to feel (myself)" },
      { es: "estudiantes", en: "students" },
      { es: "simplemente", en: "simply" },
    ],
  },
  {
    id: "reading-identities-19",
    themeId: "identities",
    title: "Foro: ¿Cómo aceptar tu propio cuerpo?",
    textType: "Forum post",
    level: "medium",
    bodyEs:
      "Publicado por Marcos_R\n\n" +
      "Hola a todos. Llevo un tiempo luchando con la forma en que veo mi propio cuerpo y quería preguntar si alguien más ha pasado por algo parecido y cómo lo ha superado.\n\n" +
      "Creo que gran parte del problema viene de compararme constantemente con los cuerpos que veo en anuncios y en redes sociales, que sé que muchas veces están editados, pero aun así me afectan.\n\n" +
      "Hace poco empecé a hacer ejercicio no para \"verme mejor\", sino para sentirme con más energía, y curiosamente eso ha cambiado un poco mi forma de pensar. Todavía tengo días malos, pero son menos frecuentes que antes.\n\n" +
      "¿Alguien tiene consejos que realmente le hayan funcionado? Gracias de antemano por leer esto.",
    questions: [
      { id: "identities-19-q1", type: "true-false", prompt: "Marcos empezó a hacer ejercicio para verse como los modelos de los anuncios.", correctAnswer: "false", justification: "\"empecé a hacer ejercicio no para 'verme mejor', sino para sentirme con más energía\"" },
      { id: "identities-19-q2", type: "true-false", prompt: "Marcos todavía tiene días difíciles, aunque menos frecuentes.", correctAnswer: "true", justification: "\"Todavía tengo días malos, pero son menos frecuentes que antes\"" },
      { id: "identities-19-q3", type: "mcq", prompt: "¿Qué compara Marcos con su propio cuerpo?", options: ["Los cuerpos que ve en anuncios y redes sociales", "Los cuerpos de sus amigos cercanos", "Fotos antiguas de sí mismo", "Personajes de películas"], correctAnswer: "Los cuerpos que ve en anuncios y redes sociales" },
      { id: "identities-19-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una publicación de un foro", "Un informe oficial", "Una entrevista", "Un menú"], correctAnswer: "Una publicación de un foro" },
      { id: "identities-19-q5", type: "short", prompt: "¿Qué pide Marcos al final de su publicación?", correctAnswer: "consejos" },
    ],
    vocabulary: [
      { es: "publicado", en: "posted / published" },
      { es: "alguien", en: "someone" },
      { es: "problema", en: "problem" },
      { es: "sociales", en: "social" },
      { es: "sentirme", en: "to feel (myself)" },
      { es: "energía", en: "energy" },
      { es: "realmente", en: "really" },
      { es: "antemano", en: "beforehand (de antemano)" },
    ],
  },
  {
    id: "reading-identities-20",
    themeId: "identities",
    title: "Entrevista con una psicóloga sobre la identidad en la adolescencia",
    textType: "Interview",
    level: "medium",
    bodyEs:
      "Hablamos con la psicóloga Elena Campos sobre los principales retos que enfrentan los adolescentes al construir su identidad.\n\n" +
      "— Doctora Campos, ¿por qué es tan difícil la adolescencia en términos de identidad?\n\n" +
      "— Es la etapa en la que el cerebro todavía se está desarrollando mientras la persona intenta responder preguntas enormes: quién es, qué valores tiene, a qué grupo pertenece. Es normal que haya confusión e incluso contradicciones.\n\n" +
      "— ¿Qué papel juegan los amigos en este proceso?\n\n" +
      "— Un papel fundamental. Los adolescentes empiezan a definirse tanto por similitud como por diferencia con su grupo de amigos. Sin embargo, es importante que aprendan a mantener su propia voz dentro del grupo, en lugar de simplemente imitar a los demás.\n\n" +
      "— ¿Algún consejo para los padres?\n\n" +
      "— Escuchar sin juzgar. Muchos adolescentes dejan de compartir sus dudas porque temen una reacción negativa. Cuanto más seguro se sienta un joven de que puede hablar abiertamente, más fácil será su proceso de encontrarse a sí mismo.",
    questions: [
      { id: "identities-20-q1", type: "true-false", prompt: "Según la doctora Campos, es normal que los adolescentes tengan contradicciones durante esta etapa.", correctAnswer: "true", justification: "\"Es normal que haya confusión e incluso contradicciones\"" },
      { id: "identities-20-q2", type: "true-false", prompt: "La doctora dice que los amigos no tienen ninguna influencia en la identidad adolescente.", correctAnswer: "false", justification: "\"Un papel fundamental\"" },
      { id: "identities-20-q3", type: "mcq", prompt: "¿Qué consejo da la doctora Campos a los padres?", options: ["Escuchar sin juzgar", "Prohibir las redes sociales", "Elegir los amigos de sus hijos", "Ignorar sus problemas"], correctAnswer: "Escuchar sin juzgar" },
      { id: "identities-20-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrevista", "Un anuncio", "Una postal", "Un poema"], correctAnswer: "Una entrevista" },
      { id: "identities-20-q5", type: "short", prompt: "¿Cómo se llama la psicóloga entrevistada?", correctAnswer: "Elena Campos" },
    ],
    vocabulary: [
      { es: "hablamos", en: "we speak / talk" },
      { es: "adolescentes", en: "teenagers" },
      { es: "identidad", en: "identity" },
      { es: "difícil", en: "difficult" },
      { es: "diferencia", en: "difference" },
      { es: "importante", en: "important" },
      { es: "simplemente", en: "simply" },
      { es: "compartir", en: "to share" },
    ],
  },
  {
    id: "reading-experiences-12",
    themeId: "experiences",
    title: "Cada vez más jóvenes eligen un año sabático antes de la universidad",
    textType: "Newspaper article",
    level: "medium",
    bodyEs:
      "Un número creciente de estudiantes recién graduados de bachillerato está optando por tomarse un año sabático antes de comenzar la universidad, según un informe publicado esta semana por el Ministerio de Educación.\n\n" +
      "Las razones varían: algunos quieren trabajar y ahorrar dinero, otros prefieren viajar y conocer otras culturas, y muchos simplemente necesitan tiempo para decidir qué carrera estudiar con más seguridad.\n\n" +
      "Los expertos en orientación académica señalan que, contrariamente a lo que muchos padres temen, los estudiantes que se toman un año sabático bien planificado suelen tener mejor rendimiento universitario, ya que llegan a sus estudios con más madurez y motivación.\n\n" +
      "Sin embargo, advierten que un año sabático sin ningún tipo de estructura —sin trabajo, estudio o voluntariado— puede tener el efecto contrario. La clave, coinciden, está en la planificación.",
    questions: [
      { id: "experiences-12-q1", type: "true-false", prompt: "Según el artículo, todos los estudiantes se toman un año sabático para viajar.", correctAnswer: "false", justification: "\"Las razones varían: algunos quieren trabajar... otros prefieren viajar... y muchos simplemente necesitan tiempo\"" },
      { id: "experiences-12-q2", type: "true-false", prompt: "Los expertos afirman que un año sabático sin estructura puede tener efectos negativos.", correctAnswer: "true", justification: "\"un año sabático sin ningún tipo de estructura... puede tener el efecto contrario\"" },
      { id: "experiences-12-q3", type: "mcq", prompt: "Según los expertos, ¿qué suelen tener los estudiantes que planifican bien su año sabático?", options: ["Mejor rendimiento universitario", "Peores notas", "Menos motivación", "Más dificultades económicas"], correctAnswer: "Mejor rendimiento universitario" },
      { id: "experiences-12-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un artículo de periódico", "Una carta personal", "Un poema", "Un menú"], correctAnswer: "Un artículo de periódico" },
      { id: "experiences-12-q5", type: "short", prompt: "¿Quién publicó el informe mencionado en el artículo?", correctAnswer: "el Ministerio de Educación" },
    ],
    vocabulary: [
      { es: "estudiantes", en: "students" },
      { es: "publicado", en: "posted / published" },
      { es: "educación", en: "education" },
      { es: "trabajar", en: "to work" },
      { es: "culturas", en: "cultures" },
      { es: "simplemente", en: "simply" },
      { es: "expertos", en: "experts" },
      { es: "voluntariado", en: "volunteering" },
    ],
  },
  {
    id: "reading-experiences-13",
    themeId: "experiences",
    title: "Discurso de graduación: lo que el instituto me enseñó de verdad",
    textType: "Speech",
    level: "hard",
    bodyEs:
      "Buenas tardes a todos: profesores, familias, y sobre todo, a mis compañeros de promoción.\n\n" +
      "Cuando empezamos este viaje hace varios años, ninguno de nosotros imaginaba todo lo que pasaríamos juntos: los exámenes que nos quitaron el sueño, las amistades que se formaron en los pasillos, y también las despedidas y los cambios que nos tocó enfrentar por el camino.\n\n" +
      "Si me preguntan qué aprendí realmente en el instituto, no sería solo lo que aparece en los boletines de notas. Aprendí que el fracaso no es el opuesto del éxito, sino parte necesaria de él. Aprendí que pedir ayuda no es una debilidad, sino una forma de valentía que a veces cuesta más que resolver las cosas solo.\n\n" +
      "A mis compañeros, gracias por cada momento compartido. A nuestros profesores, gracias por creer en nosotros incluso cuando nosotros mismos dudábamos. Y ahora, mientras cada uno de nosotros toma caminos distintos, les deseo que nunca dejen de hacerse preguntas grandes sobre quiénes quieren llegar a ser.\n\n" +
      "Muchas gracias a todos.",
    questions: [
      { id: "experiences-13-q1", type: "true-false", prompt: "Según el orador, el fracaso es el opuesto del éxito.", correctAnswer: "false", justification: "\"el fracaso no es el opuesto del éxito, sino parte necesaria de él\"" },
      { id: "experiences-13-q2", type: "true-false", prompt: "El orador agradece a sus profesores por creer en los estudiantes.", correctAnswer: "true", justification: "\"gracias por creer en nosotros incluso cuando nosotros mismos dudábamos\"" },
      { id: "experiences-13-q3", type: "mcq", prompt: "Según el discurso, ¿qué aprendió el orador sobre pedir ayuda?", options: ["Que es una forma de valentía", "Que es una debilidad", "Que nunca es necesario", "Que solo los débiles lo hacen"], correctAnswer: "Que es una forma de valentía" },
      { id: "experiences-13-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un discurso", "Una receta", "Un correo electrónico", "Un anuncio"], correctAnswer: "Un discurso" },
      { id: "experiences-13-q5", type: "short", prompt: "¿A quién se dirige el orador al principio del discurso, además de a sus compañeros?", correctAnswer: "profesores y familias" },
    ],
    vocabulary: [
      { es: "familias", en: "families" },
      { es: "compañeros", en: "classmates / colleagues" },
      { es: "imaginaba", en: "imagined" },
      { es: "aprendí", en: "I learned" },
      { es: "realmente", en: "really" },
      { es: "instituto", en: "secondary school" },
      { es: "resolver", en: "to solve" },
      { es: "distintos", en: "different" },
    ],
  },
  {
    id: "reading-experiences-14",
    themeId: "experiences",
    title: "Entrevista: Un año de intercambio en Alemania",
    textType: "Interview",
    level: "medium",
    bodyEs:
      "Hablamos con Lucía Fernández, de diecisiete años, que acaba de regresar de un año de intercambio escolar en Múnich, Alemania.\n\n" +
      "— Lucía, ¿qué fue lo más difícil al principio?\n\n" +
      "— Sin duda, el idioma. Aunque había estudiado alemán durante dos años, cuando llegué apenas entendía las conversaciones cotidianas. Los primeros dos meses fueron agotadores mentalmente.\n\n" +
      "— ¿Y qué fue lo mejor de la experiencia?\n\n" +
      "— Mi familia de acogida. Me trataron como a una hija más desde el primer día, y eso hizo que me sintiera cómoda mucho más rápido de lo que esperaba.\n\n" +
      "— ¿Recomendarías esta experiencia a otros estudiantes?\n\n" +
      "— Totalmente, aunque advertiría que hay momentos muy duros, sobre todo la nostalgia por la familia y los amigos. Pero superar esos momentos es parte de lo que hace que la experiencia valga tanto la pena.",
    questions: [
      { id: "experiences-14-q1", type: "true-false", prompt: "Lucía dice que el idioma fue lo más fácil al principio.", correctAnswer: "false", justification: "\"Sin duda, el idioma... fueron agotadores mentalmente\"" },
      { id: "experiences-14-q2", type: "true-false", prompt: "La familia de acogida de Lucía la trató muy bien.", correctAnswer: "true", justification: "\"Me trataron como a una hija más desde el primer día\"" },
      { id: "experiences-14-q3", type: "mcq", prompt: "¿Cuánto tiempo había estudiado alemán Lucía antes del intercambio?", options: ["Dos años", "Un mes", "Diez años", "Nunca lo había estudiado"], correctAnswer: "Dos años" },
      { id: "experiences-14-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrevista", "Una postal", "Un informe oficial", "Un menú"], correctAnswer: "Una entrevista" },
      { id: "experiences-14-q5", type: "short", prompt: "¿En qué ciudad alemana vivió Lucía?", correctAnswer: "Múnich" },
    ],
    vocabulary: [
      { es: "hablamos", en: "we speak / talk" },
      { es: "diecisiete", en: "seventeen" },
      { es: "intercambio", en: "exchange" },
      { es: "escolar", en: "school (adj.)" },
      { es: "principio", en: "beginning" },
      { es: "experiencia", en: "experience" },
      { es: "estudiantes", en: "students" },
      { es: "totalmente", en: "totally" },
    ],
  },
  {
    id: "reading-experiences-15",
    themeId: "experiences",
    title: "Guía: Cómo preparar la maleta para un intercambio escolar",
    textType: "Instructional guide",
    level: "easy",
    bodyEs:
      "¿Vas a hacer un intercambio escolar pronto? Sigue estos consejos sencillos para preparar tu maleta sin olvidar nada importante.\n\n" +
      "Primero, no lleves demasiada ropa. La mayoría de los estudiantes llevan mucho más de lo necesario. Es mejor llevar ropa versátil que puedas combinar de varias formas.\n\n" +
      "Segundo, incluye algún regalo pequeño y típico de tu país para tu familia de acogida. Un detalle así ayuda mucho a crear una buena primera impresión.\n\n" +
      "Tercero, no olvides los documentos importantes: pasaporte, seguro médico y los contactos de emergencia, tanto de tu familia real como de la organización del intercambio.\n\n" +
      "Por último, deja espacio libre en la maleta. Seguro que querrás traer recuerdos y regalos cuando vuelvas a casa.",
    questions: [
      { id: "experiences-15-q1", type: "true-false", prompt: "La guía recomienda llevar mucha ropa para el intercambio.", correctAnswer: "false", justification: "\"no lleves demasiada ropa... llevan mucho más de lo necesario\"" },
      { id: "experiences-15-q2", type: "true-false", prompt: "Se recomienda llevar un regalo típico del país de origen.", correctAnswer: "true", justification: "\"incluye algún regalo pequeño y típico de tu país\"" },
      { id: "experiences-15-q3", type: "mcq", prompt: "¿Qué documento se menciona como importante para llevar?", options: ["El pasaporte", "El carné de conducir", "El certificado de nacimiento", "La tarjeta de la biblioteca"], correctAnswer: "El pasaporte" },
      { id: "experiences-15-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una guía instructiva", "Un poema", "Una crítica de cine", "Una carta personal"], correctAnswer: "Una guía instructiva" },
      { id: "experiences-15-q5", type: "short", prompt: "¿Por qué se recomienda dejar espacio libre en la maleta?", correctAnswer: "para traer recuerdos y regalos al volver" },
    ],
    vocabulary: [
      { es: "intercambio", en: "exchange" },
      { es: "escolar", en: "school (adj.)" },
      { es: "preparar", en: "to prepare" },
      { es: "importante", en: "important" },
      { es: "primero", en: "first" },
      { es: "estudiantes", en: "students" },
      { es: "importantes", en: "important (pl.)" },
      { es: "organización", en: "organization" },
    ],
  },
  {
    id: "reading-experiences-16",
    themeId: "experiences",
    title: "¿Deberían los institutos organizar más viajes educativos?",
    textType: "Opinion column",
    level: "hard",
    bodyEs:
      "Cada vez que se propone un nuevo viaje educativo en mi instituto, surge el mismo debate: ¿vale la pena el coste, el tiempo lectivo perdido y la logística, frente a lo que realmente aprenden los estudiantes?\n\n" +
      "En mi opinión, la respuesta es un rotundo sí, aunque con matices. Un viaje bien planificado —vinculado directamente al currículo, con objetivos claros y actividades reflexivas— enseña más en una semana que meses de clases tradicionales sobre el mismo tema. Ver un monumento histórico en persona, o practicar un idioma con hablantes nativos, deja una huella que ningún libro de texto puede igualar.\n\n" +
      "Dicho esto, comparto la preocupación de quienes señalan que estos viajes pueden excluir a estudiantes de familias con menos recursos económicos, agravando desigualdades ya existentes dentro del aula.\n\n" +
      "Por eso, mi propuesta no es eliminar los viajes educativos, sino garantizar becas y ayudas suficientes para que ningún estudiante se quede fuera por motivos económicos. Solo así estos viajes cumplirán verdaderamente su propósito educativo, en lugar de convertirse en un privilegio para unos pocos.",
    questions: [
      { id: "experiences-16-q1", type: "true-false", prompt: "El autor piensa que los viajes educativos nunca valen la pena.", correctAnswer: "false", justification: "\"la respuesta es un rotundo sí, aunque con matices\"" },
      { id: "experiences-16-q2", type: "true-false", prompt: "El autor está preocupado por la exclusión de estudiantes con menos recursos.", correctAnswer: "true", justification: "\"estos viajes pueden excluir a estudiantes de familias con menos recursos económicos\"" },
      { id: "experiences-16-q3", type: "mcq", prompt: "¿Cuál es la propuesta final del autor?", options: ["Garantizar becas y ayudas suficientes", "Eliminar todos los viajes educativos", "Hacer los viajes obligatorios", "Cobrar más por los viajes"], correctAnswer: "Garantizar becas y ayudas suficientes" },
      { id: "experiences-16-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una columna de opinión", "Un correo formal", "Una receta", "Una postal"], correctAnswer: "Una columna de opinión" },
      { id: "experiences-16-q5", type: "short", prompt: "Según el autor, ¿qué tipo de viaje enseña más que meses de clases tradicionales?", correctAnswer: "un viaje bien planificado" },
    ],
    vocabulary: [
      { es: "instituto", en: "secondary school" },
      { es: "realmente", en: "really" },
      { es: "estudiantes", en: "students" },
      { es: "respuesta", en: "answer / reply" },
      { es: "actividades", en: "activities" },
      { es: "familias", en: "families" },
      { es: "educativos", en: "educational" },
      { es: "estudiante", en: "student" },
    ],
  },
  {
    id: "reading-experiences-17",
    themeId: "experiences",
    title: "Informe sobre el impacto de los programas de intercambio estudiantil",
    textType: "Official report",
    level: "hard",
    bodyEs:
      "El presente informe, elaborado por la Asociación Nacional de Programas de Intercambio, analiza los efectos académicos y personales de los programas de intercambio escolar entre estudiantes de secundaria durante los últimos cinco años.\n\n" +
      "Los datos muestran que el noventa y dos por ciento de los participantes reporta una mejora significativa en su dominio del idioma extranjero, mientras que el ochenta y cinco por ciento afirma haber desarrollado mayor independencia y capacidad de adaptación.\n\n" +
      "En cuanto al rendimiento académico general, el informe no encontró diferencias significativas entre estudiantes que participaron en un intercambio y aquellos que no lo hicieron, lo cual contradice la creencia popular de que estos programas perjudican las notas.\n\n" +
      "Entre las recomendaciones, la Asociación sugiere ampliar el acceso a becas para familias con recursos limitados, ya que actualmente solo el quince por ciento de los participantes proviene de este grupo socioeconómico, una cifra considerada insuficiente.\n\n" +
      "El informe completo, con datos desglosados por país de destino, estará disponible en la página web de la Asociación a partir de la próxima semana.",
    questions: [
      { id: "experiences-17-q1", type: "true-false", prompt: "El noventa y dos por ciento de los participantes mejoró su dominio del idioma.", correctAnswer: "true", justification: "\"el noventa y dos por ciento de los participantes reporta una mejora significativa en su dominio del idioma\"" },
      { id: "experiences-17-q2", type: "true-false", prompt: "El informe encontró que los intercambios perjudican claramente las notas de los estudiantes.", correctAnswer: "false", justification: "\"no encontró diferencias significativas entre estudiantes que participaron en un intercambio y aquellos que no lo hicieron\"" },
      { id: "experiences-17-q3", type: "mcq", prompt: "¿Qué porcentaje de participantes proviene de familias con recursos limitados?", options: ["15%", "92%", "85%", "50%"], correctAnswer: "15%" },
      { id: "experiences-17-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un informe oficial", "Una carta personal", "Un anuncio", "Una reseña"], correctAnswer: "Un informe oficial" },
      { id: "experiences-17-q5", type: "short", prompt: "¿Quién elaboró este informe?", correctAnswer: "la Asociación Nacional de Programas de Intercambio" },
    ],
    vocabulary: [
      { es: "asociación", en: "association" },
      { es: "programas", en: "programs" },
      { es: "intercambio", en: "exchange" },
      { es: "personales", en: "personal" },
      { es: "estudiantes", en: "students" },
      { es: "participantes", en: "participants" },
      { es: "recomendaciones", en: "recommendations" },
      { es: "actualmente", en: "currently" },
    ],
  },
  {
    id: "reading-experiences-18",
    themeId: "experiences",
    title: "Diario: Mi primer día como monitor de campamento",
    textType: "Diary entry",
    level: "easy",
    bodyEs:
      "Querido diario:\n\n" +
      "Hoy empecé mi primer día como monitor voluntario en el campamento de verano para niños de ocho a diez años. Estaba muy nervioso porque nunca había cuidado de tantos niños a la vez.\n\n" +
      "Al principio, un grupo de niños no dejaba de hacer preguntas y correr por todos lados. Pensé que sería un desastre total. Pero después de la primera actividad, un juego de equipo en el bosque, todos empezaron a colaborar y a divertirse juntos.\n\n" +
      "Una niña llamada Sofía se acercó al final del día y me dio las gracias por ayudarla a subir a un árbol que ella sola no podía. Ese pequeño momento me hizo sentir que, aunque estoy agotado, este trabajo vale totalmente la pena.\n\n" +
      "Mañana tenemos actividades de manualidades. Espero tener tanta energía como hoy.",
    questions: [
      { id: "experiences-18-q1", type: "true-false", prompt: "El autor había cuidado de muchos niños antes de este campamento.", correctAnswer: "false", justification: "\"nunca había cuidado de tantos niños a la vez\"" },
      { id: "experiences-18-q2", type: "true-false", prompt: "Sofía le agradeció al autor por ayudarla a subir a un árbol.", correctAnswer: "true", justification: "\"me dio las gracias por ayudarla a subir a un árbol\"" },
      { id: "experiences-18-q3", type: "mcq", prompt: "¿Qué edad tienen los niños del campamento?", options: ["Entre ocho y diez años", "Entre doce y catorce años", "Entre cuatro y seis años", "Entre quince y diecisiete años"], correctAnswer: "Entre ocho y diez años" },
      { id: "experiences-18-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrada de diario", "Un informe oficial", "Un anuncio", "Una entrevista"], correctAnswer: "Una entrada de diario" },
      { id: "experiences-18-q5", type: "short", prompt: "¿Qué actividad tienen planeada para mañana?", correctAnswer: "manualidades" },
    ],
    vocabulary: [
      { es: "querido", en: "dear / beloved" },
      { es: "principio", en: "beginning" },
      { es: "primera", en: "first" },
      { es: "colaborar", en: "to collaborate" },
      { es: "gracias", en: "thanks" },
      { es: "pequeño", en: "small" },
      { es: "totalmente", en: "totally" },
      { es: "actividades", en: "activities" },
    ],
  },
  {
    id: "reading-experiences-19",
    themeId: "experiences",
    title: "Lo que aprendí trabajando de voluntario un verano",
    textType: "Blog post",
    level: "medium",
    bodyEs:
      "El verano pasado decidí no tomarme vacaciones tradicionales y, en su lugar, trabajé como voluntario en un refugio de animales durante seis semanas. No fue fácil: los horarios eran largos y algunas tareas, como limpiar las jaulas, no eran nada glamurosas.\n\n" +
      "Sin embargo, lo que gané superó con creces cualquier incomodidad. Aprendí responsabilidad real, del tipo que no se enseña en un aula: si yo no llegaba a tiempo, había animales que dependían directamente de mí.\n\n" +
      "También conocí a personas de contextos completamente diferentes al mío, todas unidas por el mismo propósito. Esas conversaciones me abrieron la mente más que cualquier libro que haya leído ese año.\n\n" +
      "Si tuviera que resumir la experiencia en una frase, diría que el voluntariado no es solo dar tiempo a los demás: es también, de una forma inesperada, recibir mucho a cambio.",
    questions: [
      { id: "experiences-19-q1", type: "true-false", prompt: "El autor pasó las vacaciones de forma tradicional el verano pasado.", correctAnswer: "false", justification: "\"decidí no tomarme vacaciones tradicionales\"" },
      { id: "experiences-19-q2", type: "true-false", prompt: "El autor considera que el voluntariado también le dio algo a él mismo.", correctAnswer: "true", justification: "\"recibir mucho a cambio\"" },
      { id: "experiences-19-q3", type: "mcq", prompt: "¿Cuántas semanas trabajó el autor como voluntario?", options: ["Seis semanas", "Dos semanas", "Un año", "Tres días"], correctAnswer: "Seis semanas" },
      { id: "experiences-19-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrada de blog", "Un informe oficial", "Una postal", "Un menú"], correctAnswer: "Una entrada de blog" },
      { id: "experiences-19-q5", type: "short", prompt: "¿Dónde trabajó de voluntario el autor?", correctAnswer: "en un refugio de animales" },
    ],
    vocabulary: [
      { es: "semanas", en: "weeks" },
      { es: "horarios", en: "schedules" },
      { es: "cualquier", en: "any" },
      { es: "personas", en: "people" },
      { es: "completamente", en: "completely" },
      { es: "diferentes", en: "different" },
      { es: "experiencia", en: "experience" },
      { es: "voluntariado", en: "volunteering" },
    ],
  },
  {
    id: "reading-experiences-20",
    themeId: "experiences",
    title: "Foro: ¿Alguien ha hecho el Camino de Santiago con el instituto?",
    textType: "Forum post",
    level: "easy",
    bodyEs:
      "Publicado por CaminanteNovato\n\n" +
      "¡Hola a todos! Nuestro instituto está organizando una versión corta del Camino de Santiago para el próximo trimestre, unos cinco días caminando, y quería preguntar si alguien aquí ya lo ha hecho.\n\n" +
      "¿Es muy difícil físicamente? Yo no hago mucho deporte normalmente y me preocupa no aguantar el ritmo del grupo.\n\n" +
      "También me gustaría saber qué tipo de mochila y calzado recomendáis, porque he leído que las ampollas en los pies son un problema muy común.\n\n" +
      "¡Gracias de antemano por cualquier consejo! Estoy nervioso pero también con muchas ganas de vivir esta experiencia.",
    questions: [
      { id: "experiences-20-q1", type: "true-false", prompt: "El autor hace mucho deporte normalmente.", correctAnswer: "false", justification: "\"yo no hago mucho deporte normalmente\"" },
      { id: "experiences-20-q2", type: "true-false", prompt: "El viaje organizado por el instituto dura cinco días.", correctAnswer: "true", justification: "\"una versión corta del Camino de Santiago... unos cinco días caminando\"" },
      { id: "experiences-20-q3", type: "mcq", prompt: "¿Qué problema común menciona el autor sobre los pies?", options: ["Las ampollas", "Las torceduras", "El frío", "Los hongos"], correctAnswer: "Las ampollas" },
      { id: "experiences-20-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una publicación de un foro", "Un informe oficial", "Una entrevista", "Un menú"], correctAnswer: "Una publicación de un foro" },
      { id: "experiences-20-q5", type: "short", prompt: "¿Qué está organizando el instituto del autor?", correctAnswer: "una versión corta del Camino de Santiago" },
    ],
    vocabulary: [
      { es: "publicado", en: "posted / published" },
      { es: "instituto", en: "secondary school" },
      { es: "trimestre", en: "term / trimester" },
      { es: "preocupa", en: "worries" },
      { es: "problema", en: "problem" },
      { es: "antemano", en: "beforehand (de antemano)" },
      { es: "cualquier", en: "any" },
      { es: "experiencia", en: "experience" },
    ],
  },
  {
    id: "reading-human-ingenuity-12",
    themeId: "human-ingenuity",
    title: "Informe sobre el uso de la inteligencia artificial en las aulas",
    textType: "Official report",
    level: "hard",
    bodyEs:
      "El presente informe, encargado por el Ministerio de Educación, evalúa el impacto del uso de herramientas de inteligencia artificial en centros de educación secundaria durante el último curso escolar.\n\n" +
      "Según los datos recopilados en trescientos institutos, el sesenta y cinco por ciento del profesorado utiliza regularmente alguna herramienta de IA para preparar materiales didácticos o corregir ejercicios, una cifra que se ha triplicado en solo dos años.\n\n" +
      "Entre los beneficios reportados destaca el ahorro de tiempo en tareas administrativas, lo que permite a los docentes dedicar más atención individualizada a sus estudiantes. Sin embargo, el informe también señala preocupaciones importantes: un cuarenta por ciento de los profesores expresa dudas sobre cómo garantizar que los estudiantes no dependan excesivamente de estas herramientas para completar sus propios trabajos.\n\n" +
      "Entre las recomendaciones, el informe propone desarrollar directrices claras sobre el uso aceptable de la IA por parte del alumnado, así como ofrecer formación específica al profesorado antes de que finalice el próximo curso escolar.",
    questions: [
      { id: "human-ingenuity-12-q1", type: "true-false", prompt: "El uso de herramientas de IA entre el profesorado se ha triplicado en dos años.", correctAnswer: "true", justification: "\"una cifra que se ha triplicado en solo dos años\"" },
      { id: "human-ingenuity-12-q2", type: "true-false", prompt: "Todos los profesores están completamente de acuerdo con el uso de la IA por parte de los estudiantes.", correctAnswer: "false", justification: "\"un cuarenta por ciento de los profesores expresa dudas\"" },
      { id: "human-ingenuity-12-q3", type: "mcq", prompt: "¿Qué porcentaje del profesorado usa regularmente herramientas de IA?", options: ["65%", "40%", "300%", "15%"], correctAnswer: "65%" },
      { id: "human-ingenuity-12-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un informe oficial", "Una carta personal", "Un anuncio", "Una reseña"], correctAnswer: "Un informe oficial" },
      { id: "human-ingenuity-12-q5", type: "short", prompt: "¿Quién encargó este informe?", correctAnswer: "el Ministerio de Educación" },
    ],
    vocabulary: [
      { es: "educación", en: "education" },
      { es: "inteligencia", en: "intelligence" },
      { es: "artificial", en: "artificial" },
      { es: "institutos", en: "secondary schools" },
      { es: "materiales", en: "materials" },
      { es: "estudiantes", en: "students" },
      { es: "importantes", en: "important (pl.)" },
      { es: "recomendaciones", en: "recommendations" },
    ],
  },
  {
    id: "reading-human-ingenuity-13",
    themeId: "human-ingenuity",
    title: "Postal desde la Feria Internacional de Ciencia",
    textType: "Postcard",
    level: "easy",
    bodyEs:
      "¡Hola, Nico!\n\n" +
      "Te escribo desde la Feria Internacional de Ciencia, donde estoy presentando mi proyecto sobre energía solar con mi equipo del instituto. ¡Hay estudiantes de más de treinta países aquí!\n\n" +
      "Ayer vimos un robot construido por un equipo de Japón que puede clasificar basura reciclable automáticamente. Es una locura lo avanzado que está todo.\n\n" +
      "Mañana es el día de la presentación final ante los jueces. Estoy nervioso, pero también muy emocionado. Sea cual sea el resultado, ya ha sido una experiencia increíble.\n\n" +
      "Te cuento todo cuando vuelva.\n\n" +
      "Un abrazo,\nDaniela",
    questions: [
      { id: "human-ingenuity-13-q1", type: "true-false", prompt: "Daniela presenta un proyecto sobre energía solar.", correctAnswer: "true", justification: "\"presentando mi proyecto sobre energía solar\"" },
      { id: "human-ingenuity-13-q2", type: "true-false", prompt: "El robot que clasifica basura fue construido por un equipo de España.", correctAnswer: "false", justification: "\"un robot construido por un equipo de Japón\"" },
      { id: "human-ingenuity-13-q3", type: "mcq", prompt: "¿Cuántos países tienen estudiantes participando en la feria?", options: ["Más de treinta", "Diez", "Cinco", "Cien"], correctAnswer: "Más de treinta" },
      { id: "human-ingenuity-13-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una postal", "Un informe oficial", "Una reseña", "Un anuncio"], correctAnswer: "Una postal" },
      { id: "human-ingenuity-13-q5", type: "short", prompt: "¿Qué día es la presentación final ante los jueces?", correctAnswer: "mañana" },
    ],
    vocabulary: [
      { es: "escribo", en: "I write" },
      { es: "internacional", en: "international" },
      { es: "ciencia", en: "science" },
      { es: "proyecto", en: "project" },
      { es: "instituto", en: "secondary school" },
      { es: "estudiantes", en: "students" },
      { es: "experiencia", en: "experience" },
      { es: "increíble", en: "incredible" },
    ],
  },
  {
    id: "reading-human-ingenuity-14",
    themeId: "human-ingenuity",
    title: "Publicación: ¡Ganamos el concurso de ciencias!",
    textType: "Social media post",
    level: "easy",
    bodyEs:
      "¡No me lo puedo creer! 🎉 Después de meses de trabajo, nuestro proyecto sobre un sistema de riego automático para huertos escolares ganó el primer premio en el concurso regional de ciencias.\n\n" +
      "Quiero dar las gracias a mi equipo, que trabajó incansablemente cada fin de semana, y a nuestra profesora de tecnología, que creyó en la idea desde el primer día.\n\n" +
      "Al principio, muchos pensaban que el proyecto era demasiado ambicioso para hacerlo con un presupuesto tan pequeño, pero eso nos motivó todavía más a demostrar que sí se podía.\n\n" +
      "¡Ahora vamos a la fase nacional! Gracias a todos por el apoyo. 💪🌱 #cienciaescolar #innovacion",
    questions: [
      { id: "human-ingenuity-14-q1", type: "true-false", prompt: "El proyecto ganador trata sobre un sistema de riego automático.", correctAnswer: "true", justification: "\"nuestro proyecto sobre un sistema de riego automático para huertos escolares\"" },
      { id: "human-ingenuity-14-q2", type: "true-false", prompt: "Todos pensaban que el proyecto sería fácil de realizar.", correctAnswer: "false", justification: "\"muchos pensaban que el proyecto era demasiado ambicioso\"" },
      { id: "human-ingenuity-14-q3", type: "mcq", prompt: "¿A qué fase avanza el equipo ahora?", options: ["La fase nacional", "La fase internacional", "No avanzan más", "La fase local"], correctAnswer: "La fase nacional" },
      { id: "human-ingenuity-14-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una publicación en redes sociales", "Un informe oficial", "Una carta formal", "Un menú"], correctAnswer: "Una publicación en redes sociales" },
      { id: "human-ingenuity-14-q5", type: "short", prompt: "¿Qué premio ganó el equipo en el concurso regional?", correctAnswer: "el primer premio" },
    ],
    vocabulary: [
      { es: "trabajo", en: "work / job" },
      { es: "proyecto", en: "project" },
      { es: "gracias", en: "thanks" },
      { es: "profesora", en: "teacher (fem.)" },
      { es: "tecnología", en: "technology" },
      { es: "principio", en: "beginning" },
      { es: "demasiado", en: "too much" },
      { es: "nacional", en: "national" },
    ],
  },
  {
    id: "reading-human-ingenuity-15",
    themeId: "human-ingenuity",
    title: "¿Hasta dónde deberíamos llegar con la bioingeniería?",
    textType: "Blog post",
    level: "hard",
    bodyEs:
      "La noticia de que científicos han logrado editar con precisión genes humanos específicos usando tecnología CRISPR ha reavivado un debate que llevamos años posponiendo: ¿existe un límite ético para lo que la ciencia debería hacer, simplemente porque puede hacerlo?\n\n" +
      "Por un lado, el potencial es innegable. Eliminar enfermedades genéticas hereditarias antes de que un bebé nazca podría aliviar un sufrimiento inmenso. Es difícil argumentar en contra de curar una enfermedad devastadora.\n\n" +
      "Pero la línea entre \"curar\" y \"mejorar\" es peligrosamente delgada. Si podemos eliminar una enfermedad, ¿por qué no también seleccionar el color de ojos, la altura o el coeficiente intelectual? Y si esta tecnología solo está disponible para quienes pueden pagarla, ¿no estaríamos creando una desigualdad genética además de la económica que ya existe?\n\n" +
      "No tengo una respuesta clara, y sospecho que nadie la tiene todavía. Pero creo firmemente que estas decisiones no deberían dejarse únicamente en manos de científicos y empresas privadas. Como sociedad, todos deberíamos tener voz en hacia dónde llevamos esta tecnología.",
    questions: [
      { id: "human-ingenuity-15-q1", type: "true-false", prompt: "El autor tiene una respuesta clara y definitiva sobre los límites de la bioingeniería.", correctAnswer: "false", justification: "\"No tengo una respuesta clara, y sospecho que nadie la tiene todavía\"" },
      { id: "human-ingenuity-15-q2", type: "true-false", prompt: "El autor cree que estas decisiones deberían incluir a toda la sociedad, no solo a científicos y empresas.", correctAnswer: "true", justification: "\"todos deberíamos tener voz en hacia dónde llevamos esta tecnología\"" },
      { id: "human-ingenuity-15-q3", type: "mcq", prompt: "¿Qué tecnología menciona el autor al principio del texto?", options: ["CRISPR", "Inteligencia artificial", "Realidad virtual", "Energía nuclear"], correctAnswer: "CRISPR" },
      { id: "human-ingenuity-15-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrada de blog", "Un informe oficial", "Un anuncio", "Una postal"], correctAnswer: "Una entrada de blog" },
      { id: "human-ingenuity-15-q5", type: "short", prompt: "Según el autor, ¿qué línea es 'peligrosamente delgada'?", correctAnswer: "la línea entre curar y mejorar" },
    ],
    vocabulary: [
      { es: "humanos", en: "humans" },
      { es: "tecnología", en: "technology" },
      { es: "ciencia", en: "science" },
      { es: "simplemente", en: "simply" },
      { es: "hacerlo", en: "to do it" },
      { es: "respuesta", en: "answer / reply" },
      { es: "decisiones", en: "decisions" },
      { es: "empresas", en: "companies" },
    ],
  },
  {
    id: "reading-human-ingenuity-16",
    themeId: "human-ingenuity",
    title: "Estudiantes diseñan un coche solar para una carrera universitaria",
    textType: "Newspaper article",
    level: "medium",
    bodyEs:
      "Un equipo de doce estudiantes de un instituto técnico ha diseñado y construido un vehículo propulsado completamente por energía solar, con el que competirán el próximo mes en una carrera universitaria de coches sostenibles.\n\n" +
      "El proyecto, que llevó más de un año de trabajo, utiliza paneles solares ligeros colocados sobre la carrocería del vehículo, capaces de alcanzar una velocidad máxima de setenta kilómetros por hora sin necesidad de combustible ni electricidad de la red.\n\n" +
      "\"Al principio muchos dudaban de que un grupo de estudiantes de instituto pudiera competir contra equipos universitarios con mucho más presupuesto\", explica la profesora que coordinó el proyecto. \"Pero la falta de recursos nos obligó a ser más creativos en el diseño\".\n\n" +
      "El equipo espera que su participación inspire a más jóvenes a interesarse por las carreras de ingeniería y energías renovables.",
    questions: [
      { id: "human-ingenuity-16-q1", type: "true-false", prompt: "El coche solar necesita electricidad de la red para funcionar.", correctAnswer: "false", justification: "\"sin necesidad de combustible ni electricidad de la red\"" },
      { id: "human-ingenuity-16-q2", type: "true-false", prompt: "El proyecto llevó más de un año de trabajo.", correctAnswer: "true", justification: "\"que llevó más de un año de trabajo\"" },
      { id: "human-ingenuity-16-q3", type: "mcq", prompt: "¿Cuál es la velocidad máxima del vehículo?", options: ["Setenta kilómetros por hora", "Cien kilómetros por hora", "Treinta kilómetros por hora", "Doscientos kilómetros por hora"], correctAnswer: "Setenta kilómetros por hora" },
      { id: "human-ingenuity-16-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un artículo de periódico", "Una entrada de diario", "Una postal", "Un menú"], correctAnswer: "Un artículo de periódico" },
      { id: "human-ingenuity-16-q5", type: "short", prompt: "¿Cuántos estudiantes formaron el equipo?", correctAnswer: "doce" },
    ],
    vocabulary: [
      { es: "estudiantes", en: "students" },
      { es: "instituto", en: "secondary school" },
      { es: "completamente", en: "completely" },
      { es: "proyecto", en: "project" },
      { es: "necesidad", en: "need" },
      { es: "principio", en: "beginning" },
      { es: "profesora", en: "teacher (fem.)" },
      { es: "recursos", en: "resources" },
    ],
  },
  {
    id: "reading-human-ingenuity-17",
    themeId: "human-ingenuity",
    title: "Entrevista con una joven ingeniera aeroespacial",
    textType: "Interview",
    level: "medium",
    bodyEs:
      "Hablamos con Marta Delgado, de veinticuatro años, una de las ingenieras más jóvenes que trabaja actualmente en el diseño de satélites de bajo coste.\n\n" +
      "— Marta, ¿cuándo supiste que querías dedicarte a la ingeniería aeroespacial?\n\n" +
      "— A los doce años, después de ver un documental sobre la primera misión a Marte. Desde ese momento no pensé en otra cosa.\n\n" +
      "— ¿Cuál fue el mayor obstáculo en tu carrera?\n\n" +
      "— Ser una de las pocas mujeres en la mayoría de mis clases de ingeniería. Al principio dudaba de mí misma constantemente, pero con el tiempo aprendí a confiar en mi propio criterio.\n\n" +
      "— ¿Qué consejo le darías a una joven que quiere seguir tu mismo camino?\n\n" +
      "— Que no espere sentirse completamente segura para empezar. La confianza viene después de la acción, no antes.",
    questions: [
      { id: "human-ingenuity-17-q1", type: "true-false", prompt: "Marta decidió estudiar ingeniería aeroespacial después de ver un documental.", correctAnswer: "true", justification: "\"después de ver un documental sobre la primera misión a Marte\"" },
      { id: "human-ingenuity-17-q2", type: "true-false", prompt: "Marta dice que la confianza siempre viene antes de la acción.", correctAnswer: "false", justification: "\"La confianza viene después de la acción, no antes\"" },
      { id: "human-ingenuity-17-q3", type: "mcq", prompt: "¿A qué edad decidió Marta dedicarse a la ingeniería aeroespacial?", options: ["A los doce años", "A los veinticuatro años", "A los dieciocho años", "A los seis años"], correctAnswer: "A los doce años" },
      { id: "human-ingenuity-17-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrevista", "Un anuncio", "Una receta", "Un poema"], correctAnswer: "Una entrevista" },
      { id: "human-ingenuity-17-q5", type: "short", prompt: "¿En qué diseña Marta actualmente?", correctAnswer: "satélites de bajo coste" },
    ],
    vocabulary: [
      { es: "hablamos", en: "we speak / talk" },
      { es: "jóvenes", en: "young people" },
      { es: "actualmente", en: "currently" },
      { es: "primera", en: "first" },
      { es: "momento", en: "moment" },
      { es: "principio", en: "beginning" },
      { es: "sentirse", en: "to feel (oneself)" },
      { es: "completamente", en: "completely" },
    ],
  },
  {
    id: "reading-human-ingenuity-18",
    themeId: "human-ingenuity",
    title: "Anuncio: Taller de programación para jóvenes",
    textType: "Advertisement",
    level: "easy",
    bodyEs:
      "¿Te interesa la tecnología? ¡Apúntate a nuestro taller de programación para jóvenes de doce a diecisiete años!\n\n" +
      "Durante cuatro sábados aprenderás los fundamentos de la programación creando tu propio videojuego sencillo, sin necesidad de experiencia previa.\n\n" +
      "Las clases se imparten en grupos pequeños de máximo diez estudiantes, con ordenadores y todo el material incluido en el precio.\n\n" +
      "El taller empieza el primer sábado del mes que viene, de diez a doce del mediodía, en el centro cultural del barrio.\n\n" +
      "Las plazas son limitadas. Para reservar tu lugar, escribe a talleresjovenes@correo.com antes de que se agoten.",
    questions: [
      { id: "human-ingenuity-18-q1", type: "true-false", prompt: "Es necesario tener experiencia previa para apuntarse al taller.", correctAnswer: "false", justification: "\"sin necesidad de experiencia previa\"" },
      { id: "human-ingenuity-18-q2", type: "true-false", prompt: "Los grupos del taller tienen un máximo de diez estudiantes.", correctAnswer: "true", justification: "\"grupos pequeños de máximo diez estudiantes\"" },
      { id: "human-ingenuity-18-q3", type: "mcq", prompt: "¿Cuántos sábados dura el taller?", options: ["Cuatro", "Dos", "Diez", "Ocho"], correctAnswer: "Cuatro" },
      { id: "human-ingenuity-18-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un anuncio", "Un informe científico", "Una entrada de diario", "Una entrevista"], correctAnswer: "Un anuncio" },
      { id: "human-ingenuity-18-q5", type: "short", prompt: "¿Qué crearán los estudiantes durante el taller?", correctAnswer: "su propio videojuego sencillo" },
    ],
    vocabulary: [
      { es: "interesa", en: "interests" },
      { es: "tecnología", en: "technology" },
      { es: "jóvenes", en: "young people" },
      { es: "diecisiete", en: "seventeen" },
      { es: "necesidad", en: "need" },
      { es: "experiencia", en: "experience" },
      { es: "pequeños", en: "small (pl.)" },
      { es: "estudiantes", en: "students" },
    ],
  },
  {
    id: "reading-human-ingenuity-19",
    themeId: "human-ingenuity",
    title: "Reseña: El nuevo museo interactivo de ciencia",
    textType: "Review",
    level: "medium",
    bodyEs:
      "El fin de semana pasado visité el nuevo museo interactivo de ciencia que acaba de inaugurarse en el centro de la ciudad, y tengo que decir que superó completamente mis expectativas.\n\n" +
      "Lo que más me impresionó fue la sala dedicada a la robótica, donde los visitantes pueden programar pequeños robots para que completen distintos desafíos. A diferencia de otros museos donde solo se puede observar, aquí realmente se aprende haciendo.\n\n" +
      "Mi única queja es que, los fines de semana, algunas de las exhibiciones más populares tienen colas de más de cuarenta minutos, lo cual puede resultar frustrante si vas con niños pequeños.\n\n" +
      "Aun así, recomiendo totalmente este museo tanto para familias como para grupos escolares. Es una manera excelente de despertar el interés por la ciencia de una forma práctica y divertida.",
    questions: [
      { id: "human-ingenuity-19-q1", type: "true-false", prompt: "En la sala de robótica, los visitantes solo pueden observar sin participar.", correctAnswer: "false", justification: "\"aquí realmente se aprende haciendo\"" },
      { id: "human-ingenuity-19-q2", type: "true-false", prompt: "El autor recomienda el museo para familias y grupos escolares.", correctAnswer: "true", justification: "\"recomiendo totalmente este museo tanto para familias como para grupos escolares\"" },
      { id: "human-ingenuity-19-q3", type: "mcq", prompt: "¿Cuál es la queja principal del autor sobre el museo?", options: ["Las largas colas los fines de semana", "El precio de la entrada", "La falta de personal", "El horario de apertura"], correctAnswer: "Las largas colas los fines de semana" },
      { id: "human-ingenuity-19-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una reseña", "Un informe oficial", "Una carta formal", "Un menú"], correctAnswer: "Una reseña" },
      { id: "human-ingenuity-19-q5", type: "short", prompt: "¿Qué se puede programar en la sala de robótica?", correctAnswer: "pequeños robots" },
    ],
    vocabulary: [
      { es: "completamente", en: "completely" },
      { es: "robótica", en: "robotics" },
      { es: "pequeños", en: "small (pl.)" },
      { es: "distintos", en: "different" },
      { es: "diferencia", en: "difference" },
      { es: "realmente", en: "really" },
      { es: "recomiendo", en: "I recommend" },
      { es: "totalmente", en: "totally" },
    ],
  },
  {
    id: "reading-human-ingenuity-20",
    themeId: "human-ingenuity",
    title: "Diario: Mi primer día en la feria de robótica",
    textType: "Diary entry",
    level: "easy",
    bodyEs:
      "Querido diario:\n\n" +
      "Hoy fue el primer día de la feria de robótica en mi instituto y estoy agotado, pero muy contento. Llevamos tres meses preparando nuestro robot para la competición de este fin de semana.\n\n" +
      "Al principio, el robot no funcionaba bien: se detenía cada vez que intentaba girar. Pasamos casi dos horas revisando el código antes de encontrar el error. ¡Era solo una línea mal escrita!\n\n" +
      "Cuando por fin funcionó correctamente delante de todos, sentí un orgullo enorme. Mis compañeros de equipo y yo nos abrazamos como si hubiéramos ganado ya, aunque la competición es mañana.\n\n" +
      "Espero dormir bien esta noche, porque mañana necesitaré toda mi concentración.",
    questions: [
      { id: "human-ingenuity-20-q1", type: "true-false", prompt: "El robot funcionó perfectamente desde el principio.", correctAnswer: "false", justification: "\"el robot no funcionaba bien: se detenía cada vez que intentaba girar\"" },
      { id: "human-ingenuity-20-q2", type: "true-false", prompt: "El equipo llevaba tres meses preparando el robot.", correctAnswer: "true", justification: "\"Llevamos tres meses preparando nuestro robot\"" },
      { id: "human-ingenuity-20-q3", type: "mcq", prompt: "¿Cuál era el problema del robot?", options: ["Una línea de código mal escrita", "Una batería descargada", "Faltaban piezas", "Estaba roto"], correctAnswer: "Una línea de código mal escrita" },
      { id: "human-ingenuity-20-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrada de diario", "Un informe oficial", "Un anuncio", "Una entrevista"], correctAnswer: "Una entrada de diario" },
      { id: "human-ingenuity-20-q5", type: "short", prompt: "¿Cuándo es la competición?", correctAnswer: "mañana" },
    ],
    vocabulary: [
      { es: "querido", en: "dear / beloved" },
      { es: "diario", en: "diary / daily" },
      { es: "primer", en: "first" },
      { es: "robótica", en: "robotics" },
      { es: "instituto", en: "secondary school" },
      { es: "principio", en: "beginning" },
      { es: "encontrar", en: "to find" },
      { es: "compañeros", en: "classmates / colleagues" },
    ],
  },
  {
    id: "reading-social-organization-12",
    themeId: "social-organization",
    title: "Diario: Mi primer día de voluntariado en el ayuntamiento",
    textType: "Diary entry",
    level: "easy",
    bodyEs:
      "Querido diario:\n\n" +
      "Hoy empecé mi programa de voluntariado en el ayuntamiento de mi ciudad, ayudando en la oficina de atención a personas mayores. Al principio estaba nerviosa porque no sabía muy bien qué esperar.\n\n" +
      "Mi primera tarea fue ayudar a un señor mayor a rellenar un formulario en línea, algo que para mí es sencillo pero que para él era muy confuso. Me di cuenta de que muchas personas mayores se sienten excluidas por lo digital que se ha vuelto todo.\n\n" +
      "Después de ayudarle, el señor me dio las gracias con una sonrisa enorme y me contó historias de cuando la ciudad era muy diferente. Fue una conversación que no esperaba, pero que disfruté mucho.\n\n" +
      "Creo que este voluntariado me va a enseñar mucho más de lo que imaginaba.",
    questions: [
      { id: "social-organization-12-q1", type: "true-false", prompt: "La autora ayudó a un señor mayor con un formulario en línea.", correctAnswer: "true", justification: "\"ayudar a un señor mayor a rellenar un formulario en línea\"" },
      { id: "social-organization-12-q2", type: "true-false", prompt: "La autora no tuvo ninguna conversación con el señor mayor.", correctAnswer: "false", justification: "\"Fue una conversación que no esperaba, pero que disfruté mucho\"" },
      { id: "social-organization-12-q3", type: "mcq", prompt: "¿Dónde hace su voluntariado la autora?", options: ["En el ayuntamiento de su ciudad", "En un hospital", "En una escuela", "En una biblioteca"], correctAnswer: "En el ayuntamiento de su ciudad" },
      { id: "social-organization-12-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrada de diario", "Un informe oficial", "Un anuncio", "Una entrevista"], correctAnswer: "Una entrada de diario" },
      { id: "social-organization-12-q5", type: "short", prompt: "¿Con qué grupo de personas trabaja la autora en su voluntariado?", correctAnswer: "personas mayores" },
    ],
    vocabulary: [
      { es: "programa", en: "program" },
      { es: "voluntariado", en: "volunteering" },
      { es: "ayuntamiento", en: "town hall / city council" },
      { es: "atención", en: "attention" },
      { es: "personas", en: "people" },
      { es: "principio", en: "beginning" },
      { es: "historias", en: "stories" },
      { es: "imaginaba", en: "imagined" },
    ],
  },
  {
    id: "reading-social-organization-13",
    themeId: "social-organization",
    title: "El auge del trabajo remoto y sus efectos en la organización social",
    textType: "Magazine article",
    level: "hard",
    bodyEs:
      "Desde hace algunos años, el trabajo remoto ha dejado de ser una excepción para convertirse en una realidad permanente para millones de personas, transformando no solo la forma de trabajar, sino también la estructura misma de nuestras comunidades.\n\n" +
      "Por un lado, muchos trabajadores reportan mayor flexibilidad y menos tiempo perdido en desplazamientos, lo que les permite dedicar más tiempo a su familia y a actividades comunitarias locales. Algunos pequeños pueblos, antes en declive demográfico, han visto renacer su economía gracias a la llegada de trabajadores remotos que buscan una mejor calidad de vida.\n\n" +
      "Sin embargo, sociólogos advierten sobre efectos menos visibles: la disminución de las interacciones sociales espontáneas que ocurrían tradicionalmente en las oficinas, y una creciente sensación de aislamiento entre quienes viven solos y trabajan exclusivamente desde casa.\n\n" +
      "El reto de las próximas décadas, según los expertos, será diseñar comunidades y espacios de trabajo híbridos que aprovechen los beneficios del trabajo remoto sin sacrificar el tejido social que sostiene a cualquier comunidad saludable.",
    questions: [
      { id: "social-organization-13-q1", type: "true-false", prompt: "Según el artículo, algunos pueblos pequeños se han beneficiado económicamente del trabajo remoto.", correctAnswer: "true", justification: "\"han visto renacer su economía gracias a la llegada de trabajadores remotos\"" },
      { id: "social-organization-13-q2", type: "true-false", prompt: "Los sociólogos afirman que el trabajo remoto no tiene ningún efecto negativo en la sociedad.", correctAnswer: "false", justification: "\"sociólogos advierten sobre efectos menos visibles: la disminución de las interacciones sociales espontáneas\"" },
      { id: "social-organization-13-q3", type: "mcq", prompt: "Según los expertos, ¿cuál será el reto de las próximas décadas?", options: ["Diseñar comunidades y espacios híbridos equilibrados", "Eliminar completamente el trabajo remoto", "Obligar a todos a volver a la oficina", "Reducir los salarios de los trabajadores remotos"], correctAnswer: "Diseñar comunidades y espacios híbridos equilibrados" },
      { id: "social-organization-13-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un artículo de revista", "Una postal", "Un correo informal", "Un menú"], correctAnswer: "Un artículo de revista" },
      { id: "social-organization-13-q5", type: "short", prompt: "¿Qué disminuye, según los sociólogos, a causa del trabajo remoto?", correctAnswer: "las interacciones sociales espontáneas" },
    ],
    vocabulary: [
      { es: "realidad", en: "reality" },
      { es: "millones", en: "millions" },
      { es: "personas", en: "people" },
      { es: "trabajar", en: "to work" },
      { es: "actividades", en: "activities" },
      { es: "pequeños", en: "small (pl.)" },
      { es: "cualquier", en: "any" },
      { es: "comunidad", en: "community" },
    ],
  },
  {
    id: "reading-social-organization-14",
    themeId: "social-organization",
    title: "Anuncio: Se buscan voluntarios para campaña de alfabetización",
    textType: "Advertisement",
    level: "easy",
    bodyEs:
      "¿Quieres ayudar a que más personas aprendan a leer y escribir? ¡Únete a nuestra campaña de alfabetización para adultos!\n\n" +
      "Buscamos voluntarios a partir de dieciséis años, dispuestos a dar clases básicas de lectura y escritura dos tardes por semana durante tres meses.\n\n" +
      "No necesitas experiencia previa como profesor: te daremos toda la formación necesaria antes de empezar. Solo hace falta paciencia y ganas de ayudar.\n\n" +
      "Las clases se imparten en el centro comunitario del barrio, los martes y jueves de seis a ocho de la tarde.\n\n" +
      "Si te interesa, envía un mensaje a alfabetizacion@correo.org. ¡Cada persona que aprende a leer cambia su vida para siempre!",
    questions: [
      { id: "social-organization-14-q1", type: "true-false", prompt: "Es necesario tener experiencia previa como profesor para ser voluntario.", correctAnswer: "false", justification: "\"No necesitas experiencia previa como profesor\"" },
      { id: "social-organization-14-q2", type: "true-false", prompt: "Las clases se imparten los martes y jueves.", correctAnswer: "true", justification: "\"los martes y jueves de seis a ocho de la tarde\"" },
      { id: "social-organization-14-q3", type: "mcq", prompt: "¿A partir de qué edad se buscan voluntarios?", options: ["Dieciséis años", "Dieciocho años", "Veintiún años", "Catorce años"], correctAnswer: "Dieciséis años" },
      { id: "social-organization-14-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un anuncio", "Un informe científico", "Una entrada de diario", "Una reseña"], correctAnswer: "Un anuncio" },
      { id: "social-organization-14-q5", type: "short", prompt: "¿Cuánto tiempo dura el compromiso de voluntariado?", correctAnswer: "tres meses" },
    ],
    vocabulary: [
      { es: "quieres", en: "you want" },
      { es: "personas", en: "people" },
      { es: "voluntarios", en: "volunteers" },
      { es: "dieciséis", en: "sixteen" },
      { es: "necesitas", en: "you need" },
      { es: "experiencia", en: "experience" },
      { es: "comunitario", en: "community (adj.)" },
      { es: "interesa", en: "interests" },
    ],
  },
  {
    id: "reading-social-organization-15",
    themeId: "social-organization",
    title: "Postal desde un proyecto de cooperación internacional",
    textType: "Postcard",
    level: "medium",
    bodyEs:
      "¡Hola, mamá!\n\n" +
      "Te escribo desde Guatemala, donde llevo dos semanas participando en un proyecto de cooperación internacional construyendo un sistema de agua potable para una comunidad rural.\n\n" +
      "El trabajo es más duro de lo que imaginaba, pero también mucho más gratificante. Ayer terminamos de instalar las tuberías de la primera casa, y la familia nos preparó una comida para celebrarlo. Nunca había visto tanta generosidad de personas que tienen tan poco.\n\n" +
      "He aprendido más sobre desigualdad y organización comunitaria en estas dos semanas que en todo un año de instituto. La gente aquí se organiza de forma increíble para resolver problemas juntos, sin esperar a que nadie más lo haga por ellos.\n\n" +
      "Vuelvo la semana que viene. Tengo tantas historias que contarte.\n\n" +
      "Un abrazo enorme,\nPablo",
    questions: [
      { id: "social-organization-15-q1", type: "true-false", prompt: "Pablo lleva un mes en Guatemala.", correctAnswer: "false", justification: "\"llevo dos semanas participando en un proyecto\"" },
      { id: "social-organization-15-q2", type: "true-false", prompt: "La familia preparó una comida para celebrar la instalación de las tuberías.", correctAnswer: "true", justification: "\"la familia nos preparó una comida para celebrarlo\"" },
      { id: "social-organization-15-q3", type: "mcq", prompt: "¿En qué está trabajando Pablo?", options: ["Un sistema de agua potable", "Una escuela nueva", "Un hospital", "Una biblioteca"], correctAnswer: "Un sistema de agua potable" },
      { id: "social-organization-15-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una postal", "Un informe oficial", "Una reseña", "Un anuncio"], correctAnswer: "Una postal" },
      { id: "social-organization-15-q5", type: "short", prompt: "¿Cuándo vuelve Pablo a casa?", correctAnswer: "la semana que viene" },
    ],
    vocabulary: [
      { es: "internacional", en: "international" },
      { es: "comunidad", en: "community" },
      { es: "imaginaba", en: "imagined" },
      { es: "organización", en: "organization" },
      { es: "instituto", en: "secondary school" },
      { es: "increíble", en: "incredible" },
      { es: "problemas", en: "problems" },
      { es: "historias", en: "stories" },
    ],
  },
  {
    id: "reading-social-organization-16",
    themeId: "social-organization",
    title: "Reseña: Documental 'Dos ciudades, un mismo país'",
    textType: "Review",
    level: "medium",
    bodyEs:
      "El documental 'Dos ciudades, un mismo país' explora la creciente desigualdad económica entre las zonas urbanas ricas y los barrios periféricos empobrecidos de una misma ciudad, y sinceramente, me dejó pensando durante días.\n\n" +
      "Lo que más valoro es que el documental no se limita a mostrar estadísticas frías, sino que sigue de cerca a tres familias durante un año completo, humanizando un problema que a menudo se discute de forma demasiado abstracta.\n\n" +
      "Mi única crítica es que, hacia el final, el documental ofrece pocas soluciones concretas, dejando al espectador con una sensación de impotencia que quizás no era la intención de los directores.\n\n" +
      "Aun así, lo recomiendo firmemente, especialmente para quienes creen que la desigualdad social no les afecta directamente. Este documental demuestra lo contrario de forma contundente.",
    questions: [
      { id: "social-organization-16-q1", type: "true-false", prompt: "El documental solo muestra estadísticas, sin seguir a personas reales.", correctAnswer: "false", justification: "\"sigue de cerca a tres familias durante un año completo\"" },
      { id: "social-organization-16-q2", type: "true-false", prompt: "Según la reseña, el documental ofrece muchas soluciones concretas al final.", correctAnswer: "false", justification: "\"ofrece pocas soluciones concretas\"" },
      { id: "social-organization-16-q3", type: "mcq", prompt: "¿Durante cuánto tiempo sigue el documental a las familias?", options: ["Un año completo", "Un mes", "Una semana", "Cinco años"], correctAnswer: "Un año completo" },
      { id: "social-organization-16-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una reseña", "Un informe oficial", "Una carta formal", "Un menú"], correctAnswer: "Una reseña" },
      { id: "social-organization-16-q5", type: "short", prompt: "¿Cuántas familias sigue el documental?", correctAnswer: "tres" },
    ],
    vocabulary: [
      { es: "ciudad", en: "city" },
      { es: "familias", en: "families" },
      { es: "completo", en: "complete / full" },
      { es: "problema", en: "problem" },
      { es: "demasiado", en: "too much" },
      { es: "recomiendo", en: "I recommend" },
      { es: "especialmente", en: "especially" },
      { es: "quienes", en: "who (plural)" },
    ],
  },
  {
    id: "reading-social-organization-17",
    themeId: "social-organization",
    title: "Nueva ley busca mejorar la conciliación laboral y familiar",
    textType: "Newspaper article",
    level: "medium",
    bodyEs:
      "El parlamento aprobó ayer una nueva ley que amplía los permisos parentales remunerados y establece el derecho de los trabajadores a solicitar horarios flexibles para el cuidado de hijos o familiares dependientes.\n\n" +
      "Según la nueva normativa, ambos progenitores tendrán derecho a dieciséis semanas de permiso remunerado, frente a las doce semanas anteriores, y las empresas estarán obligadas a justificar por escrito cualquier negativa a una solicitud de horario flexible.\n\n" +
      "Las organizaciones empresariales han expresado preocupación por el coste que esto supondrá para las pequeñas empresas, mientras que las asociaciones de trabajadores han celebrado la medida como un paso histórico hacia una mayor igualdad entre hombres y mujeres en el ámbito laboral.\n\n" +
      "La ley entrará en vigor a partir del primero de enero del próximo año.",
    questions: [
      { id: "social-organization-17-q1", type: "true-false", prompt: "La nueva ley reduce el permiso parental remunerado.", correctAnswer: "false", justification: "\"dieciséis semanas de permiso remunerado, frente a las doce semanas anteriores\"" },
      { id: "social-organization-17-q2", type: "true-false", prompt: "Las empresas deberán justificar por escrito si niegan un horario flexible.", correctAnswer: "true", justification: "\"las empresas estarán obligadas a justificar por escrito cualquier negativa\"" },
      { id: "social-organization-17-q3", type: "mcq", prompt: "¿Cuántas semanas de permiso parental establece la nueva ley?", options: ["Dieciséis semanas", "Doce semanas", "Ocho semanas", "Veinte semanas"], correctAnswer: "Dieciséis semanas" },
      { id: "social-organization-17-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un artículo de periódico", "Una entrada de diario", "Una postal", "Un menú"], correctAnswer: "Un artículo de periódico" },
      { id: "social-organization-17-q5", type: "short", prompt: "¿Cuándo entra en vigor la nueva ley?", correctAnswer: "el primero de enero del próximo año" },
    ],
    vocabulary: [
      { es: "horarios", en: "schedules" },
      { es: "dieciséis", en: "sixteen" },
      { es: "semanas", en: "weeks" },
      { es: "empresas", en: "companies" },
      { es: "cualquier", en: "any" },
      { es: "horario", en: "schedule" },
      { es: "pequeñas", en: "small (fem. pl.)" },
      { es: "primero", en: "first" },
    ],
  },
  {
    id: "reading-social-organization-18",
    themeId: "social-organization",
    title: "Entrevista con una activista por los derechos humanos",
    textType: "Interview",
    level: "hard",
    bodyEs:
      "Hablamos con Carolina Vega, activista que lleva quince años trabajando en organizaciones de defensa de los derechos humanos en distintos países.\n\n" +
      "— Carolina, ¿qué te motivó a dedicarte a este trabajo?\n\n" +
      "— Crecí en un barrio donde presencié de primera mano cómo la falta de acceso a la justicia afectaba desproporcionadamente a las familias más pobres. Sentí que no podía quedarme de brazos cruzados.\n\n" +
      "— ¿Cuál dirías que es el mayor desafío actual en materia de derechos humanos?\n\n" +
      "— La desinformación. Cada vez es más fácil manipular la opinión pública para que ignore violaciones de derechos humanos que ocurren ante nuestros ojos, simplemente porque no encajan con una narrativa cómoda.\n\n" +
      "— ¿Qué le dirías a un joven que quiere involucrarse pero no sabe por dónde empezar?\n\n" +
      "— Que empiece localmente. No hace falta viajar al otro lado del mundo para defender los derechos humanos; muchas veces la injusticia está mucho más cerca de lo que pensamos.",
    questions: [
      { id: "social-organization-18-q1", type: "true-false", prompt: "Carolina lleva quince años trabajando en este campo.", correctAnswer: "true", justification: "\"lleva quince años trabajando en organizaciones de defensa de los derechos humanos\"" },
      { id: "social-organization-18-q2", type: "true-false", prompt: "Carolina cree que hay que viajar lejos para defender los derechos humanos.", correctAnswer: "false", justification: "\"No hace falta viajar al otro lado del mundo para defender los derechos humanos\"" },
      { id: "social-organization-18-q3", type: "mcq", prompt: "Según Carolina, ¿cuál es el mayor desafío actual en derechos humanos?", options: ["La desinformación", "La falta de dinero", "La falta de leyes", "El clima"], correctAnswer: "La desinformación" },
      { id: "social-organization-18-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrevista", "Un anuncio", "Una receta", "Un poema"], correctAnswer: "Una entrevista" },
      { id: "social-organization-18-q5", type: "short", prompt: "¿Dónde presenció Carolina la falta de acceso a la justicia?", correctAnswer: "en su barrio" },
    ],
    vocabulary: [
      { es: "hablamos", en: "we speak / talk" },
      { es: "humanos", en: "humans" },
      { es: "distintos", en: "different" },
      { es: "trabajo", en: "work / job" },
      { es: "primera", en: "first" },
      { es: "familias", en: "families" },
      { es: "simplemente", en: "simply" },
      { es: "empezar", en: "to begin" },
    ],
  },
  {
    id: "reading-social-organization-19",
    themeId: "social-organization",
    title: "¿Debería existir un año de servicio social obligatorio?",
    textType: "Blog post",
    level: "medium",
    bodyEs:
      "Varios países europeos están debatiendo actualmente la posibilidad de instaurar un año de servicio social obligatorio para todos los jóvenes al terminar el instituto, ya sea en el ámbito militar, medioambiental o comunitario. La idea me genera sentimientos encontrados.\n\n" +
      "Por un lado, entiendo el argumento: un año dedicado a servir a la comunidad podría fomentar valores como la responsabilidad colectiva y reducir la creciente división entre distintos grupos sociales que apenas interactúan entre sí.\n\n" +
      "Por otro lado, me preocupa la palabra \"obligatorio\". Forzar a alguien a participar en algo, sin importar cuán noble sea la causa, rara vez produce el mismo compromiso genuino que surge de una decisión voluntaria.\n\n" +
      "Quizás la solución no sea la obligación total, sino incentivos reales —académicos o económicos— que hagan que el servicio social sea una opción verdaderamente atractiva, sin necesidad de imponerlo por ley.",
    questions: [
      { id: "social-organization-19-q1", type: "true-false", prompt: "El autor tiene sentimientos completamente positivos sobre el servicio obligatorio.", correctAnswer: "false", justification: "\"La idea me genera sentimientos encontrados\"" },
      { id: "social-organization-19-q2", type: "true-false", prompt: "El autor propone incentivos como alternativa a la obligación total.", correctAnswer: "true", justification: "\"incentivos reales... que hagan que el servicio social sea una opción verdaderamente atractiva\"" },
      { id: "social-organization-19-q3", type: "mcq", prompt: "Según el autor, ¿qué palabra le preocupa del debate?", options: ["Obligatorio", "Comunitario", "Servicio", "Social"], correctAnswer: "Obligatorio" },
      { id: "social-organization-19-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrada de blog", "Un informe oficial", "Un anuncio publicitario", "Una receta"], correctAnswer: "Una entrada de blog" },
      { id: "social-organization-19-q5", type: "short", prompt: "¿Qué tipo de compromiso, según el autor, surge de una decisión voluntaria?", correctAnswer: "un compromiso genuino" },
    ],
    vocabulary: [
      { es: "actualmente", en: "currently" },
      { es: "instituto", en: "secondary school" },
      { es: "comunitario", en: "community (adj.)" },
      { es: "entiendo", en: "I understand" },
      { es: "comunidad", en: "community" },
      { es: "distintos", en: "different" },
      { es: "sociales", en: "social" },
      { es: "necesidad", en: "need" },
    ],
  },
  {
    id: "reading-social-organization-20",
    themeId: "social-organization",
    title: "Foro: ¿Cómo puedo empezar a hacer voluntariado?",
    textType: "Forum post",
    level: "easy",
    bodyEs:
      "Publicado por ChicaSolidaria16\n\n" +
      "Hola a todos. Llevo tiempo queriendo hacer voluntariado, pero no sé por dónde empezar ni qué tipo de organización buscar. Tengo dieciséis años.\n\n" +
      "¿Alguien puede recomendarme cómo encontrar oportunidades cerca de mi ciudad? También me preocupa que, al ser menor de edad, muchas organizaciones no me acepten.\n\n" +
      "Me interesan especialmente temas relacionados con el medioambiente y con ayudar a personas mayores, pero estoy abierta a otras opciones si alguien tiene una buena experiencia que recomendar.\n\n" +
      "¡Gracias por cualquier ayuda!",
    questions: [
      { id: "social-organization-20-q1", type: "true-false", prompt: "La autora ya tiene experiencia haciendo voluntariado.", correctAnswer: "false", justification: "\"Llevo tiempo queriendo hacer voluntariado\"" },
      { id: "social-organization-20-q2", type: "true-false", prompt: "A la autora le preocupa que su edad sea un obstáculo.", correctAnswer: "true", justification: "\"me preocupa que, al ser menor de edad, muchas organizaciones no me acepten\"" },
      { id: "social-organization-20-q3", type: "mcq", prompt: "¿Qué temas le interesan especialmente a la autora?", options: ["El medioambiente y ayudar a personas mayores", "Los deportes y la música", "La tecnología y los videojuegos", "La moda y el diseño"], correctAnswer: "El medioambiente y ayudar a personas mayores" },
      { id: "social-organization-20-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una publicación de un foro", "Un informe oficial", "Una entrevista", "Un menú"], correctAnswer: "Una publicación de un foro" },
      { id: "social-organization-20-q5", type: "short", prompt: "¿Cuántos años tiene la autora de la publicación?", correctAnswer: "dieciséis" },
    ],
    vocabulary: [
      { es: "publicado", en: "posted / published" },
      { es: "voluntariado", en: "volunteering" },
      { es: "organización", en: "organization" },
      { es: "dieciséis", en: "sixteen" },
      { es: "encontrar", en: "to find" },
      { es: "especialmente", en: "especially" },
      { es: "experiencia", en: "experience" },
      { es: "cualquier", en: "any" },
    ],
  },
  {
    id: "reading-sharing-planet-12",
    themeId: "sharing-planet",
    title: "Guía: Cómo hacer compost casero",
    textType: "Instructional guide",
    level: "easy",
    bodyEs:
      "Hacer compost en casa es una manera sencilla de reducir la basura y crear abono natural para las plantas. Sigue estos pasos para empezar.\n\n" +
      "Primero, consigue un contenedor con buena ventilación, ya sea comprado o hecho con materiales reciclados. Colócalo en un lugar exterior, si es posible.\n\n" +
      "Segundo, añade una mezcla de restos de comida —como cáscaras de fruta y verdura— junto con materiales secos, como hojas o cartón. El equilibrio entre lo húmedo y lo seco es clave para que el compost no huela mal.\n\n" +
      "Tercero, remueve la mezcla cada semana para que le llegue oxígeno. Evita añadir carne, lácteos o aceites, ya que estos atraen plagas y no se descomponen bien.\n\n" +
      "En unos dos o tres meses, tendrás un abono natural listo para usar en tu jardín o macetas.",
    questions: [
      { id: "sharing-planet-12-q1", type: "true-false", prompt: "Se debe añadir carne al compost.", correctAnswer: "false", justification: "\"Evita añadir carne, lácteos o aceites\"" },
      { id: "sharing-planet-12-q2", type: "true-false", prompt: "Es importante remover la mezcla cada semana.", correctAnswer: "true", justification: "\"remueve la mezcla cada semana para que le llegue oxígeno\"" },
      { id: "sharing-planet-12-q3", type: "mcq", prompt: "¿Cuánto tiempo tarda en estar listo el compost?", options: ["Unos dos o tres meses", "Una semana", "Un año", "Un día"], correctAnswer: "Unos dos o tres meses" },
      { id: "sharing-planet-12-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una guía instructiva", "Un poema", "Una crítica de cine", "Una carta personal"], correctAnswer: "Una guía instructiva" },
      { id: "sharing-planet-12-q5", type: "short", prompt: "¿Qué atrae la carne, los lácteos y los aceites al compost?", correctAnswer: "plagas" },
    ],
    vocabulary: [
      { es: "reducir", en: "to reduce" },
      { es: "plantas", en: "plants" },
      { es: "empezar", en: "to begin" },
      { es: "primero", en: "first" },
      { es: "materiales", en: "materials" },
      { es: "posible", en: "possible" },
      { es: "segundo", en: "second" },
      { es: "tercero", en: "third" },
    ],
  },
  {
    id: "reading-sharing-planet-13",
    themeId: "sharing-planet",
    title: "Informe sobre la pérdida de biodiversidad marina",
    textType: "Official report",
    level: "hard",
    bodyEs:
      "El presente informe, elaborado por un consorcio internacional de institutos oceanográficos, documenta el declive acelerado de la biodiversidad marina observado durante la última década en los principales océanos del planeta.\n\n" +
      "Según los datos recopilados, las poblaciones de especies marinas monitoreadas han disminuido en promedio un treinta y ocho por ciento desde el año dos mil, debido principalmente a la sobrepesca, la contaminación por plásticos y la acidificación de los océanos causada por el cambio climático.\n\n" +
      "Los arrecifes de coral, considerados uno de los ecosistemas más ricos en biodiversidad del planeta, han sido especialmente afectados: se estima que la mitad de los arrecifes documentados en los años noventa ya no existen en su forma original.\n\n" +
      "El informe recomienda con urgencia la ampliación de las áreas marinas protegidas, actualmente limitadas a menos del ocho por ciento de la superficie oceánica mundial, así como acuerdos internacionales más estrictos sobre pesca sostenible.",
    questions: [
      { id: "sharing-planet-13-q1", type: "true-false", prompt: "Las poblaciones de especies marinas han aumentado desde el año dos mil.", correctAnswer: "false", justification: "\"han disminuido en promedio un treinta y ocho por ciento desde el año dos mil\"" },
      { id: "sharing-planet-13-q2", type: "true-false", prompt: "Los arrecifes de coral han sido especialmente afectados por esta pérdida de biodiversidad.", correctAnswer: "true", justification: "\"han sido especialmente afectados\"" },
      { id: "sharing-planet-13-q3", type: "mcq", prompt: "¿Qué porcentaje de la superficie oceánica mundial está actualmente protegido?", options: ["Menos del 8%", "Más del 50%", "El 100%", "El 38%"], correctAnswer: "Menos del 8%" },
      { id: "sharing-planet-13-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un informe oficial", "Una carta personal", "Un anuncio", "Una reseña"], correctAnswer: "Un informe oficial" },
      { id: "sharing-planet-13-q5", type: "short", prompt: "¿Qué tres causas principales menciona el informe para la pérdida de biodiversidad marina?", correctAnswer: "la sobrepesca, la contaminación por plásticos y la acidificación de los océanos" },
    ],
    vocabulary: [
      { es: "presente", en: "present" },
      { es: "informe", en: "report" },
      { es: "internacional", en: "international" },
      { es: "institutos", en: "secondary schools" },
      { es: "contaminación", en: "pollution" },
      { es: "climático", en: "climate (adj.)" },
      { es: "especialmente", en: "especially" },
      { es: "actualmente", en: "currently" },
    ],
  },
  {
    id: "reading-sharing-planet-14",
    themeId: "sharing-planet",
    title: "Discurso de un joven activista climático",
    textType: "Speech",
    level: "hard",
    bodyEs:
      "Buenos días. Me llamo Tomás y tengo diecisiete años. No estoy aquí porque sea un experto en climatología, sino porque, como muchos jóvenes de mi generación, heredaré las consecuencias de decisiones que no tomé yo.\n\n" +
      "Durante años, se nos ha dicho que la solución al cambio climático está en pequeños gestos individuales: reciclar, apagar las luces, ducharnos más rápido. Y sí, estos gestos importan. Pero seamos honestos: no son suficientes frente a la escala del problema que enfrentamos.\n\n" +
      "Lo que realmente necesitamos son decisiones políticas valientes: inversión masiva en energías renovables, regulaciones estrictas para las industrias más contaminantes, y un compromiso real, no solo palabras bonitas en conferencias como esta.\n\n" +
      "No les pido que nos crean solo porque somos jóvenes e idealistas. Les pido que miren los datos científicos, que llevan décadas advirtiéndonos de esto, y que actúen con la urgencia que la situación exige.\n\n" +
      "El planeta no puede esperar a que terminemos de debatir. Gracias.",
    questions: [
      { id: "sharing-planet-14-q1", type: "true-false", prompt: "Tomás dice que los gestos individuales son completamente inútiles.", correctAnswer: "false", justification: "\"estos gestos importan. Pero... no son suficientes\"" },
      { id: "sharing-planet-14-q2", type: "true-false", prompt: "Tomás pide decisiones políticas valientes, no solo palabras.", correctAnswer: "true", justification: "\"Lo que realmente necesitamos son decisiones políticas valientes... un compromiso real, no solo palabras bonitas\"" },
      { id: "sharing-planet-14-q3", type: "mcq", prompt: "¿Qué le pide Tomás a la audiencia al final del discurso?", options: ["Que miren los datos científicos y actúen con urgencia", "Que dejen de reciclar", "Que ignoren a los científicos", "Que esperen unos años más"], correctAnswer: "Que miren los datos científicos y actúen con urgencia" },
      { id: "sharing-planet-14-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un discurso", "Una receta", "Un correo electrónico", "Un anuncio"], correctAnswer: "Un discurso" },
      { id: "sharing-planet-14-q5", type: "short", prompt: "¿Cuántos años tiene Tomás?", correctAnswer: "diecisiete" },
    ],
    vocabulary: [
      { es: "diecisiete", en: "seventeen" },
      { es: "decisiones", en: "decisions" },
      { es: "solución", en: "solution" },
      { es: "climático", en: "climate (adj.)" },
      { es: "pequeños", en: "small (pl.)" },
      { es: "problema", en: "problem" },
      { es: "realmente", en: "really" },
      { es: "situación", en: "situation" },
    ],
  },
  {
    id: "reading-sharing-planet-15",
    themeId: "sharing-planet",
    title: "Postal desde un parque nacional en peligro",
    textType: "Postcard",
    level: "medium",
    bodyEs:
      "¡Hola, Marina!\n\n" +
      "Te escribo desde el Parque Nacional Los Cedros, donde estoy pasando unos días con mi familia. El paisaje es impresionante, pero también un poco triste de ver.\n\n" +
      "Uno de los guardaparques nos explicó que, debido a la sequía prolongada de los últimos años, gran parte del bosque está mucho más seco de lo normal, lo que ha aumentado considerablemente el riesgo de incendios forestales.\n\n" +
      "Ayer participamos en una actividad organizada por el parque para plantar árboles nativos en una zona que se quemó parcialmente el año pasado. Fue agotador, pero también reconfortante sentir que hacíamos algo útil.\n\n" +
      "Espero que este parque siga existiendo tal como lo conocemos para cuando nuestros hijos puedan visitarlo algún día.\n\n" +
      "Un abrazo,\nCarla",
    questions: [
      { id: "sharing-planet-15-q1", type: "true-false", prompt: "El bosque está más seco de lo normal debido a la sequía.", correctAnswer: "true", justification: "\"debido a la sequía prolongada... gran parte del bosque está mucho más seco de lo normal\"" },
      { id: "sharing-planet-15-q2", type: "true-false", prompt: "Carla y su familia plantaron árboles en una zona que nunca se ha quemado.", correctAnswer: "false", justification: "\"plantar árboles nativos en una zona que se quemó parcialmente el año pasado\"" },
      { id: "sharing-planet-15-q3", type: "mcq", prompt: "¿Qué ha aumentado debido a la sequía, según el guardaparques?", options: ["El riesgo de incendios forestales", "El número de turistas", "La cantidad de animales", "El precio de las entradas"], correctAnswer: "El riesgo de incendios forestales" },
      { id: "sharing-planet-15-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una postal", "Un informe oficial", "Una reseña", "Un anuncio"], correctAnswer: "Una postal" },
      { id: "sharing-planet-15-q5", type: "short", prompt: "¿Qué actividad hizo la familia de Carla ayer?", correctAnswer: "plantar árboles nativos" },
    ],
    vocabulary: [
      { es: "escribo", en: "I write" },
      { es: "nacional", en: "national" },
      { es: "familia", en: "family" },
      { es: "explicó", en: "explained" },
      { es: "últimos", en: "last / recent (pl.)" },
      { es: "normal", en: "normal" },
      { es: "aumentado", en: "increased" },
      { es: "pasado", en: "past / last (e.g. last year)" },
    ],
  },
  {
    id: "reading-sharing-planet-16",
    themeId: "sharing-planet",
    title: "Reseña: 'La Tierra que heredamos'",
    textType: "Review",
    level: "medium",
    bodyEs:
      "'La Tierra que heredamos' es un libro de divulgación científica que explica el cambio climático de una forma accesible incluso para quienes no tienen conocimientos previos de ciencia, y por eso lo recomiendo especialmente a estudiantes de instituto.\n\n" +
      "Lo que más aprecio del libro es que evita el tono catastrofista que domina gran parte de la conversación pública sobre este tema. En lugar de solo enumerar problemas, dedica la mitad final a soluciones reales que ya se están implementando en distintas partes del mundo.\n\n" +
      "Mi crítica principal es que, en algunos capítulos centrados en política internacional, el texto se vuelve denso y repetitivo, lo cual puede desanimar a lectores más jóvenes.\n\n" +
      "Aun con ese defecto, es una lectura que recomiendo firmemente: informativa sin ser deprimente, y honesta sin dejar de ser esperanzadora.",
    questions: [
      { id: "sharing-planet-16-q1", type: "true-false", prompt: "El libro solo enumera problemas, sin ofrecer soluciones.", correctAnswer: "false", justification: "\"dedica la mitad final a soluciones reales que ya se están implementando\"" },
      { id: "sharing-planet-16-q2", type: "true-false", prompt: "Según la reseña, algunos capítulos sobre política internacional son densos y repetitivos.", correctAnswer: "true", justification: "\"el texto se vuelve denso y repetitivo\"" },
      { id: "sharing-planet-16-q3", type: "mcq", prompt: "¿A quién recomienda especialmente el autor este libro?", options: ["A estudiantes de instituto", "A científicos profesionales", "A políticos", "A niños pequeños"], correctAnswer: "A estudiantes de instituto" },
      { id: "sharing-planet-16-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una reseña", "Un informe oficial", "Una carta formal", "Un menú"], correctAnswer: "Una reseña" },
      { id: "sharing-planet-16-q5", type: "short", prompt: "¿A qué dedica el libro su mitad final?", correctAnswer: "soluciones reales" },
    ],
    vocabulary: [
      { es: "climático", en: "climate (adj.)" },
      { es: "recomiendo", en: "I recommend" },
      { es: "especialmente", en: "especially" },
      { es: "estudiantes", en: "students" },
      { es: "instituto", en: "secondary school" },
      { es: "problemas", en: "problems" },
      { es: "principal", en: "main" },
      { es: "internacional", en: "international" },
    ],
  },
  {
    id: "reading-sharing-planet-17",
    themeId: "sharing-planet",
    title: "Publicación: Pequeños cambios para ahorrar agua",
    textType: "Social media post",
    level: "easy",
    bodyEs:
      "¿Sabíais que una ducha de cinco minutos puede ahorrar hasta setenta litros de agua comparado con un baño completo? 💧 Llevo un mes intentando reducir mi consumo de agua en casa y quería compartir lo que he aprendido.\n\n" +
      "Cerrar el grifo mientras me cepillo los dientes fue el cambio más fácil, y aun así ahorra bastante agua cada día. También empecé a reutilizar el agua de cocinar verduras para regar las plantas.\n\n" +
      "Al principio pensaba que estos gestos eran demasiado pequeños para importar, pero sumados a lo largo de un mes, mi factura de agua bajó notablemente.\n\n" +
      "¿Alguien tiene más trucos para compartir? ¡Cada gota cuenta! 🌍💙 #ahorraagua #sostenibilidad",
    questions: [
      { id: "sharing-planet-17-q1", type: "true-false", prompt: "Según la publicación, una ducha corta ahorra agua comparada con un baño completo.", correctAnswer: "true", justification: "\"una ducha de cinco minutos puede ahorrar hasta setenta litros de agua comparado con un baño completo\"" },
      { id: "sharing-planet-17-q2", type: "true-false", prompt: "La autora pensó desde el principio que estos gestos eran muy importantes.", correctAnswer: "false", justification: "\"Al principio pensaba que estos gestos eran demasiado pequeños para importar\"" },
      { id: "sharing-planet-17-q3", type: "mcq", prompt: "¿Qué hace la autora con el agua de cocinar verduras?", options: ["Reutilizarla para regar las plantas", "Tirarla inmediatamente", "Beberla", "Congelarla"], correctAnswer: "Reutilizarla para regar las plantas" },
      { id: "sharing-planet-17-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una publicación en redes sociales", "Un informe científico", "Una carta formal", "Un menú"], correctAnswer: "Una publicación en redes sociales" },
      { id: "sharing-planet-17-q5", type: "short", prompt: "¿Cuánto tiempo lleva la autora intentando reducir su consumo de agua?", correctAnswer: "un mes" },
    ],
    vocabulary: [
      { es: "minutos", en: "minutes" },
      { es: "completo", en: "complete / full" },
      { es: "compartir", en: "to share" },
      { es: "bastante", en: "quite / enough" },
      { es: "verduras", en: "vegetables" },
      { es: "principio", en: "beginning" },
      { es: "demasiado", en: "too much" },
      { es: "pequeños", en: "small (pl.)" },
    ],
  },
  {
    id: "reading-sharing-planet-18",
    themeId: "sharing-planet",
    title: "Mi experiencia viviendo sin plástico durante un mes",
    textType: "Blog post",
    level: "medium",
    bodyEs:
      "El mes pasado decidí hacer un experimento personal: intentar vivir treinta días sin comprar ni usar plástico de un solo uso. Quería compartir lo que aprendí, porque fue mucho más difícil de lo que imaginaba.\n\n" +
      "La primera semana fue frustrante. Descubrí que el plástico está literalmente en todas partes: el pan del supermercado, las botellas de champú, incluso las etiquetas de la ropa. Tuve que cambiar por completo mis rutinas de compra.\n\n" +
      "Con el tiempo, encontré alternativas que ahora forman parte de mi vida normal: bolsas de tela reutilizables, jabón sólido en lugar de líquido, y comprar en tiendas a granel siempre que es posible.\n\n" +
      "No voy a mentir: no logré eliminar el cien por cien del plástico de mi vida, pero sí reduje mi consumo drásticamente. Y lo más importante, ahora soy mucho más consciente de cada decisión de compra que hago.",
    questions: [
      { id: "sharing-planet-18-q1", type: "true-false", prompt: "La autora logró eliminar el cien por cien del plástico de su vida.", correctAnswer: "false", justification: "\"no logré eliminar el cien por cien del plástico de mi vida\"" },
      { id: "sharing-planet-18-q2", type: "true-false", prompt: "La autora descubrió que el plástico está presente en muchos productos cotidianos.", correctAnswer: "true", justification: "\"el plástico está literalmente en todas partes\"" },
      { id: "sharing-planet-18-q3", type: "mcq", prompt: "¿Qué usa la autora ahora en lugar de jabón líquido?", options: ["Jabón sólido", "Jabón en polvo", "Nada", "Jabón desechable"], correctAnswer: "Jabón sólido" },
      { id: "sharing-planet-18-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrada de blog", "Un informe oficial", "Una postal", "Un menú"], correctAnswer: "Una entrada de blog" },
      { id: "sharing-planet-18-q5", type: "short", prompt: "¿Cuántos días duró el experimento de la autora?", correctAnswer: "treinta días" },
    ],
    vocabulary: [
      { es: "treinta", en: "thirty" },
      { es: "compartir", en: "to share" },
      { es: "aprendí", en: "I learned" },
      { es: "difícil", en: "difficult" },
      { es: "imaginaba", en: "imagined" },
      { es: "primera", en: "first" },
      { es: "completo", en: "complete / full" },
      { es: "importante", en: "important" },
    ],
  },
  {
    id: "reading-sharing-planet-19",
    themeId: "sharing-planet",
    title: "Diario: Un día limpiando la playa",
    textType: "Diary entry",
    level: "easy",
    bodyEs:
      "Querido diario:\n\n" +
      "Hoy participé en una jornada de limpieza de playa organizada por una asociación ambiental local. Llegamos a las nueve de la mañana y ya había mucha gente esperando con guantes y bolsas.\n\n" +
      "Me sorprendió muchísimo la cantidad de colillas de cigarro que encontramos, más que cualquier otro tipo de basura. Nunca había pensado en ellas como un problema ambiental tan grande.\n\n" +
      "Entre todos los voluntarios recogimos más de cien kilos de basura en solo tres horas. Al final, sentía los brazos cansados, pero también una satisfacción enorme al ver la playa mucho más limpia que por la mañana.\n\n" +
      "Definitivamente pienso repetir esta experiencia el próximo mes.",
    questions: [
      { id: "sharing-planet-19-q1", type: "true-false", prompt: "La autora encontró más colillas de cigarro que cualquier otro tipo de basura.", correctAnswer: "true", justification: "\"la cantidad de colillas de cigarro que encontramos, más que cualquier otro tipo de basura\"" },
      { id: "sharing-planet-19-q2", type: "true-false", prompt: "Los voluntarios recogieron menos de diez kilos de basura.", correctAnswer: "false", justification: "\"recogimos más de cien kilos de basura en solo tres horas\"" },
      { id: "sharing-planet-19-q3", type: "mcq", prompt: "¿A qué hora empezó la jornada de limpieza?", options: ["A las nueve de la mañana", "Al mediodía", "A las seis de la tarde", "A medianoche"], correctAnswer: "A las nueve de la mañana" },
      { id: "sharing-planet-19-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrada de diario", "Un informe oficial", "Un anuncio", "Una entrevista"], correctAnswer: "Una entrada de diario" },
      { id: "sharing-planet-19-q5", type: "short", prompt: "¿Cuántos kilos de basura recogieron en total?", correctAnswer: "más de cien kilos" },
    ],
    vocabulary: [
      { es: "querido", en: "dear / beloved" },
      { es: "asociación", en: "association" },
      { es: "llegamos", en: "we arrived" },
      { es: "cualquier", en: "any" },
      { es: "problema", en: "problem" },
      { es: "voluntarios", en: "volunteers" },
      { es: "experiencia", en: "experience" },
      { es: "próximo", en: "next" },
    ],
  },
  {
    id: "reading-sharing-planet-20",
    themeId: "sharing-planet",
    title: "Entrevista con un climatólogo sobre el futuro del planeta",
    textType: "Interview",
    level: "hard",
    bodyEs:
      "Hablamos con el doctor Ramón Iglesias, climatólogo con más de veinte años de experiencia investigando patrones climáticos globales.\n\n" +
      "— Doctor Iglesias, con tanta información contradictoria circulando, ¿qué sabemos con certeza sobre el cambio climático?\n\n" +
      "— Sabemos, con un consenso científico abrumador, que las temperaturas globales están aumentando principalmente por la actividad humana, en particular por la quema de combustibles fósiles. Esto no es una teoría en debate dentro de la comunidad científica.\n\n" +
      "— ¿Es demasiado tarde para revertir la situación?\n\n" +
      "— \"Revertir\" completamente, probablemente sí, al menos a corto plazo. Pero \"limitar el daño\" es completamente posible todavía. La diferencia entre un aumento de temperatura de un grado y medio frente a tres grados es enorme para la vida en el planeta.\n\n" +
      "— ¿Qué le da esperanza?\n\n" +
      "— La rapidez con la que ha bajado el coste de las energías renovables en la última década. Hace veinte años, esto habría parecido ciencia ficción.",
    questions: [
      { id: "sharing-planet-20-q1", type: "true-false", prompt: "Según el doctor Iglesias, existe un consenso científico abrumador sobre el cambio climático.", correctAnswer: "true", justification: "\"un consenso científico abrumador, que las temperaturas globales están aumentando principalmente por la actividad humana\"" },
      { id: "sharing-planet-20-q2", type: "true-false", prompt: "El doctor Iglesias afirma que ya no es posible limitar el daño del cambio climático.", correctAnswer: "false", justification: "\"'Limitar el daño' es completamente posible todavía\"" },
      { id: "sharing-planet-20-q3", type: "mcq", prompt: "¿Qué le da esperanza al doctor Iglesias?", options: ["La rapidez con la que ha bajado el coste de las energías renovables", "El aumento de la temperatura", "La falta de acción política", "El precio del petróleo"], correctAnswer: "La rapidez con la que ha bajado el coste de las energías renovables" },
      { id: "sharing-planet-20-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrevista", "Un anuncio", "Una postal", "Un poema"], correctAnswer: "Una entrevista" },
      { id: "sharing-planet-20-q5", type: "short", prompt: "¿Cuántos años de experiencia tiene el doctor Iglesias investigando el clima?", correctAnswer: "más de veinte años" },
    ],
    vocabulary: [
      { es: "experiencia", en: "experience" },
      { es: "información", en: "information" },
      { es: "climático", en: "climate (adj.)" },
      { es: "comunidad", en: "community" },
      { es: "demasiado", en: "too much" },
      { es: "situación", en: "situation" },
      { es: "completamente", en: "completely" },
      { es: "diferencia", en: "difference" },
    ],
  },
  // --- 30 additional passages (6 per theme), added for expanded practice ---
  {
    id: "reading-identities-21",
    themeId: "identities",
    title: "Mi abuela y su acento inolvidable",
    textType: "Blog post",
    level: "easy",
    bodyEs:
      "Mi abuela lleva cuarenta años viviendo en Canadá, pero todavía habla inglés con un acento gallego muy marcado. De pequeña, a veces me daba un poco de vergüenza cuando venía a buscarme al colegio y hablaba con mis profesores.\n\n" +
      "Ahora que soy mayor, entiendo lo equivocada que estaba. Su acento no es un error, es la prueba de todo lo que ha vivido: dejó su pueblo con veinte años, aprendió un idioma nuevo sola y crió a tres hijos lejos de su familia.\n\n" +
      "El mes pasado le pregunté si alguna vez había intentado perder el acento. Se rió y me dijo que no, que su acento es tan suyo como su nombre. Esa respuesta me hizo pensar mucho sobre mi propia forma de hablar.\n\n" +
      "Hoy ya no me avergüenzo de nada relacionado con mi familia. Al contrario, cuando alguien nota mi apellido gallego, me siento orgullosa de contar su historia.",
    questions: [
      { id: "identities-21-q1", type: "true-false", prompt: "La autora siempre se sintió orgullosa del acento de su abuela.", correctAnswer: "false", justification: "\"De pequeña, a veces me daba un poco de vergüenza\"" },
      { id: "identities-21-q2", type: "true-false", prompt: "La abuela ha intentado perder su acento gallego.", correctAnswer: "false", justification: "\"Se rió y me dijo que no\"" },
      { id: "identities-21-q3", type: "mcq", prompt: "¿Con qué edad dejó la abuela su pueblo?", options: ["Veinte años", "Diez años", "Cuarenta años", "Sesenta años"], correctAnswer: "Veinte años" },
      { id: "identities-21-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrada de blog", "Un informe oficial", "Un anuncio", "Una receta"], correctAnswer: "Una entrada de blog" },
      { id: "identities-21-q5", type: "short", prompt: "¿Cuántos años lleva la abuela viviendo en Canadá?", correctAnswer: "cuarenta años" },
    ],
    vocabulary: [
      { es: "vergüenza", en: "shame / embarrassment" },
      { es: "equivocada", en: "wrong / mistaken" },
      { es: "crió", en: "raised (children)" },
      { es: "acento", en: "accent" },
      { es: "orgullosa", en: "proud (fem.)" },
      { es: "apellido", en: "surname" },
      { es: "propia", en: "own (fem.)" },
      { es: "gallego", en: "Galician" },
    ],
  },
  {
    id: "reading-identities-22",
    themeId: "identities",
    title: "Entrevista: Ser una persona trans en un pueblo pequeño",
    textType: "Interview",
    level: "hard",
    bodyEs:
      "Hablamos con Iker, de diecinueve años, sobre su experiencia al hacer su transición en un pueblo de menos de dos mil habitantes.\n\n" +
      "— Iker, ¿cómo fue el proceso de contárselo a tu comunidad?\n" +
      "— Fue muy distinto a lo que imaginaba. Tenía mucho miedo porque en un pueblo pequeño todo el mundo se conoce y los rumores corren rápido. Sin embargo, la mayoría de la gente lo tomó mejor de lo que esperaba.\n\n" +
      "— ¿Hubo alguien que reaccionara mal?\n" +
      "— Sí, algunos vecinos dejaron de saludarme, y eso duele. Pero también descubrí apoyo en lugares inesperados, como el dueño del bar del pueblo, que ahora me defiende si alguien hace un comentario feo.\n\n" +
      "— ¿Qué les dirías a otros jóvenes trans que viven en pueblos pequeños?\n" +
      "— Que no están solos, aunque a veces lo parezca. Internet me ayudó a encontrar a otras personas con experiencias parecidas, y eso me dio fuerzas para ser yo mismo en mi propio pueblo, sin tener que mudarme a una ciudad grande.",
    questions: [
      { id: "identities-22-q1", type: "true-false", prompt: "Todos los vecinos de Iker reaccionaron mal ante su transición.", correctAnswer: "false", justification: "\"la mayoría de la gente lo tomó mejor de lo que esperaba\"" },
      { id: "identities-22-q2", type: "true-false", prompt: "Iker encontró apoyo en el dueño del bar del pueblo.", correctAnswer: "true", justification: "\"el dueño del bar del pueblo, que ahora me defiende\"" },
      { id: "identities-22-q3", type: "mcq", prompt: "¿Qué le ayudó a Iker a encontrar a otras personas con experiencias parecidas?", options: ["Internet", "Su familia", "El colegio", "Un libro"], correctAnswer: "Internet" },
      { id: "identities-22-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrevista", "Un anuncio", "Una postal", "Un informe"], correctAnswer: "Una entrevista" },
      { id: "identities-22-q5", type: "short", prompt: "¿Cuántos habitantes tiene el pueblo de Iker?", correctAnswer: "menos de dos mil" },
    ],
    vocabulary: [
      { es: "transición", en: "transition" },
      { es: "habitantes", en: "inhabitants" },
      { es: "rumores", en: "rumors" },
      { es: "inesperados", en: "unexpected" },
      { es: "defiende", en: "defends" },
      { es: "parecidas", en: "similar" },
      { es: "mudarme", en: "to move (residence)" },
      { es: "fuerzas", en: "strength" },
    ],
  },
  {
    id: "reading-identities-23",
    themeId: "identities",
    title: "¡Campamento de verano multicultural!",
    textType: "Advertisement",
    level: "easy",
    bodyEs:
      "¿Quieres pasar un verano diferente? ¡Únete a Puentes, el campamento donde se mezclan más de quince nacionalidades!\n\n" +
      "Durante dos semanas, jóvenes de entre catorce y diecisiete años convivirán en cabañas compartidas con compañeros de otros países. Cada mañana habrá talleres de idiomas, y cada tarde, actividades culturales donde cada grupo presentará algo típico de su país: comida, música o bailes tradicionales.\n\n" +
      "\"No sabía casi nada sobre Corea del Sur antes de venir, y ahora tengo una amiga allí con la que hablo todas las semanas\", cuenta Nora, participante del año pasado.\n\n" +
      "El precio incluye alojamiento, comidas y todas las actividades. Hay becas disponibles para familias que las necesiten. Las plazas son limitadas a sesenta participantes, así que no esperes hasta el último momento para inscribirte.",
    questions: [
      { id: "identities-23-q1", type: "true-false", prompt: "El campamento dura un mes.", correctAnswer: "false", justification: "\"Durante dos semanas\"" },
      { id: "identities-23-q2", type: "true-false", prompt: "No hay ayuda económica disponible para las familias.", correctAnswer: "false", justification: "\"Hay becas disponibles para familias que las necesiten\"" },
      { id: "identities-23-q3", type: "mcq", prompt: "¿Cuántas plazas hay disponibles?", options: ["Sesenta", "Quince", "Cien", "Veinte"], correctAnswer: "Sesenta" },
      { id: "identities-23-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un anuncio publicitario", "Una entrada de diario", "Un informe oficial", "Una entrevista"], correctAnswer: "Un anuncio publicitario" },
      { id: "identities-23-q5", type: "short", prompt: "¿Qué edades pueden participar en el campamento?", correctAnswer: "entre catorce y diecisiete años" },
    ],
    vocabulary: [
      { es: "nacionalidades", en: "nationalities" },
      { es: "convivirán", en: "will live together" },
      { es: "compartidas", en: "shared" },
      { es: "talleres", en: "workshops" },
      { es: "tradicionales", en: "traditional" },
      { es: "alojamiento", en: "lodging" },
      { es: "becas", en: "scholarships" },
      { es: "inscribirte", en: "to sign up" },
    ],
  },
  {
    id: "reading-identities-24",
    themeId: "identities",
    title: "Carta a mi yo del futuro",
    textType: "Personal letter",
    level: "medium",
    bodyEs:
      "Querido yo del futuro:\n\n" +
      "Te escribo esta carta el día que cumplo quince años, para que la leas dentro de diez años exactos. En este momento, todavía no sé quién soy realmente. Cambio de opinión sobre casi todo cada semana: mi estilo, mis gustos musicales, incluso lo que quiero estudiar.\n\n" +
      "Mis padres dicen que esto es normal a mi edad, que la identidad no se construye de un día para otro. Espero que para cuando leas esto, hayas encontrado algunas respuestas que ahora mismo me faltan.\n\n" +
      "Quiero preguntarte: ¿sigues tocando la guitarra? ¿Te mudaste a otra ciudad como siempre decías que querías? ¿Sigues siendo tan tímida con la gente nueva, o eso también cambió?\n\n" +
      "Espero que, seas quien seas dentro de diez años, te sientas orgullosa de la persona en la que te has convertido, aunque sea completamente distinta a la que imaginas hoy.\n\n" +
      "Con cariño,\nTu yo de quince años",
    questions: [
      { id: "identities-24-q1", type: "true-false", prompt: "La autora tiene claro quién es en el momento de escribir la carta.", correctAnswer: "false", justification: "\"todavía no sé quién soy realmente\"" },
      { id: "identities-24-q2", type: "true-false", prompt: "Sus padres piensan que cambiar de opinión constantemente es anormal a su edad.", correctAnswer: "false", justification: "\"Mis padres dicen que esto es normal a mi edad\"" },
      { id: "identities-24-q3", type: "mcq", prompt: "¿Dentro de cuántos años debe leerse la carta?", options: ["Diez años", "Cinco años", "Un año", "Quince años"], correctAnswer: "Diez años" },
      { id: "identities-24-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una carta personal", "Un artículo de periódico", "Un anuncio", "Una reseña"], correctAnswer: "Una carta personal" },
      { id: "identities-24-q5", type: "short", prompt: "¿Qué instrumento pregunta la autora si sigue tocando?", correctAnswer: "la guitarra" },
    ],
    vocabulary: [
      { es: "cumplo", en: "I turn (age)" },
      { es: "gustos", en: "tastes / preferences" },
      { es: "construye", en: "builds / is built" },
      { es: "faltan", en: "are missing" },
      { es: "mudaste", en: "you moved (residence)" },
      { es: "tímida", en: "shy (fem.)" },
      { es: "convertido", en: "become / turned into" },
      { es: "distinta", en: "different (fem.)" },
    ],
  },
  {
    id: "reading-identities-25",
    themeId: "identities",
    title: "Reseña: el documental 'Raíces y alas'",
    textType: "Review",
    level: "medium",
    bodyEs:
      "\"Raíces y alas\" sigue a cinco jóvenes de segunda generación que crecieron en Europa con padres inmigrantes de distintos países latinoamericanos. El documental, dirigido por la cineasta chilena Valentina Rojas, evita los clichés habituales sobre la inmigración y se centra en algo más sutil: la sensación de no pertenecer del todo a ningún sitio.\n\n" +
      "Lo que más destaca es la honestidad de los testimonios. Ninguno de los protagonistas presenta su identidad como un problema resuelto; todos siguen negociando, año tras año, qué partes de sus dos culturas quieren conservar.\n\n" +
      "La única pega es la duración: con casi dos horas y media, algunas escenas se repiten y el documental pierde ritmo hacia la mitad. Un montaje más ajustado habría beneficiado enormemente la película.\n\n" +
      "Aun así, recomiendo especialmente \"Raíces y alas\" a cualquier joven que se haya sentido alguna vez entre dos mundos. Pocas películas retratan esta experiencia con tanta ternura y tan poca condescendencia.",
    questions: [
      { id: "identities-25-q1", type: "true-false", prompt: "El documental presenta la identidad de los protagonistas como un problema ya resuelto.", correctAnswer: "false", justification: "\"Ninguno de los protagonistas presenta su identidad como un problema resuelto\"" },
      { id: "identities-25-q2", type: "true-false", prompt: "Según la reseña, la duración del documental es uno de sus puntos débiles.", correctAnswer: "true", justification: "\"La única pega es la duración\"" },
      { id: "identities-25-q3", type: "mcq", prompt: "¿Quién dirigió el documental?", options: ["Valentina Rojas", "Iker Ibarra", "Nora García", "Sofía Ruiz"], correctAnswer: "Valentina Rojas" },
      { id: "identities-25-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una reseña", "Un informe oficial", "Una carta formal", "Un anuncio"], correctAnswer: "Una reseña" },
      { id: "identities-25-q5", type: "short", prompt: "¿Cuánto dura aproximadamente el documental?", correctAnswer: "casi dos horas y media" },
    ],
    vocabulary: [
      { es: "cineasta", en: "filmmaker" },
      { es: "clichés", en: "clichés" },
      { es: "pertenecer", en: "to belong" },
      { es: "testimonios", en: "testimonies" },
      { es: "negociando", en: "negotiating" },
      { es: "duración", en: "duration / length" },
      { es: "montaje", en: "editing (film)" },
      { es: "ternura", en: "tenderness" },
    ],
  },
  {
    id: "reading-identities-26",
    themeId: "identities",
    title: "Por qué dejé de teñirme el pelo de rubio",
    textType: "Social media post",
    level: "easy",
    bodyEs:
      "Llevo dos meses sin teñirme el pelo por primera vez desde los catorce años, y quería compartir por qué tomé esta decisión. 🖤\n\n" +
      "Durante años me teñí de rubio porque, sin darme mucha cuenta, asociaba ese color con verme \"mejor\" o más aceptada. Nadie me obligó, pero crecí viendo casi solo a personas rubias en la tele, así que interioricé esa idea sin cuestionarla.\n\n" +
      "El cambio empezó cuando una prima me preguntó por qué no dejaba ver mi color natural, que es un castaño oscuro precioso. Me hizo pensar: ¿realmente me gustaba más el rubio, o solo estaba acostumbrada?\n\n" +
      "Ahora, cada vez que me miro al espejo, siento que me veo más como yo misma. No juzgo a nadie que decida teñirse el pelo por diversión, pero para mí, dejar de hacerlo fue una forma pequeña de aceptar mi identidad tal como es. 💛",
    questions: [
      { id: "identities-26-q1", type: "true-false", prompt: "La autora lleva tiñéndose el pelo desde los catorce años.", correctAnswer: "true", justification: "\"por primera vez desde los catorce años\"" },
      { id: "identities-26-q2", type: "true-false", prompt: "La autora critica a las personas que se tiñen el pelo por diversión.", correctAnswer: "false", justification: "\"No juzgo a nadie que decida teñirse el pelo por diversión\"" },
      { id: "identities-26-q3", type: "mcq", prompt: "¿Quién le hizo pensar sobre su color de pelo natural?", options: ["Una prima", "Su madre", "Una amiga del colegio", "Una desconocida"], correctAnswer: "Una prima" },
      { id: "identities-26-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una publicación en redes sociales", "Un informe oficial", "Una carta formal", "Un anuncio"], correctAnswer: "Una publicación en redes sociales" },
      { id: "identities-26-q5", type: "short", prompt: "¿De qué color es el pelo natural de la autora?", correctAnswer: "castaño oscuro" },
    ],
    vocabulary: [
      { es: "teñirme", en: "to dye (my hair)" },
      { es: "asociaba", en: "I associated" },
      { es: "aceptada", en: "accepted (fem.)" },
      { es: "interioricé", en: "I internalized" },
      { es: "cuestionarla", en: "to question it" },
      { es: "castaño", en: "brown / chestnut (hair color)" },
      { es: "acostumbrada", en: "used to / accustomed" },
      { es: "espejo", en: "mirror" },
    ],
  },
  {
    id: "reading-experiences-21",
    themeId: "experiences",
    title: "Diario: mi primer día de universidad",
    textType: "Diary entry",
    level: "easy",
    bodyEs:
      "Querido diario:\n\n" +
      "Hoy fue mi primer día en la universidad y todavía tengo la cabeza dándome vueltas. Llegué media hora antes porque tenía miedo de perderme en el campus, que es enorme comparado con mi antiguo instituto.\n\n" +
      "La primera clase fue de historia del arte, con casi doscientos estudiantes en la sala. Me sentí pequeñísima al principio, acostumbrada a clases de veinte personas. Sin embargo, en el descanso hablé con una chica llamada Julia que también estudia primero, y descubrimos que vivimos en el mismo barrio.\n\n" +
      "Lo más difícil fue encontrar mi próxima aula: el edificio de ciencias tiene cinco plantas y me perdí dos veces antes de llegar. Un estudiante de tercer año me vio con cara de confusión y se ofreció a acompañarme.\n\n" +
      "Ha sido un día agotador, pero al final me fui a casa sintiéndome un poco menos sola. Mañana ya sabré por dónde ir, al menos eso espero.",
    questions: [
      { id: "experiences-21-q1", type: "true-false", prompt: "El instituto anterior de la autora tenía clases más numerosas que la universidad.", correctAnswer: "false", justification: "\"acostumbrada a clases de veinte personas\"" },
      { id: "experiences-21-q2", type: "true-false", prompt: "Julia vive en el mismo barrio que la autora.", correctAnswer: "true", justification: "\"descubrimos que vivimos en el mismo barrio\"" },
      { id: "experiences-21-q3", type: "mcq", prompt: "¿Quién ayudó a la autora a encontrar su aula?", options: ["Un estudiante de tercer año", "Un profesor", "Julia", "Un guardia de seguridad"], correctAnswer: "Un estudiante de tercer año" },
      { id: "experiences-21-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrada de diario", "Un correo formal", "Un artículo de periódico", "Un anuncio"], correctAnswer: "Una entrada de diario" },
      { id: "experiences-21-q5", type: "short", prompt: "¿Cuántas plantas tiene el edificio de ciencias?", correctAnswer: "cinco plantas" },
    ],
    vocabulary: [
      { es: "campus", en: "campus" },
      { es: "descanso", en: "break" },
      { es: "edificio", en: "building" },
      { es: "plantas", en: "floors (of a building)" },
      { es: "confusión", en: "confusion" },
      { es: "acompañarme", en: "to accompany me" },
      { es: "agotador", en: "exhausting" },
      { es: "sintiéndome", en: "feeling (myself)" },
    ],
  },
  {
    id: "reading-experiences-22",
    themeId: "experiences",
    title: "Ritos de iniciación alrededor del mundo",
    textType: "Magazine article",
    level: "hard",
    bodyEs:
      "En casi todas las culturas existe algún rito que marca el paso de la infancia a la edad adulta. Aunque las formas varían enormemente, la función psicológica que cumplen es sorprendentemente parecida en todo el planeta.\n\n" +
      "En Japón, el Seijin Shiki celebra a quienes cumplen veinte años con una ceremonia formal en la que los jóvenes visten kimono tradicional y reciben, simbólicamente, todos los derechos y responsabilidades de la vida adulta. En algunas comunidades indígenas de Norteamérica, los adolescentes realizan una búsqueda de visión: pasan varios días solos en la naturaleza, sin comida, reflexionando sobre su propósito en la vida.\n\n" +
      "Los antropólogos coinciden en que estos ritos comparten una estructura común, dividida en tres fases: separación de la vida anterior, un periodo de transición difícil, y finalmente la reincorporación a la comunidad con un nuevo estatus reconocido por todos.\n\n" +
      "En las sociedades occidentales contemporáneas, muchos de estos ritos han desaparecido o se han vuelto puramente simbólicos, lo cual, según algunos expertos, explicaría por qué a tantos jóvenes actuales les cuesta identificar el momento exacto en el que se convirtieron en adultos.",
    questions: [
      { id: "experiences-22-q1", type: "true-false", prompt: "La función psicológica de los ritos de iniciación varía enormemente entre culturas.", correctAnswer: "false", justification: "\"la función psicológica que cumplen es sorprendentemente parecida en todo el planeta\"" },
      { id: "experiences-22-q2", type: "true-false", prompt: "En la búsqueda de visión, los adolescentes pasan varios días acompañados por su familia.", correctAnswer: "false", justification: "\"pasan varios días solos en la naturaleza\"" },
      { id: "experiences-22-q3", type: "mcq", prompt: "¿Cuántas fases comparten estos ritos, según los antropólogos?", options: ["Tres", "Dos", "Cinco", "Cuatro"], correctAnswer: "Tres" },
      { id: "experiences-22-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un artículo de revista", "Una entrada de diario", "Un anuncio", "Una postal"], correctAnswer: "Un artículo de revista" },
      { id: "experiences-22-q5", type: "short", prompt: "¿A qué edad se celebra el Seijin Shiki en Japón?", correctAnswer: "veinte años" },
    ],
    vocabulary: [
      { es: "infancia", en: "childhood" },
      { es: "ceremonia", en: "ceremony" },
      { es: "simbólicamente", en: "symbolically" },
      { es: "indígenas", en: "indigenous" },
      { es: "propósito", en: "purpose" },
      { es: "antropólogos", en: "anthropologists" },
      { es: "reincorporación", en: "reintegration" },
      { es: "contemporáneas", en: "contemporary" },
    ],
  },
  {
    id: "reading-experiences-23",
    themeId: "experiences",
    title: "Entrevista a una piloto de carreras de diecinueve años",
    textType: "Interview",
    level: "medium",
    bodyEs:
      "Esta semana hablamos con Carla Duarte, una de las pilotos más jóvenes en competir en el campeonato nacional de karting.\n\n" +
      "— Carla, ¿cómo empezaste en el mundo de las carreras?\n" +
      "— Mi padre corría karts como afición cuando era joven, y me llevó a un circuito por primera vez cuando tenía ocho años. Desde ese día no quise hacer otra cosa.\n\n" +
      "— ¿Ha sido difícil que te tomen en serio en un deporte donde hay pocas mujeres?\n" +
      "— Al principio sí, muchísimo. Algunos rivales pensaban que estaba ahí de casualidad. Pero en cuanto empecé a ganar carreras, esos comentarios desaparecieron rápidamente.\n\n" +
      "— ¿Cuál ha sido tu momento más difícil hasta ahora?\n" +
      "— Sin duda, un accidente que tuve hace dos años. Me rompí la muñeca y pensé que no volvería a competir al mismo nivel. Tardé seis meses en recuperarme completamente.\n\n" +
      "— ¿Qué consejo darías a otras chicas que quieran empezar?\n" +
      "— Que no dejen que las dudas de otras personas se conviertan en las suyas propias.",
    questions: [
      { id: "experiences-23-q1", type: "true-false", prompt: "Carla fue por primera vez a un circuito de karts a los ocho años.", correctAnswer: "true", justification: "\"me llevó a un circuito por primera vez cuando tenía ocho años\"" },
      { id: "experiences-23-q2", type: "true-false", prompt: "Carla tardó seis meses en recuperarse de su accidente.", correctAnswer: "true", justification: "\"Tardé seis meses en recuperarme completamente\"" },
      { id: "experiences-23-q3", type: "mcq", prompt: "¿Qué le pasó a Carla hace dos años?", options: ["Se rompió la muñeca", "Ganó el campeonato", "Dejó de competir", "Cambió de equipo"], correctAnswer: "Se rompió la muñeca" },
      { id: "experiences-23-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrevista", "Una entrada de diario", "Un anuncio", "Un informe"], correctAnswer: "Una entrevista" },
      { id: "experiences-23-q5", type: "short", prompt: "¿Quién introdujo a Carla al mundo de las carreras?", correctAnswer: "su padre" },
    ],
    vocabulary: [
      { es: "campeonato", en: "championship" },
      { es: "afición", en: "hobby" },
      { es: "circuito", en: "racetrack" },
      { es: "rivales", en: "rivals / competitors" },
      { es: "casualidad", en: "coincidence" },
      { es: "accidente", en: "accident" },
      { es: "muñeca", en: "wrist" },
      { es: "recuperarme", en: "to recover" },
    ],
  },
  {
    id: "reading-experiences-24",
    themeId: "experiences",
    title: "Postal desde el Festival Sonora",
    textType: "Postcard",
    level: "easy",
    bodyEs:
      "¡Hola, Teo!\n\n" +
      "Te escribo desde el Festival Sonora, acampada entre miles de tiendas de campaña. Llevamos tres días aquí y no he dormido más de cinco horas por noche, ¡pero mereció totalmente la pena!\n\n" +
      "Ayer vimos actuar a mi grupo favorito desde el segundo escenario, tan cerca que casi podía tocar al cantante. También descubrimos una banda local que nadie conocía y que ahora es mi nueva obsesión.\n\n" +
      "Hace un calor tremendo durante el día, así que pasamos las tardes bajo la sombra comiendo helados carísimos. La comida del festival es un desastre para el bolsillo, pero forma parte de la experiencia, supongo.\n\n" +
      "Mañana es el último día y hay un concierto sorpresa a medianoche que nadie sabe quién será. ¡Ya te contaré todo cuando vuelva el domingo!\n\n" +
      "Un abrazo enorme,\nLucía",
    questions: [
      { id: "experiences-24-q1", type: "true-false", prompt: "Lucía ha dormido más de siete horas cada noche en el festival.", correctAnswer: "false", justification: "\"no he dormido más de cinco horas por noche\"" },
      { id: "experiences-24-q2", type: "true-false", prompt: "La comida del festival es barata.", correctAnswer: "false", justification: "\"La comida del festival es un desastre para el bolsillo\"" },
      { id: "experiences-24-q3", type: "mcq", prompt: "¿Qué descubrió Lucía en el festival que ahora le encanta?", options: ["Una banda local", "Un restaurante nuevo", "Una tienda de ropa", "Un parque"], correctAnswer: "Una banda local" },
      { id: "experiences-24-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una postal", "Un informe oficial", "Un correo formal", "Una reseña"], correctAnswer: "Una postal" },
      { id: "experiences-24-q5", type: "short", prompt: "¿Cuándo vuelve Lucía a casa?", correctAnswer: "el domingo" },
    ],
    vocabulary: [
      { es: "acampada", en: "camping (out)" },
      { es: "escenario", en: "stage" },
      { es: "obsesión", en: "obsession" },
      { es: "tremendo", en: "tremendous / huge" },
      { es: "sombra", en: "shade" },
      { es: "bolsillo", en: "pocket (i.e. wallet)" },
      { es: "medianoche", en: "midnight" },
      { es: "abrazo", en: "hug" },
    ],
  },
  {
    id: "reading-experiences-25",
    themeId: "experiences",
    title: "Foro: ¿Vale la pena viajar solo por primera vez?",
    textType: "Forum post",
    level: "medium",
    bodyEs:
      "Publicado por usuario Mochilera21:\n\n" +
      "Tengo dieciocho años y estoy pensando en hacer mi primer viaje sola, dos semanas por el norte de Portugal. Todos mis amigos están ocupados este verano y no quiero esperar otro año. ¿Alguien tiene experiencia viajando solo la primera vez?\n\n" +
      "Respuesta de usuario ViajeroConstante:\n\n" +
      "¡Hazlo! Yo viajé solo por primera vez a los diecinueve, con muchísimo miedo, y fue una de las mejores decisiones de mi vida. Aprendes a resolver problemas tú solo y conoces gente que jamás conocerías viajando en grupo.\n\n" +
      "Respuesta de usuario PrudenciaAnte:\n\n" +
      "Yo sería un poco más cautelosa. No digo que no lo hagas, pero investiga bien los alojamientos, comparte tu ubicación con tu familia y evita caminar sola de noche en sitios desconocidos.\n\n" +
      "Respuesta de usuario Mochilera21:\n\n" +
      "Gracias a los dos. Creo que voy a hacerlo, pero siguiendo los consejos de seguridad de PrudenciaAnte. ¡Os contaré cómo me fue!",
    questions: [
      { id: "experiences-25-q1", type: "true-false", prompt: "ViajeroConstante recomienda a Mochilera21 que no viaje sola.", correctAnswer: "false", justification: "\"¡Hazlo!\"" },
      { id: "experiences-25-q2", type: "true-false", prompt: "PrudenciaAnte aconseja compartir la ubicación con la familia.", correctAnswer: "true", justification: "\"comparte tu ubicación con tu familia\"" },
      { id: "experiences-25-q3", type: "mcq", prompt: "¿A qué país quiere viajar Mochilera21?", options: ["Portugal", "España", "Francia", "Italia"], correctAnswer: "Portugal" },
      { id: "experiences-25-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una publicación de foro", "Una carta formal", "Un anuncio", "Una reseña"], correctAnswer: "Una publicación de foro" },
      { id: "experiences-25-q5", type: "short", prompt: "¿Cuántas semanas planea viajar Mochilera21?", correctAnswer: "dos semanas" },
    ],
    vocabulary: [
      { es: "mochilera", en: "backpacker (fem.)" },
      { es: "cautelosa", en: "cautious (fem.)" },
      { es: "alojamientos", en: "accommodations" },
      { es: "ubicación", en: "location" },
      { es: "desconocidos", en: "unknown / unfamiliar" },
      { es: "seguridad", en: "safety" },
      { es: "resolver", en: "to solve" },
      { es: "jamás", en: "never" },
    ],
  },
  {
    id: "reading-experiences-26",
    themeId: "experiences",
    title: "Informe: el auge del turismo de aventura entre los jóvenes",
    textType: "Official report",
    level: "hard",
    bodyEs:
      "Un estudio reciente de la Organización Mundial del Turismo revela que el turismo de aventura ha crecido un cuarenta y cinco por ciento entre viajeros de dieciocho a veinticinco años en la última década, superando ampliamente el crecimiento del turismo tradicional.\n\n" +
      "Según el informe, esta generación prioriza las experiencias sobre las posesiones materiales, y busca actividades como el senderismo extremo, el buceo en aguas remotas o las expediciones en bicicleta de montaña por terrenos poco transitados.\n\n" +
      "Las redes sociales desempeñan un papel fundamental en esta tendencia: el sesenta y tres por ciento de los encuestados afirma haber elegido su destino después de ver contenido relacionado en plataformas digitales, más que por recomendaciones de agencias de viaje tradicionales.\n\n" +
      "El informe también señala un riesgo creciente: el número de accidentes relacionados con actividades extremas ha aumentado paralelamente, lo que ha llevado a varios países a exigir seguros específicos y guías certificados para determinadas rutas consideradas de alto riesgo.",
    questions: [
      { id: "experiences-26-q1", type: "true-false", prompt: "El turismo de aventura ha crecido menos que el turismo tradicional.", correctAnswer: "false", justification: "\"superando ampliamente el crecimiento del turismo tradicional\"" },
      { id: "experiences-26-q2", type: "true-false", prompt: "La mayoría de los encuestados eligió su destino gracias a agencias de viaje tradicionales.", correctAnswer: "false", justification: "\"más que por recomendaciones de agencias de viaje tradicionales\"" },
      { id: "experiences-26-q3", type: "mcq", prompt: "¿Qué porcentaje de crecimiento tuvo el turismo de aventura?", options: ["45%", "63%", "25%", "10%"], correctAnswer: "45%" },
      { id: "experiences-26-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un informe oficial", "Una entrada de diario", "Una postal", "Un anuncio"], correctAnswer: "Un informe oficial" },
      { id: "experiences-26-q5", type: "short", prompt: "¿Qué exigen varios países para rutas de alto riesgo?", correctAnswer: "seguros específicos y guías certificados" },
    ],
    vocabulary: [
      { es: "turismo", en: "tourism" },
      { es: "posesiones", en: "possessions" },
      { es: "senderismo", en: "hiking" },
      { es: "buceo", en: "diving" },
      { es: "transitados", en: "traveled / trodden" },
      { es: "encuestados", en: "survey respondents" },
      { es: "riesgo", en: "risk" },
      { es: "certificados", en: "certified" },
    ],
  },
  {
    id: "reading-human-ingenuity-21",
    themeId: "human-ingenuity",
    title: "Reseña: el videojuego educativo 'Codex'",
    textType: "Review",
    level: "medium",
    bodyEs:
      "\"Codex\" promete enseñar los fundamentos de la programación a través de puzles ambientados en una biblioteca mágica. Tras pasar quince horas jugando, puedo decir que cumple bastante bien lo que promete, aunque con algunos matices importantes.\n\n" +
      "La mecánica principal consiste en escribir pequeños fragmentos de código para mover a un personaje, abrir puertas o resolver acertijos. El diseño es precioso, y la curva de dificultad al principio está muy bien pensada: nunca sientes que un puzle es imposible.\n\n" +
      "El problema llega hacia la mitad del juego, cuando los conceptos se vuelven más avanzados sin suficiente explicación adicional. Un jugador sin ninguna experiencia previa en programación probablemente se sentirá perdido en el capítulo seis.\n\n" +
      "Aun con este fallo, recomiendo \"Codex\" a cualquier adolescente curioso por la programación, especialmente si lo juega acompañado de alguien con más experiencia que pueda explicar los conceptos más difíciles.",
    questions: [
      { id: "human-ingenuity-21-q1", type: "true-false", prompt: "Según la reseña, la curva de dificultad al principio del juego está mal diseñada.", correctAnswer: "false", justification: "\"la curva de dificultad al principio está muy bien pensada\"" },
      { id: "human-ingenuity-21-q2", type: "true-false", prompt: "El juego explica suficientemente bien los conceptos avanzados a partir de la mitad.", correctAnswer: "false", justification: "\"los conceptos se vuelven más avanzados sin suficiente explicación adicional\"" },
      { id: "human-ingenuity-21-q3", type: "mcq", prompt: "¿Dónde está ambientado el juego?", options: ["En una biblioteca mágica", "En una nave espacial", "En un bosque encantado", "En una ciudad futurista"], correctAnswer: "En una biblioteca mágica" },
      { id: "human-ingenuity-21-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una reseña", "Un informe oficial", "Una entrevista", "Un anuncio"], correctAnswer: "Una reseña" },
      { id: "human-ingenuity-21-q5", type: "short", prompt: "¿Cuántas horas jugó el autor antes de escribir la reseña?", correctAnswer: "quince horas" },
    ],
    vocabulary: [
      { es: "fundamentos", en: "fundamentals" },
      { es: "puzles", en: "puzzles" },
      { es: "mecánica", en: "mechanic (game)" },
      { es: "fragmentos", en: "fragments / snippets" },
      { es: "acertijos", en: "riddles" },
      { es: "curva", en: "curve" },
      { es: "avanzados", en: "advanced" },
      { es: "acompañado", en: "accompanied" },
    ],
  },
  {
    id: "reading-human-ingenuity-22",
    themeId: "human-ingenuity",
    title: "Impresoras 3D que construyen casas en un día",
    textType: "Magazine article",
    level: "hard",
    bodyEs:
      "En varios países ya se están construyendo viviendas completas utilizando impresoras 3D gigantes que depositan capas de un material similar al hormigón, siguiendo un diseño digital hasta completar toda la estructura de la casa.\n\n" +
      "Lo más llamativo es la velocidad: mientras que una vivienda tradicional puede tardar meses en construirse, algunas empresas ya han demostrado que es posible imprimir las paredes de una casa pequeña en menos de veinticuatro horas, reduciendo también los costes de mano de obra de forma drástica.\n\n" +
      "Esta tecnología resulta especialmente prometedora para zonas afectadas por desastres naturales, donde miles de familias necesitan vivienda de emergencia rápidamente. Organizaciones humanitarias ya han empezado a experimentar con esta técnica en campamentos de refugiados.\n\n" +
      "Sin embargo, los críticos señalan limitaciones importantes: las normativas de construcción de muchos países todavía no contemplan este método, y persisten dudas sobre la durabilidad de estas estructuras frente a terremotos o huracanes intensos. Los ingenieros insisten en que se necesitan más años de pruebas antes de generalizar su uso.",
    questions: [
      { id: "human-ingenuity-22-q1", type: "true-false", prompt: "Imprimir una casa pequeña es más lento que construirla de forma tradicional.", correctAnswer: "false", justification: "\"es posible imprimir las paredes de una casa pequeña en menos de veinticuatro horas\"" },
      { id: "human-ingenuity-22-q2", type: "true-false", prompt: "Todos los países ya tienen normativas preparadas para este tipo de construcción.", correctAnswer: "false", justification: "\"las normativas de construcción de muchos países todavía no contemplan este método\"" },
      { id: "human-ingenuity-22-q3", type: "mcq", prompt: "¿Para qué tipo de zonas es especialmente prometedora esta tecnología?", options: ["Zonas afectadas por desastres naturales", "Zonas turísticas", "Zonas industriales", "Zonas rurales sin electricidad"], correctAnswer: "Zonas afectadas por desastres naturales" },
      { id: "human-ingenuity-22-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un artículo de revista", "Una entrada de diario", "Una postal", "Un menú"], correctAnswer: "Un artículo de revista" },
      { id: "human-ingenuity-22-q5", type: "short", prompt: "¿Qué dudan los críticos sobre estas estructuras?", correctAnswer: "su durabilidad frente a terremotos o huracanes" },
    ],
    vocabulary: [
      { es: "viviendas", en: "dwellings / homes" },
      { es: "capas", en: "layers" },
      { es: "hormigón", en: "concrete" },
      { es: "llamativo", en: "striking / eye-catching" },
      { es: "prometedora", en: "promising" },
      { es: "refugiados", en: "refugees" },
      { es: "normativas", en: "regulations" },
      { es: "durabilidad", en: "durability" },
    ],
  },
  {
    id: "reading-human-ingenuity-23",
    themeId: "human-ingenuity",
    title: "Solicitud de beca para un curso de programación",
    textType: "Formal email",
    level: "medium",
    bodyEs:
      "Estimada señora Duarte:\n\n" +
      "Le escribo en relación con la beca que su fundación ofrece para el curso intensivo de programación de este verano, anunciada la semana pasada en la página web del instituto.\n\n" +
      "Actualmente curso primero de bachillerato y llevo dos años aprendiendo a programar por mi cuenta, principalmente a través de tutoriales gratuitos en internet. El año pasado creé una aplicación sencilla para ayudar a mis compañeros a organizar los horarios de estudio, lo cual despertó todavía más mi interés en este campo.\n\n" +
      "Mi familia no puede asumir el coste completo del curso, por lo que esta beca representaría una oportunidad excelente para seguir formándome de manera más estructurada, con profesores especializados que puedan guiar mi aprendizaje.\n\n" +
      "Adjunto mi expediente académico y una carta de recomendación de mi profesor de tecnología. Quedo a su disposición por si necesita cualquier información adicional.\n\n" +
      "Atentamente,\nRodrigo Álvarez",
    questions: [
      { id: "human-ingenuity-23-q1", type: "true-false", prompt: "Rodrigo aprendió a programar principalmente en un instituto especializado.", correctAnswer: "false", justification: "\"principalmente a través de tutoriales gratuitos en internet\"" },
      { id: "human-ingenuity-23-q2", type: "true-false", prompt: "La familia de Rodrigo puede pagar el curso completo sin problema.", correctAnswer: "false", justification: "\"Mi familia no puede asumir el coste completo del curso\"" },
      { id: "human-ingenuity-23-q3", type: "mcq", prompt: "¿Qué creó Rodrigo el año pasado?", options: ["Una aplicación para organizar horarios de estudio", "Un videojuego", "Una página web de noticias", "Un robot"], correctAnswer: "Una aplicación para organizar horarios de estudio" },
      { id: "human-ingenuity-23-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un correo formal", "Una entrada de diario", "Un anuncio", "Una reseña"], correctAnswer: "Un correo formal" },
      { id: "human-ingenuity-23-q5", type: "short", prompt: "¿Qué adjunta Rodrigo a su solicitud además del expediente académico?", correctAnswer: "una carta de recomendación de su profesor de tecnología" },
    ],
    vocabulary: [
      { es: "fundación", en: "foundation" },
      { es: "intensivo", en: "intensive" },
      { es: "tutoriales", en: "tutorials" },
      { es: "despertó", en: "sparked / awakened" },
      { es: "asumir", en: "to take on / bear (cost)" },
      { es: "formándome", en: "training myself" },
      { es: "expediente", en: "academic record" },
      { es: "adicional", en: "additional" },
    ],
  },
  {
    id: "reading-human-ingenuity-24",
    themeId: "human-ingenuity",
    title: "Entrevista a una inventora de dieciséis años",
    textType: "Interview",
    level: "medium",
    bodyEs:
      "Hablamos con Aitana Reyes, ganadora de la feria nacional de ciencia por un dispositivo que detecta fugas de agua en tuberías domésticas.\n\n" +
      "— Aitana, ¿de dónde surgió la idea de tu invento?\n" +
      "— Todo empezó porque a mi abuela se le rompió una tubería y no se dio cuenta hasta que llegó una factura de agua altísima. Pensé que tenía que haber una forma más barata de detectarlo a tiempo.\n\n" +
      "— ¿Cuánto tiempo tardaste en construir el primer prototipo?\n" +
      "— Casi ocho meses, entre clases. Rompí tres prototipos antes de conseguir uno que funcionara de verdad.\n\n" +
      "— ¿Qué se siente al ganar un premio nacional con dieciséis años?\n" +
      "— Todavía no me lo creo del todo. Lo más bonito ha sido que varias empresas se han puesto en contacto conmigo, aunque de momento solo quiero terminar el instituto tranquila.\n\n" +
      "— ¿Algún consejo para otros jóvenes inventores?\n" +
      "— Que no les dé miedo que algo falle. Mis tres primeros prototipos fueron un desastre total, y aun así llegué a donde quería llegar.",
    questions: [
      { id: "human-ingenuity-24-q1", type: "true-false", prompt: "El invento de Aitana surgió de un problema real en su familia.", correctAnswer: "true", justification: "\"a mi abuela se le rompió una tubería y no se dio cuenta hasta que llegó una factura de agua altísima\"" },
      { id: "human-ingenuity-24-q2", type: "true-false", prompt: "Aitana consiguió un prototipo funcional al primer intento.", correctAnswer: "false", justification: "\"Rompí tres prototipos antes de conseguir uno que funcionara de verdad\"" },
      { id: "human-ingenuity-24-q3", type: "mcq", prompt: "¿Qué detecta el invento de Aitana?", options: ["Fugas de agua en tuberías", "Fugas de gas", "Terremotos", "Incendios"], correctAnswer: "Fugas de agua en tuberías" },
      { id: "human-ingenuity-24-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrevista", "Un informe oficial", "Un anuncio", "Una postal"], correctAnswer: "Una entrevista" },
      { id: "human-ingenuity-24-q5", type: "short", prompt: "¿Cuánto tiempo tardó Aitana en construir el primer prototipo?", correctAnswer: "casi ocho meses" },
    ],
    vocabulary: [
      { es: "ganadora", en: "winner (fem.)" },
      { es: "dispositivo", en: "device" },
      { es: "fugas", en: "leaks" },
      { es: "tuberías", en: "pipes" },
      { es: "factura", en: "bill / invoice" },
      { es: "prototipo", en: "prototype" },
      { es: "premio", en: "prize" },
      { es: "inventores", en: "inventors" },
    ],
  },
  {
    id: "reading-human-ingenuity-25",
    themeId: "human-ingenuity",
    title: "Mi experiencia usando un tutor de inteligencia artificial para estudiar",
    textType: "Social media post",
    level: "easy",
    bodyEs:
      "Llevo tres meses usando una aplicación con inteligencia artificial para prepararme el examen de química, y quería compartir mi experiencia sincera, ni toda buena ni toda mala. 🧪\n\n" +
      "Lo positivo: puedo hacerle preguntas a cualquier hora sin sentirme tonta por no entender algo por quinta vez, y me explica los conceptos de formas distintas hasta que uno de ellos por fin tiene sentido para mí.\n\n" +
      "Lo negativo: a veces se equivoca en cálculos y, si no tuviera ya una base sólida gracias a mi profesora, probablemente no me habría dado cuenta del error. También noto que uso menos mis apuntes de clase, y eso me preocupa un poco.\n\n" +
      "Mi conclusión después de estos tres meses: la IA es una herramienta buenísima para repasar y aclarar dudas puntuales, pero no puede sustituir completamente ni a un profesor humano ni al esfuerzo de estudiar por mi cuenta. #estudiar #ia",
    questions: [
      { id: "human-ingenuity-25-q1", type: "true-false", prompt: "Según la autora, la aplicación nunca comete errores.", correctAnswer: "false", justification: "\"a veces se equivoca en cálculos\"" },
      { id: "human-ingenuity-25-q2", type: "true-false", prompt: "La autora piensa que la IA puede sustituir completamente a un profesor humano.", correctAnswer: "false", justification: "\"no puede sustituir completamente ni a un profesor humano\"" },
      { id: "human-ingenuity-25-q3", type: "mcq", prompt: "¿Para qué asignatura usa la autora la aplicación?", options: ["Química", "Matemáticas", "Historia", "Biología"], correctAnswer: "Química" },
      { id: "human-ingenuity-25-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una publicación en redes sociales", "Un informe oficial", "Una carta formal", "Un anuncio"], correctAnswer: "Una publicación en redes sociales" },
      { id: "human-ingenuity-25-q5", type: "short", prompt: "¿Cuánto tiempo lleva la autora usando la aplicación?", correctAnswer: "tres meses" },
    ],
    vocabulary: [
      { es: "sincera", en: "honest (fem.)" },
      { es: "conceptos", en: "concepts" },
      { es: "cálculos", en: "calculations" },
      { es: "sólida", en: "solid (fem.)" },
      { es: "apuntes", en: "notes" },
      { es: "herramienta", en: "tool" },
      { es: "aclarar", en: "to clarify" },
      { es: "puntuales", en: "specific / one-off" },
    ],
  },
  {
    id: "reading-human-ingenuity-26",
    themeId: "human-ingenuity",
    title: "Cómo empezar en la robótica educativa",
    textType: "Instructional guide",
    level: "easy",
    bodyEs:
      "¿Te interesa la robótica pero no sabes por dónde empezar? Sigue esta guía sencilla para dar tus primeros pasos.\n\n" +
      "Primero, no necesitas comprar material caro para comenzar. Muchos institutos tienen clubes de robótica con kits compartidos, y existen simuladores gratuitos en internet donde puedes programar robots virtuales antes de tocar uno de verdad.\n\n" +
      "Segundo, aprende primero los conceptos básicos de programación por bloques antes de pasar a lenguajes de texto como Python. Intentar hacerlo al revés suele generar frustración innecesaria.\n\n" +
      "Tercero, únete a una comunidad, ya sea en tu instituto o en línea. Aprender en compañía de otros principiantes hace que los errores, que son inevitables, resulten mucho menos desalentadores.\n\n" +
      "Cuarto, participa en una competición local en cuanto te sientas mínimamente preparado. No hace falta ganar: la experiencia de construir algo bajo presión y con fecha límite acelera el aprendizaje enormemente.\n\n" +
      "Por último, ten paciencia. Los primeros robots que construyas probablemente no funcionarán a la primera, y eso es completamente normal.",
    questions: [
      { id: "human-ingenuity-26-q1", type: "true-false", prompt: "Según la guía, es necesario comprar material caro para empezar en robótica.", correctAnswer: "false", justification: "\"no necesitas comprar material caro para comenzar\"" },
      { id: "human-ingenuity-26-q2", type: "true-false", prompt: "La guía recomienda aprender Python antes que la programación por bloques.", correctAnswer: "false", justification: "\"aprende primero los conceptos básicos de programación por bloques antes de pasar a lenguajes de texto como Python\"" },
      { id: "human-ingenuity-26-q3", type: "mcq", prompt: "Según el texto, ¿qué acelera enormemente el aprendizaje?", options: ["Participar en una competición local", "Comprar los kits más caros", "Estudiar solo, sin comunidad", "Evitar cometer errores"], correctAnswer: "Participar en una competición local" },
      { id: "human-ingenuity-26-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una guía de instrucciones", "Una entrevista", "Un informe oficial", "Una reseña"], correctAnswer: "Una guía de instrucciones" },
      { id: "human-ingenuity-26-q5", type: "short", prompt: "Según el texto, ¿qué se debe tener al construir los primeros robots?", correctAnswer: "paciencia" },
    ],
    vocabulary: [
      { es: "simuladores", en: "simulators" },
      { es: "virtuales", en: "virtual" },
      { es: "bloques", en: "blocks" },
      { es: "lenguajes", en: "languages (programming)" },
      { es: "innecesaria", en: "unnecessary" },
      { es: "principiantes", en: "beginners" },
      { es: "desalentadores", en: "discouraging" },
      { es: "competición", en: "competition" },
    ],
  },
  {
    id: "reading-social-organization-21",
    themeId: "social-organization",
    title: "Discurso de bienvenida a los nuevos alumnos",
    textType: "Speech",
    level: "easy",
    bodyEs:
      "Buenos días a todas y a todos.\n\n" +
      "En nombre de todo el profesorado, quiero daros la bienvenida a este instituto. Sé que empezar en un centro nuevo puede dar un poco de vértigo: pasillos desconocidos, caras nuevas y un horario que todavía no os habéis aprendido de memoria.\n\n" +
      "Quiero deciros algo que a mí también me habría gustado escuchar hace años: aquí nadie espera que lo sepáis todo desde el primer día. Este instituto tiene más de cuarenta clubes y actividades extraescolares, y os animo a probar varias antes de decidir a cuál dedicaros.\n\n" +
      "También quiero recordaros que tenéis un servicio de orientación disponible todos los días, tanto para dudas académicas como personales. No dudéis en usarlo; para eso está.\n\n" +
      "Os deseo un año lleno de nuevos amigos, algún que otro error del que aprender, y muchos momentos de los que os sintáis orgullosos. Bienvenidos a vuestra nueva casa durante los próximos años.",
    questions: [
      { id: "social-organization-21-q1", type: "true-false", prompt: "El instituto espera que los nuevos alumnos lo sepan todo desde el primer día.", correctAnswer: "false", justification: "\"aquí nadie espera que lo sepáis todo desde el primer día\"" },
      { id: "social-organization-21-q2", type: "true-false", prompt: "El servicio de orientación solo está disponible para dudas académicas.", correctAnswer: "false", justification: "\"tanto para dudas académicas como personales\"" },
      { id: "social-organization-21-q3", type: "mcq", prompt: "¿Cuántos clubes y actividades extraescolares tiene el instituto?", options: ["Más de cuarenta", "Diez", "Veinte", "Cien"], correctAnswer: "Más de cuarenta" },
      { id: "social-organization-21-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un discurso", "Una entrada de diario", "Un anuncio", "Una carta formal"], correctAnswer: "Un discurso" },
      { id: "social-organization-21-q5", type: "short", prompt: "¿Qué servicio está disponible todos los días para los alumnos?", correctAnswer: "el servicio de orientación" },
    ],
    vocabulary: [
      { es: "profesorado", en: "teaching staff" },
      { es: "vértigo", en: "vertigo / dizziness" },
      { es: "pasillos", en: "hallways" },
      { es: "extraescolares", en: "extracurricular" },
      { es: "orientación", en: "guidance / counseling" },
      { es: "académicas", en: "academic" },
      { es: "dudéis", en: "hesitate (subjunctive)" },
      { es: "orgullosos", en: "proud (pl.)" },
    ],
  },
  {
    id: "reading-social-organization-22",
    themeId: "social-organization",
    title: "Informe: la brecha salarial entre los trabajadores jóvenes",
    textType: "Official report",
    level: "hard",
    bodyEs:
      "Un informe publicado por el Ministerio de Trabajo revela que los trabajadores de entre dieciocho y veinticinco años ganan, de media, un treinta por ciento menos que la media salarial general, incluso realizando funciones similares a las de compañeros de mayor edad.\n\n" +
      "El estudio identifica varios factores que explican esta diferencia: la falta de experiencia previa, la sobrerrepresentación de los jóvenes en contratos temporales y a tiempo parcial, y una menor capacidad de negociación salarial frente a empleadores establecidos.\n\n" +
      "Un dato especialmente preocupante es que el cuarenta y dos por ciento de los jóvenes encuestados declara sentirse incapaz de negociar su salario por miedo a perder el empleo, un porcentaje considerablemente más alto que entre trabajadores mayores de treinta y cinco años.\n\n" +
      "Entre las recomendaciones del informe destaca la necesidad de mayor transparencia salarial en las ofertas de empleo, así como programas específicos de formación en negociación dirigidos a los trabajadores más jóvenes del mercado laboral.",
    questions: [
      { id: "social-organization-22-q1", type: "true-false", prompt: "Los trabajadores jóvenes ganan más que la media salarial general.", correctAnswer: "false", justification: "\"ganan, de media, un treinta por ciento menos que la media salarial general\"" },
      { id: "social-organization-22-q2", type: "true-false", prompt: "Los trabajadores mayores de treinta y cinco años declaran sentir el mismo miedo a negociar su salario que los jóvenes.", correctAnswer: "false", justification: "\"un porcentaje considerablemente más alto que entre trabajadores mayores de treinta y cinco años\"" },
      { id: "social-organization-22-q3", type: "mcq", prompt: "¿Qué porcentaje de jóvenes se siente incapaz de negociar su salario?", options: ["42%", "30%", "63%", "18%"], correctAnswer: "42%" },
      { id: "social-organization-22-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un informe oficial", "Una entrada de diario", "Un anuncio", "Una postal"], correctAnswer: "Un informe oficial" },
      { id: "social-organization-22-q5", type: "short", prompt: "¿Qué recomienda el informe para mejorar las ofertas de empleo?", correctAnswer: "mayor transparencia salarial" },
    ],
    vocabulary: [
      { es: "brecha", en: "gap" },
      { es: "salarial", en: "salary (adj.)" },
      { es: "sobrerrepresentación", en: "overrepresentation" },
      { es: "temporales", en: "temporary" },
      { es: "negociación", en: "negotiation" },
      { es: "empleadores", en: "employers" },
      { es: "transparencia", en: "transparency" },
      { es: "laboral", en: "labor (adj.)" },
    ],
  },
  {
    id: "reading-social-organization-23",
    themeId: "social-organization",
    title: "Entrevista con la alcaldesa más joven del país",
    textType: "Interview",
    level: "medium",
    bodyEs:
      "A sus veintiséis años, Lucía Font se convirtió en la alcaldesa más joven de la historia de su región. Hablamos con ella sobre su primer año en el cargo.\n\n" +
      "— Lucía, ¿cómo reaccionó la gente al saber que la nueva alcaldesa tenía solo veinticinco años cuando ganó las elecciones?\n" +
      "— Con bastante escepticismo, la verdad. Muchos vecinos mayores dudaban de que tuviera suficiente experiencia. Tuve que demostrar con hechos, no con palabras, que la edad no determina la capacidad de gestionar bien un pueblo.\n\n" +
      "— ¿Cuál ha sido tu mayor logro hasta ahora?\n" +
      "— Conseguimos renovar el centro de salud, que llevaba años en muy malas condiciones, sin aumentar los impuestos municipales.\n\n" +
      "— ¿Y el mayor reto?\n" +
      "— Sin duda, ganarme la confianza de funcionarios que llevan trabajando en el ayuntamiento treinta años, mucho más tiempo del que yo llevo viva.\n\n" +
      "— ¿Qué le dirías a otros jóvenes que quieran dedicarse a la política?\n" +
      "— Que la juventud no es un obstáculo, sino una perspectiva distinta que también hace falta en los ayuntamientos.",
    questions: [
      { id: "social-organization-23-q1", type: "true-false", prompt: "Lucía tenía veinticinco años cuando ganó las elecciones.", correctAnswer: "true", justification: "\"la nueva alcaldesa tenía solo veinticinco años cuando ganó las elecciones\"" },
      { id: "social-organization-23-q2", type: "true-false", prompt: "Lucía aumentó los impuestos municipales para renovar el centro de salud.", correctAnswer: "false", justification: "\"sin aumentar los impuestos municipales\"" },
      { id: "social-organization-23-q3", type: "mcq", prompt: "¿Cuál fue el mayor reto de Lucía, según ella misma?", options: ["Ganarse la confianza de los funcionarios", "Conseguir dinero para el ayuntamiento", "Aprender a hablar en público", "Ganar las elecciones"], correctAnswer: "Ganarse la confianza de los funcionarios" },
      { id: "social-organization-23-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrevista", "Un discurso", "Un anuncio", "Una reseña"], correctAnswer: "Una entrevista" },
      { id: "social-organization-23-q5", type: "short", prompt: "¿Qué edad tiene Lucía actualmente, según el texto?", correctAnswer: "veintiséis años" },
    ],
    vocabulary: [
      { es: "alcaldesa", en: "mayor (fem.)" },
      { es: "escepticismo", en: "skepticism" },
      { es: "gestionar", en: "to manage" },
      { es: "logro", en: "achievement" },
      { es: "renovar", en: "to renovate" },
      { es: "impuestos", en: "taxes" },
      { es: "funcionarios", en: "civil servants / officials" },
      { es: "juventud", en: "youth" },
    ],
  },
  {
    id: "reading-social-organization-24",
    themeId: "social-organization",
    title: "Foro: ¿Deberían poder votar los jóvenes de dieciséis años?",
    textType: "Forum post",
    level: "hard",
    bodyEs:
      "Publicado por usuario PoliticaJoven:\n\n" +
      "Con el debate sobre bajar la edad de voto a los dieciséis años otra vez de actualidad, quería preguntaros: ¿estáis a favor o en contra? Yo tengo diecisiete y me parece absurdo que pueda trabajar y pagar impuestos, pero no pueda votar a quienes deciden cómo se gastan.\n\n" +
      "Respuesta de usuario Escéptico88:\n\n" +
      "Entiendo tu argumento, pero a los dieciséis años todavía se está formando la capacidad de razonamiento político, según varios estudios. Me preocupa que el voto se base más en lo que dicen los padres que en una opinión propia.\n\n" +
      "Respuesta de usuario PoliticaJoven:\n\n" +
      "Ese mismo argumento se podría usar con adultos que votan igual que sus padres toda la vida. La influencia familiar no desaparece a los dieciocho años mágicamente.\n\n" +
      "Respuesta de usuario Marina_Vota:\n\n" +
      "En algunos países, como Austria, ya se vota a los dieciséis desde hace años, y no se ha observado ningún problema grave. Creo que merece la pena estudiar esos casos antes de descartar la idea.",
    questions: [
      { id: "social-organization-24-q1", type: "true-false", prompt: "PoliticaJoven está a favor de bajar la edad de voto a los dieciséis años.", correctAnswer: "true", justification: "\"me parece absurdo que pueda trabajar y pagar impuestos, pero no pueda votar\"" },
      { id: "social-organization-24-q2", type: "true-false", prompt: "En Austria ya se puede votar a los dieciséis años.", correctAnswer: "true", justification: "\"En algunos países, como Austria, ya se vota a los dieciséis desde hace años\"" },
      { id: "social-organization-24-q3", type: "mcq", prompt: "¿Qué le preocupa a Escéptico88 sobre bajar la edad de voto?", options: ["Que el voto se base en la opinión de los padres", "Que haya demasiados votantes", "Que se necesiten más urnas", "Que suba el gasto público"], correctAnswer: "Que el voto se base en la opinión de los padres" },
      { id: "social-organization-24-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una publicación de foro", "Un discurso", "Una carta formal", "Un informe"], correctAnswer: "Una publicación de foro" },
      { id: "social-organization-24-q5", type: "short", prompt: "¿Qué edad tiene PoliticaJoven?", correctAnswer: "diecisiete años" },
    ],
    vocabulary: [
      { es: "actualidad", en: "current affairs / topicality" },
      { es: "absurdo", en: "absurd" },
      { es: "razonamiento", en: "reasoning" },
      { es: "propia", en: "own (fem.)" },
      { es: "influencia", en: "influence" },
      { es: "mágicamente", en: "magically" },
      { es: "descartar", en: "to rule out / discard" },
      { es: "votantes", en: "voters" },
    ],
  },
  {
    id: "reading-social-organization-25",
    themeId: "social-organization",
    title: "Se busca mentor para nuevos vecinos",
    textType: "Advertisement",
    level: "easy",
    bodyEs:
      "¿Tienes tiempo libre y ganas de ayudar? El Ayuntamiento busca voluntarios para el programa \"Vecinos Conectados\", dirigido a familias recién llegadas al barrio.\n\n" +
      "Como mentor, acompañarías a una familia durante sus primeros tres meses en el barrio: les ayudarías a encontrar el centro de salud más cercano, explicarías cómo funciona el transporte público local y, simplemente, estarías disponible para resolver dudas del día a día.\n\n" +
      "No se necesita experiencia previa ni formación especial, solo paciencia, amabilidad y un par de horas libres a la semana. Todos los mentores reciben una breve formación inicial de dos horas antes de empezar.\n\n" +
      "\"Ser mentora me ha enseñado tanto a mí como a la familia que acompañé\", cuenta Carmen, voluntaria desde hace un año.\n\n" +
      "Si te interesa, inscríbete en la oficina de atención ciudadana o a través de la página web del ayuntamiento antes de fin de mes.",
    questions: [
      { id: "social-organization-25-q1", type: "true-false", prompt: "Se necesita experiencia previa para ser mentor en este programa.", correctAnswer: "false", justification: "\"No se necesita experiencia previa ni formación especial\"" },
      { id: "social-organization-25-q2", type: "true-false", prompt: "Los mentores reciben una formación inicial antes de empezar.", correctAnswer: "true", justification: "\"Todos los mentores reciben una breve formación inicial de dos horas antes de empezar\"" },
      { id: "social-organization-25-q3", type: "mcq", prompt: "¿Cuánto tiempo acompaña un mentor a una familia?", options: ["Tres meses", "Una semana", "Un año", "Seis meses"], correctAnswer: "Tres meses" },
      { id: "social-organization-25-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un anuncio publicitario", "Un informe oficial", "Una entrevista", "Una postal"], correctAnswer: "Un anuncio publicitario" },
      { id: "social-organization-25-q5", type: "short", prompt: "¿Dónde se puede uno inscribir para ser mentor?", correctAnswer: "en la oficina de atención ciudadana o en la página web del ayuntamiento" },
    ],
    vocabulary: [
      { es: "mentor", en: "mentor" },
      { es: "recién", en: "recently" },
      { es: "acompañarías", en: "you would accompany" },
      { es: "transporte", en: "transportation" },
      { es: "amabilidad", en: "kindness" },
      { es: "formación", en: "training" },
      { es: "ciudadana", en: "citizen (adj.)" },
      { es: "inscríbete", en: "sign up (command)" },
    ],
  },
  {
    id: "reading-social-organization-26",
    themeId: "social-organization",
    title: "Una semana viviendo en una cooperativa de vivienda",
    textType: "Blog post",
    level: "medium",
    bodyEs:
      "La semana pasada me mudé temporalmente a una cooperativa de vivienda para escribir un reportaje, y la experiencia cambió por completo mi idea de cómo se puede organizar una comunidad.\n\n" +
      "En esta cooperativa viven treinta y dos personas de edades muy distintas, desde estudiantes hasta jubilados. Todas las decisiones importantes, desde el presupuesto hasta las normas de convivencia, se toman en asambleas mensuales donde cada persona tiene un voto, sin importar cuánto tiempo lleve viviendo allí.\n\n" +
      "Lo que más me sorprendió fue el sistema de tareas compartidas: cada semana, un grupo distinto se encarga de cocinar para todos tres noches, mientras otro grupo se ocupa de la limpieza de los espacios comunes. Al principio pensé que generaría conflictos constantes, pero los propios vecinos me explicaron que, tras años de ajustes, el sistema funciona sorprendentemente bien.\n\n" +
      "No sé si podría vivir así de forma permanente, pero esta semana me hizo cuestionar por qué damos por hecho que vivir de forma tan individual, sin apenas contacto con los vecinos, es la única opción normal.",
    questions: [
      { id: "social-organization-26-q1", type: "true-false", prompt: "En la cooperativa, solo las personas que llevan más tiempo viviendo allí pueden votar en las asambleas.", correctAnswer: "false", justification: "\"cada persona tiene un voto, sin importar cuánto tiempo lleve viviendo allí\"" },
      { id: "social-organization-26-q2", type: "true-false", prompt: "La autora pensó al principio que el sistema de tareas compartidas generaría conflictos.", correctAnswer: "true", justification: "\"Al principio pensé que generaría conflictos constantes\"" },
      { id: "social-organization-26-q3", type: "mcq", prompt: "¿Cuántas personas viven en la cooperativa?", options: ["Treinta y dos", "Doce", "Cincuenta", "Veinte"], correctAnswer: "Treinta y dos" },
      { id: "social-organization-26-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrada de blog", "Un informe oficial", "Un anuncio", "Una entrevista"], correctAnswer: "Una entrada de blog" },
      { id: "social-organization-26-q5", type: "short", prompt: "¿Con qué frecuencia se celebran las asambleas de la cooperativa?", correctAnswer: "mensualmente" },
    ],
    vocabulary: [
      { es: "cooperativa", en: "cooperative" },
      { es: "reportaje", en: "news report / feature" },
      { es: "jubilados", en: "retirees" },
      { es: "presupuesto", en: "budget" },
      { es: "convivencia", en: "coexistence / living together" },
      { es: "asambleas", en: "assemblies" },
      { es: "ajustes", en: "adjustments" },
      { es: "individual", en: "individual" },
    ],
  },
  {
    id: "reading-sharing-planet-21",
    themeId: "sharing-planet",
    title: "El regreso del lobo ibérico sorprende a los ganaderos",
    textType: "Newspaper article",
    level: "medium",
    bodyEs:
      "La población de lobo ibérico ha aumentado un veinte por ciento en la última década, según datos del Ministerio de Medio Ambiente, expandiéndose hacia zonas donde no se veía esta especie desde hacía más de cincuenta años.\n\n" +
      "Para los conservacionistas, la noticia es motivo de celebración: el lobo es una especie clave para mantener equilibrados los ecosistemas donde vive, controlando de forma natural la población de otros animales como los jabalíes.\n\n" +
      "Sin embargo, no todos reciben la noticia con la misma alegría. Numerosos ganaderos de las zonas afectadas denuncian pérdidas económicas importantes debido a ataques a su ganado, y piden más ayudas económicas y medidas de protección más eficaces, como vallados especiales o perros guardianes entrenados.\n\n" +
      "El gobierno regional ha anunciado un plan de compensaciones ampliado, aunque los representantes de los ganaderos consideran que las ayudas actuales siguen siendo insuficientes frente al aumento real de los ataques.",
    questions: [
      { id: "sharing-planet-21-q1", type: "true-false", prompt: "La población de lobo ibérico ha disminuido en la última década.", correctAnswer: "false", justification: "\"La población de lobo ibérico ha aumentado un veinte por ciento en la última década\"" },
      { id: "sharing-planet-21-q2", type: "true-false", prompt: "Todos los ganaderos están contentos con el regreso del lobo.", correctAnswer: "false", justification: "\"no todos reciben la noticia con la misma alegría\"" },
      { id: "sharing-planet-21-q3", type: "mcq", prompt: "¿Qué animal ayuda a controlar el lobo de forma natural?", options: ["Jabalíes", "Ovejas", "Zorros", "Ciervos"], correctAnswer: "Jabalíes" },
      { id: "sharing-planet-21-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un artículo de periódico", "Una entrada de diario", "Un anuncio", "Una postal"], correctAnswer: "Un artículo de periódico" },
      { id: "sharing-planet-21-q5", type: "short", prompt: "¿Qué piden los ganaderos además de más ayudas económicas?", correctAnswer: "medidas de protección más eficaces" },
    ],
    vocabulary: [
      { es: "ganaderos", en: "livestock farmers / ranchers" },
      { es: "conservacionistas", en: "conservationists" },
      { es: "equilibrados", en: "balanced" },
      { es: "jabalíes", en: "wild boars" },
      { es: "ganado", en: "livestock" },
      { es: "vallados", en: "fences / fencing" },
      { es: "guardianes", en: "guardian (adj.)" },
      { es: "compensaciones", en: "compensation" },
    ],
  },
  {
    id: "reading-sharing-planet-22",
    themeId: "sharing-planet",
    title: "Cómo empezar una huerta urbana en tu balcón",
    textType: "Instructional guide",
    level: "easy",
    bodyEs:
      "¿Quieres cultivar tus propias verduras sin tener un jardín? Con estos pasos sencillos puedes empezar una huerta urbana en cualquier balcón, por pequeño que sea.\n\n" +
      "Primero, elige el lugar con más horas de luz solar directa, idealmente al menos seis horas al día. La mayoría de las hortalizas necesitan bastante sol para crecer bien.\n\n" +
      "Segundo, empieza con plantas fáciles para principiantes, como tomates cherry, lechugas o hierbas aromáticas. Cultivos más exigentes, como los pimientos, pueden esperar a que tengas más experiencia.\n\n" +
      "Tercero, no subestimes la importancia de un buen drenaje: las macetas deben tener agujeros en la base para evitar que las raíces se pudran por exceso de agua.\n\n" +
      "Cuarto, riega con regularidad, pero sin exceso; comprueba la humedad de la tierra con el dedo antes de regar cada vez.\n\n" +
      "Por último, ten paciencia. Las primeras cosechas suelen ser pequeñas, pero con cada temporada aprenderás qué funciona mejor en tu espacio concreto.",
    questions: [
      { id: "sharing-planet-22-q1", type: "true-false", prompt: "Según la guía, la mayoría de las hortalizas necesitan poca luz solar.", correctAnswer: "false", justification: "\"La mayoría de las hortalizas necesitan bastante sol para crecer bien\"" },
      { id: "sharing-planet-22-q2", type: "true-false", prompt: "La guía recomienda empezar con pimientos por ser fáciles de cultivar.", correctAnswer: "false", justification: "\"Cultivos más exigentes, como los pimientos, pueden esperar a que tengas más experiencia\"" },
      { id: "sharing-planet-22-q3", type: "mcq", prompt: "¿Cuántas horas de luz solar directa se recomiendan como mínimo?", options: ["Seis horas", "Dos horas", "Diez horas", "Doce horas"], correctAnswer: "Seis horas" },
      { id: "sharing-planet-22-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una guía de instrucciones", "Un artículo de periódico", "Una entrevista", "Una reseña"], correctAnswer: "Una guía de instrucciones" },
      { id: "sharing-planet-22-q5", type: "short", prompt: "¿Qué deben tener las macetas para un buen drenaje?", correctAnswer: "agujeros en la base" },
    ],
    vocabulary: [
      { es: "huerta", en: "vegetable garden" },
      { es: "hortalizas", en: "vegetables (grown crops)" },
      { es: "principiantes", en: "beginners" },
      { es: "exigentes", en: "demanding" },
      { es: "subestimes", en: "underestimate (command)" },
      { es: "drenaje", en: "drainage" },
      { es: "macetas", en: "flowerpots" },
      { es: "cosechas", en: "harvests" },
    ],
  },
  {
    id: "reading-sharing-planet-23",
    themeId: "sharing-planet",
    title: "Entrevista a una activista climática de dieciséis años",
    textType: "Interview",
    level: "hard",
    bodyEs:
      "Hablamos con Nadia Ortiz, fundadora de un movimiento estudiantil contra el cambio climático que ya cuenta con presencia en más de treinta institutos.\n\n" +
      "— Nadia, ¿qué te llevó a empezar este movimiento con solo catorce años?\n" +
      "— Vi un documental sobre el deshielo en el Ártico y no pude dejar de pensar en ello durante semanas. Me sentía frustrada porque los adultos parecían tener la situación bajo control, pero los datos decían todo lo contrario.\n\n" +
      "— ¿Con qué obstáculos te has encontrado?\n" +
      "— Muchos adultos me han dicho que soy demasiado joven para entender temas tan complejos, que debería centrarme en mis estudios. Pero la ciencia climática no es una opinión, son datos, y esos datos los entiendo perfectamente.\n\n" +
      "— ¿Sientes que el movimiento ha logrado cambios reales?\n" +
      "— Conseguimos que nuestro ayuntamiento declarara la emergencia climática, aunque todavía queda muchísimo por hacer. Los cambios grandes llevan tiempo, y a veces es agotador seguir insistiendo.\n\n" +
      "— ¿Qué le dirías a un adolescente que quiere involucrarse pero no sabe cómo?\n" +
      "— Que empiece por algo pequeño, en su propio instituto. Los movimientos grandes siempre empiezan siendo pequeños.",
    questions: [
      { id: "sharing-planet-23-q1", type: "true-false", prompt: "Nadia empezó su movimiento a los catorce años.", correctAnswer: "true", justification: "\"¿qué te llevó a empezar este movimiento con solo catorce años?\"" },
      { id: "sharing-planet-23-q2", type: "true-false", prompt: "Nadia siente que el movimiento no ha logrado ningún cambio real.", correctAnswer: "false", justification: "\"Conseguimos que nuestro ayuntamiento declarara la emergencia climática\"" },
      { id: "sharing-planet-23-q3", type: "mcq", prompt: "¿Qué vio Nadia que la impulsó a actuar?", options: ["Un documental sobre el deshielo en el Ártico", "Una noticia sobre incendios", "Una charla en el instituto", "Un libro sobre reciclaje"], correctAnswer: "Un documental sobre el deshielo en el Ártico" },
      { id: "sharing-planet-23-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una entrevista", "Un informe oficial", "Un anuncio", "Una postal"], correctAnswer: "Una entrevista" },
      { id: "sharing-planet-23-q5", type: "short", prompt: "¿En cuántos institutos tiene presencia el movimiento de Nadia?", correctAnswer: "más de treinta institutos" },
    ],
    vocabulary: [
      { es: "fundadora", en: "founder (fem.)" },
      { es: "movimiento", en: "movement" },
      { es: "deshielo", en: "thaw / melting (of ice)" },
      { es: "frustrada", en: "frustrated (fem.)" },
      { es: "obstáculos", en: "obstacles" },
      { es: "complejos", en: "complex" },
      { es: "emergencia", en: "emergency" },
      { es: "involucrarse", en: "to get involved" },
    ],
  },
  {
    id: "reading-sharing-planet-24",
    themeId: "sharing-planet",
    title: "Postal desde una reserva natural",
    textType: "Postcard",
    level: "easy",
    bodyEs:
      "¡Hola, abuela!\n\n" +
      "Te escribo desde la reserva natural donde estoy pasando una semana como voluntaria, contando aves junto a un grupo de biólogos. Nunca había madrugado tanto en mi vida: nos levantamos a las cinco de la mañana porque es cuando más actividad hay.\n\n" +
      "Ayer vimos un águila real volando muy cerca del refugio donde dormimos, y todos nos quedamos en absoluto silencio para no espantarla. Fue uno de los momentos más bonitos que recuerdo.\n\n" +
      "Duermo en una cabaña sin electricidad, así que por las noches solo tenemos linternas y las estrellas, que aquí se ven muchísimo mejor que en la ciudad. Al principio lo eché de menos, pero ya me he acostumbrado.\n\n" +
      "Vuelvo el sábado. ¡Tengo tantas fotos e historias que contarte que no sé por dónde empezar!\n\n" +
      "Con cariño,\nElsa",
    questions: [
      { id: "sharing-planet-24-q1", type: "true-false", prompt: "Elsa se levanta a las cinco de la mañana en la reserva.", correctAnswer: "true", justification: "\"nos levantamos a las cinco de la mañana porque es cuando más actividad hay\"" },
      { id: "sharing-planet-24-q2", type: "true-false", prompt: "La cabaña donde duerme Elsa tiene electricidad.", correctAnswer: "false", justification: "\"Duermo en una cabaña sin electricidad\"" },
      { id: "sharing-planet-24-q3", type: "mcq", prompt: "¿Qué animal vieron cerca del refugio?", options: ["Un águila real", "Un lobo", "Un ciervo", "Un oso"], correctAnswer: "Un águila real" },
      { id: "sharing-planet-24-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una postal", "Un informe oficial", "Un anuncio", "Una reseña"], correctAnswer: "Una postal" },
      { id: "sharing-planet-24-q5", type: "short", prompt: "¿Qué día vuelve Elsa a casa?", correctAnswer: "el sábado" },
    ],
    vocabulary: [
      { es: "reserva", en: "reserve (natural)" },
      { es: "biólogos", en: "biologists" },
      { es: "madrugado", en: "gotten up early" },
      { es: "refugio", en: "shelter / refuge" },
      { es: "espantarla", en: "to scare it away" },
      { es: "linternas", en: "flashlights / lanterns" },
      { es: "estrellas", en: "stars" },
      { es: "acostumbrado", en: "gotten used to" },
    ],
  },
  {
    id: "reading-sharing-planet-25",
    themeId: "sharing-planet",
    title: "Reseña: 'El último glaciar'",
    textType: "Review",
    level: "medium",
    bodyEs:
      "\"El último glaciar\", de la escritora chilena Paula Nemesio, mezcla la historia de una glacióloga con datos científicos reales sobre el retroceso de los glaciares andinos, en una novela que engancha desde la primera página.\n\n" +
      "Lo que distingue a este libro de otras novelas sobre el cambio climático es que evita el tono moralizante que tanto abunda en el género. La protagonista, Marisol, no es una heroína perfecta: comete errores, duda de su propio trabajo y, en varios momentos, se siente completamente derrotada frente a un problema que la sobrepasa.\n\n" +
      "El único punto débil es el ritmo del último tercio, donde la trama secundaria sobre la vida familiar de Marisol se estira más de lo necesario y resta fuerza al mensaje principal de la novela.\n\n" +
      "Aun así, \"El último glaciar\" es una lectura muy recomendable, especialmente para quienes buscan entender el cambio climático desde una perspectiva humana y no solo a través de cifras y gráficos.",
    questions: [
      { id: "sharing-planet-25-q1", type: "true-false", prompt: "Según la reseña, la protagonista Marisol es presentada como una heroína perfecta.", correctAnswer: "false", justification: "\"Marisol, no es una heroína perfecta: comete errores, duda de su propio trabajo\"" },
      { id: "sharing-planet-25-q2", type: "true-false", prompt: "El autor considera que el ritmo del último tercio del libro es uno de sus puntos débiles.", correctAnswer: "true", justification: "\"El único punto débil es el ritmo del último tercio\"" },
      { id: "sharing-planet-25-q3", type: "mcq", prompt: "¿Cuál es la profesión de la protagonista de la novela?", options: ["Glacióloga", "Periodista", "Bióloga marina", "Meteoróloga"], correctAnswer: "Glacióloga" },
      { id: "sharing-planet-25-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Una reseña", "Un informe oficial", "Una entrevista", "Un anuncio"], correctAnswer: "Una reseña" },
      { id: "sharing-planet-25-q5", type: "short", prompt: "¿De qué nacionalidad es la escritora del libro?", correctAnswer: "chilena" },
    ],
    vocabulary: [
      { es: "glacióloga", en: "glaciologist (fem.)" },
      { es: "retroceso", en: "retreat / recession" },
      { es: "andinos", en: "Andean" },
      { es: "engancha", en: "hooks / grips (a reader)" },
      { es: "moralizante", en: "moralizing" },
      { es: "derrotada", en: "defeated (fem.)" },
      { es: "sobrepasa", en: "overwhelms / exceeds" },
      { es: "trama", en: "plot (story)" },
    ],
  },
  {
    id: "reading-sharing-planet-26",
    themeId: "sharing-planet",
    title: "Informe: la energía solar llega a las escuelas públicas",
    textType: "Official report",
    level: "hard",
    bodyEs:
      "Un informe del Ministerio de Educación confirma que el número de escuelas públicas equipadas con paneles solares se ha triplicado en los últimos cinco años, alcanzando ya a más de mil doscientos centros educativos en todo el país.\n\n" +
      "Según los datos recopilados, estas instalaciones han permitido reducir la factura eléctrica de los centros participantes en un promedio del sesenta por ciento, con un ahorro que muchos colegios destinan directamente a material didáctico y actividades extraescolares.\n\n" +
      "Más allá del ahorro económico, el informe destaca un beneficio educativo inesperado: numerosos centros han integrado los propios paneles solares en el currículo de ciencias, permitiendo a los estudiantes analizar datos reales de producción energética como parte de sus clases.\n\n" +
      "El Ministerio anuncia que la siguiente fase del programa buscará llegar a otras dos mil escuelas antes de que termine la década, priorizando centros situados en zonas rurales con menor acceso a la red eléctrica general.",
    questions: [
      { id: "sharing-planet-26-q1", type: "true-false", prompt: "El número de escuelas con paneles solares ha disminuido en los últimos cinco años.", correctAnswer: "false", justification: "\"se ha triplicado en los últimos cinco años\"" },
      { id: "sharing-planet-26-q2", type: "true-false", prompt: "Algunos colegios destinan el dinero ahorrado a material didáctico.", correctAnswer: "true", justification: "\"un ahorro que muchos colegios destinan directamente a material didáctico\"" },
      { id: "sharing-planet-26-q3", type: "mcq", prompt: "¿En qué porcentaje se ha reducido la factura eléctrica, de media?", options: ["60%", "30%", "90%", "15%"], correctAnswer: "60%" },
      { id: "sharing-planet-26-q4", type: "mcq", prompt: "¿Qué tipo de texto es este?", options: ["Un informe oficial", "Una entrada de diario", "Un anuncio", "Una postal"], correctAnswer: "Un informe oficial" },
      { id: "sharing-planet-26-q5", type: "short", prompt: "¿Qué zonas priorizará la siguiente fase del programa?", correctAnswer: "zonas rurales con menor acceso a la red eléctrica general" },
    ],
    vocabulary: [
      { es: "paneles", en: "panels" },
      { es: "triplicado", en: "tripled" },
      { es: "instalaciones", en: "installations" },
      { es: "eléctrica", en: "electric" },
      { es: "promedio", en: "average" },
      { es: "didáctico", en: "educational / teaching (adj.)" },
      { es: "currículo", en: "curriculum" },
      { es: "priorizando", en: "prioritizing" },
    ],
  },
];

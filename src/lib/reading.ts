/// File: src/lib/reading.ts
//
// Paper 1 style reading comprehension: one passage per IB theme, each a
// different text type (blog post, diary entry, magazine article, formal
// email, opinion column) — recognizing text-type conventions is itself an
// assessed skill, not just understanding the content. Each passage has 5
// questions mixing true/false-with-justification (the real IB Paper 1
// format), multiple choice, and short answer. See components/ReadingModule.tsx.

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
        justification: "\"no todo el mundo está convencido. Algunos críticos argumentan...\"",
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
  },
];

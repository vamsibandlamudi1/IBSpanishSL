/// File: src/lib/reading.ts
//
// Paper 1 style reading comprehension: 11-12 passages per IB theme (56
// total, 280 questions), spanning nearly every official IB Spanish B text
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
  },
];

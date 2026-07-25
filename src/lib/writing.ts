/// File: src/lib/writing.ts
//
// Paper 2 style writing prompts: ten per IB theme (50 total), spanning
// nearly every official IB Spanish B text type (email/letter — personal
// and formal, blog post, magazine article, interview, diary entry, opinion
// essay, proposal, set of instructions, brochure, social media post,
// postcard, review, speech, newspaper article, report) with
// format-convention tips — recognizing and producing the right structure
// for a text type is itself an assessed Paper 2 skill, not just writing
// correct Spanish. All prompts are original, written to mirror the
// style/rigor of past IB papers — not copied from any real exam. See
// components/WritingModule.tsx.

import { WritingPrompt } from "./types";

export const WRITING_PROMPTS: WritingPrompt[] = [
  {
    id: "writing-identities",
    themeId: "identities",
    textType: "Personal email",
    level: "easy",
    instructions:
      "Write an email to a friend describing a change you've made to your lifestyle recently and why. Include how it has affected your sense of identity.",
    instructionsEs:
      "Escribe un correo electrónico a un amigo describiendo un cambio que has hecho recientemente en tu estilo de vida y por qué. Incluye cómo ha afectado tu sentido de identidad.",
    formatTips: [
      "Start with an informal greeting (e.g. '¡Hola [nombre]!')",
      "Use the informal 'tú' form throughout",
      "Close with a friendly sign-off (e.g. 'Un abrazo,')",
      "Keep paragraphs short and conversational",
    ],
    minWords: 200,
    maxWords: 300,
  },
  {
    id: "writing-experiences",
    themeId: "experiences",
    textType: "Blog post",
    level: "medium",
    instructions:
      "Write a blog post about a trip or experience that taught you something important. Describe what happened and reflect on what you learned.",
    instructionsEs:
      "Escribe una entrada de blog sobre un viaje o experiencia que te enseñó algo importante. Describe lo que pasó y reflexiona sobre lo que aprendiste.",
    formatTips: [
      "Use an engaging title",
      "Write in the first person, mostly past tense",
      "Include personal opinions and reflections",
      "End with a takeaway message for readers",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-human-ingenuity",
    themeId: "human-ingenuity",
    textType: "Magazine article",
    level: "medium",
    instructions:
      "Write an article for your school magazine about a piece of technology you think has changed young people's lives, for better or worse.",
    instructionsEs:
      "Escribe un artículo para la revista de tu colegio sobre una tecnología que crees que ha cambiado la vida de los jóvenes, para bien o para mal.",
    formatTips: [
      "Include a catchy headline",
      "Use a clear introduction, body, and conclusion",
      "Support your opinions with examples",
      "Questions to the reader can help engage them",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-social-organization",
    themeId: "social-organization",
    textType: "Formal letter",
    level: "hard",
    instructions:
      "Write a formal letter to your local council requesting a new resource for young people in your community (e.g. a youth center, a park, a library program). Explain why it is needed.",
    instructionsEs:
      "Escribe una carta formal al ayuntamiento de tu localidad solicitando un nuevo recurso para los jóvenes de tu comunidad (por ejemplo, un centro juvenil, un parque, un programa de biblioteca). Explica por qué es necesario.",
    formatTips: [
      "Start with 'Estimado/a Sr./Sra. [Apellido]:'",
      "Use the formal 'usted' form throughout",
      "State your purpose clearly in the first paragraph",
      "Close with 'Atentamente,' and your name",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-sharing-planet",
    themeId: "sharing-planet",
    textType: "Interview",
    level: "hard",
    instructions:
      "Write an interview between a journalist and a young environmental activist about what motivates them and what changes they want to see.",
    instructionsEs:
      "Escribe una entrevista entre un periodista y un/a joven activista ambiental sobre qué le motiva y qué cambios quiere ver.",
    formatTips: [
      "Format as alternating questions and answers (P: / R:)",
      "Give the interviewee a name",
      "Include at least 4-5 question-answer exchanges",
      "Keep the tone natural, like real speech",
    ],
    minWords: 250,
    maxWords: 400,
  },

  // --- Second prompt per theme, a different text type each time ---
  {
    id: "writing-identities-2",
    themeId: "identities",
    textType: "Diary entry",
    level: "easy",
    instructions:
      "Write a diary entry reflecting on an event that made you think differently about who you are. Describe what happened and how it affected your sense of identity.",
    instructionsEs:
      "Escribe una entrada de diario reflexionando sobre un suceso que te hizo pensar de forma diferente sobre quién eres. Describe lo que pasó y cómo afectó tu sentido de identidad.",
    formatTips: [
      "Start with 'Querido diario:'",
      "Write in the first person, past tense",
      "Be personal and reflective — this is private, not for an audience",
      "No formal greeting/closing needed",
    ],
    minWords: 200,
    maxWords: 300,
  },
  {
    id: "writing-experiences-2",
    themeId: "experiences",
    textType: "Opinion essay",
    level: "hard",
    instructions:
      "Write an opinion essay about whether traveling is the best way to learn about the world, compared to other ways like reading or watching documentaries.",
    instructionsEs:
      "Escribe un ensayo de opinión sobre si viajar es la mejor forma de aprender sobre el mundo, en comparación con otras formas como leer o ver documentales.",
    formatTips: [
      "State your opinion clearly in the introduction",
      "Give at least two supporting arguments with examples",
      "Consider a counterargument before your conclusion",
      "Use linking words (sin embargo, además, por lo tanto)",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-human-ingenuity-2",
    themeId: "human-ingenuity",
    textType: "Proposal",
    level: "medium",
    instructions:
      "Write a proposal to your school principal suggesting a new piece of technology or app that could improve student life at school.",
    instructionsEs:
      "Escribe una propuesta para el director de tu colegio sugiriendo una nueva tecnología o aplicación que podría mejorar la vida estudiantil en el colegio.",
    formatTips: [
      "Start with a clear statement of the problem you're solving",
      "Describe your proposed solution in detail",
      "Explain the benefits for students",
      "End with a call to action or next steps",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-social-organization-2",
    themeId: "social-organization",
    textType: "Set of instructions",
    level: "easy",
    instructions:
      "Write a set of instructions for new students explaining how to get involved in clubs and activities at your school.",
    instructionsEs:
      "Escribe una guía de instrucciones para estudiantes nuevos explicando cómo participar en clubes y actividades en tu colegio.",
    formatTips: [
      "Use an ordered list (Primero, Segundo, Luego, Por último)",
      "Use commands or the infinitive form for instructions",
      "Keep each step short and clear",
      "Include a friendly introduction and closing tip",
    ],
    minWords: 200,
    maxWords: 300,
  },
  {
    id: "writing-sharing-planet-2",
    themeId: "sharing-planet",
    textType: "Brochure",
    level: "medium",
    instructions:
      "Write the text for a brochure encouraging young people in your community to take part in an environmental volunteering project.",
    instructionsEs:
      "Escribe el texto de un folleto animando a los jóvenes de tu comunidad a participar en un proyecto de voluntariado ambiental.",
    formatTips: [
      "Use a catchy title and short, punchy sections with subheadings",
      "Use imperative verbs to persuade (¡Únete!, ¡Participa!)",
      "Include practical details (when, where, how to sign up)",
      "Keep the tone upbeat and motivating",
    ],
    minWords: 200,
    maxWords: 350,
  },

  // --- Third prompt per theme, filling out the remaining official IB text types ---
  {
    id: "writing-identities-3",
    themeId: "identities",
    textType: "Social media post",
    level: "easy",
    instructions:
      "Write a social media post reflecting on an aspect of your identity (culture, language, beliefs, or interests) that you are proud of, and why it matters to you.",
    instructionsEs:
      "Escribe una publicación en redes sociales reflexionando sobre un aspecto de tu identidad (cultura, idioma, creencias o intereses) del que te sientas orgulloso/a, y por qué es importante para ti.",
    formatTips: [
      "Keep sentences short and punchy, as on social media",
      "You can use emojis and a hashtag or two",
      "Use a friendly, personal tone",
      "End with a question or call to action to engage followers",
    ],
    minWords: 150,
    maxWords: 250,
  },
  {
    id: "writing-experiences-3",
    themeId: "experiences",
    textType: "Postcard",
    level: "easy",
    instructions:
      "Write a postcard to your family describing a trip you are currently on. Mention where you are, what you've been doing, and how you feel.",
    instructionsEs:
      "Escribe una postal a tu familia describiendo un viaje que estás haciendo actualmente. Menciona dónde estás, qué has estado haciendo y cómo te sientes.",
    formatTips: [
      "Start with a casual greeting (e.g. '¡Hola familia!')",
      "Keep it brief and conversational — postcards are short",
      "Use the present/recent past to describe your trip",
      "Close with a warm sign-off (e.g. 'Con cariño,')",
    ],
    minWords: 100,
    maxWords: 200,
  },
  {
    id: "writing-human-ingenuity-3",
    themeId: "human-ingenuity",
    textType: "Review",
    level: "medium",
    instructions:
      "Write a review of an app, gadget, or piece of technology you use regularly. Describe what it does, what you like and dislike about it, and whether you'd recommend it.",
    instructionsEs:
      "Escribe una reseña de una aplicación, dispositivo o tecnología que uses habitualmente. Describe qué hace, qué te gusta y qué no te gusta, y si la recomendarías.",
    formatTips: [
      "Include a title mentioning the product",
      "Give a balanced view — mention both pros and cons",
      "Consider ending with a rating (e.g. out of 5 stars)",
      "State clearly who you would/wouldn't recommend it for",
    ],
    minWords: 200,
    maxWords: 350,
  },
  {
    id: "writing-social-organization-3",
    themeId: "social-organization",
    textType: "Speech",
    level: "hard",
    instructions:
      "Write a speech to persuade your classmates to get involved in a cause or project that matters to your school community.",
    instructionsEs:
      "Escribe un discurso para persuadir a tus compañeros de clase a involucrarse en una causa o proyecto importante para tu comunidad escolar.",
    formatTips: [
      "Start with a greeting to the audience (e.g. 'Buenos días a todos')",
      "Use persuasive language and rhetorical questions",
      "Structure with a clear beginning, middle, and end",
      "Close with a strong call to action and a formal closing (e.g. 'Muchas gracias')",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-sharing-planet-3",
    themeId: "sharing-planet",
    textType: "Newspaper article",
    level: "hard",
    instructions:
      "Write a newspaper article reporting on a local environmental initiative or event (real or invented) that made a positive impact on your community.",
    instructionsEs:
      "Escribe un artículo periodístico informando sobre una iniciativa o evento ambiental local (real o inventado) que tuvo un impacto positivo en tu comunidad.",
    formatTips: [
      "Include a clear, informative headline",
      "Answer who, what, when, where, why in the opening paragraph",
      "Use quotes from a participant or organizer",
      "Write in a neutral, factual tone, mostly third person",
    ],
    minWords: 250,
    maxWords: 400,
  },

  // --- Fourth through tenth items for identities, added by parallel content-drafting pass ---
{
    id: "writing-identities-4",
    themeId: "identities",
    textType: "Formal letter",
    level: "medium",
    instructions: "Write a formal letter to the editor of a health magazine explaining why you changed your lifestyle habits and encouraging other young people to do the same.",
    instructionsEs: "Escribe una carta formal al director de una revista de salud explicando por qué cambiaste tus hábitos de vida y animando a otros jóvenes a hacer lo mismo.",
    formatTips: [
      "Begin with a formal greeting such as 'Estimado/a señor/a director/a'",
      "Use usted forms throughout to maintain a formal register",
      "Organize the letter into clear paragraphs: introduction, reasons, conclusion",
      "End with a formal closing such as 'Atentamente' or 'Le saluda cordialmente'",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-identities-5",
    themeId: "identities",
    textType: "Brochure",
    level: "easy",
    instructions: "Design a brochure for a new school wellness program aimed at helping students manage stress and build healthy habits.",
    instructionsEs: "Diseña un folleto para un nuevo programa de bienestar escolar dirigido a ayudar a los estudiantes a manejar el estrés y crear hábitos saludables.",
    formatTips: [
      "Use short catchy headings and subheadings to organize information",
      "Include bullet points or numbered lists rather than long paragraphs",
      "Use imperative verb forms to give advice (e.g. 'Prueba', 'Recuerda')",
      "Include practical details such as schedule, location, or contact information",
    ],
    minWords: 200,
    maxWords: 300,
  },
  {
    id: "writing-identities-6",
    themeId: "identities",
    textType: "Report",
    level: "hard",
    instructions: "Write a report for your school administration analyzing how multilingualism among students affects their sense of identity and community, based on interviews or observations you invent.",
    instructionsEs: "Escribe un informe para la administración de tu escuela analizando cómo el multilingüismo entre los estudiantes afecta su sentido de identidad y comunidad, basado en entrevistas u observaciones que inventes.",
    formatTips: [
      "Use an impersonal, objective register throughout (avoid 'yo')",
      "Organize with clear headings such as Introducción, Resultados, Conclusiones",
      "Support statements with invented data or examples for credibility",
      "Use formal connectors like 'por consiguiente', 'en cuanto a', 'cabe destacar'",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-identities-7",
    themeId: "identities",
    textType: "Opinion essay",
    level: "hard",
    instructions: "Write an opinion essay discussing whether young people should follow the traditions and values of their family or form their own independently.",
    instructionsEs: "Escribe un ensayo de opinión sobre si los jóvenes deben seguir las tradiciones y valores de su familia o formar los suyos propios de manera independiente.",
    formatTips: [
      "State your thesis clearly in the introduction",
      "Present counterarguments before refuting them",
      "Use linking words such as 'sin embargo', 'por otro lado', 'en conclusión'",
      "Keep a persuasive but respectful tone throughout",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-identities-8",
    themeId: "identities",
    textType: "Interview",
    level: "medium",
    instructions: "Write the transcript of an interview with an older family member about what their childhood was like, including at least five questions and answers.",
    instructionsEs: "Escribe la transcripción de una entrevista con un familiar mayor sobre cómo fue su infancia, incluyendo al menos cinco preguntas y respuestas.",
    formatTips: [
      "Format clearly with 'P:' for questions and 'R:' for answers",
      "Include a brief introduction naming the person and the topic",
      "Vary question types: yes/no, open-ended, and follow-up questions",
      "Use the imperfect tense to describe habitual past experiences",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-identities-9",
    themeId: "identities",
    textType: "Review",
    level: "easy",
    instructions: "Write a review of a wellness app or fitness program you have used, describing its features and whether you would recommend it.",
    instructionsEs: "Escribe una reseña de una aplicación de bienestar o programa de ejercicio que hayas usado, describiendo sus características y si la recomendarías.",
    formatTips: [
      "Include a title that captures your overall opinion",
      "Describe both positive and negative aspects for balance",
      "Use evaluative adjectives and comparative structures",
      "End with a clear recommendation or star rating",
    ],
    minWords: 200,
    maxWords: 300,
  },
  {
    id: "writing-identities-10",
    themeId: "identities",
    textType: "Set of instructions",
    level: "easy",
    instructions: "Write a set of instructions for classmates explaining how to build a simple morning routine that supports physical and mental well-being.",
    instructionsEs: "Escribe una guía de instrucciones para tus compañeros explicando cómo crear una rutina matutina sencilla que favorezca el bienestar físico y mental.",
    formatTips: [
      "Number each step in a logical sequence",
      "Use imperative verb forms (e.g. 'Levántate', 'Bebe', 'Estira')",
      "Keep each instruction short and action-focused",
      "Include approximate times or durations for each step",
    ],
    minWords: 200,
    maxWords: 300,
  },
  // --- Fourth through tenth items for experiences, added by parallel content-drafting pass ---
{
    id: "writing-experiences-4",
    themeId: "experiences",
    textType: "Formal email",
    level: "medium",
    instructions:
      "You recently went on a guided tour organized by a travel agency, but several things went wrong (delays, poor accommodation, an unqualified guide). Write a formal email to the agency describing the problems you experienced and requesting a partial refund or compensation.",
    instructionsEs:
      "Recientemente hiciste un tour guiado organizado por una agencia de viajes, pero varias cosas salieron mal (retrasos, alojamiento deficiente, un guía poco cualificado). Escribe un correo electrónico formal a la agencia describiendo los problemas que experimentaste y solicitando un reembolso parcial o una compensación.",
    formatTips: [
      "Open with a formal greeting (e.g. Estimados señores/señoras)",
      "Use usted forms and formal, polite language throughout",
      "Clearly state the purpose of the email in the first paragraph",
      "Close with a formal sign-off (e.g. Atentamente) and your full name",
    ],
    minWords: 220,
    maxWords: 320,
  },
  {
    id: "writing-experiences-5",
    themeId: "experiences",
    textType: "Magazine article",
    level: "medium",
    instructions:
      "Write an article for a youth travel magazine about a unique local festival or celebration in your region. Explain its traditions, history, and why young readers should experience it at least once.",
    instructionsEs:
      "Escribe un artículo para una revista juvenil de viajes sobre una fiesta o celebración local única de tu región. Explica sus tradiciones, su historia y por qué los jóvenes lectores deberían vivirla al menos una vez.",
    formatTips: [
      "Include an eye-catching title and possibly a subtitle",
      "Use engaging, descriptive language to appeal to young readers",
      "Organize content with clear paragraphs (introduction, details, conclusion)",
      "Consider including a quote or an anecdote to bring the topic to life",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-experiences-6",
    themeId: "experiences",
    textType: "Interview",
    level: "hard",
    instructions:
      "For a school project on family traditions, write the transcript of an interview you conducted with an older relative about a coming-of-age ceremony or rite of passage they experienced (e.g. a quinceañera, a religious ceremony, a graduation tradition).",
    instructionsEs:
      "Para un proyecto escolar sobre tradiciones familiares, escribe la transcripción de una entrevista que hiciste a un familiar mayor sobre una ceremonia de iniciación o rito de paso que vivió (por ejemplo, una fiesta de quince años, una ceremonia religiosa o una tradición de graduación).",
    formatTips: [
      "Use a clear Q&A format with interviewer and interviewee labeled",
      "Include a brief introduction stating who is being interviewed and why",
      "Vary question types (open questions, follow-ups, closing question)",
      "Keep the interviewee's answers natural and conversational in tone",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-experiences-7",
    themeId: "experiences",
    textType: "Speech",
    level: "hard",
    instructions:
      "Write the text of a speech to be delivered at a school assembly, sharing the personal experience of someone who migrated to a new country (yourself, a family member, or an invented character), and encouraging classmates to be more empathetic towards immigrants.",
    instructionsEs:
      "Escribe el texto de un discurso para pronunciar en una asamblea escolar, en el que compartas la experiencia personal de alguien que emigró a otro país (tú mismo, un familiar o un personaje inventado), y anima a tus compañeros a ser más empáticos con los inmigrantes.",
    formatTips: [
      "Open with a direct address to the audience (e.g. Queridos compañeros)",
      "Use rhetorical questions and repetition to engage listeners",
      "Structure the speech with a clear introduction, body, and call to action",
      "Close with a memorable final sentence or appeal",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-experiences-8",
    themeId: "experiences",
    textType: "Brochure",
    level: "easy",
    instructions:
      "Write a brochure for a travel company promoting a two-week cultural exchange trip for teenagers to a Spanish-speaking country. Describe the itinerary, activities, host families, and the price.",
    instructionsEs:
      "Escribe un folleto para una empresa de viajes que promociona un intercambio cultural de dos semanas para adolescentes en un país hispanohablante. Describe el itinerario, las actividades, las familias de acogida y el precio.",
    formatTips: [
      "Use headings and bullet points to organize information clearly",
      "Include a catchy slogan near the title",
      "Use persuasive, enthusiastic language to attract young travelers",
      "Include practical details such as dates, price, and contact information",
    ],
    minWords: 150,
    maxWords: 250,
  },
  {
    id: "writing-experiences-9",
    themeId: "experiences",
    textType: "Instructional guide",
    level: "easy",
    instructions:
      "Write a step-by-step guide for a friend explaining how to plan and organize a memorable surprise birthday celebration, from choosing a theme to the day of the event.",
    instructionsEs:
      "Escribe una guía paso a paso para un amigo explicando cómo planificar y organizar una fiesta sorpresa de cumpleaños memorable, desde elegir un tema hasta el día del evento.",
    formatTips: [
      "Use numbered or bulleted steps in a logical order",
      "Use imperative verb forms (e.g. elige, reserva, invita)",
      "Include a short introduction explaining the purpose of the guide",
      "Add practical tips or warnings in a separate section",
    ],
    minWords: 150,
    maxWords: 250,
  },
  {
    id: "writing-experiences-10",
    themeId: "experiences",
    textType: "Review",
    level: "medium",
    instructions:
      "Write a review for a book blog of a memoir or autobiography (real or invented) that tells the personal story of someone's life-changing journey or transformation. Describe the book's content and explain whether you would recommend it.",
    instructionsEs:
      "Escribe una reseña para un blog de libros sobre unas memorias o una autobiografía (reales o inventadas) que cuenten la historia personal de un viaje o una transformación que cambió la vida de alguien. Describe el contenido del libro y explica si lo recomendarías.",
    formatTips: [
      "Include the book's title and author near the beginning",
      "Summarize the content briefly without revealing too much (avoid spoilers)",
      "Give your personal opinion, supported by specific examples",
      "End with a clear recommendation stating who would enjoy the book",
    ],
    minWords: 200,
    maxWords: 350,
  },
  // --- Fourth through tenth items for human-ingenuity, added by parallel content-drafting pass ---
{
    id: "writing-human-ingenuity-4",
    themeId: "human-ingenuity",
    textType: "Blog post",
    level: "easy",
    instructions:
      "Write a blog post recommending a streaming series or film you recently watched to your readers. Explain what it is about, what you liked about it, and why others should watch it.",
    instructionsEs:
      "Escribe una entrada de blog recomendando a tus lectores una serie o película que has visto recientemente. Explica de qué trata, qué te gustó y por qué otras personas deberían verla.",
    formatTips: [
      "Use an engaging, informal title that grabs the reader's attention",
      "Write in a friendly, first-person tone as if chatting with readers",
      "Organize the post with short paragraphs and maybe a subheading or two",
      "End with a clear personal recommendation or rating",
    ],
    minWords: 200,
    maxWords: 300,
  },
  {
    id: "writing-human-ingenuity-5",
    themeId: "human-ingenuity",
    textType: "Formal email/letter",
    level: "medium",
    instructions:
      "Write a formal letter to a technology company complaining about a smartphone that stopped working shortly after purchase, requesting a repair or a refund.",
    instructionsEs:
      "Escribe una carta formal a una empresa de tecnología quejándote de un teléfono móvil que dejó de funcionar poco después de la compra, solicitando una reparación o un reembolso.",
    formatTips: [
      "Open with a formal greeting such as 'Estimados señores:'",
      "State the problem clearly, including relevant dates and product details",
      "Use formal register throughout (usted forms, no contractions)",
      "Close with a formal sign-off such as 'Atentamente' and your full name",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-human-ingenuity-6",
    themeId: "human-ingenuity",
    textType: "Report",
    level: "hard",
    instructions:
      "Write a report for your school council evaluating a recent technology fair held at your school, including its strengths, weaknesses, and recommendations for next year.",
    instructionsEs:
      "Escribe un informe para el consejo escolar evaluando una feria de tecnología celebrada recientemente en tu colegio, incluyendo sus puntos fuertes, sus puntos débiles y recomendaciones para el próximo año.",
    formatTips: [
      "Use a clear title and organize content under headings (Introducción, Puntos fuertes, Puntos débiles, Recomendaciones)",
      "Write in a formal, objective tone, avoiding overly personal opinions",
      "Include specific facts, numbers or examples to support each point",
      "End with clear, numbered recommendations for the future",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-human-ingenuity-7",
    themeId: "human-ingenuity",
    textType: "Speech",
    level: "medium",
    instructions:
      "Write the text of a speech to give at a school assembly about the responsible use of social media among teenagers.",
    instructionsEs:
      "Escribe el texto de un discurso para dar en una asamblea escolar sobre el uso responsable de las redes sociales entre los adolescentes.",
    formatTips: [
      "Open with a direct address to the audience (e.g. 'Queridos compañeros y profesores')",
      "Use rhetorical questions and persuasive language to engage listeners",
      "Structure ideas clearly with an introduction, development and conclusion",
      "Close with a memorable call to action",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-human-ingenuity-8",
    themeId: "human-ingenuity",
    textType: "Set of instructions",
    level: "easy",
    instructions:
      "Write a set of instructions explaining to a classmate how to set up and use a new school email account for the first time.",
    instructionsEs:
      "Escribe una guía de instrucciones explicando a un compañero de clase cómo configurar y usar por primera vez una nueva cuenta de correo electrónico escolar.",
    formatTips: [
      "Use numbered or bulleted steps in the correct order",
      "Use imperative verb forms (e.g. 'Haz clic en...', 'Escribe...')",
      "Keep each instruction short, clear and direct",
      "Include a brief warning or useful tip where relevant",
    ],
    minWords: 150,
    maxWords: 250,
  },
  {
    id: "writing-human-ingenuity-9",
    themeId: "human-ingenuity",
    textType: "Brochure",
    level: "medium",
    instructions:
      "Write a brochure for a new city bike-sharing scheme, informing residents how it works, its benefits, and the pricing.",
    instructionsEs:
      "Escribe un folleto para un nuevo servicio de bicicletas compartidas en la ciudad, informando a los residentes sobre cómo funciona, sus beneficios y los precios.",
    formatTips: [
      "Use catchy headings and short, punchy sections",
      "Include practical details such as prices, locations and hours",
      "Use persuasive, inviting language to attract potential users",
      "Use bullet points to highlight benefits or the steps to use the service",
    ],
    minWords: 200,
    maxWords: 300,
  },
  {
    id: "writing-human-ingenuity-10",
    themeId: "human-ingenuity",
    textType: "Social media post",
    level: "easy",
    instructions:
      "Write a social media post announcing an invention or app you created for a school science fair, encouraging classmates to try it.",
    instructionsEs:
      "Escribe una publicación en redes sociales anunciando un invento o una aplicación que creaste para una feria de ciencias escolar, animando a tus compañeros a probarla.",
    formatTips: [
      "Use an eye-catching opening line or emoji to grab attention",
      "Keep the tone casual and enthusiastic",
      "Use hashtags relevant to the topic",
      "Include a call to action inviting comments, likes or trying it out",
    ],
    minWords: 100,
    maxWords: 200,
  },
  // --- Fourth through tenth items for social-organization, added by parallel content-drafting pass ---
{
    id: "writing-social-organization-4",
    themeId: "social-organization",
    textType: "Diary entry",
    level: "easy",
    instructions: "Write a diary entry about your first week at a new school. Describe how you felt, what surprised you, and how you started to make friends.",
    instructionsEs: "Escribe una entrada de diario sobre tu primera semana en un nuevo colegio. Describe cómo te sentiste, qué te sorprendió y cómo empezaste a hacer amigos.",
    formatTips: [
      "Begin with 'Querido diario:' or a similar informal opening",
      "Write in the first person and use past tenses to narrate events",
      "Keep the tone personal, honest, and reflective",
      "No greeting or formal closing is needed — end naturally",
    ],
    minWords: 200,
    maxWords: 300,
  },
  {
    id: "writing-social-organization-5",
    themeId: "social-organization",
    textType: "Magazine article",
    level: "medium",
    instructions: "Write an article for a youth magazine about the challenges young people face when looking for their first job. Include possible solutions and give your own opinion.",
    instructionsEs: "Escribe un artículo para una revista juvenil sobre los desafíos que enfrentan los jóvenes al buscar su primer trabajo. Incluye posibles soluciones y da tu propia opinión.",
    formatTips: [
      "Use an engaging title and, if useful, subheadings",
      "Address the reader directly to keep them interested",
      "Support your points with examples or invented statistics",
      "Close with a memorable final thought or call to action",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-social-organization-6",
    themeId: "social-organization",
    textType: "Proposal",
    level: "medium",
    instructions: "Write a proposal to your local council suggesting improvements to a community center in your neighborhood. Explain the current problems and describe your proposed changes and their benefits.",
    instructionsEs: "Escribe una propuesta para el ayuntamiento sugiriendo mejoras para un centro comunitario de tu barrio. Explica los problemas actuales y describe los cambios que propones y sus beneficios.",
    formatTips: [
      "Use a clear title such as 'Propuesta para...'",
      "Organize ideas with headings or numbered points",
      "Use formal, persuasive language throughout",
      "End with a clear summary of the expected benefits",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-social-organization-7",
    themeId: "social-organization",
    textType: "Report",
    level: "hard",
    instructions: "Write a report for your school administration about a rise in minor incidents in the school corridors. Summarize the situation, present possible causes, and recommend measures to improve order.",
    instructionsEs: "Escribe un informe para la dirección de tu colegio sobre un aumento de incidentes menores en los pasillos. Resume la situación, presenta posibles causas y recomienda medidas para mejorar el orden.",
    formatTips: [
      "Include a title and, ideally, section headings (Introducción, Causas, Recomendaciones)",
      "Use formal, objective, impersonal language",
      "Present information logically, supported by facts or examples",
      "Finish with clear, actionable recommendations",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-social-organization-8",
    themeId: "social-organization",
    textType: "Advertisement",
    level: "easy",
    instructions: "Write an advertisement for a new mentoring program that pairs older and younger neighbors to build stronger friendships in the community. Make it appealing and persuasive.",
    instructionsEs: "Escribe un anuncio para un nuevo programa de mentoría que une a vecinos mayores y jóvenes para crear amistades más fuertes en la comunidad. Hazlo atractivo y persuasivo.",
    formatTips: [
      "Use a catchy slogan or headline to grab attention",
      "Keep sentences short and use persuasive, positive language",
      "Include practical details: who can join, how, and when",
      "End with a clear call to action, such as contact information",
    ],
    minWords: 100,
    maxWords: 200,
  },
  {
    id: "writing-social-organization-9",
    themeId: "social-organization",
    textType: "Postcard",
    level: "easy",
    instructions: "Write a postcard to a friend describing a community festival you attended in a town you are visiting. Mention what you saw, who you met, and how you felt.",
    instructionsEs: "Escribe una postal a un amigo describiendo un festival comunitario al que asististe en un pueblo que estás visitando. Menciona lo que viste, a quién conociste y cómo te sentiste.",
    formatTips: [
      "Start with an informal greeting, such as '¡Hola [nombre]!'",
      "Keep it short, friendly, and conversational — space is limited",
      "Use the past tense to narrate what happened",
      "End with an informal closing like 'Un abrazo' plus your name",
    ],
    minWords: 100,
    maxWords: 200,
  },
  {
    id: "writing-social-organization-10",
    themeId: "social-organization",
    textType: "Review",
    level: "medium",
    instructions: "Write a review of an online tutoring platform you used to prepare for exams. Describe its features, evaluate its strengths and weaknesses, and say whether you would recommend it.",
    instructionsEs: "Escribe una reseña de una plataforma de tutorías en línea que usaste para prepararte para tus exámenes. Describe sus funciones, evalúa sus puntos fuertes y débiles, y di si la recomendarías.",
    formatTips: [
      "Give the review a clear title mentioning what is being reviewed",
      "Organize it around clear criteria: features, pros, cons",
      "Support opinions with specific examples from your experience",
      "End with a rating or a clear final recommendation",
    ],
    minWords: 200,
    maxWords: 300,
  },
  // --- Fourth through tenth items for sharing-planet, added by parallel content-drafting pass ---
{
    id: "writing-sharing-planet-4",
    themeId: "sharing-planet",
    textType: "Speech",
    level: "hard",
    instructions: "Write the text of a speech you would give at a school assembly calling for greater youth involvement in peace-building efforts in areas affected by conflict.",
    instructionsEs: "Escribe el texto de un discurso que darías en una asamblea escolar pidiendo una mayor participación juvenil en los esfuerzos de construcción de paz en zonas afectadas por conflictos.",
    formatTips: [
      "Open with a direct address to the audience (e.g. 'Queridos compañeros...')",
      "Use rhetorical questions and persuasive language to engage listeners",
      "Include a clear call to action near the end",
      "Close with a memorable final sentence or slogan",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-sharing-planet-5",
    themeId: "sharing-planet",
    textType: "Blog post",
    level: "medium",
    instructions: "Write a blog post describing a personal experience that changed the way you think about protecting the environment.",
    instructionsEs: "Escribe una entrada de blog describiendo una experiencia personal que cambió tu manera de pensar sobre la protección del medio ambiente.",
    formatTips: [
      "Use a catchy, informal title",
      "Write in first person with a conversational tone",
      "Organize ideas into short paragraphs for easy online reading",
      "Invite readers to comment or share their own experiences at the end",
    ],
    minWords: 200,
    maxWords: 300,
  },
  {
    id: "writing-sharing-planet-6",
    themeId: "sharing-planet",
    textType: "Diary entry",
    level: "medium",
    instructions: "Write a diary entry reflecting on a day when you witnessed or learned about an act of discrimination and how it made you feel.",
    instructionsEs: "Escribe una entrada de diario reflexionando sobre un día en el que presenciaste o conociste un acto de discriminación y cómo te hizo sentir.",
    formatTips: [
      "Begin with the date and an informal opening",
      "Write in first person, past tense, with personal and emotional language",
      "Include specific details about what happened during the day",
      "End with a reflection or resolution for the future",
    ],
    minWords: 200,
    maxWords: 300,
  },
  {
    id: "writing-sharing-planet-7",
    themeId: "sharing-planet",
    textType: "Formal letter",
    level: "hard",
    instructions: "Write a formal letter to the director of a multinational company that is opening a large factory in your town, expressing your community's concerns about its impact on local businesses and culture.",
    instructionsEs: "Escribe una carta formal al director de una empresa multinacional que va a abrir una gran fábrica en tu pueblo, expresando las preocupaciones de tu comunidad sobre su impacto en los negocios y la cultura locales.",
    formatTips: [
      "Use formal greetings and closings (Estimado/a..., Atentamente...)",
      "Maintain a respectful, formal register throughout (usted form)",
      "Organize the letter into clear paragraphs: introduction, concerns, request",
      "State a specific, realistic request or call to action",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-sharing-planet-8",
    themeId: "sharing-planet",
    textType: "Proposal",
    level: "hard",
    instructions: "Write a proposal to your school administration suggesting the introduction of a fair-trade and ethically sourced products policy in the school cafeteria.",
    instructionsEs: "Escribe una propuesta dirigida a la administración de tu colegio sugiriendo la introducción de una política de productos de comercio justo y origen ético en la cafetería escolar.",
    formatTips: [
      "Use a clear title and headings to organize sections (e.g. Objetivo, Beneficios, Implementación)",
      "State the purpose of the proposal clearly in the introduction",
      "Support ideas with concrete, realistic details or examples",
      "Use a formal but persuasive tone throughout",
    ],
    minWords: 250,
    maxWords: 400,
  },
  {
    id: "writing-sharing-planet-9",
    themeId: "sharing-planet",
    textType: "Review",
    level: "medium",
    instructions: "Write a review of a shop, app, or product that helps consumers make more ethical or sustainable choices.",
    instructionsEs: "Escribe una reseña de una tienda, aplicación o producto que ayuda a los consumidores a tomar decisiones más éticas o sostenibles.",
    formatTips: [
      "Give the review a clear title and an overall rating or recommendation",
      "Describe your personal experience using specific examples",
      "Balance positive and negative points fairly",
      "End with a clear recommendation for potential users",
    ],
    minWords: 200,
    maxWords: 300,
  },
  {
    id: "writing-sharing-planet-10",
    themeId: "sharing-planet",
    textType: "Social media post",
    level: "easy",
    instructions: "Write a social media post encouraging your followers to take part in a local river clean-up event you are organizing.",
    instructionsEs: "Escribe una publicación en redes sociales animando a tus seguidores a participar en una jornada de limpieza de un río local que estás organizando.",
    formatTips: [
      "Keep the tone friendly, energetic, and direct",
      "Include practical details: date, time, and meeting point",
      "Use a hashtag or call-to-action phrase",
      "Keep sentences short and easy to skim quickly",
    ],
    minWords: 100,
    maxWords: 200,
  },
];

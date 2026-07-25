/// File: src/lib/writing.ts
//
// Paper 2 style writing prompts: one per IB theme, each a different text
// type (email, blog post, magazine article, formal letter, interview) with
// format-convention tips — recognizing and producing the right structure
// for a text type is itself an assessed Paper 2 skill, not just writing
// correct Spanish. See components/WritingModule.tsx.

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
];

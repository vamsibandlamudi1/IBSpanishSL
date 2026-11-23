/// File: src/lib/oralQuestions.ts
//
// General-discussion questions for the Individual Oral, per IB theme. After
// the student's presentation the examiner asks follow-up and general
// discussion questions across the themes; this bank lets students practice
// that second half. Questions are original, open-ended, and written to be
// answered in Spanish with an opinion and an example. See
// components/AudioAssignmentModule.tsx.

export interface DiscussionQuestion {
  es: string;
  en: string;
}

export const DISCUSSION_QUESTIONS: Record<string, DiscussionQuestion[]> = {
  identities: [
    {
      es: "¿Qué aspecto de tu identidad es el más importante para ti y por qué?",
      en: "Which aspect of your identity is the most important to you, and why?",
    },
    {
      es: "¿Crees que las redes sociales ayudan o dificultan que los jóvenes encuentren quiénes son?",
      en: "Do you think social media helps or hinders young people finding out who they are?",
    },
    {
      es: "¿Qué papel juega el idioma en la identidad de una persona?",
      en: "What role does language play in a person's identity?",
    },
    {
      es: "¿Cómo ha cambiado tu forma de ver el mundo desde que eras niño?",
      en: "How has your view of the world changed since you were a child?",
    },
    {
      es: "¿Hasta qué punto debemos seguir las tradiciones de nuestra familia?",
      en: "To what extent should we follow our family's traditions?",
    },
    {
      es: "¿Qué consejo le darías a alguien que se siente perdido sobre su identidad?",
      en: "What advice would you give someone who feels lost about their identity?",
    },
  ],
  experiences: [
    {
      es: "¿Cuál ha sido la experiencia de viaje más importante de tu vida?",
      en: "What has been the most important travel experience of your life?",
    },
    {
      es: "¿Crees que viajar es la mejor forma de aprender sobre otras culturas?",
      en: "Do you think travel is the best way to learn about other cultures?",
    },
    {
      es: "¿Qué tradiciones de tu país te parecen más importantes de conservar?",
      en: "Which traditions in your country do you think are most important to keep?",
    },
    {
      es: "¿Cómo afecta la migración a las familias que se quedan y a las que se van?",
      en: "How does migration affect the families who stay and those who leave?",
    },
    {
      es: "¿Qué lección te ha enseñado una experiencia difícil?",
      en: "What lesson has a difficult experience taught you?",
    },
    {
      es: "¿Por qué crees que las celebraciones y ritos de paso son importantes en la sociedad?",
      en: "Why do you think celebrations and rites of passage matter in society?",
    },
  ],
  "human-ingenuity": [
    {
      es: "¿Qué invento crees que ha cambiado más la vida de los jóvenes?",
      en: "Which invention do you think has changed young people's lives the most?",
    },
    {
      es: "¿Crees que la tecnología nos hace más felices o más dependientes?",
      en: "Do you think technology makes us happier or more dependent?",
    },
    {
      es: "¿Cómo podría la inteligencia artificial afectar tu futuro profesional?",
      en: "How might artificial intelligence affect your future career?",
    },
    {
      es: "¿Qué ventajas y desventajas tiene el entretenimiento digital?",
      en: "What are the advantages and disadvantages of digital entertainment?",
    },
    {
      es: "¿Deberían los gobiernos regular las redes sociales? ¿Por qué?",
      en: "Should governments regulate social media? Why?",
    },
    {
      es: "¿Qué innovación te gustaría ver en los próximos diez años?",
      en: "Which innovation would you like to see in the next ten years?",
    },
  ],
  "social-organization": [
    {
      es: "¿Qué papel debería tener la educación en la vida de una sociedad?",
      en: "What role should education play in the life of a society?",
    },
    {
      es: "¿Crees que el trabajo voluntario es una responsabilidad de todos los ciudadanos?",
      en: "Do you think volunteering is a responsibility for all citizens?",
    },
    {
      es: "¿Son justas las leyes de tu país? Explica con un ejemplo.",
      en: "Are the laws in your country fair? Explain with an example.",
    },
    {
      es: "¿Cómo influye la familia en el éxito profesional de una persona?",
      en: "How does family influence a person's professional success?",
    },
    {
      es: "¿Qué hace que una comunidad sea fuerte?",
      en: "What makes a community strong?",
    },
    {
      es: "¿Es importante votar a los jóvenes? ¿Por qué?",
      en: "Is it important for young people to vote? Why?",
    },
  ],
  "sharing-planet": [
    {
      es: "¿Qué es lo primero que harías para proteger el medio ambiente en tu ciudad?",
      en: "What is the first thing you would do to protect the environment in your city?",
    },
    {
      es: "¿Crees que el consumo responsable puede cambiar el mundo?",
      en: "Do you think responsible consumption can change the world?",
    },
    {
      es: "¿Cuál es el mayor desafío de la globalización para los países pobres?",
      en: "What is the biggest challenge of globalisation for poorer countries?",
    },
    {
      es: "¿Qué derechos humanos crees que se respetan menos hoy en día?",
      en: "Which human rights do you think are least respected today?",
    },
    {
      es: "¿Cómo se puede construir la paz entre países que tienen conflictos?",
      en: "How can peace be built between countries in conflict?",
    },
    {
      es: "¿Son los jóvenes responsables de resolver los problemas globales? Justifica tu respuesta.",
      en: "Are young people responsible for solving global problems? Justify your answer.",
    },
  ],
};

/// File: src/lib/data.ts
//
// Static "seed" content for the app: the 5 official IB Spanish B SL themes,
// a large quiz question bank (200+ questions per theme, covering every
// subtopic), oral-exam-style audio tasks (10 per theme, two per subtopic,
// with Spanish TTS prompt text), badge definitions, and the prize catalog.
// There is no teacher/admin role in this app — everything the student needs
// is defined here, and lib/store.tsx + lib/analytics.ts handle grading,
// gamification, and weakness detection automatically.
//
// The question bank has two parts:
//   1. CORE_QUESTIONS — 20 hand-written grammar/sentence-puzzle questions
//      per theme (4 per subtopic), which need real sentence construction and
//      can't be generated safely from a word list.
//   2. buildVocabQuestions() — a deterministic generator that turns each
//      theme's vocabulary list into 5 question variants per word (multiple
//      choice and typed in both translation directions, plus a listening
//      question — hear the word spoken aloud, pick its meaning). With ~70
//      words per theme this alone produces 350 questions/theme, so every
//      theme ends up with ~365 questions — enough for real
//      spaced-repetition-style drilling ahead of exams. The generator is
//      deterministic (no randomness), so the bank is identical on every
//      server/client render — no hydration risk.
//
// ---> TO ADD NEW CONTENT: add vocabulary (auto-generates 5 questions each),
// or push a new hand-written QuizItem into CORE_QUESTIONS for grammar drills.
//
// All Spanish sample content is original/generic (not copied from any
// copyrighted textbook or exam paper) and intentionally simple, since this is
// a classroom prototype.

import { AudioTask, Badge, Prize, QuizItem, Theme } from "./types";

// ---------------------------------------------------------------------------
// Themes & vocabulary (14 words per subtopic x 5 subtopics = 70 per theme)
// ---------------------------------------------------------------------------

export const THEMES: Theme[] = [
  {
    id: "identities",
    name: "Identities",
    description:
      "Who we are: lifestyles, health, beliefs, and the languages and cultures that shape identity.",
    subtopics: [
      "Lifestyles",
      "Health and well-being",
      "Language and identity",
      "Beliefs and values",
      "Childhood and adolescence",
    ],
    vocabulary: [
      // Lifestyles
      { es: "el estilo de vida", en: "lifestyle", subtopic: "Lifestyles" },
      { es: "la rutina", en: "routine", subtopic: "Lifestyles" },
      { es: "el hábito", en: "habit", subtopic: "Lifestyles" },
      { es: "el ocio", en: "leisure", subtopic: "Lifestyles" },
      { es: "el ejercicio", en: "exercise", subtopic: "Lifestyles" },
      { es: "la dieta", en: "diet", subtopic: "Lifestyles" },
      { es: "el equilibrio", en: "balance", subtopic: "Lifestyles" },
      { es: "el descanso", en: "rest", subtopic: "Lifestyles" },
      { es: "la energía", en: "energy", subtopic: "Lifestyles" },
      { es: "la costumbre", en: "custom", subtopic: "Lifestyles" },
      { es: "el horario", en: "schedule", subtopic: "Lifestyles" },
      { es: "el pasatiempo", en: "hobby", subtopic: "Lifestyles" },
      { es: "la comodidad", en: "comfort", subtopic: "Lifestyles" },
      { es: "la simplicidad", en: "simplicity", subtopic: "Lifestyles" },
      // Health and well-being
      { es: "la salud", en: "health", subtopic: "Health and well-being" },
      { es: "el bienestar", en: "well-being", subtopic: "Health and well-being" },
      { es: "la enfermedad", en: "illness", subtopic: "Health and well-being" },
      { es: "el médico", en: "doctor", subtopic: "Health and well-being" },
      { es: "el hospital", en: "hospital", subtopic: "Health and well-being" },
      { es: "la medicina", en: "medicine", subtopic: "Health and well-being" },
      { es: "el estrés", en: "stress", subtopic: "Health and well-being" },
      { es: "la ansiedad", en: "anxiety", subtopic: "Health and well-being" },
      { es: "la felicidad", en: "happiness", subtopic: "Health and well-being" },
      { es: "el sueño", en: "sleep", subtopic: "Health and well-being" },
      { es: "la nutrición", en: "nutrition", subtopic: "Health and well-being" },
      { es: "el cuerpo", en: "body", subtopic: "Health and well-being" },
      { es: "la mente", en: "mind", subtopic: "Health and well-being" },
      { es: "el tratamiento", en: "treatment", subtopic: "Health and well-being" },
      // Language and identity
      { es: "el idioma", en: "language", subtopic: "Language and identity" },
      { es: "la lengua materna", en: "mother tongue", subtopic: "Language and identity" },
      { es: "el acento", en: "accent", subtopic: "Language and identity" },
      { es: "la traducción", en: "translation", subtopic: "Language and identity" },
      { es: "el bilingüismo", en: "bilingualism", subtopic: "Language and identity" },
      { es: "la cultura", en: "culture", subtopic: "Language and identity" },
      { es: "la nacionalidad", en: "nationality", subtopic: "Language and identity" },
      { es: "la identidad", en: "identity", subtopic: "Language and identity" },
      { es: "la herencia", en: "heritage", subtopic: "Language and identity" },
      { es: "la comunicación", en: "communication", subtopic: "Language and identity" },
      { es: "el dialecto", en: "dialect", subtopic: "Language and identity" },
      { es: "la pronunciación", en: "pronunciation", subtopic: "Language and identity" },
      { es: "el vocabulario", en: "vocabulary", subtopic: "Language and identity" },
      { es: "la expresión", en: "expression", subtopic: "Language and identity" },
      // Beliefs and values
      { es: "los valores", en: "values", subtopic: "Beliefs and values" },
      { es: "las creencias", en: "beliefs", subtopic: "Beliefs and values" },
      { es: "la religión", en: "religion", subtopic: "Beliefs and values" },
      { es: "la moral", en: "morality", subtopic: "Beliefs and values" },
      { es: "la honestidad", en: "honesty", subtopic: "Beliefs and values" },
      { es: "el respeto", en: "respect", subtopic: "Beliefs and values" },
      { es: "la tolerancia", en: "tolerance", subtopic: "Beliefs and values" },
      { es: "la libertad", en: "freedom", subtopic: "Beliefs and values" },
      { es: "la justicia", en: "justice", subtopic: "Beliefs and values" },
      { es: "la fe", en: "faith", subtopic: "Beliefs and values" },
      { es: "la tradición familiar", en: "family tradition", subtopic: "Beliefs and values" },
      { es: "la ética", en: "ethics", subtopic: "Beliefs and values" },
      { es: "la espiritualidad", en: "spirituality", subtopic: "Beliefs and values" },
      { es: "la responsabilidad", en: "responsibility", subtopic: "Beliefs and values" },
      // Childhood and adolescence
      { es: "la infancia", en: "childhood", subtopic: "Childhood and adolescence" },
      { es: "la adolescencia", en: "adolescence", subtopic: "Childhood and adolescence" },
      { es: "la pubertad", en: "puberty", subtopic: "Childhood and adolescence" },
      { es: "el juguete", en: "toy", subtopic: "Childhood and adolescence" },
      { es: "el colegio", en: "school", subtopic: "Childhood and adolescence" },
      { es: "la amistad de la infancia", en: "childhood friendship", subtopic: "Childhood and adolescence" },
      { es: "la madurez", en: "maturity", subtopic: "Childhood and adolescence" },
      { es: "la independencia", en: "independence", subtopic: "Childhood and adolescence" },
      { es: "la rebeldía", en: "rebelliousness", subtopic: "Childhood and adolescence" },
      { es: "la presión de grupo", en: "peer pressure", subtopic: "Childhood and adolescence" },
      { es: "el grupo de amigos", en: "friend group", subtopic: "Childhood and adolescence" },
      { es: "el crecimiento", en: "growth", subtopic: "Childhood and adolescence" },
      { es: "la etapa", en: "stage", subtopic: "Childhood and adolescence" },
      { es: "el cambio", en: "change", subtopic: "Childhood and adolescence" },
    ],
  },
  {
    id: "experiences",
    name: "Experiences",
    description:
      "Life's milestones and stories: travel, celebrations, rites of passage, and personal memories.",
    subtopics: [
      "Travel",
      "Holidays and celebrations",
      "Rites of passage",
      "Migration",
      "Personal stories",
    ],
    vocabulary: [
      // Travel
      { es: "el viaje", en: "trip", subtopic: "Travel" },
      { es: "las vacaciones", en: "vacation", subtopic: "Travel" },
      { es: "el destino", en: "destination", subtopic: "Travel" },
      { es: "el equipaje", en: "luggage", subtopic: "Travel" },
      { es: "el pasaporte", en: "passport", subtopic: "Travel" },
      { es: "el billete", en: "ticket", subtopic: "Travel" },
      { es: "el aeropuerto", en: "airport", subtopic: "Travel" },
      { es: "el hotel", en: "hotel", subtopic: "Travel" },
      { es: "la excursión", en: "excursion", subtopic: "Travel" },
      { es: "el itinerario", en: "itinerary", subtopic: "Travel" },
      { es: "el turista", en: "tourist", subtopic: "Travel" },
      { es: "la aventura", en: "adventure", subtopic: "Travel" },
      { es: "el mapa", en: "map", subtopic: "Travel" },
      { es: "la reserva", en: "reservation", subtopic: "Travel" },
      // Holidays and celebrations
      { es: "la celebración", en: "celebration", subtopic: "Holidays and celebrations" },
      { es: "la fiesta", en: "party", subtopic: "Holidays and celebrations" },
      { es: "la tradición", en: "tradition", subtopic: "Holidays and celebrations" },
      { es: "el festival", en: "festival", subtopic: "Holidays and celebrations" },
      { es: "el cumpleaños", en: "birthday", subtopic: "Holidays and celebrations" },
      { es: "la Navidad", en: "Christmas", subtopic: "Holidays and celebrations" },
      { es: "el aniversario", en: "anniversary", subtopic: "Holidays and celebrations" },
      { es: "el regalo", en: "gift", subtopic: "Holidays and celebrations" },
      { es: "la sorpresa", en: "surprise", subtopic: "Holidays and celebrations" },
      { es: "la costumbre festiva", en: "festive custom", subtopic: "Holidays and celebrations" },
      { es: "el desfile", en: "parade", subtopic: "Holidays and celebrations" },
      { es: "la decoración", en: "decoration", subtopic: "Holidays and celebrations" },
      { es: "el brindis", en: "toast", subtopic: "Holidays and celebrations" },
      { es: "la reunión familiar", en: "family gathering", subtopic: "Holidays and celebrations" },
      // Rites of passage
      { es: "la graduación", en: "graduation", subtopic: "Rites of passage" },
      { es: "la boda", en: "wedding", subtopic: "Rites of passage" },
      { es: "el bautismo", en: "baptism", subtopic: "Rites of passage" },
      { es: "el rito", en: "rite", subtopic: "Rites of passage" },
      { es: "la ceremonia", en: "ceremony", subtopic: "Rites of passage" },
      { es: "el diploma", en: "diploma", subtopic: "Rites of passage" },
      { es: "la mayoría de edad", en: "coming of age", subtopic: "Rites of passage" },
      { es: "el compromiso", en: "engagement", subtopic: "Rites of passage" },
      { es: "la jubilación", en: "retirement", subtopic: "Rites of passage" },
      { es: "el logro", en: "achievement", subtopic: "Rites of passage" },
      { es: "la despedida", en: "farewell", subtopic: "Rites of passage" },
      { es: "el primer día", en: "first day", subtopic: "Rites of passage" },
      { es: "la promesa", en: "promise", subtopic: "Rites of passage" },
      { es: "el hito", en: "milestone", subtopic: "Rites of passage" },
      // Migration
      { es: "la mudanza", en: "relocation", subtopic: "Migration" },
      { es: "la migración", en: "migration", subtopic: "Migration" },
      { es: "el inmigrante", en: "immigrant", subtopic: "Migration" },
      { es: "el emigrante", en: "emigrant", subtopic: "Migration" },
      { es: "la frontera", en: "border", subtopic: "Migration" },
      { es: "la ciudadanía", en: "citizenship", subtopic: "Migration" },
      { es: "el visado", en: "visa", subtopic: "Migration" },
      { es: "la nostalgia", en: "nostalgia", subtopic: "Migration" },
      { es: "la integración", en: "integration", subtopic: "Migration" },
      { es: "la oportunidad", en: "opportunity", subtopic: "Migration" },
      { es: "la adaptación", en: "adaptation", subtopic: "Migration" },
      { es: "el país de origen", en: "home country", subtopic: "Migration" },
      { es: "el hogar nuevo", en: "new home", subtopic: "Migration" },
      { es: "la comunidad de acogida", en: "host community", subtopic: "Migration" },
      // Personal stories
      { es: "el recuerdo", en: "memory", subtopic: "Personal stories" },
      { es: "la experiencia", en: "experience", subtopic: "Personal stories" },
      { es: "la anécdota", en: "anecdote", subtopic: "Personal stories" },
      { es: "la infancia feliz", en: "happy childhood", subtopic: "Personal stories" },
      { es: "el momento inolvidable", en: "unforgettable moment", subtopic: "Personal stories" },
      { es: "la lección aprendida", en: "lesson learned", subtopic: "Personal stories" },
      { es: "el desafío", en: "challenge", subtopic: "Personal stories" },
      { es: "el logro personal", en: "personal achievement", subtopic: "Personal stories" },
      { es: "la amistad", en: "friendship", subtopic: "Personal stories" },
      { es: "la familia", en: "family", subtopic: "Personal stories" },
      { es: "el cambio de vida", en: "life change", subtopic: "Personal stories" },
      { es: "la reflexión", en: "reflection", subtopic: "Personal stories" },
      { es: "la narrativa", en: "narrative", subtopic: "Personal stories" },
      { es: "la historia personal", en: "personal story", subtopic: "Personal stories" },
    ],
  },
  {
    id: "human-ingenuity",
    name: "Human Ingenuity",
    description:
      "What humans create and invent: technology, media, transport, and entertainment.",
    subtopics: [
      "Entertainment",
      "Innovation",
      "Communication and media",
      "Technology",
      "Transport",
    ],
    vocabulary: [
      // Entertainment
      { es: "el entretenimiento", en: "entertainment", subtopic: "Entertainment" },
      { es: "la película", en: "movie", subtopic: "Entertainment" },
      { es: "la música", en: "music", subtopic: "Entertainment" },
      { es: "el videojuego", en: "video game", subtopic: "Entertainment" },
      { es: "el concierto", en: "concert", subtopic: "Entertainment" },
      { es: "el teatro", en: "theater", subtopic: "Entertainment" },
      { es: "la serie", en: "TV series", subtopic: "Entertainment" },
      { es: "el espectáculo", en: "show", subtopic: "Entertainment" },
      { es: "el ocio digital", en: "digital leisure", subtopic: "Entertainment" },
      { es: "la diversión", en: "fun", subtopic: "Entertainment" },
      { es: "el streaming", en: "streaming", subtopic: "Entertainment" },
      { es: "la actuación", en: "performance", subtopic: "Entertainment" },
      { es: "el artista", en: "artist", subtopic: "Entertainment" },
      { es: "el público", en: "audience", subtopic: "Entertainment" },
      // Innovation
      { es: "la invención", en: "invention", subtopic: "Innovation" },
      { es: "la innovación", en: "innovation", subtopic: "Innovation" },
      { es: "la creatividad", en: "creativity", subtopic: "Innovation" },
      { es: "el descubrimiento", en: "discovery", subtopic: "Innovation" },
      { es: "el inventor", en: "inventor", subtopic: "Innovation" },
      { es: "la patente", en: "patent", subtopic: "Innovation" },
      { es: "el prototipo", en: "prototype", subtopic: "Innovation" },
      { es: "el avance", en: "breakthrough", subtopic: "Innovation" },
      { es: "la investigación", en: "research", subtopic: "Innovation" },
      { es: "la idea original", en: "original idea", subtopic: "Innovation" },
      { es: "la mejora", en: "improvement", subtopic: "Innovation" },
      { es: "el desarrollo", en: "development", subtopic: "Innovation" },
      { es: "la solución", en: "solution", subtopic: "Innovation" },
      { es: "el futuro", en: "future", subtopic: "Innovation" },
      // Communication and media
      { es: "los medios de comunicación", en: "media", subtopic: "Communication and media" },
      { es: "las redes sociales", en: "social media", subtopic: "Communication and media" },
      { es: "la noticia", en: "news", subtopic: "Communication and media" },
      { es: "el periódico", en: "newspaper", subtopic: "Communication and media" },
      { es: "la publicidad", en: "advertising", subtopic: "Communication and media" },
      { es: "el mensaje", en: "message", subtopic: "Communication and media" },
      { es: "la información", en: "information", subtopic: "Communication and media" },
      { es: "el internet", en: "internet", subtopic: "Communication and media" },
      { es: "la aplicación", en: "app", subtopic: "Communication and media" },
      { es: "la pantalla", en: "screen", subtopic: "Communication and media" },
      { es: "el influencer", en: "influencer", subtopic: "Communication and media" },
      { es: "la privacidad", en: "privacy", subtopic: "Communication and media" },
      { es: "la opinión pública", en: "public opinion", subtopic: "Communication and media" },
      { es: "el podcast", en: "podcast", subtopic: "Communication and media" },
      // Technology
      { es: "la tecnología", en: "technology", subtopic: "Technology" },
      { es: "la ciencia", en: "science", subtopic: "Technology" },
      { es: "el ordenador", en: "computer", subtopic: "Technology" },
      { es: "el teléfono inteligente", en: "smartphone", subtopic: "Technology" },
      { es: "la inteligencia artificial", en: "artificial intelligence", subtopic: "Technology" },
      { es: "el robot", en: "robot", subtopic: "Technology" },
      { es: "la robótica", en: "robotics", subtopic: "Technology" },
      { es: "la programación", en: "programming", subtopic: "Technology" },
      { es: "el dato", en: "data", subtopic: "Technology" },
      { es: "la máquina", en: "machine", subtopic: "Technology" },
      { es: "el progreso", en: "progress", subtopic: "Technology" },
      { es: "la energía renovable", en: "renewable energy", subtopic: "Technology" },
      { es: "el algoritmo", en: "algorithm", subtopic: "Technology" },
      { es: "la digitalización", en: "digitalization", subtopic: "Technology" },
      // Transport
      { es: "el transporte", en: "transport", subtopic: "Transport" },
      { es: "el coche", en: "car", subtopic: "Transport" },
      { es: "el tren", en: "train", subtopic: "Transport" },
      { es: "el avión", en: "airplane", subtopic: "Transport" },
      { es: "el autobús", en: "bus", subtopic: "Transport" },
      { es: "la bicicleta", en: "bicycle", subtopic: "Transport" },
      { es: "el metro", en: "subway", subtopic: "Transport" },
      { es: "la carretera", en: "road", subtopic: "Transport" },
      { es: "el tráfico", en: "traffic", subtopic: "Transport" },
      { es: "el conductor", en: "driver", subtopic: "Transport" },
      { es: "la velocidad", en: "speed", subtopic: "Transport" },
      { es: "el vehículo eléctrico", en: "electric vehicle", subtopic: "Transport" },
      { es: "el combustible", en: "fuel", subtopic: "Transport" },
      { es: "la infraestructura", en: "infrastructure", subtopic: "Transport" },
    ],
  },
  {
    id: "social-organization",
    name: "Social Organization",
    description:
      "How people live together: education, work, community, relationships, and rules.",
    subtopics: [
      "Education",
      "Employment",
      "Community life",
      "Social relationships",
      "Law and order",
    ],
    vocabulary: [
      // Education
      { es: "la educación", en: "education", subtopic: "Education" },
      { es: "la escuela", en: "school", subtopic: "Education" },
      { es: "el instituto", en: "high school", subtopic: "Education" },
      { es: "la universidad", en: "university", subtopic: "Education" },
      { es: "el profesor", en: "teacher", subtopic: "Education" },
      { es: "el estudiante", en: "student", subtopic: "Education" },
      { es: "la asignatura", en: "subject", subtopic: "Education" },
      { es: "el examen", en: "exam", subtopic: "Education" },
      { es: "la tarea", en: "homework", subtopic: "Education" },
      { es: "la beca", en: "scholarship", subtopic: "Education" },
      { es: "el aprendizaje", en: "learning", subtopic: "Education" },
      { es: "la enseñanza", en: "teaching", subtopic: "Education" },
      { es: "el conocimiento", en: "knowledge", subtopic: "Education" },
      { es: "la nota", en: "grade", subtopic: "Education" },
      // Employment
      { es: "el trabajo", en: "job", subtopic: "Employment" },
      { es: "el empleo", en: "employment", subtopic: "Employment" },
      { es: "la carrera", en: "career", subtopic: "Employment" },
      { es: "el jefe", en: "boss", subtopic: "Employment" },
      { es: "el empleado", en: "employee", subtopic: "Employment" },
      { es: "el sueldo", en: "salary", subtopic: "Employment" },
      { es: "la entrevista", en: "interview", subtopic: "Employment" },
      { es: "el currículum", en: "resume", subtopic: "Employment" },
      { es: "el desempleo", en: "unemployment", subtopic: "Employment" },
      { es: "la empresa", en: "company", subtopic: "Employment" },
      { es: "la jornada laboral", en: "workday", subtopic: "Employment" },
      { es: "el contrato", en: "contract", subtopic: "Employment" },
      { es: "la experiencia laboral", en: "work experience", subtopic: "Employment" },
      { es: "la profesión", en: "profession", subtopic: "Employment" },
      // Community life
      { es: "la comunidad", en: "community", subtopic: "Community life" },
      { es: "el barrio", en: "neighborhood", subtopic: "Community life" },
      { es: "el vecino", en: "neighbor", subtopic: "Community life" },
      { es: "la vida comunitaria", en: "community life", subtopic: "Community life" },
      { es: "el voluntariado", en: "volunteering", subtopic: "Community life" },
      { es: "el centro comunitario", en: "community center", subtopic: "Community life" },
      { es: "la participación", en: "participation", subtopic: "Community life" },
      { es: "la solidaridad", en: "solidarity", subtopic: "Community life" },
      { es: "el evento local", en: "local event", subtopic: "Community life" },
      { es: "la organización sin fines de lucro", en: "nonprofit organization", subtopic: "Community life" },
      { es: "la colaboración", en: "collaboration", subtopic: "Community life" },
      { es: "el apoyo mutuo", en: "mutual support", subtopic: "Community life" },
      { es: "la convivencia", en: "coexistence", subtopic: "Community life" },
      { es: "el espacio público", en: "public space", subtopic: "Community life" },
      // Social relationships
      { es: "las relaciones", en: "relationships", subtopic: "Social relationships" },
      { es: "la amistad", en: "friendship", subtopic: "Social relationships" },
      { es: "la familia", en: "family", subtopic: "Social relationships" },
      { es: "la pareja", en: "partner", subtopic: "Social relationships" },
      { es: "el matrimonio", en: "marriage", subtopic: "Social relationships" },
      { es: "la confianza", en: "trust", subtopic: "Social relationships" },
      { es: "el conflicto personal", en: "personal conflict", subtopic: "Social relationships" },
      { es: "la comunicación familiar", en: "family communication", subtopic: "Social relationships" },
      { es: "el respeto mutuo", en: "mutual respect", subtopic: "Social relationships" },
      { es: "la empatía", en: "empathy", subtopic: "Social relationships" },
      { es: "la generación", en: "generation", subtopic: "Social relationships" },
      { es: "el conocido", en: "acquaintance", subtopic: "Social relationships" },
      { es: "el vínculo", en: "bond", subtopic: "Social relationships" },
      { es: "la convivencia familiar", en: "family coexistence", subtopic: "Social relationships" },
      // Law and order
      { es: "la ley", en: "law", subtopic: "Law and order" },
      { es: "el derecho", en: "right", subtopic: "Law and order" },
      { es: "el gobierno", en: "government", subtopic: "Law and order" },
      { es: "la policía", en: "police", subtopic: "Law and order" },
      { es: "la justicia", en: "justice", subtopic: "Law and order" },
      { es: "el delito", en: "crime", subtopic: "Law and order" },
      { es: "la norma", en: "rule", subtopic: "Law and order" },
      { es: "el tribunal", en: "court", subtopic: "Law and order" },
      { es: "el ciudadano", en: "citizen", subtopic: "Law and order" },
      { es: "la democracia", en: "democracy", subtopic: "Law and order" },
      { es: "el voto", en: "vote", subtopic: "Law and order" },
      { es: "la seguridad", en: "security", subtopic: "Law and order" },
      { es: "la libertad de expresión", en: "freedom of expression", subtopic: "Law and order" },
      { es: "la responsabilidad civil", en: "civic responsibility", subtopic: "Law and order" },
    ],
  },
  {
    id: "sharing-planet",
    name: "Sharing the Planet",
    description:
      "Global challenges we all face: the environment, human rights, peace, and sustainability.",
    subtopics: [
      "Environmental concerns",
      "Human rights",
      "Peace and conflict",
      "Globalization",
      "Ethical consumption",
    ],
    vocabulary: [
      // Environmental concerns
      { es: "el medio ambiente", en: "environment", subtopic: "Environmental concerns" },
      { es: "el cambio climático", en: "climate change", subtopic: "Environmental concerns" },
      { es: "la contaminación", en: "pollution", subtopic: "Environmental concerns" },
      { es: "el calentamiento global", en: "global warming", subtopic: "Environmental concerns" },
      { es: "la deforestación", en: "deforestation", subtopic: "Environmental concerns" },
      { es: "la sequía", en: "drought", subtopic: "Environmental concerns" },
      { es: "la biodiversidad", en: "biodiversity", subtopic: "Environmental concerns" },
      { es: "el ecosistema", en: "ecosystem", subtopic: "Environmental concerns" },
      { es: "la energía solar", en: "solar energy", subtopic: "Environmental concerns" },
      { es: "la huella de carbono", en: "carbon footprint", subtopic: "Environmental concerns" },
      { es: "el desastre natural", en: "natural disaster", subtopic: "Environmental concerns" },
      { es: "la extinción", en: "extinction", subtopic: "Environmental concerns" },
      { es: "el recurso natural", en: "natural resource", subtopic: "Environmental concerns" },
      { es: "la conservación", en: "conservation", subtopic: "Environmental concerns" },
      // Human rights
      { es: "los derechos humanos", en: "human rights", subtopic: "Human rights" },
      { es: "la igualdad", en: "equality", subtopic: "Human rights" },
      { es: "la discriminación", en: "discrimination", subtopic: "Human rights" },
      { es: "la libertad", en: "freedom", subtopic: "Human rights" },
      { es: "la dignidad", en: "dignity", subtopic: "Human rights" },
      { es: "la justicia social", en: "social justice", subtopic: "Human rights" },
      { es: "la desigualdad", en: "inequality", subtopic: "Human rights" },
      { es: "la pobreza", en: "poverty", subtopic: "Human rights" },
      { es: "la educación para todos", en: "education for all", subtopic: "Human rights" },
      { es: "el derecho a la salud", en: "right to health", subtopic: "Human rights" },
      { es: "la igualdad de género", en: "gender equality", subtopic: "Human rights" },
      { es: "la protección infantil", en: "child protection", subtopic: "Human rights" },
      { es: "la inclusión", en: "inclusion", subtopic: "Human rights" },
      { es: "la diversidad", en: "diversity", subtopic: "Human rights" },
      // Peace and conflict
      { es: "la paz", en: "peace", subtopic: "Peace and conflict" },
      { es: "el conflicto", en: "conflict", subtopic: "Peace and conflict" },
      { es: "la guerra", en: "war", subtopic: "Peace and conflict" },
      { es: "la violencia", en: "violence", subtopic: "Peace and conflict" },
      { es: "el acuerdo de paz", en: "peace agreement", subtopic: "Peace and conflict" },
      { es: "la negociación", en: "negotiation", subtopic: "Peace and conflict" },
      { es: "el refugiado", en: "refugee", subtopic: "Peace and conflict" },
      { es: "la tensión", en: "tension", subtopic: "Peace and conflict" },
      { es: "el diálogo", en: "dialogue", subtopic: "Peace and conflict" },
      { es: "la reconciliación", en: "reconciliation", subtopic: "Peace and conflict" },
      { es: "las fuerzas armadas", en: "armed forces", subtopic: "Peace and conflict" },
      { es: "la crisis", en: "crisis", subtopic: "Peace and conflict" },
      { es: "el desarme", en: "disarmament", subtopic: "Peace and conflict" },
      { es: "la cooperación internacional", en: "international cooperation", subtopic: "Peace and conflict" },
      // Globalization
      { es: "la globalización", en: "globalization", subtopic: "Globalization" },
      { es: "el comercio internacional", en: "international trade", subtopic: "Globalization" },
      { es: "la economía global", en: "global economy", subtopic: "Globalization" },
      { es: "la cultura global", en: "global culture", subtopic: "Globalization" },
      { es: "la multinacional", en: "multinational company", subtopic: "Globalization" },
      { es: "la interdependencia", en: "interdependence", subtopic: "Globalization" },
      { es: "el intercambio cultural", en: "cultural exchange", subtopic: "Globalization" },
      { es: "la exportación", en: "export", subtopic: "Globalization" },
      { es: "la importación", en: "import", subtopic: "Globalization" },
      { es: "la moneda", en: "currency", subtopic: "Globalization" },
      { es: "el mercado mundial", en: "global market", subtopic: "Globalization" },
      { es: "la conexión global", en: "global connection", subtopic: "Globalization" },
      { es: "la homogeneización cultural", en: "cultural homogenization", subtopic: "Globalization" },
      { es: "el turismo internacional", en: "international tourism", subtopic: "Globalization" },
      // Ethical consumption
      { es: "el consumo", en: "consumption", subtopic: "Ethical consumption" },
      { es: "el reciclaje", en: "recycling", subtopic: "Ethical consumption" },
      { es: "la sostenibilidad", en: "sustainability", subtopic: "Ethical consumption" },
      { es: "el comercio justo", en: "fair trade", subtopic: "Ethical consumption" },
      { es: "el producto local", en: "local product", subtopic: "Ethical consumption" },
      { es: "el desperdicio", en: "waste", subtopic: "Ethical consumption" },
      { es: "el plástico", en: "plastic", subtopic: "Ethical consumption" },
      { es: "la responsabilidad ambiental", en: "environmental responsibility", subtopic: "Ethical consumption" },
      { es: "la reutilización", en: "reuse", subtopic: "Ethical consumption" },
      { es: "el envase", en: "packaging", subtopic: "Ethical consumption" },
      { es: "la producción sostenible", en: "sustainable production", subtopic: "Ethical consumption" },
      { es: "la ética del consumidor", en: "consumer ethics", subtopic: "Ethical consumption" },
      { es: "la compra responsable", en: "responsible shopping", subtopic: "Ethical consumption" },
      { es: "la huella ecológica", en: "ecological footprint", subtopic: "Ethical consumption" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Hand-written questions — grammar & sentence puzzles, 3 per subtopic
// ---------------------------------------------------------------------------

const CORE_QUESTIONS: QuizItem[] = [
  // =========================================================================
  // IDENTITIES
  // =========================================================================
  // --- Lifestyles ---
  {
    id: "id-lif-1",
    themeId: "identities",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'lifestyle'?",
    options: ["el estilo de vida", "la costumbre", "el carácter", "la salud"],
    correctAnswer: "el estilo de vida",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "id-lif-2",
    themeId: "identities",
    type: "short",
    prompt: "Completa: 'Llevo un ___ (lifestyle) muy activo, hago ejercicio cada día.'",
    correctAnswer: "estilo de vida",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "id-lif-3",
    themeId: "identities",
    type: "puzzle",
    prompt: "Ordena las palabras para formar una frase correcta.",
    options: ["saludable", "vida", "tengo", "de", "un", "estilo"],
    correctAnswer: "tengo un estilo de vida saludable",
    difficulty: "hard",
    points: 30,
  },
  {
    id: "id-lif-4",
    themeId: "identities",
    type: "short",
    prompt: "Traduce al español: 'habit'",
    correctAnswer: "hábito",
    difficulty: "easy",
    points: 10,
  },
  // --- Health and well-being ---
  {
    id: "id-hea-1",
    themeId: "identities",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'health'?",
    options: ["la salud", "la aventura", "el barrio", "el consumo"],
    correctAnswer: "la salud",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "id-hea-2",
    themeId: "identities",
    type: "short",
    prompt: "Traduce al español: 'well-being'",
    correctAnswer: "bienestar",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "id-hea-3",
    themeId: "identities",
    type: "mcq",
    prompt: "'Es importante dormir bien para mantener el ___.' (well-being)",
    options: ["bienestar", "equipaje", "gobierno", "reciclaje"],
    correctAnswer: "bienestar",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "id-hea-4",
    themeId: "identities",
    type: "mcq",
    prompt: "'Cuando ___ (tener) tiempo, haré más ejercicio.' (subjuntivo)",
    options: ["tenga", "tengo", "tuve", "tendré"],
    correctAnswer: "tenga",
    difficulty: "hard",
    points: 30,
  },
  // --- Language and identity ---
  {
    id: "id-lan-1",
    themeId: "identities",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'language'?",
    options: ["el idioma", "la ley", "el trabajo", "la paz"],
    correctAnswer: "el idioma",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "id-lan-2",
    themeId: "identities",
    type: "short",
    prompt: "Completa: 'Hablar dos idiomas forma parte de mi ___ (identity).'",
    correctAnswer: "identidad",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "id-lan-3",
    themeId: "identities",
    type: "puzzle",
    prompt: "Ordena las palabras para formar una frase correcta.",
    options: ["cultura", "el", "refleja", "mi", "idioma"],
    correctAnswer: "el idioma refleja mi cultura",
    difficulty: "hard",
    points: 30,
  },
  {
    id: "id-lan-4",
    themeId: "identities",
    type: "puzzle",
    prompt: "Ordena las palabras para formar una frase correcta.",
    options: ["orgulloso", "estoy", "de", "mi", "idioma"],
    correctAnswer: "estoy orgulloso de mi idioma",
    difficulty: "hard",
    points: 30,
  },
  // --- Beliefs and values ---
  {
    id: "id-bel-1",
    themeId: "identities",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'values' (principles)?",
    options: ["los valores", "las costumbres", "los derechos", "las leyes"],
    correctAnswer: "los valores",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "id-bel-2",
    themeId: "identities",
    type: "short",
    prompt: "Traduce al español: 'beliefs'",
    correctAnswer: "creencias",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "id-bel-3",
    themeId: "identities",
    type: "mcq",
    prompt: "'Mis padres me enseñaron ___ importantes.' (values)",
    options: ["valores", "medios de comunicación", "transporte", "consumo"],
    correctAnswer: "valores",
    difficulty: "hard",
    points: 30,
  },
  {
    id: "id-bel-4",
    themeId: "identities",
    type: "short",
    prompt: "Traduce al español: 'respect'",
    correctAnswer: "respeto",
    difficulty: "easy",
    points: 10,
  },
  // --- Childhood and adolescence ---
  {
    id: "id-chi-1",
    themeId: "identities",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'adolescence'?",
    options: ["la adolescencia", "la infancia", "la vejez", "la niñez"],
    correctAnswer: "la adolescencia",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "id-chi-2",
    themeId: "identities",
    type: "short",
    prompt: "Completa: 'Durante mi ___ (childhood), jugaba mucho con mis primos.'",
    correctAnswer: "infancia",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "id-chi-3",
    themeId: "identities",
    type: "puzzle",
    prompt: "Ordena las palabras para formar una frase correcta.",
    options: ["mucho", "me", "mi", "marcó", "adolescencia"],
    correctAnswer: "mi adolescencia me marcó mucho",
    difficulty: "hard",
    points: 30,
  },
  {
    id: "id-chi-4",
    themeId: "identities",
    type: "mcq",
    prompt: "'Cuando era niño, ___ (jugar) en el parque todos los días.' (imperfecto)",
    options: ["jugaba", "jugué", "juego", "jugaré"],
    correctAnswer: "jugaba",
    difficulty: "medium",
    points: 20,
  },

  // =========================================================================
  // EXPERIENCES
  // =========================================================================
  // --- Travel ---
  {
    id: "ex-tra-1",
    themeId: "experiences",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'trip / journey'?",
    options: ["el viaje", "el equipaje", "el destino", "la mudanza"],
    correctAnswer: "el viaje",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "ex-tra-2",
    themeId: "experiences",
    type: "mcq",
    prompt: "'El año pasado, nosotros ___ a México.' (viajar, pretérito)",
    options: ["viajamos", "viajan", "viajaba", "viajaré"],
    correctAnswer: "viajamos",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "ex-tra-3",
    themeId: "experiences",
    type: "short",
    prompt: "Traduce al español: 'destination'",
    correctAnswer: "destino",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "ex-tra-4",
    themeId: "experiences",
    type: "mcq",
    prompt: "'El próximo verano, ___ (viajar) a Sudamérica.' (futuro)",
    options: ["viajaré", "viajo", "viajaba", "viajé"],
    correctAnswer: "viajaré",
    difficulty: "medium",
    points: 20,
  },
  // --- Holidays and celebrations ---
  {
    id: "ex-hol-1",
    themeId: "experiences",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'celebration'?",
    options: ["la celebración", "el recuerdo", "la aventura", "la tradición"],
    correctAnswer: "la celebración",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "ex-hol-2",
    themeId: "experiences",
    type: "short",
    prompt: "Completa: 'En mi familia, tenemos una ___ (tradition) especial en Año Nuevo.'",
    correctAnswer: "tradición",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "ex-hol-3",
    themeId: "experiences",
    type: "puzzle",
    prompt: "Ordena las palabras para formar una frase correcta.",
    options: ["inolvidable", "la", "fue", "celebración"],
    correctAnswer: "la celebración fue inolvidable",
    difficulty: "hard",
    points: 30,
  },
  {
    id: "ex-hol-4",
    themeId: "experiences",
    type: "short",
    prompt: "Traduce al español: 'to celebrate'",
    correctAnswer: "celebrar",
    difficulty: "easy",
    points: 10,
  },
  // --- Rites of passage ---
  {
    id: "ex-rit-1",
    themeId: "experiences",
    type: "mcq",
    prompt: "¿Cuál palabra se asocia con un rito de paso, como terminar el colegio?",
    options: ["la graduación", "el equipaje", "la lluvia", "el barrio"],
    correctAnswer: "la graduación",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "ex-rit-2",
    themeId: "experiences",
    type: "short",
    prompt: "Traduce al español: 'graduation'",
    correctAnswer: "graduación",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "ex-rit-3",
    themeId: "experiences",
    type: "mcq",
    prompt: "¿Cuál de estas palabras describe un evento importante en la vida, como una boda?",
    options: ["el rito", "el paraguas", "el postre", "la mesa"],
    correctAnswer: "el rito",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "ex-rit-4",
    themeId: "experiences",
    type: "puzzle",
    prompt: "Ordena las palabras para formar una frase correcta.",
    options: ["importante", "rito", "un", "es", "graduación", "la"],
    correctAnswer: "la graduación es un rito importante",
    difficulty: "hard",
    points: 30,
  },
  // --- Migration ---
  {
    id: "ex-mig-1",
    themeId: "experiences",
    type: "mcq",
    prompt: "¿Cuál de estas palabras se asocia con 'migración'?",
    options: ["la mudanza", "el postre", "el paraguas", "la mesa"],
    correctAnswer: "la mudanza",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "ex-mig-2",
    themeId: "experiences",
    type: "short",
    prompt: "Completa: 'Mi familia hizo una ___ (move) a otra ciudad el año pasado.'",
    correctAnswer: "mudanza",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "ex-mig-3",
    themeId: "experiences",
    type: "mcq",
    prompt: "'Muchas personas ___ a otro país buscando mejores oportunidades.' (emigrar, presente)",
    options: ["emigran", "emigraron", "emigrarán", "emigraba"],
    correctAnswer: "emigran",
    difficulty: "hard",
    points: 30,
  },
  {
    id: "ex-mig-4",
    themeId: "experiences",
    type: "mcq",
    prompt: "'Mis abuelos ___ (emigrar) a este país hace treinta años.' (pretérito)",
    options: ["emigraron", "emigran", "emigraban", "emigrarán"],
    correctAnswer: "emigraron",
    difficulty: "medium",
    points: 20,
  },
  // --- Personal stories ---
  {
    id: "ex-per-1",
    themeId: "experiences",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'memory' (recollection)?",
    options: ["el recuerdo", "el equipaje", "el destino", "la mudanza"],
    correctAnswer: "el recuerdo",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "ex-per-2",
    themeId: "experiences",
    type: "short",
    prompt: "Traduce al español: 'experience'",
    correctAnswer: "experiencia",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "ex-per-3",
    themeId: "experiences",
    type: "puzzle",
    prompt: "Ordena las palabras para formar una frase correcta.",
    options: ["experiencia", "nunca", "esa", "olvidaré"],
    correctAnswer: "nunca olvidaré esa experiencia",
    difficulty: "hard",
    points: 30,
  },
  {
    id: "ex-per-4",
    themeId: "experiences",
    type: "short",
    prompt: "Completa: 'Quiero compartir mi ___ (story) contigo.'",
    correctAnswer: "historia",
    difficulty: "medium",
    points: 20,
  },

  // =========================================================================
  // HUMAN INGENUITY
  // =========================================================================
  // --- Entertainment ---
  {
    id: "hi-ent-1",
    themeId: "human-ingenuity",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'entertainment'?",
    options: ["el entretenimiento", "la investigación", "el progreso", "la ciencia"],
    correctAnswer: "el entretenimiento",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "hi-ent-2",
    themeId: "human-ingenuity",
    type: "short",
    prompt: "Completa: 'El cine es una forma popular de ___ (entertainment).'",
    correctAnswer: "entretenimiento",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "hi-ent-3",
    themeId: "human-ingenuity",
    type: "mcq",
    prompt: "¿Cuál de estas opciones NO es una forma de entretenimiento?",
    options: ["el impuesto", "el cine", "la música", "los videojuegos"],
    correctAnswer: "el impuesto",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "hi-ent-4",
    themeId: "human-ingenuity",
    type: "mcq",
    prompt: "'Los fines de semana, mis amigos y yo ___ (ver) películas.' (presente)",
    options: ["vemos", "ven", "veo", "vimos"],
    correctAnswer: "vemos",
    difficulty: "easy",
    points: 10,
  },
  // --- Innovation ---
  {
    id: "hi-inn-1",
    themeId: "human-ingenuity",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'invention'?",
    options: ["la invención", "la ciencia", "el progreso", "la creatividad"],
    correctAnswer: "la invención",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "hi-inn-2",
    themeId: "human-ingenuity",
    type: "short",
    prompt: "Traduce al español: 'innovation'",
    correctAnswer: "innovación",
    difficulty: "hard",
    points: 30,
  },
  {
    id: "hi-inn-3",
    themeId: "human-ingenuity",
    type: "puzzle",
    prompt: "Ordena las palabras para formar una frase correcta.",
    options: ["sociedad", "la", "transforma", "nuestra", "innovación"],
    correctAnswer: "la innovación transforma nuestra sociedad",
    difficulty: "hard",
    points: 30,
  },
  {
    id: "hi-inn-4",
    themeId: "human-ingenuity",
    type: "short",
    prompt: "Traduce al español: 'creativity'",
    correctAnswer: "creatividad",
    difficulty: "easy",
    points: 10,
  },
  // --- Communication and media ---
  {
    id: "hi-com-1",
    themeId: "human-ingenuity",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'media'?",
    options: ["los medios de comunicación", "el transporte", "la ciencia", "la creatividad"],
    correctAnswer: "los medios de comunicación",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "hi-com-2",
    themeId: "human-ingenuity",
    type: "short",
    prompt: "Completa: 'La televisión es un medio de ___ (communication) muy popular.'",
    correctAnswer: "comunicación",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "hi-com-3",
    themeId: "human-ingenuity",
    type: "mcq",
    prompt: "'Antes de los teléfonos, la gente ___ cartas para comunicarse.' (escribir, imperfecto)",
    options: ["escribía", "escribió", "escribe", "escribirá"],
    correctAnswer: "escribía",
    difficulty: "hard",
    points: 30,
  },
  {
    id: "hi-com-4",
    themeId: "human-ingenuity",
    type: "mcq",
    prompt: "'Las redes sociales ___ (cambiar) la forma en que nos comunicamos.' (presente perfecto)",
    options: ["han cambiado", "cambian", "cambiaron", "cambiarán"],
    correctAnswer: "han cambiado",
    difficulty: "hard",
    points: 30,
  },
  // --- Technology ---
  {
    id: "hi-tec-1",
    themeId: "human-ingenuity",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'technology'?",
    options: ["la tecnología", "el entretenimiento", "la invención", "el transporte"],
    correctAnswer: "la tecnología",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "hi-tec-2",
    themeId: "human-ingenuity",
    type: "short",
    prompt: "Traduce al español: 'science'",
    correctAnswer: "ciencia",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "hi-tec-3",
    themeId: "human-ingenuity",
    type: "mcq",
    prompt: "'Los científicos ___ una vacuna nueva.' (desarrollar, presente perfecto)",
    options: ["han desarrollado", "desarrollan", "desarrollaron", "desarrollará"],
    correctAnswer: "han desarrollado",
    difficulty: "hard",
    points: 30,
  },
  {
    id: "hi-tec-4",
    themeId: "human-ingenuity",
    type: "puzzle",
    prompt: "Ordena las palabras para formar una frase correcta.",
    options: ["nuestras", "la", "tecnología", "vidas", "facilita"],
    correctAnswer: "la tecnología facilita nuestras vidas",
    difficulty: "hard",
    points: 30,
  },
  // --- Transport ---
  {
    id: "hi-tra-1",
    themeId: "human-ingenuity",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'transport'?",
    options: ["el transporte", "el progreso", "la investigación", "la comunicación"],
    correctAnswer: "el transporte",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "hi-tra-2",
    themeId: "human-ingenuity",
    type: "short",
    prompt: "Completa: 'El metro es un medio de ___ (transport) rápido en la ciudad.'",
    correctAnswer: "transporte",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "hi-tra-3",
    themeId: "human-ingenuity",
    type: "puzzle",
    prompt: "Ordena las palabras para formar una frase correcta.",
    options: ["ahora", "el", "rápido", "es", "transporte", "más"],
    correctAnswer: "el transporte es más rápido ahora",
    difficulty: "hard",
    points: 30,
  },
  {
    id: "hi-tra-4",
    themeId: "human-ingenuity",
    type: "short",
    prompt: "Traduce al español: 'bicycle'",
    correctAnswer: "bicicleta",
    difficulty: "easy",
    points: 10,
  },

  // =========================================================================
  // SOCIAL ORGANIZATION
  // =========================================================================
  // --- Education ---
  {
    id: "so-edu-1",
    themeId: "social-organization",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'education'?",
    options: ["la educación", "el trabajo", "la ley", "la sociedad"],
    correctAnswer: "la educación",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "so-edu-2",
    themeId: "social-organization",
    type: "short",
    prompt: "Completa: 'Todos los niños tienen derecho a la ___ (education).'",
    correctAnswer: "educación",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "so-edu-3",
    themeId: "social-organization",
    type: "mcq",
    prompt: "'Es importante que los estudiantes ___ mucho para el examen.' (estudiar, subjuntivo)",
    options: ["estudien", "estudian", "estudiaron", "estudiarán"],
    correctAnswer: "estudien",
    difficulty: "hard",
    points: 30,
  },
  {
    id: "so-edu-4",
    themeId: "social-organization",
    type: "mcq",
    prompt: "'Cuando yo ___ (terminar) mis estudios, buscaré trabajo.' (subjuntivo)",
    options: ["termine", "termino", "terminé", "terminaré"],
    correctAnswer: "termine",
    difficulty: "hard",
    points: 30,
  },
  // --- Employment ---
  {
    id: "so-emp-1",
    themeId: "social-organization",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'work / job'?",
    options: ["el trabajo", "el barrio", "la ley", "la comunidad"],
    correctAnswer: "el trabajo",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "so-emp-2",
    themeId: "social-organization",
    type: "short",
    prompt: "Traduce al español: 'employment / job'",
    correctAnswer: "empleo",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "so-emp-3",
    themeId: "social-organization",
    type: "mcq",
    prompt: "'Ella ___ en un hospital como enfermera.' (trabajar, presente)",
    options: ["trabaja", "trabajan", "trabajamos", "trabajaba"],
    correctAnswer: "trabaja",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "so-emp-4",
    themeId: "social-organization",
    type: "short",
    prompt: "Traduce al español: 'salary'",
    correctAnswer: "salario",
    difficulty: "medium",
    points: 20,
  },
  // --- Community life ---
  {
    id: "so-com-1",
    themeId: "social-organization",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'community'?",
    options: ["la comunidad", "el equipaje", "el postre", "la lluvia"],
    correctAnswer: "la comunidad",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "so-com-2",
    themeId: "social-organization",
    type: "short",
    prompt: "Completa: 'La comunidad nos ___ (unites) a todos.' (unir, presente)",
    correctAnswer: "une",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "so-com-3",
    themeId: "social-organization",
    type: "puzzle",
    prompt: "Ordena las palabras para formar una frase correcta.",
    options: ["todos", "la", "une", "a", "nos", "comunidad"],
    correctAnswer: "la comunidad nos une a todos",
    difficulty: "hard",
    points: 30,
  },
  {
    id: "so-com-4",
    themeId: "social-organization",
    type: "mcq",
    prompt: "'Los vecinos ___ (ayudarse) mutuamente en nuestra comunidad.' (presente)",
    options: ["se ayudan", "se ayuda", "nos ayudamos", "se ayudaron"],
    correctAnswer: "se ayudan",
    difficulty: "medium",
    points: 20,
  },
  // --- Social relationships ---
  {
    id: "so-rel-1",
    themeId: "social-organization",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'relationships'?",
    options: ["las relaciones", "las leyes", "el gobierno", "el barrio"],
    correctAnswer: "las relaciones",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "so-rel-2",
    themeId: "social-organization",
    type: "short",
    prompt: "Traduce al español: 'friendship'",
    correctAnswer: "amistad",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "so-rel-3",
    themeId: "social-organization",
    type: "mcq",
    prompt: "'Es fundamental que las ___ familiares sean fuertes.' (relationships)",
    options: ["relaciones", "leyes", "sociedades", "comunidades"],
    correctAnswer: "relaciones",
    difficulty: "hard",
    points: 30,
  },
  {
    id: "so-rel-4",
    themeId: "social-organization",
    type: "puzzle",
    prompt: "Ordena las palabras para formar una frase correcta.",
    options: ["esencial", "es", "la", "confianza"],
    correctAnswer: "la confianza es esencial",
    difficulty: "hard",
    points: 30,
  },
  // --- Law and order ---
  {
    id: "so-law-1",
    themeId: "social-organization",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'laws'?",
    options: ["las leyes", "los derechos", "la sociedad", "el barrio"],
    correctAnswer: "las leyes",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "so-law-2",
    themeId: "social-organization",
    type: "short",
    prompt: "Traduce al español: 'rights'",
    correctAnswer: "derechos",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "so-law-3",
    themeId: "social-organization",
    type: "mcq",
    prompt: "'Es importante que todos ___ sus derechos.' (conocer, subjuntivo)",
    options: ["conozcan", "conocen", "conocieron", "conocerán"],
    correctAnswer: "conozcan",
    difficulty: "hard",
    points: 30,
  },
  {
    id: "so-law-4",
    themeId: "social-organization",
    type: "mcq",
    prompt: "'Es esencial que el gobierno ___ (proteger) los derechos de todos.' (subjuntivo)",
    options: ["proteja", "protege", "protegió", "protegerá"],
    correctAnswer: "proteja",
    difficulty: "hard",
    points: 30,
  },

  // =========================================================================
  // SHARING THE PLANET
  // =========================================================================
  // --- Environmental concerns ---
  {
    id: "sp-env-1",
    themeId: "sharing-planet",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'climate change'?",
    options: ["el cambio climático", "la contaminación", "el reciclaje", "la paz"],
    correctAnswer: "el cambio climático",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "sp-env-2",
    themeId: "sharing-planet",
    type: "short",
    prompt: "Completa: 'Debemos proteger el ___ (environment) para las próximas generaciones.'",
    correctAnswer: "medio ambiente",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "sp-env-3",
    themeId: "sharing-planet",
    type: "mcq",
    prompt: "'Si todos ___ menos plástico, el océano estaría más limpio.' (usar, condicional/imperfecto de subjuntivo)",
    options: ["usáramos", "usamos", "usaremos", "usan"],
    correctAnswer: "usáramos",
    difficulty: "hard",
    points: 30,
  },
  {
    id: "sp-env-4",
    themeId: "sharing-planet",
    type: "short",
    prompt: "Traduce al español: 'pollution'",
    correctAnswer: "contaminación",
    difficulty: "easy",
    points: 10,
  },
  // --- Human rights ---
  {
    id: "sp-hum-1",
    themeId: "sharing-planet",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'human rights'?",
    options: ["los derechos humanos", "la globalización", "el consumo", "la sostenibilidad"],
    correctAnswer: "los derechos humanos",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "sp-hum-2",
    themeId: "sharing-planet",
    type: "short",
    prompt: "Traduce al español: 'equality'",
    correctAnswer: "igualdad",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "sp-hum-3",
    themeId: "sharing-planet",
    type: "mcq",
    prompt: "'Todas las personas merecen ser tratadas con ___.' (equality)",
    options: ["igualdad", "contaminación", "globalización", "consumo"],
    correctAnswer: "igualdad",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "sp-hum-4",
    themeId: "sharing-planet",
    type: "mcq",
    prompt: "'Todos los niños ___ (merecer) una educación digna.' (presente)",
    options: ["merecen", "merece", "merecemos", "merecieron"],
    correctAnswer: "merecen",
    difficulty: "medium",
    points: 20,
  },
  // --- Peace and conflict ---
  {
    id: "sp-pea-1",
    themeId: "sharing-planet",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'peace'?",
    options: ["la paz", "el conflicto", "la guerra", "el consumo"],
    correctAnswer: "la paz",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "sp-pea-2",
    themeId: "sharing-planet",
    type: "short",
    prompt: "Traduce al español: 'conflict'",
    correctAnswer: "conflicto",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "sp-pea-3",
    themeId: "sharing-planet",
    type: "puzzle",
    prompt: "Ordena las palabras para formar una frase correcta.",
    options: ["mundial", "buscamos", "paz", "la"],
    correctAnswer: "buscamos la paz mundial",
    difficulty: "hard",
    points: 30,
  },
  {
    id: "sp-pea-4",
    themeId: "sharing-planet",
    type: "short",
    prompt: "Completa: 'El diálogo puede resolver muchos ___ (conflicts).'",
    correctAnswer: "conflictos",
    difficulty: "medium",
    points: 20,
  },
  // --- Globalization ---
  {
    id: "sp-glo-1",
    themeId: "sharing-planet",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'globalization'?",
    options: ["la globalización", "el reciclaje", "la sostenibilidad", "el consumo"],
    correctAnswer: "la globalización",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "sp-glo-2",
    themeId: "sharing-planet",
    type: "short",
    prompt: "Completa: 'Gracias a la ___ (globalization), podemos comunicarnos con el mundo entero.'",
    correctAnswer: "globalización",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "sp-glo-3",
    themeId: "sharing-planet",
    type: "mcq",
    prompt: "'La globalización ___ muchos cambios culturales.' (traer, presente perfecto)",
    options: ["ha traído", "trae", "trajo", "traerá"],
    correctAnswer: "ha traído",
    difficulty: "hard",
    points: 30,
  },
  {
    id: "sp-glo-4",
    themeId: "sharing-planet",
    type: "mcq",
    prompt: "'Antes de internet, la información ___ (viajar) mucho más despacio.' (imperfecto)",
    options: ["viajaba", "viajó", "viaja", "viajará"],
    correctAnswer: "viajaba",
    difficulty: "hard",
    points: 30,
  },
  // --- Ethical consumption ---
  {
    id: "sp-eth-1",
    themeId: "sharing-planet",
    type: "mcq",
    prompt: "¿Cuál palabra significa 'recycling'?",
    options: ["el reciclaje", "la contaminación", "el consumo", "la igualdad"],
    correctAnswer: "el reciclaje",
    difficulty: "easy",
    points: 10,
  },
  {
    id: "sp-eth-2",
    themeId: "sharing-planet",
    type: "short",
    prompt: "Traduce al español: 'sustainability'",
    correctAnswer: "sostenibilidad",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "sp-eth-3",
    themeId: "sharing-planet",
    type: "mcq",
    prompt: "'Debemos reducir nuestro ___ de plástico.' (consumption)",
    options: ["consumo", "conflicto", "gobierno", "barrio"],
    correctAnswer: "consumo",
    difficulty: "medium",
    points: 20,
  },
  {
    id: "sp-eth-4",
    themeId: "sharing-planet",
    type: "puzzle",
    prompt: "Ordena las palabras para formar una frase correcta.",
    options: ["productos", "compro", "sostenibles", "siempre"],
    correctAnswer: "siempre compro productos sostenibles",
    difficulty: "hard",
    points: 30,
  },
];

// ---------------------------------------------------------------------------
// Vocabulary-driven question generator
// ---------------------------------------------------------------------------

/** Deterministically places `correct` among 3 distractors based on `seed`, so
 *  the correct option isn't always first — without using Math.random(),
 *  which would make QUESTION_BANK differ between server and client renders
 *  (a hydration bug). Same seed always produces the same layout. */
function deterministicOptions<T>(correct: T, distractors: [T, T, T], seed: number): T[] {
  const pos = ((seed % 4) + 4) % 4;
  const options: T[] = [];
  let d = 0;
  for (let i = 0; i < 4; i++) {
    options.push(i === pos ? correct : distractors[d++]);
  }
  return options;
}

/** Turns one theme's vocabulary list into 5 question variants per word:
 *  recognize the meaning (mcq, both directions), produce it from memory
 *  (typed, both directions), and recognize it by ear (listening — the word
 *  is spoken aloud via the Web Speech API, no text shown, see
 *  QuizModule.tsx). This is what gets every theme comfortably past 200
 *  questions while staying grammatically safe — no sentence generation,
 *  just translation/listening drills, which is exactly how vocabulary range
 *  is tested on the real exam. */
function buildVocabQuestions(theme: Theme): QuizItem[] {
  const vocab = theme.vocabulary;
  const n = vocab.length;
  const items: QuizItem[] = [];

  vocab.forEach((v, i) => {
    const d1 = vocab[(i + 1) % n];
    const d2 = vocab[(i + 2) % n];
    const d3 = vocab[(i + 3) % n];

    items.push({
      id: `${theme.id}-v${i}-mcq-en`,
      themeId: theme.id,
      type: "mcq",
      prompt: `¿Qué significa '${v.es}'?`,
      options: deterministicOptions(v.en, [d1.en, d2.en, d3.en], i),
      correctAnswer: v.en,
      difficulty: "easy",
      points: 10,
    });

    items.push({
      id: `${theme.id}-v${i}-mcq-es`,
      themeId: theme.id,
      type: "mcq",
      prompt: `¿Cuál palabra en español significa '${v.en}'?`,
      options: deterministicOptions(v.es, [d1.es, d2.es, d3.es], i + 2),
      correctAnswer: v.es,
      difficulty: "medium",
      points: 20,
    });

    items.push({
      id: `${theme.id}-v${i}-type-es`,
      themeId: theme.id,
      type: "short",
      prompt: `Traduce al español: '${v.en}'`,
      correctAnswer: v.es,
      difficulty: "medium",
      points: 20,
    });

    items.push({
      id: `${theme.id}-v${i}-type-en`,
      themeId: theme.id,
      type: "short",
      prompt: `Traduce al inglés: '${v.es}'`,
      correctAnswer: v.en,
      difficulty: "easy",
      points: 10,
    });

    items.push({
      id: `${theme.id}-v${i}-listen-en`,
      themeId: theme.id,
      type: "listening",
      prompt: "Listen and choose the correct English meaning.",
      audioText: v.es,
      options: deterministicOptions(v.en, [d1.en, d2.en, d3.en], i + 1),
      correctAnswer: v.en,
      difficulty: "medium",
      points: 20,
    });
  });

  return items;
}

/** ~370 questions per theme: 20 hand-written grammar/puzzle questions
 *  (CORE_QUESTIONS) plus ~350 generated vocabulary drills (70 words x 5
 *  variants, including one listening question per word) per theme. */
export const QUESTION_BANK: QuizItem[] = [
  ...CORE_QUESTIONS,
  ...THEMES.flatMap((theme) => buildVocabQuestions(theme)),
];

// ---------------------------------------------------------------------------
// Audio tasks (Individual Oral simulation) — 10 per theme, two per subtopic
// ---------------------------------------------------------------------------
// ---> TO ADD A TASK: push a new AudioTask. `imageDescription`/`imageDescriptionEs`
// stand in for a real photograph — swap in an <img> and a real prompt bank
// when you wire up actual exam images. The *Es fields are read aloud in the
// browser via the Web Speech API (see AudioAssignmentModule.tsx).

export const AUDIO_TASKS: AudioTask[] = [
  // --- Identities ---
  {
    id: "audio-identities-lifestyles",
    themeId: "identities",
    imageDescription:
      "A teenager looking at their reflection in a mirror, surrounded by items representing different hobbies (a guitar, a soccer ball, books).",
    imageDescriptionEs:
      "Un adolescente que se mira en un espejo, rodeado de objetos que representan diferentes pasatiempos: una guitarra, un balón de fútbol y libros.",
    instructions:
      "Describe the scene in detail, then relate it to your own sense of identity: what hobbies or interests are part of who you are?",
    instructionsEs:
      "Describe la escena con detalle y luego relaciónala con tu propia identidad: ¿qué pasatiempos o intereses forman parte de quién eres?",
    imageUrl: "/images/oral/identities-lifestyles.png",
    sceneEmoji: ["🪞", "🎸", "⚽", "📚"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-identities-health",
    themeId: "identities",
    imageDescription:
      "A doctor's waiting room with patients reading magazines, a nurse calling a name, and health posters on the wall.",
    imageDescriptionEs:
      "Una sala de espera de un médico con pacientes leyendo revistas, una enfermera llamando a un paciente y carteles de salud en la pared.",
    instructions:
      "Describe the scene, then discuss what you do to take care of your physical and mental health.",
    instructionsEs:
      "Describe la escena y luego comenta qué haces para cuidar tu salud física y mental.",
    imageUrl: "/images/oral/identities-health.png",
    sceneEmoji: ["🏥", "👩‍⚕️", "📋"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-identities-language",
    themeId: "identities",
    imageDescription:
      "Two friends from different countries talking at a school International Day event, each wearing traditional clothing.",
    imageDescriptionEs:
      "Dos amigos de países diferentes hablando en un evento del Día Internacional en la escuela, cada uno con ropa tradicional.",
    instructions:
      "Describe the scene, then talk about how language and culture shape who you are.",
    instructionsEs:
      "Describe la escena y luego habla sobre cómo el idioma y la cultura influyen en quién eres.",
    imageUrl: "/images/oral/identities-language.png",
    sceneEmoji: ["🌍", "🗣️", "👫"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-identities-beliefs",
    themeId: "identities",
    imageDescription:
      "A family sitting together at a dinner table, having a serious conversation, with an older relative speaking.",
    imageDescriptionEs:
      "Una familia sentada junta a la mesa, teniendo una conversación seria, con un familiar mayor hablando.",
    instructions: "Describe the scene, then talk about a value or belief that is important to you and why.",
    instructionsEs:
      "Describe la escena y luego habla sobre un valor o una creencia importante para ti y por qué.",
    imageUrl: "/images/oral/identities-beliefs.png",
    sceneEmoji: ["👨‍👩‍👧‍👦", "🍽️", "💬"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-identities-childhood",
    themeId: "identities",
    imageDescription:
      "A teenager's bedroom wall covered with childhood photos, drawings, and a graduation cap on the desk.",
    imageDescriptionEs:
      "La pared del dormitorio de un adolescente cubierta de fotos de la infancia, dibujos y un birrete de graduación sobre el escritorio.",
    instructions: "Describe the scene, then talk about how you have changed since childhood.",
    instructionsEs: "Describe la escena y luego habla sobre cómo has cambiado desde tu infancia.",
    imageUrl: "/images/oral/identities-childhood.png",
    sceneEmoji: ["🖼️", "🧸", "🎓"],
    maxDurationSeconds: 240,
  },

  // --- Experiences ---
  {
    id: "audio-experiences-travel",
    themeId: "experiences",
    imageDescription:
      "A family with suitcases at an airport, checking a departures board, looking excited.",
    imageDescriptionEs:
      "Una familia con maletas en un aeropuerto, mirando el tablero de salidas, con expresión de emoción.",
    instructions:
      "Describe the scene, then talk about a memorable trip or journey you have taken or would like to take.",
    instructionsEs:
      "Describe la escena y luego habla sobre un viaje memorable que has hecho o que te gustaría hacer.",
    imageUrl: "/images/oral/experiences-travel.png",
    sceneEmoji: ["✈️", "🧳", "👨‍👩‍👧‍👦"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-experiences-holidays",
    themeId: "experiences",
    imageDescription:
      "A large family gathered around a table full of festive food, with decorations and lights around the room.",
    imageDescriptionEs:
      "Una familia numerosa reunida alrededor de una mesa llena de comida festiva, con decoraciones y luces en la sala.",
    instructions: "Describe the scene, then talk about your favorite holiday or celebration.",
    instructionsEs: "Describe la escena y luego habla sobre tu celebración o fiesta favorita.",
    imageUrl: "/images/oral/experiences-holidays.png",
    sceneEmoji: ["🎉", "🍲", "🕯️"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-experiences-rites",
    themeId: "experiences",
    imageDescription:
      "A group of students in graduation gowns throwing their caps in the air outside a school building.",
    imageDescriptionEs:
      "Un grupo de estudiantes con togas de graduación lanzando sus birretes al aire frente a un edificio escolar.",
    instructions: "Describe the scene, then talk about an important milestone in your life.",
    instructionsEs: "Describe la escena y luego habla sobre un momento importante en tu vida.",
    imageUrl: "/images/oral/experiences-rites.png",
    sceneEmoji: ["🎓", "👩‍🎓", "🎉"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-experiences-migration",
    themeId: "experiences",
    imageDescription:
      "A family unpacking boxes in a new apartment in an unfamiliar city, looking both tired and hopeful.",
    imageDescriptionEs:
      "Una familia desempacando cajas en un apartamento nuevo en una ciudad desconocida, con una expresión de cansancio y esperanza.",
    instructions: "Describe the scene, then talk about what it might be like to move to a new country or city.",
    instructionsEs:
      "Describe la escena y luego habla sobre cómo sería mudarte a un país o una ciudad nueva.",
    imageUrl: "/images/oral/experiences-migration.png",
    sceneEmoji: ["📦", "🏠", "🧳"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-experiences-personal-stories",
    themeId: "experiences",
    imageDescription:
      "An elderly person showing a photo album to a teenager, both smiling and pointing at an old picture.",
    imageDescriptionEs:
      "Una persona mayor mostrando un álbum de fotos a un adolescente, ambos sonriendo y señalando una foto antigua.",
    instructions: "Describe the scene, then share a memorable personal experience.",
    instructionsEs: "Describe la escena y luego comparte una experiencia personal memorable.",
    imageUrl: "/images/oral/experiences-personal-stories.png",
    sceneEmoji: ["📷", "👵", "🧑"],
    maxDurationSeconds: 240,
  },

  // --- Human Ingenuity ---
  {
    id: "audio-human-ingenuity-entertainment",
    themeId: "human-ingenuity",
    imageDescription:
      "A group of friends playing video games together in a living room, laughing and holding controllers.",
    imageDescriptionEs:
      "Un grupo de amigos jugando videojuegos juntos en una sala de estar, riendo y sosteniendo mandos.",
    instructions: "Describe the scene, then talk about your favorite form of entertainment.",
    instructionsEs: "Describe la escena y luego habla sobre tu forma de entretenimiento favorita.",
    imageUrl: "/images/oral/human-ingenuity-entertainment.png",
    sceneEmoji: ["🎮", "🛋️", "😄"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-human-ingenuity-innovation",
    themeId: "human-ingenuity",
    imageDescription:
      "A young inventor in a garage workshop building a small solar-powered device, surrounded by tools and sketches.",
    imageDescriptionEs:
      "Un joven inventor en un taller de garaje construyendo un pequeño dispositivo solar, rodeado de herramientas y bocetos.",
    instructions: "Describe the scene, then talk about an invention you admire or would like to create.",
    instructionsEs:
      "Describe la escena y luego habla sobre un invento que admiras o que te gustaría crear.",
    imageUrl: "/images/oral/human-ingenuity-innovation.png",
    sceneEmoji: ["💡", "🔧", "☀️"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-human-ingenuity-communication",
    themeId: "human-ingenuity",
    imageDescription:
      "A teenager scrolling through social media on a smartphone late at night in bed, the room dark except for the screen's glow.",
    imageDescriptionEs:
      "Un adolescente revisando las redes sociales en un teléfono inteligente por la noche en la cama, con la habitación oscura excepto por la luz de la pantalla.",
    instructions: "Describe the scene, then discuss the positive and negative effects of social media.",
    instructionsEs: "Describe la escena y luego comenta los efectos positivos y negativos de las redes sociales.",
    imageUrl: "/images/oral/human-ingenuity-communication.jpg",
    sceneEmoji: ["📱", "🌙", "💬"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-human-ingenuity-technology",
    themeId: "human-ingenuity",
    imageDescription:
      "A group of students in a classroom using tablets and a robot to complete a science project.",
    imageDescriptionEs:
      "Un grupo de estudiantes en un aula usando tabletas y un robot para completar un proyecto de ciencias.",
    instructions:
      "Describe the scene, then discuss how technology has changed the way students learn.",
    instructionsEs:
      "Describe la escena y luego comenta cómo la tecnología ha cambiado la manera en que los estudiantes aprenden.",
    imageUrl: "/images/oral/human-ingenuity-technology.jpg",
    sceneEmoji: ["🤖", "💻", "🎒"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-human-ingenuity-transport",
    themeId: "human-ingenuity",
    imageDescription:
      "A busy city street with electric scooters, bicycles, and a public bus, with cyclists wearing helmets.",
    imageDescriptionEs:
      "Una calle concurrida de la ciudad con patinetes eléctricos, bicicletas y un autobús público, con ciclistas que llevan casco.",
    instructions: "Describe the scene, then discuss how transportation in cities could become more sustainable.",
    instructionsEs:
      "Describe la escena y luego comenta cómo el transporte en las ciudades podría ser más sostenible.",
    imageUrl: "/images/oral/human-ingenuity-transport.jpg",
    sceneEmoji: ["🛴", "🚲", "🚌"],
    maxDurationSeconds: 240,
  },

  // --- Social Organization ---
  {
    id: "audio-social-organization-education",
    themeId: "social-organization",
    imageDescription:
      "A classroom of students raising their hands eagerly while a teacher points to a diagram on the whiteboard.",
    imageDescriptionEs:
      "Un aula de estudiantes levantando la mano con entusiasmo mientras un profesor señala un diagrama en la pizarra.",
    instructions: "Describe the scene, then talk about the role education plays in society.",
    instructionsEs: "Describe la escena y luego habla sobre el papel de la educación en la sociedad.",
    imageUrl: "/images/oral/social-organization-education.jpg",
    sceneEmoji: ["🙋", "📝", "🏫"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-social-organization-employment",
    themeId: "social-organization",
    imageDescription:
      "A young person in a job interview, sitting across from two interviewers at a table with a resume.",
    imageDescriptionEs:
      "Una persona joven en una entrevista de trabajo, sentada frente a dos entrevistadores en una mesa con un currículum.",
    instructions: "Describe the scene, then talk about what makes a job meaningful to you.",
    instructionsEs: "Describe la escena y luego habla sobre qué hace que un trabajo sea significativo para ti.",
    imageUrl: "/images/oral/social-organization-employment.jpg",
    sceneEmoji: ["💼", "🤝", "📄"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-social-organization-community",
    themeId: "social-organization",
    imageDescription: "Volunteers organizing donated food and clothing at a community center.",
    imageDescriptionEs: "Voluntarios organizando alimentos y ropa donados en un centro comunitario.",
    instructions: "Describe the scene, then discuss the importance of community involvement or volunteering.",
    instructionsEs:
      "Describe la escena y luego comenta la importancia de participar en la comunidad o de ser voluntario.",
    imageUrl: "/images/oral/social-organization-community.jpg",
    sceneEmoji: ["🤝", "📦", "❤️"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-social-organization-relationships",
    themeId: "social-organization",
    imageDescription: "Two teenagers sitting on a park bench, one comforting the other who looks upset.",
    imageDescriptionEs:
      "Dos adolescentes sentados en un banco del parque, uno consolando al otro que parece disgustado.",
    instructions: "Describe the scene, then talk about the importance of friendship and support in relationships.",
    instructionsEs:
      "Describe la escena y luego habla sobre la importancia de la amistad y el apoyo en las relaciones.",
    imageUrl: "/images/oral/social-organization-relationships.jpg",
    sceneEmoji: ["🪑", "💬", "🤗"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-social-organization-law",
    themeId: "social-organization",
    imageDescription: "People lining up to vote at a polling station, with volunteers checking identification.",
    imageDescriptionEs:
      "Personas haciendo fila para votar en un centro de votación, con voluntarios revisando identificaciones.",
    instructions: "Describe the scene, then discuss why rules and laws are important in a society.",
    instructionsEs:
      "Describe la escena y luego comenta por qué son importantes las normas y las leyes en una sociedad.",
    imageUrl: "/images/oral/social-organization-law.jpg",
    sceneEmoji: ["🗳️", "🧾", "🏛️"],
    maxDurationSeconds: 240,
  },

  // --- Sharing the Planet ---
  {
    id: "audio-sharing-planet-environment",
    themeId: "sharing-planet",
    imageDescription:
      "A group of people cleaning up plastic waste on a beach, with recycling bins nearby.",
    imageDescriptionEs:
      "Un grupo de personas recogiendo residuos de plástico en una playa, con contenedores de reciclaje cerca.",
    instructions:
      "Describe the scene, then discuss what individuals can do to help protect the environment.",
    instructionsEs:
      "Describe la escena y luego comenta qué pueden hacer las personas para ayudar a proteger el medio ambiente.",
    imageUrl: "/images/oral/sharing-planet-environment.jpg",
    sceneEmoji: ["🏖️", "♻️", "🧑‍🤝‍🧑"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-sharing-planet-human-rights",
    themeId: "sharing-planet",
    imageDescription: "A group of diverse students holding signs about equality at a peaceful school assembly.",
    imageDescriptionEs:
      "Un grupo de estudiantes diversos sosteniendo carteles sobre la igualdad en una asamblea escolar pacífica.",
    instructions: "Describe the scene, then talk about why human rights matter to you.",
    instructionsEs: "Describe la escena y luego habla sobre por qué los derechos humanos son importantes para ti.",
    imageUrl: "/images/oral/sharing-planet-human-rights.jpg",
    sceneEmoji: ["✊", "🪧", "🌈"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-sharing-planet-peace",
    themeId: "sharing-planet",
    imageDescription:
      "Two youth delegations shaking hands at an international peace conference, with flags from different countries in the background.",
    imageDescriptionEs:
      "Dos delegaciones juveniles dándose la mano en una conferencia internacional de paz, con banderas de diferentes países al fondo.",
    instructions: "Describe the scene, then discuss what young people can do to promote peace.",
    instructionsEs: "Describe la escena y luego comenta qué pueden hacer los jóvenes para promover la paz.",
    imageUrl: "/images/oral/sharing-planet-peace.png",
    sceneEmoji: ["🤝", "🕊️", "🌐"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-sharing-planet-globalization",
    themeId: "sharing-planet",
    imageDescription:
      "A busy market stall selling products from many different countries, with customers of different nationalities browsing.",
    imageDescriptionEs:
      "Un puesto de mercado concurrido que vende productos de muchos países diferentes, con clientes de distintas nacionalidades mirando.",
    instructions: "Describe the scene, then discuss an advantage and a disadvantage of globalization.",
    instructionsEs:
      "Describe la escena y luego comenta una ventaja y una desventaja de la globalización.",
    imageUrl: "/images/oral/sharing-planet-globalization.jpg",
    sceneEmoji: ["🛍️", "🌍", "💱"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-sharing-planet-consumption",
    themeId: "sharing-planet",
    imageDescription:
      "A person comparing two products in a supermarket, one with a fair-trade label and one without.",
    imageDescriptionEs:
      "Una persona comparando dos productos en un supermercado, uno con etiqueta de comercio justo y otro sin ella.",
    instructions: "Describe the scene, then talk about how your shopping choices can make a difference.",
    instructionsEs:
      "Describe la escena y luego habla sobre cómo tus decisiones de compra pueden marcar la diferencia.",
    imageUrl: "/images/oral/sharing-planet-consumption.jpg",
    sceneEmoji: ["🛒", "🏷️", "⚖️"],
    maxDurationSeconds: 240,
  },

  // --- Identities (second task per subtopic) ---
  {
    id: "audio-identities-lifestyles-2",
    themeId: "identities",
    imageDescription:
      "A student choosing between a salad and fast food at a school cafeteria, with a gym bag and a video game controller visible nearby.",
    imageDescriptionEs:
      "Un estudiante que elige entre una ensalada y comida rápida en la cafetería del colegio, con una bolsa de gimnasio y un mando de videojuegos visibles cerca.",
    instructions: "Describe the scene, then talk about the daily choices that shape your lifestyle.",
    instructionsEs: "Describe la escena y luego habla sobre las decisiones diarias que forman tu estilo de vida.",
    sceneEmoji: ["🥗", "🍔", "🎮"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-identities-health-2",
    themeId: "identities",
    imageDescription:
      "A group of teenagers doing yoga together in a park at sunrise, with water bottles and mats spread on the grass.",
    imageDescriptionEs:
      "Un grupo de adolescentes haciendo yoga juntos en un parque al amanecer, con botellas de agua y esterillas extendidas sobre el césped.",
    instructions: "Describe the scene, then discuss the connection between exercise and mental well-being.",
    instructionsEs: "Describe la escena y luego comenta la relación entre el ejercicio y el bienestar mental.",
    sceneEmoji: ["🧘", "🌅", "💧"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-identities-language-2",
    themeId: "identities",
    imageDescription:
      "A classroom with students' flags from many countries pinned to a world map, and a teacher pointing to different regions.",
    imageDescriptionEs:
      "Un aula con banderas de estudiantes de muchos países clavadas en un mapa mundial, y una profesora señalando diferentes regiones.",
    instructions: "Describe the scene, then talk about the benefits of learning a second language.",
    instructionsEs: "Describe la escena y luego habla sobre los beneficios de aprender un segundo idioma.",
    sceneEmoji: ["🗺️", "🚩", "👩‍🏫"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-identities-beliefs-2",
    themeId: "identities",
    imageDescription:
      "A teenager reading quietly in a place of worship, sunlight streaming through a stained-glass window.",
    imageDescriptionEs:
      "Un adolescente leyendo tranquilamente en un lugar de culto, con la luz del sol entrando por una vidriera.",
    instructions: "Describe the scene, then talk about how your beliefs or traditions influence your daily life.",
    instructionsEs:
      "Describe la escena y luego habla sobre cómo tus creencias o tradiciones influyen en tu vida diaria.",
    sceneEmoji: ["🕯️", "📖", "🌤️"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-identities-childhood-2",
    themeId: "identities",
    imageDescription:
      "An old family photo album open on a table, next to a smartphone showing a recent photo of the same person.",
    imageDescriptionEs:
      "Un álbum de fotos familiar antiguo abierto sobre una mesa, junto a un teléfono inteligente que muestra una foto reciente de la misma persona.",
    instructions: "Describe the scene, then talk about the biggest way you've changed since you were a child.",
    instructionsEs:
      "Describe la escena y luego habla sobre el mayor cambio que has tenido desde que eras niño/a.",
    sceneEmoji: ["📷", "📱", "👶"],
    maxDurationSeconds: 240,
  },

  // --- Experiences (second task per subtopic) ---
  {
    id: "audio-experiences-travel-2",
    themeId: "experiences",
    imageDescription: "A family checking a departures board at an airport, surrounded by suitcases and boarding passes.",
    imageDescriptionEs:
      "Una familia consultando el panel de salidas en un aeropuerto, rodeada de maletas y tarjetas de embarque.",
    instructions: "Describe the scene, then talk about a trip that changed how you see the world.",
    instructionsEs: "Describe la escena y luego habla sobre un viaje que cambió tu forma de ver el mundo.",
    sceneEmoji: ["✈️", "🧳", "🛫"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-experiences-holidays-2",
    themeId: "experiences",
    imageDescription: "A town square decorated with lights and a large crowd dancing during a local festival.",
    imageDescriptionEs:
      "Una plaza del pueblo decorada con luces y una gran multitud bailando durante un festival local.",
    instructions: "Describe the scene, then talk about your favorite celebration and why it's meaningful to you.",
    instructionsEs: "Describe la escena y luego habla sobre tu celebración favorita y por qué es importante para ti.",
    sceneEmoji: ["🎉", "💡", "💃"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-experiences-rites-2",
    themeId: "experiences",
    imageDescription: "A young person receiving a driver's license from an instructor outside a driving school.",
    imageDescriptionEs:
      "Un joven recibiendo su carné de conducir de manos de un instructor fuera de una autoescuela.",
    instructions: "Describe the scene, then talk about a milestone you're looking forward to.",
    instructionsEs: "Describe la escena y luego habla sobre un logro importante que esperas alcanzar.",
    sceneEmoji: ["🚗", "🪪", "🎯"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-experiences-migration-2",
    themeId: "experiences",
    imageDescription: "A moving truck parked outside a house, with boxes labeled in two different languages.",
    imageDescriptionEs:
      "Un camión de mudanzas aparcado frente a una casa, con cajas etiquetadas en dos idiomas diferentes.",
    instructions: "Describe the scene, then talk about the challenges someone might face when moving to a new country.",
    instructionsEs:
      "Describe la escena y luego habla sobre los desafíos que alguien podría enfrentar al mudarse a otro país.",
    sceneEmoji: ["🚚", "📦", "🏠"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-experiences-personal-stories-2",
    themeId: "experiences",
    imageDescription: "An elderly grandparent telling a story to grandchildren gathered around a campfire.",
    imageDescriptionEs:
      "Un abuelo mayor contando una historia a sus nietos reunidos alrededor de una fogata.",
    instructions: "Describe the scene, then share a personal story that taught you something important.",
    instructionsEs: "Describe la escena y luego comparte una historia personal que te enseñó algo importante.",
    sceneEmoji: ["🔥", "👴", "👧"],
    maxDurationSeconds: 240,
  },

  // --- Human Ingenuity (second task per subtopic) ---
  {
    id: "audio-human-ingenuity-entertainment-2",
    themeId: "human-ingenuity",
    imageDescription: "A group of friends playing a board game together at a kitchen table, phones set aside.",
    imageDescriptionEs:
      "Un grupo de amigos jugando juntos a un juego de mesa en la cocina, con los teléfonos apartados.",
    instructions: "Describe the scene, then compare traditional games with digital entertainment.",
    instructionsEs: "Describe la escena y luego compara los juegos tradicionales con el entretenimiento digital.",
    sceneEmoji: ["🎲", "👨‍👩‍👧", "📵"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-human-ingenuity-innovation-2",
    themeId: "human-ingenuity",
    imageDescription: "A student presenting a homemade robot to judges at a school science fair.",
    imageDescriptionEs: "Un estudiante presentando un robot casero a los jueces en una feria de ciencias del colegio.",
    instructions: "Describe the scene, then talk about an invention you think has changed the world.",
    instructionsEs: "Describe la escena y luego habla sobre un invento que crees que ha cambiado el mundo.",
    sceneEmoji: ["🤖", "🔬", "🏆"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-human-ingenuity-communication-2",
    themeId: "human-ingenuity",
    imageDescription: "A teenager video-calling a relative in another country, both laughing and waving at the screen.",
    imageDescriptionEs:
      "Un adolescente haciendo una videollamada con un familiar en otro país, ambos riendo y saludando a la pantalla.",
    instructions: "Describe the scene, then discuss how technology has changed the way families stay in touch.",
    instructionsEs:
      "Describe la escena y luego comenta cómo la tecnología ha cambiado la forma en que las familias se mantienen en contacto.",
    sceneEmoji: ["📹", "🌐", "👋"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-human-ingenuity-technology-2",
    themeId: "human-ingenuity",
    imageDescription: "A pair of hands typing on a laptop covered in stickers, with headphones and a coding book nearby.",
    imageDescriptionEs:
      "Un par de manos escribiendo en un portátil cubierto de pegatinas, con auriculares y un libro de programación cerca.",
    instructions: "Describe the scene, then talk about how you use technology in your everyday life.",
    instructionsEs: "Describe la escena y luego habla sobre cómo usas la tecnología en tu vida diaria.",
    sceneEmoji: ["💻", "🎧", "👩‍💻"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-human-ingenuity-transport-2",
    themeId: "human-ingenuity",
    imageDescription: "A busy bicycle-sharing station in a city center, with commuters unlocking bikes during rush hour.",
    imageDescriptionEs:
      "Una estación concurrida de bicicletas compartidas en el centro de una ciudad, con viajeros desbloqueando bicicletas en hora punta.",
    instructions: "Describe the scene, then talk about how transport in your city could become more sustainable.",
    instructionsEs:
      "Describe la escena y luego habla sobre cómo el transporte en tu ciudad podría ser más sostenible.",
    sceneEmoji: ["🚲", "🏙️", "🕒"],
    maxDurationSeconds: 240,
  },

  // --- Social Organization (second task per subtopic) ---
  {
    id: "audio-social-organization-education-2",
    themeId: "social-organization",
    imageDescription: "A tutor helping a younger student with homework at a public library table.",
    imageDescriptionEs: "Un tutor ayudando a un estudiante más joven con la tarea en una mesa de la biblioteca pública.",
    instructions: "Describe the scene, then talk about a teacher or mentor who has influenced you.",
    instructionsEs: "Describe la escena y luego habla sobre un profesor o mentor que te ha influido.",
    sceneEmoji: ["📚", "🧑‍🏫", "🏛️"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-social-organization-employment-2",
    themeId: "social-organization",
    imageDescription: "A teenager handing a résumé to a shop manager during a part-time job interview.",
    imageDescriptionEs:
      "Un adolescente entregando su currículum a un gerente de tienda durante una entrevista para un trabajo a tiempo parcial.",
    instructions: "Describe the scene, then talk about what you look for in a future job.",
    instructionsEs: "Describe la escena y luego habla sobre lo que buscas en un futuro trabajo.",
    sceneEmoji: ["📄", "🤝", "🏬"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-social-organization-community-2",
    themeId: "social-organization",
    imageDescription: "Neighbors of different ages working together to plant trees in a shared community garden.",
    imageDescriptionEs:
      "Vecinos de diferentes edades trabajando juntos para plantar árboles en un huerto comunitario compartido.",
    instructions: "Describe the scene, then talk about how community projects benefit a neighborhood.",
    instructionsEs: "Describe la escena y luego habla sobre cómo los proyectos comunitarios benefician a un barrio.",
    sceneEmoji: ["🌳", "🧑‍🤝‍🧑", "🪴"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-social-organization-relationships-2",
    themeId: "social-organization",
    imageDescription: "Two friends sitting on a bench, one comforting the other after an argument.",
    imageDescriptionEs: "Dos amigos sentados en un banco, uno consolando al otro después de una discusión.",
    instructions: "Describe the scene, then talk about what makes a friendship last.",
    instructionsEs: "Describe la escena y luego habla sobre qué hace que una amistad dure.",
    sceneEmoji: ["🪑", "🤗", "💬"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-social-organization-law-2",
    themeId: "social-organization",
    imageDescription: "Students role-playing a courtroom scene in a classroom, with one acting as judge.",
    imageDescriptionEs: "Estudiantes representando una escena de juicio en el aula, con uno haciendo de juez.",
    instructions: "Describe the scene, then talk about why rules and laws are important in society.",
    instructionsEs:
      "Describe la escena y luego habla sobre por qué las normas y las leyes son importantes en la sociedad.",
    sceneEmoji: ["⚖️", "🏫", "🧑‍⚖️"],
    maxDurationSeconds: 240,
  },

  // --- Sharing the Planet (second task per subtopic) ---
  {
    id: "audio-sharing-planet-environment-2",
    themeId: "sharing-planet",
    imageDescription: "Volunteers in matching t-shirts collecting plastic bottles along a riverbank.",
    imageDescriptionEs: "Voluntarios con camisetas iguales recogiendo botellas de plástico a orillas de un río.",
    instructions: "Describe the scene, then talk about one change you could make to help the environment.",
    instructionsEs: "Describe la escena y luego habla sobre un cambio que podrías hacer para ayudar al medio ambiente.",
    sceneEmoji: ["♻️", "🏞️", "🙋"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-sharing-planet-human-rights-2",
    themeId: "sharing-planet",
    imageDescription: "A crowd holding handmade signs at a peaceful march in a city square.",
    imageDescriptionEs: "Una multitud sosteniendo carteles hechos a mano en una marcha pacífica en la plaza de una ciudad.",
    instructions: "Describe the scene, then talk about a human right you believe deserves more attention.",
    instructionsEs: "Describe la escena y luego habla sobre un derecho humano que crees que merece más atención.",
    sceneEmoji: ["✊", "📢", "🏙️"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-sharing-planet-peace-2",
    themeId: "sharing-planet",
    imageDescription: "Students from two rival schools shaking hands before a friendly sports match.",
    imageDescriptionEs: "Estudiantes de dos escuelas rivales dándose la mano antes de un partido deportivo amistoso.",
    instructions: "Describe the scene, then talk about how sport can help build peace between groups.",
    instructionsEs: "Describe la escena y luego habla sobre cómo el deporte puede ayudar a construir la paz entre grupos.",
    sceneEmoji: ["🤝", "⚽", "🏳️"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-sharing-planet-globalization-2",
    themeId: "sharing-planet",
    imageDescription: "A supermarket shelf stocked with fruit labeled from many different countries.",
    imageDescriptionEs: "Una estantería de supermercado llena de fruta etiquetada de muchos países diferentes.",
    instructions: "Describe the scene, then talk about a positive and a negative effect of globalization.",
    instructionsEs: "Describe la escena y luego habla sobre un efecto positivo y uno negativo de la globalización.",
    sceneEmoji: ["🍌", "🌍", "🛒"],
    maxDurationSeconds: 240,
  },
  {
    id: "audio-sharing-planet-consumption-2",
    themeId: "sharing-planet",
    imageDescription: "A teenager choosing a reusable water bottle over a single-use plastic one in a store aisle.",
    imageDescriptionEs:
      "Un adolescente eligiendo una botella de agua reutilizable en lugar de una de plástico desechable en el pasillo de una tienda.",
    instructions: "Describe the scene, then talk about how young people can influence more ethical consumption.",
    instructionsEs: "Describe la escena y luego habla sobre cómo los jóvenes pueden influir en un consumo más ético.",
    sceneEmoji: ["🚰", "🚯", "🧑"],
    maxDurationSeconds: 240,
  },
];

// ---------------------------------------------------------------------------
// Gamification: badges & prizes
// ---------------------------------------------------------------------------
// ---> TO ADD A BADGE: add its definition here, then implement the unlock rule
// as a plain function in lib/gamification.ts (see evaluateBadges).

export const BADGES: Badge[] = [
  {
    id: "primer-paso",
    name: "Primer Paso",
    description: "Awarded for completing your very first quiz.",
    criteria: "Complete 1 quiz.",
  },
  {
    id: "sobresaliente",
    name: "Sobresaliente",
    description: "Awarded for scoring 80% or higher on a quiz.",
    criteria: "Score at least 80% on any quiz.",
  },
  {
    id: "tema-maestro",
    name: "Tema Maestro",
    description: "Awarded for showing strong focus on a single theme.",
    criteria: "Complete 3 quizzes within the same theme.",
  },
  {
    id: "grammar-ninja",
    name: "Grammar Ninja",
    description: "Awarded for persistence across many quizzes.",
    criteria: "Complete 5 quizzes in total.",
  },
  {
    id: "oral-explorer",
    name: "Oral Explorer",
    description: "Awarded for submitting your first oral practice recording.",
    criteria: "Submit 1 audio assignment.",
  },
  {
    id: "oral-maestro",
    name: "Oral Maestro",
    description: "Awarded for consistent oral exam practice.",
    criteria: "Submit 3 audio assignments.",
  },
  {
    id: "escritor-estelar",
    name: "Escritor Estelar",
    description: "Awarded for submitting your first Paper 2 writing task.",
    criteria: "Submit 1 writing task.",
  },
];

// ---> TO ADD A PRIZE: push a new Prize here.
export const PRIZES: Prize[] = [
  {
    id: "prize-sticker",
    name: "Spanish Star Sticker",
    costPoints: 30,
    description: "A small sticker for your notebook or folder.",
  },
  {
    id: "prize-homework-pass",
    name: "Homework Pass",
    costPoints: 80,
    description: "Skip one homework exercise, no questions asked.",
  },
  {
    id: "prize-playlist",
    name: "Choose the Class Warm-up Song",
    costPoints: 60,
    description: "Pick the Spanish-language song played at the start of class.",
  },
  {
    id: "prize-seat",
    name: "Preferred Seating for a Week",
    costPoints: 100,
    description: "Sit wherever you like in the classroom for one week.",
  },
  {
    id: "prize-certificate",
    name: "Certificate of Excellence",
    costPoints: 200,
    description: "A printed certificate recognizing your progress in Spanish B.",
  },
];

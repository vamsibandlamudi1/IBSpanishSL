import { VocabItem } from "./types";

export interface ParagraphExercise {
  id: string;
  themeId: string;
  subtopic: string;
  title: string;
  textBefore: string;
  textAfter: string;
  targetWord: string;
  translation: string;
  hints: string[];
}

export const PARAGRAPH_EXERCISES: ParagraphExercise[] = [
  // --- IDENTITIES ---
  {
    id: "par-id-1",
    themeId: "identities",
    subtopic: "Estilos de vida",
    title: "El cambio de vida de Carmen",
    textBefore: "Para mejorar su calidad de vida, Carmen decidió evitar el ",
    textAfter: " y comenzó a hacer ejercicio al aire libre cada mañana.",
    targetWord: "sedentarismo",
    translation: "sedentary lifestyle",
    hints: ["sedentarismo", "hábito", "estrés"]
  },
  {
    id: "par-id-2",
    themeId: "identities",
    subtopic: "Salud y bienestar",
    title: "El bienestar en la escuela",
    textBefore: "En el instituto, los consejeros prestan especial atención a la ",
    textAfter: " de los estudiantes antes de los exámenes finales.",
    targetWord: "salud mental",
    translation: "mental health",
    hints: ["salud mental", "prevención", "ansiedad"]
  },
  {
    id: "par-id-3",
    themeId: "identities",
    subtopic: "Lengua e identidad",
    title: "La riqueza de hablar dos idiomas",
    textBefore: "El ",
    textAfter: " permite a los jóvenes conectar profundamente con sus raíces culturales y ampliar sus oportunidades laborales.",
    targetWord: "bilingüismo",
    translation: "bilingualism",
    hints: ["bilingüismo", "dialecto", "modismo"]
  },
  {
    id: "par-id-4",
    themeId: "identities",
    subtopic: "Creencias y valores",
    title: "Valores fundamentales en la sociedad",
    textBefore: "Para construir una comunidad pacífica, es imprescindible fomentar la ",
    textAfter: " y el respeto hacia las opiniones de los demás.",
    targetWord: "tolerancia",
    translation: "tolerance",
    hints: ["tolerancia", "empatía", "solidaridad"]
  },
  {
    id: "par-id-5",
    themeId: "identities",
    subtopic: "Estilos de vida",
    title: "La etapa de cambios",
    textBefore: "Durante la adolescencia, muchos jóvenes buscan su ",
    textAfter: " mientras aprenden a tomar decisiones más independientes.",
    targetWord: "independencia",
    translation: "independence",
    hints: ["independencia", "curiosidad", "madurez"]
  },

  // --- EXPERIENCES ---
  {
    id: "par-exp-1",
    themeId: "experiences",
    subtopic: "Vacaciones y viajes",
    title: "Viaje responsable a Costa Rica",
    textBefore: "Cada vez más viajeros eligen el ",
    textAfter: " para observar la naturaleza sin dañar los ecosistemas locales.",
    targetWord: "ecoturismo",
    translation: "ecotourism",
    hints: ["ecoturismo", "alojamiento", "itinerario"]
  },
  {
    id: "par-exp-2",
    themeId: "experiences",
    subtopic: "Costumbres y tradiciones",
    title: "Las fiestas del pueblo",
    textBefore: "Durante la fiesta patronal, toda la ciudad se reúne en la plaza para presenciar los espectaculares ",
    textAfter: " a medianoche.",
    targetWord: "fuegos artificiales",
    translation: "fireworks",
    hints: ["fuegos artificiales", "desfiles", "disfraces"]
  },
  {
    id: "par-exp-3",
    themeId: "experiences",
    subtopic: "Ritos de paso",
    title: "Un logro universitario",
    textBefore: "Tras cuatro años de intenso estudio, el estudiante asistió emocionado a su ceremonia de ",
    textAfter: " acompañado de toda su familia.",
    targetWord: "graduación",
    translation: "graduation",
    hints: ["graduación", "boda", "jubilación"]
  },
  {
    id: "par-exp-4",
    themeId: "experiences",
    subtopic: "Migración",
    title: "Nuevos horizontes",
    textBefore: "Al llegar a un nuevo país, uno de los mayores desafíos para los inmigrantes es superar la ",
    textAfter: " para comunicarse con facilidad.",
    targetWord: "barrera del idioma",
    translation: "language barrier",
    hints: ["barrera del idioma", "frontera", "nostalgia"]
  },
  {
    id: "par-exp-5",
    themeId: "experiences",
    subtopic: "Historias de vida",
    title: "Superando dificultades",
    textBefore: "Su testimonio sobre la ",
    textAfter: " de problemas de salud inspiró a cientos de jóvenes en el auditorio.",
    targetWord: "superación",
    translation: "overcoming",
    hints: ["superación", "anécdota", "enseñanza"]
  },

  // --- HUMAN INGENUITY ---
  {
    id: "par-ing-1",
    themeId: "human-ingenuity",
    subtopic: "Entretenimiento",
    title: "El cine del futuro",
    textBefore: "Los nuevos videojuegos de ",
    textAfter: " permiten a los jugadores sumergirse por completo en mundos tridimensionales hiperrealistas.",
    targetWord: "realidad virtual",
    translation: "virtual reality",
    hints: ["realidad virtual", "escenografía", "animación"]
  },
  {
    id: "par-ing-2",
    themeId: "human-ingenuity",
    subtopic: "Services and technology",
    title: "Protección en la red",
    textBefore: "Las empresas invierten millones de euros en ",
    textAfter: " para evitar ataques informáticos y proteger los datos de sus clientes.",
    targetWord: "ciberseguridad",
    translation: "cybersecurity",
    hints: ["ciberseguridad", "automatización", "infraestructura"]
  },
  {
    id: "par-ing-3",
    themeId: "human-ingenuity",
    subtopic: "Comunicación y medios",
    title: "La verificación de datos",
    textBefore: "En la era digital, es fundamental combatir las ",
    textAfter: " verificando la información en fuentes periodísticas fiables.",
    targetWord: "noticias falsas",
    translation: "fake news",
    hints: ["noticias falsas", "censura", "desinformación"]
  },
  {
    id: "par-ing-4",
    themeId: "human-ingenuity",
    subtopic: "Scientific innovation",
    title: "Energías limpias para el planeta",
    textBefore: "La instalación de paneles de ",
    textAfter: " permite generar electricidad limpia sin emitir gases contaminantes.",
    targetWord: "energía solar",
    translation: "solar energy",
    hints: ["energía solar", "biotecnología", "hipótesis"]
  },
  {
    id: "par-ing-5",
    themeId: "human-ingenuity",
    subtopic: "Artistic expression",
    title: "El arte urbano",
    textBefore: "El ",
    textAfter: " contemporáneo transforma las paredes grises de la ciudad en impresionantes obras de arte accesible para todos.",
    targetWord: "muralismo",
    translation: "muralism",
    hints: ["muralismo", "escultura", "diseño gráfico"]
  },

  // --- SOCIAL ORGANIZATION ---
  {
    id: "par-soc-1",
    themeId: "social-organization",
    subtopic: "Relaciones sociales",
    title: "La convivencia urbana",
    textBefore: "Promover la ",
    textAfter: " entre vecinos ayuda a reducir los conflictos en los barrios de las grandes ciudades.",
    targetWord: "convivencia pacífica",
    translation: "peaceful coexistence",
    hints: ["convivencia pacífica", "dinámica familiar", "fraternidad"]
  },
  {
    id: "par-soc-2",
    themeId: "social-organization",
    subtopic: "Community",
    title: "Iniciativas del barrio",
    textBefore: "Los vecinos organizaron un ",
    textAfter: " en el terreno baldío para cultivar hortalizas orgánicas comunitarias.",
    targetWord: "huerto urbano",
    translation: "urban garden",
    hints: ["huerto urbano", "centro comunitario", "comedor social"]
  },
  {
    id: "par-soc-3",
    themeId: "social-organization",
    subtopic: "Educación",
    title: "Oportunidades de estudio",
    textBefore: "El gobierno otorgó una ",
    textAfter: " a los estudiantes con mejores calificaciones para financiar sus estudios universitarios.",
    targetWord: "beca de estudios",
    translation: "study scholarship",
    hints: ["beca de estudios", "tasa de alfabetización", "plan de estudios"]
  },
  {
    id: "par-soc-4",
    themeId: "social-organization",
    subtopic: "The workplace",
    title: "Derechos de los trabajadores",
    textBefore: "Las organizaciones sindicales exigieron un incremento del ",
    textAfter: " para compensar el aumento del coste de la vida.",
    targetWord: "salario mínimo",
    translation: "minimum wage",
    hints: ["salario mínimo", "contrato indefinido", "jornada laboral"]
  },
  {
    id: "par-soc-5",
    themeId: "social-organization",
    subtopic: "Ley y orden",
    title: "La justicia en el estado de derecho",
    textBefore: "En un juicio justo, la ",
    textAfter: " garantiza que cualquier acusado sea considerado inocente hasta que se demuestre lo contrario.",
    targetWord: "presunción de inocencia",
    translation: "presumption of innocence",
    hints: ["presunción de inocencia", "orden de arresto", "código penal"]
  },

  // --- SHARING THE PLANET ---
  {
    id: "par-pla-1",
    themeId: "sharing-planet",
    subtopic: "The environment",
    title: "Frenar el deterioro ambiental",
    textBefore: "El aumento de las temperaturas globales provocado por el ",
    textAfter: " está acelerando el derretimiento de los glaciares polares.",
    targetWord: "cambio climático",
    translation: "climate change",
    hints: ["cambio climático", "deforestación", "biodiversidad"]
  },
  {
    id: "par-pla-2",
    themeId: "sharing-planet",
    subtopic: "Derechos humanos",
    title: "La protección universal",
    textBefore: "La ",
    textAfter: " de Derechos Humanos establece los derechos fundamentales que deben respetarse en todos los países del mundo.",
    targetWord: "declaración universal",
    translation: "universal declaration",
    hints: ["declaración universal", "dignidad humana", "amnistía"]
  },
  {
    id: "par-pla-3",
    themeId: "sharing-planet",
    subtopic: "Paz y conflicto",
    title: "Avanzando hacia la paz",
    textBefore: "Tras duras semanas de negociación diplomática, los líderes firmaron un ",
    textAfter: " para poner fin a las hostilidades armadas.",
    targetWord: "tratado de paz",
    translation: "peace treaty",
    hints: ["tratado de paz", "alto el fuego", "armisticio"]
  },
  {
    id: "par-pla-4",
    themeId: "sharing-planet",
    subtopic: "Globalización",
    title: "La interconexión comercial",
    textBefore: "El desarrollo del ",
    textAfter: " permite a los países intercambiar bienes y productos con mayor rapidez que nunca.",
    targetWord: "comercio internacional",
    translation: "international trade",
    hints: ["comercio internacional", "libre comercio", "arancel aduanero"]
  },
  {
    id: "par-pla-5",
    themeId: "sharing-planet",
    subtopic: "Ética",
    title: "Hacia una economía limpia",
    textBefore: "Fomentar la ",
    textAfter: " implica reducir el consumo de recursos, reparar los productos y reciclar todos los materiales posibles.",
    targetWord: "economía circular",
    translation: "circular economy",
    hints: ["economía circular", "sostenibilidad", "comercio justo"]
  },
  {
    id: "par-id-subc-1",
    themeId: "identities",
    subtopic: "Subculturas",
    title: "Un grupo de amigos",
    textBefore: "Muchos jóvenes buscan la ",
    textAfter: " a un grupo que comparte su música y su forma de vestir.",
    targetWord: "pertenencia",
    translation: "belonging",
    hints: ["pertenencia", "rechazo", "tribu urbana"]
  },
  {
    id: "par-ex-recr-1",
    themeId: "experiences",
    subtopic: "Actividades recreativas",
    title: "Un sábado en el barrio",
    textBefore: "Los sábados por la mañana, el club organiza un ",
    textAfter: " de fútbol para todos los niños del barrio.",
    targetWord: "entrenamiento",
    translation: "training session",
    hints: ["entrenamiento", "campamento", "excursión"]
  },
  {
    id: "par-hi-arte-1",
    themeId: "human-ingenuity",
    subtopic: "Expresiones artísticas",
    title: "Una visita al museo",
    textBefore: "En el museo se exponía una ",
    textAfter: " de bronce que representaba a un bailarín.",
    targetWord: "escultura",
    translation: "sculpture",
    hints: ["escultura", "pintura", "mural"]
  },
  {
    id: "par-hi-tec-1",
    themeId: "human-ingenuity",
    subtopic: "Tecnología",
    title: "Una nueva plataforma",
    textBefore: "La empresa presentó un nuevo ",
    textAfter: " que recomienda vídeos según los gustos de cada usuario.",
    targetWord: "algoritmo",
    translation: "algorithm",
    hints: ["algoritmo", "dispositivo", "internet"]
  },
  {
    id: "par-hi-cien-1",
    themeId: "human-ingenuity",
    subtopic: "Innovación científica",
    title: "Un hallazgo en el laboratorio",
    textBefore: "El laboratorio anunció un ",
    textAfter: " que podría cambiar el tratamiento de la enfermedad.",
    targetWord: "descubrimiento",
    translation: "discovery",
    hints: ["descubrimiento", "investigación", "teoría"]
  },
  {
    id: "par-so-com-1",
    themeId: "social-organization",
    subtopic: "Comunidad",
    title: "Un barrio unido",
    textBefore: "En el barrio, el ",
    textAfter: " entre vecinos es lo que mantiene unida a la comunidad.",
    targetWord: "apoyo mutuo",
    translation: "mutual support",
    hints: ["apoyo mutuo", "vecindario", "convivencia"]
  },
  {
    id: "par-so-part-1",
    themeId: "social-organization",
    subtopic: "Participación social",
    title: "Jóvenes en acción",
    textBefore: "Muchos jóvenes participan en el ",
    textAfter: " de la ciudad, ayudando en comedores y bibliotecas.",
    targetWord: "voluntariado",
    translation: "volunteering",
    hints: ["voluntariado", "voto", "activismo"]
  },
  {
    id: "par-so-lab-1",
    themeId: "social-organization",
    subtopic: "El mundo laboral",
    title: "Mi primer empleo",
    textBefore: "Antes de firmar el ",
    textAfter: " leyó con atención el salario y el horario.",
    targetWord: "contrato",
    translation: "contract",
    hints: ["contrato", "salario", "empleo"]
  },
  {
    id: "par-sp-amb-1",
    themeId: "sharing-planet",
    subtopic: "El medio ambiente",
    title: "La selva en peligro",
    textBefore: "La ",
    textAfter: " de la selva amenaza a miles de especies.",
    targetWord: "deforestación",
    translation: "deforestation",
    hints: ["deforestación", "biodiversidad", "contaminación"]
  },
  {
    id: "par-sp-igu-1",
    themeId: "sharing-planet",
    subtopic: "Igualdad",
    title: "Igualdad en el trabajo",
    textBefore: "Las organizaciones luchan contra la ",
    textAfter: " laboral y exigen la misma paga por el mismo trabajo.",
    targetWord: "discriminación",
    translation: "discrimination",
    hints: ["discriminación", "equidad", "inclusión"]
  },
  {
    id: "par-sp-urb-1",
    themeId: "sharing-planet",
    subtopic: "El medio urbano y rural",
    title: "Dejar el pueblo",
    textBefore: "Muchos jóvenes se van del ",
    textAfter: " para estudiar y encontrar trabajo en la ciudad.",
    targetWord: "pueblo",
    translation: "village",
    hints: ["pueblo", "despoblación", "transporte público"]
  },
  {
    id: "par-id-estilos-de-vida-2",
    themeId: "identities",
    subtopic: "Estilos de vida",
    title: "Estilos de vida",
    textBefore: "Para vivir mejor, Pablo cuidó su ",
    textAfter: " y empezó a comer más verduras y menos comida rápida.",
    targetWord: "nutrición",
    translation: "nutrition",
    hints: ["nutrición", "hidratación", "autocuidado"]
  },
  {
    id: "par-id-salud-y-bienestar-2",
    themeId: "identities",
    subtopic: "Salud y bienestar",
    title: "Salud y bienestar",
    textBefore: "En el centro de salud insisten en la ",
    textAfter: " de enfermedades como la ansiedad y la depresión.",
    targetWord: "prevención",
    translation: "prevention",
    hints: ["prevención", "higiene", "diagnóstico"]
  },
  {
    id: "par-id-creencias-y-valores-2",
    themeId: "identities",
    subtopic: "Creencias y valores",
    title: "Creencias y valores",
    textBefore: "En clase discutimos sobre la ",
    textAfter: " religiosa y el respeto a quienes piensan distinto.",
    targetWord: "tolerancia",
    translation: "tolerance",
    hints: ["tolerancia", "respeto mutuo", "empatía"]
  },
  {
    id: "par-id-subculturas-2",
    themeId: "identities",
    subtopic: "Subculturas",
    title: "Subculturas",
    textBefore: "Sufrió el ",
    textAfter: " de sus compañeros por su forma de vestir, hasta que encontró a su grupo.",
    targetWord: "rechazo",
    translation: "rejection",
    hints: ["rechazo", "aceptación", "pertenencia"]
  },
  {
    id: "par-id-lengua-e-identidad-2",
    themeId: "identities",
    subtopic: "Lengua e identidad",
    title: "Lengua e identidad",
    textBefore: "Gracias al ",
    textAfter: " de su familia, los niños hablan con los abuelos en su idioma y con los amigos en otro.",
    targetWord: "bilingüismo",
    translation: "bilingualism",
    hints: ["bilingüismo", "dialecto", "pronunciación"]
  },
  {
    id: "par-ex-actividades-recreativas-2",
    themeId: "experiences",
    subtopic: "Actividades recreativas",
    title: "Actividades recreativas",
    textBefore: "Mi principal ",
    textAfter: " es la fotografía, y los domingos salgo a caminar con la cámara.",
    targetWord: "pasatiempo",
    translation: "hobby",
    hints: ["pasatiempo", "ocio", "afición"]
  },
  {
    id: "par-ex-vacaciones-y-viajes-2",
    themeId: "experiences",
    subtopic: "Vacaciones y viajes",
    title: "Vacaciones y viajes",
    textBefore: "Para ahorrar, dormimos en un ",
    textAfter: " juvenil cerca de la playa.",
    targetWord: "albergue",
    translation: "hostel",
    hints: ["albergue", "alojamiento", "crucero"]
  },
  {
    id: "par-ex-historias-de-vida-2",
    themeId: "experiences",
    subtopic: "Historias de vida",
    title: "Historias de vida",
    textBefore: "En su ",
    textAfter: ", la escritora cuenta cómo superó la pobreza y llegó a la universidad.",
    targetWord: "autobiografía",
    translation: "autobiography",
    hints: ["autobiografía", "testimonio", "anécdota"]
  },
  {
    id: "par-ex-ritos-de-paso-2",
    themeId: "experiences",
    subtopic: "Ritos de paso",
    title: "Ritos de paso",
    textBefore: "Después de la ",
    textAfter: ", la familia celebró una comida con todos los primos.",
    targetWord: "confirmación",
    translation: "confirmation",
    hints: ["confirmación", "quinceañera", "jubilación"]
  },
  {
    id: "par-ex-costumbres-y-tradiciones-2",
    themeId: "experiences",
    subtopic: "Costumbres y tradiciones",
    title: "Costumbres y tradiciones",
    textBefore: "Cada año, el pueblo celebra el ",
    textAfter: " con disfraces, música y una gran procesión.",
    targetWord: "carnaval",
    translation: "carnival",
    hints: ["carnaval", "procesión", "verbena"]
  },
  {
    id: "par-ex-migracion-2",
    themeId: "experiences",
    subtopic: "Migración",
    title: "Migración",
    textBefore: "Cruzar la ",
    textAfter: " fue el momento más difícil del viaje para mi familia.",
    targetWord: "frontera",
    translation: "border",
    hints: ["frontera", "emigrante", "integración social"]
  },
  {
    id: "par-hi-entretenimiento-2",
    themeId: "human-ingenuity",
    subtopic: "Entretenimiento",
    title: "Entretenimiento",
    textBefore: "El festival premió el mejor ",
    textAfter: " del año, rodado en un pueblo de montaña.",
    targetWord: "largometraje",
    translation: "feature film",
    hints: ["largometraje", "cortometraje", "guion cinematográfico"]
  },
  {
    id: "par-hi-expresiones-artisticas-2",
    themeId: "human-ingenuity",
    subtopic: "Expresiones artísticas",
    title: "Expresiones artísticas",
    textBefore: "En la plaza hay un ",
    textAfter: " que representa la historia del barrio.",
    targetWord: "mural",
    translation: "mural",
    hints: ["mural", "escultura", "poesía"]
  },
  {
    id: "par-hi-comunicacion-y-medios-2",
    themeId: "human-ingenuity",
    subtopic: "Comunicación y medios",
    title: "Comunicación y medios",
    textBefore: "La ",
    textAfter: " en las redes sociales puede engañar a muchas personas.",
    targetWord: "desinformación",
    translation: "disinformation",
    hints: ["desinformación", "noticias falsas", "censura"]
  },
  {
    id: "par-hi-tecnologia-2",
    themeId: "human-ingenuity",
    subtopic: "Tecnología",
    title: "Tecnología",
    textBefore: "La empresa protege sus datos con ",
    textAfter: " de última generación.",
    targetWord: "ciberseguridad",
    translation: "cybersecurity",
    hints: ["ciberseguridad", "algoritmo", "servidor web"]
  },
  {
    id: "par-hi-innovacion-cientifica-2",
    themeId: "human-ingenuity",
    subtopic: "Innovación científica",
    title: "Innovación científica",
    textBefore: "Los científicos usan la ",
    textAfter: " para crear cultivos más resistentes a la sequía.",
    targetWord: "biotecnología",
    translation: "biotechnology",
    hints: ["biotecnología", "nanotecnología", "avance científico"]
  },
  {
    id: "par-so-relaciones-sociales-2",
    themeId: "social-organization",
    subtopic: "Relaciones sociales",
    title: "Relaciones sociales",
    textBefore: "En el edificio, la ",
    textAfter: " entre vecinos de distintas culturas es un ejemplo para todos.",
    targetWord: "cohabitación",
    translation: "coexistence",
    hints: ["cohabitación", "convivencia", "apoyo mutuo"]
  },
  {
    id: "par-so-comunidad-2",
    themeId: "social-organization",
    subtopic: "Comunidad",
    title: "Comunidad",
    textBefore: "El ",
    textAfter: " aprobó la reforma de la plaza mayor tras las peticiones de los vecinos.",
    targetWord: "ayuntamiento",
    translation: "town council",
    hints: ["ayuntamiento", "junta vecinal", "presupuesto participativo"]
  },
  {
    id: "par-so-participacion-social-2",
    themeId: "social-organization",
    subtopic: "Participación social",
    title: "Participación social",
    textBefore: "La ",
    textAfter: " de recogida de firmas llegó a mil vecinos en una semana.",
    targetWord: "campaña",
    translation: "campaign",
    hints: ["campaña", "petición", "activismo"]
  },
  {
    id: "par-so-educacion-2",
    themeId: "social-organization",
    subtopic: "Educación",
    title: "Educación",
    textBefore: "En el instituto, el ",
    textAfter: " de algunos alumnos preocupa a la dirección.",
    targetWord: "fracaso escolar",
    translation: "school failure",
    hints: ["fracaso escolar", "beca de estudios", "deserción escolar"]
  },
  {
    id: "par-so-el-mundo-laboral-2",
    themeId: "social-organization",
    subtopic: "El mundo laboral",
    title: "El mundo laboral",
    textBefore: "Los trabajadores se unieron al ",
    textAfter: " para pedir mejores condiciones y un salario más justo.",
    targetWord: "sindicato",
    translation: "trade union",
    hints: ["sindicato", "huelga", "salario mínimo"]
  },
  {
    id: "par-so-ley-y-orden-2",
    themeId: "social-organization",
    subtopic: "Ley y orden",
    title: "Ley y orden",
    textBefore: "El juez dictó una ",
    textAfter: " de tres años por el robo.",
    targetWord: "condena penal",
    translation: "criminal sentence",
    hints: ["condena penal", "tribunal de justicia", "reinserción social"]
  },
  {
    id: "par-sp-el-medio-ambiente-2",
    themeId: "sharing-planet",
    subtopic: "El medio ambiente",
    title: "El medio ambiente",
    textBefore: "La reducción de la ",
    textAfter: " es una de las amenazas más graves del planeta.",
    targetWord: "biodiversidad",
    translation: "biodiversity",
    hints: ["biodiversidad", "contaminación", "sequía"]
  },
  {
    id: "par-sp-derechos-humanos-2",
    themeId: "sharing-planet",
    subtopic: "Derechos humanos",
    title: "Derechos humanos",
    textBefore: "La organización pidió ",
    textAfter: " para los presos de conciencia.",
    targetWord: "amnistía",
    translation: "amnesty",
    hints: ["amnistía", "libertad de culto", "derecho de asilo"]
  },
  {
    id: "par-sp-paz-y-conflicto-2",
    themeId: "sharing-planet",
    subtopic: "Paz y conflicto",
    title: "Paz y conflicto",
    textBefore: "Gracias a la ",
    textAfter: ", los dos países firmaron un tratado de paz.",
    targetWord: "diplomacia",
    translation: "diplomacy",
    hints: ["diplomacia", "mediador internacional", "armisticio"]
  },
  {
    id: "par-sp-igualdad-2",
    themeId: "sharing-planet",
    subtopic: "Igualdad",
    title: "Igualdad",
    textBefore: "Una educación de calidad busca la ",
    textAfter: " entre todos los estudiantes, sea cual sea su origen.",
    targetWord: "equidad",
    translation: "equity",
    hints: ["equidad", "inclusión", "oportunidad"]
  },
  {
    id: "par-sp-globalizacion-2",
    themeId: "sharing-planet",
    subtopic: "Globalización",
    title: "Globalización",
    textBefore: "El ",
    textAfter: " entre los dos países cambió los precios de muchos productos.",
    targetWord: "libre comercio",
    translation: "free trade",
    hints: ["libre comercio", "aldea global", "arancel aduanero"]
  },
  {
    id: "par-sp-etica-2",
    themeId: "sharing-planet",
    subtopic: "Ética",
    title: "Ética",
    textBefore: "Muchas marcas practican el ",
    textAfter: " para parecer más sostenibles de lo que son.",
    targetWord: "lavado verde",
    translation: "greenwashing",
    hints: ["lavado verde", "consumo consciente", "sello ecológico"]
  },
  {
    id: "par-sp-el-medio-urbano-y-rural-2",
    themeId: "sharing-planet",
    subtopic: "El medio urbano y rural",
    title: "El medio urbano y rural",
    textBefore: "La ",
    textAfter: " del campo preocupa a los pueblos pequeños.",
    targetWord: "despoblación",
    translation: "depopulation",
    hints: ["despoblación", "transporte público", "vivienda"]
  }
];

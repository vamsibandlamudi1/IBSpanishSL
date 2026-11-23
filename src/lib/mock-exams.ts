/// File: src/lib/mock-exams.ts
//
// Mock Exam sets in the layout of the official-style trial papers: Paper 2 reading
// (three texts, 40 questions) and Paper 2 listening (three audio texts, 25 questions).
// Set 1 is the pilot; sets 2–4 follow the same shape. All texts and questions are original.

import { ListeningSet } from "./listening-sets";
import { ReadingPassage } from "./types";

export interface MockSet {
  id: string;
  title: string;
  reading: ReadingPassage[];
  listening: ListeningSet[];
}

const READING_1: ReadingPassage[] = [
  {
    "id": "mock1-read-a",
    "themeId": "identities",
    "subtopic": "Estilos de vida",
    "title": "Texto A: Dormir mejor, vivir mejor",
    "textType": "Magazine article",
    "level": "medium",
    "bodyEs": "Hace un año, Lucía tenía sueño todo el día. Se acostaba tarde por culpa del teléfono y se levantaba cansada para ir al instituto. Sus notas bajaban y, según ella, su humor también. Un día decidió cambiar algunos hábitos y lo hizo poco a poco.\n\nPrimero dejó el móvil fuera de su habitación por la noche. Después empezó a caminar veinte minutos después de comer, algo que su madre le había pedido durante años. Por último, cambió el café de la tarde por una infusión. Al principio le costó, pero en un mes notó la diferencia.\n\nLos especialistas en sueño explican que los adolescentes necesitan entre ocho y diez horas de descanso. La luz de las pantallas retrasa la producción de melatonina, la hormona que nos ayuda a dormir. Por eso recomiendan apagar los dispositivos una hora antes de acostarse.\n\nLucía dice que lo más difícil no fue dormir mejor, sino mantener la constancia. Hoy ya no necesita despertador para ir a clase, y ha descubierto que se siente más tranquila durante el día.",
    "questions": [
      {
        "id": "m1a-q1",
        "type": "true-false",
        "prompt": "Lucía se acostaba temprano antes de cambiar sus hábitos.",
        "correctAnswer": "false",
        "justification": "Se acostaba tarde por culpa del teléfono"
      },
      {
        "id": "m1a-q2",
        "type": "true-false",
        "prompt": "Lucía sacó el móvil de su habitación por la noche.",
        "correctAnswer": "true",
        "justification": "dejó el móvil fuera de su habitación por la noche"
      },
      {
        "id": "m1a-q3",
        "type": "true-false",
        "prompt": "Su madre le pidió durante años que caminara después de comer.",
        "correctAnswer": "true",
        "justification": "algo que su madre le había pedido durante años"
      },
      {
        "id": "m1a-q4",
        "type": "true-false",
        "prompt": "Lucía dejó de tomar café por la tarde y lo cambió por una infusión.",
        "correctAnswer": "true",
        "justification": "cambió el café de la tarde por una infusión"
      },
      {
        "id": "m1a-q5",
        "type": "true-false",
        "prompt": "Lucía notó resultados en una semana.",
        "correctAnswer": "false",
        "justification": "en un mes notó la diferencia"
      },
      {
        "id": "m1a-q6",
        "type": "true-false",
        "prompt": "Los adolescentes necesitan dormir entre ocho y diez horas.",
        "correctAnswer": "true",
        "justification": "necesitan entre ocho y diez horas de descanso"
      },
      {
        "id": "m1a-q7",
        "type": "mcq",
        "prompt": "¿Qué hormona ayuda a dormir?",
        "options": [
          "La adrenalina",
          "La melatonina",
          "La insulina",
          "La serotonina"
        ],
        "correctAnswer": "La melatonina"
      },
      {
        "id": "m1a-q8",
        "type": "mcq",
        "prompt": "¿Cuánto tiempo antes de acostarse recomiendan apagar los dispositivos?",
        "options": [
          "Media hora",
          "Una hora",
          "Dos horas",
          "Cinco minutos"
        ],
        "correctAnswer": "Una hora"
      },
      {
        "id": "m1a-q9",
        "type": "mcq",
        "prompt": "¿Qué le resultó más difícil a Lucía?",
        "options": [
          "Dormir mejor",
          "Mantener la constancia",
          "Comprar una infusión",
          "Caminar por la mañana"
        ],
        "correctAnswer": "Mantener la constancia"
      },
      {
        "id": "m1a-q10",
        "type": "mcq",
        "prompt": "¿Qué cambió en el humor de Lucía?",
        "options": [
          "Se sentía más tranquila durante el día",
          "Se enfadaba más en clase",
          "No notó ningún cambio",
          "Estaba siempre triste"
        ],
        "correctAnswer": "Se sentía más tranquila durante el día"
      },
      {
        "id": "m1a-q11",
        "type": "short",
        "prompt": "¿Qué le pasaba a Lucía con sus notas?",
        "correctAnswer": "bajaban"
      },
      {
        "id": "m1a-q12",
        "type": "short",
        "prompt": "¿Qué ya no necesita Lucía para ir a clase?",
        "correctAnswer": "despertador"
      },
      {
        "id": "m1a-q13",
        "type": "short",
        "prompt": "¿Cuál es la razón por la que la luz de las pantallas afecta al sueño?",
        "correctAnswer": "retrasa la producción de melatonina"
      }
    ]
  },
  {
    "id": "mock1-read-b",
    "themeId": "human-ingenuity",
    "subtopic": "Tecnología",
    "title": "Texto B: Un robot en la biblioteca",
    "textType": "Newspaper article",
    "level": "medium",
    "bodyEs": "La biblioteca municipal de Cuenca incorporó este mes un robot que ayuda a los usuarios a encontrar libros. El aparato, llamado Biblio, tiene la forma de una columna blanca y habla en tres idiomas. Puede guiar a los visitantes hasta la sección que buscan en menos de un minuto.\n\nLa directora de la biblioteca, Marta Gil, explicó que el objetivo no es sustituir a los bibliotecarios. Según ella, el robot se encarga de las preguntas repetitivas, como dónde están los diccionarios o cuál es el horario de apertura, para que el personal pueda dedicar más tiempo a recomendar lecturas y a ayudar a los niños.\n\nEl proyecto costó unos cuarenta mil euros, financiados en parte por una subvención europea. Algunos vecinos se mostraron preocupados por la pérdida de empleo, pero el ayuntamiento asegura que ninguno de los trabajadores ha perdido su puesto.\n\nLos primeros datos son positivos. Durante la primera semana, más de quinientas personas utilizaron el robot, y la mayoría de los usuarios mayores de sesenta años dijeron que resultaba fácil de manejar.",
    "questions": [
      {
        "id": "m1b-q1",
        "type": "true-false",
        "prompt": "El robot Biblio tiene forma humana.",
        "correctAnswer": "false",
        "justification": "tiene la forma de una columna blanca"
      },
      {
        "id": "m1b-q2",
        "type": "true-false",
        "prompt": "El robot puede hablar en tres idiomas.",
        "correctAnswer": "true",
        "justification": "habla en tres idiomas"
      },
      {
        "id": "m1b-q3",
        "type": "true-false",
        "prompt": "Según la directora, el robot va a reemplazar a los bibliotecarios.",
        "correctAnswer": "false",
        "justification": "el objetivo no es sustituir a los bibliotecarios"
      },
      {
        "id": "m1b-q4",
        "type": "true-false",
        "prompt": "El proyecto fue pagado íntegramente por el ayuntamiento.",
        "correctAnswer": "false",
        "justification": "financiados en parte por una subvención europea"
      },
      {
        "id": "m1b-q5",
        "type": "true-false",
        "prompt": "Ningún trabajador de la biblioteca ha perdido su puesto.",
        "correctAnswer": "true",
        "justification": "ninguno de los trabajadores ha perdido su puesto"
      },
      {
        "id": "m1b-q6",
        "type": "true-false",
        "prompt": "Durante la primera semana, menos de cien personas usaron el robot.",
        "correctAnswer": "false",
        "justification": "más de quinientas personas utilizaron el robot"
      },
      {
        "id": "m1b-q7",
        "type": "mcq",
        "prompt": "¿Qué tipo de preguntas se encarga de responder el robot?",
        "options": [
          "Las preguntas difíciles sobre libros",
          "Las preguntas repetitivas",
          "Las preguntas de los niños",
          "Las preguntas sobre el presupuesto"
        ],
        "correctAnswer": "Las preguntas repetitivas"
      },
      {
        "id": "m1b-q8",
        "type": "mcq",
        "prompt": "¿Cuánto costó el proyecto aproximadamente?",
        "options": [
          "Cuatro mil euros",
          "Cuarenta mil euros",
          "Cuatrocientos mil euros",
          "No se indica"
        ],
        "correctAnswer": "Cuarenta mil euros"
      },
      {
        "id": "m1b-q9",
        "type": "mcq",
        "prompt": "¿Qué preocupaba a algunos vecinos?",
        "options": [
          "El ruido del robot",
          "La pérdida de empleo",
          "El precio de los libros",
          "El horario de apertura"
        ],
        "correctAnswer": "La pérdida de empleo"
      },
      {
        "id": "m1b-q10",
        "type": "mcq",
        "prompt": "¿Qué dice la mayoría de los usuarios mayores de sesenta años?",
        "options": [
          "Que el robot es difícil de manejar",
          "Que es fácil de manejar",
          "Que prefieren a los bibliotecarios",
          "Que no lo han usado"
        ],
        "correctAnswer": "Que es fácil de manejar"
      },
      {
        "id": "m1b-q11",
        "type": "short",
        "prompt": "¿En cuánto tiempo puede el robot guiar a un visitante a la sección que busca?",
        "correctAnswer": "menos de un minuto"
      },
      {
        "id": "m1b-q12",
        "type": "short",
        "prompt": "¿Qué ciudad tiene la biblioteca?",
        "correctAnswer": "Cuenca"
      },
      {
        "id": "m1b-q13",
        "type": "short",
        "prompt": "¿Qué tipo de información del horario se menciona como ejemplo de pregunta repetitiva?",
        "correctAnswer": "horario de apertura"
      }
    ]
  },
  {
    "id": "mock1-read-c",
    "themeId": "sharing-planet",
    "subtopic": "Ética",
    "title": "Texto C: Ropa con segunda vida",
    "textType": "Report",
    "level": "hard",
    "bodyEs": "Resumen del informe sobre el consumo de ropa entre jóvenes de la comunidad. El estudio, realizado en tres institutos de Valencia, analizó los hábitos de compra de 400 estudiantes de entre catorce y dieciocho años.\n\nLos resultados muestran que la mayoría compra ropa cada mes, aunque casi la mitad de las prendas acaba sin usarse durante más de un año. Las redes sociales influyen en esta tendencia: muchos jóvenes reconocen que compran para seguir modas que cambian cada semana. El informe señala que este consumo rápido genera toneladas de residuos textiles cada año.\n\nSin embargo, también aparece una tendencia positiva. Un 30% de los encuestados ha participado en algún intercambio de ropa o ha comprado en tiendas de segunda mano. Quienes lo hacen afirman que sienten menos culpa al comprar y que descubren estilos originales.\n\nLos autores recomiendan tres medidas: educar sobre el impacto de la moda rápida, facilitar espacios de intercambio en los centros educativos y apoyar las tiendas de segunda mano con ayudas municipales.",
    "questions": [
      {
        "id": "m1c-q1",
        "type": "true-false",
        "prompt": "El estudio analizó a estudiantes de cuatro institutos.",
        "correctAnswer": "false",
        "justification": "realizado en tres institutos de Valencia"
      },
      {
        "id": "m1c-q2",
        "type": "true-false",
        "prompt": "Participaron 400 estudiantes.",
        "correctAnswer": "true",
        "justification": "los hábitos de compra de 400 estudiantes"
      },
      {
        "id": "m1c-q3",
        "type": "true-false",
        "prompt": "La mayoría de los jóvenes compra ropa cada mes.",
        "correctAnswer": "true",
        "justification": "la mayoría compra ropa cada mes"
      },
      {
        "id": "m1c-q4",
        "type": "true-false",
        "prompt": "Casi todas las prendas se usan durante más de un año.",
        "correctAnswer": "false",
        "justification": "casi la mitad de las prendas acaba sin usarse durante más de un año"
      },
      {
        "id": "m1c-q5",
        "type": "true-false",
        "prompt": "Los jóvenes compran ropa para seguir modas que cambian cada semana.",
        "correctAnswer": "true",
        "justification": "compran para seguir modas que cambian cada semana"
      },
      {
        "id": "m1c-q6",
        "type": "true-false",
        "prompt": "El 30% de los encuestados nunca ha comprado ropa de segunda mano.",
        "correctAnswer": "false",
        "justification": "Un 30% de los encuestados ha participado en algún intercambio de ropa o ha comprado en tiendas de segunda mano"
      },
      {
        "id": "m1c-q7",
        "type": "mcq",
        "prompt": "¿Qué influye en la tendencia de compra según el informe?",
        "options": [
          "La televisión",
          "Las redes sociales",
          "Los precios del supermercado",
          "Las escuelas"
        ],
        "correctAnswer": "Las redes sociales"
      },
      {
        "id": "m1c-q8",
        "type": "mcq",
        "prompt": "¿Qué sienten los que compran en segunda mano?",
        "options": [
          "Más orgullo social",
          "Menos culpa al comprar",
          "Más prisa",
          "Ninguna diferencia"
        ],
        "correctAnswer": "Menos culpa al comprar"
      },
      {
        "id": "m1c-q9",
        "type": "mcq",
        "prompt": "¿Cuál NO es una de las recomendaciones de los autores?",
        "options": [
          "Educar sobre el impacto de la moda rápida",
          "Facilitar espacios de intercambio",
          "Apoyar las tiendas de segunda mano",
          "Prohibir las redes sociales"
        ],
        "correctAnswer": "Prohibir las redes sociales"
      },
      {
        "id": "m1c-q10",
        "type": "mcq",
        "prompt": "¿Qué tipo de texto es este?",
        "options": [
          "Un informe",
          "Un poema",
          "Una carta personal",
          "Un anuncio"
        ],
        "correctAnswer": "Un informe"
      },
      {
        "id": "m1c-q11",
        "type": "short",
        "prompt": "¿Qué edades tenían los estudiantes del estudio?",
        "correctAnswer": "entre catorce y dieciocho años"
      },
      {
        "id": "m1c-q12",
        "type": "short",
        "prompt": "¿Qué produce este consumo rápido cada año?",
        "correctAnswer": "toneladas de residuos textiles"
      },
      {
        "id": "m1c-q13",
        "type": "short",
        "prompt": "¿Qué medida pide el informe para las tiendas de segunda mano?",
        "correctAnswer": "ayudas municipales"
      },
      {
        "id": "m1c-q14",
        "type": "short",
        "prompt": "¿Dónde se pueden facilitar espacios de intercambio según el informe?",
        "correctAnswer": "en los centros educativos"
      }
    ]
  }
];

const LISTENING_1: ListeningSet[] = [
  {
    "id": "mock1-listen-a",
    "themeId": "identities",
    "subtopic": "Lengua e identidad",
    "title": "Una escuela para aprender y recordar",
    "intro": "Vas a escuchar un informe de radio sobre una escuela de idiomas de un barrio.",
    "script": "Buenas tardes, les habla Pilar Soto desde el barrio de Lavapiés, en Madrid. Desde hace dos años, la asociación Voces Propias organiza clases de idiomas para niños y adultos del barrio. Aquí se enseñan el árabe, el bengalí, el quechua y, por supuesto, el español. La idea es sencilla: que cada persona pueda hablar en su lengua de origen sin sentir vergüenza. Según la coordinadora, Rafael Luna, muchos padres dejaron de hablar su idioma con los hijos por miedo a que no aprendieran bien el castellano. Ahora ocurre lo contrario: los niños enseñan palabras a sus abuelos. Las clases son gratuitas y se imparten los martes y los jueves por la tarde. Además, la asociación prepara cada año una pequeña fiesta con canciones y cuentos en todos los idiomas. Rafael cree que la lengua materna es parte de la identidad y que no debe perderse. Para inscribirse, basta con acudir al centro cívico con el libro de familia.",
    "totalMarks": 12,
    "items": [
      {
        "kind": "mc",
        "marks": 1,
        "prompt": "¿Dónde se organizan las clases de idiomas?",
        "options": [
          "En un colegio de Toledo",
          "En el barrio de Lavapiés, en Madrid",
          "En una biblioteca de Sevilla"
        ],
        "correct": "En el barrio de Lavapiés, en Madrid"
      },
      {
        "kind": "mc",
        "marks": 1,
        "prompt": "¿Por qué dejaron de hablar su idioma algunos padres?",
        "options": [
          "Porque no les gustaba",
          "Por miedo a que sus hijos no aprendieran bien el castellano",
          "Porque sus hijos se lo prohibían"
        ],
        "correct": "Por miedo a que sus hijos no aprendieran bien el castellano"
      },
      {
        "kind": "mc",
        "marks": 1,
        "prompt": "¿Cuándo se imparten las clases?",
        "options": [
          "Los lunes y miércoles por la mañana",
          "Los martes y los jueves por la tarde",
          "Los fines de semana"
        ],
        "correct": "Los martes y los jueves por la tarde"
      },
      {
        "kind": "ms",
        "marks": 2,
        "prompt": "Escoge las dos frases verdaderas.",
        "options": [
          "La asociación lleva dos años en el barrio.",
          "Las clases cuestan veinte euros al mes.",
          "Solo se enseña español.",
          "Los niños enseñan palabras a sus abuelos.",
          "La fiesta anual es en verano."
        ],
        "correct": [
          "La asociación lleva dos años en el barrio.",
          "Los niños enseñan palabras a sus abuelos."
        ]
      },
      {
        "kind": "gap",
        "marks": 2,
        "prompt": "La asociación organiza clases de idiomas ___ y ___ .",
        "answers": [
          "gratuitas",
          "desde hace dos años"
        ]
      },
      {
        "kind": "sa",
        "marks": 1,
        "prompt": "¿Qué idioma se enseña además del árabe y el bengalí?",
        "answers": [
          "el quechua",
          "quechua"
        ]
      },
      {
        "kind": "sa",
        "marks": 1,
        "prompt": "¿Qué hay que llevar para inscribirse?",
        "answers": [
          "el libro de familia",
          "libro de familia"
        ]
      },
      {
        "kind": "sa",
        "marks": 1,
        "prompt": "¿Quién coordina la asociación?",
        "answers": [
          "Rafael Luna"
        ]
      },
      {
        "kind": "menciona",
        "marks": 2,
        "prompt": "Menciona dos actividades que organiza la asociación además de las clases.",
        "answers": [
          "una pequeña fiesta",
          "canciones y cuentos"
        ]
      }
    ]
  },
  {
    "id": "mock1-listen-b",
    "themeId": "social-organization",
    "subtopic": "Comunidad",
    "title": "Reparar en lugar de tirar",
    "intro": "Vas a escuchar una conversación entre una joven y la coordinadora de un taller de reparación de un barrio.",
    "script": "JOVEN: Hola, Carmen. Me han dicho que en el centro comunitario arreglan aparatos rotos. ¿Cómo funciona?\nCARMEN: Sí, es el Café de las Reparaciones. Cada primer sábado de mes traemos vecinos con radios, tostadoras o lámparas que no funcionan, y los voluntarios intentan arreglarlos gratis.\nJOVEN: ¿Y quiénes son los voluntarios?\nCARMEN: Sobre todo jubilados que trabajaron de electricistas o de mecánicos. Ellos enseñan a los jóvenes a usar las herramientas. Hace un año no había ningún adolescente en el taller, pero ahora vienen unos veinte cada mes.\nJOVEN: ¿Y por qué lo hacen?\nCARMEN: Para reducir la basura. Muchos aparatos se tiran aunque tengan arreglo. Además, la gente se conoce, y eso es importante en un barrio grande.\nJOVEN: ¿Puedo ser voluntaria?\nCARMEN: Claro, pero antes tienes que hacer un curso básico de seguridad eléctrica. Es gratis y dura dos tardes.",
    "totalMarks": 11,
    "items": [
      {
        "kind": "mc",
        "marks": 1,
        "prompt": "¿Cada cuánto se celebra el Café de las Reparaciones?",
        "options": [
          "Cada semana",
          "Cada primer sábado de mes",
          "Dos veces al año"
        ],
        "correct": "Cada primer sábado de mes"
      },
      {
        "kind": "mc",
        "marks": 1,
        "prompt": "¿Quiénes son sobre todo los voluntarios?",
        "options": [
          "Estudiantes universitarios",
          "Jubilados que trabajaron de electricistas o mecánicos",
          "Profesores de tecnología"
        ],
        "correct": "Jubilados que trabajaron de electricistas o mecánicos"
      },
      {
        "kind": "mc",
        "marks": 1,
        "prompt": "¿Por qué hacen esto, según Carmen?",
        "options": [
          "Para ganar dinero",
          "Para reducir la basura",
          "Para vender aparatos nuevos"
        ],
        "correct": "Para reducir la basura"
      },
      {
        "kind": "ms",
        "marks": 2,
        "prompt": "Escoge las dos frases verdaderas.",
        "options": [
          "Los aparatos se arreglan con un precio fijo.",
          "Hace un año no había ningún adolescente en el taller.",
          "Ahora vienen unos veinte adolescentes cada mes.",
          "La gente no se conoce en el barrio.",
          "Para ser voluntaria hay que hacer un curso de seguridad."
        ],
        "correct": [
          "Ahora vienen unos veinte adolescentes cada mes.",
          "Para ser voluntaria hay que hacer un curso de seguridad."
        ]
      },
      {
        "kind": "gap",
        "marks": 2,
        "prompt": "El curso básico de seguridad eléctrica es ___ y dura ___ tardes.",
        "answers": [
          "gratis",
          "dos"
        ]
      },
      {
        "kind": "sa",
        "marks": 1,
        "prompt": "¿Qué tipo de aparatos traen los vecinos?",
        "answers": [
          "radios, tostadoras o lámparas",
          "radios",
          "tostadoras"
        ]
      },
      {
        "kind": "sa",
        "marks": 1,
        "prompt": "¿Qué dice Carmen que es importante en un barrio grande?",
        "answers": [
          "que la gente se conoce",
          "conocerse"
        ]
      },
      {
        "kind": "menciona",
        "marks": 2,
        "prompt": "Menciona dos ventajas del taller que dice Carmen.",
        "answers": [
          "reducir la basura",
          "la gente se conoce",
          "arreglarlos gratis"
        ]
      }
    ]
  },
  {
    "id": "mock1-listen-c",
    "themeId": "sharing-planet",
    "subtopic": "El medio ambiente",
    "title": "El río que vuelve a respirar",
    "intro": "Vas a escuchar una entrevista con una bióloga sobre la recuperación de un río.",
    "script": "Hola, soy Elena Ibáñez, bióloga, y llevo ocho años estudiando el río Tajuña. Hace una década estaba muy contaminado por los vertidos de algunas fábricas y por el exceso de fertilizantes del campo. Los peces casi desaparecieron y el agua tenía un olor muy fuerte. Hoy la situación es distinta. Desde 2019, las fábricas deben tratar sus residuos antes de verter el agua, y los agricultores usan menos fertilizante cerca de las orillas. Lo más sorprendente es que han regresado las nutrias y varias especies de aves. Sin embargo, todavía queda mucho por hacer. Las sequías de verano son cada vez más largas y el caudal baja mucho. Por eso pedimos que se controle el consumo de agua en las huertas. Lo que más me emociona es ver a los niños del pueblo bañarse en el río, algo que no se veía desde hace años.",
    "totalMarks": 11,
    "items": [
      {
        "kind": "mc",
        "marks": 1,
        "prompt": "¿Qué causaba la contaminación del río hace diez años?",
        "options": [
          "Los vertidos de algunas fábricas y el exceso de fertilizantes",
          "Las presas construidas en el río",
          "La pesca excesiva"
        ],
        "correct": "Los vertidos de algunas fábricas y el exceso de fertilizantes"
      },
      {
        "kind": "mc",
        "marks": 1,
        "prompt": "¿Desde cuándo deben tratar sus residuos las fábricas?",
        "options": [
          "Desde 2019",
          "Desde 2010",
          "Desde 2024"
        ],
        "correct": "Desde 2019"
      },
      {
        "kind": "mc",
        "marks": 1,
        "prompt": "¿Qué animales han regresado al río?",
        "options": [
          "Ciervos y lobos",
          "Nutrias y aves",
          "Ranas y serpientes"
        ],
        "correct": "Nutrias y aves"
      },
      {
        "kind": "ms",
        "marks": 2,
        "prompt": "Escoge las dos frases verdaderas.",
        "options": [
          "Las sequías de verano son cada vez más cortas.",
          "Los agricultores usan menos fertilizante cerca de las orillas.",
          "El agua tenía un olor muy agradable.",
          "Los niños del pueblo vuelven a bañarse en el río.",
          "La bióloga lleva dos años estudiando el río."
        ],
        "correct": [
          "Los agricultores usan menos fertilizante cerca de las orillas.",
          "Los niños del pueblo vuelven a bañarse en el río."
        ]
      },
      {
        "kind": "gap",
        "marks": 2,
        "prompt": "Las sequías de verano son cada vez más ___ y el caudal ___ mucho.",
        "answers": [
          "largas",
          "baja"
        ]
      },
      {
        "kind": "sa",
        "marks": 1,
        "prompt": "¿Qué piden para las huertas?",
        "answers": [
          "controlar el consumo de agua",
          "que se controle el consumo de agua"
        ]
      },
      {
        "kind": "sa",
        "marks": 1,
        "prompt": "¿Qué especie de animal ha vuelto al río además de las aves?",
        "answers": [
          "las nutrias",
          "nutrias"
        ]
      },
      {
        "kind": "menciona",
        "marks": 2,
        "prompt": "Menciona dos problemas que todavía tiene el río.",
        "answers": [
          "las sequías de verano",
          "el caudal baja mucho",
          "el consumo de agua en las huertas"
        ]
      }
    ]
  }
];

export const MOCK_SETS: MockSet[] = [
  { id: "mock-1", title: "Mock Exam Set 1", reading: READING_1, listening: LISTENING_1 },
];

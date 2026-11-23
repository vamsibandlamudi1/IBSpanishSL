import { ReadingQuestion } from "./types";

/// Extra reading comprehension questions (3 per passage), generated with the AI
/// and checked against each passage: every true/false justification is a verbatim
/// quote from the text, and every multiple-choice answer is one of its options.
/// Merged into READING_PASSAGES in reading.ts.

export const EXTRA_READING_QUESTIONS: Record<string, ReadingQuestion[]> = {
  "reading-identities": [
    {"id": "reading-identities-x1", "type": "true-false", "prompt": "Sofía vive en Colombia.", "correctAnswer": "false", "justification": "Vivo en Miami, pero mis padres son de Colombia, así que crecí hablando dos idiomas: español en casa e inglés en el colegio."},
    {"id": "reading-identities-x2", "type": "mcq", "prompt": "¿Qué anima Sofía a hacer a otros jóvenes bilingües?", "correctAnswer": "sentirse orgullosos de su idioma", "options": ["sentirse orgullosos de su idioma", "dejar de hablar español en casa", "hablar solo inglés en el colegio", "evitar los intercambios escolares"]},
    {"id": "reading-identities-x3", "type": "short", "prompt": "¿En qué ciudad de Colombia estuvo Sofía durante el intercambio escolar?", "correctAnswer": "Bogotá"},
  ],
  "reading-human-ingenuity": [
    {"id": "reading-human-ingenuity-x1", "type": "true-false", "prompt": "Los robots domésticos son baratos y están al alcance de la mayoría de las familias.", "correctAnswer": "false", "justification": "Además, estos dispositivos todavía son muy caros para la mayoría de las familias."},
    {"id": "reading-human-ingenuity-x2", "type": "mcq", "prompt": "Según el texto, ¿por qué la robótica doméstica puede ser especialmente útil para las personas mayores?", "correctAnswer": "Les permite vivir de forma más independiente", "options": ["Les permite vivir de forma más independiente", "Reemplazan completamente a los cuidadores humanos", "Son gratuitos en los hogares de ancianos"]},
    {"id": "reading-human-ingenuity-x3", "type": "short", "prompt": "¿En qué país ya utilizan robots sociales en hogares de ancianos?", "correctAnswer": "Japón"},
  ],
  "reading-experiences": [
    {"id": "reading-experiences-x1", "type": "true-false", "prompt": "La narradora y sus compañeros llegaron a Cusco hace una semana.", "correctAnswer": "false", "justification": "Llegamos a Cusco hace diez días, cansados pero emocionados."},
    {"id": "reading-experiences-x2", "type": "mcq", "prompt": "¿Cómo se sintió la narradora al ver las ruinas de Machu Picchu?", "correctAnswer": "Muy emocionada, con lágrimas en los ojos", "options": ["Con miedo por la altura", "Muy emocionada, con lágrimas en los ojos", "Aburrida por la caminata", "Enojada por la niebla"]},
    {"id": "reading-experiences-x3", "type": "short", "prompt": "¿Qué va a extrañar la narradora cuando vuelva a casa?", "correctAnswer": "este lugar"},
  ],
  "reading-social-organization": [
    {"id": "reading-social-organization-x1", "type": "true-false", "prompt": "Daniela cree que los jóvenes deben participar activamente en la sociedad.", "correctAnswer": "true", "justification": "considero que es fundamental que los jóvenes participemos activamente en la sociedad, en lugar de esperar a ser adultos para contribuir."},
    {"id": "reading-social-organization-x2", "type": "mcq", "prompt": "¿Qué solicita Daniela al señor Ramírez en su carta?", "correctAnswer": "Información sobre el proceso de selección y los siguientes pasos", "options": ["Información sobre el proceso de selección y los siguientes pasos", "Un contrato de trabajo en la organización", "Una beca para continuar sus estudios", "Un cambio en el horario de los sábados"]},
    {"id": "reading-social-organization-x3", "type": "short", "prompt": "¿Cómo se llama el programa que menciona la organización en su página web para el que Daniela cree que sus habilidades serían útiles?", "correctAnswer": "programa de apoyo escolar"},
  ],
  "reading-sharing-planet": [
    {"id": "reading-sharing-planet-x1", "type": "true-false", "prompt": "Según el autor, es fácil para los jóvenes renunciar a comprar ropa nueva cada mes.", "correctAnswer": "false", "justification": "Es fácil compartir un artículo sobre la contaminación en redes sociales, pero es más difícil renunciar a comprar ropa nueva cada mes o llevar siempre una botella reutilizable."},
    {"id": "reading-sharing-planet-x2", "type": "mcq", "prompt": "¿Qué opina el autor sobre las decisiones personales frente a la contaminación?", "correctAnswer": "Que sí importan, aunque la responsabilidad no recae solo en los individuos.", "options": ["Que no importan, porque las empresas son las únicas culpables.", "Que no importan, porque los gobiernos deben actuar solos.", "Que sí importan, aunque la responsabilidad no recae solo en los individuos.", "Que basta con tener buenas intenciones para proteger el planeta."]},
    {"id": "reading-sharing-planet-x3", "type": "short", "prompt": "Según el texto, ¿qué requiere el verdadero cambio?", "correctAnswer": "pequeñas acciones diarias"},
  ],
  "reading-experiences-2": [
    {"id": "reading-experiences-2-x1", "type": "true-false", "prompt": "Los participantes dormirán en hoteles de lujo durante el programa.", "correctAnswer": "false", "justification": "Nuestro programa de dos semanas te lleva a través de la selva amazónica, donde dormirás en cabañas ecológicas, navegarás en canoa por el río y aprenderás sobre las plantas medicinales con guías indígenas locales."},
    {"id": "reading-experiences-2-x2", "type": "mcq", "prompt": "¿Con quién aprenderán los participantes sobre las plantas medicinales?", "correctAnswer": "Con guías indígenas locales", "options": ["Con guías indígenas locales", "Con científicos extranjeros", "Con profesores de biología", "Con los padres de los jóvenes"]},
    {"id": "reading-experiences-2-x3", "type": "short", "prompt": "¿Qué medio de transporte se usa para navegar por el río?", "correctAnswer": "canoa"},
  ],
  "reading-identities-2": [
    {"id": "reading-identities-2-x1", "type": "true-false", "prompt": "En el colegio, Marcos habla árabe.", "correctAnswer": "false", "justification": "En el colegio, hablo español y vivo como cualquier adolescente español."},
    {"id": "reading-identities-2-x2", "type": "mcq", "prompt": "¿Qué consejo da Marcos a otros jóvenes en su situación?", "correctAnswer": "Que su identidad no tiene que ser simple", "options": ["Que elijan una sola cultura", "Que oculten sus tradiciones", "Que su identidad no tiene que ser simple", "Que vivan solo en el colegio"]},
    {"id": "reading-identities-2-x3", "type": "short", "prompt": "¿Qué siente Marcos a veces sobre su vida?", "correctAnswer": "dos vidas diferentes"},
  ],
  "reading-human-ingenuity-2": [
    {"id": "reading-human-ingenuity-2-x1", "type": "true-false", "prompt": "Elena_R cree que la inteligencia artificial destruirá todos los trabajos actuales sin crear ninguno nuevo.", "correctAnswer": "false", "justification": "creo que la IA también va a crear nuevos tipos de trabajo que ni siquiera imaginamos todavía."},
    {"id": "reading-human-ingenuity-2-x2", "type": "mcq", "prompt": "Según Carlos_92, ¿qué es importante hacer desde ahora con la inteligencia artificial?", "correctAnswer": "Aprender a usar estas herramientas de forma responsable", "options": ["Aprender a usar estas herramientas de forma responsable", "Esperar a que sea demasiado tarde", "Ignorar la inteligencia artificial en el colegio", "Prohibir los programas de inteligencia artificial"]},
    {"id": "reading-human-ingenuity-2-x3", "type": "short", "prompt": "Según Elena_R, ¿qué va a crear la inteligencia artificial?", "correctAnswer": "nuevos tipos de trabajo"},
  ],
  "reading-sharing-planet-2": [
    {"id": "reading-sharing-planet-2-x1", "type": "true-false", "prompt": "Las autoridades ecuatorianas no han tomado ninguna medida para reducir el impacto del turismo en las Galápagos.", "correctAnswer": "false", "justification": "Las autoridades ecuatorianas han implementado varias medidas para reducir este impacto, como limitar el número de visitantes por sitio y exigir que todos los turistas viajen acompañados de un guía certificado."},
    {"id": "reading-sharing-planet-2-x2", "type": "mcq", "prompt": "¿Qué consecuencia tiene el crecimiento de la población humana en las islas, según el texto?", "correctAnswer": "Aumenta la producción de basura y el consumo de agua.", "options": ["Disminuye la producción de basura y el consumo de agua.", "Aumenta la producción de basura y el consumo de agua.", "Se reduce el número de especies invasoras.", "Los turistas dejan de visitar las islas."]},
    {"id": "reading-sharing-planet-2-x3", "type": "short", "prompt": "Según los científicos, ¿qué se debe priorizar en lugar del entretenimiento?", "correctAnswer": "la educación ambiental"},
  ],
  "reading-social-organization-2": [
    {"id": "reading-social-organization-2-x1", "type": "true-false", "prompt": "Según el texto, el primer paso para organizar la campaña es elegir una causa que a uno le importe de verdad.", "correctAnswer": "true", "justification": "Primero, elige una causa que te importe de verdad, como ayudar a personas mayores, proteger el medio ambiente o apoyar a familias con pocos recursos."},
    {"id": "reading-social-organization-2-x2", "type": "mcq", "prompt": "¿Qué pueden ofrecer el profesor o la dirección del colegio, según el texto?", "correctAnswer": "espacio, materiales y contactos útiles", "options": ["espacio, materiales y contactos útiles", "dinero para el transporte de los voluntarios", "uniformes y certificados para todos los alumnos", "la organización de las clases durante la campaña"]},
    {"id": "reading-social-organization-2-x3", "type": "short", "prompt": "¿Qué tipo de anuncios se mencionan para promocionar la campaña, además de los carteles?", "correctAnswer": "anuncios en redes sociales"},
  ],
  "reading-identities-3": [
    {"id": "reading-identities-3-x1", "type": "true-false", "prompt": "La estudiante llegó al colegio hace cinco años.", "correctAnswer": "false", "justification": "Cuando llegué a este colegio hace tres años, me sentía fuera de lugar."},
    {"id": "reading-identities-3-x2", "type": "mcq", "prompt": "¿Qué les pide la oradora a los estudiantes al final del discurso?", "correctAnswer": "Que no tengan miedo de mostrar quiénes son realmente", "options": ["Que no tengan miedo de mostrar quiénes son realmente", "Que aprendan más idiomas en el colegio", "Que celebren solo sus propias festividades", "Que cambien de colegio si se sienten fuera de lugar"]},
    {"id": "reading-identities-3-x3", "type": "short", "prompt": "Según el discurso, ¿qué ocurre cuando compartimos nuestras tradiciones, nuestra comida y nuestras historias?", "correctAnswer": "aprendemos algo nuevo"},
  ],
  "reading-experiences-3": [
    {"id": "reading-experiences-3-x1", "type": "true-false", "prompt": "Según Marta, los lagos de la Patagonia son de color gris.", "correctAnswer": "false", "justification": "Llevamos cuatro días aquí y el paisaje es simplemente espectacular: montañas nevadas, lagos de color turquesa y un silencio que no había experimentado nunca en la ciudad."},
    {"id": "reading-experiences-3-x2", "type": "mcq", "prompt": "¿Adónde irán Marta y su familia al día siguiente?", "correctAnswer": "A otro pueblo más al sur", "options": ["A otro pueblo más al sur", "A la ciudad donde vivían", "A un glaciar cercano", "A una montaña nevada del norte"]},
    {"id": "reading-experiences-3-x3", "type": "short", "prompt": "¿Qué comieron Marta y su familia cuando llegaron al glaciar?", "correctAnswer": "un sándwich"},
  ],
  "reading-social-organization-3": [
    {"id": "reading-social-organization-3-x1", "type": "true-false", "prompt": "Para participar en el club de debate hay que pagar una cuota.", "correctAnswer": "false", "justification": "¡No, la participación es totalmente gratuita!"},
    {"id": "reading-social-organization-3-x2", "type": "mcq", "prompt": "¿Qué participará el club en marzo?", "correctAnswer": "Una competición interescolar", "options": ["Una competición interescolar", "Un concurso de fotografía", "Una excursión al museo"]},
    {"id": "reading-social-organization-3-x3", "type": "short", "prompt": "¿Qué palabras hay que comentar para apuntarse al club?", "correctAnswer": "YO VOY"},
  ],
  "reading-sharing-planet-3": [
    {"id": "reading-sharing-planet-3-x1", "type": "true-false", "prompt": "La jornada de reforestación se celebró un domingo.", "correctAnswer": "false", "justification": "Un grupo de más de doscientos estudiantes de institutos de la región participó el pasado sábado en una jornada de reforestación urbana, plantando más de mil árboles en distintos parques de la ciudad."},
    {"id": "reading-sharing-planet-3-x2", "type": "mcq", "prompt": "¿Cuál era el objetivo principal de la iniciativa organizada por los clubes ambientales escolares?", "correctAnswer": "Concienciar a la población sobre la importancia de los espacios verdes urbanos", "options": ["Concienciar a la población sobre la importancia de los espacios verdes urbanos", "Recaudar fondos para el presupuesto municipal", "Promover el uso del transporte público en la ciudad", "Construir un nuevo parque en el centro de la ciudad"]},
    {"id": "reading-sharing-planet-3-x3", "type": "short", "prompt": "¿Cuántos años tiene Ana Belén Ruiz?", "correctAnswer": "diecisiete años"},
  ],
  "reading-human-ingenuity-3": [
    {"id": "reading-human-ingenuity-3-x1", "type": "true-false", "prompt": "La aplicación EcoRuta muestra únicamente la opción de caminar para cada trayecto.", "correctAnswer": "false", "justification": "Lo primero que me gustó fue lo fácil que es de usar: solo tienes que introducir tu punto de partida y tu destino, y la aplicación te muestra varias opciones (bicicleta, transporte público, caminar o coche compartido) junto con el tiempo estimado y la cantidad de CO2 que ahorrarías."},
    {"id": "reading-human-ingenuity-3-x2", "type": "mcq", "prompt": "¿Por qué el autor considera insegura una de las rutas en bicicleta que le recomendó la aplicación?", "correctAnswer": "Pasaba por una carretera muy transitada sin carril bici.", "options": ["Pasaba por una carretera muy transitada sin carril bici.", "Era mucho más larga que las demás opciones.", "No aparecía el tiempo estimado del trayecto.", "La aplicación no permitía introducir el destino."]},
    {"id": "reading-human-ingenuity-3-x3", "type": "short", "prompt": "¿Qué recurso del teléfono consume bastante la aplicación, según el autor?", "correctAnswer": "la batería"},
  ],
  "reading-identities-4": [
    {"id": "reading-identities-4-x1", "type": "true-false", "prompt": "Refugio Verde abrió sus puertas en 2015.", "correctAnswer": "false", "justification": "Más de dos mil personas han visitado Refugio Verde desde su apertura en 2019, y el 90% afirma que repetiría la experiencia."},
    {"id": "reading-identities-4-x2", "type": "mcq", "prompt": "¿Qué descuento se ofrece si se reserva una plaza antes de fin de mes?", "correctAnswer": "un quince por ciento", "options": ["un cinco por ciento", "un diez por ciento", "un quince por ciento", "un veinte por ciento"]},
    {"id": "reading-identities-4-x3", "type": "short", "prompt": "¿A qué hora del día se celebran las clases de yoga?", "correctAnswer": "al amanecer"},
  ],
  "reading-identities-5": [
    {"id": "reading-identities-5-x1", "type": "true-false", "prompt": "El 86% de los encuestados reconoce mirar redes sociales en la cama.", "correctAnswer": "false", "justification": "Según los resultados, el uso del móvil antes de dormir es el principal culpable: el 68% de los encuestados reconoce mirar redes sociales en la cama."},
    {"id": "reading-identities-5-x2", "type": "mcq", "prompt": "¿Cuántas horas duermen en promedio los adolescentes españoles por noche, según el estudio?", "correctAnswer": "seis horas y media", "options": ["cinco horas y media", "seis horas y media", "siete horas y media", "ocho horas"]},
    {"id": "reading-identities-5-x3", "type": "short", "prompt": "¿Cómo se llama la doctora coautora del estudio que explica la importancia de la calidad del sueño?", "correctAnswer": "Elena Roig"},
  ],
  "reading-identities-6": [
    {"id": "reading-identities-6-x1", "type": "true-false", "prompt": "En el colegio de Texas, las clases de Marisol eran en español.", "correctAnswer": "false", "justification": "En el colegio, en cambio, todo era en inglés, y durante años sentí que vivía entre dos identidades sin pertenecer del todo a ninguna."},
    {"id": "reading-identities-6-x2", "type": "mcq", "prompt": "¿Qué piensa Marisol ahora sobre ser bilingüe?", "correctAnswer": "Que significa tener acceso completo a ambas culturas", "options": ["Que es una señal de que no pertenece a ninguna cultura", "Que significa tener acceso completo a ambas culturas", "Que solo es útil para hablar con la familia en México", "Que debe elegir un solo idioma para sentirse segura"]},
    {"id": "reading-identities-6-x3", "type": "short", "prompt": "¿En qué ciudad vive la familia de Marisol en México?", "correctAnswer": "Guadalajara"},
  ],
  "reading-identities-7": [
    {"id": "reading-identities-7-x1", "type": "true-false", "prompt": "El autor afirma que la pregunta sobre por qué comemos lo que comemos resulta cómoda para todas las personas.", "correctAnswer": "false", "justification": "Esa pregunta, incómoda para algunos, es en el fondo una pregunta sobre quiénes somos y en qué creemos."},
    {"id": "reading-identities-7-x2", "type": "mcq", "prompt": "¿Por qué dejó de comer carne el autor?", "correctAnswer": "Porque sus valores cambiaron", "options": ["Porque sus valores cambiaron", "Por un consejo de su médico", "Por razones económicas", "Porque su familia se lo pidió"]},
    {"id": "reading-identities-7-x3", "type": "short", "prompt": "¿Qué sentimiento mezclan las personas al preguntarle al autor por su decisión?", "correctAnswer": "curiosidad y sospecha"},
  ],
  "reading-experiences-4": [
    {"id": "reading-experiences-4-x1", "type": "true-false", "prompt": "Marta Gil y sus amigas llevaban un mapa detallado y un guía durante la ruta.", "correctAnswer": "false", "justification": "No llevábamos guía ni mapa detallado; solo una brújula y muchas ganas de perdernos un poco"},
    {"id": "reading-experiences-4-x2", "type": "mcq", "prompt": "Según Marta, ¿qué fue lo más difícil del viaje?", "correctAnswer": "Aprender a convivir con la incertidumbre", "options": ["El cansancio físico", "Aprender a convivir con la incertidumbre", "El precio de la comida", "Encontrar el camino en la ciudad de Huarán"]},
    {"id": "reading-experiences-4-x3", "type": "short", "prompt": "¿En qué ciudad peruana comienza la ruta de ocho días?", "correctAnswer": "Huarán"},
  ],
  "reading-identities-8": [
    {"id": "reading-identities-8-x1", "type": "true-false", "prompt": "El informe completo ya está disponible en la página web del Observatorio.", "correctAnswer": "false", "justification": "El informe completo, con datos desglosados por comunidad autónoma, estará disponible en la página web del Observatorio a partir del próximo mes."},
    {"id": "reading-identities-8-x2", "type": "mcq", "prompt": "¿Qué propone el Observatorio que hagan los fabricantes de aplicaciones?", "correctAnswer": "Limitar las notificaciones dirigidas a menores de edad", "options": ["Limitar las notificaciones dirigidas a menores de edad", "Crear aplicaciones educativas gratuitas para las escuelas", "Eliminar los videojuegos de las tiendas digitales", "Reducir el precio de los dispositivos digitales"]},
    {"id": "reading-identities-8-x3", "type": "short", "prompt": "¿En qué porcentaje aumentó el tiempo medio de pantalla respecto al informe anterior?", "correctAnswer": "22%"},
  ],
  "reading-experiences-5": [
    {"id": "reading-experiences-5-x1", "type": "true-false", "prompt": "Nico y su pareja piensan celebrar el Año Nuevo en Montevideo este año.", "correctAnswer": "false", "justification": "Sin embargo, este año mi pareja y yo pensamos viajar a otro país para vivir la fiesta de otra manera."},
    {"id": "reading-experiences-5-x2", "type": "mcq", "prompt": "¿Por qué es común salir a la calle con una maleta vacía en Uruguay?", "correctAnswer": "Para que el próximo año esté lleno de viajes", "options": ["Para que el próximo año esté lleno de viajes", "Para dejar atrás los problemas del año viejo", "Para pedir un deseo por cada mes del año", "Para celebrar la medianoche con los vecinos"]},
    {"id": "reading-experiences-5-x3", "type": "short", "prompt": "¿Qué tipo de celebración le interesa especialmente a Nico?", "correctAnswer": "actividades al aire libre"},
  ],
  "reading-experiences-6": [
    {"id": "reading-experiences-6-x1", "type": "true-false", "prompt": "La reunión que solicita el consejo estudiantil debe realizarse después del quince de septiembre.", "correctAnswer": "false", "justification": "Le escribo en representación del consejo estudiantil de último año para solicitar una reunión antes del quince de septiembre, con el fin de organizar los detalles de la ceremonia de graduación de este curso."},
    {"id": "reading-experiences-6-x2", "type": "mcq", "prompt": "¿Para qué quiere el consejo estudiantil utilizar el dinero que ha recaudado?", "correctAnswer": "Para la decoración y un pequeño obsequio conmemorativo para cada graduado", "options": ["Para la decoración y un pequeño obsequio conmemorativo para cada graduado", "Para pagar el alquiler del gimnasio durante la ceremonia", "Para organizar un viaje de fin de curso para los estudiantes", "Para becas destinadas a estudiantes de primer año"]},
    {"id": "reading-experiences-6-x3", "type": "short", "prompt": "¿A quién va dirigida la carta?", "correctAnswer": "directora Robles"},
  ],
  "reading-experiences-8": [
    {"id": "reading-experiences-8-x1", "type": "true-false", "prompt": "Los estudiantes visitaban la residencia dos veces por semana.", "correctAnswer": "false", "justification": "Durante doce semanas, los estudiantes visitaron la residencia una vez por semana para realizar entrevistas grabadas."},
    {"id": "reading-experiences-8-x2", "type": "mcq", "prompt": "¿Qué se propone hacer con una selección de los relatos?", "correctAnswer": "Publicarlos en un pequeño libro conmemorativo para compartir con las familias", "options": ["Publicarlos en un pequeño libro conmemorativo para compartir con las familias", "Grabarlos en un documental para la televisión local", "Archivarlos en la biblioteca del colegio", "Leerlos en una exposición pública dentro de la residencia"]},
    {"id": "reading-experiences-8-x3", "type": "short", "prompt": "¿A cuántos residentes se propone ampliar el número de participantes?", "correctAnswer": "cuarenta"},
  ],
  "reading-human-ingenuity-4": [
    {"id": "reading-human-ingenuity-4-x1", "type": "true-false", "prompt": "Marta tiene derecho a la garantía del portátil durante un año.", "correctAnswer": "false", "justification": "como todavía conservo el recibo y la garantía cubre dos años, les pido que sustituyan el portátil por uno nuevo o que me devuelvan el dinero."},
    {"id": "reading-human-ingenuity-4-x2", "type": "mcq", "prompt": "¿Qué hizo Marta el lunes pasado con respecto al problema del portátil?", "correctAnswer": "Llamó al servicio técnico", "options": ["Llamó al servicio técnico", "Devolvió el portátil a la tienda", "Escribió a la compañía de publicidad", "Compró un cargador nuevo"]},
    {"id": "reading-human-ingenuity-4-x3", "type": "short", "prompt": "¿Cuál es el modelo del portátil?", "correctAnswer": "Aurora 15"},
  ],
  "reading-experiences-7": [
    {"id": "reading-experiences-7-x1", "type": "true-false", "prompt": "En Canadá, la gente se saluda con más efusividad en la calle que en Colombia.", "correctAnswer": "false", "justification": "Aquí todo es más reservado."},
    {"id": "reading-experiences-7-x2", "type": "mcq", "prompt": "Según Rosa, ¿qué le enseñó emigrar?", "correctAnswer": "a empezar de nuevo", "options": ["a empezar de nuevo", "a hablar varios idiomas", "a ahorrar dinero sin esfuerzo", "a dejar de extrañar su país"]},
    {"id": "reading-experiences-7-x3", "type": "short", "prompt": "¿Qué es lo que más extraña Rosa de Colombia?", "correctAnswer": "La comida"},
  ],
  "reading-human-ingenuity-5": [
    {"id": "reading-human-ingenuity-5-x1", "type": "true-false", "prompt": "Daniela compró la entrada para el festival el mismo día de la proyección.", "correctAnswer": "false", "justification": "Compré la entrada hace un mes, cuando todavía costaba solo doce euros, porque después subió el precio a dieciocho."},
    {"id": "reading-human-ingenuity-5-x2", "type": "mcq", "prompt": "¿A qué hora llegó Daniela al cine?", "correctAnswer": "a las seis de la tarde", "options": ["a las cinco de la tarde", "a las seis de la tarde", "a las siete de la tarde", "a las ocho de la tarde"]},
    {"id": "reading-human-ingenuity-5-x3", "type": "short", "prompt": "¿Cuántos años tenía el director que habló en el coloquio?", "correctAnswer": "diecinueve años"},
  ],
  "reading-human-ingenuity-7": [
    {"id": "reading-human-ingenuity-7-x1", "type": "true-false", "prompt": "La bicicleta eléctrica se recarga completamente en dos horas.", "correctAnswer": "false", "justification": "La batería dura hasta cincuenta kilómetros con una sola carga y se recarga completamente en tres horas."},
    {"id": "reading-human-ingenuity-7-x2", "type": "mcq", "prompt": "¿Qué función tiene la aplicación móvil gratuita que incluyen todas las bicicletas?", "correctAnswer": "Muestra la ruta más rápida y evita el tráfico", "options": ["Muestra la ruta más rápida y evita el tráfico", "Controla la velocidad del pedaleo", "Avisa del precio de la gasolina", "Reserva plazas de aparcamiento"]},
    {"id": "reading-human-ingenuity-7-x3", "type": "short", "prompt": "¿Cuántos clientes ya han cambiado el coche por la bicicleta eléctrica?", "correctAnswer": "Más de dos mil"},
  ],
  "reading-human-ingenuity-8": [
    {"id": "reading-human-ingenuity-8-x1", "type": "true-false", "prompt": "El proyecto de Sofía empezó como una idea de su profesor de tecnología.", "correctAnswer": "false", "justification": "Vi que en el patio de mi instituto se desperdiciaba mucha agua de lluvia y pensé que se podía aprovechar para el huerto escolar."},
    {"id": "reading-human-ingenuity-8-x2", "type": "mcq", "prompt": "¿Qué vio Sofía en el patio de su instituto que la motivó a crear su sistema?", "correctAnswer": "Mucha agua de lluvia que se desperdiciaba", "options": ["Plantas que se secaban por falta de riego", "Mucha agua de lluvia que se desperdiciaba", "Un depósito roto que había que reparar", "Un huerto escolar que nadie cuidaba"]},
    {"id": "reading-human-ingenuity-8-x3", "type": "short", "prompt": "¿Con qué se atascaban las primeras versiones del filtro?", "correctAnswer": "con las hojas"},
  ],
  "reading-human-ingenuity-6": [
    {"id": "reading-human-ingenuity-6-x1", "type": "true-false", "prompt": "Según el autor, prohibir el uso del móvil en las aulas resuelve el problema de fondo.", "correctAnswer": "false", "justification": "Algunos defienden que la solución está en prohibir el uso del móvil en las aulas, pero esta medida, aunque bienintencionada, no resuelve el problema de fondo: hemos diseñado aplicaciones capaces de captar nuestra atención durante horas, y luego nos sorprende que la gente prefiera un vídeo de treinta segundos a un libro."},
    {"id": "reading-human-ingenuity-6-x2", "type": "mcq", "prompt": "Según el autor, ¿qué se debe enseñar desde pequeños?", "correctAnswer": "a usar la tecnología con criterio", "options": ["a usar la tecnología con criterio", "a prohibir el uso de las redes sociales", "a preferir los libros a los vídeos cortos", "a comparar la propia vida con la de otros"]},
    {"id": "reading-human-ingenuity-6-x3", "type": "short", "prompt": "¿Con qué comportamiento compara el autor el aprendizaje del uso de la tecnología?", "correctAnswer": "cruzar la calle"},
  ],
  "reading-social-organization-4": [
    {"id": "reading-social-organization-4-x1", "type": "true-false", "prompt": "La autora da clases a niños en una escuela primaria.", "correctAnswer": "false", "justification": "Doy clases de lectura y escritura a personas adultas que, por diferentes razones, no terminaron la escuela primaria."},
    {"id": "reading-social-organization-4-x2", "type": "mcq", "prompt": "¿Cuánto tiempo trabajaron Rosa y la autora juntas?", "correctAnswer": "Ocho meses", "options": ["Ocho meses", "Seis meses", "Un año", "Dos años"]},
    {"id": "reading-social-organization-4-x3", "type": "short", "prompt": "¿Cuántas personas hay en la lista de espera del centro?", "correctAnswer": "veinte personas"},
  ],
  "reading-social-organization-6": [
    {"id": "reading-social-organization-6-x1", "type": "true-false", "prompt": "La asociación de vecinos instaló por sí misma los bancos nuevos del parque central.", "correctAnswer": "false", "justification": "Conseguimos que el ayuntamiento instalara bancos nuevos y una zona de juegos infantiles."},
    {"id": "reading-social-organization-6-x2", "type": "mcq", "prompt": "¿Qué herramienta ayudó a que más vecinos participaran en las reuniones y eventos?", "correctAnswer": "Un grupo de mensajería", "options": ["Un grupo de mensajería", "Carteles en la plaza del barrio", "Un periódico local", "Llamadas telefónicas a cada vecino"]},
    {"id": "reading-social-organization-6-x3", "type": "short", "prompt": "¿Qué quieren establecer con el ayuntamiento para reducir el ruido nocturno de los bares?", "correctAnswer": "horarios más estrictos"},
  ],
  "reading-social-organization-5": [
    {"id": "reading-social-organization-5-x1", "type": "true-false", "prompt": "El autor afirma que el teletrabajo no tiene ningún beneficio.", "correctAnswer": "false", "justification": "En mi opinión, el teletrabajo trae beneficios innegables."},
    {"id": "reading-social-organization-5-x2", "type": "mcq", "prompt": "¿Por qué dice el autor que rinde mejor cuando trabaja desde casa?", "correctAnswer": "Porque puede elegir su propio horario", "options": ["Porque puede elegir su propio horario", "Porque no tiene compañeros que lo distraigan", "Porque la empresa le paga un salario más alto", "Porque vive cerca de la oficina"]},
    {"id": "reading-social-organization-5-x3", "type": "short", "prompt": "¿Qué confiesan algunas personas que trabajan desde casa?", "correctAnswer": "Sentirse más solas"},
  ],
  "reading-social-organization-7": [
    {"id": "reading-social-organization-7-x1", "type": "true-false", "prompt": "La medida de las cámaras de vigilancia entrará en vigor en septiembre.", "correctAnswer": "false", "justification": "La medida, que entrará en vigor en octubre, busca reducir los robos menores, que según datos de la policía local aumentaron un catorce por ciento el año pasado."},
    {"id": "reading-social-organization-7-x2", "type": "mcq", "prompt": "¿Cuál es el objetivo principal del ayuntamiento con la instalación de las cámaras?", "correctAnswer": "Reducir los robos menores", "options": ["Aumentar el turismo en la ciudad", "Reducir los robos menores", "Sustituir el trabajo de la policía", "Disminuir el número de comerciantes del centro"]},
    {"id": "reading-social-organization-7-x3", "type": "short", "prompt": "¿Cuántos concejales votaron en contra de la propuesta?", "correctAnswer": "siete"},
  ],
  "reading-social-organization-8": [
    {"id": "reading-social-organization-8-x1", "type": "true-false", "prompt": "Nico se mudó a otra ciudad por motivos personales, no de trabajo.", "correctAnswer": "false", "justification": "Hace cuatro años me mudé a otra ciudad por motivos de trabajo y, desde entonces, mi mejor amigo de la infancia y yo solo hablamos por videollamada o por mensajes."},
    {"id": "reading-social-organization-8-x2", "type": "mcq", "prompt": "¿Cómo describe Nico el momento en que se reencuentra con su mejor amigo en persona?", "correctAnswer": "Como si no hubiera pasado el tiempo", "options": ["Como si no hubiera pasado el tiempo", "Con cierta incomodidad al principio", "Como un encuentro que le produce tristeza", "Como una situación siempre tensa"]},
    {"id": "reading-social-organization-8-x3", "type": "short", "prompt": "¿Qué medios usan Nico y su mejor amigo para comunicarse a distancia?", "correctAnswer": "videollamada o mensajes"},
  ],
  "reading-sharing-planet-4": [
    {"id": "reading-sharing-planet-4-x1", "type": "true-false", "prompt": "La vendedora del mercado se negó a ayudar a la autora cuando llevó sus propias bolsas y su frasco.", "correctAnswer": "false", "justification": "La vendedora se sorprendió un poco, pero me ayudó sin problema."},
    {"id": "reading-sharing-planet-4-x2", "type": "mcq", "prompt": "¿Qué decidió llevar la autora en vez de comprar botellas de plástico?", "correctAnswer": "una botella de agua reutilizable", "options": ["una botella de agua reutilizable", "un termo de café", "una bolsa de papel", "un vaso desechable"]},
    {"id": "reading-sharing-planet-4-x3", "type": "short", "prompt": "¿Qué fruta pone la autora como ejemplo de las que ya tienen su propia piel?", "correctAnswer": "los plátanos"},
  ],
  "reading-sharing-planet-5": [
    {"id": "reading-sharing-planet-5-x1", "type": "true-false", "prompt": "La fiesta de bienvenida se organizó por la mañana.", "correctAnswer": "false", "justification": "Por la tarde organizamos una pequeña fiesta de bienvenida con comida de varios países."},
    {"id": "reading-sharing-planet-5-x2", "type": "mcq", "prompt": "¿Con qué ayuda el voluntario a las familias recién llegadas?", "correctAnswer": "Rellenar formularios y encontrar clases de español gratuitas", "options": ["Rellenar formularios y encontrar clases de español gratuitas", "Conseguir un trabajo para los adultos", "Dar clases de matemáticas en una escuela", "Organizar el transporte desde el aeropuerto"]},
    {"id": "reading-sharing-planet-5-x3", "type": "short", "prompt": "¿Cuánto tiempo esperan muchas familias para conseguir una plaza en un curso?", "correctAnswer": "meses"},
  ],
  "reading-sharing-planet-6": [
    {"id": "reading-sharing-planet-6-x1", "type": "true-false", "prompt": "Los artistas locales cobrarán honorarios al ayuntamiento por diseñar el monumento.", "correctAnswer": "false", "justification": "Nuestra asociación ha reunido más de mil quinientas firmas de vecinos que apoyan esta iniciativa, y varios artistas locales se han ofrecido a diseñar la obra sin cobrar honorarios."},
    {"id": "reading-sharing-planet-6-x2", "type": "mcq", "prompt": "¿Dónde propone la asociación que se construya el monumento?", "correctAnswer": "En el parque central", "options": ["En el parque central", "En la plaza del ayuntamiento", "En el cementerio municipal", "En la estación de tren"]},
    {"id": "reading-sharing-planet-6-x3", "type": "short", "prompt": "¿Cómo se llama el presidente de la Asociación Juvenil por la Paz?", "correctAnswer": "Carlos Reyes"},
  ],
  "reading-sharing-planet-7": [
    {"id": "reading-sharing-planet-7-x1", "type": "true-false", "prompt": "Según el texto, en una misma manzana de una gran ciudad solo se pueden encontrar restaurantes de cocina española.", "correctAnswer": "false", "justification": "En una misma manzana es posible encontrar un restaurante japonés, una pizzería italiana, un puesto de tacos mexicanos y una tienda de especias indias."},
    {"id": "reading-sharing-planet-7-x2", "type": "mcq", "prompt": "¿Qué sostienen otros, según el texto, sobre el intercambio cultural a través de la comida?", "correctAnswer": "Fomenta la comprensión entre pueblos distintos", "options": ["Fomenta la comprensión entre pueblos distintos", "Destruye por completo las tradiciones locales", "No tiene ningún efecto en las personas", "Beneficia solo a los turistas"]},
    {"id": "reading-sharing-planet-7-x3", "type": "short", "prompt": "¿Qué pueden conocer hoy millones de personas sin salir de su propio barrio?", "correctAnswer": "sabores de otras culturas"},
  ],
  "reading-identities-10": [
    {"id": "reading-identities-10-x1", "type": "true-false", "prompt": "Javier afirma que cocinar en casa es una pérdida de tiempo.", "correctAnswer": "false", "justification": "Que cocinar en casa no es una pérdida de tiempo, sino una inversión en salud."},
    {"id": "reading-identities-10-x2", "type": "mcq", "prompt": "¿Qué opinaba Javier de los platos de la dieta mediterránea al principio?", "correctAnswer": "Le parecían aburridos.", "options": ["Le parecían aburridos.", "Le encantaban desde el primer momento.", "Le resultaban muy difíciles de preparar.", "Le daban igual y no los probaba."]},
    {"id": "reading-identities-10-x3", "type": "short", "prompt": "¿Qué síntoma sufrió Javier durante el primer semestre?", "correctAnswer": "fatiga constante"},
  ],
  "reading-identities-9": [
    {"id": "reading-identities-9-x1", "type": "true-false", "prompt": "Un setenta por ciento de los estudiantes utiliza las redes sociales para mantener el contacto con sus amigos.", "correctAnswer": "true", "justification": "El informe revela que las redes sociales juegan un papel ambivalente en la vida diaria de los estudiantes: mientras que un setenta por ciento afirma que las utiliza para mantener el contacto con sus amigos, más de la mitad admite que la comparación constante con vidas aparentemente ideales de otros usuarios genera baja autoestima e insatisfacción corporal."},
    {"id": "reading-identities-9-x2", "type": "mcq", "prompt": "¿Qué recomienda la Consejería a los centros educativos?", "correctAnswer": "Implementar programas de educación emocional", "options": ["Implementar programas de educación emocional", "Aumentar el número de exámenes finales", "Prohibir todas las actividades de ocio al aire libre", "Eliminar las clases de educación física"]},
    {"id": "reading-identities-9-x3", "type": "short", "prompt": "¿Qué factor es descrito por los expertos como protector frente al estrés?", "correctAnswer": "el ejercicio físico regular"},
  ],
  "reading-sharing-planet-8": [
    {"id": "reading-sharing-planet-8-x1", "type": "true-false", "prompt": "A sus amigas no les interesa dónde compra EcoLucia92 su ropa.", "correctAnswer": "false", "justification": "Mis amigas siempre me preguntan dónde compro las cosas que llevo puestas."},
    {"id": "reading-sharing-planet-8-x2", "type": "mcq", "prompt": "¿Qué encuentra EcoLucia92 en las tiendas de segunda mano que no consigue en las tiendas normales?", "correctAnswer": "Prendas que nadie más en su ciudad tiene", "options": ["Prendas que nadie más en su ciudad tiene", "Tallas grandes a precios muy bajos", "Descuentos para estudiantes", "Ropa nueva de marcas famosas"]},
    {"id": "reading-sharing-planet-8-x3", "type": "short", "prompt": "¿Cuánto tiempo lleva EcoLucia92 comprando casi toda su ropa en tiendas de segunda mano?", "correctAnswer": "un año"},
  ],
  "reading-experiences-9": [
    {"id": "reading-experiences-9-x1", "type": "true-false", "prompt": "Según el autor, la familia de acogida lo trataba como a un extraño.", "correctAnswer": "false", "justification": "Durante tres meses viví con una familia de acogida encantadora que me trató como a un hijo más."},
    {"id": "reading-experiences-9-x2", "type": "mcq", "prompt": "¿A qué tipo de estudiante recomienda el autor este programa?", "correctAnswer": "A cualquier estudiante que desee perfeccionar su español", "options": ["A cualquier estudiante que desee perfeccionar su español", "Solo a estudiantes que ya hablan español con fluidez", "Únicamente a estudiantes de medicina", "A estudiantes que prefieren no salir de su país"]},
    {"id": "reading-experiences-9-x3", "type": "short", "prompt": "¿Cómo describe el autor a Salamanca en el texto?", "correctAnswer": "ciudad universitaria"},
  ],
  "reading-human-ingenuity-9": [
    {"id": "reading-human-ingenuity-9-x1", "type": "true-false", "prompt": "El club de robótica celebra su décimo aniversario.", "correctAnswer": "false", "justification": "Es un honor estar hoy aquí para celebrar el quinto aniversario de nuestro club de robótica."},
    {"id": "reading-human-ingenuity-9-x2", "type": "mcq", "prompt": "Según el orador, ¿qué nace de la curiosidad, el trabajo en equipo y la capacidad de aprender de los errores?", "correctAnswer": "La verdadera innovación", "options": ["La verdadera innovación", "La inteligencia artificial", "La automatización", "El desempleo"]},
    {"id": "reading-human-ingenuity-9-x3", "type": "short", "prompt": "¿Qué problema medioambiental menciona el orador como ejemplo de problema real que la tecnología puede resolver?", "correctAnswer": "la limpieza de los océanos"},
  ],
  "reading-social-organization-9": [
    {"id": "reading-social-organization-9-x1", "type": "true-false", "prompt": "Los voluntarios deben tener más de 18 años para participar en el programa.", "correctAnswer": "false", "justification": "¿Tienes más de 14 años y quieres marcar la diferencia en tu comunidad?"},
    {"id": "reading-social-organization-9-x2", "type": "mcq", "prompt": "¿Qué se hace con las verduras que se cultivan en el huerto urbano?", "correctAnswer": "Se donan al comedor social", "options": ["Se venden en el mercado del barrio", "Se donan al comedor social", "Se llevan a casa los voluntarios", "Se utilizan en el taller digital"]},
    {"id": "reading-social-organization-9-x3", "type": "short", "prompt": "¿Qué materias se apoyan en la actividad de apoyo escolar?", "correctAnswer": "matemáticas y lectura"},
  ],
  "reading-identities-11": [
    {"id": "reading-identities-11-x1", "type": "true-false", "prompt": "La autora fue a la cafetería sola después de las clases.", "correctAnswer": "false", "justification": "Después de las clases, fui a la cafetería con Ana y otros dos chicos."},
    {"id": "reading-identities-11-x2", "type": "mcq", "prompt": "¿De qué hablaron la autora y sus nuevos amigos en la cafetería?", "correctAnswer": "De música y series de televisión", "options": ["De música y series de televisión", "De deportes y viajes", "De la tarea de matemáticas", "De su nueva casa"]},
    {"id": "reading-identities-11-x3", "type": "short", "prompt": "¿Por qué se mudó la familia a esta ciudad?", "correctAnswer": "el trabajo de mi padre"},
  ],
  "reading-sharing-planet-9": [
    {"id": "reading-sharing-planet-9-x1", "type": "true-false", "prompt": "La agricultura intensiva es uno de los factores que está acelerando la escasez de agua potable.", "correctAnswer": "true", "justification": "El cambio climático, sumado al crecimiento demográfico y a la agricultura intensiva, está acelerando la escasez de agua potable en regiones que antes se consideraban abundantes."},
    {"id": "reading-sharing-planet-9-x2", "type": "mcq", "prompt": "¿Qué medidas consideran urgentes los expertos reunidos en el Foro Mundial del Agua?", "correctAnswer": "La innovación en desalinización limpia y la eficiencia en el riego agrícola", "options": ["La innovación en desalinización limpia y la eficiencia en el riego agrícola", "La construcción de nuevas presas en los ríos principales", "La prohibición total de la agricultura en regiones áridas", "El aumento de la extracción de agua de los glaciares"]},
    {"id": "reading-sharing-planet-9-x3", "type": "short", "prompt": "¿Qué organismo internacional aporta los datos sobre el estrés hídrico en 2050?", "correctAnswer": "la ONU"},
  ],
  "reading-identities-12": [
    {"id": "reading-identities-12-x1", "type": "true-false", "prompt": "La casa donde creció el abuelo de Elena está habitada por su familia.", "correctAnswer": "false", "justification": "Ahora está abandonada, pero pude entrar y caminar por las habitaciones vacías."},
    {"id": "reading-identities-12-x2", "type": "mcq", "prompt": "¿Por qué los vecinos reconocen a Elena?", "correctAnswer": "Por su apellido", "options": ["Por su apellido", "Por las fotos de la familia", "Porque vivió allí de niña", "Porque es la nieta del alcalde"]},
    {"id": "reading-identities-12-x3", "type": "short", "prompt": "¿Cuándo volverá Elena a la ciudad?", "correctAnswer": "el domingo"},
  ],
  "reading-experiences-10": [
    {"id": "reading-experiences-10-x1", "type": "true-false", "prompt": "La autora decidió pasar su último año de instituto en Italia.", "correctAnswer": "false", "justification": "Cuando decidí pasar mi último año de instituto estudiando en Francia, todo el mundo me hablaba de las ventajas: aprendería un idioma nuevo, haría amigos internacionales y volvería siendo una persona más independiente."},
    {"id": "reading-experiences-10-x2", "type": "mcq", "prompt": "Según el texto, ¿qué le aconsejó una profesora a la autora?", "correctAnswer": "que siguiera apareciendo en las actividades", "options": ["que dejara de asistir a clase", "que siguiera apareciendo en las actividades", "que volviera a casa de inmediato", "que hablara solo en inglés"]},
    {"id": "reading-experiences-10-x3", "type": "short", "prompt": "¿Con quién vivía la autora durante su año en Francia?", "correctAnswer": "familia de acogida"},
  ],
  "reading-human-ingenuity-11": [
    {"id": "reading-human-ingenuity-11-x1", "type": "true-false", "prompt": "La aplicación SignoYa ya está disponible para todo el público.", "correctAnswer": "false", "justification": "Ahora buscan financiación para convertir SignoYa en una aplicación disponible para todo el público."},
    {"id": "reading-human-ingenuity-11-x2", "type": "mcq", "prompt": "¿Por qué surgió el proyecto SignoYa?", "correctAnswer": "Porque un compañero con discapacidad auditiva tenía dificultades constantes para comunicarse.", "options": ["Porque el equipo quería participar en una feria de innovación juvenil.", "Porque un compañero con discapacidad auditiva tenía dificultades constantes para comunicarse.", "Porque el instituto de Valencia pidió una aplicación para las clases de idiomas.", "Porque los creadores querían ganar dinero vendiendo teléfonos inteligentes."]},
    {"id": "reading-human-ingenuity-11-x3", "type": "short", "prompt": "¿En qué ciudad está el instituto de los estudiantes?", "correctAnswer": "Valencia"},
  ],
  "reading-experiences-11": [
    {"id": "reading-experiences-11-x1", "type": "true-false", "prompt": "La autora entrenaba por la tarde.", "correctAnswer": "false", "justification": "En un momento quise abandonar, pero pensé en toda la gente que me apoyó durante los entrenamientos de las seis de la mañana, incluso cuando llovía, y seguí corriendo."},
    {"id": "reading-experiences-11-x2", "type": "mcq", "prompt": "¿Por qué la autora no abandonó la carrera cuando quiso hacerlo?", "correctAnswer": "Porque pensó en las personas que la habían apoyado durante los entrenamientos", "options": ["Porque pensó en las personas que la habían apoyado durante los entrenamientos", "Porque ya estaba cerca de la meta y no le quedaban kilómetros", "Porque un corredor la animó a seguir en el kilómetro treinta", "Porque su tiempo era mejor de lo que esperaba"]},
    {"id": "reading-experiences-11-x3", "type": "short", "prompt": "¿Qué compartió la autora en directo durante la carrera?", "correctAnswer": "mi ubicación en directo"},
  ],
  "reading-human-ingenuity-10": [
    {"id": "reading-human-ingenuity-10-x1", "type": "true-false", "prompt": "Según el texto, el restablecimiento de datos de fábrica es el primer paso.", "correctAnswer": "false", "justification": "Primero, haz una copia de seguridad de tus fotos y contactos."},
    {"id": "reading-human-ingenuity-10-x2", "type": "mcq", "prompt": "¿Dónde se puede llevar el móvil viejo para reciclarlo?", "correctAnswer": "A un punto de reciclaje electrónico", "options": ["A un punto de reciclaje electrónico", "A la basura normal", "A una tienda de ropa", "A un parque infantil"]},
    {"id": "reading-human-ingenuity-10-x3", "type": "short", "prompt": "¿Qué opción de la configuración del teléfono se selecciona para borrar los datos?", "correctAnswer": "restablecer datos de fábrica"},
  ],
  "reading-social-organization-10": [
    {"id": "reading-social-organization-10-x1", "type": "true-false", "prompt": "El informe recomienda que la comisión de seguimiento evalúe la convivencia cada mes.", "correctAnswer": "false", "justification": "Entre las recomendaciones del Consejo se incluyen: implementar programas de mediación en todos los centros antes de que finalice el próximo curso escolar, aumentar la formación del profesorado en la detección temprana de conflictos, y crear una comisión de seguimiento que evaluará la convivencia trimestralmente."},
    {"id": "reading-social-organization-10-x2", "type": "mcq", "prompt": "¿Qué aspecto valora positivamente el alumnado según el informe?", "correctAnswer": "Los canales anónimos para denunciar situaciones de acoso", "options": ["Los canales anónimos para denunciar situaciones de acoso", "Los horarios flexibles de las clases", "Las excursiones organizadas por el centro", "La reducción de los deberes para casa"]},
    {"id": "reading-social-organization-10-x3", "type": "short", "prompt": "¿Quién elaboró el informe?", "correctAnswer": "Consejo Escolar Municipal"},
  ],
  "reading-sharing-planet-10": [
    {"id": "reading-sharing-planet-10-x1", "type": "true-false", "prompt": "Los voluntarios tienen que pagar por los guantes, las bolsas y el agua.", "correctAnswer": "false", "justification": "ofrecemos guantes, bolsas y agua gratis para todos los participantes."},
    {"id": "reading-sharing-planet-10-x2", "type": "mcq", "prompt": "¿Dónde deben reunirse los voluntarios para empezar la actividad?", "correctAnswer": "En la entrada principal de la playa", "options": ["En la entrada principal de la playa", "En el ayuntamiento de El Palmar", "En la oficina de voluntarios del pueblo", "En el restaurante cerca de la playa"]},
    {"id": "reading-sharing-planet-10-x3", "type": "short", "prompt": "¿Qué día se realiza la jornada de limpieza?", "correctAnswer": "Este sábado"},
  ],
  "reading-social-organization-11": [
    {"id": "reading-social-organization-11-x1", "type": "true-false", "prompt": "Irene propone organizar reuniones semanales para que los estudiantes compartan sus ideas y quejas.", "correctAnswer": "false", "justification": "Si me eligen, mi primera propuesta será organizar reuniones mensuales donde todos podáis compartir vuestras ideas y quejas de forma abierta, sin miedo a hablar."},
    {"id": "reading-social-organization-11-x2", "type": "mcq", "prompt": "¿Por qué pide Irene el voto a sus compañeros?", "correctAnswer": "Porque cree que una clase unida puede conseguir cambios reales", "options": ["Porque quiere obtener un beneficio personal", "Porque cree que una clase unida puede conseguir cambios reales", "Porque la dirección del instituto se lo ha pedido"]},
    {"id": "reading-social-organization-11-x3", "type": "short", "prompt": "¿A qué órgano llevará Irene las propuestas de los estudiantes?", "correctAnswer": "consejo escolar"},
  ],
  "reading-sharing-planet-11": [
    {"id": "reading-sharing-planet-11-x1", "type": "true-false", "prompt": "Según la doctora Vidal, la medida más importante para salvar los corales es trasplantar corales al océano.", "correctAnswer": "false", "justification": "Pero, sin duda, la medida más importante es frenar el cambio climático global."},
    {"id": "reading-sharing-planet-11-x2", "type": "mcq", "prompt": "¿Qué cultivan algunos equipos en laboratorios para después trasplantarlo al océano?", "correctAnswer": "corales resistentes al calor", "options": ["corales resistentes al calor", "algas de la costa", "peces de arrecife", "contaminantes para estudiarlos"]},
    {"id": "reading-sharing-planet-11-x3", "type": "short", "prompt": "¿Qué sostienen los arrecifes de coral según la doctora Vidal?", "correctAnswer": "millones de especies marinas"},
  ],
  "reading-identities-13": [
    {"id": "reading-identities-13-x1", "type": "true-false", "prompt": "Daniel quiere reunirse con la orientadora el jueves por la tarde.", "correctAnswer": "false", "justification": "¿Podría reunirse conmigo el jueves por la mañana, antes de que empiecen las clases?"},
    {"id": "reading-identities-13-x2", "type": "mcq", "prompt": "¿Qué quiere cambiar Daniel?", "correctAnswer": "la hora de una asignatura optativa", "options": ["la hora de una asignatura optativa", "el horario del entrenamiento de baloncesto", "la fecha de un examen", "el lugar de la reunión"]},
    {"id": "reading-identities-13-x3", "type": "short", "prompt": "¿A qué hora propone Daniel la reunión?", "correctAnswer": "por la mañana"},
  ],
  "reading-identities-14": [
    {"id": "reading-identities-14-x1", "type": "true-false", "prompt": "Según la guía, es obligatorio escribir en el diario todos los días sin excepción.", "correctAnswer": "false", "justification": "Por último, no te preocupes si algunos días no tienes nada que escribir."},
    {"id": "reading-identities-14-x2", "type": "mcq", "prompt": "Según el segundo paso, ¿qué es lo que realmente ayuda a conocerte mejor?", "correctAnswer": "Reflexionar sobre cómo te hizo sentir cada situación y por qué reaccionaste así", "options": ["Describir con detalle lo que pasó cada día", "Reflexionar sobre cómo te hizo sentir cada situación y por qué reaccionaste así", "Escribir sin parar durante una hora", "Copiar las frases de otros diarios"]},
    {"id": "reading-identities-14-x3", "type": "short", "prompt": "¿Qué es lo importante según la guía, en lugar de la perfección?", "correctAnswer": "la constancia"},
  ],
  "reading-identities-15": [
    {"id": "reading-identities-15-x1", "type": "true-false", "prompt": "Según el texto, los jóvenes deben abandonar por completo la vida digital para proteger su identidad.", "correctAnswer": "false", "justification": "La clave, según los expertos, no está en rechazar la vida digital, sino en enseñar a los jóvenes a distinguir entre la representación curada de una persona en línea y la persona completa y compleja que hay detrás de la pantalla."},
    {"id": "reading-identities-15-x2", "type": "mcq", "prompt": "¿Qué presión particular genera la exposición constante en internet, según varios estudios recientes?", "correctAnswer": "La necesidad de mantener una imagen coherente en todas las plataformas", "options": ["La necesidad de mantener una imagen coherente en todas las plataformas", "La obligación de ganar dinero con sus publicaciones", "La necesidad de compartir su ubicación en tiempo real", "La presión de evitar cualquier contacto con sus amigos"]},
    {"id": "reading-identities-15-x3", "type": "short", "prompt": "¿Qué forman los perfiles, publicaciones y fotos ante el mundo?", "correctAnswer": "un archivo público"},
  ],
  "reading-identities-17": [
    {"id": "reading-identities-17-x1", "type": "true-false", "prompt": "La autora comparaba su vida con la de sus amigos en las redes sociales.", "correctAnswer": "true", "justification": "Durante mucho tiempo, comparaba mi vida con la de mis amigos en las redes sociales y siempre sentía que yo no era suficiente."},
    {"id": "reading-identities-17-x2", "type": "mcq", "prompt": "¿Qué le dice la autora a una persona que se siente como ella?", "correctAnswer": "Que no está solo.", "options": ["Que no está solo.", "Que debe publicar más fotos.", "Que debe dejar las redes sociales para siempre.", "Que las fotos perfectas muestran la realidad."]},
    {"id": "reading-identities-17-x3", "type": "short", "prompt": "¿Qué hashtags aparecen al final de la publicación?", "correctAnswer": "#saludmental #autoestima"},
  ],
  "reading-identities-18": [
    {"id": "reading-identities-18-x1", "type": "true-false", "prompt": "La amiga de la autora era una de las estudiantes menos brillantes de su clase.", "correctAnswer": "false", "justification": "admitió sentir exactamente lo mismo a pesar de ser una de las estudiantes más brillantes de mi clase."},
    {"id": "reading-identities-18-x2", "type": "mcq", "prompt": "Según la autora, ¿cómo debe considerarse reconocer los propios logros?", "correctAnswer": "Es simplemente justicia contigo mismo", "options": ["Es una forma de arrogancia", "Es simplemente justicia contigo mismo", "Es algo que debe evitarse en la escuela", "Es una muestra de suerte"]},
    {"id": "reading-identities-18-x3", "type": "short", "prompt": "¿Quién, según la autora, podría haber cometido un error al concederle la beca?", "correctAnswer": "el comité de selección"},
  ],
  "reading-identities-20": [
    {"id": "reading-identities-20-x1", "type": "true-false", "prompt": "La doctora Campos aconseja a los adolescentes imitar a sus amigos para encajar en el grupo.", "correctAnswer": "false", "justification": "Sin embargo, es importante que aprendan a mantener su propia voz dentro del grupo, en lugar de simplemente imitar a los demás."},
    {"id": "reading-identities-20-x2", "type": "mcq", "prompt": "Según la entrevista, ¿por qué muchos adolescentes dejan de compartir sus dudas?", "correctAnswer": "Porque temen una reacción negativa", "options": ["Porque temen una reacción negativa", "Porque ya han resuelto todas sus preguntas", "Porque sus amigos se lo prohíben", "Porque prefieren hablar solo con desconocidos"]},
    {"id": "reading-identities-20-x3", "type": "short", "prompt": "¿Qué se está desarrollando todavía durante la adolescencia, según la doctora Campos?", "correctAnswer": "el cerebro"},
  ],
  "reading-identities-16": [
    {"id": "reading-identities-16-x1", "type": "true-false", "prompt": "Según la reseña, el reseñista considera que los capítulos sobre la autoestima son los mejores del libro.", "correctAnswer": "false", "justification": "Mi única crítica es que algunos capítulos se sienten repetitivos, especialmente los centrados en la autoestima, que podrían haberse combinado en uno solo."},
    {"id": "reading-identities-16-x2", "type": "mcq", "prompt": "¿A quién recomienda el reseñista este libro?", "correctAnswer": "A cualquier joven que esté confundido sobre su identidad", "options": ["A cualquier joven que esté confundido sobre su identidad", "Solo a estudiantes de psicología", "A adultos que buscan técnicas de trabajo", "A personas que quieren escribir reseñas"]},
    {"id": "reading-identities-16-x3", "type": "short", "prompt": "¿Qué problema personal de la autora se menciona en la reseña?", "correctAnswer": "ansiedad social"},
  ],
  "reading-experiences-12": [
    {"id": "reading-experiences-12-x1", "type": "true-false", "prompt": "El número de estudiantes que eligen tomarse un año sabático antes de la universidad está disminuyendo.", "correctAnswer": "false", "justification": "Un número creciente de estudiantes recién graduados de bachillerato está optando por tomarse un año sabático antes de comenzar la universidad, según un informe publicado esta semana por el Ministerio de Educación."},
    {"id": "reading-experiences-12-x2", "type": "mcq", "prompt": "Según el artículo, ¿qué quieren hacer algunos estudiantes durante su año sabático?", "correctAnswer": "trabajar y ahorrar dinero", "options": ["trabajar y ahorrar dinero", "estudiar una segunda carrera", "descansar en casa sin hacer nada", "mudarse a otro país para vivir"]},
    {"id": "reading-experiences-12-x3", "type": "short", "prompt": "Según los expertos, ¿cuál es la clave para que un año sabático sea provechoso?", "correctAnswer": "la planificación"},
  ],
  "reading-experiences-13": [
    {"id": "reading-experiences-13-x1", "type": "true-false", "prompt": "Según el discurso, los estudiantes sabían desde el principio todo lo que vivirían juntos en el instituto.", "correctAnswer": "false", "justification": "ninguno de nosotros imaginaba todo lo que pasaríamos juntos"},
    {"id": "reading-experiences-13-x2", "type": "mcq", "prompt": "¿Qué les desea el orador a sus compañeros al final del discurso?", "correctAnswer": "Que nunca dejen de hacerse preguntas grandes sobre quiénes quieren llegar a ser", "options": ["Que nunca dejen de hacerse preguntas grandes sobre quiénes quieren llegar a ser", "Que no vuelvan a tomar exámenes en su vida", "Que sigan viviendo en el mismo lugar del instituto", "Que aprendan a resolver todos los problemas sin ayuda"]},
    {"id": "reading-experiences-13-x3", "type": "short", "prompt": "¿Qué les quitó el sueño a los estudiantes durante el instituto?", "correctAnswer": "los exámenes"},
  ],
  "reading-experiences-14": [
    {"id": "reading-experiences-14-x1", "type": "true-false", "prompt": "Lucía hizo su intercambio escolar en Berlín.", "correctAnswer": "false", "justification": "acaba de regresar de un año de intercambio escolar en Múnich, Alemania."},
    {"id": "reading-experiences-14-x2", "type": "mcq", "prompt": "¿Por qué dice Lucía que los primeros dos meses fueron agotadores?", "correctAnswer": "Porque apenas entendía las conversaciones cotidianas.", "options": ["Porque su familia de acogida era muy estricta con ella.", "Porque apenas entendía las conversaciones cotidianas.", "Porque no había hecho amigos en el colegio.", "Porque el clima de Múnich era insoportable."]},
    {"id": "reading-experiences-14-x3", "type": "short", "prompt": "Según Lucía, ¿qué sentimiento es el más difícil de superar en los momentos duros?", "correctAnswer": "la nostalgia"},
  ],
  "reading-identities-19": [
    {"id": "reading-identities-19-x1", "type": "true-false", "prompt": "Marcos cree que las imágenes de los cuerpos en anuncios y redes sociales siempre son reales.", "correctAnswer": "false", "justification": "Creo que gran parte del problema viene de compararme constantemente con los cuerpos que veo en anuncios y en redes sociales, que sé que muchas veces están editados, pero aun así me afectan."},
    {"id": "reading-identities-19-x2", "type": "mcq", "prompt": "¿Cómo se siente Marcos respecto a su propio cuerpo?", "correctAnswer": "Está luchando con la imagen que tiene de su cuerpo", "options": ["Está luchando con la imagen que tiene de su cuerpo", "Está muy satisfecho con su cuerpo", "Nunca ha pensado en su cuerpo", "Ya no tiene ningún problema con su cuerpo"]},
    {"id": "reading-identities-19-x3", "type": "short", "prompt": "¿Qué ha cambiado un poco la forma de pensar de Marcos?", "correctAnswer": "hacer ejercicio"},
  ],
  "reading-experiences-15": [
    {"id": "reading-experiences-15-x1", "type": "true-false", "prompt": "Según la guía, no es necesario llevar el seguro médico en la maleta.", "correctAnswer": "false", "justification": "Tercero, no olvides los documentos importantes: pasaporte, seguro médico y los contactos de emergencia, tanto de tu familia real como de la organización del intercambio."},
    {"id": "reading-experiences-15-x2", "type": "mcq", "prompt": "¿Qué tipo de ropa recomienda la guía llevar?", "correctAnswer": "Ropa versátil que se pueda combinar de varias formas", "options": ["Ropa versátil que se pueda combinar de varias formas", "Ropa nueva para cada día del intercambio", "Ropa de abrigo solamente", "Ropa de marca muy cara"]},
    {"id": "reading-experiences-15-x3", "type": "short", "prompt": "¿Qué tipo de seguro se menciona como documento importante?", "correctAnswer": "seguro médico"},
  ],
  "reading-experiences-16": [
    {"id": "reading-experiences-16-x1", "type": "true-false", "prompt": "Según el autor, los libros de texto pueden igualar la huella que deja ver un monumento histórico en persona.", "correctAnswer": "false", "justification": "Ver un monumento histórico en persona, o practicar un idioma con hablantes nativos, deja una huella que ningún libro de texto puede igualar."},
    {"id": "reading-experiences-16-x2", "type": "mcq", "prompt": "Según el texto, ¿cuál es la duda que surge cada vez que se propone un nuevo viaje educativo?", "correctAnswer": "Si vale la pena el coste, el tiempo lectivo perdido y la logística frente a lo que aprenden los estudiantes.", "options": ["Si los estudiantes quieren viajar al extranjero o quedarse en el instituto.", "Si vale la pena el coste, el tiempo lectivo perdido y la logística frente a lo que aprenden los estudiantes.", "Si los profesores tienen suficiente tiempo para preparar el viaje.", "Si los padres aceptan pagar las becas de los estudiantes."]},
    {"id": "reading-experiences-16-x3", "type": "short", "prompt": "¿Con quiénes se puede practicar un idioma durante un viaje bien planificado, según el texto?", "correctAnswer": "hablantes nativos"},
  ],
  "reading-experiences-17": [
    {"id": "reading-experiences-17-x1", "type": "true-false", "prompt": "El informe completo, con datos desglosados por país de destino, ya está disponible en la página web de la Asociación.", "correctAnswer": "false", "justification": "El informe completo, con datos desglosados por país de destino, estará disponible en la página web de la Asociación a partir de la próxima semana."},
    {"id": "reading-experiences-17-x2", "type": "mcq", "prompt": "¿Cuál es el objetivo principal de este informe?", "correctAnswer": "Analizar los efectos académicos y personales de los programas de intercambio escolar", "options": ["Analizar los efectos académicos y personales de los programas de intercambio escolar", "Promover la creación de nuevos programas de intercambio en el extranjero", "Comparar el coste de los intercambios entre distintos países de destino", "Explicar cómo solicitar una beca para estudiar en el extranjero"]},
    {"id": "reading-experiences-17-x3", "type": "short", "prompt": "¿Durante cuántos años se analizaron los programas de intercambio?", "correctAnswer": "últimos cinco años"},
  ],
  "reading-experiences-18": [
    {"id": "reading-experiences-18-x1", "type": "true-false", "prompt": "Al final del día, el autor se siente lleno de energía.", "correctAnswer": "false", "justification": "Ese pequeño momento me hizo sentir que, aunque estoy agotado, este trabajo vale totalmente la pena."},
    {"id": "reading-experiences-18-x2", "type": "mcq", "prompt": "¿Por qué estaba nervioso el autor al principio?", "correctAnswer": "Porque nunca había cuidado de tantos niños a la vez", "options": ["Porque nunca había cuidado de tantos niños a la vez", "Porque no conocía el bosque donde está el campamento", "Porque tenía que preparar la comida para todos", "Porque los niños no sabían jugar en equipo"]},
    {"id": "reading-experiences-18-x3", "type": "short", "prompt": "¿Cómo se llama la niña que dio las gracias al autor?", "correctAnswer": "Sofía"},
  ],
  "reading-experiences-19": [
    {"id": "reading-experiences-19-x1", "type": "true-false", "prompt": "Según el texto, los horarios del trabajo de voluntariado eran cortos y muy cómodos.", "correctAnswer": "false", "justification": "No fue fácil: los horarios eran largos y algunas tareas, como limpiar las jaulas, no eran nada glamurosas."},
    {"id": "reading-experiences-19-x2", "type": "mcq", "prompt": "¿Qué dice el autor sobre las conversaciones con personas de contextos diferentes al suyo?", "correctAnswer": "Le abrieron la mente más que cualquier libro que leyó ese año.", "options": ["Le abrieron la mente más que cualquier libro que leyó ese año.", "Le resultaron aburridas y no aprendió nada de ellas.", "Le parecieron difíciles de entender y prefirió evitarlas.", "Fueron menos importantes que el trabajo con los animales."]},
    {"id": "reading-experiences-19-x3", "type": "short", "prompt": "¿Qué tareas del refugio no eran nada glamurosas?", "correctAnswer": "limpiar las jaulas"},
  ],
  "reading-human-ingenuity-13": [
    {"id": "reading-human-ingenuity-13-x1", "type": "true-false", "prompt": "Daniela ya presentó su proyecto ante los jueces.", "correctAnswer": "false", "justification": "Mañana es el día de la presentación final ante los jueces."},
    {"id": "reading-human-ingenuity-13-x2", "type": "mcq", "prompt": "¿Qué puede hacer el robot construido por el equipo de Japón?", "correctAnswer": "clasificar basura reciclable automáticamente", "options": ["clasificar basura reciclable automáticamente", "presentar proyectos ante los jueces", "generar energía solar para el instituto", "construir otros robots en la feria"]},
    {"id": "reading-human-ingenuity-13-x3", "type": "short", "prompt": "¿A quién le escribe Daniela?", "correctAnswer": "Nico"},
  ],
  "reading-experiences-20": [
    {"id": "reading-experiences-20-x1", "type": "true-false", "prompt": "El autor está preocupado por no poder seguir el ritmo del grupo.", "correctAnswer": "true", "justification": "Yo no hago mucho deporte normalmente y me preocupa no aguantar el ritmo del grupo."},
    {"id": "reading-experiences-20-x2", "type": "mcq", "prompt": "¿Qué le preocupa al autor sobre el viaje?", "correctAnswer": "No poder seguir el ritmo del grupo", "options": ["No poder seguir el ritmo del grupo", "Perder el autobús del instituto", "El precio del viaje", "El tiempo que hará durante la caminata"]},
    {"id": "reading-experiences-20-x3", "type": "short", "prompt": "¿Qué le pide el autor a los lectores del foro?", "correctAnswer": "consejos"},
  ],
  "reading-human-ingenuity-12": [
    {"id": "reading-human-ingenuity-12-x1", "type": "true-false", "prompt": "El informe recomienda que los institutos prohíban por completo el uso de la inteligencia artificial a los estudiantes.", "correctAnswer": "false", "justification": "Entre las recomendaciones, el informe propone desarrollar directrices claras sobre el uso aceptable de la IA por parte del alumnado, así como ofrecer formación específica al profesorado antes de que finalice el próximo curso escolar."},
    {"id": "reading-human-ingenuity-12-x2", "type": "mcq", "prompt": "¿Qué beneficio destaca el informe en relación con las tareas administrativas?", "correctAnswer": "El ahorro de tiempo", "options": ["El ahorro de tiempo", "El aumento del salario del profesorado", "La reducción del número de estudiantes por aula", "La eliminación de los exámenes"]},
    {"id": "reading-human-ingenuity-12-x3", "type": "short", "prompt": "¿Cuántos institutos se incluyeron en los datos recopilados para el informe?", "correctAnswer": "trescientos"},
  ],
  "reading-human-ingenuity-14": [
    {"id": "reading-human-ingenuity-14-x1", "type": "true-false", "prompt": "La profesora de tecnología no creía en la idea del proyecto.", "correctAnswer": "false", "justification": "Quiero dar las gracias a mi equipo, que trabajó incansablemente cada fin de semana, y a nuestra profesora de tecnología, que creyó en la idea desde el primer día."},
    {"id": "reading-human-ingenuity-14-x2", "type": "mcq", "prompt": "¿Cómo era el presupuesto del proyecto?", "correctAnswer": "Muy pequeño", "options": ["Muy grande", "Muy pequeño", "Gratuito", "Muy elevado"]},
    {"id": "reading-human-ingenuity-14-x3", "type": "short", "prompt": "¿Para qué tipo de espacio está diseñado el sistema de riego?", "correctAnswer": "huertos escolares"},
  ],
  "reading-human-ingenuity-15": [
    {"id": "reading-human-ingenuity-15-x1", "type": "true-false", "prompt": "Según el texto, eliminar enfermedades genéticas hereditarias antes del nacimiento podría reducir un sufrimiento muy grande.", "correctAnswer": "true", "justification": "Eliminar enfermedades genéticas hereditarias antes de que un bebé nazca podría aliviar un sufrimiento inmenso."},
    {"id": "reading-human-ingenuity-15-x2", "type": "mcq", "prompt": "Según el texto, ¿qué implicaría usar la tecnología para seleccionar el color de ojos o la altura?", "correctAnswer": "Pasar de curar enfermedades a mejorar rasgos humanos", "options": ["Pasar de curar enfermedades a mejorar rasgos humanos", "Eliminar la desigualdad económica en el mundo", "Reducir el coste de los tratamientos médicos", "Prevenir todas las enfermedades hereditarias"]},
    {"id": "reading-human-ingenuity-15-x3", "type": "short", "prompt": "¿Qué tipo de desigualdad, además de la económica, podría crear esta tecnología según el autor?", "correctAnswer": "desigualdad genética"},
  ],
  "reading-human-ingenuity-16": [
    {"id": "reading-human-ingenuity-16-x1", "type": "true-false", "prompt": "El equipo de estudiantes tenía más presupuesto que los equipos universitarios.", "correctAnswer": "false", "justification": "Pero la falta de recursos nos obligó a ser más creativos en el diseño"},
    {"id": "reading-human-ingenuity-16-x2", "type": "mcq", "prompt": "¿Qué espera el equipo que ocurra con su participación en la carrera?", "correctAnswer": "Que más jóvenes se interesen por las carreras de ingeniería y energías renovables", "options": ["Que más jóvenes se interesen por las carreras de ingeniería y energías renovables", "Que los equipos universitarios abandonen la competición", "Que el gobierno financie todos los institutos técnicos del país", "Que el vehículo alcance una velocidad de cien kilómetros por hora"]},
    {"id": "reading-human-ingenuity-16-x3", "type": "short", "prompt": "¿Qué tipo de energía propulsa el vehículo?", "correctAnswer": "energía solar"},
  ],
  "reading-human-ingenuity-17": [
    {"id": "reading-human-ingenuity-17-x1", "type": "true-false", "prompt": "Marta Delgado tiene treinta años.", "correctAnswer": "false", "justification": "Hablamos con Marta Delgado, de veinticuatro años, una de las ingenieras más jóvenes que trabaja actualmente en el diseño de satélites de bajo coste."},
    {"id": "reading-human-ingenuity-17-x2", "type": "mcq", "prompt": "¿Cuál es el mayor obstáculo que Marta menciona en su carrera?", "correctAnswer": "Ser una de las pocas mujeres en la mayoría de sus clases", "options": ["Ser una de las pocas mujeres en la mayoría de sus clases", "La falta de dinero para pagar sus estudios", "Las dificultades con las asignaturas de matemáticas", "El rechazo de su familia a su vocación"]},
    {"id": "reading-human-ingenuity-17-x3", "type": "short", "prompt": "¿Qué dice Marta que una joven no debe esperar antes de empezar?", "correctAnswer": "sentirse completamente segura"},
  ],
  "reading-human-ingenuity-18": [
    {"id": "reading-human-ingenuity-18-x1", "type": "true-false", "prompt": "El taller se imparte en el instituto de la ciudad.", "correctAnswer": "false", "justification": "El taller empieza el primer sábado del mes que viene, de diez a doce del mediodía, en el centro cultural del barrio."},
    {"id": "reading-human-ingenuity-18-x2", "type": "mcq", "prompt": "¿A partir de qué edad pueden apuntarse los jóvenes al taller?", "correctAnswer": "a los doce años", "options": ["a los diez años", "a los doce años", "a los quince años", "a los dieciocho años"]},
    {"id": "reading-human-ingenuity-18-x3", "type": "short", "prompt": "¿En qué lugar se imparte el taller?", "correctAnswer": "centro cultural del barrio"},
  ],
  "reading-human-ingenuity-20": [
    {"id": "reading-human-ingenuity-20-x1", "type": "true-false", "prompt": "El robot se detenía cada vez que intentaba avanzar en línea recta.", "correctAnswer": "false", "justification": "Al principio, el robot no funcionaba bien: se detenía cada vez que intentaba girar."},
    {"id": "reading-human-ingenuity-20-x2", "type": "mcq", "prompt": "¿Cuánto tiempo pasaron revisando el código antes de encontrar el error?", "correctAnswer": "Casi dos horas", "options": ["Casi dos horas", "Casi tres meses", "Toda la noche", "Solo cinco minutos"]},
    {"id": "reading-human-ingenuity-20-x3", "type": "short", "prompt": "¿Qué sintió el narrador cuando el robot por fin funcionó delante de todos?", "correctAnswer": "orgullo enorme"},
  ],
  "reading-human-ingenuity-19": [
    {"id": "reading-human-ingenuity-19-x1", "type": "true-false", "prompt": "El museo lleva abierto más de diez años.", "correctAnswer": "false", "justification": "El fin de semana pasado visité el nuevo museo interactivo de ciencia que acaba de inaugurarse en el centro de la ciudad, y tengo que decir que superó completamente mis expectativas."},
    {"id": "reading-human-ingenuity-19-x2", "type": "mcq", "prompt": "¿Por qué el autor considera diferente la sala de robótica?", "correctAnswer": "Permite aprender haciendo en lugar de solo observar", "options": ["Permite aprender haciendo en lugar de solo observar", "Es la sala más antigua del museo", "Tiene la entrada más barata del museo", "Solo está abierta los fines de semana"]},
    {"id": "reading-human-ingenuity-19-x3", "type": "short", "prompt": "¿Cuánto tiempo pueden durar las colas de las exhibiciones más populares los fines de semana?", "correctAnswer": "más de cuarenta minutos"},
  ],
  "reading-social-organization-12": [
    {"id": "reading-social-organization-12-x1", "type": "true-false", "prompt": "La autora se sintió tranquila desde el principio de su primer día de voluntariado.", "correctAnswer": "false", "justification": "Al principio estaba nerviosa porque no sabía muy bien qué esperar."},
    {"id": "reading-social-organization-12-x2", "type": "mcq", "prompt": "¿Qué le resultó muy confuso al señor mayor?", "correctAnswer": "Rellenar un formulario en línea", "options": ["Escribir una carta a mano", "Rellenar un formulario en línea", "Encontrar la oficina del ayuntamiento", "Recordar fechas importantes de la ciudad"]},
    {"id": "reading-social-organization-12-x3", "type": "short", "prompt": "¿Qué sentía la autora al empezar su primer día?", "correctAnswer": "nerviosa"},
  ],
  "reading-social-organization-13": [
    {"id": "reading-social-organization-13-x1", "type": "true-false", "prompt": "Según el texto, los trabajadores remotos reportan menos flexibilidad en sus horarios que quienes trabajan en la oficina.", "correctAnswer": "false", "justification": "Por un lado, muchos trabajadores reportan mayor flexibilidad y menos tiempo perdido en desplazamientos, lo que les permite dedicar más tiempo a su familia y a actividades comunitarias locales."},
    {"id": "reading-social-organization-13-x2", "type": "mcq", "prompt": "¿Qué experimentan, según el texto, quienes viven solos y trabajan exclusivamente desde casa?", "correctAnswer": "Una creciente sensación de aislamiento", "options": ["Una creciente sensación de aislamiento", "Mayor satisfacción con su vida familiar", "Más interacciones sociales espontáneas", "Un aumento de su tiempo de desplazamiento"]},
    {"id": "reading-social-organization-13-x3", "type": "short", "prompt": "¿Qué adjetivo describe los espacios de trabajo que los expertos proponen diseñar para el futuro?", "correctAnswer": "híbridos"},
  ],
  "reading-social-organization-14": [
    {"id": "reading-social-organization-14-x1", "type": "true-false", "prompt": "La formación para los voluntarios se da después de empezar las clases.", "correctAnswer": "false", "justification": "No necesitas experiencia previa como profesor: te daremos toda la formación necesaria antes de empezar."},
    {"id": "reading-social-organization-14-x2", "type": "mcq", "prompt": "¿Dónde se imparten las clases de la campaña?", "correctAnswer": "En el centro comunitario del barrio", "options": ["En el centro comunitario del barrio", "En una biblioteca municipal", "En las casas de los voluntarios", "En un colegio privado"]},
    {"id": "reading-social-organization-14-x3", "type": "short", "prompt": "¿Cuántas tardes por semana se dan las clases?", "correctAnswer": "dos tardes"},
  ],
  "reading-social-organization-15": [
    {"id": "reading-social-organization-15-x1", "type": "true-false", "prompt": "Pablo dice que el trabajo en el proyecto es más fácil de lo que imaginaba.", "correctAnswer": "false", "justification": "El trabajo es más duro de lo que imaginaba, pero también mucho más gratificante."},
    {"id": "reading-social-organization-15-x2", "type": "mcq", "prompt": "¿Qué ha aprendido Pablo en estas dos semanas?", "correctAnswer": "Sobre desigualdad y organización comunitaria", "options": ["Sobre desigualdad y organización comunitaria", "Sobre la historia de los mayas", "Sobre cómo cultivar café", "Sobre los idiomas de Centroamérica"]},
    {"id": "reading-social-organization-15-x3", "type": "short", "prompt": "¿A quién le escribe Pablo la postal?", "correctAnswer": "mamá"},
  ],
  "reading-social-organization-16": [
    {"id": "reading-social-organization-16-x1", "type": "true-false", "prompt": "El reseñista considera que el documental trata la desigualdad de forma demasiado abstracta.", "correctAnswer": "false", "justification": "sigue de cerca a tres familias durante un año completo, humanizando un problema que a menudo se discute de forma demasiado abstracta"},
    {"id": "reading-social-organization-16-x2", "type": "mcq", "prompt": "¿Por qué valora el reseñista especialmente el documental?", "correctAnswer": "Porque humaniza el problema al seguir a familias durante un año.", "options": ["Porque humaniza el problema al seguir a familias durante un año.", "Porque ofrece muchas soluciones concretas para la desigualdad.", "Porque presenta una gran cantidad de estadísticas detalladas.", "Porque es un documental muy corto y fácil de ver."]},
    {"id": "reading-social-organization-16-x3", "type": "short", "prompt": "¿Qué sensación deja el documental al espectador hacia el final, según la reseña?", "correctAnswer": "impotencia"},
  ],
  "reading-social-organization-17": [
    {"id": "reading-social-organization-17-x1", "type": "true-false", "prompt": "Las organizaciones empresariales apoyan la nueva ley sin ninguna reserva.", "correctAnswer": "false", "justification": "Las organizaciones empresariales han expresado preocupación por el coste que esto supondrá para las pequeñas empresas, mientras que las asociaciones de trabajadores han celebrado la medida como un paso histórico hacia una mayor igualdad entre hombres y mujeres en el ámbito laboral."},
    {"id": "reading-social-organization-17-x2", "type": "mcq", "prompt": "¿Quiénes han celebrado la medida como un paso histórico?", "correctAnswer": "Las asociaciones de trabajadores", "options": ["Las asociaciones de trabajadores", "Las organizaciones empresariales", "El parlamento", "Las pequeñas empresas"]},
    {"id": "reading-social-organization-17-x3", "type": "short", "prompt": "¿Qué derecho tienen los trabajadores para el cuidado de hijos o familiares dependientes?", "correctAnswer": "horarios flexibles"},
  ],
  "reading-social-organization-20": [
    {"id": "reading-social-organization-20-x1", "type": "true-false", "prompt": "La autora ya sabe exactamente qué tipo de organización quiere buscar.", "correctAnswer": "false", "justification": "Llevo tiempo queriendo hacer voluntariado, pero no sé por dónde empezar ni qué tipo de organización buscar."},
    {"id": "reading-social-organization-20-x2", "type": "mcq", "prompt": "¿Qué le pide la autora a los demás usuarios del foro?", "correctAnswer": "Recomendaciones para encontrar oportunidades cerca de su ciudad", "options": ["Recomendaciones para encontrar oportunidades cerca de su ciudad", "Dinero para financiar un proyecto social", "Un contacto en una organización internacional", "Consejos para viajar a otro país para ayudar"]},
    {"id": "reading-social-organization-20-x3", "type": "short", "prompt": "¿Dónde quiere encontrar oportunidades de voluntariado la autora?", "correctAnswer": "cerca de mi ciudad"},
  ],
  "reading-social-organization-18": [
    {"id": "reading-social-organization-18-x1", "type": "true-false", "prompt": "Carolina considera que la desinformación puede hacer que la opinión pública ignore violaciones de derechos humanos.", "correctAnswer": "true", "justification": "Cada vez es más fácil manipular la opinión pública para que ignore violaciones de derechos humanos que ocurren ante nuestros ojos, simplemente porque no encajan con una narrativa cómoda."},
    {"id": "reading-social-organization-18-x2", "type": "mcq", "prompt": "¿Por qué decidió Carolina dedicarse a los derechos humanos?", "correctAnswer": "Porque presenció cómo la falta de acceso a la justicia afectaba a las familias más pobres de su barrio", "options": ["Porque estudió derecho en el extranjero y quiso aplicar lo aprendido", "Porque presenció cómo la falta de acceso a la justicia afectaba a las familias más pobres de su barrio", "Porque un familiar cercano fue víctima de una violación de derechos humanos", "Porque una organización internacional le ofreció un puesto de trabajo"]},
    {"id": "reading-social-organization-18-x3", "type": "short", "prompt": "¿Qué consejo da Carolina a un joven que quiere involucrarse pero no sabe por dónde empezar?", "correctAnswer": "Que empiece localmente"},
  ],
  "reading-social-organization-19": [
    {"id": "reading-social-organization-19-x1", "type": "true-false", "prompt": "Según el texto, el servicio social podría ayudar a reducir la división entre distintos grupos sociales.", "correctAnswer": "true", "justification": "Por un lado, entiendo el argumento: un año dedicado a servir a la comunidad podría fomentar valores como la responsabilidad colectiva y reducir la creciente división entre distintos grupos sociales que apenas interactúan entre sí."},
    {"id": "reading-social-organization-19-x2", "type": "mcq", "prompt": "¿En qué momento se aplicaría el año de servicio social propuesto?", "correctAnswer": "Al terminar el instituto", "options": ["Al terminar el instituto", "Al terminar la universidad", "Al cumplir dieciocho años en un trabajo", "Al jubilarse"]},
    {"id": "reading-social-organization-19-x3", "type": "short", "prompt": "¿Qué tres ámbitos se mencionan para realizar el servicio?", "correctAnswer": "militar, medioambiental o comunitario"},
  ],
  "reading-sharing-planet-12": [
    {"id": "reading-sharing-planet-12-x1", "type": "true-false", "prompt": "Para hacer compost se necesita un contenedor con buena ventilación.", "correctAnswer": "true", "justification": "Primero, consigue un contenedor con buena ventilación, ya sea comprado o hecho con materiales reciclados."},
    {"id": "reading-sharing-planet-12-x2", "type": "mcq", "prompt": "¿Qué tipo de materiales secos se deben añadir a la mezcla del compost?", "correctAnswer": "Hojas o cartón", "options": ["Hojas o cartón", "Carne y lácteos", "Aceites y carne", "Cáscaras de fruta y verdura"]},
    {"id": "reading-sharing-planet-12-x3", "type": "short", "prompt": "¿Qué necesita la mezcla cuando se remueve cada semana?", "correctAnswer": "oxígeno"},
  ],
  "reading-sharing-planet-14": [
    {"id": "reading-sharing-planet-14-x1", "type": "true-false", "prompt": "Tomás afirma que es un experto en climatología.", "correctAnswer": "false", "justification": "No estoy aquí porque sea un experto en climatología, sino porque, como muchos jóvenes de mi generación, heredaré las consecuencias de decisiones que no tomé yo."},
    {"id": "reading-sharing-planet-14-x2", "type": "mcq", "prompt": "Según Tomás, ¿qué no es suficiente frente a la escala del problema?", "correctAnswer": "Los pequeños gestos individuales", "options": ["Las conferencias internacionales", "Los pequeños gestos individuales", "Las energías renovables", "Los datos científicos"]},
    {"id": "reading-sharing-planet-14-x3", "type": "short", "prompt": "¿En qué tipo de energía quiere Tomás que se realice una inversión masiva?", "correctAnswer": "energías renovables"},
  ],
  "reading-sharing-planet-15": [
    {"id": "reading-sharing-planet-15-x1", "type": "true-false", "prompt": "Carla dice que el paisaje del parque es aburrido.", "correctAnswer": "false", "justification": "El paisaje es impresionante, pero también un poco triste de ver."},
    {"id": "reading-sharing-planet-15-x2", "type": "mcq", "prompt": "¿Qué espera Carla para el futuro del parque?", "correctAnswer": "Que el parque siga existiendo tal como lo conocemos", "options": ["Que el parque siga existiendo tal como lo conocemos", "Que se construya un hotel dentro del parque", "Que el parque cierre sus puertas al público", "Que se planten menos árboles en el bosque"]},
    {"id": "reading-sharing-planet-15-x3", "type": "short", "prompt": "¿Qué tipo de árboles plantó la familia de Carla?", "correctAnswer": "árboles nativos"},
  ],
  "reading-sharing-planet-13": [
    {"id": "reading-sharing-planet-13-x1", "type": "true-false", "prompt": "Según el informe, las poblaciones de especies marinas monitoreadas han disminuido en promedio un veinte por ciento desde el año dos mil.", "correctAnswer": "false", "justification": "Según los datos recopilados, las poblaciones de especies marinas monitoreadas han disminuido en promedio un treinta y ocho por ciento desde el año dos mil, debido principalmente a la sobrepesca, la contaminación por plásticos y la acidificación de los océanos causada por el cambio climático."},
    {"id": "reading-sharing-planet-13-x2", "type": "mcq", "prompt": "¿Quién elaboró el informe?", "correctAnswer": "Un consorcio internacional de institutos oceanográficos", "options": ["Un consorcio internacional de institutos oceanográficos", "Un gobierno de un país costero", "Una asociación de pescadores artesanales", "Una empresa internacional de turismo marino"]},
    {"id": "reading-sharing-planet-13-x3", "type": "short", "prompt": "¿Qué proporción de los arrecifes documentados en los años noventa ya no existe en su forma original?", "correctAnswer": "la mitad"},
  ],
  "reading-sharing-planet-17": [
    {"id": "reading-sharing-planet-17-x1", "type": "true-false", "prompt": "Según la publicación, cerrar el grifo mientras se cepilla los dientes fue el cambio más difícil para la autora.", "correctAnswer": "false", "justification": "Cerrar el grifo mientras me cepillo los dientes fue el cambio más fácil, y aun así ahorra bastante agua cada día."},
    {"id": "reading-sharing-planet-17-x2", "type": "mcq", "prompt": "¿Qué le pasó a la factura de agua de la autora después de un mes?", "correctAnswer": "Bajó notablemente", "options": ["Bajó notablemente", "Subió un poco", "No cambió", "Se duplicó"]},
    {"id": "reading-sharing-planet-17-x3", "type": "short", "prompt": "¿Qué le pide la autora a sus seguidores al final de la publicación?", "correctAnswer": "más trucos para compartir"},
  ],
  "reading-sharing-planet-16": [
    {"id": "reading-sharing-planet-16-x1", "type": "true-false", "prompt": "La reseña critica que el libro adopte un tono catastrofista.", "correctAnswer": "false", "justification": "Lo que más aprecio del libro es que evita el tono catastrofista que domina gran parte de la conversación pública sobre este tema."},
    {"id": "reading-sharing-planet-16-x2", "type": "mcq", "prompt": "¿Qué es lo que más aprecia el reseñador del libro?", "correctAnswer": "Que evita el tono catastrofista", "options": ["Que evita el tono catastrofista", "Que su precio es muy bajo", "Que incluye muchas fotografías", "Que tiene un lenguaje muy técnico"]},
    {"id": "reading-sharing-planet-16-x3", "type": "short", "prompt": "¿Qué adjetivo usa el reseñador para describir el tono final del libro?", "correctAnswer": "esperanzadora"},
  ],
  "reading-sharing-planet-18": [
    {"id": "reading-sharing-planet-18-x1", "type": "true-false", "prompt": "Según la autora, el experimento fue más fácil de lo que ella imaginaba.", "correctAnswer": "false", "justification": "Quería compartir lo que aprendí, porque fue mucho más difícil de lo que imaginaba."},
    {"id": "reading-sharing-planet-18-x2", "type": "mcq", "prompt": "¿Dónde compra la autora siempre que es posible?", "correctAnswer": "En tiendas a granel", "options": ["En tiendas a granel", "En farmacias", "En tiendas de ropa", "Por internet"]},
    {"id": "reading-sharing-planet-18-x3", "type": "short", "prompt": "¿Qué parte de la ropa contiene plástico?", "correctAnswer": "las etiquetas"},
  ],
  "reading-sharing-planet-19": [
    {"id": "reading-sharing-planet-19-x1", "type": "true-false", "prompt": "La jornada de limpieza duró cuatro horas.", "correctAnswer": "false", "justification": "Entre todos los voluntarios recogimos más de cien kilos de basura en solo tres horas."},
    {"id": "reading-sharing-planet-19-x2", "type": "mcq", "prompt": "¿Cómo se sentía la autora al final de la jornada?", "correctAnswer": "Cansada, pero muy satisfecha", "options": ["Cansada, pero muy satisfecha", "Aburrida y triste", "Asustada y sorprendida", "Alegre y nerviosa"]},
    {"id": "reading-sharing-planet-19-x3", "type": "short", "prompt": "¿Quién organizó la jornada de limpieza de playa?", "correctAnswer": "una asociación ambiental local"},
  ],
  "reading-identities-21": [
    {"id": "reading-identities-21-x1", "type": "true-false", "prompt": "La abuela crió a cuatro hijos lejos de su familia.", "correctAnswer": "false", "justification": "Su acento no es un error, es la prueba de todo lo que ha vivido: dejó su pueblo con veinte años, aprendió un idioma nuevo sola y crió a tres hijos lejos de su familia."},
    {"id": "reading-identities-21-x2", "type": "mcq", "prompt": "¿Por qué la autora pensó mucho sobre su propia forma de hablar?", "correctAnswer": "Porque la respuesta de su abuela le hizo reflexionar.", "options": ["Porque su abuela le pidió que cambiara su acento.", "Porque la respuesta de su abuela le hizo reflexionar.", "Porque sus profesores le corrigieron el inglés.", "Porque se mudó a Galicia con su familia."]},
    {"id": "reading-identities-21-x3", "type": "short", "prompt": "¿De qué región es el acento de la abuela?", "correctAnswer": "gallego"},
  ],
  "reading-identities-23": [
    {"id": "reading-identities-23-x1", "type": "true-false", "prompt": "Los participantes del campamento tienen entre doce y quince años.", "correctAnswer": "false", "justification": "jóvenes de entre catorce y diecisiete años convivirán en cabañas compartidas con compañeros de otros países."},
    {"id": "reading-identities-23-x2", "type": "mcq", "prompt": "¿Qué se realiza cada tarde en el campamento?", "correctAnswer": "actividades culturales", "options": ["talleres de idiomas", "actividades culturales", "clases de matemáticas", "excursiones a la playa"]},
    {"id": "reading-identities-23-x3", "type": "short", "prompt": "¿Con quiénes conviven los jóvenes en las cabañas?", "correctAnswer": "compañeros de otros países"},
  ],
  "reading-sharing-planet-20": [
    {"id": "reading-sharing-planet-20-x1", "type": "true-false", "prompt": "Según el doctor Iglesias, sería posible revertir completamente el cambio climático a corto plazo.", "correctAnswer": "false", "justification": "\"Revertir\" completamente, probablemente sí, al menos a corto plazo."},
    {"id": "reading-sharing-planet-20-x2", "type": "mcq", "prompt": "Según el doctor Iglesias, ¿por qué es tan importante la diferencia entre un aumento de temperatura de 1,5 grados y de 3 grados?", "correctAnswer": "Porque implica un impacto enorme para la vida en el planeta", "options": ["Porque implica un impacto enorme para la vida en el planeta", "Porque con 3 grados las energías renovables serían más baratas", "Porque solo afectaría a los países tropicales", "Porque con 1,5 grados la temperatura dejaría de subir"]},
    {"id": "reading-sharing-planet-20-x3", "type": "short", "prompt": "¿Qué tipo de energía ha bajado de coste en la última década, según el texto?", "correctAnswer": "las energías renovables"},
  ],
  "reading-identities-22": [
    {"id": "reading-identities-22-x1", "type": "true-false", "prompt": "Iker se mudó a una ciudad grande después de contar su transición.", "correctAnswer": "false", "justification": "Internet me ayudó a encontrar a otras personas con experiencias parecidas, y eso me dio fuerzas para ser yo mismo en mi propio pueblo, sin tener que mudarme a una ciudad grande."},
    {"id": "reading-identities-22-x2", "type": "mcq", "prompt": "¿Qué sentía Iker antes de contárselo a su comunidad?", "correctAnswer": "Miedo", "options": ["Miedo", "Vergüenza", "Indiferencia", "Orgullo"]},
    {"id": "reading-identities-22-x3", "type": "short", "prompt": "¿Qué dejaron de hacer algunos vecinos con Iker?", "correctAnswer": "saludarme"},
  ],
  "reading-identities-24": [
    {"id": "reading-identities-24-x1", "type": "true-false", "prompt": "La autora quiere que su yo del futuro lea la carta dentro de cinco años.", "correctAnswer": "false", "justification": "Te escribo esta carta el día que cumplo quince años, para que la leas dentro de diez años exactos."},
    {"id": "reading-identities-24-x2", "type": "mcq", "prompt": "¿Qué espera la autora de la persona en la que se convertirá?", "correctAnswer": "Que se sienta orgullosa de sí misma, aunque sea distinta a lo que imagina hoy", "options": ["Que se sienta orgullosa de sí misma, aunque sea distinta a lo que imagina hoy", "Que siga viviendo en la misma ciudad que ahora", "Que haya decidido estudiar música en la universidad", "Que nunca cambie de opinión sobre nada"]},
    {"id": "reading-identities-24-x3", "type": "short", "prompt": "¿Qué cumple la autora el día en que escribe la carta?", "correctAnswer": "quince años"},
  ],
  "reading-experiences-21": [
    {"id": "reading-experiences-21-x1", "type": "true-false", "prompt": "La autora llegó tarde a su primer día en la universidad.", "correctAnswer": "false", "justification": "Llegué media hora antes porque tenía miedo de perderme en el campus, que es enorme comparado con mi antiguo instituto."},
    {"id": "reading-experiences-21-x2", "type": "mcq", "prompt": "¿Por qué se sintió la autora pequeñísima al principio de la primera clase?", "correctAnswer": "Porque la sala tenía casi doscientos estudiantes.", "options": ["Porque la sala tenía casi doscientos estudiantes.", "Porque el profesor era muy severo.", "Porque no conocía a nadie en el campus.", "Porque llegó después de que empezara la clase."]},
    {"id": "reading-experiences-21-x3", "type": "short", "prompt": "¿Cuántos estudiantes había en la sala de la primera clase?", "correctAnswer": "casi doscientos"},
  ],
  "reading-identities-25": [
    {"id": "reading-identities-25-x1", "type": "true-false", "prompt": "Los protagonistas del documental son de primera generación, es decir, nacieron en Latinoamérica y emigraron a Europa de adultos.", "correctAnswer": "false", "justification": "\"Raíces y alas\" sigue a cinco jóvenes de segunda generación que crecieron en Europa con padres inmigrantes de distintos países latinoamericanos."},
    {"id": "reading-identities-25-x2", "type": "mcq", "prompt": "Según la reseña, ¿qué es lo que más destaca del documental?", "correctAnswer": "La honestidad de los testimonios", "options": ["La honestidad de los testimonios", "Los efectos visuales", "La banda sonora original", "La rapidez del montaje"]},
    {"id": "reading-identities-25-x3", "type": "short", "prompt": "¿En qué continente crecieron los protagonistas del documental?", "correctAnswer": "Europa"},
  ],
  "reading-identities-26": [
    {"id": "reading-identities-26-x1", "type": "true-false", "prompt": "La autora lleva dos meses sin teñirse el pelo.", "correctAnswer": "true", "justification": "Llevo dos meses sin teñirme el pelo por primera vez desde los catorce años"},
    {"id": "reading-identities-26-x2", "type": "mcq", "prompt": "¿Con qué asociaba la autora el color rubio?", "correctAnswer": "Con verse mejor o más aceptada", "options": ["Con verse mejor o más aceptada", "Con la moda de sus amigas", "Con la diversión", "Con la juventud"]},
    {"id": "reading-identities-26-x3", "type": "short", "prompt": "¿Qué veía la autora casi solo en la tele cuando crecía?", "correctAnswer": "personas rubias"},
  ],
  "reading-experiences-22": [
    {"id": "reading-experiences-22-x1", "type": "true-false", "prompt": "Según el texto, en las sociedades occidentales contemporáneas todos los ritos de iniciación se mantienen intactos.", "correctAnswer": "false", "justification": "En las sociedades occidentales contemporáneas, muchos de estos ritos han desaparecido o se han vuelto puramente simbólicos, lo cual, según algunos expertos, explicaría por qué a tantos jóvenes actuales les cuesta identificar el momento exacto en el que se convirtieron en adultos."},
    {"id": "reading-experiences-22-x2", "type": "mcq", "prompt": "¿Qué ocurre en la última fase de los ritos de iniciación, según los antropólogos?", "correctAnswer": "La reincorporación a la comunidad con un nuevo estatus reconocido por todos", "options": ["La separación definitiva del joven de su familia", "Un periodo de transición sin ninguna dificultad", "La reincorporación a la comunidad con un nuevo estatus reconocido por todos", "La celebración de una fiesta pública con regalos"]},
    {"id": "reading-experiences-22-x3", "type": "short", "prompt": "¿Qué prenda tradicional visten los jóvenes durante el Seijin Shiki?", "correctAnswer": "kimono tradicional"},
  ],
  "reading-experiences-24": [
    {"id": "reading-experiences-24-x1", "type": "true-false", "prompt": "Lucía lleva tres días en el festival.", "correctAnswer": "true", "justification": "Llevamos tres días aquí y no he dormido más de cinco horas por noche, ¡pero mereció totalmente la pena!"},
    {"id": "reading-experiences-24-x2", "type": "mcq", "prompt": "¿Cómo se protegen Lucía y sus amigos del calor durante el día?", "correctAnswer": "Pasan las tardes bajo la sombra", "options": ["Pasan las tardes bajo la sombra", "Se bañan en un lago cercano", "Duermen en el coche con el aire acondicionado", "Se quedan en el escenario sin parar"]},
    {"id": "reading-experiences-24-x3", "type": "short", "prompt": "¿A qué hora es el concierto sorpresa?", "correctAnswer": "a medianoche"},
  ],
  "reading-experiences-25": [
    {"id": "reading-experiences-25-x1", "type": "true-false", "prompt": "ViajeroConstante viajó solo por primera vez a los veinte años.", "correctAnswer": "false", "justification": "Yo viajé solo por primera vez a los diecinueve, con muchísimo miedo, y fue una de las mejores decisiones de mi vida."},
    {"id": "reading-experiences-25-x2", "type": "mcq", "prompt": "¿Qué decide finalmente hacer Mochilera21?", "correctAnswer": "Viajar sola siguiendo los consejos de seguridad de PrudenciaAnte", "options": ["Cancelar el viaje y esperar un año", "Viajar con sus amigos este verano", "Viajar sola siguiendo los consejos de seguridad de PrudenciaAnte", "Viajar a Italia con su familia"]},
    {"id": "reading-experiences-25-x3", "type": "short", "prompt": "¿Qué les pasa a los amigos de Mochilera21 este verano?", "correctAnswer": "están ocupados"},
  ],
  "reading-experiences-23": [
    {"id": "reading-experiences-23-x1", "type": "true-false", "prompt": "Según la entrevista, el padre de Carla era un piloto profesional de karts.", "correctAnswer": "false", "justification": "Mi padre corría karts como afición cuando era joven, y me llevó a un circuito por primera vez cuando tenía ocho años."},
    {"id": "reading-experiences-23-x2", "type": "mcq", "prompt": "Según Carla, ¿qué ocurrió con los comentarios de algunos rivales?", "correctAnswer": "Desaparecieron cuando empezó a ganar carreras.", "options": ["Desaparecieron cuando empezó a ganar carreras.", "Continuaron durante toda su carrera.", "Fueron sustituidos por elogios de su padre.", "Nunca la afectaron en absoluto."]},
    {"id": "reading-experiences-23-x3", "type": "short", "prompt": "¿En qué campeonato compite Carla?", "correctAnswer": "campeonato nacional de karting"},
  ],
  "reading-experiences-26": [
    {"id": "reading-experiences-26-x1", "type": "true-false", "prompt": "Según el informe, los jóvenes de dieciocho a veinticinco años prefieren las posesiones materiales a las experiencias.", "correctAnswer": "false", "justification": "Según el informe, esta generación prioriza las experiencias sobre las posesiones materiales, y busca actividades como el senderismo extremo, el buceo en aguas remotas o las expediciones en bicicleta de montaña por terrenos poco transitados."},
    {"id": "reading-experiences-26-x2", "type": "mcq", "prompt": "¿Qué porcentaje de los encuestados afirma haber elegido su destino tras ver contenido en plataformas digitales?", "correctAnswer": "Sesenta y tres por ciento", "options": ["Veintitrés por ciento", "Sesenta y tres por ciento", "Cuarenta y cinco por ciento", "Cincuenta por ciento"]},
    {"id": "reading-experiences-26-x3", "type": "short", "prompt": "¿Qué ha aumentado paralelamente con el crecimiento de las actividades extremas?", "correctAnswer": "el número de accidentes"},
  ],
  "reading-human-ingenuity-22": [
    {"id": "reading-human-ingenuity-22-x1", "type": "true-false", "prompt": "Los ingenieros consideran que la tecnología de impresión 3D ya puede generalizarse sin necesidad de más pruebas.", "correctAnswer": "false", "justification": "Los ingenieros insisten en que se necesitan más años de pruebas antes de generalizar su uso."},
    {"id": "reading-human-ingenuity-22-x2", "type": "mcq", "prompt": "¿Con qué tipo de material se depositan las capas en las impresoras 3D para construir viviendas?", "correctAnswer": "Un material similar al hormigón", "options": ["Madera laminada", "Un material similar al hormigón", "Acero reciclado", "Plástico reforzado"]},
    {"id": "reading-human-ingenuity-22-x3", "type": "short", "prompt": "¿Qué se sigue para completar toda la estructura de la casa?", "correctAnswer": "un diseño digital"},
  ],
  "reading-human-ingenuity-21": [
    {"id": "reading-human-ingenuity-21-x1", "type": "true-false", "prompt": "Según la reseña, el autor recomienda el juego solo a adultos con experiencia en programación.", "correctAnswer": "false", "justification": "Aun con este fallo, recomiendo \"Codex\" a cualquier adolescente curioso por la programación, especialmente si lo juega acompañado de alguien con más experiencia que pueda explicar los conceptos más difíciles."},
    {"id": "reading-human-ingenuity-21-x2", "type": "mcq", "prompt": "¿Qué problema aparece hacia la mitad del juego, según el autor?", "correctAnswer": "Los conceptos se vuelven más avanzados sin suficiente explicación adicional.", "options": ["Los conceptos se vuelven más avanzados sin suficiente explicación adicional.", "El diseño visual deja de ser atractivo.", "Los puzles se vuelven demasiado fáciles de resolver.", "El personaje deja de poder moverse por la biblioteca."]},
    {"id": "reading-human-ingenuity-21-x3", "type": "short", "prompt": "¿Qué se escribe para mover a un personaje en el juego?", "correctAnswer": "fragmentos de código"},
  ],
  "reading-human-ingenuity-23": [
    {"id": "reading-human-ingenuity-23-x1", "type": "true-false", "prompt": "Rodrigo lleva cuatro años aprendiendo a programar por su cuenta.", "correctAnswer": "false", "justification": "Actualmente curso primero de bachillerato y llevo dos años aprendiendo a programar por mi cuenta, principalmente a través de tutoriales gratuitos en internet."},
    {"id": "reading-human-ingenuity-23-x2", "type": "mcq", "prompt": "¿Por qué Rodrigo solicita la beca?", "correctAnswer": "Porque su familia no puede asumir el coste completo del curso", "options": ["Porque su familia no puede asumir el coste completo del curso", "Porque quiere cambiar de instituto el próximo año", "Porque necesita aprender un idioma extranjero para el bachillerato"]},
    {"id": "reading-human-ingenuity-23-x3", "type": "short", "prompt": "¿Qué curso académico cursa Rodrigo actualmente?", "correctAnswer": "primero de bachillerato"},
  ],
  "reading-human-ingenuity-24": [
    {"id": "reading-human-ingenuity-24-x1", "type": "true-false", "prompt": "Aitana tiene planes de crear su propia empresa después de ganar el premio.", "correctAnswer": "false", "justification": "Lo más bonito ha sido que varias empresas se han puesto en contacto conmigo, aunque de momento solo quiero terminar el instituto tranquila."},
    {"id": "reading-human-ingenuity-24-x2", "type": "mcq", "prompt": "¿Qué hizo que la abuela de Aitana se diera cuenta de la fuga de agua?", "correctAnswer": "Recibió una factura de agua muy alta.", "options": ["Escuchó ruidos extraños en las tuberías de la casa.", "Recibió una factura de agua muy alta.", "Un vecino le avisó del problema.", "Vio agua escapando por el suelo del jardín."]},
    {"id": "reading-human-ingenuity-24-x3", "type": "short", "prompt": "¿Cuántos prototipos rompió Aitana antes de conseguir uno que funcionara?", "correctAnswer": "tres"},
  ],
  "reading-human-ingenuity-25": [
    {"id": "reading-human-ingenuity-25-x1", "type": "true-false", "prompt": "La autora afirma que a veces la aplicación comete errores en los cálculos.", "correctAnswer": "true", "justification": "a veces se equivoca en cálculos y, si no tuviera ya una base sólida gracias a mi profesora, probablemente no me habría dado cuenta del error."},
    {"id": "reading-human-ingenuity-25-x2", "type": "mcq", "prompt": "¿Por qué le preocupa un poco a la autora?", "correctAnswer": "Porque usa menos sus apuntes de clase", "options": ["Porque usa menos sus apuntes de clase", "Porque la aplicación es muy cara", "Porque no entiende los conceptos de química"]},
    {"id": "reading-human-ingenuity-25-x3", "type": "short", "prompt": "Según la conclusión de la autora, ¿para qué tipo de dudas es buena la IA?", "correctAnswer": "dudas puntuales"},
  ],
  "reading-human-ingenuity-26": [
    {"id": "reading-human-ingenuity-26-x1", "type": "true-false", "prompt": "Según la guía, los errores al aprender robótica pueden evitarse si se estudia en solitario.", "correctAnswer": "false", "justification": "Aprender en compañía de otros principiantes hace que los errores, que son inevitables, resulten mucho menos desalentadores."},
    {"id": "reading-human-ingenuity-26-x2", "type": "mcq", "prompt": "Según el texto, ¿para qué sirven los simuladores gratuitos en internet?", "correctAnswer": "Para programar robots virtuales antes de tocar uno de verdad", "options": ["Para programar robots virtuales antes de tocar uno de verdad", "Para construir robots con materiales reciclados", "Para ganar competiciones internacionales de robótica", "Para sustituir por completo los lenguajes de texto"]},
    {"id": "reading-human-ingenuity-26-x3", "type": "short", "prompt": "Según el texto, ¿qué tipo de competición se recomienda participar?", "correctAnswer": "competición local"},
  ],
  "reading-social-organization-21": [
    {"id": "reading-social-organization-21-x1", "type": "true-false", "prompt": "Según el discurso, empezar en un centro nuevo puede causar cierta inquietud a los alumnos.", "correctAnswer": "true", "justification": "Sé que empezar en un centro nuevo puede dar un poco de vértigo: pasillos desconocidos, caras nuevas y un horario que todavía no os habéis aprendido de memoria."},
    {"id": "reading-social-organization-21-x2", "type": "mcq", "prompt": "¿Qué les recomienda el orador a los nuevos alumnos respecto a los clubes y actividades extraescolares?", "correctAnswer": "Probar varias antes de decidir a cuál dedicarse", "options": ["Probar varias antes de decidir a cuál dedicarse", "Elegir una sola actividad el primer día", "No participar en ninguna durante el primer año", "Esperar a que el profesorado les asigne una actividad"]},
    {"id": "reading-social-organization-21-x3", "type": "short", "prompt": "¿Qué les desea el orador a los alumnos para el año que empiezan?", "correctAnswer": "nuevos amigos"},
  ],
  "reading-social-organization-22": [
    {"id": "reading-social-organization-22-x1", "type": "true-false", "prompt": "El informe identifica la falta de experiencia previa como uno de los factores que explican la diferencia salarial.", "correctAnswer": "true", "justification": "El estudio identifica varios factores que explican esta diferencia: la falta de experiencia previa, la sobrerrepresentación de los jóvenes en contratos temporales y a tiempo parcial, y una menor capacidad de negociación salarial frente a empleadores establecidos."},
    {"id": "reading-social-organization-22-x2", "type": "mcq", "prompt": "¿Cuánto ganan, de media, los trabajadores de entre dieciocho y veinticinco años en comparación con la media salarial general?", "correctAnswer": "Un treinta por ciento menos", "options": ["Un veinte por ciento menos", "Un treinta por ciento menos", "Un cuarenta y dos por ciento menos", "Un treinta y cinco por ciento menos"]},
    {"id": "reading-social-organization-22-x3", "type": "short", "prompt": "¿Qué organismo publicó el informe?", "correctAnswer": "Ministerio de Trabajo"},
  ],
  "reading-social-organization-23": [
    {"id": "reading-social-organization-23-x1", "type": "true-false", "prompt": "Al principio, muchos vecinos mayores confiaban plenamente en que Lucía tuviera experiencia suficiente para ser alcaldesa.", "correctAnswer": "false", "justification": "Muchos vecinos mayores dudaban de que tuviera suficiente experiencia."},
    {"id": "reading-social-organization-23-x2", "type": "mcq", "prompt": "Según Lucía, ¿qué aportan los jóvenes a los ayuntamientos?", "correctAnswer": "una perspectiva distinta", "options": ["una perspectiva distinta", "más experiencia que los funcionarios", "menos gastos en el centro de salud", "la confianza de los vecinos mayores"]},
    {"id": "reading-social-organization-23-x3", "type": "short", "prompt": "¿En qué estado se encontraba el centro de salud antes de su renovación?", "correctAnswer": "muy malas condiciones"},
  ],
  "reading-social-organization-25": [
    {"id": "reading-social-organization-25-x1", "type": "true-false", "prompt": "El programa \"Vecinos Conectados\" está dirigido a familias que llevan muchos años viviendo en el barrio.", "correctAnswer": "false", "justification": "El Ayuntamiento busca voluntarios para el programa \"Vecinos Conectados\", dirigido a familias recién llegadas al barrio."},
    {"id": "reading-social-organization-25-x2", "type": "mcq", "prompt": "¿Qué puede hacer el mentor para ayudar a la familia con el transporte?", "correctAnswer": "Explicar cómo funciona el transporte público local", "options": ["Explicar cómo funciona el transporte público local", "Conducir el coche de la familia todos los días", "Pagar los billetes de autobús de la familia", "Buscar una casa nueva para la familia"]},
    {"id": "reading-social-organization-25-x3", "type": "short", "prompt": "¿Cuántas horas libres a la semana se necesitan para ser mentor?", "correctAnswer": "un par de horas"},
  ],
  "reading-social-organization-24": [
    {"id": "reading-social-organization-24-x1", "type": "true-false", "prompt": "Escéptico88 cree que los jóvenes de dieciséis años ya tienen plenamente desarrollada la capacidad de razonamiento político.", "correctAnswer": "false", "justification": "Entiendo tu argumento, pero a los dieciséis años todavía se está formando la capacidad de razonamiento político, según varios estudios."},
    {"id": "reading-social-organization-24-x2", "type": "mcq", "prompt": "¿Cuál es el principal argumento de PoliticaJoven para defender que los jóvenes de dieciséis años puedan votar?", "correctAnswer": "Que los jóvenes de dieciséis años ya trabajan y pagan impuestos, pero no pueden votar", "options": ["Que los jóvenes de dieciséis años ya trabajan y pagan impuestos, pero no pueden votar", "Que los estudios demuestran que la madurez política llega a los dieciséis años", "Que sus padres siempre votan igual que los jóvenes", "Que en Austria el voto a los dieciséis años fue un fracaso"]},
    {"id": "reading-social-organization-24-x3", "type": "short", "prompt": "Según Marina_Vota, ¿qué merece la pena hacer antes de descartar la idea?", "correctAnswer": "estudiar esos casos"},
  ],
  "reading-social-organization-26": [
    {"id": "reading-social-organization-26-x1", "type": "true-false", "prompt": "La autora vivió en la cooperativa durante un mes.", "correctAnswer": "false", "justification": "La semana pasada me mudé temporalmente a una cooperativa de vivienda para escribir un reportaje, y la experiencia cambió por completo mi idea de cómo se puede organizar una comunidad."},
    {"id": "reading-social-organization-26-x2", "type": "mcq", "prompt": "¿Qué fue lo que más sorprendió a la autora?", "correctAnswer": "el sistema de tareas compartidas", "options": ["el sistema de tareas compartidas", "la edad de los vecinos", "el precio del alquiler", "la cantidad de habitaciones"]},
    {"id": "reading-social-organization-26-x3", "type": "short", "prompt": "¿Cuántas noches a la semana cocina cada grupo para todos?", "correctAnswer": "tres noches"},
  ],
  "reading-sharing-planet-21": [
    {"id": "reading-sharing-planet-21-x1", "type": "true-false", "prompt": "Para los conservacionistas, el regreso del lobo es una mala noticia.", "correctAnswer": "false", "justification": "Para los conservacionistas, la noticia es motivo de celebración: el lobo es una especie clave para mantener equilibrados los ecosistemas donde vive, controlando de forma natural la población de otros animales como los jabalíes."},
    {"id": "reading-sharing-planet-21-x2", "type": "mcq", "prompt": "¿Qué ha anunciado el gobierno regional?", "correctAnswer": "Un plan de compensaciones ampliado", "options": ["Un plan de compensaciones ampliado", "La prohibición de los vallados especiales", "La reintroducción del jabalí en las zonas afectadas", "Una reducción de las medidas de protección"]},
    {"id": "reading-sharing-planet-21-x3", "type": "short", "prompt": "¿Desde hace cuánto tiempo no se veía el lobo en algunas zonas donde ahora reaparece?", "correctAnswer": "más de cincuenta años"},
  ],
  "reading-sharing-planet-23": [
    {"id": "reading-sharing-planet-23-x1", "type": "true-false", "prompt": "El ayuntamiento de la ciudad de Nadia no ha declarado la emergencia climática.", "correctAnswer": "false", "justification": "Conseguimos que nuestro ayuntamiento declarara la emergencia climática, aunque todavía queda muchísimo por hacer."},
    {"id": "reading-sharing-planet-23-x2", "type": "mcq", "prompt": "¿Por qué Nadia considera válido su argumento frente a los adultos que le dicen que es demasiado joven?", "correctAnswer": "Porque la ciencia climática son datos y no una opinión", "options": ["Porque la ciencia climática son datos y no una opinión", "Porque ya tiene estudios universitarios terminados", "Porque el ayuntamiento le ha pedido que hable en público", "Porque su instituto le ha dado un premio por su trabajo"]},
    {"id": "reading-sharing-planet-23-x3", "type": "short", "prompt": "¿Dónde sugiere Nadia que empiece un adolescente que quiere involucrarse?", "correctAnswer": "en su propio instituto"},
  ],
  "reading-sharing-planet-22": [
    {"id": "reading-sharing-planet-22-x1", "type": "true-false", "prompt": "Según la guía, hay que regar la planta todos los días sin comprobar antes la humedad de la tierra.", "correctAnswer": "false", "justification": "Cuarto, riega con regularidad, pero sin exceso; comprueba la humedad de la tierra con el dedo antes de regar cada vez."},
    {"id": "reading-sharing-planet-22-x2", "type": "mcq", "prompt": "Según la guía, ¿qué aprenderás con cada temporada?", "correctAnswer": "qué funciona mejor en tu espacio concreto", "options": ["qué funciona mejor en tu espacio concreto", "cómo construir un jardín grande", "qué abonos químicos son más baratos", "cuándo vender tus verduras en el mercado"]},
    {"id": "reading-sharing-planet-22-x3", "type": "short", "prompt": "¿En qué lugar puedes empezar una huerta urbana?", "correctAnswer": "en cualquier balcón"},
  ],
  "reading-sharing-planet-24": [
    {"id": "reading-sharing-planet-24-x1", "type": "true-false", "prompt": "Elsa lleva en la reserva natural un mes.", "correctAnswer": "false", "justification": "Te escribo desde la reserva natural donde estoy pasando una semana como voluntaria, contando aves junto a un grupo de biólogos."},
    {"id": "reading-sharing-planet-24-x2", "type": "mcq", "prompt": "¿Por qué se quedaron todos en silencio al ver el águila real?", "correctAnswer": "Para no espantarla", "options": ["Para no espantarla", "Porque tenían mucho sueño", "Porque empezó a llover", "Porque el guía se lo pidió en voz alta"]},
    {"id": "reading-sharing-planet-24-x3", "type": "short", "prompt": "¿Qué tienen para iluminarse por las noches en la cabaña?", "correctAnswer": "linternas"},
  ],
  "reading-sharing-planet-26": [
    {"id": "reading-sharing-planet-26-x1", "type": "true-false", "prompt": "El Ministerio pretende llegar a otras cinco mil escuelas antes de que termine la década.", "correctAnswer": "false", "justification": "El Ministerio anuncia que la siguiente fase del programa buscará llegar a otras dos mil escuelas antes de que termine la década, priorizando centros situados en zonas rurales con menor acceso a la red eléctrica general."},
    {"id": "reading-sharing-planet-26-x2", "type": "mcq", "prompt": "¿Cuál es el beneficio educativo inesperado que destaca el informe?", "correctAnswer": "Los estudiantes analizan datos reales de producción energética en clase.", "options": ["Los estudiantes analizan datos reales de producción energética en clase.", "Los colegios reciben más subvenciones del gobierno regional.", "Los alumnos aprenden a instalar paneles solares en sus casas.", "Se reducen los costes del transporte escolar."]},
    {"id": "reading-sharing-planet-26-x3", "type": "short", "prompt": "¿Cuántas escuelas más pretende alcanzar la siguiente fase del programa?", "correctAnswer": "dos mil"},
  ],
  "reading-sharing-planet-25": [
    {"id": "reading-sharing-planet-25-x1", "type": "true-false", "prompt": "Según la reseña, la novela se centra únicamente en cifras y gráficos sobre los glaciares.", "correctAnswer": "false", "justification": "mezcla la historia de una glacióloga con datos científicos reales sobre el retroceso de los glaciares andinos, en una novela que engancha desde la primera página."},
    {"id": "reading-sharing-planet-25-x2", "type": "mcq", "prompt": "¿Por qué recomienda la reseña el libro?", "correctAnswer": "Para quienes quieren entender el cambio climático desde una perspectiva humana", "options": ["Para quienes quieren entender el cambio climático desde una perspectiva humana", "Para quienes buscan novelas de romance científico", "Para quienes desean aprender glaciología técnica", "Para quienes prefieren novelas sin tramas familiares"]},
    {"id": "reading-sharing-planet-25-x3", "type": "short", "prompt": "¿Qué tipo de datos mezcla la novela con la historia de la glacióloga?", "correctAnswer": "datos científicos reales"},
  ],
};

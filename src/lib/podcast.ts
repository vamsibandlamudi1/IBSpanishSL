/// File: src/lib/podcast.ts
//
// Listening-comprehension episodes, Notes-in-Spanish style: two hosts
// (Marina, Ben) chatting in natural intermediate/upper-intermediate Spanish
// for ~9-10 minutes of spoken audio, one episode per official IB Spanish B
// theme. Read aloud via the same Web Speech API as Reading (see PodcastModule.tsx),
// with the currently-spoken word highlighted and vocabulary words glossed on hover.

import { PodcastEpisode } from "./types";

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: "identities-redes",
    themeId: "identities",
    title: "¿Quiénes somos? La identidad en la era digital",
    description:
      "Marina y Ben hablan sobre cómo las redes sociales, la cultura y los valores personales dan forma a la identidad de los jóvenes de hoy.",
    level: "medium",
    durationLabel: "~9 min",
    bodyEs: `Marina: ¡Hola a todos y bienvenidos a un episodio más de nuestro podcast! Soy Marina.

Ben: Y yo soy Ben. Hoy vamos a hablar de un tema que nos afecta a todos, especialmente a los jóvenes: la identidad personal y cómo cambia con las redes sociales.

Marina: Es un tema fascinante, Ben, porque antes la identidad se formaba sobre todo en la familia, en el colegio, con los amigos del barrio. Ahora, en cambio, muchos adolescentes pasan horas cada día en Instagram, TikTok o Snapchat, y eso también forma parte de quiénes son.

Ben: Exacto. Y lo curioso es que en las redes sociales la gente muestra una versión editada de sí misma. Suben solo las fotos más bonitas, los mejores momentos, los viajes más interesantes. Nadie sube una foto de un mal día, ¿verdad?

Marina: Bueno, casi nadie. Y eso crea una especie de identidad digital que no siempre coincide con la identidad real. Los psicólogos hablan de la presión de la perfección: los jóvenes sienten que tienen que parecer felices, guapos y exitosos todo el tiempo.

Ben: A mí me parece muy interesante lo que comentas, porque genera mucha ansiedad. Hay estudios que dicen que cuantas más horas pasa un adolescente comparándose con otros en redes sociales, más baja es su autoestima.

Marina: Sí, el término que se usa es comparación social. Nos comparamos constantemente con personas que, en realidad, solo nos muestran su mejor cara. Es un poco injusto, ¿no crees?

Ben: Totalmente injusto. Pero también hay un lado positivo, ¿verdad? Las redes sociales permiten que jóvenes que se sienten diferentes, por ejemplo por su cultura o sus intereses, encuentren una comunidad de personas parecidas a ellos.

Marina: Claro, eso es muy importante. Antes, si vivías en un pueblo pequeño y no encontrabas a nadie que compartiera tus gustos o tu forma de ver el mundo, te sentías muy solo. Ahora, gracias a internet, puedes encontrar a miles de personas con intereses similares, aunque vivan al otro lado del mundo.

Ben: Y eso ayuda a construir una identidad más segura, ¿no? Sentirte parte de un grupo, aunque sea virtual, te da confianza.

Marina: Exactamente. Pero también hay riesgos, como el llamado postureo: la necesidad de aparentar una vida perfecta para conseguir más "me gusta". Algunos jóvenes gastan dinero que no tienen para comprarse ropa de marca solo para las fotos.

Ben: He leído sobre eso. Y también está el problema del ciberacoso. Cuando tu identidad se construye tanto en internet, los comentarios negativos duelen todavía más, porque sientes que están atacando quién eres de verdad.

Marina: Es un tema muy delicado. Por eso muchos colegios ahora enseñan lo que se llama alfabetización digital: aprender a usar las redes sociales de forma sana, sabiendo que lo que ves no siempre es la realidad completa.

Ben: Otro aspecto interesante es la identidad bicultural. Pensemos en los millones de jóvenes que crecen entre dos culturas, por ejemplo hijos de inmigrantes que hablan español en casa e inglés en el colegio.

Marina: Sí, ese tipo de identidad es muy rica pero también puede ser complicada. A veces esos jóvenes sienten que no pertenecen completamente a ninguna de las dos culturas, ni a la de sus padres ni a la del país donde viven.

Ben: Es lo que algunos sociólogos llaman identidad híbrida. No eres ni de aquí ni de allí, eres una mezcla única de las dos.

Marina: Y creo que eso, con el tiempo, se convierte en una fortaleza. Hablar dos idiomas, entender dos formas de pensar, moverte entre dos mundos, te da una perspectiva muy amplia.

Ben: Totalmente. Y no podemos olvidar tampoco los valores y las creencias, que son otra parte fundamental de la identidad. La religión, la ética, la forma de ver la familia... todo eso también nos define.

Marina: Claro. Por ejemplo, hay jóvenes que se identifican mucho con su religión y la practican con orgullo, y otros que se alejan completamente de las tradiciones familiares y buscan su propio camino filosófico.

Ben: Y ninguna de las dos opciones es mejor que la otra, simplemente son formas diferentes de construir quién eres.

Marina: Exacto. La identidad, al final, tiene que ver con las decisiones que tomamos sobre qué valores queremos seguir, no solo con lo que heredamos de nuestra familia.

Ben: Y hablando de identidad, no podemos olvidar la imagen corporal. Las redes sociales muestran cuerpos "perfectos" con filtros, y muchos jóvenes sienten que su cuerpo real no es suficiente.

Marina: Es un problema serio. Se ha demostrado que el uso excesivo de aplicaciones con filtros puede afectar negativamente la autoestima de los adolescentes.

Ben: Por eso es tan importante hablar abiertamente de estos temas, tanto en casa como en el colegio, para que los jóvenes entiendan que la identidad va mucho más allá de la apariencia física.

Marina: A ver, Ben, para terminar, ¿tú cómo describirías tu propia identidad? ¿Cambia mucho según el contexto?

Ben: Buena pregunta. Yo creo que todos tenemos varias facetas de la misma identidad. Con mi familia soy más tranquilo, con mis amigos soy más divertido, y en el trabajo soy más serio y profesional. Y no creo que eso sea falso, simplemente nos adaptamos según la situación.

Marina: Totalmente de acuerdo. Bueno, esto ha sido todo por hoy. Esperamos que este episodio os haya hecho reflexionar sobre vuestra propia identidad digital.

Ben: Y no olvidéis practicar el vocabulario y contestar las preguntas de comprensión al final del episodio. ¡Hasta la próxima!

Marina: ¡Hasta pronto!`,
    vocabulary: [
      { es: "postureo", en: "showing off online / staged image" },
      { es: "autoestima", en: "self-esteem" },
      { es: "ciberacoso", en: "cyberbullying" },
      { es: "bicultural", en: "bicultural" },
      { es: "híbrida", en: "hybrid" },
      { es: "creencias", en: "beliefs" },
      { es: "apariencia", en: "appearance" },
      { es: "filtros", en: "filters" },
      { es: "comparación", en: "comparison" },
      { es: "fortaleza", en: "strength" },
    ],
    questions: [
      {
        id: "pod-identities-redes-q1",
        type: "true-false",
        prompt: "Antes, la identidad se formaba sobre todo en la familia, el colegio y los amigos del barrio.",
        correctAnswer: "true",
        justification: "antes la identidad se formaba sobre todo en la familia, en el colegio, con los amigos del barrio",
      },
      {
        id: "pod-identities-redes-q2",
        type: "true-false",
        prompt: "Según Ben, en las redes sociales la gente siempre muestra una versión completamente real de sí misma.",
        correctAnswer: "false",
        justification: "en las redes sociales la gente muestra una versión editada de sí misma",
      },
      {
        id: "pod-identities-redes-q3",
        type: "mcq",
        prompt: "¿Cómo llaman los psicólogos a la sensación de tener que parecer siempre feliz y exitoso en redes sociales?",
        options: ["La presión de la perfección", "El síndrome del impostor", "La comparación social", "El postureo"],
        correctAnswer: "La presión de la perfección",
      },
      {
        id: "pod-identities-redes-q4",
        type: "mcq",
        prompt: "¿Qué ventaja positiva mencionan sobre las redes sociales para jóvenes que se sienten diferentes?",
        options: ["Ganar dinero fácilmente", "Encontrar una comunidad de personas parecidas", "Ser completamente anónimos", "Evitar ir al colegio"],
        correctAnswer: "Encontrar una comunidad de personas parecidas",
      },
      {
        id: "pod-identities-redes-q5",
        type: "short",
        prompt: "¿Cómo llaman algunos sociólogos a la identidad de los jóvenes que crecen entre dos culturas?",
        correctAnswer: "identidad híbrida",
      },
    ],
  },
  {
    id: "experiences-viaje",
    themeId: "experiences",
    title: "Mochileros por Sudamérica: una experiencia inolvidable",
    description:
      "Ben cuenta a Marina su viaje de tres meses por Sudamérica y hablan sobre ritos de iniciación, festivales y lo que se aprende viajando.",
    level: "medium",
    durationLabel: "~9 min",
    bodyEs: `Marina: Bienvenidos de nuevo al podcast. Hoy tenemos un episodio especial porque Ben acaba de volver de un viaje larguísimo.

Ben: ¡Así es! Pasé tres meses viajando por Sudamérica, con la mochila al hombro, y la verdad es que fue una de las experiencias más importantes de mi vida.

Marina: Cuéntanos, ¿por dónde empezaste el viaje?

Ben: Empecé en Colombia, en Bogotá, y desde ahí bajé poco a poco hacia el sur: Ecuador, Perú, Bolivia, y terminé en Argentina, en Buenos Aires.

Marina: ¡Qué recorrido! ¿Y qué fue lo que más te impactó?

Ben: Sin duda, Perú. Hice el camino inca hasta Machu Picchu, cuatro días caminando por la montaña, durmiendo en tiendas de campaña. Fue agotador, pero cuando llegamos al amanecer y vimos las ruinas entre las nubes, se me pusieron los pelos de punta.

Marina: Suena como un verdadero rito de iniciación, de esos que marcan un antes y un después.

Ben: Totalmente. De hecho, mucha gente joven hace ese tipo de viajes precisamente por eso, para demostrarse a sí mismos que pueden superar retos difíciles, estar lejos de la familia, tomar decisiones solos.

Marina: Es interesante, porque en muchas culturas existen ritos de iniciación tradicionales, ceremonias que marcan el paso de la niñez a la edad adulta. Y parece que, en el mundo moderno, viajar solo se ha convertido en una especie de rito similar.

Ben: Sí, aunque no es igual para todos, claro. No todo el mundo tiene el dinero o la posibilidad de viajar tres meses. Por eso también hablamos de privilegio cuando hablamos de este tipo de experiencias.

Marina: Buen punto. Bueno, sigamos con el viaje. ¿Participaste en algún festival o celebración local?

Ben: ¡Sí! En Bolivia tuve la suerte de estar en el Carnaval de Oruro, que es Patrimonio de la Humanidad según la UNESCO. Es una fiesta enorme, con música, bailes tradicionales y disfraces impresionantes que representan la mezcla entre las tradiciones indígenas y la religión católica.

Marina: Qué maravilla. Me imagino que fue una explosión de color.

Ben: Totalmente, y también de sonido. Los tambores no paraban en toda la noche. Fue agotador pero increíble, y aprendí muchísimo sobre la cultura boliviana, mucho más de lo que habría aprendido en cualquier libro.

Marina: Eso es lo bonito de viajar: aprender de otras culturas de manera directa, hablando con la gente, probando la comida, participando en sus tradiciones.

Ben: Exacto. Y también aprendí a valorar cosas que en casa doy por sentado, como el agua caliente o el wifi. En algunos pueblos de los Andes no había ni una cosa ni la otra.

Marina: Y en cuanto a la comida, ¿probaste algo que te sorprendiera?

Ben: Muchísimas cosas. En Perú probé el cuy, que es un conejillo de indias asado, un plato típico de la sierra. Al principio me dio un poco de impresión, pero la verdad es que estaba delicioso.

Marina: ¡Qué valiente! Yo creo que no me atrevería.

Ben: También probé el ceviche peruano, que es pescado crudo marinado en limón, y se convirtió en mi plato favorito de todo el viaje. Y en Bolivia comí salteñas, una especie de empanada rellena de carne y caldo, buenísima pero peligrosa si no tienes cuidado con el jugo caliente que lleva dentro.

Marina: Jaja, me lo apunto para cuando vaya. ¿Y cómo te movías de un país a otro?

Ben: Sobre todo en autobús, porque es mucho más barato y además puedes ver el paisaje. Algunos trayectos eran larguísimos, de hasta veinte horas, pero también viajé en tren, como el famoso tren de las nubes en Argentina, que sube por la montaña a más de cuatro mil metros de altura.

Marina: Qué experiencia tan completa. ¿Y tuviste algún momento difícil durante el viaje? Porque no todo puede ser perfecto.

Ben: Claro que sí. En Ecuador me robaron la mochila con la cámara y parte de la ropa. Al principio me sentí fatal, pero luego pensé que, al final, lo importante eran las experiencias y los recuerdos, no los objetos materiales.

Marina: Qué madurez, la verdad. ¿Y crees que ese viaje cambió tu forma de ver el mundo?

Ben: Sin ninguna duda. Antes de viajar, tenía una visión muy limitada de Sudamérica, basada en estereotipos de las noticias. Después de conocer a tanta gente diferente, entendí que cada país, cada región, incluso cada pueblo, tiene su propia identidad y su propia historia.

Marina: Y desde el punto de vista personal, ¿qué aprendiste sobre ti mismo?

Ben: Aprendí que soy más flexible de lo que pensaba, que puedo adaptarme a situaciones incómodas, y que no necesito tantas cosas materiales para ser feliz. También aprendí a comunicarme mejor, porque tuve que hablar español todos los días con gente de acentos muy diferentes.

Marina: Eso también es clave para nuestros oyentes: viajar es una manera excelente de mejorar el idioma, porque te obliga a usarlo en situaciones reales todo el tiempo.

Ben: Totalmente de acuerdo. Y bueno, para terminar, recomendaría a cualquier joven que tenga la oportunidad de hacer un viaje así, aunque sea corto, porque las lecciones que aprendes viajando no se aprenden en ningún otro sitio.

Marina: Gracias por compartir tu experiencia con nosotros, Ben. Y recordad, después de escuchar este episodio, practicad el vocabulario y contestad las preguntas para comprobar cuánto habéis entendido.

Ben: ¡Hasta la próxima, chicos!`,
    vocabulary: [
      { es: "mochila", en: "backpack" },
      { es: "agotador", en: "exhausting" },
      { es: "disfraces", en: "costumes" },
      { es: "tambores", en: "drums" },
      { es: "valorar", en: "to value / appreciate" },
      { es: "flexible", en: "flexible" },
      { es: "recorrido", en: "route / journey" },
      { es: "patrimonio", en: "heritage" },
      { es: "trayectos", en: "legs of a trip" },
      { es: "estereotipos", en: "stereotypes" },
    ],
    questions: [
      {
        id: "pod-experiences-viaje-q1",
        type: "true-false",
        prompt: "Ben hizo el camino inca hasta Machu Picchu en cuatro días, durmiendo en tiendas de campaña.",
        correctAnswer: "true",
        justification: "Hice el camino inca hasta Machu Picchu, cuatro días caminando por la montaña, durmiendo en tiendas de campaña.",
      },
      {
        id: "pod-experiences-viaje-q2",
        type: "true-false",
        prompt: "El Carnaval de Oruro, en Bolivia, no tiene ningún reconocimiento internacional.",
        correctAnswer: "false",
        justification: "el Carnaval de Oruro, que es Patrimonio de la Humanidad según la UNESCO",
      },
      {
        id: "pod-experiences-viaje-q3",
        type: "mcq",
        prompt: "¿Qué le robaron a Ben durante el viaje?",
        options: ["El pasaporte", "La mochila con la cámara y ropa", "El dinero en efectivo", "El teléfono móvil"],
        correctAnswer: "La mochila con la cámara y ropa",
      },
      {
        id: "pod-experiences-viaje-q4",
        type: "mcq",
        prompt: "¿Qué plato probó Ben en Perú que es un conejillo de indias asado?",
        options: ["Ceviche", "Salteñas", "Cuy", "Empanadas"],
        correctAnswer: "Cuy",
      },
      {
        id: "pod-experiences-viaje-q5",
        type: "short",
        prompt: "¿Cuántos meses duró el viaje de Ben por Sudamérica?",
        correctAnswer: "tres meses",
      },
    ],
  },
  {
    id: "ingenuity-ia",
    themeId: "human-ingenuity",
    title: "Inteligencia artificial, arte y el futuro del trabajo",
    description: "Marina y Ben debaten si la inteligencia artificial es una amenaza o una oportunidad para el arte, el trabajo y la creatividad humana.",
    level: "hard",
    durationLabel: "~9 min",
    bodyEs: `Marina: Hola de nuevo, bienvenidos al podcast. Hoy el tema es la tecnología, en concreto la inteligencia artificial, algo que está cambiando el mundo a una velocidad increíble.

Ben: Es verdad, Marina. Hace pocos años la inteligencia artificial parecía ciencia ficción, y ahora la usamos todos los días, muchas veces sin darnos cuenta, cuando buscamos algo en internet o cuando el móvil nos recomienda una canción.

Marina: Exacto. Pero hoy queremos centrarnos en un aspecto muy debatido: el arte generado por inteligencia artificial. ¿Puede una máquina ser creativa de verdad?

Ben: Es una pregunta complicada. Por un lado, los programas de inteligencia artificial ya pueden crear pinturas, componer música e incluso escribir poemas que parecen hechos por humanos.

Marina: Sí, y algunas de esas obras son sorprendentemente buenas. Hay incluso cuadros generados por inteligencia artificial que se han vendido por miles de dólares en subastas.

Ben: Pero muchos artistas están preocupados. Dicen que estos programas aprenden copiando el estilo de artistas reales sin pedir permiso, y que además pueden dejar a muchos ilustradores y diseñadores sin trabajo.

Marina: Es un tema muy delicado. Por un lado, la tecnología puede ser una herramienta útil para los artistas, para ahorrar tiempo o para experimentar con nuevas ideas. Pero por otro lado, hay un riesgo real de que sustituya el trabajo humano en vez de complementarlo.

Ben: Yo creo que la clave está en cómo se usa. Un fotógrafo profesional, por ejemplo, puede usar la inteligencia artificial para editar sus fotos más rápido, pero eso no significa que la máquina haya creado la fotografía.

Marina: Buen punto. Y no es solo el arte. La inteligencia artificial también está cambiando muchas profesiones: la medicina, la educación, el transporte... Hay coches que ya pueden conducir solos, sin conductor humano.

Ben: Es increíble, pero también da un poco de miedo, ¿no? Mucha gente teme que la automatización deje a millones de personas sin trabajo en las próximas décadas.

Marina: Es una preocupación legítima. Algunos estudios predicen que hasta un tercio de los trabajos actuales podrían desaparecer o transformarse completamente por culpa de la automatización.

Ben: Aunque también hay quien dice que, como pasó con la revolución industrial, van a aparecer trabajos nuevos que ahora ni siquiera podemos imaginar.

Marina: Es verdad, la historia nos enseña que la tecnología destruye ciertos empleos pero también crea otros. El problema es la velocidad del cambio: la revolución industrial tardó décadas, y la revolución digital está pasando en unos pocos años.

Ben: Y eso hace que sea más difícil para la gente adaptarse, aprender nuevas habilidades, cambiar de profesión.

Marina: Por eso muchos expertos insisten en la importancia de la educación continua, de seguir aprendiendo durante toda la vida, no solo en el colegio o en la universidad.

Ben: Totalmente de acuerdo. Y desde el punto de vista ético, también hay preguntas importantes: ¿quién es responsable si un coche autónomo tiene un accidente? ¿Es justo que una empresa use inteligencia artificial para decidir quién consigue un préstamo del banco?

Marina: Son preguntas que todavía no tienen una respuesta clara, y por eso los gobiernos están empezando a crear leyes para regular el uso de esta tecnología.

Ben: En la Unión Europea, por ejemplo, ya existe una ley específica sobre inteligencia artificial que intenta proteger los derechos de los ciudadanos.

Marina: Es un paso importante. Al final, la tecnología en sí misma no es buena ni mala, depende de cómo la usemos los seres humanos.

Ben: Totalmente de acuerdo. La inteligencia artificial puede ayudarnos a curar enfermedades, a combatir el cambio climático, a hacer nuestra vida más fácil... pero también puede usarse de forma peligrosa si no tenemos cuidado.

Marina: Por eso es tan importante que los jóvenes de hoy entiendan bien esta tecnología, tanto sus ventajas como sus riesgos, porque van a ser ellos quienes decidan cómo usarla en el futuro.

Ben: Muy bien dicho. Bueno, esto ha sido todo por hoy sobre inteligencia artificial y creatividad humana.

Marina: No olvidéis repasar el vocabulario y contestar las preguntas de comprensión. ¡Hasta la próxima!

Ben: ¡Nos escuchamos pronto!`,
    vocabulary: [
      { es: "automatización", en: "automation" },
      { es: "creativa", en: "creative" },
      { es: "subastas", en: "auctions" },
      { es: "préstamo", en: "loan" },
      { es: "regular", en: "to regulate" },
      { es: "habilidades", en: "skills" },
      { es: "responsable", en: "responsible" },
      { es: "ética", en: "ethics" },
      { es: "complementarlo", en: "to complement it" },
      { es: "sustituya", en: "replaces (subjunctive of sustituir)" },
    ],
    questions: [
      {
        id: "pod-ingenuity-ia-q1",
        type: "true-false",
        prompt: "Algunos cuadros generados por inteligencia artificial se han vendido por miles de dólares en subastas.",
        correctAnswer: "true",
        justification: "hay incluso cuadros generados por inteligencia artificial que se han vendido por miles de dólares en subastas",
      },
      {
        id: "pod-ingenuity-ia-q2",
        type: "true-false",
        prompt: "Todos los expertos están de acuerdo en que la inteligencia artificial no va a afectar al mundo laboral.",
        correctAnswer: "false",
        justification: "algunos estudios predicen que hasta un tercio de los trabajos actuales podrían desaparecer o transformarse completamente por culpa de la automatización",
      },
      {
        id: "pod-ingenuity-ia-q3",
        type: "mcq",
        prompt: "Según Marina, ¿qué fracción de los trabajos actuales podría desaparecer o transformarse por la automatización?",
        options: ["Un tercio", "La mitad", "Un diez por ciento", "Todos"],
        correctAnswer: "Un tercio",
      },
      {
        id: "pod-ingenuity-ia-q4",
        type: "mcq",
        prompt: "¿Qué institución ya ha creado una ley específica sobre inteligencia artificial, según el podcast?",
        options: ["Las Naciones Unidas", "La Unión Europea", "El gobierno de España", "La UNESCO"],
        correctAnswer: "La Unión Europea",
      },
      {
        id: "pod-ingenuity-ia-q5",
        type: "short",
        prompt: "¿Cómo se llama el tipo de coche que puede conducir sin conductor humano, según el debate ético mencionado?",
        correctAnswer: "coche autónomo",
      },
    ],
  },
  {
    id: "social-voluntariado",
    themeId: "social-organization",
    title: "El voluntariado y la vida en comunidad",
    description: "Marina y Ben hablan sobre el voluntariado, la vida comunitaria y cómo los jóvenes pueden contribuir a la sociedad.",
    level: "medium",
    durationLabel: "~9 min",
    bodyEs: `Marina: Bienvenidos otra vez al podcast. Hoy vamos a hablar de un tema muy relacionado con la organización social: el voluntariado y la vida en comunidad.

Ben: Un tema que me encanta, porque yo mismo he hecho voluntariado varias veces y ha sido una experiencia increíble.

Marina: Cuéntanos, ¿qué tipo de voluntariado has hecho?

Ben: El año pasado trabajé varios fines de semana en un comedor social, ayudando a preparar y repartir comida a personas sin hogar en mi ciudad.

Marina: Qué bonito. ¿Y cómo fue la experiencia?

Ben: Al principio me sentía un poco nervioso, porque no sabía cómo hablar con las personas, qué decir. Pero después de la primera vez, entendí que lo más importante era simplemente escuchar y tratarlas con respeto y dignidad.

Marina: Es verdad que muchas veces, más que la comida, lo que la gente necesita es sentirse escuchada y no invisible.

Ben: Exacto. Y aprendí muchísimo sobre las causas de la pobreza, que no siempre son lo que uno imagina. Conocí a personas que habían perdido su trabajo, su casa, incluso a su familia, por circunstancias que podrían pasarle a cualquiera.

Marina: Eso demuestra la importancia de tener una red de apoyo social fuerte, tanto de la familia como del gobierno y de organizaciones como esa en la que trabajaste.

Ben: Totalmente. Y hablando de organización social, ¿tú también has participado en algún proyecto comunitario?

Marina: Sí, yo participé en un programa de mentoría con niños de un barrio con pocos recursos. Los ayudábamos con los deberes del colegio y organizábamos actividades los fines de semana.

Ben: ¿Y qué fue lo que más te sorprendió de esa experiencia?

Marina: Lo que más me sorprendió fue ver la diferencia que puede hacer un poco de atención y apoyo en la vida de un niño. Muchos de ellos no tenían a nadie en casa que les ayudara con los estudios, y con solo un par de horas a la semana, mejoraron muchísimo sus notas y también su confianza.

Ben: Es increíble el impacto que puede tener el trabajo comunitario, tanto para quien lo recibe como para quien lo hace. Yo creo que aprendí tanto o más que las personas a las que ayudaba.

Marina: Totalmente de acuerdo. Y además, el voluntariado también nos hace reflexionar sobre cómo está organizada la sociedad, sobre las desigualdades que existen y sobre el papel que cada uno de nosotros puede jugar para mejorarla.

Ben: Es verdad. Y no hace falta hacer algo enorme. A veces las pequeñas acciones, como ayudar a un vecino mayor con la compra, o participar en la limpieza de un parque, también forman parte de la vida en comunidad.

Marina: Claro, la organización social no depende solo del gobierno, depende también de cada ciudadano. Por ejemplo, en muchos barrios existen asociaciones de vecinos que organizan fiestas, arreglan problemas comunes y representan los intereses de la gente ante el ayuntamiento.

Ben: Y en las escuelas también se puede fomentar ese espíritu comunitario, con proyectos de aprendizaje-servicio, donde los estudiantes combinan sus estudios con proyectos que benefician a la comunidad.

Marina: Es un modelo que cada vez se usa más, porque los estudiantes aprenden mientras hacen algo útil para la sociedad, y eso además les da una motivación diferente para estudiar.

Ben: A mí me parece fundamental que los jóvenes entiendan desde pequeños que formamos parte de una comunidad, y que nuestras acciones, buenas o malas, afectan a los demás.

Marina: Totalmente. Y también es importante hablar del sistema educativo como parte de la organización social. En algunos países la educación es gratuita y de calidad para todos, mientras que en otros existen grandes diferencias entre la educación pública y la privada.

Ben: Es un tema complejo, porque la educación es una de las herramientas más poderosas para reducir la desigualdad social, pero solo si todos tienen acceso a ella en las mismas condiciones.

Marina: Exactamente. Bueno, espero que este episodio haya inspirado a algunos de nuestros oyentes a probar el voluntariado o a involucrarse más en su comunidad.

Ben: Seguro que sí. Recordad practicar el vocabulario y contestar las preguntas al final del episodio.

Marina: ¡Hasta la próxima!`,
    vocabulary: [
      { es: "voluntariado", en: "volunteering" },
      { es: "dignidad", en: "dignity" },
      { es: "mentoría", en: "mentoring" },
      { es: "vecinos", en: "neighbors" },
      { es: "desigualdad", en: "inequality" },
      { es: "ayuntamiento", en: "town hall / city council" },
      { es: "gratuita", en: "free (no cost)" },
      { es: "comunidad", en: "community" },
      { es: "pobreza", en: "poverty" },
      { es: "confianza", en: "confidence" },
    ],
    questions: [
      {
        id: "pod-social-voluntariado-q1",
        type: "true-false",
        prompt: "Ben hizo voluntariado en un comedor social, ayudando a preparar y repartir comida a personas sin hogar.",
        correctAnswer: "true",
        justification: "trabajé varios fines de semana en un comedor social, ayudando a preparar y repartir comida a personas sin hogar en mi ciudad",
      },
      {
        id: "pod-social-voluntariado-q2",
        type: "true-false",
        prompt: "Marina participó en un programa de mentoría con niños de un barrio con muchos recursos económicos.",
        correctAnswer: "false",
        justification: "yo participé en un programa de mentoría con niños de un barrio con pocos recursos",
      },
      {
        id: "pod-social-voluntariado-q3",
        type: "mcq",
        prompt: "¿Qué organizan las asociaciones de vecinos, según el podcast?",
        options: ["Elecciones nacionales", "Fiestas y actividades para la comunidad", "Exámenes escolares", "Campañas publicitarias"],
        correctAnswer: "Fiestas y actividades para la comunidad",
      },
      {
        id: "pod-social-voluntariado-q4",
        type: "mcq",
        prompt: "¿Cómo se llama el modelo educativo que combina los estudios con proyectos que benefician a la comunidad?",
        options: ["Aprendizaje-servicio", "Educación a distancia", "Bachillerato Internacional", "Mentoría escolar"],
        correctAnswer: "Aprendizaje-servicio",
      },
      {
        id: "pod-social-voluntariado-q5",
        type: "short",
        prompt: "¿Con qué ayudaba Marina a los niños del programa de mentoría, además de organizar actividades los fines de semana?",
        correctAnswer: "los deberes",
      },
    ],
  },
  {
    id: "planet-clima",
    themeId: "sharing-planet",
    title: "Jóvenes y cambio climático: la generación que actúa",
    description: "Marina y Ben hablan del cambio climático, del movimiento juvenil por el clima y de lo que cada persona puede hacer para proteger el planeta.",
    level: "hard",
    durationLabel: "~9 min",
    bodyEs: `Marina: Bienvenidos a un nuevo episodio del podcast. Hoy hablamos de un tema urgente: el cambio climático y el papel de los jóvenes en la lucha contra él.

Ben: Un tema que nos afecta a todos, pero especialmente a los jóvenes, porque seremos nosotros quienes vivamos las consecuencias durante más tiempo.

Marina: Exacto. En los últimos años hemos visto un movimiento muy fuerte de jóvenes activistas, como el que empezó Greta Thunberg en Suecia con sus huelgas escolares por el clima.

Ben: Sí, ese movimiento se extendió por todo el mundo. En España también hubo huelgas estudiantiles, con miles de jóvenes saliendo a la calle los viernes para exigir a los gobiernos medidas más urgentes contra el cambio climático.

Marina: Es impresionante ver cómo los jóvenes, que muchas veces no pueden votar todavía, han encontrado otras formas de hacer oír su voz.

Ben: Totalmente. Y no es solo protestar en la calle. Muchos jóvenes también están cambiando sus hábitos diarios: comen menos carne, usan menos el coche, reciclan más, compran ropa de segunda mano en vez de ropa nueva.

Marina: Eso es lo que se llama consumo responsable, y cada vez tiene más importancia entre la generación actual.

Ben: Aunque también hay un debate interesante sobre quién tiene la mayor responsabilidad: ¿los individuos, con sus pequeñas acciones diarias, o las grandes empresas y gobiernos, que son responsables de la mayoría de las emisiones de gases de efecto invernadero?

Marina: Es un debate importante. Algunos estudios muestran que solo cien empresas son responsables de más del setenta por ciento de las emisiones mundiales. Entonces, ¿de verdad importa si yo uso una bolsa reutilizable en el supermercado?

Ben: Yo creo que sí importa, aunque no sea suficiente por sí solo. Las acciones individuales ayudan, pero lo más importante es la presión que la sociedad puede ejercer sobre los gobiernos y las empresas para que cambien sus políticas.

Marina: Totalmente de acuerdo. Y en España, ¿qué medidas se están tomando a nivel oficial?

Ben: Pues hay varias. Por ejemplo, muchas ciudades españolas están creando zonas de bajas emisiones, donde los coches más contaminantes no pueden circular en el centro. También hay planes para aumentar el uso de energías renovables, como la solar y la eólica.

Marina: España tiene mucho potencial en ese sentido, con tanto sol y tanto viento.

Ben: Exacto, y de hecho ya es uno de los países líderes en Europa en energía renovable. Pero todavía queda mucho trabajo por hacer, sobre todo en temas como el transporte y la agricultura.

Marina: Y hablando de agricultura, el cambio climático también afecta mucho a España, con sequías cada vez más largas y olas de calor más intensas cada verano.

Ben: Sí, es un problema real. Algunas regiones del sur de España ya sufren un proceso de desertificación, es decir, la tierra fértil se está convirtiendo poco a poco en desierto por la falta de agua.

Marina: Es preocupante. Y no es solo un problema ambiental, también es un problema económico, porque muchas familias dependen de la agricultura para vivir.

Ben: Por eso el cambio climático no se puede separar de la justicia social. Las personas con menos recursos son normalmente las que más sufren sus consecuencias, aunque sean las que menos han contribuido al problema.

Marina: Es un punto clave. Por eso muchos activistas hablan de justicia climática, no solo de proteger el medio ambiente, sino de hacerlo de una manera justa para todos, especialmente para los países más pobres.

Ben: Totalmente de acuerdo. Y para terminar, ¿qué consejo le darías a un joven que quiere hacer algo pero no sabe por dónde empezar?

Marina: Yo le diría que empiece por informarse bien, que hable con otros jóvenes, que se una a algún grupo o asociación local, y que no tenga miedo de hacer oír su voz, ya sea en una manifestación, en las redes sociales o simplemente hablando con su familia.

Ben: Muy buen consejo. Al final, cada pequeña acción cuenta, y juntos podemos exigir un cambio más grande.

Marina: Totalmente. Bueno, esto ha sido todo por hoy. Esperamos que este episodio os haya animado a pensar en vuestro papel en la lucha contra el cambio climático.

Ben: No olvidéis repasar el vocabulario y contestar las preguntas de comprensión.

Marina: ¡Hasta la próxima, y cuidemos el planeta!`,
    vocabulary: [
      { es: "sequías", en: "droughts" },
      { es: "desertificación", en: "desertification" },
      { es: "renovables", en: "renewable" },
      { es: "emisiones", en: "emissions" },
      { es: "huelgas", en: "strikes" },
      { es: "reciclan", en: "they recycle" },
      { es: "justicia", en: "justice" },
      { es: "sostenible", en: "sustainable" },
      { es: "reutilizable", en: "reusable" },
      { es: "contaminantes", en: "polluting" },
    ],
    questions: [
      {
        id: "pod-planet-clima-q1",
        type: "true-false",
        prompt: "En España hubo huelgas estudiantiles los viernes para exigir medidas más urgentes contra el cambio climático.",
        correctAnswer: "true",
        justification: "hubo huelgas estudiantiles, con miles de jóvenes saliendo a la calle los viernes para exigir a los gobiernos medidas más urgentes contra el cambio climático",
      },
      {
        id: "pod-planet-clima-q2",
        type: "true-false",
        prompt: "Según el podcast, solo cien empresas son responsables de menos del diez por ciento de las emisiones mundiales.",
        correctAnswer: "false",
        justification: "solo cien empresas son responsables de más del setenta por ciento de las emisiones mundiales",
      },
      {
        id: "pod-planet-clima-q3",
        type: "mcq",
        prompt: "¿Qué están creando muchas ciudades españolas para reducir la contaminación en el centro?",
        options: ["Parques solares", "Zonas de bajas emisiones", "Nuevas autopistas", "Aeropuertos ecológicos"],
        correctAnswer: "Zonas de bajas emisiones",
      },
      {
        id: "pod-planet-clima-q4",
        type: "mcq",
        prompt: "¿Qué término usan los activistas para referirse a proteger el planeta de forma justa para todos, incluidos los países más pobres?",
        options: ["Consumo responsable", "Justicia climática", "Desarrollo sostenible", "Huella de carbono"],
        correctAnswer: "Justicia climática",
      },
      {
        id: "pod-planet-clima-q5",
        type: "short",
        prompt: "¿Qué proceso sufren algunas regiones del sur de España por la falta de agua, según Ben?",
        correctAnswer: "desertificación",
      },
    ],
  },
  {
    id: "identities-salud",
    themeId: "identities",
    title: "La presión de la perfección: cuerpo, comida y salud mental",
    description: "Marina y Ben hablan sobre la presión estética entre los jóvenes, los hábitos alimenticios y la importancia de cuidar la salud mental.",
    level: "medium",
    durationLabel: "~9 min",
    bodyEs: `Marina: Bienvenidos a un nuevo episodio del podcast. Hoy vamos a hablar de un tema muy importante para los jóvenes: la salud física y mental, y la presión que sentimos por tener un cuerpo "perfecto".

Ben: Es un tema que me toca de cerca, la verdad. Cuando era más joven, sentía mucha presión por tener un cuerpo musculoso, como los que veía en las redes sociales.

Marina: Y esa presión existe tanto para chicos como para chicas, aunque de formas diferentes. Las chicas suelen sentir presión por estar delgadas, y los chicos por estar musculosos y fuertes.

Ben: Exacto. Y lo peor es que muchas de esas imágenes que vemos están editadas o son el resultado de años de entrenamiento profesional, con entrenadores y dietas especiales que la mayoría de la gente no puede permitirse.

Marina: Es verdad. Y esa comparación constante puede provocar problemas serios, como trastornos de la alimentación. Se calcula que uno de cada diez adolescentes sufre algún tipo de trastorno alimenticio en algún momento de su vida.

Ben: Es una cifra alarmante. Por eso es tan importante hablar abiertamente sobre la comida, el ejercicio y el cuerpo, en vez de convertirlo en un tema tabú.

Marina: Otro problema relacionado es la moda de las dietas milagro que se ven en internet, prometiendo perder peso en pocos días. Muchas de esas dietas no tienen ninguna base científica y pueden ser peligrosas para la salud.

Ben: Sí, he visto muchísimas de esas en redes sociales, promocionadas por influencers que ni siquiera son nutricionistas. Es preocupante que tanta gente joven las siga sin cuestionar si son seguras.

Marina: Por eso es tan importante la educación nutricional en los colegios, para que los jóvenes aprendan a distinguir información científica de mitos peligrosos.

Ben: Totalmente de acuerdo. Y no se trata solo de la alimentación. La salud mental en general es un tema que antes casi no se mencionaba, y ahora, afortunadamente, cada vez se habla más de la ansiedad, la depresión y el estrés entre los jóvenes.

Marina: Sí, y creo que la pandemia ayudó a que la gente hablara más abiertamente de sus emociones. Muchos jóvenes se dieron cuenta de que no estaban solos con sus problemas.

Ben: Exacto. Y en muchos colegios ahora hay psicólogos y programas de bienestar emocional, algo que hace diez años era muy raro de ver.

Marina: A mí me parece un paso importantísimo. ¿Y tú, Ben, qué haces para cuidar tu salud mental?

Ben: Pues intento hacer ejercicio regularmente, no por estética, sino porque me ayuda a reducir el estrés. También trato de practicar lo que se llama "desconexión digital": dejar el móvil una hora antes de dormir.

Marina: Buena estrategia. El sueño es fundamental y muchas veces lo subestimamos. Y hablando de hábitos saludables, ¿qué opinas de la cultura del gimnasio que se ha puesto tan de moda últimamente?

Ben: Creo que puede ser positiva si se hace con equilibrio, para sentirte bien y con energía. El problema es cuando se convierte en una obsesión, cuando alguien hace ejercicio solo para cambiar su apariencia y nunca se siente satisfecho.

Marina: Ese fenómeno tiene un nombre: vigorexia, una obsesión poco saludable con el músculo y el físico. Es el equivalente masculino de otros trastornos relacionados con la imagen corporal.

Ben: No lo sabía, pero tiene mucho sentido. Al final, la salud debería ser sobre sentirse bien, no sobre parecer perfecto según un estándar imposible.

Marina: Totalmente de acuerdo. Y también es importante recordar que la salud mental y la física están conectadas: cuando cuidamos el cuerpo con equilibrio, normalmente también nos sentimos mejor emocionalmente.

Ben: Exacto. Y por último, quiero decir que si alguien está pasando por un momento difícil, ya sea con la comida, con la ansiedad o con cualquier otro problema, lo más importante es hablar con alguien de confianza, ya sea un familiar, un amigo o un profesional.

Marina: Muy bien dicho, Ben. Pedir ayuda no es una debilidad, es un acto de valentía.

Ben: Bueno, esto ha sido todo por hoy. Esperamos que este episodio os anime a cuidar tanto vuestro cuerpo como vuestra mente.

Marina: No olvidéis repasar el vocabulario y contestar las preguntas de comprensión. ¡Hasta la próxima!`,
    vocabulary: [
      { es: "trastorno", en: "disorder" },
      { es: "vigorexia", en: "muscle dysmorphia" },
      { es: "ansiedad", en: "anxiety" },
      { es: "equilibrio", en: "balance" },
      { es: "entrenamiento", en: "training" },
      { es: "musculoso", en: "muscular" },
      { es: "bienestar", en: "well-being" },
      { es: "nutricionistas", en: "nutritionists" },
    ],
    questions: [
      {
        id: "pod-identities-salud-q1",
        type: "true-false",
        prompt: "Según Ben, muchas imágenes de cuerpos 'perfectos' en redes sociales son el resultado de años de entrenamiento profesional y dietas especiales.",
        correctAnswer: "true",
        justification: "muchas de esas imágenes que vemos están editadas o son el resultado de años de entrenamiento profesional, con entrenadores y dietas especiales",
      },
      {
        id: "pod-identities-salud-q2",
        type: "true-false",
        prompt: "Según el podcast, hace diez años era muy común encontrar psicólogos en los colegios.",
        correctAnswer: "false",
        justification: "en muchos colegios ahora hay psicólogos y programas de bienestar emocional, algo que hace diez años era muy raro de ver",
      },
      {
        id: "pod-identities-salud-q3",
        type: "mcq",
        prompt: "¿Qué estrategia usa Ben para cuidar su sueño?",
        options: ["Hacer ejercicio antes de dormir", "Dejar el móvil una hora antes de dormir", "Tomar café por la noche", "Dormir con el móvil encendido"],
        correctAnswer: "Dejar el móvil una hora antes de dormir",
      },
      {
        id: "pod-identities-salud-q4",
        type: "mcq",
        prompt: "¿Cómo se llama la obsesión poco saludable con el músculo y el físico mencionada en el episodio?",
        options: ["Anorexia", "Vigorexia", "Ansiedad social", "Bulimia"],
        correctAnswer: "Vigorexia",
      },
      {
        id: "pod-identities-salud-q5",
        type: "short",
        prompt: "Según el episodio, ¿qué fracción de los adolescentes sufre algún trastorno alimenticio en algún momento de su vida?",
        correctAnswer: "uno de cada diez",
      },
    ],
  },
  {
    id: "identities-estilo",
    themeId: "identities",
    title: "Tatuajes, piercings y la expresión personal",
    description: "Marina y Ben hablan sobre la moda, los tatuajes y otras formas en que los jóvenes expresan su identidad a través de su apariencia.",
    level: "medium",
    durationLabel: "~9 min",
    bodyEs: `Marina: Bienvenidos de nuevo al podcast. Hoy vamos a hablar de algo muy visual: cómo expresamos nuestra identidad a través de la ropa, los tatuajes y otros elementos de nuestra apariencia.

Ben: Un tema perfecto para mí, porque me hice mi primer tatuaje hace un año.

Marina: ¡No lo sabía! Cuéntanos, ¿qué te tatuaste?

Ben: Me tatué una pequeña brújula en el brazo, que representa mi amor por los viajes y la idea de encontrar siempre mi propio camino.

Marina: Qué bonito significado. ¿Y qué dijo tu familia cuando lo vieron?

Ben: Mis padres no estaban muy contentos al principio. Mi generación ve los tatuajes como una forma normal de expresión personal, pero para la generación de mis padres todavía tienen cierto estigma.

Marina: Es interesante cómo cambia la percepción social según la generación. Hace treinta años, un tatuaje visible podía cerrarte las puertas en muchos trabajos. Hoy en día, es mucho más aceptado, sobre todo en trabajos creativos.

Ben: Aunque todavía existen prejuicios en algunos sectores más tradicionales, como la banca o el derecho, donde se sigue esperando una imagen más formal.

Marina: Y hablando de normas de apariencia, ¿qué opinas de los uniformes escolares? Algunos dicen que limitan la expresión personal de los estudiantes.

Ben: Es un debate interesante. Por un lado, el uniforme puede reducir la presión de vestir a la moda y evitar la discriminación entre estudiantes de familias con más o menos dinero. Por otro lado, muchos jóvenes sienten que les quita la posibilidad de mostrar su identidad durante gran parte del día.

Marina: Es un equilibrio difícil de encontrar. Algunos colegios permiten ciertos elementos personales, como el color de los calcetines o pequeños accesorios, para dar algo de libertad sin perder la uniformidad.

Ben: Me parece una solución razonable. Y no son solo los tatuajes o los uniformes. También está la moda de los piercings, el pelo teñido de colores llamativos, o incluso el estilo de ropa que elegimos cada día.

Marina: Todo eso forma parte de lo que los sociólogos llaman "subculturas juveniles": grupos que se identifican con un estilo particular, como los góticos, los skaters o los amantes del K-pop, y que usan la moda para mostrar a qué grupo pertenecen.

Ben: Exacto. Y pertenecer a una subcultura le da a mucha gente joven un sentido de comunidad, especialmente durante la adolescencia, cuando estamos buscando quiénes somos.

Marina: A mí me parece fascinante cómo la ropa puede comunicar tanto sin decir ni una palabra. Solo con ver cómo viste alguien, ya te haces una idea de sus gustos musicales o de sus valores.

Ben: Aunque también hay que tener cuidado con los estereotipos. No siempre la ropa refleja exactamente quién es una persona, y juzgar a alguien solo por su apariencia puede ser injusto.

Marina: Totalmente de acuerdo. Además, hay mucha presión económica detrás de la moda. Las marcas de ropa, sobre todo las que se ven en redes sociales, pueden ser muy caras, y no todo el mundo puede permitirse seguir las últimas tendencias.

Ben: Es un buen punto. Por suerte, cada vez hay más interés en la moda sostenible y la ropa de segunda mano, que permite expresar tu estilo sin gastar tanto dinero ni dañar tanto el medioambiente.

Marina: A mí me encanta comprar en tiendas vintage. Encuentras piezas únicas que nadie más tiene, y así tu estilo se vuelve todavía más personal.

Ben: Totalmente. Al final, la forma en que nos vestimos, nos peinamos o decoramos nuestro cuerpo es una manera de contarle al mundo quiénes somos, sin necesidad de palabras.

Marina: Y lo más importante es sentirte cómodo con tu propia imagen, sin dejar que la presión social decida por ti.

Ben: Muy bien dicho. Bueno, esto ha sido todo por hoy sobre moda e identidad personal.

Marina: No olvidéis repasar el vocabulario y contestar las preguntas de comprensión. ¡Hasta la próxima!`,
    vocabulary: [
      { es: "brújula", en: "compass" },
      { es: "estigma", en: "stigma" },
      { es: "subcultura", en: "subculture" },
      { es: "tendencias", en: "trends" },
      { es: "sostenible", en: "sustainable" },
      { es: "pertenecer", en: "to belong" },
      { es: "estereotipos", en: "stereotypes" },
      { es: "vintage", en: "vintage" },
    ],
    questions: [
      {
        id: "pod-identities-estilo-q1",
        type: "true-false",
        prompt: "El primer tatuaje de Ben es una brújula que representa su amor por los viajes.",
        correctAnswer: "true",
        justification: "Me tatué una pequeña brújula en el brazo, que representa mi amor por los viajes",
      },
      {
        id: "pod-identities-estilo-q2",
        type: "true-false",
        prompt: "Los padres de Ben estaban completamente de acuerdo con su tatuaje desde el principio.",
        correctAnswer: "false",
        justification: "Mis padres no estaban muy contentos al principio.",
      },
      {
        id: "pod-identities-estilo-q3",
        type: "mcq",
        prompt: "¿Cómo llaman los sociólogos a grupos como los góticos o los skaters que comparten un estilo particular?",
        options: ["Tribus urbanas", "Subculturas juveniles", "Comunidades digitales", "Grupos étnicos"],
        correctAnswer: "Subculturas juveniles",
      },
      {
        id: "pod-identities-estilo-q4",
        type: "mcq",
        prompt: "Según Marina, ¿qué tendencia permite expresar estilo personal sin gastar tanto dinero ni dañar el medioambiente?",
        options: ["La moda de lujo", "La moda sostenible y de segunda mano", "Los tatuajes", "Las marcas internacionales"],
        correctAnswer: "La moda sostenible y de segunda mano",
      },
      {
        id: "pod-identities-estilo-q5",
        type: "short",
        prompt: "¿Dónde le gusta comprar ropa a Marina para tener piezas únicas?",
        correctAnswer: "tiendas vintage",
      },
    ],
  },
  {
    id: "experiences-fiestas",
    themeId: "experiences",
    title: "Las fiestas de mi pueblo: tradiciones y celebraciones en España",
    description: "Marina y Ben hablan sobre los festivales tradicionales españoles, desde la Tomatina hasta los Sanfermines, y lo que significan para la identidad cultural.",
    level: "medium",
    durationLabel: "~9 min",
    bodyEs: `Marina: Bienvenidos a un nuevo episodio. Hoy quiero hablar de algo que me encanta: las fiestas tradicionales de España. Hay tantas y tan diferentes entre sí.

Ben: Es verdad, casi cada pueblo tiene su propia fiesta patronal, con música, comida y tradiciones que a veces tienen siglos de historia.

Marina: Exacto. Y hay algunas que son famosas internacionalmente. Por ejemplo, los Sanfermines, en Pamplona, donde miles de personas corren delante de los toros por las calles de la ciudad.

Ben: Esa fiesta es impresionante, aunque también muy peligrosa. Cada año hay personas heridas durante los encierros. ¿Tú alguna vez has ido?

Marina: No, nunca he corrido delante de los toros, la verdad, pero sí que fui una vez como espectadora. El ambiente es increíble: música, gente vestida de blanco y rojo, y una energía que no se ve en ningún otro sitio.

Ben: Yo prefiero una fiesta un poco menos peligrosa: la Tomatina, en Buñol, Valencia. ¡Una batalla gigante de tomates en las calles del pueblo!

Marina: ¡Esa fiesta es una locura! ¿Fuiste alguna vez?

Ben: Sí, hace dos veranos. Fue una experiencia increíble, aunque también un poco caótica. Al final del día, todo el pueblo estaba cubierto de tomate, incluidas las paredes de las casas.

Marina: Me imagino que fue divertidísimo, aunque también agotador.

Ben: Totalmente. Y lo más curioso es el origen de la fiesta: nadie sabe exactamente cómo empezó, pero se cree que en los años cuarenta un grupo de jóvenes empezó una pelea de comida durante un desfile, y la tradición se quedó para siempre.

Marina: Me encanta que muchas tradiciones nazcan de forma tan espontánea. Otra fiesta muy importante en España es la Semana Santa, sobre todo en ciudades como Sevilla o Málaga, con las famosas procesiones religiosas.

Ben: Esa fiesta tiene un carácter completamente diferente, mucho más solemne y espiritual. Las procesiones pueden durar horas, con música de tambores y trompetas muy dramática.

Marina: Es verdad, y también es un ejemplo de cómo la religión católica sigue teniendo un papel importante en muchas tradiciones españolas, aunque la sociedad se haya vuelto cada vez más laica.

Ben: Totalmente de acuerdo. Y no podemos olvidar el Carnaval, especialmente el de Canarias o el de Cádiz, con sus disfraces coloridos y su sentido del humor tan particular.

Marina: El Carnaval de Cádiz es especial porque tiene mucho humor político, con canciones que critican a los políticos y a la sociedad de forma divertida.

Ben: Me encantaría verlo algún día. ¿Y tú, Marina, tienes alguna fiesta local en tu pueblo que sea especial para ti?

Marina: Sí, en mi pueblo celebramos las fiestas patronales en agosto, con verbenas, fuegos artificiales y un mercado medieval en la plaza principal. Es la época del año que más espero, porque toda la familia se reúne.

Ben: Eso es lo bonito de estas tradiciones: no son solo diversión, también son un momento para reunir a la comunidad y mantener vivas las costumbres de generación en generación.

Marina: Totalmente de acuerdo. Y para los estudiantes de español, participar o simplemente conocer estas fiestas es una forma maravillosa de entender mejor la cultura española.

Ben: Muy cierto. Bueno, esto ha sido todo por hoy sobre las fiestas tradicionales de España.

Marina: No olvidéis repasar el vocabulario y contestar las preguntas de comprensión. ¡Hasta la próxima!`,
    vocabulary: [
      { es: "encierros", en: "bull runs" },
      { es: "procesiones", en: "processions" },
      { es: "laica", en: "secular" },
      { es: "verbenas", en: "open-air festivals" },
      { es: "fuegos", en: "fires (\"fuegos artificiales\" = fireworks)" },
      { es: "patronal", en: "patron-saint (adj.)" },
      { es: "solemne", en: "solemn" },
      { es: "espontánea", en: "spontaneous" },
    ],
    questions: [
      {
        id: "pod-experiences-fiestas-q1",
        type: "true-false",
        prompt: "En los Sanfermines, miles de personas corren delante de los toros por las calles de Pamplona.",
        correctAnswer: "true",
        justification: "los Sanfermines, en Pamplona, donde miles de personas corren delante de los toros por las calles de la ciudad",
      },
      {
        id: "pod-experiences-fiestas-q2",
        type: "true-false",
        prompt: "Se sabe con exactitud cómo y cuándo empezó la tradición de la Tomatina.",
        correctAnswer: "false",
        justification: "nadie sabe exactamente cómo empezó, pero se cree que en los años cuarenta un grupo de jóvenes empezó una pelea de comida durante un desfile",
      },
      {
        id: "pod-experiences-fiestas-q3",
        type: "mcq",
        prompt: "¿En qué ciudad se celebra la Tomatina?",
        options: ["Pamplona", "Sevilla", "Buñol", "Cádiz"],
        correctAnswer: "Buñol",
      },
      {
        id: "pod-experiences-fiestas-q4",
        type: "mcq",
        prompt: "¿Qué caracteriza especialmente al Carnaval de Cádiz, según Marina?",
        options: ["Las corridas de toros", "El humor político en las canciones", "Las procesiones religiosas", "Las batallas de tomates"],
        correctAnswer: "El humor político en las canciones",
      },
      {
        id: "pod-experiences-fiestas-q5",
        type: "short",
        prompt: "¿Qué celebra Marina en su pueblo durante el mes de agosto?",
        correctAnswer: "las fiestas patronales",
      },
    ],
  },
  {
    id: "experiences-trabajo",
    themeId: "experiences",
    title: "Mi primer trabajo de verano: lecciones de la vida real",
    description: "Ben cuenta a Marina su experiencia trabajando por primera vez un verano, y hablan sobre lo que un primer empleo enseña sobre la vida adulta.",
    level: "medium",
    durationLabel: "~9 min",
    bodyEs: `Marina: Bienvenidos de nuevo al podcast. Hoy Ben nos va a contar sobre su primer trabajo de verano, una experiencia que marca a mucha gente joven.

Ben: Así es. Tenía diecisiete años cuando conseguí mi primer trabajo, como camarero en un restaurante de la playa.

Marina: ¡Qué recuerdos! ¿Cómo conseguiste el trabajo?

Ben: La verdad es que fue gracias a un amigo que ya trabajaba allí. Me recomendó, y el dueño del restaurante me hizo una entrevista rápida y me contrató para el verano.

Marina: ¿Y cómo fue tu primer día?

Ben: Un desastre, la verdad. Se me cayó una bandeja entera de bebidas encima de una mesa, delante de todos los clientes. Me quería morir de la vergüenza.

Marina: Jaja, seguro que no fue tan grave como lo recuerdas.

Ben: Bueno, quizás exagero un poco, pero en ese momento me sentí fatal. Sin embargo, el jefe fue muy comprensivo y me dijo que a todo el mundo le pasa al principio.

Marina: Es verdad que los primeros días de cualquier trabajo son difíciles. ¿Qué fue lo más difícil de todo el verano?

Ben: Sin duda, aguantar de pie durante ocho horas seguidas, con mucho calor y mucha prisa. Nunca había valorado tanto el trabajo de los camareros hasta ese verano.

Marina: Es una experiencia que cambia la perspectiva, ¿verdad? Ahora seguramente tratas mejor a los camareros cuando sales a comer.

Ben: Totalmente. Y también aprendí a valorar el dinero de una forma completamente distinta. Antes, mis padres me daban una paga semanal, pero ganar mi propio dinero trabajando duro se sintió muy diferente.

Marina: Es un aprendizaje importante sobre la responsabilidad y el esfuerzo. ¿En qué gastaste tu primer sueldo?

Ben: Me compré una bicicleta que llevaba meses queriendo, y sinceramente, la disfruté mucho más porque sabía cuánto esfuerzo me había costado ganar ese dinero.

Marina: Eso es exactamente lo que muchos psicólogos dicen sobre los primeros trabajos: enseñan el valor del dinero de una manera que ningún consejo de los padres puede enseñar.

Ben: Totalmente de acuerdo. Y también aprendí habilidades sociales importantes, como trabajar en equipo con compañeros de diferentes edades, y tratar con clientes difíciles sin perder la paciencia.

Marina: Esas habilidades son tan importantes como cualquier cosa que se aprenda en el colegio, aunque a veces no se les da tanto valor.

Ben: Estoy de acuerdo. Y algo que me sorprendió fue lo rápido que me hice amigo de mis compañeros de trabajo, a pesar de que veníamos de mundos completamente diferentes.

Marina: Eso es otra ventaja de trabajar joven: conoces a gente que normalmente no conocerías en el colegio o en tu círculo social habitual.

Ben: Totalmente. Y para terminar, ¿tú también tuviste un primer trabajo de verano, Marina?

Marina: Sí, trabajé como monitora en un campamento de verano para niños. Fue agotador pero increíblemente gratificante, y también me enseñó muchísimo sobre la paciencia y la responsabilidad.

Ben: Qué bonito. Al final, aunque el primer trabajo no siempre sea glamoroso, las lecciones que te enseña sobre la vida adulta valen muchísimo más que el sueldo.

Marina: Totalmente de acuerdo. Bueno, esto ha sido todo por hoy sobre primeros trabajos y lecciones de vida.

Ben: No olvidéis repasar el vocabulario y contestar las preguntas de comprensión. ¡Hasta la próxima!`,
    vocabulary: [
      { es: "camarero", en: "waiter" },
      { es: "bandeja", en: "tray" },
      { es: "vergüenza", en: "embarrassment / shame" },
      { es: "sueldo", en: "salary / pay" },
      { es: "monitora", en: "camp counselor" },
      { es: "gratificante", en: "rewarding" },
      { es: "paga", en: "allowance" },
      { es: "aguantar", en: "to endure / put up with" },
    ],
    questions: [
      {
        id: "pod-experiences-trabajo-q1",
        type: "true-false",
        prompt: "Ben trabajó como camarero en un restaurante de la playa durante el verano.",
        correctAnswer: "true",
        justification: "Tenía diecisiete años cuando conseguí mi primer trabajo, como camarero en un restaurante de la playa.",
      },
      {
        id: "pod-experiences-trabajo-q2",
        type: "true-false",
        prompt: "El primer día de trabajo de Ben fue perfecto, sin ningún problema.",
        correctAnswer: "false",
        justification: "Se me cayó una bandeja entera de bebidas encima de una mesa, delante de todos los clientes.",
      },
      {
        id: "pod-experiences-trabajo-q3",
        type: "mcq",
        prompt: "¿En qué gastó Ben su primer sueldo?",
        options: ["En ropa nueva", "En una bicicleta", "En un viaje", "En videojuegos"],
        correctAnswer: "En una bicicleta",
      },
      {
        id: "pod-experiences-trabajo-q4",
        type: "mcq",
        prompt: "¿En qué trabajó Marina su primer verano?",
        options: ["Como camarera", "Como monitora en un campamento de verano", "Como dependienta en una tienda", "Como socorrista en la piscina"],
        correctAnswer: "Como monitora en un campamento de verano",
      },
      {
        id: "pod-experiences-trabajo-q5",
        type: "short",
        prompt: "¿Cuántas horas seguidas tenía que aguantar de pie Ben durante su turno de camarero?",
        correctAnswer: "ocho horas",
      },
    ],
  },
  {
    id: "ingenuity-videojuegos",
    themeId: "human-ingenuity",
    title: "Videojuegos y esports: ¿un deporte de verdad?",
    description: "Marina y Ben debaten sobre la cultura de los videojuegos, el auge de los esports y si deberían considerarse un deporte oficial.",
    level: "medium",
    durationLabel: "~9 min",
    bodyEs: `Marina: Bienvenidos a un nuevo episodio del podcast. Hoy vamos a hablar de un tema que le encanta a muchísima gente joven: los videojuegos y los esports.

Ben: ¡Por fin un tema que domino! Llevo jugando videojuegos desde que tenía seis años.

Marina: Jaja, me lo imaginaba. Para quien no lo sepa, ¿puedes explicar qué son exactamente los esports?

Ben: Claro. Los esports, o deportes electrónicos, son competiciones de videojuegos organizadas de forma profesional, con equipos, entrenadores, ligas y torneos internacionales, muy parecido a cualquier deporte tradicional.

Marina: Y según he leído, mueven muchísimo dinero hoy en día, ¿verdad?

Ben: Muchísimo. Los torneos más grandes, como los de League of Legends o Fortnite, reparten millones de dólares en premios, y los mejores jugadores se convierten en auténticas estrellas con millones de seguidores.

Marina: Es impresionante. Aunque hay gente que todavía se pregunta si esto puede considerarse un "deporte" de verdad, ya que no hay esfuerzo físico como en el fútbol o el baloncesto.

Ben: Es un debate interesante. Por un lado, es verdad que no hay el mismo desgaste físico. Pero por otro lado, los jugadores profesionales necesitan reflejos increíbles, coordinación entre mano y ojo, estrategia y un trabajo en equipo tan complejo como en cualquier deporte tradicional.

Marina: Además, entrenan muchísimas horas al día, igual que un futbolista profesional.

Ben: Exacto. De hecho, algunos países ya reconocen los esports como deporte oficial, y varias universidades en Estados Unidos ofrecen becas deportivas para jugadores profesionales de videojuegos.

Marina: Qué interesante. Aunque también hay preocupaciones sobre los videojuegos, ¿no? Por ejemplo, la adicción.

Ben: Sí, es un tema serio. La Organización Mundial de la Salud reconoció oficialmente el "trastorno por videojuegos" como una condición médica en 2019, cuando el juego afecta negativamente a la vida diaria de una persona.

Marina: Es importante encontrar un equilibrio, como con cualquier otra actividad. ¿Tú cómo controlas tu tiempo de juego?

Ben: Intento limitarme a un par de horas al día, entre semana, y un poco más los fines de semana. Aunque reconozco que a veces es difícil parar cuando quiero seguir jugando "una partida más".

Marina: Jaja, eso les pasa a muchos jugadores. Y más allá de la competición, ¿qué otros beneficios crees que tienen los videojuegos?

Ben: Muchísimos, la verdad. Mejoran la coordinación, la capacidad de resolver problemas rápidamente, y algunos juegos incluso fomentan la creatividad, como Minecraft, donde los jugadores construyen mundos enteros desde cero.

Marina: Y no podemos olvidar el aspecto social. Muchos jóvenes usan los videojuegos para mantenerse en contacto con amigos, especialmente durante la pandemia, cuando no se podían ver en persona.

Ben: Totalmente. Para mucha gente de mi generación, jugar en línea con amigos es una forma tan válida de socializar como quedar en persona.

Marina: Es un cambio interesante en cómo entendemos la amistad y la comunidad en la era digital.

Ben: Totalmente de acuerdo. Al final, como con cualquier tecnología, lo importante es usar los videojuegos con equilibrio y no dejar que sustituyan completamente otras actividades importantes, como el ejercicio físico o el tiempo cara a cara con la familia.

Marina: Muy bien dicho. Bueno, esto ha sido todo por hoy sobre videojuegos y esports.

Ben: No olvidéis repasar el vocabulario y contestar las preguntas de comprensión. ¡Hasta la próxima!

Marina: ¡Nos escuchamos pronto!`,
    vocabulary: [
      { es: "torneos", en: "tournaments" },
      { es: "premios", en: "prizes" },
      { es: "reflejos", en: "reflexes" },
      { es: "adicción", en: "addiction" },
      { es: "becas", en: "scholarships" },
      { es: "coordinación", en: "coordination" },
      { es: "fomentan", en: "they foster / encourage" },
      { es: "desgaste", en: "wear / exertion" },
    ],
    questions: [
      {
        id: "pod-ingenuity-videojuegos-q1",
        type: "true-false",
        prompt: "Los torneos de esports como League of Legends o Fortnite reparten millones de dólares en premios.",
        correctAnswer: "true",
        justification: "Los torneos más grandes, como los de League of Legends o Fortnite, reparten millones de dólares en premios",
      },
      {
        id: "pod-ingenuity-videojuegos-q2",
        type: "true-false",
        prompt: "La Organización Mundial de la Salud nunca ha reconocido el trastorno por videojuegos como una condición médica.",
        correctAnswer: "false",
        justification: "La Organización Mundial de la Salud reconoció oficialmente el \"trastorno por videojuegos\" como una condición médica en 2019",
      },
      {
        id: "pod-ingenuity-videojuegos-q3",
        type: "mcq",
        prompt: "Según Ben, ¿qué necesitan los jugadores profesionales de esports, además de estrategia?",
        options: ["Solo suerte", "Reflejos increíbles y coordinación entre mano y ojo", "Un equipo de doce personas", "Conocimientos de matemáticas avanzadas"],
        correctAnswer: "Reflejos increíbles y coordinación entre mano y ojo",
      },
      {
        id: "pod-ingenuity-videojuegos-q4",
        type: "mcq",
        prompt: "¿Qué videojuego menciona Ben como ejemplo de un juego que fomenta la creatividad?",
        options: ["Fortnite", "League of Legends", "Minecraft", "FIFA"],
        correctAnswer: "Minecraft",
      },
      {
        id: "pod-ingenuity-videojuegos-q5",
        type: "short",
        prompt: "¿En qué año reconoció la Organización Mundial de la Salud el trastorno por videojuegos?",
        correctAnswer: "2019",
      },
    ],
  },
  {
    id: "ingenuity-transporte",
    themeId: "human-ingenuity",
    title: "El futuro del transporte: coches eléctricos y ciudades inteligentes",
    description: "Marina y Ben hablan sobre la revolución del transporte: coches eléctricos, bicicletas, transporte público y cómo las ciudades del futuro podrían cambiar nuestra forma de movernos.",
    level: "hard",
    durationLabel: "~9 min",
    bodyEs: `Marina: Bienvenidos a un nuevo episodio del podcast. Hoy hablamos de un tema que está cambiando rápidamente: el futuro del transporte y las ciudades inteligentes.

Ben: Un tema fascinante, porque la forma en que nos movemos está cambiando más rápido que nunca gracias a la tecnología.

Marina: Empecemos por lo más obvio: los coches eléctricos. Cada vez se ven más en las calles, ¿verdad?

Ben: Sí, y varios países ya han anunciado que van a prohibir la venta de coches nuevos de gasolina y diésel en las próximas décadas, para reducir las emisiones de gases contaminantes.

Marina: Es un cambio enorme para la industria del automóvil. ¿Crees que los coches eléctricos son realmente la solución al problema medioambiental del transporte?

Ben: Son una parte importante de la solución, sin duda, pero no son perfectos. Fabricar las baterías requiere minerales como el litio, cuya extracción también tiene un impacto ambiental importante.

Marina: Es verdad, a veces olvidamos que ninguna tecnología es cien por cien limpia. Por eso muchos expertos dicen que la verdadera solución no es solo cambiar de coche, sino reducir el uso del coche en general.

Ben: Exacto. Y ahí es donde entran las ciudades inteligentes. Muchas ciudades europeas están rediseñando sus calles para dar más espacio a las bicicletas, al transporte público y a los peatones, en vez de a los coches privados.

Marina: Ámsterdam es el ejemplo clásico, con toda su infraestructura pensada para las bicicletas. Pero también hay ejemplos más recientes, como Barcelona, con sus "supermanzanas".

Ben: ¿Qué son exactamente las supermanzanas?

Marina: Son zonas de varias calles donde se limita mucho el tráfico de coches, dando prioridad a los peatones, las bicicletas y las zonas verdes. La idea es reducir la contaminación y crear espacios más agradables para vivir.

Ben: Me parece una idea excelente. Aunque supongo que también genera controversia, porque algunos comerciantes se quejan de que menos coches significa menos clientes.

Marina: Es verdad que al principio hay resistencia, pero varios estudios muestran que, con el tiempo, estas zonas peatonales suelen atraer más gente y más negocios, no menos.

Ben: Interesante. Y hablando de tecnología, ¿qué piensas de los coches autónomos? Parece que cada año están más cerca de ser algo normal en nuestras calles.

Marina: Es un tema que da mucho que hablar. Por un lado, prometen reducir los accidentes, porque la mayoría son causados por errores humanos. Por otro lado, plantean preguntas éticas complicadas, como quién es responsable si el coche tiene un accidente.

Ben: Y también preocupa el impacto en el empleo. Si los camiones y los taxis empiezan a conducirse solos, millones de conductores profesionales podrían perder su trabajo.

Marina: Es un buen punto, y demuestra que la innovación siempre trae beneficios pero también nuevos desafíos que la sociedad tiene que resolver.

Ben: Totalmente de acuerdo. Y no podemos olvidar el transporte público del futuro, como los trenes de alta velocidad, que ya conectan muchas ciudades españolas en muy poco tiempo.

Marina: Exacto, el AVE español es uno de los sistemas de tren de alta velocidad más avanzados de Europa, y ha cambiado completamente la forma en que los españoles viajan entre ciudades.

Ben: Al final, creo que el futuro del transporte no será una sola solución, sino una combinación de coches eléctricos, transporte público, bicicletas y ciudades diseñadas para las personas, no solo para los coches.

Marina: Muy bien resumido. Bueno, esto ha sido todo por hoy sobre el futuro del transporte.

Ben: No olvidéis repasar el vocabulario y contestar las preguntas de comprensión. ¡Hasta la próxima!

Marina: ¡Nos escuchamos pronto!`,
    vocabulary: [
      { es: "batería", en: "battery" },
      { es: "peatones", en: "pedestrians" },
      { es: "supermanzanas", en: "superblocks" },
      { es: "comerciantes", en: "shopkeepers / merchants" },
      { es: "autónomos", en: "autonomous / self-driving" },
      { es: "desafíos", en: "challenges" },
      { es: "conductores", en: "drivers" },
      { es: "infraestructura", en: "infrastructure" },
    ],
    questions: [
      {
        id: "pod-ingenuity-transporte-q1",
        type: "true-false",
        prompt: "Varios países ya han anunciado que van a prohibir la venta de coches nuevos de gasolina y diésel en las próximas décadas.",
        correctAnswer: "true",
        justification: "varios países ya han anunciado que van a prohibir la venta de coches nuevos de gasolina y diésel en las próximas décadas",
      },
      {
        id: "pod-ingenuity-transporte-q2",
        type: "true-false",
        prompt: "Según Ben, fabricar baterías para coches eléctricos no tiene ningún impacto ambiental.",
        correctAnswer: "false",
        justification: "Fabricar las baterías requiere minerales como el litio, cuya extracción también tiene un impacto ambiental importante.",
      },
      {
        id: "pod-ingenuity-transporte-q3",
        type: "mcq",
        prompt: "¿Qué son las 'supermanzanas' de Barcelona?",
        options: ["Autopistas nuevas", "Zonas donde se limita el tráfico de coches y se da prioridad a peatones y bicicletas", "Aparcamientos gratuitos", "Estaciones de tren de alta velocidad"],
        correctAnswer: "Zonas donde se limita el tráfico de coches y se da prioridad a peatones y bicicletas",
      },
      {
        id: "pod-ingenuity-transporte-q4",
        type: "mcq",
        prompt: "¿Cuál es la ciudad europea mencionada como el ejemplo clásico de infraestructura pensada para bicicletas?",
        options: ["Barcelona", "Ámsterdam", "Madrid", "París"],
        correctAnswer: "Ámsterdam",
      },
      {
        id: "pod-ingenuity-transporte-q5",
        type: "short",
        prompt: "¿Cómo se llama el sistema español de trenes de alta velocidad mencionado en el episodio?",
        correctAnswer: "el AVE",
      },
    ],
  },
  {
    id: "social-redes-politica",
    themeId: "social-organization",
    title: "Redes sociales y política: el poder de la generación Z",
    description: "Marina y Ben hablan sobre cómo los jóvenes usan las redes sociales para el activismo y la participación política, y los riesgos de la desinformación.",
    level: "hard",
    durationLabel: "~9 min",
    bodyEs: `Marina: Bienvenidos a un nuevo episodio del podcast. Hoy vamos a hablar de la relación entre las redes sociales y la política, un tema cada vez más importante para la generación Z.

Ben: Un tema muy actual. Cada vez más jóvenes se informan sobre política a través de plataformas como TikTok o Instagram, en vez de la televisión o los periódicos tradicionales.

Marina: Es un cambio enorme comparado con generaciones anteriores. ¿Tú de dónde sacas la mayoría de tus noticias?

Ben: La verdad es que sobre todo de redes sociales, aunque intento verificar la información en fuentes más serias antes de creerla completamente.

Marina: Esa es una práctica muy importante, porque uno de los grandes problemas de las redes sociales es la desinformación. Las noticias falsas se difunden muchísimo más rápido que las noticias verificadas.

Ben: Es verdad, y muchas veces la gente comparte información sin comprobar si es cierta, solo porque coincide con lo que ya pensaban.

Marina: Ese fenómeno se llama "sesgo de confirmación": tendemos a creer y compartir información que confirma nuestras opiniones existentes, y a ignorar la que las contradice.

Ben: Exacto. Y los algoritmos de las redes sociales empeoran el problema, porque nos muestran cada vez más contenido parecido al que ya hemos visto, creando lo que se llama una "burbuja de filtro".

Marina: Es un tema preocupante para la democracia, la verdad. Pero también hay un lado muy positivo: las redes sociales han dado a los jóvenes una voz política que antes no tenían.

Ben: Totalmente de acuerdo. Movimientos como el activismo por el clima o las protestas contra la violencia de género se han organizado principalmente a través de redes sociales, llegando a millones de personas en cuestión de horas.

Marina: Y no hace falta ser mayor de edad para participar. Muchos adolescentes, que todavía no pueden votar, encuentran en las redes sociales una manera de hacer oír su voz y presionar a los políticos.

Ben: Es un cambio importante en la forma de hacer política. Antes, para organizar una manifestación grande, necesitabas semanas de planificación. Ahora, un solo vídeo viral puede movilizar a miles de personas en un día.

Marina: Aunque también existe el riesgo del "activismo de sofá", cuando la gente comparte publicaciones sobre una causa pero nunca hace nada más allá de eso.

Ben: Sí, ese es un debate interesante. Algunos dicen que compartir información ya es una forma válida de participación, mientras otros creen que no es suficiente si no va acompañado de acciones reales, como votar o participar en manifestaciones.

Marina: Yo creo que ambas cosas son importantes: la visibilidad en redes sociales puede ser el primer paso, pero necesita ir acompañada de acción real para generar cambios verdaderos.

Ben: Totalmente de acuerdo. Y hablando de acción real, ¿qué opinas de bajar la edad mínima para votar a los dieciséis años, algo que ya se ha hecho en algunos países?

Marina: Me parece una idea interesante. Los jóvenes de esa edad ya están muy informados políticamente, gracias en parte a las redes sociales, y van a vivir con las consecuencias de las decisiones políticas de hoy durante más tiempo que nadie.

Ben: Es un buen argumento. Al final, lo importante es que los jóvenes aprendan a usar las redes sociales de forma crítica, verificando la información antes de compartirla, y combinando el activismo digital con la participación real en la sociedad.

Marina: Muy bien dicho. Bueno, esto ha sido todo por hoy sobre redes sociales y política.

Ben: No olvidéis repasar el vocabulario y contestar las preguntas de comprensión. ¡Hasta la próxima!

Marina: ¡Hasta pronto!`,
    vocabulary: [
      { es: "desinformación", en: "misinformation" },
      { es: "sesgo", en: "bias" },
      { es: "algoritmos", en: "algorithms" },
      { es: "burbuja", en: "bubble" },
      { es: "manifestación", en: "demonstration / protest" },
      { es: "movilizar", en: "to mobilize" },
      { es: "viral", en: "viral" },
      { es: "votar", en: "to vote" },
    ],
    questions: [
      {
        id: "pod-social-redes-politica-q1",
        type: "true-false",
        prompt: "Según Ben, la mayoría de sus noticias las obtiene de la televisión tradicional.",
        correctAnswer: "false",
        justification: "la verdad es que sobre todo de redes sociales, aunque intento verificar la información en fuentes más serias",
      },
      {
        id: "pod-social-redes-politica-q2",
        type: "true-false",
        prompt: "El sesgo de confirmación es la tendencia a creer y compartir información que confirma nuestras opiniones existentes.",
        correctAnswer: "true",
        justification: "tendemos a creer y compartir información que confirma nuestras opiniones existentes, y a ignorar la que las contradice",
      },
      {
        id: "pod-social-redes-politica-q3",
        type: "mcq",
        prompt: "¿Cómo se llama el fenómeno en el que los algoritmos muestran cada vez más contenido parecido al que ya hemos visto?",
        options: ["Sesgo de confirmación", "Burbuja de filtro", "Activismo de sofá", "Desinformación viral"],
        correctAnswer: "Burbuja de filtro",
      },
      {
        id: "pod-social-redes-politica-q4",
        type: "mcq",
        prompt: "¿Qué es el 'activismo de sofá' según el episodio?",
        options: ["Organizar manifestaciones desde casa", "Compartir publicaciones sobre una causa sin hacer nada más", "Votar por internet", "Donar dinero a causas sociales"],
        correctAnswer: "Compartir publicaciones sobre una causa sin hacer nada más",
      },
      {
        id: "pod-social-redes-politica-q5",
        type: "short",
        prompt: "¿A qué edad se ha bajado la edad mínima para votar en algunos países, según el episodio?",
        correctAnswer: "dieciséis años",
      },
    ],
  },
  {
    id: "social-educacion",
    themeId: "social-organization",
    title: "Sistemas educativos: ¿exámenes o proyectos?",
    description: "Marina y Ben comparan diferentes sistemas educativos y debaten si los exámenes tradicionales son la mejor forma de evaluar a los estudiantes.",
    level: "medium",
    durationLabel: "~9 min",
    bodyEs: `Marina: Bienvenidos a un nuevo episodio del podcast. Hoy vamos a hablar de la educación, en concreto de cómo se evalúa a los estudiantes en distintos países.

Ben: Un tema que nos afecta directamente a nosotros como estudiantes. ¿Sabías que los sistemas educativos varían muchísimo de un país a otro?

Marina: Sí, es fascinante. Por ejemplo, en muchos países asiáticos, como Corea del Sur o Japón, el sistema está muy centrado en los exámenes, con una presión académica enorme desde una edad muy temprana.

Ben: He leído sobre eso. En Corea del Sur, los estudiantes de secundaria a veces estudian doce horas al día, incluyendo academias privadas después del colegio, para prepararse para un examen único que puede decidir su futuro universitario.

Marina: Es una presión increíble. En cambio, en países como Finlandia, el sistema es completamente diferente: hay muchos menos exámenes, menos deberes, y se da mucha más importancia al bienestar del estudiante.

Ben: Y curiosamente, Finlandia consigue resultados excelentes en las evaluaciones internacionales, a pesar de tener, o quizás precisamente por tener, mucha menos presión académica.

Marina: Exacto, eso hace que mucha gente se pregunte si el modelo de exámenes constantes realmente funciona, o si solo genera estrés sin mejorar el aprendizaje real.

Ben: El programa del Bachillerato Internacional, que nosotros estudiamos, intenta encontrar un equilibrio, combinando exámenes finales con evaluación continua a través de proyectos, ensayos y trabajos orales.

Marina: Es verdad, y a mí personalmente me gusta ese enfoque, porque no todo depende de un único examen final donde un mal día puede arruinar meses de trabajo.

Ben: Estoy de acuerdo. Aunque los exámenes tradicionales también tienen sus defensores. Argumentan que enseñan disciplina, gestión del tiempo bajo presión, y que son una forma más objetiva de comparar a estudiantes de diferentes colegios.

Marina: Es un buen punto. Los proyectos, en cambio, pueden depender más de factores externos, como la ayuda que recibe el estudiante en casa, lo que podría ser injusto para estudiantes con menos recursos.

Ben: Totalmente de acuerdo, es un problema real. Por eso creo que la solución ideal combina ambos métodos, como hace el Bachillerato Internacional, en vez de depender completamente de uno solo.

Marina: Y no podemos olvidar el aspecto de la salud mental. Cada vez hay más estudios que relacionan la presión académica excesiva con el aumento de la ansiedad y la depresión entre adolescentes.

Ben: Es un tema muy serio. En algunos países con sistemas educativos muy competitivos, las tasas de problemas de salud mental entre estudiantes durante la época de exámenes son alarmantemente altas.

Marina: Por eso muchos expertos en educación piden reformas que prioricen el bienestar del estudiante, sin sacrificar la calidad académica.

Ben: Totalmente de acuerdo. Al final, creo que el objetivo de la educación debería ser preparar a los estudiantes para la vida real, no solo para aprobar exámenes.

Marina: Muy bien dicho. ¿Y tú, Ben, qué sistema educativo preferirías si pudieras elegir?

Ben: Sinceramente, prefiero un sistema como el finlandés, con más confianza en los estudiantes y menos presión constante, pero manteniendo estándares académicos altos.

Marina: Yo pienso parecido. Bueno, esto ha sido todo por hoy sobre sistemas educativos.

Ben: No olvidéis repasar el vocabulario y contestar las preguntas de comprensión. ¡Hasta la próxima!

Marina: ¡Hasta pronto!`,
    vocabulary: [
      { es: "evaluar", en: "to evaluate / assess" },
      { es: "academias", en: "academies / cram schools" },
      { es: "enfoque", en: "approach / focus" },
      { es: "disciplina", en: "discipline" },
      { es: "objetiva", en: "objective" },
      { es: "tasas", en: "rates" },
      { es: "reformas", en: "reforms" },
      { es: "aprobar", en: "to pass (an exam)" },
    ],
    questions: [
      {
        id: "pod-social-educacion-q1",
        type: "true-false",
        prompt: "En Corea del Sur, algunos estudiantes de secundaria estudian doce horas al día, incluyendo academias privadas.",
        correctAnswer: "true",
        justification: "los estudiantes de secundaria a veces estudian doce horas al día, incluyendo academias privadas después del colegio",
      },
      {
        id: "pod-social-educacion-q2",
        type: "true-false",
        prompt: "Finlandia tiene muchos exámenes y mucha presión académica, según el episodio.",
        correctAnswer: "false",
        justification: "en países como Finlandia, el sistema es completamente diferente: hay muchos menos exámenes, menos deberes",
      },
      {
        id: "pod-social-educacion-q3",
        type: "mcq",
        prompt: "¿Cómo combina el Bachillerato Internacional la evaluación de los estudiantes?",
        options: ["Solo con un examen final", "Solo con proyectos", "Exámenes finales combinados con evaluación continua", "Sin ningún tipo de examen"],
        correctAnswer: "Exámenes finales combinados con evaluación continua",
      },
      {
        id: "pod-social-educacion-q4",
        type: "mcq",
        prompt: "Según Marina, ¿qué desventaja pueden tener los proyectos como método de evaluación?",
        options: ["Son demasiado fáciles", "Pueden depender de la ayuda que recibe el estudiante en casa", "No enseñan nada útil", "Son más caros para el colegio"],
        correctAnswer: "Pueden depender de la ayuda que recibe el estudiante en casa",
      },
      {
        id: "pod-social-educacion-q5",
        type: "short",
        prompt: "¿Qué sistema educativo preferiría Ben si pudiera elegir?",
        correctAnswer: "el finlandés",
      },
    ],
  },
  {
    id: "planet-plastico",
    themeId: "sharing-planet",
    title: "El problema del plástico: océanos y soluciones",
    description: "Marina y Ben hablan sobre la contaminación por plástico en los océanos y las soluciones que ciudadanos, empresas y gobiernos están poniendo en marcha.",
    level: "medium",
    durationLabel: "~9 min",
    bodyEs: `Marina: Bienvenidos a un nuevo episodio del podcast. Hoy hablamos de un problema medioambiental muy visible: la contaminación por plástico, sobre todo en los océanos.

Ben: Un tema que me preocupa mucho. He leído que hay una cantidad enorme de plástico flotando en el mar, formando auténticas islas de basura.

Marina: Sí, la más famosa se llama la Gran Mancha de Basura del Pacífico, una zona enorme, más grande que muchos países, llena de plástico acumulado por las corrientes marinas.

Ben: Es alarmante. Y lo peor es que el plástico no desaparece, simplemente se rompe en pedazos cada vez más pequeños, llamados microplásticos, que terminan en el agua que bebemos e incluso en la comida que comemos.

Marina: Exacto, se han encontrado microplásticos en la sal marina, en el pescado, e incluso en la sangre humana, según estudios recientes.

Ben: Es preocupante pensar que probablemente todos tenemos plástico dentro de nuestro cuerpo sin saberlo.

Marina: Totalmente. Y el problema afecta muchísimo a la vida marina. Cada año mueren millones de animales marinos, como tortugas, peces y aves, por comer plástico o quedar atrapados en él.

Ben: He visto vídeos de tortugas con pajitas de plástico atascadas en la nariz, y la verdad es que es muy triste.

Marina: Por eso muchos países y ciudades han empezado a prohibir los plásticos de un solo uso, como las bolsas, las pajitas o los cubiertos desechables.

Ben: La Unión Europea, por ejemplo, prohibió varios productos de plástico de un solo uso hace unos años, obligando a las empresas a buscar alternativas.

Marina: Y muchos supermercados ahora cobran por las bolsas de plástico, para animar a la gente a usar bolsas reutilizables.

Ben: Son medidas útiles, pero algunos expertos dicen que no son suficientes, porque el verdadero problema está en la producción masiva de plástico por parte de las grandes empresas.

Marina: Es verdad. Al final, si las empresas siguen fabricando toneladas de plástico barato, es difícil resolver el problema solo con el comportamiento individual de los consumidores.

Ben: Por eso hace falta un cambio más grande: invertir en materiales alternativos biodegradables, mejorar los sistemas de reciclaje, y hacer que las empresas asuman la responsabilidad de los residuos que generan.

Marina: Totalmente de acuerdo. Y a nivel personal, ¿qué haces tú para reducir tu uso de plástico?

Ben: Intento llevar siempre una botella reutilizable y bolsas de tela cuando voy a comprar. También trato de evitar productos con demasiado envoltorio de plástico innecesario.

Marina: Son buenos hábitos. Yo también participo de vez en cuando en limpiezas de playas organizadas por asociaciones locales, que además de limpiar, sirven para concienciar a la gente.

Ben: Qué bien. Ese tipo de actividades comunitarias son una forma estupenda de sentir que estás haciendo algo concreto frente a un problema que a veces parece demasiado grande para solucionarlo solo.

Marina: Totalmente de acuerdo. Al final, cada pequeña acción cuenta, pero también necesitamos que los gobiernos y las empresas asuman su parte de responsabilidad.

Ben: Muy bien dicho. Bueno, esto ha sido todo por hoy sobre el problema del plástico.

Marina: No olvidéis repasar el vocabulario y contestar las preguntas de comprensión. ¡Hasta la próxima!

Ben: ¡Hasta pronto!`,
    vocabulary: [
      { es: "microplásticos", en: "microplastics" },
      { es: "corrientes", en: "currents" },
      { es: "desechables", en: "disposable" },
      { es: "reutilizable", en: "reusable" },
      { es: "envoltorio", en: "packaging / wrapping" },
      { es: "residuos", en: "waste" },
      { es: "concienciar", en: "to raise awareness" },
      { es: "atascadas", en: "stuck / jammed" },
    ],
    questions: [
      {
        id: "pod-planet-plastico-q1",
        type: "true-false",
        prompt: "La Gran Mancha de Basura del Pacífico es una zona enorme de plástico acumulado por las corrientes marinas.",
        correctAnswer: "true",
        justification: "la Gran Mancha de Basura del Pacífico, una zona enorme, más grande que muchos países, llena de plástico acumulado por las corrientes marinas",
      },
      {
        id: "pod-planet-plastico-q2",
        type: "true-false",
        prompt: "Según el episodio, el plástico desaparece completamente con el tiempo.",
        correctAnswer: "false",
        justification: "el plástico no desaparece, simplemente se rompe en pedazos cada vez más pequeños, llamados microplásticos",
      },
      {
        id: "pod-planet-plastico-q3",
        type: "mcq",
        prompt: "¿Dónde se han encontrado microplásticos, según Marina?",
        options: ["Solo en el agua del mar", "En la sal marina, el pescado y la sangre humana", "Solo en el aire", "Solo en la arena de las playas"],
        correctAnswer: "En la sal marina, el pescado y la sangre humana",
      },
      {
        id: "pod-planet-plastico-q4",
        type: "mcq",
        prompt: "¿Qué hizo la Unión Europea respecto a los plásticos de un solo uso?",
        options: ["Los promovió activamente", "Prohibió varios productos de plástico de un solo uso", "No tomó ninguna medida", "Los hizo obligatorios en los restaurantes"],
        correctAnswer: "Prohibió varios productos de plástico de un solo uso",
      },
      {
        id: "pod-planet-plastico-q5",
        type: "short",
        prompt: "¿En qué tipo de actividad comunitaria participa Marina de vez en cuando?",
        correctAnswer: "limpiezas de playas",
      },
    ],
  },
  {
    id: "planet-salud-global",
    themeId: "sharing-planet",
    title: "Salud global: lo que aprendimos de las pandemias",
    description: "Marina y Ben reflexionan sobre la pandemia de COVID-19, la desigualdad en el acceso a la salud global y cómo el mundo se prepara para futuras crisis sanitarias.",
    level: "hard",
    durationLabel: "~9 min",
    bodyEs: `Marina: Bienvenidos a un nuevo episodio del podcast. Hoy vamos a reflexionar sobre un tema que cambió la vida de todos nosotros: la pandemia de COVID-19, y lo que aprendimos sobre la salud global.

Ben: Un tema que todavía se siente muy cercano, aunque ya hayan pasado varios años. ¿Te acuerdas de cómo empezó todo para ti?

Marina: Perfectamente. Recuerdo que al principio parecía un problema lejano, algo que estaba pasando en otro país, y de repente, en cuestión de semanas, todo el mundo estaba confinado en casa.

Ben: A mí me pasó lo mismo. Y lo más extraño fue ver cómo, por primera vez en la historia moderna, prácticamente todos los países del mundo enfrentaban el mismo problema al mismo tiempo.

Marina: Exacto, fue un recordatorio muy claro de que vivimos en un mundo interconectado, donde un problema de salud en un lugar puede convertirse rápidamente en un problema global.

Ben: Y también reveló desigualdades enormes. Los países ricos consiguieron vacunas mucho más rápido que los países más pobres.

Marina: Es verdad, ese fenómeno se llamó "nacionalismo de vacunas": los países ricos compraron muchísimas más dosis de las que necesitaban, mientras muchos países africanos apenas tenían acceso a vacunas incluso un año después.

Ben: Es un ejemplo claro de cómo la desigualdad económica se traduce directamente en desigualdad de salud. Y no es la primera vez que pasa: enfermedades como la malaria o la tuberculosis siguen matando a millones de personas cada año en países pobres, aunque existan tratamientos eficaces.

Marina: Es una realidad muy triste. Por eso muchos expertos hablan de la importancia de fortalecer organizaciones como la Organización Mundial de la Salud, para coordinar mejor la respuesta global ante futuras crisis sanitarias.

Ben: Totalmente de acuerdo. Y también aprendimos lecciones sobre la importancia de la ciencia y la comunicación clara. Durante la pandemia, la desinformación sobre las vacunas se extendió casi tan rápido como el propio virus.

Marina: Es cierto, y eso costó vidas, porque mucha gente rechazó vacunarse basándose en información falsa que circulaba en redes sociales.

Ben: Por eso creo que la educación científica debería tener un papel mucho más importante en los colegios, para que la gente sepa distinguir información fiable de bulos.

Marina: Totalmente de acuerdo. Otro aprendizaje importante fue sobre la salud mental. El confinamiento y el aislamiento social afectaron muchísimo a la salud mental de millones de personas, especialmente a los jóvenes.

Ben: Sí, yo mismo pasé por momentos difíciles durante esos meses, sin poder ver a mis amigos ni participar en actividades normales.

Marina: Muchos de nosotros pasamos por algo parecido. Y por suerte, esa experiencia ayudó a que la sociedad hablara más abiertamente sobre la importancia del bienestar emocional.

Ben: Totalmente. Y para terminar, ¿crees que el mundo está mejor preparado ahora para una futura pandemia?

Marina: Creo que sí, en parte. Se han desarrollado nuevas tecnologías de vacunas, como las vacunas de ARN mensajero, mucho más rápidas de producir que las tradicionales. Pero la desigualdad global en el acceso a la salud sigue siendo un problema enorme sin resolver.

Ben: Espero que la próxima vez el mundo actúe con más solidaridad, y que la salud se entienda como un derecho de todos, no solo de quienes pueden pagarla.

Marina: Muy bien dicho, Ben. Bueno, esto ha sido todo por hoy sobre salud global y lo que aprendimos de la pandemia.

Ben: No olvidéis repasar el vocabulario y contestar las preguntas de comprensión. ¡Hasta la próxima!

Marina: ¡Hasta pronto!`,
    vocabulary: [
      { es: "pandemia", en: "pandemic" },
      { es: "confinado", en: "confined / locked down" },
      { es: "desigualdades", en: "inequalities" },
      { es: "vacunas", en: "vaccines" },
      { es: "dosis", en: "doses" },
      { es: "bulos", en: "hoaxes" },
      { es: "aislamiento", en: "isolation" },
      { es: "solidaridad", en: "solidarity" },
    ],
    questions: [
      {
        id: "pod-planet-salud-global-q1",
        type: "true-false",
        prompt: "Los países ricos consiguieron vacunas mucho más rápido que los países más pobres durante la pandemia.",
        correctAnswer: "true",
        justification: "Los países ricos consiguieron vacunas mucho más rápido que los países más pobres.",
      },
      {
        id: "pod-planet-salud-global-q2",
        type: "true-false",
        prompt: "Según el episodio, la malaria y la tuberculosis ya no matan a nadie porque existen tratamientos eficaces.",
        correctAnswer: "false",
        justification: "enfermedades como la malaria o la tuberculosis siguen matando a millones de personas cada año en países pobres, aunque existan tratamientos eficaces",
      },
      {
        id: "pod-planet-salud-global-q3",
        type: "mcq",
        prompt: "¿Cómo se llamó el fenómeno en el que los países ricos compraron muchas más vacunas de las que necesitaban?",
        options: ["Desinformación sanitaria", "Nacionalismo de vacunas", "Solidaridad global", "Aislamiento social"],
        correctAnswer: "Nacionalismo de vacunas",
      },
      {
        id: "pod-planet-salud-global-q4",
        type: "mcq",
        prompt: "¿Qué tipo de vacunas nuevas se desarrollaron y se producen más rápido que las tradicionales?",
        options: ["Vacunas de ARN mensajero", "Vacunas de virus vivo", "Vacunas orales", "Vacunas de bacterias"],
        correctAnswer: "Vacunas de ARN mensajero",
      },
      {
        id: "pod-planet-salud-global-q5",
        type: "short",
        prompt: "¿Qué organización mencionan que debería fortalecerse para coordinar mejor la respuesta ante futuras crisis sanitarias?",
        correctAnswer: "la Organización Mundial de la Salud",
      },
    ],
  },
];

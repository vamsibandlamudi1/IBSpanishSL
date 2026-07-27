import { GrammarExercise } from "../types";
import { shuffleFixed } from "./shuffle-util";

interface HeadingParagraph {
  themeId: string;
  heading: string;
  paragraph: string;
}

// 40 short paragraphs (8 per IB theme), each with one correct heading —
// mirrors the real IB Paper 1 "match the heading to the section" task,
// which was a flagged critical gap (no equivalent existed anywhere in the
// app). Distractor headings for each question are pulled only from OTHER
// paragraphs within the SAME theme, so they stay topically plausible
// instead of being obviously unrelated.
const PARAGRAPHS: HeadingParagraph[] = [
  // --- identities ---
  { themeId: "identities", heading: "Empezar de nuevo", paragraph: "El primer día en un colegio nuevo puede ser muy difícil. Muchos estudiantes sienten nervios porque no conocen a nadie y todo el ambiente es desconocido. Sin embargo, con el tiempo, la mayoría hace nuevos amigos y se adapta a la rutina." },
  { themeId: "identities", heading: "La ropa como expresión personal", paragraph: "La forma de vestir dice mucho sobre quiénes somos. Algunos jóvenes eligen ropa llamativa para destacar, mientras que otros prefieren un estilo más discreto. En cualquier caso, la moda es una manera de mostrar la personalidad sin necesidad de hablar." },
  { themeId: "identities", heading: "Crecer entre dos idiomas", paragraph: "Muchos niños que crecen en familias bilingües hablan un idioma en casa y otro en el colegio. Al principio esto puede resultar confuso, pero con el tiempo se convierte en una ventaja: pueden comunicarse con más personas y entender mejor otras culturas." },
  { themeId: "identities", heading: "Las tradiciones familiares", paragraph: "Cada familia tiene sus propias costumbres, desde las comidas especiales hasta las celebraciones anuales. Estas tradiciones ayudan a los jóvenes a sentirse conectados con su historia y a entender de dónde vienen sus valores." },
  { themeId: "identities", heading: "Las redes sociales y la autoimagen", paragraph: "Hoy en día, muchos adolescentes se comparan constantemente con las fotos perfectas que ven en internet. Los psicólogos advierten que esto puede afectar negativamente la autoestima, especialmente si los jóvenes olvidan que esas imágenes suelen estar editadas." },
  { themeId: "identities", heading: "Decidir quién quiero ser", paragraph: "Elegir una carrera profesional es una de las decisiones más importantes de la adolescencia. Algunos jóvenes lo tienen claro desde pequeños, mientras que otros necesitan probar diferentes actividades antes de encontrar su verdadera pasión." },
  { themeId: "identities", heading: "Aceptar el propio cuerpo", paragraph: "Durante la adolescencia, el cuerpo cambia rápidamente y esto puede generar inseguridad. Aprender a aceptar estos cambios, en lugar de compararse con los demás, es fundamental para desarrollar una autoestima sana." },
  { themeId: "identities", heading: "El significado de nuestro nombre", paragraph: "El nombre que llevamos a menudo tiene una historia familiar detrás: puede venir de un abuelo, de una tradición religiosa o simplemente gustarles a nuestros padres. Para muchas personas, conocer el origen de su nombre les ayuda a sentirse más conectadas con su identidad." },

  // --- experiences ---
  { themeId: "experiences", heading: "El primer viaje al extranjero", paragraph: "Viajar solo al extranjero por primera vez es una experiencia que cambia a cualquier joven. Aprender a manejarse en un idioma diferente, resolver problemas sin ayuda de la familia y conocer costumbres nuevas ayuda a ganar independencia rápidamente." },
  { themeId: "experiences", heading: "Aprender de los errores", paragraph: "Fracasar en un examen o en una competición puede parecer el fin del mundo en el momento, pero con el tiempo muchos jóvenes se dan cuenta de que esos errores les enseñaron más que cualquier éxito fácil." },
  { themeId: "experiences", heading: "Una excursión inolvidable", paragraph: "El año pasado, mi clase viajó a las montañas durante una semana. Dormimos en tiendas de campaña, cocinamos juntos y aprendimos a trabajar en equipo. Fue una de las experiencias más memorables de mi vida escolar." },
  { themeId: "experiences", heading: "El valor del voluntariado", paragraph: "Muchos estudiantes descubren, al hacer trabajo voluntario, que ayudar a los demás les aporta una satisfacción distinta a cualquier otro logro personal. Además, este tipo de experiencia suele abrirles los ojos ante realidades que desconocían." },
  { themeId: "experiences", heading: "Mi primer trabajo", paragraph: "Conseguir mi primer trabajo de fin de semana fue emocionante y aterrador a la vez. Aprendí a gestionar mi tiempo, a tratar con clientes difíciles y, sobre todo, a valorar el dinero que ganaba con esfuerzo." },
  { themeId: "experiences", heading: "Superar el miedo escénico", paragraph: "Antes de la obra de teatro del colegio, estaba tan nervioso que apenas podía hablar. Sin embargo, en cuanto empecé a actuar, el miedo desapareció. Ahora sé que puedo enfrentarme a situaciones que antes me parecían imposibles." },
  { themeId: "experiences", heading: "Adaptarse a una ciudad nueva", paragraph: "Cuando mi familia se mudó a otra ciudad, tuve que dejar atrás a mis amigos de toda la vida. Al principio me sentía muy solo, pero poco a poco descubrí nuevos lugares y personas que hicieron que este cambio valiera la pena." },
  { themeId: "experiences", heading: "Una competición que puso a prueba mi esfuerzo", paragraph: "Entrené durante meses para el campeonato regional de natación. Aunque no gané la medalla de oro, terminar la carrera después de tanto esfuerzo me hizo sentir más orgulloso que cualquier premio." },

  // --- human-ingenuity ---
  { themeId: "human-ingenuity", heading: "La inteligencia artificial en la vida diaria", paragraph: "La inteligencia artificial ya forma parte de nuestra rutina, desde los asistentes virtuales hasta las recomendaciones de las aplicaciones que usamos. Aunque facilita muchas tareas, también genera preguntas sobre la privacidad y el futuro del empleo." },
  { themeId: "human-ingenuity", heading: "Innovación en energías renovables", paragraph: "Cada año se desarrollan tecnologías más eficientes para aprovechar el sol y el viento como fuentes de energía. Estos avances son fundamentales para reducir la dependencia de los combustibles fósiles y frenar el cambio climático." },
  { themeId: "human-ingenuity", heading: "El invento de un estudiante", paragraph: "Un grupo de estudiantes de instituto diseñó un dispositivo capaz de purificar agua utilizando materiales reciclados. El proyecto ganó un premio internacional y ahora se está probando en varias comunidades sin acceso a agua potable." },
  { themeId: "human-ingenuity", heading: "El futuro de la exploración espacial", paragraph: "Las nuevas misiones espaciales buscan no solo explorar otros planetas, sino también encontrar soluciones a problemas terrestres, como la escasez de recursos. Cada vez más jóvenes se interesan por estudiar carreras relacionadas con la astronomía." },
  { themeId: "human-ingenuity", heading: "Avances en la medicina moderna", paragraph: "Gracias a la tecnología, hoy es posible diagnosticar enfermedades con mucha más precisión que hace unas décadas. Los robots quirúrgicos y la inteligencia artificial están cambiando la forma en que los médicos tratan a sus pacientes." },
  { themeId: "human-ingenuity", heading: "Un invento que cambió la historia", paragraph: "La imprenta, inventada en el siglo quince, permitió que los libros se produjeran en masa por primera vez. Este invento democratizó el acceso al conocimiento y sentó las bases de la educación moderna tal como la conocemos hoy." },
  { themeId: "human-ingenuity", heading: "¿Dependemos demasiado de la tecnología?", paragraph: "Aunque los teléfonos inteligentes han hecho la vida más cómoda, muchos expertos advierten sobre los riesgos de pasar demasiado tiempo conectados. Algunos jóvenes ya están intentando reducir su uso del móvil de forma consciente." },
  { themeId: "human-ingenuity", heading: "Robots en las fábricas del futuro", paragraph: "Cada vez más fábricas utilizan robots para realizar tareas repetitivas y peligrosas. Esto ha mejorado la eficiencia de la producción, aunque también ha generado debate sobre el impacto en los puestos de trabajo tradicionales." },

  // --- social-organization ---
  { themeId: "social-organization", heading: "La importancia de la participación estudiantil", paragraph: "El consejo escolar permite que los estudiantes expresen sus opiniones sobre las decisiones del colegio. Participar en estas reuniones enseña a los jóvenes a defender sus ideas y a negociar con respeto." },
  { themeId: "social-organization", heading: "Trabajar por la comunidad", paragraph: "Muchos jóvenes dedican parte de su tiempo libre a ayudar en comedores sociales o a acompañar a personas mayores. Este tipo de trabajo fortalece los lazos dentro del barrio y enseña valores de solidaridad." },
  { themeId: "social-organization", heading: "La brecha entre generaciones", paragraph: "Los abuelos y los nietos a menudo tienen formas muy diferentes de comunicarse y de ver el mundo. Sin embargo, cuando ambas generaciones se escuchan con paciencia, pueden aprender mucho la una de la otra." },
  { themeId: "social-organization", heading: "Programas contra el acoso escolar", paragraph: "Muchos colegios han implementado programas de mediación para prevenir el acoso escolar. Estos programas enseñan a los estudiantes a resolver conflictos sin violencia y a pedir ayuda cuando la necesitan." },
  { themeId: "social-organization", heading: "Los jóvenes y la participación política", paragraph: "Cada vez más jóvenes se interesan por la política local, asistiendo a debates y organizando campañas sobre temas que les afectan directamente, como el transporte público o el medioambiente." },
  { themeId: "social-organization", heading: "Nuevos modelos de familia", paragraph: "La estructura familiar tradicional ha cambiado mucho en las últimas décadas. Hoy existen muchos tipos de familias, y la sociedad poco a poco ha aprendido a aceptar y respetar esta diversidad." },
  { themeId: "social-organization", heading: "La igualdad en el trabajo", paragraph: "Aunque se ha avanzado mucho, todavía existen diferencias salariales entre hombres y mujeres en muchos sectores. Diversas organizaciones trabajan para lograr una mayor igualdad de oportunidades laborales." },
  { themeId: "social-organization", heading: "Normas de convivencia en el aula", paragraph: "Las normas de clase existen para que todos los estudiantes puedan aprender en un ambiente tranquilo y respetuoso. Cuando estas reglas se explican con claridad, los alumnos las cumplen con más facilidad." },

  // --- sharing-planet ---
  { themeId: "sharing-planet", heading: "El problema de la contaminación plástica", paragraph: "Cada año, millones de toneladas de plástico terminan en los océanos, dañando gravemente a la vida marina. Reducir el uso de plástico de un solo uso es una de las medidas más eficaces que cualquier persona puede tomar." },
  { themeId: "sharing-planet", heading: "Energía limpia en casa", paragraph: "Instalar paneles solares en el techo de una vivienda puede reducir significativamente la factura eléctrica y la huella de carbono de una familia. Cada vez más gobiernos ofrecen ayudas económicas para facilitar esta transición." },
  { themeId: "sharing-planet", heading: "Especies en peligro de extinción", paragraph: "La deforestación y la caza furtiva han puesto en peligro a numerosas especies animales en todo el mundo. Diversas organizaciones trabajan para proteger sus hábitats naturales antes de que sea demasiado tarde." },
  { themeId: "sharing-planet", heading: "La escasez de agua potable", paragraph: "En muchas regiones del mundo, conseguir agua potable sigue siendo un desafío diario. El cambio climático está agravando este problema, especialmente en zonas que ya sufrían sequías frecuentes." },
  { themeId: "sharing-planet", heading: "Cambiar nuestros hábitos de reciclaje", paragraph: "Separar correctamente la basura en casa puede parecer un gesto pequeño, pero si toda la comunidad lo hace, el impacto ambiental es enorme. Muchas ciudades están mejorando sus sistemas de reciclaje para facilitar esta tarea." },
  { themeId: "sharing-planet", heading: "Transporte sostenible para el futuro", paragraph: "Cada vez más ciudades fomentan el uso de la bicicleta y el transporte público para reducir la contaminación del aire. Estas iniciativas buscan crear ciudades más limpias y saludables para todos." },
  { themeId: "sharing-planet", heading: "Los efectos visibles del cambio climático", paragraph: "El derretimiento de los glaciares y el aumento del nivel del mar son señales claras de que el clima del planeta está cambiando. Los científicos insisten en la urgencia de actuar antes de que los daños sean irreversibles." },
  { themeId: "sharing-planet", heading: "El desperdicio de alimentos", paragraph: "Una gran parte de la comida que se produce en el mundo termina en la basura sin haber sido consumida. Reducir el desperdicio de alimentos, tanto en los hogares como en los supermercados, ayudaría a combatir el hambre global." },
];

const PROMPT_TEMPLATES = [
  (p: string) => `¿Qué título describe mejor este párrafo?\n\n"${p}"`,
  (p: string) => `Elige el título más adecuado para el siguiente texto:\n\n"${p}"`,
  (p: string) => `Lee el párrafo y selecciona el mejor título:\n\n"${p}"`,
  (p: string) => `¿Cuál de estos títulos resume mejor la idea principal del párrafo?\n\n"${p}"`,
  (p: string) => `Empareja el párrafo con su título correcto:\n\n"${p}"`,
];

/** Bounded, self-terminating by construction: both loops iterate over
 *  fixed-length arrays (PARAGRAPHS and a per-theme "other headings" list),
 *  so there is no while(count < target) search and therefore no way for
 *  this generator to loop indefinitely — the same class of bug that once
 *  broke the present-tense generator can't happen here. */
function createHeadingMatching(): GrammarExercise[] {
  const exercises: GrammarExercise[] = [];
  let idCounter = 1;

  const byTheme = new Map<string, HeadingParagraph[]>();
  for (const p of PARAGRAPHS) {
    byTheme.set(p.themeId, [...(byTheme.get(p.themeId) ?? []), p]);
  }

  for (const group of byTheme.values()) {
    group.forEach((item, j) => {
      const otherHeadings = group.filter((_, k) => k !== j).map((o) => o.heading);
      PROMPT_TEMPLATES.forEach((template, v) => {
        // Rotate through the 7 other headings 3 at a time, so each variant
        // gets a different distractor set instead of always the same three.
        const start = (v * 3) % otherHeadings.length;
        const distractors = [0, 1, 2].map((k) => otherHeadings[(start + k) % otherHeadings.length]);
        const options = shuffleFixed([item.heading, ...distractors], j * 5 + v);

        exercises.push({
          id: `hm-${idCounter++}`,
          type: "mcq",
          prompt: template(item.paragraph),
          options,
          correctAnswer: item.heading,
          tip: "Busca la idea PRINCIPAL del párrafo, no solo una palabra que se repite — los títulos incorrectos suelen mencionar un detalle secundario del texto.",
        });
      });
    });
  }

  return exercises;
}

export const HEADING_MATCHING_EXERCISES: GrammarExercise[] = createHeadingMatching();

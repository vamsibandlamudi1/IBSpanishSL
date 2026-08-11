/// File: src/components/WordDetailPanel.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { VocabItem } from "@/lib/types";
import { speak, stopSpeaking } from "@/lib/speech";

// ---------------------------------------------------------------------------
// Sentence example generator
// ---------------------------------------------------------------------------
// Each entry = [Spanish sentence, English sentence]
// The key is matched against the Spanish word (case-insensitive, partial).
// We check EXACT es matches first, then fallback to keyword heuristics.
type SentencePair = [string, string];

/**
 * Small curated map: Spanish word (lowercased, strip article) → example sentences.
 * We can't cover every word, so we also have a smart heuristic fallback.
 */
const EXAMPLE_MAP: Record<string, SentencePair[]> = {
  // Lifestyles / Health
  "sedentarismo": [
    ["El sedentarismo puede afectar negativamente la salud a largo plazo.", "A sedentary lifestyle can negatively affect health in the long term."],
    ["Muchos jóvenes sufren de sedentarismo debido al uso excesivo de pantallas.", "Many young people suffer from a sedentary lifestyle due to excessive screen use."],
  ],
  "nutrición": [
    ["Una buena nutrición es fundamental para el bienestar físico y mental.", "Good nutrition is fundamental for physical and mental well-being."],
    ["El médico me recomendó mejorar mi nutrición y hacer más ejercicio.", "The doctor recommended I improve my nutrition and exercise more."],
  ],
  "salud mental": [
    ["Cuidar la salud mental es tan importante como cuidar el cuerpo.", "Taking care of mental health is just as important as taking care of the body."],
    ["En la escuela se habla más sobre la salud mental de los adolescentes.", "At school, more is being said about the mental health of teenagers."],
  ],
  "autocuidado": [
    ["El autocuidado incluye dormir bien y tomarse tiempo para uno mismo.", "Self-care includes sleeping well and taking time for yourself."],
    ["Practicar el autocuidado ayuda a reducir el estrés diario.", "Practicing self-care helps reduce daily stress."],
  ],
  "estrés": [
    ["El estrés puede provocar problemas de sueño y falta de concentración.", "Stress can cause sleep problems and lack of concentration."],
    ["Es importante aprender a manejar el estrés de forma saludable.", "It is important to learn to manage stress in a healthy way."],
  ],
  "meditación": [
    ["La meditación diaria me ayuda a mantener la calma durante los exámenes.", "Daily meditation helps me stay calm during exams."],
    ["Muchos expertos recomiendan la meditación para reducir la ansiedad.", "Many experts recommend meditation to reduce anxiety."],
  ],
  "actividad física": [
    ["Realizar actividad física regularmente mejora el estado de ánimo.", "Doing physical activity regularly improves mood."],
    ["Los médicos recomiendan al menos 30 minutos de actividad física al día.", "Doctors recommend at least 30 minutes of physical activity per day."],
  ],
  "bienestar": [
    ["El bienestar de los estudiantes depende de varios factores.", "Student well-being depends on several factors."],
    ["Un buen equilibrio entre trabajo y descanso favorece el bienestar.", "A good balance between work and rest promotes well-being."],
  ],
  "ansiedad": [
    ["La ansiedad antes de los exámenes es muy común entre los estudiantes.", "Anxiety before exams is very common among students."],
    ["Hablar con un especialista puede ayudar a controlar la ansiedad.", "Talking to a specialist can help control anxiety."],
  ],
  "depresión": [
    ["La depresión es una enfermedad que requiere atención médica.", "Depression is an illness that requires medical attention."],
    ["Es importante buscar apoyo si uno sufre de depresión.", "It is important to seek support if one suffers from depression."],
  ],
  "vacuna": [
    ["La vacuna contra la gripe se recomienda cada año.", "The flu vaccine is recommended every year."],
    ["Gracias a las vacunas, muchas enfermedades han sido eliminadas.", "Thanks to vaccines, many diseases have been eliminated."],
  ],
  "diagnóstico": [
    ["El diagnóstico temprano mejora las posibilidades de recuperación.", "Early diagnosis improves the chances of recovery."],
    ["El médico realizó un diagnóstico preciso después de los análisis.", "The doctor made an accurate diagnosis after the tests."],
  ],
  "tratamiento": [
    ["El tratamiento duró varios meses pero fue muy efectivo.", "The treatment lasted several months but was very effective."],
    ["Siguió el tratamiento al pie de la letra y se recuperó rápido.", "She followed the treatment to the letter and recovered quickly."],
  ],
  // Language & Identity
  "bilingüismo": [
    ["El bilingüismo ofrece ventajas cognitivas y culturales.", "Bilingualism offers cognitive and cultural advantages."],
    ["En muchas familias, el bilingüismo se transmite de padres a hijos.", "In many families, bilingualism is passed from parents to children."],
  ],
  "lengua materna": [
    ["Mi lengua materna es el español, pero también hablo inglés.", "My mother tongue is Spanish, but I also speak English."],
    ["Preservar la lengua materna es importante para mantener la identidad cultural.", "Preserving the mother tongue is important for maintaining cultural identity."],
  ],
  "dialecto": [
    ["El dialecto andino tiene características propias que lo distinguen.", "The Andean dialect has its own characteristics that distinguish it."],
    ["Cada región tiene su propio dialecto con palabras únicas.", "Each region has its own dialect with unique words."],
  ],
  "traducción": [
    ["La traducción literaria es un arte que requiere mucha precisión.", "Literary translation is an art that requires great precision."],
    ["La traducción automática ha mejorado mucho en los últimos años.", "Automatic translation has improved greatly in recent years."],
  ],
  "identidad": [
    ["La identidad cultural se forma a través de la lengua y las tradiciones.", "Cultural identity is formed through language and traditions."],
    ["Es normal explorar la propia identidad durante la adolescencia.", "It is normal to explore one's own identity during adolescence."],
  ],
  "cultura": [
    ["La cultura española es rica en historia, arte y gastronomía.", "Spanish culture is rich in history, art, and gastronomy."],
    ["Aprender un idioma también significa entender su cultura.", "Learning a language also means understanding its culture."],
  ],
  // Beliefs & Values
  "tolerancia": [
    ["La tolerancia es esencial para vivir en una sociedad diversa.", "Tolerance is essential for living in a diverse society."],
    ["Los jóvenes deben aprender el valor de la tolerancia desde pequeños.", "Young people should learn the value of tolerance from a young age."],
  ],
  "empatía": [
    ["La empatía nos permite entender los sentimientos de los demás.", "Empathy allows us to understand the feelings of others."],
    ["Demostrar empatía es fundamental en cualquier relación humana.", "Showing empathy is fundamental in any human relationship."],
  ],
  "discriminación": [
    ["La discriminación por motivos raciales sigue siendo un problema grave.", "Discrimination on racial grounds remains a serious problem."],
    ["Es importante luchar contra cualquier tipo de discriminación.", "It is important to fight against any type of discrimination."],
  ],
  "solidaridad": [
    ["La solidaridad entre vecinos fue clave para superar la crisis.", "Solidarity among neighbors was key to overcoming the crisis."],
    ["Los voluntarios mostraron una gran solidaridad con los damnificados.", "The volunteers showed great solidarity with those affected."],
  ],
  // Childhood & Adolescence
  "juventud": [
    ["La juventud es una etapa llena de descubrimientos y aprendizajes.", "Youth is a stage full of discoveries and learning."],
    ["Durante la juventud se forman muchos de los valores de la persona.", "During youth, many of a person's values are formed."],
  ],
  "madurez": [
    ["La madurez emocional es importante para tomar buenas decisiones.", "Emotional maturity is important for making good decisions."],
    ["Con la madurez llega una mayor comprensión de uno mismo.", "With maturity comes a greater understanding of oneself."],
  ],
  "curiosidad": [
    ["La curiosidad es el primer paso hacia el aprendizaje.", "Curiosity is the first step towards learning."],
    ["Los niños tienen una curiosidad natural por el mundo que los rodea.", "Children have a natural curiosity about the world around them."],
  ],
  // Globalization
  "globalización": [
    ["La globalización ha conectado economías y culturas de todo el mundo.", "Globalization has connected economies and cultures from around the world."],
    ["La globalización trae oportunidades pero también desafíos culturales.", "Globalization brings opportunities but also cultural challenges."],
  ],
  "migración": [
    ["La migración puede ser una respuesta a la pobreza o la violencia.", "Migration can be a response to poverty or violence."],
    ["Muchas familias han mejorado su vida gracias a la migración.", "Many families have improved their lives thanks to migration."],
  ],
  "sostenibilidad": [
    ["La sostenibilidad ambiental es una prioridad en el siglo XXI.", "Environmental sustainability is a priority in the 21st century."],
    ["Las empresas deben adoptar prácticas de sostenibilidad para el futuro.", "Companies must adopt sustainability practices for the future."],
  ],
  "tecnología": [
    ["La tecnología ha transformado la forma en que nos comunicamos.", "Technology has transformed the way we communicate."],
    ["El uso responsable de la tecnología es fundamental hoy en día.", "Responsible use of technology is fundamental today."],
  ],
  "medio ambiente": [
    ["Debemos proteger el medio ambiente para las generaciones futuras.", "We must protect the environment for future generations."],
    ["El cambio climático es una amenaza real para el medio ambiente.", "Climate change is a real threat to the environment."],
  ],
  "cambio climático": [
    ["El cambio climático afecta a todos los países del mundo.", "Climate change affects all countries in the world."],
    ["Es urgente tomar medidas para frenar el cambio climático.", "It is urgent to take measures to stop climate change."],
  ],
  // Urban / Social
  "desigualdad": [
    ["La desigualdad económica sigue siendo un reto para muchos países.", "Economic inequality remains a challenge for many countries."],
    ["Reducir la desigualdad social requiere políticas públicas efectivas.", "Reducing social inequality requires effective public policies."],
  ],
  "pobreza": [
    ["La pobreza limita el acceso a la educación y la salud.", "Poverty limits access to education and health."],
    ["Los programas sociales buscan reducir los niveles de pobreza.", "Social programs seek to reduce poverty levels."],
  ],
  "educación": [
    ["La educación es la herramienta más poderosa para cambiar el mundo.", "Education is the most powerful tool to change the world."],
    ["Invertir en educación es invertir en el futuro de un país.", "Investing in education is investing in a country's future."],
  ],
  "familia": [
    ["La familia es el primer grupo social en el que crecemos.", "Family is the first social group we grow up in."],
    ["Los valores de la familia influyen en el desarrollo personal.", "Family values influence personal development."],
  ],
};

/** Strip leading Spanish articles to look up the word in our map */
function stripArticle(word: string): string {
  return word.replace(/^(el|la|los|las|un|una|unos|unas)\s+/i, "").trim().toLowerCase();
}

/** Find the best example sentences for a vocab item */
export function getExamples(v: VocabItem): SentencePair[] {
  const key = stripArticle(v.es);
  // 1. Exact match in our curated map
  if (EXAMPLE_MAP[key]) return EXAMPLE_MAP[key];

  // 2. Check if any curated key is a substring of the word or vice-versa
  const closestKey = Object.keys(EXAMPLE_MAP).find(
    (k) => key.includes(k) || k.includes(key)
  );
  if (closestKey) return EXAMPLE_MAP[closestKey];

  // 3. Semantic heuristic fallback: build 2 template sentences from the word
  return buildFallbackExamples(v);
}

function buildFallbackExamples(v: VocabItem): SentencePair[] {
  const es = v.es;
  const en = v.en;
  const keyLower = stripArticle(es);

  // Heuristic: Is it a noun (starts with el/la)?
  const hasArticle = /^(el|la|los|las)\s/i.test(es);

  if (hasArticle) {
    const articleMatch = es.match(/^(el|la|los|las)\s/i);
    const article = articleMatch ? articleMatch[0].trim() : "el";
    const isPlural = article === "los" || article === "las";

    if (isPlural) {
      return [
        [`${es.charAt(0).toUpperCase() + es.slice(1)} son un tema importante en la sociedad actual.`,
          `${en.charAt(0).toUpperCase() + en.slice(1)} are an important topic in today's society.`],
        [`Debemos hablar abiertamente sobre ${es} para encontrar soluciones.`,
          `We should talk openly about ${en} to find solutions.`],
      ];
    } else {
      return [
        [`${es.charAt(0).toUpperCase() + es.slice(1)} es un concepto fundamental que debemos entender bien.`,
          `${en.charAt(0).toUpperCase() + en.slice(1)} is a fundamental concept that we must understand well.`],
        [`Hay que tener en cuenta ${es} cuando hablamos de este tema.`,
          `We must consider ${en} when talking about this topic.`],
      ];
    }
  }

  // Verb or other forms
  return [
    [`Es importante ${keyLower} de manera consciente y responsable.`,
      `It is important to be conscious and responsible about ${en}.`],
    [`Aprender sobre ${keyLower} nos ayuda a mejorar como personas.`,
      `Learning about ${en} helps us improve as people.`],
  ];
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface Props {
  word: VocabItem | null;
  onClose: () => void;
}

export default function WordDetailPanel({ word, onClose }: Props) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speakingEx, setSpeakingEx] = useState<number | null>(null);
  const prevWordRef = useRef<string | null>(null);

  // Stop audio when a new word is selected
  useEffect(() => {
    if (word?.es !== prevWordRef.current) {
      stopSpeaking();
      setIsSpeaking(false);
      setSpeakingEx(null);
      prevWordRef.current = word?.es ?? null;
    }
  }, [word]);

  useEffect(() => () => stopSpeaking(), []);

  if (!word) {
    return (
      <div className="word-detail-empty">
        <div className="word-detail-empty-icon">📖</div>
        <p className="word-detail-empty-text">Click any word to see details &amp; examples</p>
      </div>
    );
  }

  const examples = getExamples(word);

  const playWord = () => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
      return;
    }
    setSpeakingEx(null);
    setIsSpeaking(true);
    speak(word.es, () => setIsSpeaking(false));
  };

  const playExample = (idx: number, text: string) => {
    if (speakingEx === idx) {
      stopSpeaking();
      setSpeakingEx(null);
      return;
    }
    setIsSpeaking(false);
    stopSpeaking();
    setSpeakingEx(idx);
    speak(text, () => setSpeakingEx((cur) => (cur === idx ? null : cur)));
  };

  // Extract article + base word for display
  const articleMatch = word.es.match(/^(el|la|los|las|un|una)\s/i);
  const article = articleMatch ? articleMatch[0].trim() : null;
  const baseWord = article ? word.es.slice(article.length + 1) : word.es;

  return (
    <div className="word-detail-panel">
      {/* Header */}
      <div className="word-detail-header">
        <div className="word-detail-word-block">
          {article && <span className="word-detail-article">{article}</span>}
          <h2 className="word-detail-word">{baseWord}</h2>
        </div>
        <div className="word-detail-header-actions">
          <button
            type="button"
            onClick={playWord}
            aria-label={`Play pronunciation of ${word.es}`}
            className={`word-detail-listen-btn ${isSpeaking ? "word-detail-listen-btn--active" : ""}`}
          >
            <span className="word-detail-listen-icon">{isSpeaking ? "⏹" : "🔊"}</span>
            <span className="word-detail-listen-label">{isSpeaking ? "Stop" : "Listen"}</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close detail panel"
            className="word-detail-close-btn"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Translation */}
      <div className="word-detail-translation">
        <span className="word-detail-translation-label">English</span>
        <span className="word-detail-translation-value">{word.en}</span>
      </div>

      {/* Subtopic badge */}
      <div className="word-detail-meta">
        <span className="word-detail-subtopic-badge">
          📌 {word.subtopic}
        </span>
      </div>

      {/* Divider */}
      <div className="word-detail-divider" />

      {/* Example sentences */}
      <div className="word-detail-examples">
        <p className="word-detail-examples-title">Example sentences</p>
        <div className="word-detail-examples-list">
          {examples.map(([es, en], i) => (
            <div key={i} className="word-detail-example-card">
              <div className="word-detail-example-header">
                <span className="word-detail-example-num">{i + 1}</span>
                <button
                  type="button"
                  onClick={() => playExample(i, es)}
                  aria-label={`Play example ${i + 1}`}
                  className={`word-detail-example-play ${speakingEx === i ? "word-detail-example-play--active" : ""}`}
                >
                  {speakingEx === i ? "⏹" : "🔊"}
                </button>
              </div>
              <p className="word-detail-example-es">{es}</p>
              <p className="word-detail-example-en">{en}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer tip */}
      <div className="word-detail-tip">
        <span>💡</span>
        <span>Read the sentences aloud to reinforce your memory.</span>
      </div>
    </div>
  );
}

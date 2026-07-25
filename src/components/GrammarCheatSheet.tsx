/// File: src/components/GrammarCheatSheet.tsx
"use client";

import { useState } from "react";
import SimpleExplainer from "./SimpleExplainer";

/** A dense, scannable reference — conjugation tables and the classic
 *  trouble spots (preterite vs. imperfect, por vs. para, subjunctive
 *  triggers) that the practice-drill topics in lib/grammar.ts touch on
 *  individually but never lay out side-by-side for quick lookup. A
 *  persistent sidebar (same pattern as GrammarModule's topic list) shows
 *  one section at a time instead of one long scroll, since this is a
 *  lookup page students jump into mid-exercise. Pure reference, no
 *  grading/points. */

const PRONOUNS = ["yo", "tú", "él/ella/Ud.", "nosotros/as", "vosotros/as", "ellos/ellas/Uds."];

interface RegularTense {
  id: string;
  name: string;
  note: string;
  ar: string[];
  er: string[];
  ir: string[];
  examples: { es: string; en: string }[];
}

const REGULAR_TENSES: RegularTense[] = [
  {
    id: "present",
    name: "Present",
    note: "-ar → -o, -as, -a, -amos, -áis, -an · -er → -o, -es, -e, -emos, -éis, -en · -ir → -o, -es, -e, -imos, -ís, -en",
    ar: ["hablo", "hablas", "habla", "hablamos", "habláis", "hablan"],
    er: ["como", "comes", "come", "comemos", "coméis", "comen"],
    ir: ["vivo", "vives", "vive", "vivimos", "vivís", "viven"],
    examples: [
      { es: "Hablo español todos los días.", en: "I speak Spanish every day." },
      { es: "Ella come frutas por la mañana.", en: "She eats fruit in the morning." },
    ],
  },
  {
    id: "preterite",
    name: "Preterite",
    note: "Completed past action. -ar → -é, -aste, -ó, -amos, -asteis, -aron · -er/-ir → -í, -iste, -ió, -imos, -isteis, -ieron",
    ar: ["hablé", "hablaste", "habló", "hablamos", "hablasteis", "hablaron"],
    er: ["comí", "comiste", "comió", "comimos", "comisteis", "comieron"],
    ir: ["viví", "viviste", "vivió", "vivimos", "vivisteis", "vivieron"],
    examples: [
      { es: "Hablé con mi amigo ayer.", en: "I spoke with my friend yesterday." },
      { es: "Comimos pizza anoche.", en: "We ate pizza last night." },
    ],
  },
  {
    id: "imperfect",
    name: "Imperfect",
    note: "Ongoing/habitual past. -ar → -aba, -abas, -aba, -ábamos, -abais, -aban · -er/-ir → -ía, -ías, -ía, -íamos, -íais, -ían",
    ar: ["hablaba", "hablabas", "hablaba", "hablábamos", "hablabais", "hablaban"],
    er: ["comía", "comías", "comía", "comíamos", "comíais", "comían"],
    ir: ["vivía", "vivías", "vivía", "vivíamos", "vivíais", "vivían"],
    examples: [
      { es: "Hablaba español cuando era niño.", en: "I used to speak Spanish when I was a kid." },
      { es: "Vivíamos en Madrid antes.", en: "We used to live in Madrid before." },
    ],
  },
  {
    id: "future",
    name: "Future",
    note: "Whole infinitive + -é, -ás, -á, -emos, -éis, -án (same endings for all three groups)",
    ar: ["hablaré", "hablarás", "hablará", "hablaremos", "hablaréis", "hablarán"],
    er: ["comeré", "comerás", "comerá", "comeremos", "comeréis", "comerán"],
    ir: ["viviré", "vivirás", "vivirá", "viviremos", "viviréis", "vivirán"],
    examples: [
      { es: "Hablaré con el director mañana.", en: "I will speak with the director tomorrow." },
      { es: "Comeremos juntos el sábado.", en: "We will eat together on Saturday." },
    ],
  },
  {
    id: "conditional",
    name: "Conditional",
    note: "Whole infinitive + -ía, -ías, -ía, -íamos, -íais, -ían (same endings for all three groups)",
    ar: ["hablaría", "hablarías", "hablaría", "hablaríamos", "hablaríais", "hablarían"],
    er: ["comería", "comerías", "comería", "comeríamos", "comeríais", "comerían"],
    ir: ["viviría", "vivirías", "viviría", "viviríamos", "viviríais", "vivirían"],
    examples: [
      { es: "Hablaría contigo si tuviera tiempo.", en: "I would talk with you if I had time." },
      { es: "Viviríamos en la playa si pudiéramos.", en: "We would live at the beach if we could." },
    ],
  },
  {
    id: "subjunctive",
    name: "Present Subjunctive",
    note: "-ar verbs use -e endings; -er/-ir verbs use -a endings (the opposite vowel from the present indicative)",
    ar: ["hable", "hables", "hable", "hablemos", "habléis", "hablen"],
    er: ["coma", "comas", "coma", "comamos", "comáis", "coman"],
    ir: ["viva", "vivas", "viva", "vivamos", "viváis", "vivan"],
    examples: [
      { es: "Espero que hables con ella.", en: "I hope you talk with her." },
      { es: "Quiero que comas más verduras.", en: "I want you to eat more vegetables." },
    ],
  },
];

interface IrregularVerb {
  infinitive: string;
  forms: string[];
}

const IRREGULAR_PRESENT: IrregularVerb[] = [
  { infinitive: "ser", forms: ["soy", "eres", "es", "somos", "sois", "son"] },
  { infinitive: "estar", forms: ["estoy", "estás", "está", "estamos", "estáis", "están"] },
  { infinitive: "tener", forms: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"] },
  { infinitive: "ir", forms: ["voy", "vas", "va", "vamos", "vais", "van"] },
  { infinitive: "hacer", forms: ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"] },
  { infinitive: "poder", forms: ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"] },
  { infinitive: "querer", forms: ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"] },
  { infinitive: "decir", forms: ["digo", "dices", "dice", "decimos", "decís", "dicen"] },
  { infinitive: "saber", forms: ["sé", "sabes", "sabe", "sabemos", "sabéis", "saben"] },
  { infinitive: "poner", forms: ["pongo", "pones", "pone", "ponemos", "ponéis", "ponen"] },
  { infinitive: "salir", forms: ["salgo", "sales", "sale", "salimos", "salís", "salen"] },
  { infinitive: "venir", forms: ["vengo", "vienes", "viene", "venimos", "venís", "vienen"] },
  { infinitive: "dar", forms: ["doy", "das", "da", "damos", "dais", "dan"] },
  { infinitive: "ver", forms: ["veo", "ves", "ve", "vemos", "veis", "ven"] },
];

const IRREGULAR_STEMS = [
  { infinitive: "tener", stem: "tendr-" },
  { infinitive: "poder", stem: "podr-" },
  { infinitive: "querer", stem: "querr-" },
  { infinitive: "saber", stem: "sabr-" },
  { infinitive: "poner", stem: "pondr-" },
  { infinitive: "salir", stem: "saldr-" },
  { infinitive: "venir", stem: "vendr-" },
  { infinitive: "decir", stem: "dir-" },
  { infinitive: "hacer", stem: "har-" },
  { infinitive: "haber", stem: "habr-" },
];

function ConjugationTable({ tense }: { tense: RegularTense }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className="w-full min-w-[420px] text-left text-sm">
        <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <tr>
            <th className="px-3 py-2">Pronoun</th>
            <th className="px-3 py-2">-ar (hablar)</th>
            <th className="px-3 py-2">-er (comer)</th>
            <th className="px-3 py-2">-ir (vivir)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {PRONOUNS.map((p, i) => (
            <tr key={p} className="odd:bg-white even:bg-slate-50/60">
              <td className="px-3 py-1.5 text-slate-500">{p}</td>
              <td className="px-3 py-1.5 font-medium text-slate-800">{tense.ar[i]}</td>
              <td className="px-3 py-1.5 font-medium text-slate-800">{tense.er[i]}</td>
              <td className="px-3 py-1.5 font-medium text-slate-800">{tense.ir[i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Explains the mechanics of reading a row/column verb table — distinct
 *  from SimpleExplainer, which explains the grammar concept itself. Placed
 *  right before a table so students know how to actually pull a word out
 *  of it before they try to use it in a sentence. */
function HowToReadNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 rounded-lg border border-amber-200 bg-amber-50 p-3">
      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-amber-700">📖 How to read this table</p>
      <div className="text-sm leading-relaxed text-slate-700">{children}</div>
    </div>
  );
}

interface CheatSheetSection {
  id: string;
  label: string;
  title: string;
  icon: string;
  content: React.ReactNode;
}

const SECTIONS: CheatSheetSection[] = [
  {
    id: "ser-estar",
    label: "Ser vs. Estar",
    title: "Ser vs. Estar",
    icon: "⚖️",
    content: (
      <>
        <SimpleExplainer>
          <p>
            English only has one word for &ldquo;to be&rdquo;, but Spanish has two! Use <strong>SER</strong> for
            things that basically stay the same forever — your name, where you were born, what you look like.
            Use <strong>ESTAR</strong> for things that can change from day to day, like your mood or where you
            happen to be standing right now.
          </p>
          <p>
            Think of SER like a permanent marker and ESTAR like a whiteboard marker — SER writes something that
            sticks, ESTAR writes something you can wipe off and change later.
          </p>
          <p>
            Example: <strong>&ldquo;Soy alto&rdquo;</strong> (I am tall) uses SER because your height as a
            person doesn&apos;t flip back and forth. But <strong>&ldquo;Estoy cansado&rdquo;</strong> (I am
            tired) uses ESTAR because you won&apos;t be tired forever — after a good night&apos;s sleep,{" "}
            <strong>&ldquo;Estoy descansado&rdquo;</strong> (I am rested) instead!
          </p>
        </SimpleExplainer>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-3">
            <p className="mb-1 text-sm font-semibold text-slate-800">SER — permanent / identity</p>
            <ul className="flex flex-col gap-1 text-sm text-slate-600">
              <li>Identity, profession: <span className="font-medium text-slate-800">Es profesora.</span></li>
              <li>Origin, nationality: <span className="font-medium text-slate-800">Soy de Perú.</span></li>
              <li>Characteristics: <span className="font-medium text-slate-800">Es alto.</span></li>
              <li>Time and dates: <span className="font-medium text-slate-800">Son las tres.</span></li>
              <li>Material, possession: <span className="font-medium text-slate-800">Es de madera.</span></li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 p-3">
            <p className="mb-1 text-sm font-semibold text-slate-800">ESTAR — temporary / state</p>
            <ul className="flex flex-col gap-1 text-sm text-slate-600">
              <li>Location: <span className="font-medium text-slate-800">Está en Madrid.</span></li>
              <li>Feelings/conditions: <span className="font-medium text-slate-800">Está cansada.</span></li>
              <li>In-progress action: <span className="font-medium text-slate-800">Está comiendo.</span></li>
              <li>Result of a change: <span className="font-medium text-slate-800">La puerta está abierta.</span></li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "questions",
    label: "Question Words",
    title: "Question Words",
    icon: "❓",
    content: (
      <>
        <SimpleExplainer>
          <p>
            These are your &ldquo;detective words&rdquo; — the words you reach for whenever you need to find
            something out, just like &ldquo;who, what, when, where, why, how&rdquo; in English.
          </p>
          <p>
            One extra rule to remember: when these words are used to ask a real question, they get a little
            accent mark (´) that they don&apos;t have anywhere else. Compare{" "}
            <strong>&ldquo;¿Cómo estás?&rdquo;</strong> (How are you? — asking) with{" "}
            <strong>&ldquo;como quieras&rdquo;</strong> (however you like — not asking, no accent).
          </p>
          <p>
            Example: <strong>&ldquo;¿Dónde está el baño?&rdquo;</strong> means &ldquo;Where is the
            bathroom?&rdquo;, and <strong>&ldquo;¿Cuántos años tienes?&rdquo;</strong> means &ldquo;How old are
            you?&rdquo; (literally &ldquo;how many years do you have&rdquo;).
          </p>
        </SimpleExplainer>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["qué", "what"],
            ["quién / quiénes", "who"],
            ["cuándo", "when"],
            ["dónde", "where"],
            ["por qué", "why"],
            ["cómo", "how"],
            ["cuánto/a/os/as", "how much/many"],
            ["cuál / cuáles", "which"],
          ].map(([es, en]) => (
            <div key={es} className="rounded-lg border border-slate-200 p-2 text-center">
              <p className="text-sm font-bold text-brand-700">{es}</p>
              <p className="text-xs text-slate-500">{en}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "conjugation",
    label: "Conjugation Charts",
    title: "Regular Verb Conjugation Charts",
    icon: "📐",
    content: (
      <>
        <SimpleExplainer>
          <p>
            In English, verbs barely change no matter who&apos;s doing the action — &ldquo;I eat&rdquo;,
            &ldquo;you eat&rdquo;, &ldquo;we eat&rdquo;, always &ldquo;eat&rdquo;. In Spanish, the END of the verb
            changes every time depending on WHO is doing it. Think of the verb as a LEGO base — you snap on a
            different ending piece for &ldquo;I&rdquo;, a different one for &ldquo;you&rdquo;, a different one
            for &ldquo;we&rdquo;, and so on.
          </p>
          <p>
            Example: <strong>comer</strong> (to eat) becomes <strong>como</strong> (I eat),{" "}
            <strong>comes</strong> (you eat), <strong>come</strong> (he/she eats), and{" "}
            <strong>comemos</strong> (we eat) — same verb, six different endings depending on who&apos;s eating.
          </p>
          <p>
            The good news: -ar, -er, and -ir verbs each follow their own predictable pattern (shown below), so
            once you learn the pattern you can conjugate hundreds of regular verbs the same way.
          </p>
        </SimpleExplainer>
        <HowToReadNote>
          Each little table below is for ONE tense. Pick the tense you need, then find the column for your
          verb&apos;s ending (-ar, -er, or -ir), and go down to the row matching who&apos;s doing the action.
          Example: to say <strong>&ldquo;we will eat&rdquo;</strong> (future tense, and comer is an -er verb) →
          Future table, -er column, nosotros/as row → <strong>comeremos</strong>. So{" "}
          <strong>&ldquo;Comeremos a las ocho&rdquo;</strong> means &ldquo;We will eat at eight.&rdquo;
        </HowToReadNote>
        <div className="flex flex-col gap-5">
          {REGULAR_TENSES.map((tense) => (
            <div key={tense.id}>
              <p className="mb-1 text-sm font-bold text-slate-900">{tense.name}</p>
              <p className="mb-2 text-xs text-slate-500">{tense.note}</p>
              <ConjugationTable tense={tense} />
              <ul className="mt-2 flex flex-col gap-1">
                {tense.examples.map((ex) => (
                  <li key={ex.es} className="text-sm text-slate-700">
                    <span className="font-medium">{ex.es}</span> — <span className="text-slate-500">{ex.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "irregular",
    label: "Irregular Verbs",
    title: "Common Irregular Verbs — Present Tense",
    icon: "🔀",
    content: (
      <>
        <SimpleExplainer>
          <p>
            Most verbs politely follow the neat patterns from the chart above — but a handful of super-common
            verbs (like &ldquo;to be&rdquo;, &ldquo;to go&rdquo;, &ldquo;to have&rdquo;) are rebels who do their
            own thing. You just have to memorize these by heart, the same way you memorized your times tables —
            it feels like extra work now, but you&apos;ll use these verbs constantly, so it pays off fast.
          </p>
          <p>
            Example: <strong>ir</strong> (to go) turns into <strong>voy</strong> (I go) — nothing about
            &ldquo;voy&rdquo; looks like &ldquo;ir&rdquo;! Same with <strong>ser</strong> (to be) →{" "}
            <strong>soy</strong> (I am), and <strong>tener</strong> (to have) → <strong>tengo</strong> (I
            have). A regular verb would never surprise you like that.
          </p>
        </SimpleExplainer>
        <HowToReadNote>
          Each row is one verb, and each column is a different subject — who&apos;s doing the action. Find your
          verb&apos;s row, then slide across to the column matching who you&apos;re talking about. Example: to say{" "}
          <strong>&ldquo;I have&rdquo;</strong> with <strong>tener</strong>, look at the tener row and the yo
          column → <strong>tengo</strong>, so <strong>&ldquo;Tengo un perro&rdquo;</strong> means &ldquo;I have a
          dog.&rdquo; To say <strong>&ldquo;she has&rdquo;</strong>, use the él/ella/Ud. column instead →{" "}
          <strong>tiene</strong>: <strong>&ldquo;Ella tiene un gato&rdquo;</strong> (She has a cat).
        </HowToReadNote>
        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-3 py-2">Verb</th>
                {PRONOUNS.map((p) => (
                  <th key={p} className="px-3 py-2">
                    {p}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {IRREGULAR_PRESENT.map((v) => (
                <tr key={v.infinitive} className="odd:bg-white even:bg-slate-50/60">
                  <td className="px-3 py-1.5 font-semibold text-brand-700">{v.infinitive}</td>
                  {v.forms.map((f, i) => (
                    <td key={i} className="px-3 py-1.5 text-slate-700">
                      {f}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "preterite-imperfect",
    label: "Preterite vs. Imperfect",
    title: "Preterite vs. Imperfect — Which One?",
    icon: "🕰️",
    content: (
      <>
        <SimpleExplainer>
          <p>
            Spanish has two different past-tense forms, and English only has one, so this is one of the trickiest
            things to learn! Think of <strong>PRETERITE</strong> as a snapshot photo — it captures ONE moment
            that happened and is completely finished. Think of <strong>IMPERFECT</strong> as a video playing —
            it shows something that kept happening, or was still going on in the background.
          </p>
          <p>
            Example: <strong>&ldquo;Comí pizza&rdquo;</strong> (I ate pizza) is preterite — it happened once,
            done, end of story. But <strong>&ldquo;Comía pizza los viernes&rdquo;</strong> (I used to eat pizza
            on Fridays) is imperfect — it happened over and over, like a habit.
          </p>
          <p>
            They can even show up in the same sentence: <strong>&ldquo;Dormía cuando sonó el teléfono&rdquo;</strong>
            {" "}(I was sleeping — the video playing in the background — when the phone rang — one sudden snapshot
            moment that interrupted it).
          </p>
        </SimpleExplainer>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-3">
            <p className="mb-1 text-sm font-semibold text-slate-800">Preterite — completed, one-time</p>
          <ul className="flex flex-col gap-1 text-sm text-slate-600">
            <li>A specific completed action: <span className="font-medium text-slate-800">Ayer comí pizza.</span></li>
            <li>An action with a clear start/end: <span className="font-medium text-slate-800">Viví allí dos años.</span></li>
            <li>A sequence of completed events: <span className="font-medium text-slate-800">Me levanté, comí y salí.</span></li>
            <li>An action that interrupted another: <span className="font-medium text-slate-800">Cuando llegué, ella salió.</span></li>
          </ul>
          <p className="mt-2 text-xs text-slate-500">
            Signal words: <span className="font-medium">ayer, anoche, la semana pasada, de repente, una vez</span>
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 p-3">
          <p className="mb-1 text-sm font-semibold text-slate-800">Imperfect — ongoing, habitual, background</p>
          <ul className="flex flex-col gap-1 text-sm text-slate-600">
            <li>Habitual past ("used to"): <span className="font-medium text-slate-800">Jugaba todos los días.</span></li>
            <li>Descriptions (people, weather, age): <span className="font-medium text-slate-800">Hacía frío. Tenía diez años.</span></li>
            <li>Background action interrupted: <span className="font-medium text-slate-800">Dormía cuando sonó el teléfono.</span></li>
            <li>Telling time in the past: <span className="font-medium text-slate-800">Eran las tres.</span></li>
          </ul>
          <p className="mt-2 text-xs text-slate-500">
            Signal words: <span className="font-medium">siempre, todos los días, mientras, a menudo, de niño/a</span>
          </p>
        </div>
      </div>
      </>
    ),
  },
  {
    id: "future-conditional",
    label: "Future & Conditional Stems",
    title: "Future & Conditional — Irregular Stems",
    icon: "🔮",
    content: (
      <>
        <SimpleExplainer>
          <p>
            <strong>FUTURE</strong> means &ldquo;will do something&rdquo; — <strong>hablaré</strong> means
            &ldquo;I will speak&rdquo;. <strong>CONDITIONAL</strong> means &ldquo;would do something&rdquo; —{" "}
            <strong>hablaría</strong> means &ldquo;I would speak&rdquo;. Most verbs build both tenses by just
            gluing endings onto the whole infinitive, no changes needed.
          </p>
          <p>
            But 10 very common verbs are a little lazy — instead of using their full infinitive, they use a
            shortened, squished-up spelling for the front part, called the stem. Example:{" "}
            <strong>tener</strong> (to have) shrinks to <strong>tendr-</strong>, so &ldquo;I will have&rdquo; is{" "}
            <strong>tendré</strong>, not the regular-looking &ldquo;teneré&rdquo;.
          </p>
          <p>
            The trick is that once you know the shortcut stem, the endings are still totally normal — so{" "}
            <strong>tendré, tendrás, tendrá...</strong> follow the exact same pattern as any other future-tense
            verb, just glued onto a different starting point.
          </p>
        </SimpleExplainer>
        <p className="mb-3 text-sm text-slate-600">
          These 10 verbs use an irregular stem instead of the full infinitive — but take the <em>same</em> future/conditional
          endings as regular verbs (é/ás/á/emos/éis/án for future; ía/ías/ía/íamos/íais/ían for conditional).
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {IRREGULAR_STEMS.map((v) => (
            <div key={v.infinitive} className="rounded-lg border border-slate-200 p-2 text-center">
              <p className="text-sm font-medium text-slate-700">{v.infinitive}</p>
              <p className="text-sm font-bold text-brand-700">{v.stem}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-slate-500">
          e.g. tener → <span className="font-medium">tendré, tendrás...</span> (future) / <span className="font-medium">tendría, tendrías...</span> (conditional)
        </p>
      </>
    ),
  },
  {
    id: "subjunctive",
    label: "Subjunctive Triggers",
    title: "Subjunctive Triggers — remember with WEIRDO",
    icon: "🌀",
    content: (
      <>
        <SimpleExplainer>
          <p>
            The subjunctive isn&apos;t really a brand-new tense — it&apos;s more like a special &ldquo;mood&rdquo;
            you switch into. You use it after certain trigger phrases, whenever you&apos;re talking about
            wishes, feelings, doubts, or things that might not even happen — not plain, sure facts.
          </p>
          <p>
            Use the letters in <strong>WEIRDO</strong> below to remember the trigger categories: Wishes,
            Emotions, Impersonal expressions, Recommendations, Doubt, and Ojalá.
          </p>
          <p>
            Example: <strong>&ldquo;Quiero que vengas&rdquo;</strong> (I want you to come) uses the subjunctive
            because it&apos;s a wish, not a done deal — you don&apos;t actually know if they&apos;ll come!
            Compare that to <strong>&ldquo;Sé que vienes&rdquo;</strong> (I know you&apos;re coming), which
            stays in the normal indicative because it&apos;s stated as a fact.
          </p>
        </SimpleExplainer>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {[
          { letter: "W", label: "Wishes / Willing", example: "querer que, esperar que, preferir que" },
          { letter: "E", label: "Emotions", example: "alegrarse de que, temer que, sentir que" },
          { letter: "I", label: "Impersonal expressions", example: "es importante que, es necesario que, es posible que" },
          { letter: "R", label: "Recommendations", example: "recomendar que, sugerir que, pedir que" },
          { letter: "D", label: "Doubt / Denial", example: "dudar que, no creer que, no es cierto que" },
          { letter: "O", label: "Ojalá", example: "ojalá que..." },
        ].map((row) => (
          <div key={row.letter} className="flex items-start gap-3 rounded-lg border border-slate-200 p-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint-200 text-sm font-extrabold text-slate-900">
              {row.letter}
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-800">{row.label}</p>
              <p className="text-xs text-slate-500">{row.example}</p>
            </div>
          </div>
        ))}
        </div>
      </>
    ),
  },
  {
    id: "pronouns",
    label: "Pronouns",
    title: "Pronouns",
    icon: "🔗",
    content: (
      <>
        <SimpleExplainer>
          <p>
            Instead of repeating the same noun over and over, we swap in a tiny word to stand in for it — just
            like in English we say &ldquo;it&rdquo; instead of &ldquo;the ball&rdquo; the second time we mention
            it.
          </p>
          <p>
            <strong>Direct object</strong> pronouns replace the actual thing: instead of saying{" "}
            <strong>&ldquo;Veo el libro&rdquo;</strong> (I see the book) again, you just say{" "}
            <strong>&ldquo;Lo veo&rdquo;</strong> (I see it). <strong>Indirect object</strong> pronouns show who
            something is done to or for: <strong>&ldquo;Le doy el regalo&rdquo;</strong> (I give the gift to
            him/her).
          </p>
          <p>
            One more twist: <strong>reflexive</strong> pronouns are for when you do something to yourself, like{" "}
            <strong>&ldquo;Me lavo&rdquo;</strong> (I wash myself). All three types are small words that go
            right before the verb — you&apos;ll get used to spotting them quickly.
          </p>
        </SimpleExplainer>
        <div className="flex flex-col gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-800">Reflexive</p>
          <div className="flex flex-wrap gap-2 text-sm">
            {["me", "te", "se", "nos", "os", "se"].map((p, i) => (
              <span key={i} className="rounded-full bg-slate-100 px-3 py-1">
                <span className="text-slate-400">{PRONOUNS[i]}:</span> <span className="font-semibold text-slate-800">{p}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-800">Direct object (replaces the thing)</p>
            <div className="flex flex-wrap gap-2 text-sm">
              {["me", "te", "lo / la", "nos", "os", "los / las"].map((p, i) => (
                <span key={i} className="rounded-full bg-slate-100 px-3 py-1">
                  <span className="text-slate-400">{PRONOUNS[i]}:</span> <span className="font-semibold text-slate-800">{p}</span>
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-800">Indirect object (to/for whom)</p>
            <div className="flex flex-wrap gap-2 text-sm">
              {["me", "te", "le", "nos", "os", "les"].map((p, i) => (
                <span key={i} className="rounded-full bg-slate-100 px-3 py-1">
                  <span className="text-slate-400">{PRONOUNS[i]}:</span> <span className="font-semibold text-slate-800">{p}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-500">
          Placement: before a conjugated verb (<span className="font-medium">Lo veo</span>), or attached to an infinitive/gerund/affirmative
          command (<span className="font-medium">Voy a verlo</span>, <span className="font-medium">¡Dímelo!</span>). When both appear
          together, indirect comes first and <span className="font-medium">le/les</span> becomes <span className="font-medium">se</span>
          {" "}before lo/la/los/las: <span className="font-medium">Se lo doy.</span>
        </p>
        </div>
      </>
    ),
  },
  {
    id: "por-para",
    label: "Por vs. Para",
    title: "Por vs. Para",
    icon: "🔁",
    content: (
      <>
        <SimpleExplainer>
          <p>
            Both POR and PARA can be translated as &ldquo;for&rdquo; in English, which is exactly why they&apos;re
            so confusing — English doesn&apos;t give you a hint about which one to pick! Here&apos;s a simple
            trick to keep them apart: picture <strong>PARA</strong> as an arrow pointing forward toward a GOAL or
            DESTINATION. Picture <strong>POR</strong> as looking backward at the REASON something happened, or
            moving THROUGH a place.
          </p>
          <p>
            Example: <strong>&ldquo;Este regalo es para ti&rdquo;</strong> (this gift is for you) uses PARA
            because it&apos;s pointing forward to who receives it. <strong>&ldquo;Gracias por el
            regalo&rdquo;</strong> (thanks for the gift) uses POR because it&apos;s the reason you&apos;re
            thankful.
          </p>
          <p>
            A few more POR examples worth remembering: <strong>&ldquo;Caminamos por el parque&rdquo;</strong>{" "}
            (we walked through the park) and <strong>&ldquo;Hablamos por teléfono&rdquo;</strong> (we talked by
            phone) — both about moving through or using something, not a goal.
          </p>
        </SimpleExplainer>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-3">
            <p className="mb-1 text-sm font-semibold text-slate-800">POR</p>
          <ul className="flex flex-col gap-1 text-sm text-slate-600">
            <li>Reason/cause: <span className="font-medium text-slate-800">Lo hice por amor.</span></li>
            <li>Duration: <span className="font-medium text-slate-800">Estudié por dos horas.</span></li>
            <li>Exchange: <span className="font-medium text-slate-800">Pagué diez euros por el libro.</span></li>
            <li>Means/mode: <span className="font-medium text-slate-800">Hablamos por teléfono.</span></li>
            <li>Through/along: <span className="font-medium text-slate-800">Caminamos por el parque.</span></li>
            <li>On behalf of: <span className="font-medium text-slate-800">Firmé por mi hermano.</span></li>
          </ul>
        </div>
        <div className="rounded-lg border border-slate-200 p-3">
          <p className="mb-1 text-sm font-semibold text-slate-800">PARA</p>
          <ul className="flex flex-col gap-1 text-sm text-slate-600">
            <li>Purpose/goal ("in order to"): <span className="font-medium text-slate-800">Estudio para aprender.</span></li>
            <li>Recipient: <span className="font-medium text-slate-800">Este regalo es para ti.</span></li>
            <li>Deadline: <span className="font-medium text-slate-800">Lo necesito para el lunes.</span></li>
            <li>Destination: <span className="font-medium text-slate-800">Salimos para Madrid.</span></li>
            <li>Opinion: <span className="font-medium text-slate-800">Para mí, es difícil.</span></li>
            <li>Employment: <span className="font-medium text-slate-800">Trabaja para esa empresa.</span></li>
          </ul>
          </div>
        </div>
      </>
    ),
  },
];

export default function GrammarCheatSheet() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const active = SECTIONS.find((s) => s.id === activeId) ?? SECTIONS[0];

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-xl border border-brand-100 bg-brand-50 p-4">
        <p className="text-sm text-brand-800">
          Every core structure in one place — conjugation tables, irregular verbs, and the classic trouble spots
          (preterite vs. imperfect, por vs. para) for quick lookup. Pick a section from the list.
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        {/* Sidebar: same pattern as GrammarModule's topic list — horizontal-scroll pill row on
            mobile, stacked list on larger screens. */}
        <nav className="flex gap-2 overflow-x-auto pb-1 lg:w-72 lg:shrink-0 lg:flex-col lg:overflow-visible lg:pb-0">
          {SECTIONS.map((s) => {
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveId(s.id)}
                className={`flex shrink-0 items-center gap-2 rounded-lg border p-3 text-left transition lg:shrink ${
                  isActive ? "border-brand-400 bg-brand-50" : "border-slate-200 bg-white hover:border-brand-300 hover:bg-slate-50"
                }`}
              >
                <span>{s.icon}</span>
                <span className={`whitespace-nowrap text-sm font-semibold lg:whitespace-normal ${isActive ? "text-brand-800" : "text-slate-800"}`}>
                  {s.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Active section */}
        <section key={active.id} className="animate-fade-slide-up min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-900">
            <span>{active.icon}</span> {active.title}
          </h2>
          {active.content}
        </section>
      </div>
    </div>
  );
}

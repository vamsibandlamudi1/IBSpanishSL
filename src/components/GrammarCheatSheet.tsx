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
        <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-3.5">
            <p className="mb-1.5 font-extrabold text-blue-900 text-sm flex items-center gap-1.5">
              <span>🩺</span> SER = DOCTOR (Permanent & Identity)
            </p>
            <div className="grid grid-cols-1 gap-1 text-xs text-blue-800">
              <div><strong className="text-blue-950">D</strong>escription: <em>Ella es alta.</em></div>
              <div><strong className="text-blue-950">O</strong>ccupation: <em>Es profesora.</em></div>
              <div><strong className="text-blue-950">C</strong>haracteristic: <em>Es inteligente.</em></div>
              <div><strong className="text-blue-950">T</strong>ime & Date: <em>Son las tres.</em></div>
              <div><strong className="text-blue-950">O</strong>rigin: <em>Soy de México.</em></div>
              <div><strong className="text-blue-950">R</strong>elationship: <em>Es mi hermano.</em></div>
            </div>
          </div>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3.5">
            <p className="mb-1.5 font-extrabold text-emerald-900 text-sm flex items-center gap-1.5">
              <span>📍</span> ESTAR = PLACE (Temporary & Location)
            </p>
            <div className="grid grid-cols-1 gap-1 text-xs text-emerald-800">
              <div><strong className="text-emerald-950">P</strong>osition: <em>El libro está en la mesa.</em></div>
              <div><strong className="text-emerald-950">L</strong>ocation: <em>Madrid está en España.</em></div>
              <div><strong className="text-emerald-950">A</strong>ction (-ing): <em>Estoy estudiando.</em></div>
              <div><strong className="text-emerald-950">C</strong>ondition: <em>El café está frío.</em></div>
              <div><strong className="text-emerald-950">E</strong>motion: <em>Ella está feliz hoy.</em></div>
            </div>
          </div>
        </div>

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
    id: "gender-plurals",
    label: "Gender & Plurals",
    title: "Gender & Plurals Hacks (L-O-N-E-R-S)",
    icon: "🚻",
    content: (
      <>
        <SimpleExplainer>
          <p>
            Every Spanish noun has a gender (Masculine or Feminine). Adjectives <strong>MUST</strong> match the noun in both Gender and Number!
          </p>
          <p>
            <strong>Memory Hack:</strong> You don&apos;t need to guess gender! Look at the ending letters of the word:
          </p>
        </SimpleExplainer>
        <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-3.5">
            <p className="mb-1.5 font-extrabold text-sky-950 text-sm flex items-center gap-1.5">
              <span>♂️</span> MASCULINE: Endings in L - O - N - E - R - S
            </p>
            <p className="text-xs text-sky-900 leading-relaxed mb-2">
              Words ending in <strong>L-O-N-E-R-S</strong> take <strong>EL</strong>:
            </p>
            <div className="flex flex-wrap gap-1.5 text-xs">
              <span className="bg-white border border-sky-200 rounded px-2 py-0.5 font-semibold text-sky-900">el papel</span>
              <span className="bg-white border border-sky-200 rounded px-2 py-0.5 font-semibold text-sky-900">el libro</span>
              <span className="bg-white border border-sky-200 rounded px-2 py-0.5 font-semibold text-sky-900">el pan</span>
              <span className="bg-white border border-sky-200 rounded px-2 py-0.5 font-semibold text-sky-900">el café</span>
              <span className="bg-white border border-sky-200 rounded px-2 py-0.5 font-semibold text-sky-900">el amor</span>
            </div>
          </div>

          <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-3.5">
            <p className="mb-1.5 font-extrabold text-rose-950 text-sm flex items-center gap-1.5">
              <span>♀️</span> FEMININE: Endings in D - I - A - Z - CIÓN
            </p>
            <p className="text-xs text-rose-900 leading-relaxed mb-2">
              Words ending in <strong>D-I-A-Z-CIÓN</strong> take <strong>LA</strong>:
            </p>
            <div className="flex flex-wrap gap-1.5 text-xs">
              <span className="bg-white border border-rose-200 rounded px-2 py-0.5 font-semibold text-rose-900">la ciudad</span>
              <span className="bg-white border border-rose-200 rounded px-2 py-0.5 font-semibold text-rose-900">la casa</span>
              <span className="bg-white border border-rose-200 rounded px-2 py-0.5 font-semibold text-rose-900">la luz</span>
              <span className="bg-white border border-rose-200 rounded px-2 py-0.5 font-semibold text-rose-900">la canción</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">⚡ Plural Rules & Adjective Agreement Formula</p>
          <p className="text-xs text-slate-600 mb-2">
            Formula: <strong className="text-slate-900">Article + Noun + Matching Adjective</strong>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="bg-white border border-slate-200 rounded p-2">
              <span className="font-semibold text-slate-800">Ending in Vowel:</span> Add <strong>-s</strong>
              <div className="text-slate-500 italic mt-0.5">el chico alto → los chicos altos</div>
            </div>
            <div className="bg-white border border-slate-200 rounded p-2">
              <span className="font-semibold text-slate-800">Ending in Consonant:</span> Add <strong>-es</strong>
              <div className="text-slate-500 italic mt-0.5">la ciudad grande → las ciudades grandes</div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "past-tenses",
    label: "Preterite vs. Imperfect",
    title: "Preterite vs. Imperfect: Snapshot vs. Movie",
    icon: "📸",
    content: (
      <>
        <SimpleExplainer>
          <p>
            Spanish has two main past tenses! Understanding the difference between them is key for Paper 1 reading and Paper 2 writing.
          </p>
        </SimpleExplainer>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-3.5">
            <p className="mb-1 font-extrabold text-teal-950 text-sm flex items-center gap-1.5">
              <span>📸</span> PRETERITE = The Photo Snapshot
            </p>
            <p className="text-xs text-teal-900 leading-relaxed mb-2">
              One-time, completed actions with a clear start/end time.
            </p>
            <p className="text-xs text-teal-800 italic">"Ayer hablé con el profesor." (I spoke with the teacher yesterday — done!).</p>
          </div>

          <div className="rounded-xl border border-violet-200 bg-violet-50/60 p-3.5">
            <p className="mb-1 font-extrabold text-violet-950 text-sm flex items-center gap-1.5">
              <span>🎬</span> IMPERFECT = The Movie Background
            </p>
            <p className="text-xs text-violet-900 leading-relaxed mb-2">
              Habits, background descriptions, age, time, and ongoing actions ("used to" / "was -ing").
            </p>
            <p className="text-xs text-violet-800 italic">"Cuando era niño, jugaba al fútbol." (When I was a kid, I used to play soccer).</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "ib-connectors",
    label: "IB Exam Connectors",
    title: "High-Impact Transition Words & Connectors",
    icon: "🔗",
    content: (
      <>
        <SimpleExplainer>
          <p>
            These connectors are the difference between a B and an A in IB writing (Criterion B: Language). Examiners reward variety — don&apos;t just use <em>pero</em> and <em>y</em> over and over! Aim for at least one connector from each category in your essays.
          </p>
        </SimpleExplainer>
        <div className="mb-3 rounded-lg border border-indigo-200 bg-indigo-50/60 p-3 text-xs text-indigo-900">
          <p className="font-bold mb-1">🏆 IB Examiner Favourites (use these often):</p>
          <p>
            <strong>Sin embargo</strong> (however) · <strong>Además</strong> (furthermore) · <strong>Por lo tanto</strong> (therefore) ·{" "}
            <strong>A pesar de (que)</strong> (despite / even though) · <strong>Cabe destacar que</strong> (it is worth highlighting that) ·{" "}
            <strong>En definitiva</strong> (in short) · <strong>Dicho esto</strong> (that said)
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 text-xs">
          <div className="rounded-lg border border-blue-200 bg-blue-50/60 p-3">
            <p className="font-bold text-blue-900 mb-1.5">➕ Adding / Reinforcing</p>
            <ul className="text-slate-700 space-y-1">
              <li>• <strong>Además (de esto):</strong> Furthermore / In addition</li>
              <li>• <strong>También:</strong> Also</li>
              <li>• <strong>Asimismo:</strong> Likewise / Moreover</li>
              <li>• <strong>Por un lado… por otro:</strong> On one hand… on the other</li>
              <li>• <strong>Es más:</strong> What is more</li>
              <li>• <strong>De hecho:</strong> In fact</li>
            </ul>
          </div>

          <div className="rounded-lg border border-rose-200 bg-rose-50/60 p-3">
            <p className="font-bold text-rose-900 mb-1.5">⚡ Contrast & Concession</p>
            <ul className="text-slate-700 space-y-1">
              <li>• <strong>Sin embargo:</strong> However</li>
              <li>• <strong>No obstante:</strong> Nevertheless</li>
              <li>• <strong>Aunque / Si bien:</strong> Although / Even though</li>
              <li>• <strong>A pesar de (que):</strong> Despite / In spite of</li>
              <li>• <strong>Ahora bien:</strong> That said / Having said that</li>
              <li>• <strong>Por el contrario:</strong> On the contrary</li>
            </ul>
          </div>

          <div className="rounded-lg border border-teal-200 bg-teal-50/60 p-3">
            <p className="font-bold text-teal-900 mb-1.5">🔗 Cause & Effect</p>
            <ul className="text-slate-700 space-y-1">
              <li>• <strong>Por lo tanto / Por ende:</strong> Therefore</li>
              <li>• <strong>En consecuencia:</strong> Consequently</li>
              <li>• <strong>Dado que / Ya que:</strong> Given that / Since</li>
              <li>• <strong>Debido a (que):</strong> Due to / Because of</li>
              <li>• <strong>Así que:</strong> So / As a result</li>
              <li>• <strong>De ahí que (+ subj.):</strong> Hence the fact that</li>
            </ul>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-3">
            <p className="font-bold text-amber-900 mb-1.5">📋 Sequence & Order</p>
            <ul className="text-slate-700 space-y-1">
              <li>• <strong>En primer lugar / Primero:</strong> Firstly</li>
              <li>• <strong>A continuación / Luego:</strong> Next / Then</li>
              <li>• <strong>Por último / Finalmente:</strong> Finally</li>
              <li>• <strong>Antes de (+ inf.):</strong> Before (-ing)</li>
              <li>• <strong>Después de (+ inf.):</strong> After (-ing)</li>
              <li>• <strong>Mientras tanto:</strong> Meanwhile</li>
            </ul>
          </div>

          <div className="rounded-lg border border-violet-200 bg-violet-50/60 p-3">
            <p className="font-bold text-violet-900 mb-1.5">💬 Opinion & Stance</p>
            <ul className="text-slate-700 space-y-1">
              <li>• <strong>Desde mi punto de vista:</strong> From my point of view</li>
              <li>• <strong>En mi opinión / A mi parecer:</strong> In my opinion</li>
              <li>• <strong>Cabe destacar que:</strong> It is worth highlighting</li>
              <li>• <strong>Hay que tener en cuenta que:</strong> One must consider that</li>
              <li>• <strong>Es innegable que:</strong> It is undeniable that</li>
              <li>• <strong>Personalmente considero que:</strong> I personally believe</li>
            </ul>
          </div>

          <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-3">
            <p className="font-bold text-emerald-900 mb-1.5">🎯 Conclusion & Summary</p>
            <ul className="text-slate-700 space-y-1">
              <li>• <strong>En conclusión / En resumen:</strong> In conclusion</li>
              <li>• <strong>Para concluir / Para terminar:</strong> To conclude</li>
              <li>• <strong>En definitiva:</strong> All in all / In short</li>
              <li>• <strong>En suma:</strong> To sum up</li>
              <li>• <strong>Dicho esto:</strong> That said / With that in mind</li>
              <li>• <strong>Todo ello indica que:</strong> All of this suggests that</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "ib-writing-boosters",
    label: "IB Writing Boosters",
    title: "IB Writing Score Boosters — Key Constructions",
    icon: "✍️",
    content: (
      <>
        <SimpleExplainer>
          <p>
            These verb constructions appear constantly in IB reading texts and are expected in high-scoring Paper 2 writing. Master these and your language score jumps immediately.
          </p>
        </SimpleExplainer>
        <div className="flex flex-col gap-4">
          {/* Infinitive constructions */}
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-3.5">
            <p className="text-sm font-extrabold text-indigo-950 mb-2">⚙️ High-Frequency Verb Constructions</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                { form: "ir a + infinitivo", meaning: "going to (near future)", ex: "Voy a estudiar. → I am going to study." },
                { form: "acabar de + infinitivo", meaning: "to have just done", ex: "Acabo de llegar. → I have just arrived." },
                { form: "tener que + infinitivo", meaning: "to have to / must", ex: "Tenemos que mejorar. → We have to improve." },
                { form: "hay que + infinitivo", meaning: "one must (impersonal)", ex: "Hay que actuar ya. → One must act now." },
                { form: "dejar de + infinitivo", meaning: "to stop doing", ex: "Dejé de fumar. → I stopped smoking." },
                { form: "volver a + infinitivo", meaning: "to do again", ex: "Volvió a intentarlo. → She tried again." },
                { form: "seguir + gerundio", meaning: "to keep / continue doing", ex: "Sigo aprendiendo. → I keep learning." },
                { form: "llevar + gerundio", meaning: "to have been doing (for)", ex: "Llevo dos años estudiando. → I have been studying for 2 years." },
              ].map((row) => (
                <div key={row.form} className="rounded-lg border border-indigo-100 bg-white p-2">
                  <p className="font-bold text-indigo-800">{row.form}</p>
                  <p className="text-slate-500 text-[11px]">{row.meaning}</p>
                  <p className="text-slate-700 italic mt-0.5 text-[11px]">{row.ex}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Se passive */}
          <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-3.5">
            <p className="text-sm font-extrabold text-teal-950 mb-1">🔄 The &quot;Se&quot; Passive — Sound Instantly Advanced</p>
            <p className="text-xs text-slate-700 mb-2">
              Instead of saying <em>&quot;La gente habla español aquí&quot;</em>, use the <strong>se + verb</strong> structure for a formal, essay-level register:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                ["Se habla español.", "Spanish is spoken."],
                ["Se necesita más inversión.", "More investment is needed."],
                ["Se cree que…", "It is believed that…"],
                ["Se sabe que…", "It is known that…"],
                ["Se ha demostrado que…", "It has been shown that…"],
                ["Se puede afirmar que…", "It can be affirmed that…"],
              ].map(([es, en]) => (
                <div key={es} className="bg-white border border-teal-100 rounded p-2">
                  <p className="font-semibold text-teal-900">{es}</p>
                  <p className="text-slate-500 italic">{en}</p>
                </div>
              ))}
            </div>
          </div>

          {/* IB text type tips */}
          <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-3.5">
            <p className="text-sm font-extrabold text-amber-950 mb-2">📝 IB Text Type Formula Starters</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {[
                { type: "Blog / Article", opener: "Estimados lectores, hoy quiero hablarles sobre…" },
                { type: "Formal letter", opener: "Me dirijo a usted con el fin de…" },
                { type: "Report", opener: "El presente informe tiene como objetivo analizar…" },
                { type: "Proposal", opener: "A continuación se presenta una propuesta para…" },
                { type: "Speech / Talk", opener: "Buenos días a todos. El tema de hoy es…" },
                { type: "Review", opener: "Recientemente tuve la oportunidad de… y quisiera compartir mi opinión." },
              ].map((row) => (
                <div key={row.type} className="bg-white border border-amber-100 rounded p-2">
                  <p className="font-bold text-amber-800">{row.type}</p>
                  <p className="italic text-slate-600 text-[11px] mt-0.5">{row.opener}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "ser-estar-adjectives",
    label: "Ser/Estar — Meaning Changes",
    title: "Adjectives That Change Meaning with Ser vs. Estar",
    icon: "🔀",
    content: (
      <>
        <SimpleExplainer>
          <p>
            Some adjectives have <strong>two completely different English meanings</strong> depending on whether you use <em>ser</em> or <em>estar</em>. This is one of the most common IB exam traps — get these right and you instantly sound fluent!
          </p>
        </SimpleExplainer>
        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full min-w-[460px] text-sm text-left">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-3 py-2">Adjective</th>
                <th className="px-3 py-2 text-blue-700">SER + adj.</th>
                <th className="px-3 py-2 text-emerald-700">ESTAR + adj.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ["aburrido/a", "boring (personality)", "bored (feeling right now)"],
                ["bueno/a", "good (character / quality)", "tasty / feeling well"],
                ["malo/a", "bad (character)", "sick / feeling ill"],
                ["listo/a", "clever / smart", "ready"],
                ["seguro/a", "safe (inherently)", "sure / certain"],
                ["rico/a", "rich (wealthy)", "delicious"],
                ["muerto/a", "a dead person (identity)", "dead (state)"],
                ["vivo/a", "lively / vivid", "alive"],
                ["libre", "free (unconstrained by nature)", "free / available right now"],
              ].map(([adj, ser, estar]) => (
                <tr key={adj} className="odd:bg-white even:bg-slate-50/60">
                  <td className="px-3 py-1.5 font-semibold text-slate-900">{adj}</td>
                  <td className="px-3 py-1.5 text-blue-800"><em>Es {adj.split("/")[0]}</em> → {ser}</td>
                  <td className="px-3 py-1.5 text-emerald-800"><em>Está {adj.split("/")[0]}</em> → {estar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50/70 p-3 text-xs text-amber-950">
          <p className="font-bold mb-1">💡 Classic Exam Trap:</p>
          <p><strong>&quot;Es aburrido&quot;</strong> = He is boring (that&apos;s his personality — use SER). <strong>&quot;Está aburrido&quot;</strong> = He is bored right now (a temporary feeling — use ESTAR). Getting these swapped is a very common mistake IB examiners notice!</p>
        </div>
      </>
    ),
  },
  {
    id: "negatives",
    label: "Negation & Negative Words",
    title: "Negation — Double Negatives are Correct in Spanish!",
    icon: "🚫",
    content: (
      <>
        <SimpleExplainer>
          <p>
            In English, double negatives are wrong (&quot;I don&apos;t know nothing&quot; is incorrect). In Spanish, <strong>double negatives are required!</strong> You must say <em>&quot;No sé nada&quot;</em> (literally &quot;I don&apos;t know nothing&quot;) — that&apos;s perfect grammar.
          </p>
        </SimpleExplainer>
        <div className="mb-3 overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full min-w-[420px] text-sm text-left">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-3 py-2">Positive</th>
                <th className="px-3 py-2">Negative</th>
                <th className="px-3 py-2">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ["algo (something)", "nada (nothing)", "No veo nada. — I don't see anything."],
                ["alguien (someone)", "nadie (nobody)", "No viene nadie. — Nobody is coming."],
                ["siempre (always)", "nunca / jamás (never)", "No como nunca carne. — I never eat meat."],
                ["también (also)", "tampoco (neither/nor)", "Yo tampoco. — Me neither."],
                ["algún/alguno (some)", "ningún/ninguno (none/any)", "No hay ningún problema. — There is no problem."],
                ["o… o… (either…or)", "ni… ni… (neither…nor)", "No tengo ni tiempo ni dinero."],
              ].map(([pos, neg, ex]) => (
                <tr key={pos} className="odd:bg-white even:bg-slate-50/60">
                  <td className="px-3 py-1.5 text-green-700 font-medium">{pos}</td>
                  <td className="px-3 py-1.5 text-red-700 font-medium">{neg}</td>
                  <td className="px-3 py-1.5 text-slate-600 text-xs italic">{ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-3 text-xs">
          <p className="font-bold text-rose-900 mb-1">⚠️ Placement Rule:</p>
          <ul className="text-slate-700 space-y-1">
            <li>• <strong>No + verb + negative word:</strong> <em>&quot;No sé nada.&quot;</em> (No before the verb, negative word after)</li>
            <li>• <strong>Negative word first (no &quot;no&quot; needed):</strong> <em>&quot;Nada sé.&quot;</em> (literary/emphatic)</li>
            <li>• <strong>Jamás</strong> is stronger than <strong>nunca</strong> — use jamás for &quot;never ever&quot;</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "reflexive-verbs",
    label: "Reflexive Verbs",
    title: "Reflexive Verbs — Actions You Do to Yourself",
    icon: "🔁",
    content: (
      <>
        <SimpleExplainer>
          <p>
            Reflexive verbs use a <strong>reflexive pronoun</strong> (me, te, se, nos, os, se) to show the subject and object are the same — the person is doing the action to themselves. Many daily routine verbs are reflexive in Spanish even when they aren&apos;t in English!
          </p>
          <p>
            <strong>Key sign:</strong> The verb ends in <strong>-se</strong> in the dictionary (e.g. <em>levantarse</em> = to get up). In sentences, chop off the -se and place the matching pronoun before the verb.
          </p>
        </SimpleExplainer>
        <div className="mb-3 rounded-xl border border-sky-200 bg-sky-50/60 p-3 text-xs">
          <p className="font-bold text-sky-900 mb-1">📋 Formula: [Pronoun] + [Verb without -se]</p>
          <p className="text-slate-700 italic">
            levantarse → Yo <strong>me levanto</strong> (I get up) · Tú <strong>te lavas</strong> (You wash yourself) · Ella <strong>se peina</strong> (She combs her hair)
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="font-bold text-slate-900 mb-1.5">🌅 Daily Routine (very common in IB oral!)</p>
            <ul className="text-slate-600 space-y-1">
              <li>• <strong>despertarse:</strong> to wake up → <em>me despierto</em></li>
              <li>• <strong>levantarse:</strong> to get up → <em>me levanto</em></li>
              <li>• <strong>ducharse:</strong> to shower → <em>me ducho</em></li>
              <li>• <strong>vestirse (e→i):</strong> to get dressed → <em>me visto</em></li>
              <li>• <strong>peinarse:</strong> to comb hair → <em>me peino</em></li>
              <li>• <strong>acostarse (o→ue):</strong> to go to bed → <em>me acuesto</em></li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3">
            <p className="font-bold text-slate-900 mb-1.5">💡 Meaning-Change Reflexives</p>
            <ul className="text-slate-600 space-y-1">
              <li>• <strong>ir</strong> (to go) vs <strong>irse</strong> (to leave/go away)</li>
              <li>• <strong>dormir</strong> (to sleep) vs <strong>dormirse</strong> (to fall asleep)</li>
              <li>• <strong>parecer</strong> (to seem) vs <strong>parecerse</strong> (to resemble)</li>
              <li>• <strong>llamar</strong> (to call) vs <strong>llamarse</strong> (to be named)</li>
              <li>• <strong>poner</strong> (to put) vs <strong>ponerse</strong> (to put on / become)</li>
              <li>• <strong>hacer</strong> (to do) vs <strong>hacerse</strong> (to become)</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "false-friends",
    label: "False Friends",
    title: "Common False Friends — Words That Trick English Speakers",
    icon: "🪤",
    content: (
      <>
        <SimpleExplainer>
          <p>
            <strong>False friends</strong> (falsos amigos) are Spanish words that look like English words but mean something completely different. These are classic exam traps in Paper 1 reading comprehension!
          </p>
        </SimpleExplainer>
        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full min-w-[460px] text-sm text-left">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-3 py-2">Spanish word</th>
                <th className="px-3 py-2">Looks like…</th>
                <th className="px-3 py-2">Actually means</th>
                <th className="px-3 py-2">Real Spanish word</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ["embarazada", "embarrassed", "pregnant", "avergonzada"],
                ["sensible", "sensible", "sensitive", "sensato/a"],
                ["actual", "actual", "current / present-day", "real / verdadero"],
                ["realizar", "to realize", "to carry out / achieve", "darse cuenta de"],
                ["exitoso/a", "exit", "successful", "salida (= exit)"],
                ["constipado/a", "constipated", "having a cold", "estreñido/a"],
                ["librería", "library", "bookshop", "biblioteca"],
                ["carpeta", "carpet", "folder / binder", "alfombra"],
                ["pretender", "to pretend", "to aim / intend to", "fingir"],
                ["recordar", "to record", "to remember / remind", "grabar"],
              ].map(([es, looksLike, means, real]) => (
                <tr key={es} className="odd:bg-white even:bg-slate-50/60">
                  <td className="px-3 py-1.5 font-bold text-rose-700">{es}</td>
                  <td className="px-3 py-1.5 text-slate-500 line-through text-xs">{looksLike}</td>
                  <td className="px-3 py-1.5 text-green-800 font-medium">{means}</td>
                  <td className="px-3 py-1.5 text-slate-500 italic text-xs">{real}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 rounded-lg border border-rose-200 bg-rose-50/70 p-3 text-xs text-rose-950">
          <p className="font-bold mb-1">🚨 Most Common Exam Mistake:</p>
          <p><strong>&quot;Estoy embarazada&quot;</strong> ≠ &quot;I am embarrassed&quot; — it means &quot;I am pregnant&quot;! The correct way to say embarrassed is <strong>&quot;Estoy avergonzado/a&quot;</strong>.</p>
        </div>
      </>
    ),
  },
  {
    id: "accent-rules",
    label: "Accent Mark Rules",
    title: "Written Accent Marks (Tildes) — When & Why",
    icon: "´",
    content: (
      <>
        <SimpleExplainer>
          <p>
            Accent marks in Spanish are not random decorations — they follow strict rules. Getting them wrong drops your IB writing mark. The good news: there are only a few core rules to memorize!
          </p>
        </SimpleExplainer>
        <div className="flex flex-col gap-3">
          <div className="rounded-xl border border-slate-200 bg-white p-3.5">
            <p className="text-sm font-extrabold text-slate-900 mb-2">📏 Rule 1 — Natural Stress (No Accent Needed)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <div className="bg-slate-50 rounded p-2">
                <p className="font-bold">Ends in vowel, -n, or -s → stress falls on 2nd-to-last syllable</p>
                <p className="italic mt-0.5 text-slate-500">ha-<strong>blo</strong>, ca-<strong>sa</strong>, co-<strong>men</strong></p>
              </div>
              <div className="bg-slate-50 rounded p-2">
                <p className="font-bold">Ends in consonant (not n/s) → stress falls on last syllable</p>
                <p className="italic mt-0.5 text-slate-500">ha-<strong>blar</strong>, ciu-<strong>dad</strong>, pro-<strong>fe</strong>-sor</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-3.5">
            <p className="text-sm font-extrabold text-indigo-950 mb-2">✏️ Rule 2 — Written Accent = Breaks the Natural Rule</p>
            <p className="text-xs text-slate-700 mb-2">When a word is stressed on a different syllable than the natural rule predicts, add an accent:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-center">
              {[
                { word: "café", note: "Ends in vowel → should stress ca, but stresses FÉ" },
                { word: "árbol", note: "Ends in l → should stress bol, but stresses ÁR" },
                { word: "canción", note: "Ends in n → should stress can, but stresses CIÓN" },
              ].map((r) => (
                <div key={r.word} className="bg-white border border-indigo-100 rounded p-2">
                  <p className="text-lg font-extrabold text-indigo-700">{r.word}</p>
                  <p className="text-slate-500 text-[11px] mt-0.5">{r.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-3.5">
            <p className="text-sm font-extrabold text-amber-950 mb-2">🔍 Rule 3 — Accent to Tell Two Words Apart</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-center">
              {[
                ["tú (you)", "tu (your)"],
                ["él (he)", "el (the)"],
                ["sí (yes)", "si (if)"],
                ["más (more)", "mas (but)"],
                ["sé (I know)", "se (reflexive)"],
                ["té (tea)", "te (you, pronoun)"],
                ["mí (me)", "mi (my)"],
                ["dé (give, subj.)", "de (of)"],
              ].map(([accented, plain]) => (
                <div key={accented} className="bg-white border border-amber-100 rounded p-1.5">
                  <p className="font-bold text-amber-800">{accented}</p>
                  <p className="text-slate-400">vs.</p>
                  <p className="text-slate-600">{plain}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-3 text-xs">
            <p className="font-bold text-teal-900 mb-1">❓ Rule 4 — Question & Exclamation Words Always Get Accents</p>
            <p className="text-slate-700"><strong>¿qué? / ¡qué! · ¿quién? · ¿dónde? · ¿cuándo? · ¿cómo? · ¿por qué? · ¿cuánto? · ¿cuál?</strong></p>
            <p className="text-slate-500 mt-1">No accent = not a question: <em>donde</em> (where), <em>como</em> (as/like), <em>cuando</em> (when — as a connector)</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "gustar-structure",
    label: "Verbs like Gustar",
    title: "Verbs like Gustar: The Backward Sentence Formula",
    icon: "❤️",
    content: (
      <>
        <SimpleExplainer>
          <p>
            In English we say <em>"I like the book"</em>. But in Spanish, <strong>GUSTAR</strong> works backwards: <em>"The book pleases ME"</em>!
          </p>
          <p>
            <strong>The Formula:</strong> <strong className="text-brand-700">[ Indirect Pronoun ] + gusta / gustan + [ Thing ]</strong>
          </p>
        </SimpleExplainer>
        <div className="mb-4 rounded-xl border border-rose-200 bg-rose-50/60 p-3.5 text-xs text-rose-950">
          <p className="font-bold mb-1">💡 The 2-Choice Rule:</p>
          <ul className="space-y-1 text-slate-700">
            <li>• Use <strong>gusta</strong> for singular nouns or infinitives: <em>"Me gusta el café" / "Me gusta leer"</em></li>
            <li>• Use <strong>gustan</strong> for plural nouns: <em>"Me gustan los libros"</em></li>
          </ul>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
          <div className="bg-white border border-slate-200 rounded p-2 text-center">
            <span className="font-bold text-slate-900">encantar</span>
            <p className="text-slate-500">to love / adore</p>
            <p className="text-slate-700 italic mt-0.5">Me encanta la música</p>
          </div>
          <div className="bg-white border border-slate-200 rounded p-2 text-center">
            <span className="font-bold text-slate-900">interesar</span>
            <p className="text-slate-500">to interest</p>
            <p className="text-slate-700 italic mt-0.5">Me interesa la historia</p>
          </div>
          <div className="bg-white border border-slate-200 rounded p-2 text-center">
            <span className="font-bold text-slate-900">doler</span>
            <p className="text-slate-500">to hurt / ache</p>
            <p className="text-slate-700 italic mt-0.5">Me duele la cabeza</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "boot-verbs",
    label: "Stem-Changing (Boot Verbs)",
    title: "Stem-Changing Verbs (The Boot Shape)",
    icon: "👢",
    content: (
      <>
        <SimpleExplainer>
          <p>
            Some verbs change their root vowel in the present tense for all subjects <strong>EXCEPT</strong> <em>nosotros</em> and <em>vosotros</em> — forming the shape of a <strong>BOOT</strong> on the conjugation table!
          </p>
        </SimpleExplainer>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-3">
            <p className="font-bold text-amber-950 mb-1">e → ie (Querer)</p>
            <p className="text-slate-700">Yo qu<strong>ie</strong>ro</p>
            <p className="text-slate-700">Tú qu<strong>ie</strong>res</p>
            <p className="text-slate-700">Él qu<strong>ie</strong>re</p>
            <p className="text-slate-500 font-semibold">Nosotros queremos (No change!)</p>
            <p className="text-slate-700">Ellos qu<strong>ie</strong>ren</p>
          </div>

          <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-3">
            <p className="font-bold text-sky-950 mb-1">o → ue (Dormir)</p>
            <p className="text-slate-700">Yo d<strong>ue</strong>rmo</p>
            <p className="text-slate-700">Tú d<strong>ue</strong>rmes</p>
            <p className="text-slate-700">Él d<strong>ue</strong>rme</p>
            <p className="text-slate-500 font-semibold">Nosotros dormimos (No change!)</p>
            <p className="text-slate-700">Ellos d<strong>ue</strong>rmen</p>
          </div>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3">
            <p className="font-bold text-emerald-950 mb-1">e → i (Pedir)</p>
            <p className="text-slate-700">Yo p<strong>i</strong>do</p>
            <p className="text-slate-700">Tú p<strong>i</strong>des</p>
            <p className="text-slate-700">Él p<strong>i</strong>de</p>
            <p className="text-slate-500 font-semibold">Nosotros pedimos (No change!)</p>
            <p className="text-slate-700">Ellos p<strong>i</strong>den</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "imperative-commands",
    label: "Commands (Imperative)",
    title: "Imperative Commands (Tú & Usted)",
    icon: "🗣️",
    content: (
      <>
        <SimpleExplainer>
          <p>
            Used for giving directions, advice, and instructions (essential for Paper 2 blog posts and brochures!).
          </p>
        </SimpleExplainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-3">
            <p className="font-bold text-indigo-950 mb-1">Informal (Tú) Command</p>
            <p className="text-slate-700 mb-1">Use the 3rd person singular present tense!</p>
            <ul className="text-slate-600 space-y-0.5">
              <li>• Hablar → <strong>¡Habla!</strong> <em>(Speak!)</em></li>
              <li>• Comer → <strong>¡Come!</strong> <em>(Eat!)</em></li>
              <li>• Escribir → <strong>¡Escribe!</strong> <em>(Write!)</em></li>
            </ul>
          </div>

          <div className="rounded-xl border border-purple-200 bg-purple-50/60 p-3">
            <p className="font-bold text-purple-950 mb-1">8 Irregular "Tú" Commands</p>
            <p className="text-slate-700 mb-1 font-semibold">Memory phrase: "Vin Diesel has ten weapons eh?"</p>
            <p className="text-slate-600 italic">Ven, Di, Sal, Haz, Ten, Ve, Pon, Sé</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "pronoun-order-rid",
    label: "Pronoun Order (R-I-D)",
    title: "Object Pronoun Order Rule: R-I-D",
    icon: "🧩",
    content: (
      <>
        <SimpleExplainer>
          <p>
            When combining multiple pronouns before a verb, they MUST always follow the strict <strong>R-I-D Order</strong>!
          </p>
          <p>
            <strong>The Formula:</strong> <strong className="text-brand-700">Reflexive (R) → Indirect (I) → Direct (D)</strong>
          </p>
        </SimpleExplainer>
        <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-center">
          <div className="bg-sky-50 border border-sky-200 rounded-lg p-2.5">
            <span className="font-extrabold text-sky-900 text-sm block">1. Reflexive (R)</span>
            <span className="text-slate-600 text-[11px]">me, te, se, nos, os</span>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-2.5">
            <span className="font-extrabold text-amber-900 text-sm block">2. Indirect (I)</span>
            <span className="text-slate-600 text-[11px]">me, te, le (se), nos, os, les</span>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5">
            <span className="font-extrabold text-emerald-900 text-sm block">3. Direct (D)</span>
            <span className="text-slate-600 text-[11px]">lo, la, los, las</span>
          </div>
        </div>
        <div className="rounded-xl border border-purple-200 bg-purple-50/60 p-3 text-xs text-purple-950">
          <p className="font-bold mb-1">⚠️ The "La-La" Rule (Le + Lo $\rightarrow$ Se Lo):</p>
          <p className="text-slate-700">In Spanish you cannot say <em>"le lo"</em> or <em>"les la"</em>. Change <strong>le/les</strong> to <strong>se</strong>!</p>
          <p className="font-semibold text-purple-900 italic mt-1">"Se lo doy." (I give it to him/her — instead of "Le lo doy").</p>
        </div>
      </>
    ),
  },
  {
    id: "haber-vs-tener",
    label: "Haber vs. Tener",
    title: "Haber (Existence) vs. Tener (Possession)",
    icon: "📦",
    content: (
      <>
        <SimpleExplainer>
          <p>
            Don't confuse "to have"! Use <strong>HAY (Haber)</strong> for existence ("there is / there are") and <strong>TENER</strong> for personal possession.
          </p>
        </SimpleExplainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-3.5">
            <p className="font-extrabold text-blue-900 text-sm mb-1">🏢 HAY (Haber) = There is / There are</p>
            <p className="text-slate-700 mb-1">Used for existence in a scene or place. Never changes for plural!</p>
            <ul className="text-slate-600 space-y-0.5 italic">
              <li>• <strong>Hay</strong> un libro en la mesa. <em>(There is a book)</em></li>
              <li>• <strong>Hay</strong> tres estudiantes aquí. <em>(There are 3 students)</em></li>
            </ul>
          </div>

          <div className="rounded-xl border border-teal-200 bg-teal-50/60 p-3.5">
            <p className="font-extrabold text-teal-900 text-sm mb-1">🔑 TENER = To possess / own</p>
            <p className="text-slate-700 mb-1">Conjugates based on WHO has the item!</p>
            <ul className="text-slate-600 space-y-0.5 italic">
              <li>• Yo <strong>tengo</strong> un perro. <em>(I have a dog)</em></li>
              <li>• Ella <strong>tiene</strong> dos hermanos. <em>(She has 2 brothers)</em></li>
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
        <div className="mb-3 rounded-lg border border-amber-200 bg-amber-50/70 p-3 text-xs text-amber-950">
          <p className="font-bold flex items-center gap-1 mb-0.5">💡 Quick Tip — Accent Marks on Questions:</p>
          <p>Every single Spanish question word gets a written accent mark (<em>qué, quién, dónde, cuál, cuándo, por qué, cómo</em>) when asking a question! If it doesn't have an accent, it's a connector (e.g. <em>donde</em> = where, <em>como</em> = like/as).</p>
        </div>
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
        <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-3 text-xs">
            <p className="font-extrabold text-rose-950 text-sm mb-1">⚡ 1. The "Yo-GO" Group</p>
            <p className="text-slate-700 mb-1.5 leading-relaxed">
              Irregular <strong>ONLY</strong> in the <em>"Yo"</em> form by ending in <strong>-go</strong>. All other subjects follow normal rules!
            </p>
            <ul className="text-slate-800 font-medium space-y-0.5">
              <li>• hacer → Yo <strong>hago</strong></li>
              <li>• poner → Yo <strong>pongo</strong></li>
              <li>• salir → Yo <strong>salgo</strong></li>
              <li>• tener → Yo <strong>tengo</strong></li>
              <li>• venir → Yo <strong>vengo</strong></li>
            </ul>
          </div>

          <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-3 text-xs">
            <p className="font-extrabold text-indigo-950 text-sm mb-1">👑 2. The Total Rebels</p>
            <p className="text-slate-700 mb-1.5 leading-relaxed">
              Completely change their roots. Must be memorized like multiplication tables!
            </p>
            <ul className="text-slate-800 font-medium space-y-0.5">
              <li>• <strong>ser:</strong> soy, eres, es, somos, son</li>
              <li>• <strong>ir:</strong> voy, vas, va, vamos, van</li>
            </ul>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-3 text-xs">
            <p className="font-extrabold text-amber-950 text-sm mb-1">🌟 3. The "-OY" Yo Form</p>
            <p className="text-slate-700 mb-1.5 leading-relaxed">
              End in <strong>-oy</strong> in the <em>"Yo"</em> form:
            </p>
            <ul className="text-slate-800 font-medium space-y-0.5">
              <li>• estar → Yo <strong>estoy</strong></li>
              <li>• dar → Yo <strong>doy</strong></li>
              <li>• ser → Yo <strong>soy</strong></li>
              <li>• ir → Yo <strong>voy</strong></li>
            </ul>
          </div>
        </div>

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
        <div className="mb-3 rounded-lg border border-amber-200 bg-amber-50/70 p-3 text-xs text-amber-950">
          <p className="font-bold flex items-center gap-1 mb-0.5">💡 Quick Tip — Same Stems for Future & Conditional:</p>
          <p>Future and Conditional share the <strong>EXACT SAME irregular stems</strong>! Learn the stem once (e.g. <em>tener → tendr-</em>), then just attach Future endings (<em>-é, -ás...</em>) for "will", or Conditional endings (<em>-ía, -ías...</em>) for "would".</p>
        </div>
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
        <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-3.5">
            <p className="mb-1 font-extrabold text-indigo-950 text-sm flex items-center gap-1.5">
              <span>⬅️</span> POR = Backward Arrow (Reason / Movement Through)
            </p>
            <p className="text-xs text-indigo-900 leading-relaxed">
              Looks <strong>BACKWARD</strong> at the cause, trade, or means: <em>"Gracias <strong>por</strong> la ayuda"</em> (Looking back at why you are thankful).
            </p>
          </div>

          <div className="rounded-xl border border-purple-200 bg-purple-50/60 p-3.5">
            <p className="mb-1 font-extrabold text-purple-950 text-sm flex items-center gap-1.5">
              <span>➡️</span> PARA = Forward Arrow (Goal / Target / Recipient)
            </p>
            <p className="text-xs text-purple-900 leading-relaxed">
              Points <strong>FORWARD</strong> toward the target or goal: <em>"Este regalo es <strong>para</strong> ti"</em> (Pointing forward to the receiver).
            </p>
          </div>
        </div>

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

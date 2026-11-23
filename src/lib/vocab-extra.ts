// File: src/lib/vocab-extra.ts
//
// Vocabulary for the official IB subtopics that had no words yet
// (Subculturas, Actividades recreativas, Expresiones artísticas, Participación
// social, Igualdad, El medio urbano y rural). Merged into each theme's
// vocabulary at module load in data.ts.

import { VocabItem } from "./types";

type ExtraVocab = { themeId: string; items: VocabItem[] };

const v = (subtopic: string, pairs: [string, string][]): VocabItem[] =>
  pairs.map(([es, en]) => ({ es, en, subtopic }));

export const EXTRA_VOCAB: ExtraVocab[] = [
  {
    themeId: "identities",
    items: v("Subculturas", [
      ["la subcultura", "subculture"],
      ["la identidad colectiva", "collective identity"],
      ["la marginalidad", "marginalisation"],
      ["la expresión personal", "personal expression"],
      ["la pertenencia", "belonging"],
      ["el grupo de jóvenes", "youth group"],
      ["el estilo alternativo", "alternative style"],
      ["el rechazo", "rejection"],
      ["la tribu urbana", "urban tribe"],
      ["la aceptación", "acceptance"],
    ]),
  },
  {
    themeId: "experiences",
    items: v("Actividades recreativas", [
      ["el ocio", "leisure"],
      ["el deporte de equipo", "team sport"],
      ["el pasatiempo", "hobby"],
      ["la excursión", "day trip"],
      ["el campamento de verano", "summer camp"],
      ["el juego de mesa", "board game"],
      ["la competición", "competition"],
      ["el entrenamiento", "training session"],
      ["el club deportivo", "sports club"],
      ["la afición", "passion, hobby"],
    ]),
  },
  {
    themeId: "human-ingenuity",
    items: v("Expresiones artísticas", [
      ["la pintura", "painting"],
      ["la escultura", "sculpture"],
      ["la danza", "dance"],
      ["el teatro", "theatre"],
      ["la poesía", "poetry"],
      ["el mural", "mural"],
      ["la música tradicional", "traditional music"],
      ["la obra de arte", "artwork"],
      ["el estilo artístico", "artistic style"],
      ["la inspiración", "inspiration"],
    ]),
  },
  {
    themeId: "social-organization",
    items: v("Participación social", [
      ["el voluntariado", "volunteering"],
      ["el voto", "vote"],
      ["la ciudadanía", "citizenship"],
      ["el activismo", "activism"],
      ["la manifestación", "demonstration"],
      ["la campaña", "campaign"],
      ["la petición", "petition"],
      ["el movimiento social", "social movement"],
      ["el representante", "representative"],
      ["la iniciativa vecinal", "neighbourhood initiative"],
    ]),
  },
  {
    themeId: "sharing-planet",
    items: [
      ...v("Igualdad", [
        ["la igualdad de género", "gender equality"],
        ["la discriminación", "discrimination"],
        ["la equidad", "equity"],
        ["la inclusión", "inclusion"],
        ["la brecha salarial", "pay gap"],
        ["el prejuicio", "prejudice"],
        ["la justicia social", "social justice"],
        ["la oportunidad", "opportunity"],
        ["el acceso", "access"],
        ["la igualdad de oportunidades", "equal opportunities"],
      ]),
      ...v("El medio urbano y rural", [
        ["la ciudad", "city"],
        ["el pueblo", "village"],
        ["la contaminación del aire", "air pollution"],
        ["el transporte público", "public transport"],
        ["la vivienda", "housing"],
        ["el campo", "countryside"],
        ["la despoblación", "depopulation"],
        ["la infraestructura", "infrastructure"],
        ["el ruido", "noise"],
        ["la zona verde", "green space"],
      ]),
    ],
  },
];

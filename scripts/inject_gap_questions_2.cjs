/// Script: scripts/inject_gap_questions.cjs
/// Reads gap_questions_bank_2.cjs (grammar-drill questions: false cognates,
/// relative clauses, imperative, por/para, passive voice, heading-match,
/// word-bank gap-fill, pluperfect, advanced grammar) and inserts them before
/// the closing ]; of CORE_QUESTIONS in src/lib/data.ts — same pattern as
/// inject_quiz_questions.cjs.
/// Run with: node scripts/inject_gap_questions.cjs

const fs = require("fs");
const path = require("path");

const { questions } = require("./gap_questions_bank_2.cjs");

const dataFilePath = path.join(process.cwd(), "src", "lib", "data.ts");
let content = fs.readFileSync(dataFilePath, "utf-8");

const existingIds = new Set();
const idMatches = content.matchAll(/id:\s*"([^"]+)"/g);
for (const m of idMatches) existingIds.add(m[1]);

const newQuestions = questions.filter((q) => !existingIds.has(q.id));
console.log(`Total new questions to inject: ${newQuestions.length}`);

if (newQuestions.length === 0) {
  console.log("All questions already exist. Nothing to inject.");
  process.exit(0);
}

function toTsEntry(q) {
  const lines = [`  {`];
  lines.push(`    id: "${q.id}",`);
  lines.push(`    themeId: "${q.themeId}",`);
  lines.push(`    type: "${q.type}",`);
  lines.push(`    prompt: ${JSON.stringify(q.prompt)},`);
  if (q.audioText) lines.push(`    audioText: ${JSON.stringify(q.audioText)},`);
  if (q.options) lines.push(`    options: ${JSON.stringify(q.options)},`);
  lines.push(`    correctAnswer: ${JSON.stringify(q.correctAnswer)},`);
  lines.push(`    difficulty: "${q.difficulty}",`);
  lines.push(`    points: ${q.points},`);
  if (q.explanation) lines.push(`    explanation: ${JSON.stringify(q.explanation)},`);
  lines.push(`  },`);
  return lines.join("\n");
}

const insertBlock = newQuestions.map(toTsEntry).join("\n");

const marker = `];\n\n// ---------------------------------------------------------------------------\n// Vocabulary-driven question generator`;
const insertionPoint = content.indexOf(marker);
if (insertionPoint === -1) {
  console.error("ERROR: Could not find CORE_QUESTIONS closing marker in data.ts");
  process.exit(1);
}

const before = content.slice(0, insertionPoint);
const after = content.slice(insertionPoint);

const newContent = before + "\n  // === INJECTED GRAMMAR-DRILL QUESTIONS (gap_questions_bank_2.cjs) ===\n" + insertBlock + "\n" + after;

fs.writeFileSync(dataFilePath, newContent, "utf-8");
console.log(`✅ Injected ${newQuestions.length} questions into src/lib/data.ts`);
console.log(`Total file size: ${(newContent.length / 1024).toFixed(1)} KB`);

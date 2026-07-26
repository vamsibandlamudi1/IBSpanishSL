/// Script: scripts/inject_quiz_questions.cjs
/// Reads quiz_questions_bank.cjs and inserts all questions before the
/// closing ]; of CORE_QUESTIONS in src/lib/data.ts
/// Run with: node scripts/inject_quiz_questions.cjs

const fs = require("fs");
const path = require("path");

const { questions } = require("./quiz_questions_bank.cjs");

const dataFilePath = path.join(process.cwd(), "src", "lib", "data.ts");
let content = fs.readFileSync(dataFilePath, "utf-8");

// Read existing CORE_QUESTIONS ids to avoid duplicates
const existingIds = new Set();
const idMatches = content.matchAll(/id:\s*"([^"]+)"/g);
for (const m of idMatches) existingIds.add(m[1]);

// Filter out questions that already exist
const newQuestions = questions.filter(q => !existingIds.has(q.id));
console.log(`Total new questions to inject: ${newQuestions.length}`);

if (newQuestions.length === 0) {
  console.log("All questions already exist. Nothing to inject.");
  process.exit(0);
}

// Convert questions to TypeScript object literal strings
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

// Find the closing ]; of CORE_QUESTIONS (line 2287 approximately)
// We find it by looking for the pattern just before the vocabulary generator comment
const marker = `];\n\n// ---------------------------------------------------------------------------\n// Vocabulary-driven question generator`;

const insertionPoint = content.indexOf(marker);
if (insertionPoint === -1) {
  console.error("ERROR: Could not find CORE_QUESTIONS closing marker in data.ts");
  process.exit(1);
}

// Insert just before the ]; closing marker
const before = content.slice(0, insertionPoint);
const after = content.slice(insertionPoint);

const newContent = before + "\n  // === INJECTED IB EXAM QUESTIONS ===\n" + insertBlock + "\n" + after;

fs.writeFileSync(dataFilePath, newContent, "utf-8");
console.log(`✅ Injected ${newQuestions.length} questions into src/lib/data.ts`);
console.log(`Total file size: ${(newContent.length / 1024).toFixed(1)} KB`);

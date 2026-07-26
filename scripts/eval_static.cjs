const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'src', 'lib', 'grammar-data');

const exportNameMap = {
  'present-regular.ts': 'PRESENT_REGULAR_EXERCISES',
  'present-irregular.ts': 'PRESENT_IRREGULAR_EXERCISES',
  'preterite.ts': 'PRETERITE_EXERCISES',
  'imperfect.ts': 'IMPERFECT_EXERCISES',
  'future.ts': 'FUTURE_EXERCISES',
  'conditional.ts': 'CONDITIONAL_EXERCISES',
  'subjunctive.ts': 'SUBJUNCTIVE_EXERCISES',
  'reflexive.ts': 'REFLEXIVE_EXERCISES',
  'object-pronouns.ts': 'OBJECT_PRONOUNS_EXERCISES',
  'listening-tenses.ts': 'LISTENING_TENSES_EXERCISES'
};

function processFile(filename) {
  const code = fs.readFileSync(path.join(dir, filename), 'utf-8');
  const fnMatch = code.match(/function (create\w+)/);
  if (fnMatch) {
    const fnName = fnMatch[1];
    const cleanCode = code
      .replace(/import .*/g, '')
      .replace(/export const .*/g, '')
      .replace(/<string>/g, '')
      .replace(/<GrammarExercise\[\]>/g, '')
      .replace(/: GrammarExercise\[\]/g, '');

    const jsCode = cleanCode + '\n' + fnName + '();';
    const exercises = eval(jsCode);
    console.log('Evaluated ' + filename + ' (' + exercises.length + ' items)');

    const exportName = exportNameMap[filename];
    const content = 'import { GrammarExercise } from "../types";\n\nexport const ' + exportName + ': GrammarExercise[] = ' + JSON.stringify(exercises, null, 2) + ';\n';
    fs.writeFileSync(path.join(dir, filename), content, 'utf-8');
    console.log('Saved static JSON array to ' + filename);
  }
}

Object.keys(exportNameMap).forEach(processFile);
console.log('CONVERTED_ALL_SUCCESSFULLY');

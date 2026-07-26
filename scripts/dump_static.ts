import fs from 'fs';
import path from 'path';

import { SER_ESTAR_EXERCISES } from '../src/lib/grammar-data/ser-estar';
import { PRESENT_REGULAR_EXERCISES } from '../src/lib/grammar-data/present-regular';
import { PRESENT_IRREGULAR_EXERCISES } from '../src/lib/grammar-data/present-irregular';
import { PRETERITE_EXERCISES } from '../src/lib/grammar-data/preterite';
import { IMPERFECT_EXERCISES } from '../src/lib/grammar-data/imperfect';
import { FUTURE_EXERCISES } from '../src/lib/grammar-data/future';
import { CONDITIONAL_EXERCISES } from '../src/lib/grammar-data/conditional';
import { SUBJUNCTIVE_EXERCISES } from '../src/lib/grammar-data/subjunctive';
import { REFLEXIVE_EXERCISES } from '../src/lib/grammar-data/reflexive';
import { OBJECT_PRONOUNS_EXERCISES } from '../src/lib/grammar-data/object-pronouns';
import { LISTENING_TENSES_EXERCISES } from '../src/lib/grammar-data/listening-tenses';

const dir = path.join(process.cwd(), 'src', 'lib', 'grammar-data');

function saveStatic(filename: string, exportName: string, data: any) {
  const content = `import { GrammarExercise } from "../types";\n\nexport const ${exportName}: GrammarExercise[] = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(path.join(dir, filename), content, 'utf-8');
  console.log(`Saved ${filename} (${data.length} items)`);
}

saveStatic('ser-estar.ts', 'SER_ESTAR_EXERCISES', SER_ESTAR_EXERCISES);
saveStatic('present-regular.ts', 'PRESENT_REGULAR_EXERCISES', PRESENT_REGULAR_EXERCISES);
saveStatic('present-irregular.ts', 'PRESENT_IRREGULAR_EXERCISES', PRESENT_IRREGULAR_EXERCISES);
saveStatic('preterite.ts', 'PRETERITE_EXERCISES', PRETERITE_EXERCISES);
saveStatic('imperfect.ts', 'IMPERFECT_EXERCISES', IMPERFECT_EXERCISES);
saveStatic('future.ts', 'FUTURE_EXERCISES', FUTURE_EXERCISES);
saveStatic('conditional.ts', 'CONDITIONAL_EXERCISES', CONDITIONAL_EXERCISES);
saveStatic('subjunctive.ts', 'SUBJUNCTIVE_EXERCISES', SUBJUNCTIVE_EXERCISES);
saveStatic('reflexive.ts', 'REFLEXIVE_EXERCISES', REFLEXIVE_EXERCISES);
saveStatic('object-pronouns.ts', 'OBJECT_PRONOUNS_EXERCISES', OBJECT_PRONOUNS_EXERCISES);
saveStatic('listening-tenses.ts', 'LISTENING_TENSES_EXERCISES', LISTENING_TENSES_EXERCISES);

console.log('DONE_EXPORTING_STATIC_ARRAYS');

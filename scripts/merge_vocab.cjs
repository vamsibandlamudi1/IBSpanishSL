const fs = require('fs');
const path = require('path');

const expandedData = JSON.parse(fs.readFileSync(path.join(__dirname, 'expanded_vocab.json'), 'utf-8'));
const dataFilePath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
let content = fs.readFileSync(dataFilePath, 'utf-8');

// We need to inject the extra vocabulary into each theme's vocabulary array in data.ts
// Format in data.ts:
// { es: "...", en: "...", subtopic: "..." },

Object.keys(expandedData).forEach(themeId => {
  const themeVocab = expandedData[themeId];
  let newEntriesStr = '';
  Object.keys(themeVocab).forEach(subtopic => {
    const items = themeVocab[subtopic];
    items.forEach(item => {
      newEntriesStr += `      { es: "${item.es}", en: "${item.en}", subtopic: "${subtopic}" },\n`;
    });
  });

  // Find location in data.ts where this theme's vocabulary ends
  // We can look for theme id like id: "identities" or id: "experiences"
  const themeMarker = `id: "${themeId}"`;
  const themePos = content.indexOf(themeMarker);
  if (themePos !== -1) {
    const vocabMarker = `vocabulary: [`;
    const vocabPos = content.indexOf(vocabMarker, themePos);
    if (vocabPos !== -1) {
      const insertPos = vocabPos + vocabMarker.length + 1;
      content = content.slice(0, insertPos) + newEntriesStr + content.slice(insertPos);
      console.log(`Inserted ${Object.keys(themeVocab).length * 20} vocab items into theme ${themeId}`);
    }
  }
});

fs.writeFileSync(dataFilePath, content, 'utf-8');
console.log('Successfully updated src/lib/data.ts with 500 total vocabulary items across 5 themes!');

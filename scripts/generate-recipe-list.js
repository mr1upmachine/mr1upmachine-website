import { mkdirSync, readdir, writeFileSync } from 'fs';
import { join } from 'path';

const recipesDir = join(import.meta.dirname, '../public/assets/recipes');
const outputFilePath = join(import.meta.dirname, '../public/assets/recipe-list.json');

readdir(recipesDir, (err, files) => {
  if (err) {
    console.error('Unable to read directory:', err);
    process.exit(1);
  }

  const recipes = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace('.md', ''));
  writeFileSync(outputFilePath, JSON.stringify(recipes, null, 2));
  console.log('Recipe list generated successfully.');
});

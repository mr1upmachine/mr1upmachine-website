import { readdir, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const current_dirname = dirname(fileURLToPath(import.meta.url));
const recipesDir = join(current_dirname, '../public/assets/recipes');
const outputFilePath = join(current_dirname, '../public/assets/recipe-list.json');

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

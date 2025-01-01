import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router';
import { toTitleCase } from '../../utils/to-title-case';

const RecipeList: FC = () => {
  const [recipes, setRecipes] = useState<string[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('/assets/recipe-list.json');
      const files = (await response.json()) as string[];
      setRecipes(files);
    };

    void fetchRecipes();
  }, []);

  return (
    <ul className="tw-ml-3 tw-list-inside tw-list-disc">
      {recipes.map((recipe) => (
        <li key={recipe}>
          <Link to={`/recipes/${recipe}`}>{toTitleCase(recipe)}</Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;

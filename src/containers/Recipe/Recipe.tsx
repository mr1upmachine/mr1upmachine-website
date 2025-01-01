import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { marked } from 'marked';

const Recipe: FC = () => {
  const { recipeName } = useParams<{ recipeName: string }>();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await fetch(`/assets/recipes/${recipeName}.md`);
      const text = await response.text();
      setMarkdown(await marked(text));
    };

    void fetchMarkdown();
  }, [recipeName]);

  return <div dangerouslySetInnerHTML={{ __html: markdown }}></div>;
};

export default Recipe;

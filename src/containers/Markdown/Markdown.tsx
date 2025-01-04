import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { marked } from 'marked';
import './Markdown.css';
import classNames from 'classnames';

const Markdown: FC<{ assetPath: string; className: string }> = ({ assetPath, className }) => {
  const params = useParams<Record<string, string>>();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      const resourceUrl = assetPath
        .split('/')
        .map((urlSegment) =>
          urlSegment.startsWith(':') ? params[urlSegment.slice(1)] : urlSegment
        )
        .join('/')
        .concat('.md');
      const response = await fetch(resourceUrl);
      const text = await response.text();
      setMarkdown(await marked(text));
    };

    void fetchMarkdown();
  }, [assetPath, params]);

  return (
    <div
      className={classNames('markdown', className)}
      dangerouslySetInnerHTML={{ __html: markdown }}
    ></div>
  );
};

export default Markdown;

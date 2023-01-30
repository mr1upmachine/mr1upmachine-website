import { LinkProps } from 'react-router-dom';

import './LinkAnchor.css';
import Link from '../Link/Link';
import { BaseLinkProps } from '../shared/BaseLinkProps';
import { LinkAnchorColor } from './LinkAnchorColor';
import { FC } from 'react';

interface BaseLinkAnchorProps {
  color?: LinkAnchorColor;
}

type LinkAnchorProps = BaseLinkAnchorProps & BaseLinkProps & LinkProps;

const LinkAnchor: FC<LinkAnchorProps> = ({
  children,
  className,
  color,
  external,
  reloadDocument,
  replace,
  title,
  to,
}) => {
  const classList = ['link-anchor'];

  switch (color) {
    case 'light':
      classList.push('link-anchor-light');
      break;
    case 'dark':
      classList.push('link-anchor-dark');
      break;
  }

  if (className) {
    classList.push(className);
  }

  return (
    <Link
      className={classList.join(' ')}
      external={external}
      reloadDocument={reloadDocument}
      replace={replace}
      title={title}
      to={to}
    >
      {children}
    </Link>
  );
};

export default LinkAnchor;

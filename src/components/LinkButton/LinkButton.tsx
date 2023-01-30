import { LinkProps } from 'react-router-dom';

import '../shared/ButtonSharedStyles.css';
import Link from '../Link/Link';
import { BaseButtonProps } from '../shared/BaseButtonProps';
import { BaseLinkProps } from '../shared/BaseLinkProps';
import { buildButtonClassList } from '../shared/BaseButtonUtils';
import { FC } from 'react';

type LinkButtonProps = BaseButtonProps & BaseLinkProps & LinkProps;

const LinkButton: FC<LinkButtonProps> = ({
  children,
  className,
  color,
  compact,
  external,
  reloadDocument,
  replace,
  to,
}) => {
  const classList = buildButtonClassList({ className, color, compact });

  return (
    <Link
      className={classList.join(' ')}
      external={external}
      reloadDocument={reloadDocument}
      replace={replace}
      to={to}
    >
      {children}
    </Link>
  );
};

export default LinkButton;

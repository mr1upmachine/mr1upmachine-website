import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from 'react-router-dom';

import { BaseLinkProps } from '../shared/BaseLinkProps';

type LinkProps = BaseLinkProps & ReactRouterLinkProps;

function Link(props: LinkProps) {
  const { children, className, external, reloadDocument, replace, title, to } = props;

  return external ? (
    <a
      className={className}
      href={(to as string | null | undefined) ?? ''}
      target="_blank"
      title={title}
      rel="noreferrer"
    >
      {children}
    </a>
  ) : (
    <ReactRouterLink
      {...props}
      className={className}
      to={to}
      reloadDocument={reloadDocument}
      replace={replace}
      title={title}
    >
      {children}
    </ReactRouterLink>
  );
}

export default Link;

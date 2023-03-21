import { AnchorHTMLAttributes, FC } from 'react';
import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from 'react-router-dom';

export type BaseLinkProps =
  | ({ external?: false } & ReactRouterLinkProps)
  | ({ external: true; to: AnchorHTMLAttributes<HTMLAnchorElement>['href'] } & Omit<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      'href'
    >);

export const BaseLink: FC<BaseLinkProps> = ({
  children,
  className,
  external,
  title,
  to,
  ...rest
}) => {
  return external ? (
    <a
      {...rest}
      className={className}
      href={to ?? ''}
      target="_blank"
      title={title}
      rel="noreferrer"
    >
      {children}
    </a>
  ) : (
    <ReactRouterLink {...rest} className={className} to={to} title={title}>
      {children}
    </ReactRouterLink>
  );
};

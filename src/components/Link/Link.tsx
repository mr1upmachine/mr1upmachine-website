import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from "react-router-dom";

import { BaseLinkProps } from "../shared/BaseLinkProps";

type LinkProps = BaseLinkProps & ReactRouterLinkProps;

function Link({
  children,
  className,
  external,
  reloadDocument,
  replace,
  state,
  title,
  to,
}: LinkProps) {
  return external ? (
    <a
      className={className}
      href={(to as string) ?? ""}
      target="_blank"
      title={title}
      rel="noreferrer"
    >
      {children}
    </a>
  ) : (
    <ReactRouterLink
      className={className}
      to={to}
      reloadDocument={reloadDocument}
      replace={replace}
      state={state}
      title={title}
    >
      {children}
    </ReactRouterLink>
  );
}

export default Link;

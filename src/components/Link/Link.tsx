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
  to,
}: LinkProps) {
  return external ? (
    <a className={className} href={(to as string) ?? ""}>
      {children}
    </a>
  ) : (
    <ReactRouterLink
      className={className}
      to={to}
      reloadDocument={reloadDocument}
      replace={replace}
      state={state}
    >
      {children}
    </ReactRouterLink>
  );
}

export default Link;

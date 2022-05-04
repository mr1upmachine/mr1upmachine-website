import { LinkProps } from "react-router-dom";

import "../shared/ButtonSharedStyles.css";
import Link from "../Link/Link";
import { BaseButtonProps } from "../shared/BaseButtonProps";
import { BaseLinkProps } from "../shared/BaseLinkProps";
import { buildButtonClassList } from "../shared/BaseButtonUtils";

type LinkButtonProps = BaseButtonProps & BaseLinkProps & LinkProps;

function LinkButton({
  children,
  className,
  color,
  compact,
  external,
  reloadDocument,
  replace,
  state,
  to,
}: LinkButtonProps) {
  const classList = buildButtonClassList({ className, color, compact });

  return (
    <Link
      className={classList.join(" ")}
      external={external}
      reloadDocument={reloadDocument}
      replace={replace}
      state={state}
      to={to}
    >
      {children}
    </Link>
  );
}

export default LinkButton;

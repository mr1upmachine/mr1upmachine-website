import { ButtonHTMLAttributes } from "react";

import "../shared/ButtonSharedStyles.css";
import { BaseButtonProps } from "../shared/BaseButtonProps";
import { buildButtonClassList } from "../shared/BaseButtonUtils";

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, className, color, compact, onClick }: ButtonProps) {
  const classList = buildButtonClassList({ className, color, compact });

  return (
    <button className={classList.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

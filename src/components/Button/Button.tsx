import { ButtonHTMLAttributes, FC } from 'react';

import '../shared/ButtonSharedStyles.css';
import { BaseButtonProps } from '../shared/BaseButtonProps';
import { buildButtonClassList } from '../shared/BaseButtonUtils';

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = (props) => {
  const { children, className, color, compact } = props;
  const classList = buildButtonClassList({ className, color, compact });

  return (
    <button {...props} className={classList.join(' ')}>
      {children}
    </button>
  );
};

export default Button;

import { ButtonHTMLAttributes, FC } from 'react';

import { BaseButtonProps } from '../shared/BaseButtonProps';
import { buildButtonClassNames } from '../shared/BaseButtonUtils';

export const BaseButton: FC<BaseButtonProps<ButtonHTMLAttributes<HTMLButtonElement>>> = ({
  children,
  className,
  color,
  compact,
  icon,
  ...rest
}) => {
  const classNames = buildButtonClassNames({ className, color, compact, icon });

  return (
    <button {...rest} className={classNames}>
      {children}
    </button>
  );
};

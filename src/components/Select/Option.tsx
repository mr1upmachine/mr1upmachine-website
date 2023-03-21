import classNames from 'classnames';
import { FC, OptionHTMLAttributes } from 'react';

export type OptionProps = OptionHTMLAttributes<HTMLOptionElement>;

export const Option: FC<OptionProps> = ({ children, className, ...rest }) => {
  const optionClassnames = classNames('tw-text-black dark:tw-text-white', className);
  return (
    <option {...rest} className={optionClassnames}>
      {children}
    </option>
  );
};

import classNames from 'classnames';
import { FC, SelectHTMLAttributes } from 'react';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export const Select: FC<SelectProps> = ({ children, className, ...rest }) => {
  const selectClassnames = classNames(
    'tw-w-full tw-p-1 tw-cursor-pointer tw-rounded-lg tw-border-2 tw-border-slate-500 focus:tw-outline focus:tw-outline-4 tw-outline-focus dark:tw-bg-2 dark:tw-border-white dark:tw-text-white',
    className
  );
  return (
    <select {...rest} className={selectClassnames}>
      {children}
    </select>
  );
};

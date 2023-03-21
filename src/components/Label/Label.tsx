import classNames from 'classnames';
import { FC, LabelHTMLAttributes } from 'react';

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label: FC<LabelProps> = ({ children, className, ...rest }) => {
  const labelClassnames = classNames(
    'tw-w-full tw-text-lg tw-py-1 tw-block dark:tw-text-white',
    className
  );
  return (
    <label {...rest} className={labelClassnames}>
      {children}
    </label>
  );
};

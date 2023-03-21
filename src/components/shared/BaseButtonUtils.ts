import classnames from 'classnames';
import { BaseButtonColor } from './BaseButtonColor';

interface ButtonClassBuilderOptions {
  className?: string;
  color: BaseButtonColor;
  compact?: boolean;
  icon?: boolean;
}

export const buildButtonClassNames: (props: ButtonClassBuilderOptions) => string = ({
  className,
  color,
  compact,
  icon,
}) =>
  classnames(
    'tw-rounded-md tw-text-base tw-font-medium focus:tw-outline focus:tw-outline-4 tw-outline-focus dark:tw-text-white',
    {
      'tw-px-3 tw-py-2': !compact && !icon,
      'tw-p-1 tw-flex tw-justify-center tw-items-center': !compact && icon,
      'tw-text-white tw-bg-primary hover:tw-bg-primary-hover': color === 'primary',
    },
    className
  );

import { AnchorHTMLAttributes, FC } from 'react';

import { BaseLink } from '../BaseLink/BaseLink';
import { BaseButtonProps } from '../shared/BaseButtonProps';
import { BaseLinkProps } from '../BaseLink/BaseLink';
import { buildButtonClassNames } from '../shared/BaseButtonUtils';

export type BaseLinkButtonProps = BaseButtonProps<AnchorHTMLAttributes<HTMLAnchorElement>> &
  BaseLinkProps;

export const BaseLinkButton: FC<BaseLinkButtonProps> = ({
  children,
  className,
  color,
  compact = false,
  icon,
  ...rest
}) => {
  const classNames = buildButtonClassNames({ className, color, compact, icon });

  return (
    <BaseLink {...rest} className={classNames}>
      {children}
    </BaseLink>
  );
};

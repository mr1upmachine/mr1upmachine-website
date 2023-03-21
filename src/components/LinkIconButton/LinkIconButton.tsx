import { AnchorHTMLAttributes, FC } from 'react';

import { BaseButtonProps } from '../shared/BaseButtonProps';
import { BaseLinkProps } from '../BaseLink/BaseLink';
import { BaseLinkButton } from '../BaseLinkButton/BaseLinkButton';

export type LinkIconButtonProps = Omit<
  BaseButtonProps<AnchorHTMLAttributes<HTMLAnchorElement>>,
  'icon'
> &
  BaseLinkProps;

export const LinkIconButton: FC<LinkIconButtonProps> = (props) => (
  <BaseLinkButton {...props} icon={true} />
);

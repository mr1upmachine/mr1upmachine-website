import { AnchorHTMLAttributes, FC } from 'react';

import { BaseLinkButton } from '../BaseLinkButton/BaseLinkButton';
import { BaseButtonProps } from '../shared/BaseButtonProps';
import { BaseLinkProps } from '../BaseLink/BaseLink';

export type LinkButtonProps = Omit<
  BaseButtonProps<AnchorHTMLAttributes<HTMLAnchorElement>>,
  'icon'
> &
  BaseLinkProps;

export const LinkButton: FC<LinkButtonProps> = (props) => (
  <BaseLinkButton {...props} icon={false} />
);

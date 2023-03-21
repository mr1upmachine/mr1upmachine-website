import { ButtonHTMLAttributes, FC } from 'react';

import { BaseButton } from '../BaseButton/BaseButton';
import { BaseButtonProps } from '../shared/BaseButtonProps';

export type IconButtonProps = Omit<
  BaseButtonProps<ButtonHTMLAttributes<HTMLButtonElement>>,
  'icon'
>;

export const IconButton: FC<IconButtonProps> = (props) => <BaseButton {...props} icon={true} />;

import { ButtonHTMLAttributes, FC } from 'react';

import { BaseButton } from '../BaseButton/BaseButton';
import { BaseButtonProps } from '../shared/BaseButtonProps';

export type ButtonProps = Omit<BaseButtonProps<ButtonHTMLAttributes<HTMLButtonElement>>, 'icon'>;

export const Button: FC<ButtonProps> = (props) => <BaseButton {...props} icon={false} />;

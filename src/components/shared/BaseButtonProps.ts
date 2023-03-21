import { ReactNode } from 'react';
import { BaseButtonColor } from './BaseButtonColor';

export type BaseButtonProps<T> = T & {
  className?: string;
  children: ReactNode;
  color?: BaseButtonColor;
  compact?: boolean;
  icon: boolean;
};

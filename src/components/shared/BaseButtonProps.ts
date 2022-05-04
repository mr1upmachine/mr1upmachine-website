import { ReactNode } from "react";
import { BaseButtonColor } from "./BaseButtonColor";

export interface BaseButtonProps {
  className?: string;
  children: ReactNode;
  color?: BaseButtonColor;
  compact?: boolean;
}

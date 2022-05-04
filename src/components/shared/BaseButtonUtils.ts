import { BaseButtonProps } from "./BaseButtonProps";

export function buildButtonClassList({
  className,
  color,
  compact,
}: Omit<BaseButtonProps, "children">): string[] {
  const classList = ["button"];

  switch (color) {
    case "primary":
      classList.push("button-primary");
      break;
  }

  if (compact) {
    classList.push("button-compact");
  }

  if (className) {
    classList.push(className);
  }

  return classList;
}

import { ColorTheme } from '../constants/color-theme';
import { ColorThemeSetting } from '../constants/color-theme-setting';

export function toColorTheme(
  colorThemeSetting: ColorThemeSetting,
  isSystemDarkTheme: boolean
): ColorTheme {
  switch (colorThemeSetting) {
    case ColorThemeSetting.dark:
      return ColorTheme.dark;
    case ColorThemeSetting.light:
      return ColorTheme.light;
    default:
      return isSystemDarkTheme ? ColorTheme.dark : ColorTheme.light;
  }
}

import { useEffect, useState } from 'react';

import { ColorTheme } from '../constants/color-theme';
import { COLOR_SCHEME_QUERY } from '../constants/media-querys';
import { toColorTheme } from '../utils/to-color-theme';
import { useColorThemeSetting } from './useColorThemeSetting';
import { useMediaQuery } from './useMediaQuery';

export function useColorTheme(): ColorTheme {
  const isSystemDarkTheme = useMediaQuery(COLOR_SCHEME_QUERY);
  const [colorThemeSetting] = useColorThemeSetting();

  const [theme, setTheme] = useState<ColorTheme>(
    toColorTheme(colorThemeSetting, isSystemDarkTheme)
  );

  useEffect(() => {
    setTheme(toColorTheme(colorThemeSetting, isSystemDarkTheme));
  }, [colorThemeSetting, isSystemDarkTheme]);

  return theme;
}

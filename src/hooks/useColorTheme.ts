import { useEffect, useState } from "react";

import { ColorTheme } from "../constants/color-theme";
import { toColorTheme } from "../utils/to-color-theme";
import { useColorThemeSetting } from "./useColorThemeSetting";
import { useMediaQuery } from "./useMediaQuery";

export function useColorTheme(): ColorTheme {
  const isSystemDarkTheme = useMediaQuery("(prefers-color-scheme: dark)");
  const [colorThemeSetting] = useColorThemeSetting();

  const [theme, setTheme] = useState<ColorTheme>(
    toColorTheme(colorThemeSetting, isSystemDarkTheme)
  );

  useEffect(() => {
    setTheme(toColorTheme(colorThemeSetting, isSystemDarkTheme));
  }, [colorThemeSetting, isSystemDarkTheme]);

  return theme;
}

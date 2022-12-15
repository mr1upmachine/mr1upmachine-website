import { ColorThemeSetting } from "../constants/color-theme-setting";
import { STORAGE_KEYS } from "../constants/storage-keys";
import { useLocalStorage } from "./useLocalStorage";

export function useColorThemeSetting(): [
  ColorThemeSetting,
  (newTheme: ColorThemeSetting) => void
] {
  const [storageThemeSetting, setStorageThemeSetting] =
    useLocalStorage<ColorThemeSetting>(
      STORAGE_KEYS.colorTheme,
      ColorThemeSetting.inherit
    );

  return [
    storageThemeSetting ?? ColorThemeSetting.inherit,
    setStorageThemeSetting,
  ];
}

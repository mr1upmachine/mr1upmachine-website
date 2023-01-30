import { ReducedMotionSetting } from '../constants/reduced-motion-setting';
import { STORAGE_KEYS } from '../constants/storage-keys';
import { useLocalStorage } from './useLocalStorage';

export function useReducedMotionSetting(): [
  ReducedMotionSetting,
  (newTheme: ReducedMotionSetting) => void
] {
  const [storageThemeSetting, setStorageThemeSetting] = useLocalStorage<ReducedMotionSetting>(
    STORAGE_KEYS.reducedMotion,
    ReducedMotionSetting.inherit
  );

  return [storageThemeSetting, setStorageThemeSetting];
}

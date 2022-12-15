import { ReducedMotionSetting } from "../constants/reduced-motion-setting";

export function toReducedMotion(
  reducedMotionSetting: ReducedMotionSetting,
  isSystemUsingReducedMotion: boolean
): boolean {
  switch (reducedMotionSetting) {
    case ReducedMotionSetting.true:
      return true;
    case ReducedMotionSetting.false:
      return false;
    default:
      return isSystemUsingReducedMotion;
  }
}

import { useEffect, useState } from 'react';

import { REDUCED_MOTION_QUERY } from '../constants/media-querys';
import { toReducedMotion } from '../utils/to-reduced-motion';
import { useMediaQuery } from './useMediaQuery';
import { useReducedMotionSetting } from './useReducedMotionSetting';

export function useReducedMotion(): boolean {
  const isSystemUsingReducedMotion = useMediaQuery(REDUCED_MOTION_QUERY);
  const [reducedMotionSetting] = useReducedMotionSetting();

  const [reducedMotion, setReducedMotion] = useState<boolean>(
    toReducedMotion(reducedMotionSetting, isSystemUsingReducedMotion)
  );

  useEffect(() => {
    setReducedMotion(toReducedMotion(reducedMotionSetting, isSystemUsingReducedMotion));
  }, [reducedMotionSetting, isSystemUsingReducedMotion]);

  return reducedMotion;
}

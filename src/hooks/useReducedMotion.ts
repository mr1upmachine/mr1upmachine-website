import { useEffect, useState } from 'react';

import { toReducedMotion } from '../utils/to-reduced-motion';
import { useReducedMotionSetting } from './useReducedMotionSetting';
import { useMediaQuery } from './useMediaQuery';

export function useReducedMotion(): boolean {
  const isSystemUsingReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [reducedMotionSetting] = useReducedMotionSetting();

  const [reducedMotion, setReducedMotion] = useState<boolean>(
    toReducedMotion(reducedMotionSetting, isSystemUsingReducedMotion)
  );

  useEffect(() => {
    setReducedMotion(toReducedMotion(reducedMotionSetting, isSystemUsingReducedMotion));
  }, [reducedMotionSetting, isSystemUsingReducedMotion]);

  return reducedMotion;
}

import { MAX_VOLUME, MIN_VOLUME } from '../constants/audio-defaults';

export function isWithinVolumeRange(value: number): boolean {
  return value >= MIN_VOLUME && value <= MAX_VOLUME;
}

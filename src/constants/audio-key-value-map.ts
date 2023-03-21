import TostarenaTownMusic from '../assets/tostarena-town.mp3';
import { AudioKeys } from './audio-keys';

export const AUDIO_KEY_VALUE_MAP: ReadonlyMap<AudioKeys, string> = new Map([
  [AudioKeys.party, TostarenaTownMusic],
]);

import TostarenaTownMusic from '../assets/tostarena-town.mp3';
import { AudioKeys } from './audio-keys';

export const AUDIO_MAP: ReadonlyMap<AudioKeys, string> = new Map([
  [AudioKeys.party, TostarenaTownMusic],
]);

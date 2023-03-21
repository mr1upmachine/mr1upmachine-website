import { createContext } from 'react';
import { AudioKeys } from '../constants/audio-keys';

export const AudioMapContext = createContext<Map<AudioKeys, HTMLAudioElement>>(new Map());

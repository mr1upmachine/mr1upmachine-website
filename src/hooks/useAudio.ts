import { useCallback, useContext, useMemo } from 'react';

import { AudioKeys } from '../constants/audio-keys';
import { AUDIO_KEY_VALUE_MAP } from '../constants/audio-key-value-map';
import { AudioMapContext } from '../contexts/audio-map-context';
import { useLocalStorage } from './useLocalStorage';
import { STORAGE_KEYS } from '../constants/storage-keys';
import {
  DEFAULT_MUTE,
  DEFAULT_VOLUME,
  MAX_VOLUME,
  MIN_VOLUME,
  VOLUME_RANGE,
} from '../constants/audio-defaults';
import { isWithinVolumeRange } from '../utils/is-within-volume-range';

export function useAudio(key: AudioKeys) {
  const audioMap = useContext(AudioMapContext);

  const audioElement = useMemo(() => {
    const audioValue = AUDIO_KEY_VALUE_MAP.get(key);
    if (!audioValue) {
      throw new Error(`Audio key ${key} does not exist`);
    }

    const cachedAudioElement = audioMap.get(key);
    if (cachedAudioElement) {
      return cachedAudioElement;
    }

    const newAudioElement = new Audio(audioValue);
    audioMap.set(key, newAudioElement);
    return newAudioElement;
  }, [key]);

  const [mute, setMuteState] = useLocalStorage<boolean>(
    STORAGE_KEYS.audioMute(key),
    DEFAULT_MUTE,
    'boolean'
  );
  const [volume, setVolumeState] = useLocalStorage<number>(
    STORAGE_KEYS.audioVolume(key),
    DEFAULT_VOLUME,
    'number',
    (rawValue) => isWithinVolumeRange(rawValue)
  );

  const play = useCallback(() => {
    void audioElement.play();
  }, [audioElement]);

  const pause = useCallback(() => {
    if (audioElement.currentTime === 0 || audioElement.paused) {
      return;
    }

    audioElement.pause();
  }, [audioElement]);

  const setMute = useCallback<(value: boolean) => void>(
    (value) => {
      audioElement.muted = value;
      setMuteState(value);
    },
    [audioElement]
  );

  const setVolume = useCallback<(value: number) => void>(
    (value) => {
      if (!isWithinVolumeRange(value)) {
        throw new Error(`Volume cannot be outside range ${MIN_VOLUME} -> ${MAX_VOLUME}`);
      }

      audioElement.volume = value / VOLUME_RANGE;
      setVolumeState(value);
    },
    [audioElement]
  );

  return { audioElement, play, pause, mute, setMute, volume, setVolume };
}

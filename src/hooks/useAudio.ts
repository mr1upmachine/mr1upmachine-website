import { AudioKeys } from '../constants/audio-keys';
import { AUDIO_MAP } from '../constants/audio-map';
import { AudioSource } from '../services/audio/audio-source';
import { useAudioManager } from './useAudioManager';

export function useAudio(key: AudioKeys): AudioSource {
  const audioManager = useAudioManager();

  const audioSource = audioManager.getAudioSource(key);
  if (audioSource) {
    return audioSource;
  }

  const audioValue = AUDIO_MAP.get(key);
  if (!audioValue) {
    throw new Error(`Audio key ${key} does not exist`);
  }

  return audioManager.createAudioSource(key, audioValue);
}

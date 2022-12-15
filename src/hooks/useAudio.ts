import { AudioKeys } from "../constants/audio-keys";
import { AUDIO_MAP } from "../constants/audio-map";
import { AudioSource } from "../services/audio/audio-source";
import { useAudioManager } from "./useAudioManager";

export function useAudio(key: AudioKeys): AudioSource {
  const audioManager = useAudioManager();

  if (audioManager.hasAudioSource(key)) {
    return audioManager.getAudioSource(key)!;
  }

  if (!AUDIO_MAP.has(key)) {
    throw new Error(`Audio key ${key} does not exist`);
  }

  const audioValue = AUDIO_MAP.get(key)!;

  return audioManager.createAudioSource(key, audioValue);
}

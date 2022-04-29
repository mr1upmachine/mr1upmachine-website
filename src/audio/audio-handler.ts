import { Subject } from "rxjs";
import { AudioSource, AudioSourceOptions } from "./audio-source";

export class AudioHandler {
  static readonly LOCAL_STORAGE_PREFIX = "audio";
  readonly audioSourceChange = new Subject<void>();
  private readonly audioElementMap = new Map<string, AudioSource>();

  createAudioSource(key: string, src: string): AudioSource {
    const localStorageMuteKey = `${AudioHandler.LOCAL_STORAGE_PREFIX}.${key}.mute`;
    const localStorageVolumeKey = `${AudioHandler.LOCAL_STORAGE_PREFIX}.${key}.volume`;

    const initialMute = localStorage.getItem(localStorageMuteKey) === "true";
    const initialVolume = parseInt(
      localStorage.getItem(localStorageVolumeKey) ??
        AudioSource.DEFAULT_VOLUME.toString(),
      10
    );

    const audioElement = new Audio(src);
    const audioSourceOptions: AudioSourceOptions = {
      initialMute,
      initialVolume,
      onMuteChange: (mute) => {
        localStorage.setItem(localStorageMuteKey, mute.toString());
      },
      onVolumeChange: (volume) => {
        localStorage.setItem(localStorageVolumeKey, volume.toString());
      },
    };
    const audioSource = new AudioSource(audioElement, audioSourceOptions);

    this.audioElementMap.set(key, audioSource);
    this.audioSourceChange.next();

    return audioSource;
  }

  hasAudioSource(key: string): boolean {
    return this.audioElementMap.has(key);
  }

  getAudioSource(key: string): AudioSource | undefined {
    return this.audioElementMap.get(key);
  }

  getAllAudioSources(): [string, AudioSource][] {
    return Array.from(this.audioElementMap.entries());
  }
}

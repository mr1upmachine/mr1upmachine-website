import { AudioSource, AudioSourceOptions } from './audio-source';

export class AudioManager {
  static readonly STORAGE_KEY_PREFIX = 'audio';
  private readonly audioSourceMap = new Map<string, AudioSource>();

  constructor(protected readonly storage: Storage) {}

  createAudioSource(key: string, src: string): AudioSource {
    const localStorageMuteKey = `${AudioManager.STORAGE_KEY_PREFIX}.${key}.mute`;
    const localStorageVolumeKey = `${AudioManager.STORAGE_KEY_PREFIX}.${key}.volume`;

    const initialMute = this.storage.getItem(localStorageMuteKey) === 'true';
    const initialVolume = parseInt(
      this.storage.getItem(localStorageVolumeKey) ?? AudioSource.DEFAULT_VOLUME.toString(),
      10
    );

    const audioElement = new Audio(src);
    const audioSourceOptions: AudioSourceOptions = {
      initialMute,
      initialVolume,
      onMuteChange: (mute) => {
        this.storage.setItem(localStorageMuteKey, mute.toString());
      },
      onVolumeChange: (volume) => {
        this.storage.setItem(localStorageVolumeKey, volume.toString());
      },
    };
    const audioSource = new AudioSource(audioElement, audioSourceOptions);

    this.audioSourceMap.set(key, audioSource);

    return audioSource;
  }

  hasAudioSource(key: string): boolean {
    return this.audioSourceMap.has(key);
  }

  getAudioSource(key: string): AudioSource | undefined {
    return this.audioSourceMap.get(key);
  }

  getAllAudioSources(): [string, AudioSource][] {
    return Array.from(this.audioSourceMap.entries());
  }

  pauseAll(): void {
    this.audioSourceMap.forEach((audioSource) => {
      audioSource.pause();
    });
  }
}

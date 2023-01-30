export interface AudioSourceOptions {
  initialMute?: InstanceType<typeof AudioSource>['_mute'];
  initialVolume?: InstanceType<typeof AudioSource>['_volume'];
  onMuteChange?: InstanceType<typeof AudioSource>['onMuteChange'];
  onVolumeChange?: InstanceType<typeof AudioSource>['onVolumeChange'];
}

export class AudioSource {
  static readonly DEFAULT_MUTE = false;
  static readonly DEFAULT_VOLUME = 25;
  static readonly MAX_VOLUME = 100;
  static readonly MIN_VOLUME = 0;

  get mute(): InstanceType<typeof AudioSource>['_mute'] {
    return this._mute;
  }

  get volume(): InstanceType<typeof AudioSource>['_volume'] {
    return this._volume;
  }

  private _mute: boolean;
  private _volume: number;
  private onMuteChange?: (mute: InstanceType<typeof AudioSource>['_mute']) => void;
  private onVolumeChange?: (volume: InstanceType<typeof AudioSource>['_volume']) => void;

  constructor(public readonly element: HTMLAudioElement, options?: AudioSourceOptions) {
    this._mute = options?.initialMute ?? AudioSource.DEFAULT_MUTE;
    this._volume = options?.initialVolume ?? AudioSource.DEFAULT_VOLUME;
    this.onMuteChange = options?.onMuteChange;
    this.onVolumeChange = options?.onVolumeChange;
  }

  setMute(mute: InstanceType<typeof AudioSource>['_mute']): void {
    this.element.muted = mute;

    if (this.onMuteChange) {
      this.onMuteChange(mute);
    }
  }

  setVolume(volume: InstanceType<typeof AudioSource>['_volume']): void {
    if (volume < AudioSource.MIN_VOLUME || volume > AudioSource.MAX_VOLUME) {
      throw new Error(
        `Volume cannot be outside range ${AudioSource.MIN_VOLUME} -> ${AudioSource.MAX_VOLUME}`
      );
    }

    this.element.volume = volume / 100;

    if (this.onVolumeChange) {
      this.onVolumeChange(volume);
    }
  }

  play(): void {
    void this.element.play();
  }

  pause(): void {
    if (this.element.currentTime === 0 || this.element.paused) {
      return;
    }

    this.element.pause();
  }
}

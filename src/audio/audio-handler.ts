import { Subject } from "rxjs";

export class AudioHandler {
  readonly audioSourceChange = new Subject<void>();
  private readonly audioElementMap = new Map<string, HTMLAudioElement>();

  createAudioSource(key: string, src: string): HTMLAudioElement {
    const audioSource = new Audio(src);
    this.audioElementMap.set(key, audioSource);
    this.audioSourceChange.next();
    return audioSource;
  }

  getAudioSource(key: string): HTMLAudioElement {
    if (!this.audioElementMap.has(key)) {
      throw new Error(`Audio source with key ${key} has not been created yet`);
    }

    return this.audioElementMap.get(key)!;
  }

  getAllAudioSources(): [string, HTMLAudioElement][] {
    return Array.from(this.audioElementMap.entries());
  }
}

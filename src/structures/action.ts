import { AudioSource } from "./audio-source";

export class Action {
  constructor(
    public readonly behavior: string,
    public readonly audio?: AudioSource[]
  ) {}
}

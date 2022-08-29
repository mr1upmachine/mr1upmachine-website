import { Action } from "./action";
import { AudioSource } from "./audio-source";

export class IntermittentAction extends Action {
  constructor(
    behavior: string,
    audio?: AudioSource[],
    /** Number of ms between when this action should occur */
    public readonly interval: number = 1000
  ) {
    super(behavior, audio);
  }
}

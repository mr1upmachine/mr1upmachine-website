import { createContext } from "react";
import { AudioManager } from "./audio-manager";

export const AudioManagerContext = createContext<AudioManager>(
  new AudioManager(localStorage)
);

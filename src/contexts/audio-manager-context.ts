import { createContext } from "react";
import { AudioManager } from "../services/audio/audio-manager";

export const AudioManagerContext = createContext<AudioManager>(
  new AudioManager(localStorage)
);

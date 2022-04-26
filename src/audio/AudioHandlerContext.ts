import { createContext } from "react";
import { AudioHandler } from "./audio-handler";

export const AudioHandlerContext = createContext<AudioHandler>(
  new AudioHandler()
);

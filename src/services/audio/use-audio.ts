import { useContext } from "react";

import { AudioManagerContext } from "./audio-manager-context";

export function useAudio() {
  return useContext(AudioManagerContext);
}

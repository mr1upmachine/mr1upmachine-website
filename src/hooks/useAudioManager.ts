import { useContext } from "react";

import { AudioManagerContext } from "../contexts/audio-manager-context";

export function useAudioManager() {
  return useContext(AudioManagerContext);
}

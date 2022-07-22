import { useContext } from "react";

import { SettingsManagerContext } from "./settings-manager-context";

export function useSettings() {
  return useContext(SettingsManagerContext);
}

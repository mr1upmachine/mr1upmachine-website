import { createContext } from "react";
import { SettingsManager } from "./settings-manager";

export const SettingsManagerContext = createContext<SettingsManager>(
  new SettingsManager(localStorage)
);

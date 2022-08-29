import { useContext } from "react";

import { TimeManagerContext } from "./time-manager-context";

export function useTime() {
  return useContext(TimeManagerContext);
}

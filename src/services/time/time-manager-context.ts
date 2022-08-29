import { createContext } from "react";

import { TimeManager } from "./time-manager";

export const TimeManagerContext = createContext<TimeManager>(new TimeManager());

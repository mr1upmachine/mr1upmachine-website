import { DateTime } from "luxon";
import { useContext } from "react";

import { EventsContext } from "./events-context";

export function useEvents() {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error("Context for EventsContext is missing");
  }

  const now = DateTime.now();
  const currentEvents = context.events.filter(
    (e) => e.start <= now && now < e.end
  );
  const currentActions = currentEvents
    .map((e) => e.actions)
    .reduce((arr, a) => [...arr, ...a], []);

  return {
    ...context,
    currentActions,
    currentEvents,
  };
}

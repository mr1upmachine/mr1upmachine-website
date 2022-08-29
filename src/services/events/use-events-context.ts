import { useMemo, useState } from "react";
import { ALL_EVENTS } from "../../structures/all-events";
import { Event } from "../../structures/event";
import { EventsState } from "./events-context";

export function useEventsContext(initialEvents?: Event[]) {
  const [events, setEvents] = useState<Event[]>(initialEvents ?? ALL_EVENTS);
  return useMemo<EventsState>(
    () => ({
      events,
      setEvents,
    }),
    [events, setEvents]
  );
}

import { createContext, Dispatch, SetStateAction } from "react";
import { Event } from "../../structures/event";

export type EventsState = {
  events: Event[];
  setEvents: Dispatch<SetStateAction<Event[]>>;
};

export const EventsContext = createContext<EventsState | undefined>(undefined);

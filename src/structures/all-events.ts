import { DateTime } from "luxon";
import { Action } from "./action";
import { Event } from "./event";

const CHRISTMAS_EVENT = new Event(
  DateTime.fromISO("2022-12-25"),
  DateTime.fromISO("2022-12-26"),
  [new Action("SNOW")]
);

export const ALL_EVENTS = [CHRISTMAS_EVENT];

import { DateTime } from "luxon";

import { Action } from "./action";

export class Event {
  constructor(
    /** Start time (incl) */
    public readonly start: DateTime,
    /** End time (excl) */
    public readonly end: DateTime,
    public readonly actions: Action[]
  ) {}
}

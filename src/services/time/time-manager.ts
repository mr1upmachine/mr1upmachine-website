import { DateTime } from "luxon";

export class TimeManager {
  getCurrent(): string {
    return DateTime.now().toFormat("HH:mm:ss");
  }
}

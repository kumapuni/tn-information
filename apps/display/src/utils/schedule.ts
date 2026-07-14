import monday from "../data/schedules/normal/monday.json";
import tuesday from "../data/schedules/normal/tuesday.json";
import wednesday from "../data/schedules/normal/wednesday.json";
import thursday from "../data/schedules/normal/thursday.json";
import friday from "../data/schedules/normal/friday.json";
import saturday from "../data/schedules/normal/saturday.json";
import defaultSchedule from "../data/schedules/normal/default.json";

import config from "../data/config.json";

import type { ScheduleItem } from "../types/schedule";

export type ScheduleKey =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "default";

const schedules: Record<ScheduleKey, ScheduleItem[]> = {
  monday: monday as ScheduleItem[],
  tuesday: tuesday as ScheduleItem[],
  wednesday: wednesday as ScheduleItem[],
  thursday: thursday as ScheduleItem[],
  friday: friday as ScheduleItem[],
  saturday: saturday as ScheduleItem[],
  default: defaultSchedule as ScheduleItem[],
};

export function getTodaySchedule(): ScheduleItem[] {
  const dayNames: ScheduleKey[] = [
    "default",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const key = dayNames[new Date().getDay()];

  return schedules[key] ??
    schedules[config.defaultSchedule as ScheduleKey];
}
import normal from "../data/schedules/normal";
import short from "../data/schedules/short";
import exam from "../data/schedules/exam";

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

export type ScheduleMode =
  | "normal"
  | "short"
  | "exam";

const schedules = {

    normal,

    short,

    exam,

};

function getScheduleMode(): ScheduleMode {

  return config.scheduleMode as ScheduleMode;

}

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

  const mode = getScheduleMode();

  return schedules[mode][key];

}
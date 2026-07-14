import type { ScheduleItem } from "../types/schedule";

import monday from "../schedules/normal/monday.json";
import tuesday from "../schedules/normal/tuesday.json";
import wednesday from "../schedules/normal/wednesday.json";
import thursday from "../schedules/normal/thursday.json";
import friday from "../schedules/normal/friday.json";
import saturday from "../schedules/normal/saturday.json";
import defaultSchedule from "../schedules/normal/default.json";

import shortMonday from "../schedules/short/monday.json";
import shortTuesday from "../schedules/short/tuesday.json";
import shortWednesday from "../schedules/short/wednesday.json";
import shortThursday from "../schedules/short/thursday.json";
import shortFriday from "../schedules/short/friday.json";
import shortSaturday from "../schedules/short/saturday.json";
import shortDefault from "../schedules/short/default.json";

import examMonday from "../schedules/exam/monday.json";
import examTuesday from "../schedules/exam/tuesday.json";
import examWednesday from "../schedules/exam/wednesday.json";
import examThursday from "../schedules/exam/thursday.json";
import examFriday from "../schedules/exam/friday.json";
import examSaturday from "../schedules/exam/saturday.json";
import examDefault from "../schedules/exam/default.json";

export type ScheduleMode =
  | "normal"
  | "short"
  | "exam";

export type ScheduleDay =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "default";

export type ScheduleMap =
  Record<ScheduleDay, ScheduleItem[]>;

const normal: ScheduleMap = {

  monday,

  tuesday,

  wednesday,

  thursday,

  friday,

  saturday,

  default: defaultSchedule,

};

const short: ScheduleMap = {

  monday: shortMonday,

  tuesday: shortTuesday,

  wednesday: shortWednesday,

  thursday: shortThursday,

  friday: shortFriday,

  saturday: shortSaturday,

  default: shortDefault,

};

const exam: ScheduleMap = {

  monday: examMonday,

  tuesday: examTuesday,

  wednesday: examWednesday,

  thursday: examThursday,

  friday: examFriday,

  saturday: examSaturday,

  default: examDefault,

};

export function getSchedule(
  mode: ScheduleMode
): ScheduleMap {

  switch (mode) {

    case "normal":
      return normal;

    case "short":
      return short;

    case "exam":
      return exam;

    default:
      return normal;

  }

}

const dayNames: ScheduleDay[] = [

  "default",

  "monday",

  "tuesday",

  "wednesday",

  "thursday",

  "friday",

  "saturday",

];

export function getTodaySchedule(

  mode: ScheduleMode

): ScheduleItem[] {

  const day = dayNames[new Date().getDay()];

  return getSchedule(mode)[day];

}
export function getDaySchedule(

  mode: ScheduleMode,

  day: ScheduleDay

): ScheduleItem[] {

  return getSchedule(mode)[day];

}
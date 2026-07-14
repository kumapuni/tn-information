import {
  getDaySchedule,
} from "../utils/schedule";

import type {
  ScheduleMode,
  ScheduleDay,
} from "../utils/schedule";

import type {
  ScheduleItem,
} from "../types/schedule";

export async function loadSchedule(
  mode: ScheduleMode,
  day: ScheduleDay,
): Promise<ScheduleItem[]> {

  return structuredClone(
    getDaySchedule(mode, day),
  );

}

export async function saveSchedule(

  mode: ScheduleMode,

  day: ScheduleDay,

  schedule: ScheduleItem[],

): Promise<void> {

  console.log(

    "save",

    mode,

    day,

    schedule,

  );

}
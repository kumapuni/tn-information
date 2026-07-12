import monday from "../data/daily/monday.json";
import tuesday from "../data/daily/tuesday.json";
import wednesday from "../data/daily/wednesday.json";
import thursday from "../data/daily/thursday.json";
import friday from "../data/daily/friday.json";
import saturday from "../data/daily/saturday.json";
import defaultSchedule from "../data/daily/default.json";

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
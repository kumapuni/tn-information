import type { ScheduleItem } from "../../types/schedule";

import monday from "./normal/monday.json";
import tuesday from "./normal/tuesday.json";
import wednesday from "./normal/wednesday.json";
import thursday from "./normal/thursday.json";
import friday from "./normal/friday.json";
import saturday from "./normal/saturday.json";
import defaultSchedule from "./normal/default.json";

const normal = {

    monday: monday as ScheduleItem[],
    tuesday: tuesday as ScheduleItem[],
    wednesday: wednesday as ScheduleItem[],
    thursday: thursday as ScheduleItem[],
    friday: friday as ScheduleItem[],
    saturday: saturday as ScheduleItem[],
    default: defaultSchedule as ScheduleItem[],

};

export default normal;
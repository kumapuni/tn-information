import schedule from "../data/schedule.json";
import config from "../data/config.json";
import type { ScheduleItem } from "../types/schedule";

function toMinutes(value: string): number {
  const [h, m] = value.split(":").map(Number);
  return h * 60 + m;
}

export default function Schedule() {

  const now = new Date();

  const currentMinutes =
    now.getHours() * 60 + now.getMinutes();

  return (
    <main className="main">

      <h1>{config.title}</h1>

      <div className="timeline">

        {(schedule as ScheduleItem[]).map((item) => {

          const current =
            currentMinutes >= toMinutes(item.start) &&
            currentMinutes < toMinutes(item.end);

          return (
            <div
              key={item.start}
              className={
                current
                  ? "timeline-item current"
                  : "timeline-item"
              }
            >

              <div className="timeline-time">
                {item.start}
              </div>

              <div className="timeline-line">
                <div className="dot" />
              </div>

              <div className="timeline-title">
                {item.title}
              </div>

            </div>
          );

        })}

      </div>

    </main>
  );

}
import "./Schedule.css";

import schedule from "../../data/schedule.json";
import config from "../../data/config.json";
import type { ScheduleItem } from "../../types/schedule";

function toMinutes(value: string): number {
  const [h, m] = value.split(":").map(Number);
  return h * 60 + m;
}

export default function Schedule() {

  const now = new Date();

  const currentMinutes =
    now.getHours() * 60 + now.getMinutes();

  const items = schedule as ScheduleItem[];

  const currentItem = items.find(item => {
    const start = toMinutes(item.start);
    const end = toMinutes(item.end);

    return (
      currentMinutes >= start &&
      currentMinutes < end
    );
  });

  const nextItem = items.find(
    item => toMinutes(item.start) > currentMinutes
  );

  const remainingMinutes = currentItem
    ? toMinutes(currentItem.end) - currentMinutes
    : null;

  return (

    <main className="schedule">

      <h1 className="schedule-title">
        {config.title}
      </h1>

      {currentItem ? (
<div className="next-event">

    <div className="next-label">
        現在の予定
    </div>

    <div className="next-title">
        {currentItem.title}
    </div>

    <div className="next-time">
        あと {remainingMinutes} 分
    </div>

</div>

      ) : nextItem ? (
<div className="next-event">

    <div className="next-label">
        次の予定
    </div>

    <div className="next-title">
        {nextItem.start}　{nextItem.title}
    </div>

</div>

      ) : (

        <div className="next-event">

          <strong>本日の予定は終了しました</strong>

        </div>

      )}

      <div className="timeline">

        {items.map(item => {

          const start = toMinutes(item.start);
          const end = toMinutes(item.end);

          const current =
            currentMinutes >= start &&
            currentMinutes < end;

          const finished =
            currentMinutes >= end;

          return (

            <article
              key={item.start}
              className={
                `timeline-item
                ${current ? " current" : ""}
                ${finished ? " finished" : ""}`
              }
            >

              <div className="timeline-time">
                {item.start}
              </div>

              <div className="timeline-marker">

                <div className="line" />

                <div className="dot" />

              </div>

              <div className="timeline-card">

                <h2>
                  {item.title}
                </h2>

                <p>
                  {item.start}〜{item.end}
                </p>

                {current && (

                  <p>

                    残り {remainingMinutes} 分

                  </p>

                )}

              </div>

              {current && (

                <span className="current-badge">

                  進行中

                </span>

              )}

            </article>

          );

        })}

      </div>

    </main>

  );

}
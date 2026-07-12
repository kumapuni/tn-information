import "./Schedule.css";
import { getTodaySchedule } from "../../utils/schedule";
import config from "../../data/config.json";
import {
  toMinutes,
  currentMinutes
} from "../../utils/time";

export default function Schedule() {

  const nowMinutes = currentMinutes();

  const items = getTodaySchedule();

  const currentItem = items.find(item => {
    const start = toMinutes(item.start);
    const end = toMinutes(item.end);

    return (
      nowMinutes >= start &&
      nowMinutes < end
    );
  });

  const nextItem = items.find(
    item => toMinutes(item.start) > nowMinutes
  );

  const remainingMinutes = currentItem
    ? toMinutes(currentItem.end) - nowMinutes
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
            nowMinutes >= start &&
            nowMinutes < end;

          const finished =
            nowMinutes >= end;

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
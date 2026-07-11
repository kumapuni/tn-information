type ScheduleItem = {
  time: string;
  title: string;
  current?: boolean;
};

const schedule: ScheduleItem[] = [
  { time: "08:30", title: "朝礼" },
  { time: "10:00", title: "職員会議" },
  {
    time: "13:00",
    title: "保護者会",
    current: true,
  },
];

export default function Schedule() {
  return (
    <main className="main">
      <h1>今日の予定</h1>

      <div className="timeline">
        {schedule.map((item) => (
          <div
            className={
              item.current
                ? "timeline-item current"
                : "timeline-item"
            }
            key={item.time}
          >
            <div className="timeline-time">
              {item.time}
            </div>

            <div className="timeline-line">
              <div className="dot" />
            </div>

            <div className="timeline-title">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
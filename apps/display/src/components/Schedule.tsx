type ScheduleItem = {
  time: string;
  title: string;
};

const schedule: ScheduleItem[] = [
  { time: "08:30", title: "朝礼" },
  { time: "10:00", title: "職員会議" },
  { time: "13:00", title: "保護者会" },
];

export default function Schedule() {
  return (
    <main className="main">
      <h1>今日の予定</h1>

      <div className="schedule">
        {schedule.map((item) => (
          <div className="schedule-item" key={item.time}>
            <span className="time">{item.time}</span>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
import { useEffect, useState } from "react";
import "./App.css";

const schedule = [
  { time: "08:30", title: "朝礼" },
  { time: "10:00", title: "職員会議" },
  { time: "13:00", title: "保護者会" },
];

function App() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const date = now.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  const time = now.toLocaleTimeString("ja-JP", {
    hour12: false,
  });

  return (
    <div className="app">
      <header className="header">
        <div className="date">{date}</div>
        <div className="clock">{time}</div>
      </header>

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

      <footer className="footer">
        本日は体育館を17:00で閉館します
      </footer>
    </div>
  );
}

export default App;
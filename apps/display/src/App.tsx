import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

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
      <header>
        <div className="date">{date}</div>
        <div className="clock">{time}</div>
      </header>

      <main>
        <h1>今日の予定</h1>

        <div className="placeholder">
          （次回から予定を表示します）
        </div>
      </main>

      <footer>
        TN Information System
      </footer>
    </div>
  );
}

export default App;
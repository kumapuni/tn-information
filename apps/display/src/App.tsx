import { useEffect, useState } from "react";
import "./App.css";

import config from "./data/config.json";

import StandardLayout from "./layouts/StandardLayout";
import EntranceLayout from "./layouts/EntranceLayout";

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

  switch (config.layout) {

    case "entrance":
      return (
        <EntranceLayout
          date={date}
          time={time}
        />
      );

    default:
      return (
        <StandardLayout
          date={date}
          time={time}
        />
      );
  }
}

export default App;
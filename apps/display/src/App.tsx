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
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const props = {
    date,
    time,
  };

  switch (config.layout) {
    case "entrance":
      return <EntranceLayout {...props} />;

    default:
      return <StandardLayout {...props} />;
  }
}

export default App;
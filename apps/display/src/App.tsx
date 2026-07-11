import { useEffect, useState } from "react";

import "./App.css";

import Header from "./components/Header";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";

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
      <Header date={date} time={time} />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;
import "./Header.css";
import { useEffect, useState } from "react";

import config from "../../data/config.json";

import Clock from "../Clock/Clock";
import DateDisplay from "../Date/Date";

export default function Header() {

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

    <header className="header">

      <div className="header-left">

        <div className="school-name">
          {config.schoolName}
        </div>

      </div>

      <div className="header-right">

        <DateDisplay date={date} />
        <Clock time={time} />

      </div>

    </header>

  );

}
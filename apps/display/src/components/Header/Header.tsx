import "./Header.css";

import config from "../../data/config.json";

import Clock from "../Clock/Clock";
import DateDisplay from "../Date/Date";

type HeaderProps = {
  date: string;
  time: string;
};

export default function Header({
  date,
  time,
}: HeaderProps) {
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
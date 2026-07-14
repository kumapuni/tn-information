import { getDaySchedule } from "@shared/utils/schedule";

import type {
  ScheduleMode,
  ScheduleDay,
} from "@shared/utils/schedule";

import { useState } from "react";

import "./Schedules.css";

export default function Schedules() {

const [mode, setMode] =
  useState<ScheduleMode>("normal");

const [day, setDay] =
  useState<ScheduleDay>("monday");

  const schedule = getDaySchedule(
  mode,
  day
);

  return (

    <>

      <h1>Schedules</h1>

      <div className="mode-selector">

        <button onClick={() => setMode("normal")}>
          通常日課
        </button>

        <button onClick={() => setMode("short")}>
          短縮日課
        </button>

        <button onClick={() => setMode("exam")}>
          試験日課
        </button>

      </div>

      <div className="day-selector">

        <button onClick={() => setDay("monday")}>月</button>

        <button onClick={() => setDay("tuesday")}>火</button>

        <button onClick={() => setDay("wednesday")}>水</button>

        <button onClick={() => setDay("thursday")}>木</button>

        <button onClick={() => setDay("friday")}>金</button>

        <button onClick={() => setDay("saturday")}>土</button>

      </div>

      <table className="schedule-table">

        <thead>

          <tr>

            <th>開始</th>

            <th>終了</th>

            <th>予定</th>

            <th>操作</th>

          </tr>

        </thead>

        <tbody>

          {schedule.map((item, index) => (

            <tr key={index}>

              <td>{item.start}</td>

              <td>{item.end}</td>

              <td>{item.title}</td>

              <td>

                <button>✏️</button>

                <button>🗑️</button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <div className="table-actions">

        <button className="add-button">

          ＋予定を追加

        </button>

      </div>

    </>

  );

}
import "./Dashboard.css";
import { useState } from "react";

type ScheduleItem = {
  start: string;
  end: string;
  title: string;
};

const sample: ScheduleItem[] = [
  {
    start: "08:30",
    end: "09:00",
    title: "朝礼",
  },
  {
    start: "10:00",
    end: "11:00",
    title: "職員会議",
  },
  {
    start: "13:00",
    end: "14:30",
    title: "保護者会",
  },
];

export default function Schedules() {

  const [day, setDay] =
    useState("monday");

  return (

    <>

      <h2>予定管理</h2>

      <div className="toolbar">

        <label>

          曜日

          <select
            value={day}
            onChange={(e) =>
              setDay(e.target.value)
            }
          >

            <option value="monday">月曜日</option>

            <option value="tuesday">火曜日</option>

            <option value="wednesday">水曜日</option>

            <option value="thursday">木曜日</option>

            <option value="friday">金曜日</option>

            <option value="saturday">土曜日</option>

          </select>

        </label>

        <button className="primary">

          ＋予定を追加

        </button>

      </div>

      <table className="schedule-table">

        <thead>

          <tr>

            <th>開始</th>

            <th>終了</th>

            <th>予定</th>

            <th></th>

          </tr>

        </thead>

        <tbody>

          {sample.map((item) => (

            <tr key={item.start}>

              <td>{item.start}</td>

              <td>{item.end}</td>

              <td>{item.title}</td>

              <td>

                <button>編集</button>

                <button>削除</button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </>

  );

}
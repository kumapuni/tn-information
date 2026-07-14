import { getDaySchedule } from "@shared/utils/schedule";

import type {
  ScheduleMode,
  ScheduleDay,
} from "@shared/utils/schedule";

import { useEffect, useState } from "react";

import "./Schedules.css";

export default function Schedules() {

const [mode, setMode] =
  useState<ScheduleMode>("normal");

const [day, setDay] =
  useState<ScheduleDay>("monday");

const [editingIndex, setEditingIndex] =
  useState<number | null>(null);

const [isAdding, setIsAdding] =
  useState(false);

const [editItem, setEditItem] =
  useState({
    start: "",
    end: "",
    title: "",
  });
function openEditor(index: number) {

  setEditingIndex(index);

  setEditItem(schedule[index]);

}
const [schedule, setSchedule] =
  useState(getDaySchedule(mode, day));
  useEffect(() => {

  setSchedule(
    getDaySchedule(mode, day)
  );

}, [mode, day]);
function saveEdit() {


  const next = [...schedule];

  if (isAdding) {

    next.push(editItem);

  } else if (editingIndex !== null) {

    next[editingIndex] = editItem;

  }

  next.sort((a, b) =>
    a.start.localeCompare(b.start)
  );

  setSchedule(next);

  setEditingIndex(null);

  setIsAdding(false);

}
function deleteItem(index: number) {

  if (!confirm("この予定を削除しますか？")) {
    return;
  }

  const next = [...schedule];

  next.splice(index, 1);

  setSchedule(next);

}

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

  {schedule.length === 0 ? (

    <tr>

      <td
        colSpan={4}
        className="empty"
      >
        予定がありません
      </td>

    </tr>

  ) : (

    schedule.map((item, index) => (

      <tr key={index}>

        <td>{item.start}</td>

        <td>{item.end}</td>

        <td>{item.title}</td>

        <td>

          <button
            onClick={() => openEditor(index)}
          >
            ✏️
          </button>

          <button
            onClick={() => deleteItem(index)}
          >
            🗑️
          </button>

        </td>

      </tr>

    ))

  )}

</tbody>

      </table>

      <div className="table-actions">

       <button
  className="add-button"
  onClick={() => {

    setEditItem({
      start: "",
      end: "",
      title: "",
    });

    setIsAdding(true);

    setEditingIndex(null);

  }}
>

  ＋予定を追加

</button>

      </div>
      {(editingIndex !== null || isAdding) && (

<div className="modal-overlay">

  <div className="modal">

    <h2>予定編集</h2>

    <label>

      開始

<input
  value={editItem.start}
  onChange={(e) =>
    setEditItem({
      ...editItem,
      start: e.target.value,
    })
  }
/>

    </label>

    <label>

      終了

<input
  value={editItem.end}
  onChange={(e) =>
    setEditItem({
      ...editItem,
      end: e.target.value,
    })
  }
/>

    </label>

    <label>

      タイトル

 <input
  value={editItem.title}
  onChange={(e) =>
    setEditItem({
      ...editItem,
      title: e.target.value,
    })
  }
/>

    </label>

    <div className="modal-buttons">

<button
  onClick={saveEdit}
>

保存

</button>

      <button
        onClick={() => {

  setEditingIndex(null);

  setIsAdding(false);

}}
      >

        キャンセル

      </button>

    </div>

  </div>

</div>

)}
    </>

  );

}
import "./Dashboard.css";
import { useEffect, useState } from "react";

import {

  getDashboardStatus,

} from "../utils/dashboard";
export default function Dashboard() {

  const status = getDashboardStatus();
  const [now, setNow] = useState(new Date());

  useEffect(() => {

  const timer = setInterval(() => {

    setNow(new Date());

  }, 1000);

  return () => clearInterval(timer);

}, []);
  return (

    <>

      <h1>Dashboard</h1>
      <p className="dashboard-time">

    {now.toLocaleDateString("ja-JP")}

    {" "}

    {now.toLocaleTimeString("ja-JP")}

</p>
      <div className="cards">

        <div className="card">
          <h2>Display</h2>
          <p>
          {status.displayOnline ? "🟢 Online" : "🔴 Offline"}
          </p>
        </div>

        <div className="card">
          <h2>現在の日課</h2>
          <p>
          {status.currentMode}
          </p>
        </div>

        <div className="card">
          <h2>現在の予定</h2>
          <p>
          {status.currentSchedule}
          </p>
        </div>

        <div className="card">
          <h2>表示端末</h2>
          <p>
          {status.connectedClients} 台接続
          </p>
        </div>

        <div className="card">

        <h2>Display</h2>

        <button>

         表示画面を開く

        </button>

</div>
      </div>

    </>

  );

}
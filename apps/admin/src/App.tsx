import { useState } from "react";

import "./App.css";

import Dashboard from "./pages/Dashboard";
import Schedules from "./pages/Schedules";
import Ticker from "./pages/Ticker";
import Settings from "./pages/Settings";
import System from "./pages/System";

type Page =
  | "dashboard"
  | "schedules"
  | "ticker"
  | "settings"
  | "system";

export default function App() {

  const [page, setPage] =
    useState<Page>("dashboard");

  return (

    <div className="layout">

      <aside className="sidebar">

        <h1>TN Information</h1>

        <nav>

          <button
            onClick={() => setPage("dashboard")}
          >
            🏠 Dashboard
          </button>

          <button
            onClick={() => setPage("schedules")}
          >
            📅 Schedules
          </button>

          <button
            onClick={() => setPage("ticker")}
          >
            📢 Ticker
          </button>

          <button
            onClick={() => setPage("settings")}
          >
            🏫 Settings
          </button>

          <button
            onClick={() => setPage("system")}
          >
            ⚙ System
          </button>

        </nav>

      </aside>

      <main className="content">

        {page === "dashboard" && <Dashboard />}

        {page === "schedules" && <Schedules />}

        {page === "ticker" && <Ticker />}

        {page === "settings" && <Settings />}

        {page === "system" && <System />}

      </main>

    </div>

  );

}
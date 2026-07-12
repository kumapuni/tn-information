import Header from "./components/Header/Header";
import Schedule from "./components/Schedule/Schedule";
import Ticker from "./components/Ticker/Ticker";

import "./App.css";

export default function App() {

  return (

    <div className="app">

      <Header />

      <main className="app-main">

        <Schedule />

      </main>

      <Ticker />

    </div>

  );

}
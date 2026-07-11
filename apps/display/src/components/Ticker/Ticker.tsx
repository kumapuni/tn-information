import ticker from "../../data/ticker.json";

export default function Ticker() {

  const message = ticker.join("　　　◆　　　");

  return (
    <div className="ticker">

      <div className="ticker-track">

        <span>{message}</span>

        <span>{message}</span>

      </div>

    </div>
  );
}
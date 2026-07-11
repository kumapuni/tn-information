import ticker from "../data/ticker.json";

export default function Footer() {
  const message = ticker.join("　◆　");

  return (
    <footer className="footer">
      <div className="ticker">
        <div className="ticker-track">
          <span>{message}</span>
          <span>{message}</span>
        </div>
      </div>
    </footer>
  );
}
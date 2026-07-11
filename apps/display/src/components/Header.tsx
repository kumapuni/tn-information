type HeaderProps = {
  date: string;
  time: string;
};

export default function Header({ date, time }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-right">
        <div className="date">{date}</div>
        <div className="clock">{time}</div>
      </div>
    </header>
  );
}
type ClockProps = {
  time: string;
};

export default function Clock({ time }: ClockProps) {
  return (
    <div className="clock">
      {time}
    </div>
  );
}
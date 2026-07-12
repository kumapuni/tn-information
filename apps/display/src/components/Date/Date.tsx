type DateProps = {
  date: string;
};

export default function DateDisplay({ date }: DateProps) {
  return <div className="date">{date}</div>;
}
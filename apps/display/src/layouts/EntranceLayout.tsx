import Header from "../components/Header";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";

type Props = {
  date: string;
  time: string;
};

export default function EntranceLayout({
  date,
  time,
}: Props) {
  return (
    <div className="app entrance-layout">

      <Header date={date} time={time} />

      <Schedule />

      <Footer />

    </div>
  );
}
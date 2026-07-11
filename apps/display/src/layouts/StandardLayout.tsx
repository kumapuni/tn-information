import Header from "../components/Header";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";

type Props = {
  date: string;
  time: string;
};

export default function StandardLayout({ date, time }: Props) {
  return (
    <div className="app">
      <Header date={date} time={time} />
      <Schedule />
      <Footer />
    </div>
  );
}
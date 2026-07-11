import Header from "../components/Header/Header";
import Schedule from "../components/Schedule/Schedule";
import Footer from "../components/Footer/Footer";

type Props = {
  date: string;
  time: string;
};

export default function StandardLayout({
  date,
  time,
}: Props) {
  return (
    <div className="app">

      <Header
        date={date}
        time={time}
      />

      <main className="main">

        <Schedule />

      </main>

      <Footer />

    </div>
  );
}
import navStyles from "../styles/nav.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "./nav";
import homeStyles from "../styles/home.module.css";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className={homeStyles.top}>
        {" "}
        <div className={homeStyles.heading}>
          <h1 className={homeStyles.title}>BudgetBooster</h1>
          <div className={homeStyles.images}>
            <Image
              src="/images/statistics-cyan.png"
              className={homeStyles.headingimage}
              height={100}
              width={100}
              alt=""
            />
            <Image
              src="/images/statistics-red.png"
              className={homeStyles.headingimage}
              height={100}
              width={100}
              alt=""
            />
            <Image
              src="/images/statistics-green.png"
              className={homeStyles.headingimage}
              height={100}
              width={100}
              alt=""
            />
          </div>
        </div>
        <div className={homeStyles.circle}>
          <Image
            src="/images/money-circle.png"
            className={homeStyles.money}
            height={500}
            width={500}
            alt=""
          />
        </div>
      </div>
      <div className={homeStyles.infoText}>
        BudgetBooster ist ein Spiel bei dem sie lernen,ihr Geld clever zu
        verwenden. Spieler übernehmen die Rolle eines Jugendlichen und müssen
        Entscheidungen über Einkäufe und Ausgaben treffen,um ihr Budget zu
        optimieren.
      </div>
      <div className={homeStyles.insights}>
        <h2 className={homeStyles.title}>Einblicke</h2>
      </div>
    </div>
  );
}

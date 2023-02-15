import Link from "next/link";
import Image from "next/image";
import Nav from "../components/nav";
import homeStyles from "../styles/home.module.css";
import OwnFooter from "../components/ownFooter";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className={homeStyles.top}>
        {" "}
        <div className={homeStyles.heading}>
          <h1 className={homeStyles.titleTop}>Budget</h1>
          <h1 className={homeStyles.titleTop}>Booster</h1>
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
      </div>
      <div className={homeStyles.infoText}>
        BudgetBooster ist ein Spiel bei dem sie lernen,ihr Geld clever zu
        verwenden. Spieler übernehmen die Rolle eines Jugendlichen und müssen
        Entscheidungen über Einkäufe und Ausgaben treffen,um ihr Budget zu
        optimieren.
      </div>
      <div className={homeStyles.play}>
        <h2 className={homeStyles.title}>Spielen</h2>
        <div className={homeStyles.infoText}>
          Verbesser deine Fähigkeiten im Umgang mit Geld und lerne, wie du
          sinnlose Ausgaben vermeidest. Starte jetzt das Spiel und werde ein Pro
          im Verwalten deiner Finanzen!
        </div>
        <div className={homeStyles.playbuttonparent}>
          <Link className={homeStyles.playbutton} href={"./game"}>
            Play
          </Link>
          <Image
            src="/images/moneybutton1.png"
            className={
              homeStyles.playbuttonicon + " " + homeStyles.playbuttonicon1
            }
            height={48}
            width={48}
            alt=""
          />
          <Image
            src="/images/moneybutton2.png"
            className={
              homeStyles.playbuttonicon + " " + homeStyles.playbuttonicon2
            }
            height={48}
            width={48}
            alt=""
          />
          <Image
            src="/images/moneybutton3.png"
            className={
              homeStyles.playbuttonicon + " " + homeStyles.playbuttonicon3
            }
            height={48}
            width={48}
            alt=""
          />
        </div>
      </div>
      <div className={homeStyles.insights}>
        <h2 className={homeStyles.title}>Einblicke</h2>
      </div>
      <OwnFooter></OwnFooter>
    </div>
  );
}

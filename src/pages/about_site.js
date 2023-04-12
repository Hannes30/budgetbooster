import homeStyles from "../styles/home.module.css";
import aboutStyles from "../styles/about.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "../components/nav";
import OwnFooter from "../components/ownFooter";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className={aboutStyles.heading}>
        <h1 className={aboutStyles.title}>Budget</h1>
        <h1 className={aboutStyles.title}>Booster</h1>
      </div>
      <div className={aboutStyles.headingdecoration}>
        <Image
          src="/images/money-circle.png"
          className={aboutStyles.headingimage1}
          height={100}
          width={100}
          alt=""
        />
        <Image
          src="/images/moneybutton1.png"
          className={aboutStyles.headingimage2}
          height={100}
          width={100}
          alt=""
        />
        <Image
          src="/images/moneybutton2.png"
          className={aboutStyles.headingimage3}
          height={100}
          width={100}
          alt=""
        />
        <Image
          src="/images/moneybutton3.png"
          className={aboutStyles.headingimage4}
          height={100}
          width={100}
          alt=""
        />
      </div>
      <div className={aboutStyles.spacer}></div>
      <div className={homeStyles.infoText}>
        BudgetBooster ist ein Spiel bei dem sie lernen,ihr Geld clever zu
        verwenden. Spieler übernehmen die Rolle eines Jugendlichen und müssen
        Entscheidungen über Einkäufe und Ausgaben treffen,um ihr Budget zu
        optimieren.
      </div>
      <div className={aboutStyles.emergence}>
        <h2 className={aboutStyles.emergenceHeading}>Entstehung</h2>
        <div className={homeStyles.infoText + " " + aboutStyles.emergenceText}>
          Ich, Hannes Scheibelauer, bin ein 17-jähriger Schüler an der IT-HTL
          Ybbs und habe das BudgetBooster-Spiel im Rahmen eines Projekts
          entwickelt. Als jemand, der sowohl eine Leidenschaft für Technologie
          als auch für Finanzen hat, bietet das Spiel eine unterhaltsame
          Möglichkeit, Finanzkonzepte zu erlernen. Mein Ziel war es, eine
          einzigartige Ressource zu schaffen, die Jugendliche dabei unterstützt,
          ihr Sparvehalten zu verbessern und gleichzeitig Spaß zu haben.
        </div>
      </div>

      <OwnFooter></OwnFooter>
    </div>
  );
}

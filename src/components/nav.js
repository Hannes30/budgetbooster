import navStyles from "../styles/nav.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <div className={navStyles.nav}>
      <h1 className={navStyles.title}>BudgetBooster</h1>
      <div className={navStyles.items}>
        <div className={navStyles.item}>
          <Link className={navStyles.a} href={"./"}>
            <Image
              src="/images/home.png"
              className={navStyles.icon}
              height={16}
              width={16}
              alt=""
            />
            Home
          </Link>
        </div>
        <div className={navStyles.item}>
          <Link className={navStyles.a} href={"./game"}>
            <Image
              src="/images/controller.png"
              className={navStyles.icon}
              height={14}
              width={20}
              alt=""
            />
            Spielen
          </Link>
        </div>
        <div className={navStyles.item}>
          <Link className={navStyles.a} href={"./about_site"}>
            <Image
              src="/images/info.png"
              className={navStyles.icon}
              height={16}
              width={16}
              alt=""
            />
            Info
          </Link>
        </div>
      </div>
    </div>
  );
}

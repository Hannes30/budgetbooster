import footerStyles from "../styles/footer.module.css";
import navStyles from "../styles/nav.module.css";
import Link from "next/link";
import Image from "next/image";

export default function OwnFooter() {
  return (
    <div className={footerStyles.main}>
      <Link href={"https://hannes-scheibelauer.de/"} className={navStyles.a}>
        2023 © Hannes Scheibelauer
      </Link>
    </div>
  );
}

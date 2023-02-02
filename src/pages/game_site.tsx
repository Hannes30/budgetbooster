import navStyles from "../styles/nav.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "./nav";
import OwnFooter from "./ownFooter";

export default function Home() {
  return (
    <div>
      <Nav />
      game
      <OwnFooter></OwnFooter>
    </div>
  );
}

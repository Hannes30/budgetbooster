import navStyles from "../styles/nav.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "../components/nav";
import OwnFooter from "../components/ownFooter";
import Questions from "../components/questions";

export default function Home() {
  return (
    <div>
      <Nav />
      <Questions></Questions>
    </div>
  );
}

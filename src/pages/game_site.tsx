import navStyles from "../styles/nav.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "./nav";
import OwnFooter from "./ownFooter";
import Questions from "./questions";

export default function Home() {
  return (
    <div>
      <Nav />
      <Questions></Questions>
      
    </div>
  );
}

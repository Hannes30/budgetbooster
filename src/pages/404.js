import fourofourStyles from "../styles/404.module.css";
import Link from "next/link";

function Custom404() {
  return (
    <div className={fourofourStyles.center}>
      <h1>404 - Page Not Found</h1>
      <Link className={fourofourStyles.a} href={"./"}>
        Home
      </Link>
    </div>
  );
}
export default Custom404;

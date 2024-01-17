import { Link } from "react-router-dom";
import logotype from "./svg/logotype.svg";
import "./css/style.css";
import "@/shared/styles/styles.css";


export const Header = () => {
  return (
    <header className={`container headerContainer`}>
      <img src={logotype} alt="" />
      <span className="headerLinkContainer">
        <Link to={"blog"} className="headerLink">Блог</Link>
        <Link to={"work"} className="headerLink">Работы</Link>
      </span>
    </header>
  )
}

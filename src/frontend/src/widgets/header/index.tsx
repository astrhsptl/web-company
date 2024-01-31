import { Link } from "react-router-dom";
import logotype from "./svg/logotype.svg";
import burger from "./svg/burger.svg";
import "./css/style.css";
import "@/shared/styles/styles.css";
import { observer } from "mobx-react-lite";
import { ModalStatementHandler } from "@/entities";
import { BurgerModal } from "./BurgerModal/BurgerModal";


const modalStatement = new ModalStatementHandler();


export const Header = observer(() => {

  return ( 
    <header className={`header`}>
      <div className="headerPosition">
        <Link to={"/"}>
          <img src={logotype} className="linkLogo" alt="" />
        </Link>
        <span className="headerLinkContainer">
          <Link to={"/blog"} className="headerLink">Блог</Link>
          <Link to={"/work"} className="headerLink">Работы</Link>
          <Link to={"/service"} className="headerLink">Услуги</Link>
          <Link to={"/ticket/new"} className="headerLink">Оставить заявку</Link>
        </span>
        <img src={burger} alt="" className="burgerMenu__icon burgerHide" onClick={() => modalStatement.switchState()}/>
        <BurgerModal showed={modalStatement.showing} closeModal={modalStatement.close} />
      </div>
    </header>
  )
});
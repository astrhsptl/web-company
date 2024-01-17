import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import logotype from "..//svg/logotype.svg";

interface ModalProps{
    showed: boolean;
}


export const BurgerModal: React.FC<ModalProps> = observer(({ showed }) => {
  
  return (
    <span className={`burgerLinkContainer ${ !showed ? "modalHidden" : ""}`}>
        <Link to={"/"} className="homeLink-modal">
          <img src={logotype} className="linkLogo" alt="" />
        </Link>
        <div className="modal-link-container">
          <Link to={"/blog"} className="headerLink">Блог</Link>
          <Link to={"/work"} className="headerLink">Работы</Link>
          <Link to={"/service"} className="headerLink">Услуги</Link>
          <Link to={"/ticket/new"} className="headerLink">Оставить заявку</Link>
        </div>
    </span>
  )
});

import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import logotype from "..//svg/logotype.svg";

interface ModalProps{
  showed: boolean;
  closeModal(): void; 
}

export const BurgerModal: React.FC<ModalProps> = observer(({ showed, closeModal }) => {
  
  return (
    <span className={
      `burgerLinkContainer ${showed ? "modalActive" : ""}`}>
        <Link to={"/"} className="homeLink-modal" onClick={() => closeModal()}>
          <img src={logotype} className="linkLogo" alt="" />
        </Link>
        <div className="modal-link-container">
          <Link to={"/blog"} className="headerLink" onClick={() => closeModal()}>Блог</Link>
          <Link to={"/work"} className="headerLink" onClick={() => closeModal()}>Работы</Link>
          <Link to={"/service"} className="headerLink" onClick={() => closeModal()}>Услуги</Link>
          <Link to={"/ticket/new"} className="headerLink" onClick={() => closeModal()}>Оставить заявку</Link>
        </div>
    </span>
  )
});

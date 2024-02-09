import logotype from "@/widgets/header/svg/logotype.svg";
import "./styles/style.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <section className="navigation-footer-section">
          <img src={logotype} alt="" className="logotype" />
          <ul className="link-block">
            <li>
              <Link to={"/"} className="navigation-footer-link">
                Домашнаяя страница
              </Link>
            </li>
            <li>
              <Link to={"/"} className="navigation-footer-link">
                Блог
              </Link>
            </li>
            <li>
              <Link to={"/"} className="navigation-footer-link">
                Работы
              </Link>
            </li>
            <li>
              <Link to={"/"} className="navigation-footer-link">
                Услуги
              </Link>
            </li>
            <li>
              <Link to={"/"} className="navigation-footer-link">
                Оставить заявку
              </Link>
            </li>
          </ul>
        </section>
        <section className="work-section">
          <p className="create-ticket-footer">Хотите работать с нами?</p>
          <button className="give-ticket-button">Оставьте заявку</button>
        </section>
      </div>
    </footer>
  );
};

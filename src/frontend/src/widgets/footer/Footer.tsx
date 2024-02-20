import logotype from "@/widgets/header/svg/logotype.svg";
import { Link, useNavigate } from "react-router-dom";
import "./styles/style.css";

export const Footer = () => {
  const navigate = useNavigate();
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
              <Link to={"/blog/"} className="navigation-footer-link">
                Блог
              </Link>
            </li>
            <li>
              <Link to={"/work/"} className="navigation-footer-link">
                Работы
              </Link>
            </li>
            <li>
              <Link to={"/service/"} className="navigation-footer-link">
                Услуги
              </Link>
            </li>
            <li>
              <Link to={"/ticket/new/"} className="navigation-footer-link">
                Оставить заявку
              </Link>
            </li>
          </ul>
        </section>
        <section className="work-section">
          <p className="create-ticket-footer">Хотите работать с нами?</p>
          <button
            className="give-ticket-button"
            onClick={() => navigate("/ticket/new/")}
          >
            Оставьте заявку
          </button>
        </section>
      </div>
    </footer>
  );
};

import { Link } from "react-router-dom";

export const FeedbackRedirect = () => {
  return (
    <div className="fp-redirect container">
      <div className="fp-asking">Мы спрашиваем "Почему?", а не "Что?"</div>
      <div className="fp-description">
        <p className="description-text">
          Для построения долгосрочной работы с клиентом мы пользуемся принципом
          "задавай вопрос "Почему?", а не "Что?""
        </p>
        <Link to={"/ticket/new"}>
          <button className="fp-button">Свяжитесь с нами</button>
        </Link>
      </div>
    </div>
  );
};

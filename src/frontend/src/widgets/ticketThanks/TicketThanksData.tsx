import { useNavigate } from "react-router-dom";
import "./styles/style.css";

export const TicketThanksData = () => {
  const navigate = useNavigate();

  return (
    <div className="ticket-thanks-container">
      <p className="ticket-thanks-text">
        Спасибо, что выбрали нашу компанию, наш менеджер скоро свяжется по
        поводу Вашей заявки
      </p>
      <button
        className="button__classic ticket-thanks-button"
        onClick={() => navigate("/")}
      >
        Перейти на главную страницу
      </button>
    </div>
  );
};

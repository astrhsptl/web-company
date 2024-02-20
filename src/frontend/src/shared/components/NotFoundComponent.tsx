import { useNavigate } from "react-router-dom";
import "./styles/not-found.css";

export const NotFoundComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="container__not-found">
      <p>Ууууууп-с... ничего не нашлось{"(((("}</p>
      <button className="button__classic" onClick={() => navigate("/")}>
        На главную
      </button>
    </div>
  );
};

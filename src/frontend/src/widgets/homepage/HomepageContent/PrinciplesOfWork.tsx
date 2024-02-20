import buildPrinciple from "../images/build.webp";
import envisionPrinciple from "../images/eye.webp";
import thinkPrinciple from "../images/lamp.webp";

export const PrinciplesOfWork = () => {
  return (
    <div className="work-principles-container">
      <div className="principle">
        <img src={thinkPrinciple} alt="" className="image-principle" />
        <p className="title-principle">МЫ ДУМАЕМ ВМЕСТЕ С ВАМИ</p>
        <p className="description-principle">
          Инновационная стратегия Стратегия цифрового продукта Технологическая
          архитектура Информационная архитектура
        </p>
      </div>
      <div className="principle">
        <img src={envisionPrinciple} alt="" className="image-principle" />
        <p className="title-principle">МЫ ПРЕДСТАВЛЯЕМ ВМЕСТЕ С ВАМИ</p>
        <p className="description-principle">
          Дизайн цифрового продукта Исследования и дизайн UX Дизайн веб-сайта
          Дизайн фирменного стиля
        </p>
      </div>
      <div className="principle principle__border-blocked">
        <img src={buildPrinciple} alt="" className="image-principle" />
        <p className="title-principle">МЫ СОЗДАЕМ ВМЕСТЕ С ВАМИ</p>
        <p className="description-principle">
          Разработка веб-приложений Разработка Magento Разработка Wordpress
          Разработка мобильных приложений
        </p>
      </div>
    </div>
  );
};

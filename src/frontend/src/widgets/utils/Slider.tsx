import { FileInterface } from "@/shared/interfaces";
import { FC, useEffect, useState } from "react";
import { Dot } from "./Dot";
import "./css/slider.css";

interface SliderProps {
  slides: FileInterface[];
}

export const Slider: FC<SliderProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const sliding = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const intervalID = setInterval(() => sliding(), 5000);
    return () => clearInterval(intervalID);
  });

  return (
    <section className="slider">
      {slides.map((slide, index) =>
        index === current ? (
          <div className="slide" key={index}>
            <div
              className="swiper swiper__left"
              onTouchStart={() => {
                setCurrent(current === 0 ? length - 1 : current - 1);
              }}
            ></div>
            <div
              className="swiper swiper__right"
              onTouchStart={() => {
                setCurrent(current === length - 1 ? 0 : current + 1);
              }}
            ></div>
            <img src={slide.file} alt="travel image" className="image" />
          </div>
        ) : (
          ""
        ),
      )}
      <div className="dot-container">
        {slides.map((_, index) => (
          <Dot
            key={index}
            index={index}
            setSlide={setCurrent}
            current={current}
          />
        ))}
      </div>
    </section>
  );
};

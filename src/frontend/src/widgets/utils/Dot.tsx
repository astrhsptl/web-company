import { FC } from "react";

interface DotProps {
  index: number;
  current: number;
  setSlide(x: number | CallableFunction): void;
}

export const Dot: FC<DotProps> = ({ setSlide, index, current }) => {
  return (
    <div
      className={`dot__circle ${index == current ? "dot__circle__current" : ""}`}
      onClick={() => setSlide(index)}
    ></div>
  );
};

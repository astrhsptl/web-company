import { FileInterface } from "@/shared/interfaces";
import { FC } from "react";
import { Slider } from "../utils";

interface DescriptionSideProps {
  images: FileInterface[];
  description: string;
}

export const WorkDescriptionSide: FC<DescriptionSideProps> = ({
  images,
  description,
}) => {
  return (
    <div>
      <div className="carousel__container">
        <Slider slides={images} />
      </div>
      <p className="work-description__certain">{description}</p>
    </div>
  );
};

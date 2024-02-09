import { FileInterface } from "@/shared/interfaces";
import { FC } from "react";

interface DescriptionSideProps {
  images: FileInterface[];
  description: string;
}

export const WorkDescriptionSide: FC<DescriptionSideProps> = ({
  images,
  description
}) => {
  return (
    <div>
      <div className="carousel__container">
        {images.map((file) => (
          <img
            key={file.id}
            src={file.file}
            alt="someone"
            className="image__carousel"
          />
        ))}
      </div>
      <p className="work-description__certain">{description}</p>
    </div>
  );
};

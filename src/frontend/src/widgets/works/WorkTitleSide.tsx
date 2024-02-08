import { ProductWork } from "@/shared/interfaces";
import { FC } from "react";
import { Link } from "react-router-dom"


interface TitleSideProps {
  title: string;
  works: ProductWork[];
  link?: string;
}

export const WorkTitleSide: FC<TitleSideProps> = ({ title, works, link }) => {
  
  return (
    <div className="work-side__info">
      <Link to={"/work"} className="link__classic">&laquo; Назад</Link>
      <p className="work-side__info-title">{ title }</p>
      <p className="work-side__info-works">
        { 
          works.map((work, index) => <span key={work.id}>{work.title} {(index !== works.length - 1)?" / ":""}</span>)
        }
      </p>
      <a href={link || "https://github.com/astrhsptl" } target="_blank">
        <button className="button__classic">Ознакомиться с проектом</button>
      </a>
    </div>
  )
}

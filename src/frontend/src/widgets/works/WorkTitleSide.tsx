import { ProductWork } from "@/shared/interfaces";
import { Link } from "react-router-dom"


interface TitleSideProps {
  title: string;
  works: ProductWork[];
  link?: string;
}

export const WorkTitleSide = ({ title, works, link }: TitleSideProps) => {
  return (
    <div>
      <Link to={"/work"}>some</Link>
      <p>{ title }</p>
      <p>{ works.map(work => <div key={work.id}>{ work.title }</div>) }</p>
      <p>{ link }</p>
    </div>
  )
}

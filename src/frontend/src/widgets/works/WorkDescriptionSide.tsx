import { FileInterface } from "@/shared/interfaces"

interface DescriptionSideProps {
  images: FileInterface[];
  description: string;
}


export const WorkDescriptionSide = ({ description, images }: DescriptionSideProps) => {
  return (
    <div>
      <div>image carousel</div>
      <p>description</p>        
    </div>
  )
}

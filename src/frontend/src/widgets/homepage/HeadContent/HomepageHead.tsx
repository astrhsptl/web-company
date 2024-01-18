import { Header } from "@/widgets/header"
import { HeadContent } from "./HeadContent";
import "../styles/homepage.css";


export const HomepageHead = () => {
  return (
    <div className="homepageHead">
      <Header />
      <HeadContent />
    </div>
  )
};
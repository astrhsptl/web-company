import { Header } from "@/widgets/header";
import Footer from "@/widgets/footer";
import { CompactWorkListContent } from "./CompactWorkListContent";
import { Helmet } from "react-helmet";
import "./bases.css";

export const Work = () => {
  return (
    <>
      <Helmet>
        <title>Наши работы | WebLab</title>
      </Helmet>
      <Header />
      <CompactWorkListContent />
      <Footer />
    </>
  );
};

import Footer from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { FeedbackRedirect } from "@/widgets/homepage/HomepageContent/FeedbackRedirect";
import { PrinciplesOfWork } from "@/widgets/homepage/HomepageContent/PrinciplesOfWork";
import { ServiceListContent } from "@/widgets/servicelist";
import { Helmet } from "react-helmet";

export const ServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Услуги | WebLab</title>
      </Helmet>
      <Header />
      <ServiceListContent />
      <PrinciplesOfWork />
      <FeedbackRedirect />
      <Footer />
    </>
  );
};

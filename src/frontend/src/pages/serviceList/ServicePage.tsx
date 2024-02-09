import Footer from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { FeedbackRedirect } from "@/widgets/homepage/HomepageContent/FeedbackRedirect";
import { PrinciplesOfWork } from "@/widgets/homepage/HomepageContent/PrinciplesOfWork";
import { ServiceListContent } from "@/widgets/servicelist";

export const ServicePage = () => {
  return (
    <>
      <Header />
      <ServiceListContent />
      <PrinciplesOfWork />
      <FeedbackRedirect />
      <Footer />
    </>
  );
};

import { Footer } from "@/widgets/footer/Footer";
import { HomepageContent, HomepageHead } from "@/widgets/homepage";
import { Helmet } from "react-helmet";

export const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Homepage | WebLab</title>
      </Helmet>
      <HomepageHead />
      <HomepageContent />
      <Footer />
    </>
  );
};

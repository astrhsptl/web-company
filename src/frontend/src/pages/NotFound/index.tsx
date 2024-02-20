import { NotFoundComponent } from "@/shared/components/NotFoundComponent";
import Footer from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Helmet } from "react-helmet";

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 | Not found | WebLab</title>
      </Helmet>
      <Header />
      <NotFoundComponent />
      <Footer />
    </>
  );
};

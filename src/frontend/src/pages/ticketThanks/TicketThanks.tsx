import Footer from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { TicketThanksData } from "@/widgets/ticketThanks";
import { Helmet } from "react-helmet";

export const TicketThanks = () => {
  return (
    <>
      <Helmet>
        <title>Спасибо за начало работы | WebLab</title>
      </Helmet>
      <Header />
      <TicketThanksData />
      <Footer />
    </>
  );
};

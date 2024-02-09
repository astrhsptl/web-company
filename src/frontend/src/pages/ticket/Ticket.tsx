import Footer from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { TicketCustomerForm } from "@/widgets/ticket";
import { Helmet } from "react-helmet";

export const Ticket = () => {
  return (
    <>
      <Helmet>
        <title>Оставьте заявку | WebLab</title>
      </Helmet>
      <Header />
      <TicketCustomerForm />
      <Footer />
    </>
  );
};

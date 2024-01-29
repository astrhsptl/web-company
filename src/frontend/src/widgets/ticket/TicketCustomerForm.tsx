import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { UserDataFormCard } from "./components/UserDataFormCard";
import { TicketDataFormCard } from "./components/TicketDataFormCard";
import { FileInputTicket } from "./components/FileInputTicket";
import { useState } from "react";
import { TicketInput, sendTicketData } from "./utils/sendTicket";
import { useNavigate } from "react-router-dom";
import "./style/style.css";


export const TicketCustomerForm = () => {
  const methods = useForm<TicketInput>();
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]);

  const onSubmit: SubmitHandler<TicketInput> = async (data) => {
    await sendTicketData(data, files);
    navigate("/ticket/thanks");
  }

  return (
    <div className="ticket-form-container container">
      <h1 className="ticket-form-title">Давайте начнем работу</h1>  
      <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="form-ticket">
        <UserDataFormCard />
        <TicketDataFormCard />
        <FileInputTicket files={files} setFiles={setFiles} />
        <button
          type="submit"
          className="button__classic button-position__custom">
            Отправить
        </button>
      </form>
      </FormProvider>
    </div>
  )
}

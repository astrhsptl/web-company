import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import "./style/style.css";
import { UserDataFormCard } from "./components/UserDataFormCard";
import { TicketDataFormCard } from "./components/TicketDataFormCard";
import { FileInputTicket } from "./components/FileInputTicket";
import { useState } from "react";


interface TicketInput{
  title: string;
  body: string;

  name: string;
  link: string;
  email: string;
  phone: string;
  files?: File[];
}

export const TicketCustomerForm = () => {
  const methods = useForm<TicketInput>();
  const [files, setFiles] = useState<File[]>([]);
  const onSubmit: SubmitHandler<TicketInput> = (data, ...asd) => {
    console.log(data, asd);
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

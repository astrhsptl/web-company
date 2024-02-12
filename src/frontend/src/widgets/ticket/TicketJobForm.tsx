import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AccompanyingWithResume } from "./components/AccompanyingWithResume";
import { CandidateDataForm } from "./components/CandidateDataForm";
import { PositionDataForm } from "./components/PositionDataForm";
import "./style/job.css";
import "./style/style.css";
import { InputJobTicket } from "./utils/JobUtils";

export const TicketJobForm = () => {
  const methods = useForm<InputJobTicket>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<InputJobTicket> = async () => {
    navigate("/ticket/thanks");
  };

  return (
    <div className="ticket-form-container container">
      <h1 className="ticket-form-title">Давайте начнем работу</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="form-ticket">
          <CandidateDataForm />
          <PositionDataForm />
          <AccompanyingWithResume />
          <button
            type="submit"
            className="button__classic button-position__custom"
          >
            Отправить
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

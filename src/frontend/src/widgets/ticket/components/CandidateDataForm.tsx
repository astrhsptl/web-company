import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import { ErrorMessageComponent } from "./ErrorMessageComponent";

export const CandidateDataForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="form-part-ticket">
      <p className="form-title-sub">ФИО</p>
      <div className="input-form-ticket-container">
        <ErrorMessage
          errors={errors}
          name="last_name"
          render={({ message }) => <ErrorMessageComponent message={message} />}
        />
        <input
          {...register("last_name", {
            required: "Ваша фамилия обязательна",
          })}
          placeholder="Фамилия"
          className="text-input__custom-input"
        />
        <ErrorMessage
          errors={errors}
          name="first_name"
          render={({ message }) => <ErrorMessageComponent message={message} />}
        />
        <input
          {...register("first_name", {
            required: "Ваше имя обязательно",
          })}
          placeholder="Имя"
          className="text-input__custom-input"
        />
        <input
          {...register("middle_name")}
          placeholder="Отчество"
          className="text-input__custom-input"
        />
      </div>
    </div>
  );
};

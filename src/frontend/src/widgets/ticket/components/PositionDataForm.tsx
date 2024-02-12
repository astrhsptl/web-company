import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import { ErrorMessageComponent } from "./ErrorMessageComponent";

export const PositionDataForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="form-part-ticket">
      <p className="form-title-sub">Касательно вакансии</p>
      <div className="input-form-ticket-container">
        <ErrorMessage
          errors={errors}
          name="position"
          render={({ message }) => <ErrorMessageComponent message={message} />}
        />
        <input
          {...register("position", {
            required: "Укажите, пожалуйста, позицию",
          })}
          placeholder="Позиция"
          className="text-input__custom-input"
        />
        <input
          {...register("salary_bottom")}
          placeholder="Зарплата от:"
          className="text-input__custom-input"
          type="number"
        />
        <input
          {...register("salary_top")}
          placeholder="Зарплата до:"
          className="text-input__custom-input"
          type="number"
        />
      </div>
    </div>
  );
};

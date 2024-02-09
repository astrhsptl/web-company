import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import { ErrorMessageComponent } from "./ErrorMessageComponent";

export const UserDataFormCard = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const RegexEmailPattern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return (
    <div className="form-part-ticket">
      <p className="form-title-sub">Ваши данные пдля обратной связи</p>
      <div className="input-form-ticket-container">
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <ErrorMessageComponent message={message} />}
        />
        <input
          {...register("name", { required: "Имя компании обязательно" })}
          placeholder="Название компании"
          className="text-input__custom-input"
        />
        <input
          {...register("link")}
          placeholder="Ссылка на компанию"
          className="text-input__custom-input"
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <ErrorMessageComponent message={message} />}
        />
        <input
          {...register("email", {
            required: "Email обязателен",
            pattern: {
              value: RegexEmailPattern,
              message: "Неверный email",
            },
          })}
          placeholder="Email"
          className="text-input__custom-input"
        />
        <input
          {...register("phone")}
          placeholder="Телефон для связи"
          className="text-input__custom-input"
        />
      </div>
    </div>
  );
};

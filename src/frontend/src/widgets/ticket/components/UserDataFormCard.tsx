import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
import { ErrorMessageComponent } from './ErrorMessageComponent';


export const UserDataFormCard = () => {
  const {register, formState: { errors }} = useFormContext();
  const RegexEmailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  return (
    <div className='form-part-ticket'>
    <p className='form-title-sub'>Ваши данные пдля обратной связи</p>
    <div className="input-form-ticket-container">
    <ErrorMessage
        errors={errors} 
        name="name"
        render={({ message }) => <ErrorMessageComponent message={message} />}
    />
    <input
        {...register("name",
        { required: "Имя компании обязательно" }
        )}
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
        {...register("email",
        {
            required: "Email обязателен",
            pattern: {
            value: RegexEmailPattern,
            message: "Неверный email"
            }
        }
        )}
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
  )
}

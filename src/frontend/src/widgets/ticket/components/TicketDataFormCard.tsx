import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
import { ErrorMessageComponent } from './ErrorMessageComponent';


export const TicketDataFormCard = () => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className='form-part-ticket'>
    <p className='form-title-sub'>Данные по зявке</p>
    <div className="input-form-ticket-container">
    <ErrorMessage
        errors={errors} 
        name="title"
        render={({ message }) => <ErrorMessageComponent message={message} />}
    />
    <input
      {...register("title",
      {
          required: "Название обязательно"
      }
      )}
      placeholder="Название"
      className="text-input__custom-input"
    />
    <textarea
      {...register("body", {
        maxLength: 2048
      })}
      placeholder="Описание..."
      className='input-textarea'>
    </textarea>
    </div>
    </div>
  )
}

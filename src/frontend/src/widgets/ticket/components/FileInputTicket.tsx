import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

export const FileInputTicket = () => {
  const { control, register } = useFormContext();
  const { fields, append } = useFieldArray({
    control,
    name: "files",
  });

  return (
  <div className='form-part-ticket'>
    <p className='form-title-sub'>Прикроепленные файлы</p>
    <div className="input-form-ticket-container">
      { 
        fields?.map(
          (field) => <input key={field.id} {...register("files")} type="file" accept=".png,.jpg,.jpeg,.img,.pdf,.doc,.docx,.ppt,.pptx" />
        )
      }
      <button onClick={() => append({})}>add file</button>
    </div>
  </div>
  )
}

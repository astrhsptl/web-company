import { useEffect, useState } from 'react';

export const FileInputTicket = () => {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    console.log(files);
  }, [files]);

  const onChangeAdditionFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList || fileList.length < 1) {
      return;
    };

    let fileArray: File[] = Array.from(fileList).filter(file => {
      if (!files.find(({ name }) => name === file.name)) {
        return file;
      };
    })
    
    setFiles([ ...files, ...fileArray]);
  };

  return (
  <div className='form-part-ticket'>
    <p className='form-title-sub'>Прикроепленные файлы</p>
    <div className="input-form-ticket-container file-input-container">
      <label htmlFor={"field.id"} className="image-input-label">
          Добавить файл
          <input
            id={"field.id"}
            type="file"
            className='image-input-file'
            accept=".png,.jpg,.jpeg,.img,.pdf,.doc,.docx,.ppt,.pptx"
            onChange={(e) => onChangeAdditionFile(e)}
            multiple
          />
      </label>
    </div>
  </div>
  )
}

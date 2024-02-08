import closeSVG from "../svg/closeSVG.svg";

interface PluralInputFile{
  files: File[];
  setFiles(files: File[]): void;
}


export const FileInputTicket = ({ files, setFiles }: PluralInputFile) => {
  const onChangeAdditionFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList || fileList.length < 1) {
      return;
    }

    const fileArray: File[] = Array.from(fileList).filter(file => {
      if (!files.find(({ name }) => name === file.name)) {
        return file;
      }
    })
    setFiles([ ...files, ...fileArray]);
  };

  return (
  <div className='form-part-ticket'>
    <p className='form-title-sub'>Прикроепленные файлы</p>
    <div className="input-form-ticket-container file-input-container">
      <div className="file-container__uploaded">
        { files.map(file => {
          return ( 
          <div key={file.name} className="file__uploaded" >
            <a href={URL.createObjectURL(file)} target="_blank" className="file-link__uploaded">
            { file.name }
            </a>
            <img
              src={closeSVG}
              alt=""
              className="img-close-file"
              onClick={() => {
                const updatedFileList = files.filter((iteratedFile) => iteratedFile.name != file.name )
                setFiles(updatedFileList);
              } }
            />
          </div>)
        })}
      </div>
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

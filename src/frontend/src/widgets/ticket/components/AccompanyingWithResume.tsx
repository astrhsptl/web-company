import { ChangeEvent, useState } from "react";
import { useFormContext } from "react-hook-form";

export const AccompanyingWithResume = () => {
  const { register } = useFormContext();
  const [labelName, setLabelName] = useState("Резюме");
  const [fileLink, setFileLink] = useState("");

  const fileOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      setLabelName(fileList[0].name);
      setFileLink(URL.createObjectURL(fileList[0]));
    }
  };

  return (
    <div className="form-part-ticket">
      <p className="form-title-sub">Сопроводительное письмо и резюме</p>
      <div className="input-form-ticket-container">
        <textarea
          {...register("accompanying", {
            maxLength: 1024,
          })}
          placeholder="Описание..."
          className="input-textarea"
        ></textarea>
        <input
          {...register("resume_link")}
          placeholder="Ссылка на резюме"
          className="text-input__custom-input"
        />
        <label
          htmlFor={"field.id"}
          className="image-input-label label_as_button"
        >
          {labelName === "Резюме" ? (
            <p>{labelName}</p>
          ) : (
            <a
              href={fileLink}
              className="link__classic"
              target="_blank"
              rel="noreferrer"
            >
              {labelName}
            </a>
          )}
          <input
            id={"field.id"}
            {...register("resume")}
            type="file"
            className="image-input-file"
            accept=".png,.jpg,.jpeg,.img,.pdf,.doc,.docx,.ppt,.pptx"
            onChange={(e) => fileOnChange(e)}
          />
        </label>
      </div>
    </div>
  );
};

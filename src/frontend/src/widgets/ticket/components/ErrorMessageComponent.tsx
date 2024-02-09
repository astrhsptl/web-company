interface ErrorMessageProps {
  message: string;
}

export const ErrorMessageComponent = ({ message }: ErrorMessageProps) => {
  return <div className="message-form__error">{message}</div>;
};

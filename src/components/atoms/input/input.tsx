import { FC } from "react";
import "./input.scss";

interface InputProps {
  messageError?: string;
  value?: string;
  placeHolder?: string;
  onChange?: (text: string) => void;
}

const Input: FC<InputProps> = ({
  messageError,
  value,
  placeHolder = "Text",
  onChange,
}) => {
  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const text = e.target.value;
    onChange?.(text);
  };

  let inputClasses = "input__element"
  if(!!messageError) inputClasses += " input__element--error"

  return (
    <div className="input">
      <input
        type="text"
        onChange={handleOnChange}
        className={inputClasses}
        value={value}
        placeholder={placeHolder}
      />
      {messageError && <span className="input__message">{messageError}</span>}
    </div>
  );
};

export default Input;

import { FC } from "react";
import "./input.scss";

export interface InputProps {
  placeholder?: string;
  errorMessage?: string;
  variant?: "error" | "normal";
  name?: string;
}

export const Input: FC<InputProps> = ({
  placeholder,
  name,
  errorMessage,
  variant,
}) => {
  return (
    <div className="input">
      <input
        name={name}
        id={name}
        className={`input__field ${
          variant === "error" ? "input__field--error" : ""
        }`}
        type="text"
        placeholder={placeholder}
      />
      <span className="input__error-message">{errorMessage}</span>
    </div>
  );
};

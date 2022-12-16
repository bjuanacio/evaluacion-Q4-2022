import { FC } from "react";
import "./input.scss";

export interface InputProps {
  placeholder?: string;
  type?: "text" | "password";
  label?: string;
  errorMessage?: string;
  variant?: "error" | "normal";
  value?: string;
  name?: string;
  onChange: (value: string) => void;
}

export const Input: FC<InputProps> = ({
  placeholder,
  label = "",
  type,
  errorMessage,
  variant,
  onChange,
  value,
  name,
}) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        onChange={(e) => onChange(e.target.value)}
        className={`input__field ${
          variant === "error" ? "input__field--error" : ""
        }`}
        value={value}
        type={type}
        placeholder={placeholder}
      />
      <span className="input__error-message">{errorMessage}</span>
    </div>
  );
};

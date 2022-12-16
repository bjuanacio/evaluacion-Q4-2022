import { FC } from "react";
import { InputProps } from "./input.interfaces";
import "./input.scss";

const Input: FC<InputProps> = ({
  placeholder,
  label = "",
  type,
  errorMessage,
  variant,
  onChange,
  value,
  name,
  disabled = false,
}) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input
        disabled={disabled}
        name={name}
        id={name}
        onChange={(e) => onChange(e.target.value, name)}
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

export default Input;

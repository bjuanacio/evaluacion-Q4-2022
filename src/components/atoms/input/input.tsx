import { FC, MutableRefObject } from "react";
import "./input.scss";

export interface InputProps {
  errorMessage?: string;
  name?: string;
  onChange: (value: string, name?: string) => void;
  placeholder?: string;
  value?: string;
  variant?: "error" | "normal";
  className?: string;
  inputRef?: MutableRefObject<HTMLInputElement | null>
}

export const Input: FC<InputProps> = ({
  errorMessage,
  name,
  onChange,
  placeholder,
  value,
  variant,
  className,
  inputRef,
}) => {
  return (
    <div className={`input  ${className}`}>
      <input
        name={name}
        id={name}
        className={`input__field ${
          variant === "error" ? "input__field--error" : ""
        }`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value, name)}
        ref={inputRef}
      />
      <span className="input__error-message">{errorMessage}</span>
    </div>
  );
};

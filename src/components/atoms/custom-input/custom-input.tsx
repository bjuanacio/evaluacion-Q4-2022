import "./custom-input.scss";
import { FC } from "react";

interface CustomInputProps {
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  error?: string;
}

export const CustomInput: FC<CustomInputProps> = ({
  onChange,
  value,
  name,
  error,
}) => {
  return (
    <div className="custom-input">
      <input
        className={`custom-input__input ${
          error ? "custom-input__input--error" : ""
        }`}
        type="text"
        placeholder="GIF URL"
        value={value}
        name={name}
        onChange={onChange}
      />
      {error && <p className="custom-input__error">{JSON.stringify(error)}</p>}
    </div>
  );
};

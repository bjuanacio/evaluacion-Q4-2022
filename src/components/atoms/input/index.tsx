import { FC, InputHTMLAttributes, useEffect, useState } from "react";
import "./input.scss";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  initialValue?: string;
  onChange?(value: any): void;
}

export const Input: FC<InputProps> = ({
  initialValue = "",
  onChange = () => { },
  ...props
}) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleOnChange = (event: any) => {
    const val = event.target.value;
    setValue(val);
    onChange(val);
  };

  return (
    <input
      data-testid="inputtest"
      value={value}
      className="input"
      onChange={handleOnChange}
      {...props}
    />
  );
};

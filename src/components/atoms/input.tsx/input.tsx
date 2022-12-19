import { FC } from "react";
interface InputProps {
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  className?: string;
}
export const Input: FC<InputProps> = ({
  placeholder,
  onChange,
  name,
  value,
  className,
}) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

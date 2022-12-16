import { FC } from "react";

import "./button.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  type?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({
  text,
  onClick,
  disabled,
  type = "primary",
}) => {
  return (
    <button
      className={`button button--${type}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;

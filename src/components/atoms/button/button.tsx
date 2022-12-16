import { FC } from "react";
import { ButtonProps } from "./button.interfaces";
import "./button.scss";

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  color,
  size,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={`button ${color === "white" ? " button--white" : ""} ${size === "small" ? " button--small" : ""}`}
      onClick={() => onClick!()}
    >
      {children}
    </button>
  );
};

export default Button;

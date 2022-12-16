import classNames from "classnames";
import { ButtonHTMLAttributes, FC, HTMLAttributes, ReactNode } from "react";
import "./button.scss";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...rest
}) => (
  <button
    className={classNames("button", {
      "button--primary": variant === "primary",
      "button--secondary": variant !== "primary",
    })}
    {...rest}
  >
    {children}
  </button>
);

export default Button;

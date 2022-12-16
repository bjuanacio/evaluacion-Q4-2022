import React, { FC } from "react";
import "./button.scss";

export interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  variant = "primary",
}) => {
  return (
    <button className={`button button--${variant}`} onClick={() => onClick!()}>
      {children}
    </button>
  );
};

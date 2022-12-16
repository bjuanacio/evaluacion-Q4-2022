import React, { FC } from "react";
import "./button.scss";

export interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: string;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  type,
  className,
}) => {
  return (
    <button
      className={`button ${type ? "button__icon" : ""} ${className}`}
      onClick={() => onClick!()}
    >
      {children}
    </button>
  );
};

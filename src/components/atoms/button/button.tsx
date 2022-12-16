import React, { FC } from "react";
import "./button.scss";

export interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className="button" onClick={() => onClick!()}>
      {children}
    </button>
  );
};

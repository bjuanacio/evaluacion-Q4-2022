import React, { FC } from "react";

export interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  type: "primary" | "secondary";
  size?: "small"
}

export const Button: FC<ButtonProps> = ({ onClick, children, type, size }) => {
  return (
    <button className={`button button--${type} ${size === 'small' ? ' button--small' : ''}`} onClick={() => onClick!()}>
      {children}
    </button>
  );
};

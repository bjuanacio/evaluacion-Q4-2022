import {FC, ReactNode} from "react";
import React from 'react';
interface ButtonProps {
    children?:any
    onClick: () => void;
    className:string;
}
export const Button:FC<ButtonProps> = ({ onClick, children, className }) => {
  return <button  className={className} onClick={onClick} >
    {children}
  </button>
};

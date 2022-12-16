import React, { FC, InputHTMLAttributes } from "react";
import './input.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Input: FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input className="input" id={name} {...rest}></input>
    </div>
  );
};

export default Input;

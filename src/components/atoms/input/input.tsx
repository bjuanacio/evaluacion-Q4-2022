import {  FC, InputHTMLAttributes } from "react";
import "./Input.scss";
export interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
}

const Input: FC<ButtonProps> = ({  ...rest }) => (
  <input className="input" {...rest}></input>
);

export default Input;

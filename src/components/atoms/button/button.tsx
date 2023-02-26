import { FC, ReactNode } from "react";
import "./button.scss";

interface ButtonProps {
  children: ReactNode;
  isCircle?: boolean;
  block?: boolean;
  type?: "primary" | "secondary";
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  isCircle,
  type = "primary",
  block,
  onClick,
}) => {
  let buttonClasses = "button";
  if (isCircle) buttonClasses += " button--circle";
  if (type === "secondary") buttonClasses += " button--secondary";
  if (block) buttonClasses += " button--block";

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

import { FC, ReactNode } from "react";
import "./button.scss";

interface ButtonProps {
  children: ReactNode;
  isCircle?: boolean;
  type?: "primary" | "secondary";
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  isCircle,
  type = "primary",
  onClick,
}) => {
  let buttonClasses = "button";
  if (isCircle) buttonClasses += " button--circle";
  if (type === "secondary") buttonClasses += " button--secondary";

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

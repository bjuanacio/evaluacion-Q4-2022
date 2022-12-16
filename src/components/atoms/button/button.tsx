import React, {FC} from 'react';
import "./button.scss";

interface ButtonProps {
    children: React.ReactNode;
    size?: "small" | "large";
    onClick: () => void;
}

const Button: FC<ButtonProps> = ({children,size="large",onClick}) => {
    return (
        <button onClick={onClick} className={`button button--${size}`}>
            <label className="button__Label">{children}</label>
        </button>
    );
};

export default Button;

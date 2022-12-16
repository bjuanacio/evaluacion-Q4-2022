import "./button.scss";
import React from "react";
import {FC} from "react";

interface ButtonProps {

    children: React.ReactNode;
    onClick: () => void;
}

const Button: FC<ButtonProps> = ({children, onClick}) => {

    return <button onClick={onClick} className='button'>Agregar</button>;
};
export default  Button
import React, {FC} from "react";
import "./input.scss"

interface InputProps {
    value: string;
    name: string;
    onChange: () => void;
    placeHolder: string;
}

const Input: FC<InputProps> = ({value,name,onChange,placeHolder}) => {
    return <input className="input" placeholder={placeHolder} onChange={onChange}/>;
};

export default Input;
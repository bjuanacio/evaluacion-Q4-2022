import "./input.scss"
import  {FC} from "react";

interface InputProps {
    value: string;
    name: string;
    onChange: () => void;
    placeholder: string;
}

const Input: FC<InputProps> = ({ name, onChange, placeholder, value }) => {

    return <input className="input" placeholder={placeholder}></input>;
};

export default Input;
import "./input.scss";
import { FC } from "react";

interface InputProps {
	onChange: (...args: any[]) => void;
	placeHolder: string;
	error: boolean;
	value: string;
}

const Input: FC<InputProps> = ({ onChange, placeHolder, error, value }) => {
	const inputClasses = !error ? "input" : "input input--error";

	return (
		<div className={inputClasses}>
			<input onChange={onChange} placeholder={placeHolder} className="input__text-box" value={value}/>
		</div>
	);
};

export default Input;

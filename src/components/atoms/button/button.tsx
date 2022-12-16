import "./button.scss";
import { FC } from "react";

interface ButtonProps {
	onClick: (...args: any[]) => void;
	title: string;
	outline?: boolean;
}

const Button: FC<ButtonProps> = ({ onClick, title, outline }) => {
	const buttonClasses = outline ? "button button--outline" : "button";

	return (
		<button onClick={onClick} className={buttonClasses}>
			{title}
		</button>
	);
};

export default Button;

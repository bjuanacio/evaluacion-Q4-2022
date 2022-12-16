import "./gif-card.scss";
import { FC, useState } from "react";
import DeleteIcon from "../../../assets/delete-icon.svg";
import Button from "../../atoms/button/button";

interface GifCardProps {
	onRemove: (gifId: string) => void;
	gifUrl: string;
}

const GifCard: FC<GifCardProps> = ({ onRemove, gifUrl }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const showMenuClasses = isMenuOpen
		? "gif-card__menu gif-card__menu--opened"
		: "gif-card__menu";

	return (
		<div className={"gif-card"}>
			<img src={gifUrl} alt="gif" className="gif-card__image" />

			<img
				className="gif-card__delete-icon"
				src={DeleteIcon}
				alt="Delete icon"
				onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
			/>
			<div className={showMenuClasses} role='menu'>
				<p className="gif-card__menu-title">
					¿Deseas eliminar este GIF?
				</p>
				<div className="gif-card__menu-button">
					<Button title="Eliminar" onClick={() => {}} />
				</div>
				<div className="gif-card__menu-button">
					<Button
						title="Cancelar"
						onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
						outline
					/>
				</div>
			</div>
		</div>
	);
};

export default GifCard;

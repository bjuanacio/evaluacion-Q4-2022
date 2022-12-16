import { FC, useState } from "react";
import deleteGif from "../../../store/actions/delete-gif";
import { useAppDispatch } from "../../../store/hooks";
import { Gif } from "../../../store/reducers/gifs";
import Button from "../../atoms/button/button";
import DeleteIcon from "../../../assets/delete-icon.svg";
import "./card.scss";
export interface CardProps {
  gif: Gif;
}

const Card: FC<CardProps> = ({ gif }) => {
  const dispatch = useAppDispatch();
  const [showSettings, setShowSettings] = useState(false);
  return (
    <article className="card">
      <div className="card__delete-button">
        <Button
          onClick={() => setShowSettings(true)}
          variant="secondary"
          data-testid={"delete"}
        >
          <img
            src={DeleteIcon}
            alt="Delete icon"
            className="card__delete-button__icon"
          />
        </Button>
      </div>
      <img src={gif.url} alt={gif.url} className="card__img" />
      {showSettings && (
        <div className="card__settings">
          <span>Deseas eliminar este gif?</span>
          <div className="card__settings__buttons">
            <Button onClick={() => dispatch(deleteGif(gif))}>Eliminar</Button>
            <Button onClick={() => setShowSettings(false)}>Cancelar</Button>
          </div>
        </div>
      )}
    </article>
  );
};
export default Card;

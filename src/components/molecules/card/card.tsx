import { FC } from "react";
import { Gif } from "../../../utils/interfaces/gif";
import Button from "../../atoms/button/button";
import DeleteIcon from "../../../assets/delete-icon.svg";
import "./card.scss";
import useCard from "./use-card/use-card";

interface CardProps {
  gif: Gif;
  onDeleteGif: (gif: Gif) => void;
}

const Card: FC<CardProps> = ({ gif, onDeleteGif }) => {
  const { handleDelete, handleOnClick, isVisibleRemovePanel } = useCard({
    gif,
    onDeleteGif,
  });

  return (
    <div className="card">
      <img alt="gif" src={gif.url} className="card__img" />
      <div className="card__delete-button">
        <Button isCircle onClick={handleOnClick}>
          <img
            className="card__button-icon"
            src={DeleteIcon}
            alt="Delete icon"
          />
        </Button>
      </div>

      {isVisibleRemovePanel && (
        <div className="card__remove-container">
          <div className="card__remove-message-container">
            <span className="card__remove-message">
              ¿Deseas eliminar este GIF?
            </span>
          </div>
          <div className="card__remove-buttons-container">
            <div className="card__remove-button">
              <Button onClick={handleDelete}>Eliminar</Button>
            </div>
            <div className="card__remove-button">
              <Button type="secondary" onClick={handleOnClick}>
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

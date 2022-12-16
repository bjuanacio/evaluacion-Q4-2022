import { FC } from "react";
import Button from "../../atoms/button/button";
import { GifCardProps } from "./gif-card.interfaces";
import "./gif-card.scss";
import useGifCard from "./use-gif-card/use-gif-card";
import DeleteIcon from "../../../assets/delete-icon.svg";

const GifCard: FC<GifCardProps> = (props: GifCardProps) => {
  const { showDeleteMessage, handleDeleteIcon, handleDelete, handleCancel } =
    useGifCard(props);

  return (
    <div className="gif-card">
      <div className="gif-card__cover">
        <img
          src={props.gif.url}
          alt={props.gif.url}
          className="gif-card__image"
        />
        <div className="gif-card__icon-button">
          <img
            className="gif-card__icon"
            src={DeleteIcon}
            alt="delete-icon"
            onClick={() => handleDeleteIcon()}
          />
        </div>
      </div>
      {showDeleteMessage && (
        <div className="gif-card__delete-cover">
          <span className="gif-card__eliminate-text">
            ¿Deseas eliminar este GIF?
          </span>
          <Button onClick={() => handleDelete()}>Eliminar</Button>
          <Button color="white" onClick={() => handleCancel()}>
            Cancelar
          </Button>
        </div>
      )}
    </div>
  );
};

export default GifCard;

import { FC, useState } from "react";
import { Gif } from "../../../utils/interfaces/gif";
import DeleteIcon from "../../../assets/delete-icon.svg";
import "./card.scss";
import { Button } from "../../atoms/button/button";

interface CardProps {
  gif: Gif;
  deleteGif: (gif: Gif) => void;
}

const Card: FC<CardProps> = (props) => {
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const handleClick = () => {
    setOpenDelete(true);
  };
  const cancelClick = () => {
    setOpenDelete(false);
  };

  return (
    <div className="card">
      <div className="card__body">
        <div className="card__buttons-wrapper">
          <img
            className="card-body__icon"
            src={DeleteIcon}
            alt="delete-icon"
            onClick={handleClick}
          />
        </div>
        <img
          src={props.gif.url}
          className="card__image"
          alt={`${props.gif.id}`}
        />
        {openDelete && (
          <div className="card__delete">
            <p>Deseas Eliminar este GIF</p>
            <Button onClick={() => props.deleteGif(props.gif)}>Eliminar</Button>
            <Button onClick={cancelClick}>Cancelar</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

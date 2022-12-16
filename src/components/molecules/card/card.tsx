import { FC } from "react";
import { Gif } from "../../../utils/interfaces/gif";
import { Button } from "../../atoms/button/button";
import DeleteIcon from "../../../assets/delete-icon.svg";
import "./card.scss";

interface CardProps {
  gif: Gif;
  deleteGif: (id: number) => void;
  setActiveGif: (id: number) => void
}

const Card: FC<CardProps> = (props) => {
  return (
    <div className="card">
      <div className="card__body">
        <img className="card__body__image" src={props.gif.url} alt="{props.gif.url} " />
        <Button size="small" type="primary" onClick={() => props.setActiveGif(props.gif.id!)}>
          <img
            className="card__body__icon-delete"
            src={DeleteIcon}
            alt="delete-icon"
          />
        </Button>
      </div>
      <div className="card__body-delete">
        <span className="card__body-delete__text">¿Desea eliminar este Gif?</span>
        <Button type="primary" size="small" onClick={() => props.deleteGif(props.gif.id!)}>Eliminar</Button>
        <Button type="secondary" size="small" onClick={() => props.setActiveGif(0)}>Cancelar</Button>
      </div>
    </div>
  );
};

export default Card;

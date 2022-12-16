import { FC, useState } from "react";
import { Gif } from "../../../utils/interfaces/gif";
import { Button } from "../../atoms/button/button";

import "./card.scss";
import DeleteIcon from "../../../assets/delete-icon.svg";

interface CardProps {
  gif: Gif;
  handleDeleteClick: (gif: Gif) => void;
}

export const Card: FC<CardProps> = ({ gif, handleDeleteClick }) => {
  const [modalVisible, setmodalVisible] = useState(false);
  const showModal = () => setmodalVisible(true);

  return (
    <div className="card">
      <img src={gif.url} alt="gif" />
      {!modalVisible && (
        <Button
          type="icon"
          className="card__delete"
          onClick={() => showModal()}
        >
          <img src={DeleteIcon} alt="Delete icon" />
        </Button>
      )}
      {modalVisible && (
        <div className="card__modal">
          <Button onClick={() => handleDeleteClick(gif)} className="card__confirm">Eliminar</Button>
          <Button onClick={() => setmodalVisible(false)} className="card__confirm--secondary">Cancelar</Button>
        </div>
      )}
    </div>
  );
};

export default Card;

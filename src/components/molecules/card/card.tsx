import { FC } from "react";
import { Gif } from "../../../utils/interfaces/gif";
import { Button } from "../../atoms/button/button";

import "./card.scss";
import DeleteIcon from "../../../assets/delete-icon.svg";

interface CardProps {
  gif: Gif;
  handleDeleteClick: (gif: Gif) => void;
}

export const Card: FC<CardProps> = ({ gif, handleDeleteClick }) => {
  return (
    <div className="card">
      <img src={gif.url} alt="gif" />
      <Button type="icon" className="card__delete" onClick={() => handleDeleteClick(gif)}>
        <img src={DeleteIcon} alt="Delete icon" />
      </Button>
    </div>
  );
};

export default Card;

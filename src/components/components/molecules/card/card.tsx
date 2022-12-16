import { FC, useState } from "react";
import { Gif } from "../../../../utils/interfaces/gif";
import "./card.scss";
import DeleteIcon from "../../../../assets/delete-icon.svg";
import { Button } from "../../atoms/button/button";
import { Info } from "../../../../utils/enums/info";
import useCard from "./use-card/use-card";

interface CardProps {
  gif: Gif;
  deleteGif: (gif: Gif) => void;
}

const Card: FC<CardProps> = ({ gif, deleteGif }) => {
  const { showOverlay, handleChangeShowOverlay } = useCard();

  return (
    <div className="card">
      <img className="card__image" src={gif.url} alt={`gif-${gif.id}`} />
      <img
        className="card__delete-icon"
        src={DeleteIcon}
        onClick={handleChangeShowOverlay}
      />
      {showOverlay && (
        <div className="card__overlay">
          <span className="card__label">{Info.DELETE_MESSAGE}</span>
          <Button
            onClick={() => {
              console.log("entro aqui");
              deleteGif(gif);
              handleChangeShowOverlay();
            }}
          >
            {Info.DELETE_BUTTON}
          </Button>
          <Button variant="secondary" onClick={handleChangeShowOverlay}>
            {Info.CANCEL_BUTTON}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Card;

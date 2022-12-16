import { Gif } from "../../../utils/interfaces/gif";
import Card from "../../molecules/card/card";
import WarningIcon from "../../../assets/warning-icon.svg";
import { FC } from "react";
import "./list-card.scss";

interface GifListProps {
  gifsList: Gif[];
  deleteGif: (gif: Gif) => void;
}
const ListCard: FC<GifListProps> = (props) => {
  if (props.gifsList.length === 0)
    return (
      <div className="warning">
        <img className="warning__icon" src={WarningIcon} alt="warning-icon" />
        <h2>No posee gifs...</h2>
      </div>
    );

  return (
    <div className="cards-grid">
      {props.gifsList.map((gif, index) => (
        <div key={`card-item-${index}`} className="cards-grid__item">
          <Card
            gif={gif}
            deleteGif={props.deleteGif}
            key={`player-card-${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ListCard;

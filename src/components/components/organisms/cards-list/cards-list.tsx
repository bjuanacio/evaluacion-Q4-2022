import { FC } from "react";
import { Gif } from "../../../../utils/interfaces/gif";
import Card from "../../molecules/card/card";
import "./cards-list.scss";
import AlertBanner from "../../alert-banner/alert-banner";
import { Info } from "../../../../utils/enums/info";

interface CardsListProps {
  gifs: Gif[];
  deleteGif: (gif: Gif) => void;
}

const CardsList: FC<CardsListProps> = ({ gifs, deleteGif }) => {
  if (gifs.length === 0)
    return <AlertBanner content={Info.EMPTY_LIST_MESSAGE} />;
  return (
    <div className="cards-list">
      {gifs.map((gif, index) => (
        <div key={`gif-${index}`} className="cards-list__item">
          <Card deleteGif={deleteGif} gif={gif} />
        </div>
      ))}
    </div>
  );
};

export default CardsList;

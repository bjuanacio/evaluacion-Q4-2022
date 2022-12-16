import { FC } from "react";
import GifCard from "../../molecules/gif-card/gif-card";
import { GifCardsGridProps } from "./gif-cards-grid.interfaces";
import "./gif-cards-grid.scss";

const GifCardsGrid: FC<GifCardsGridProps> = ({ gifsList, handleDelete }) => {
  if (gifsList.length === 0) return <h2>No existen gifs registrados...</h2>;

  return (
    <div className="gif-cards-grid">
      {gifsList.map((gif, index) => {
        return (
          <div key={`card-${index}`}>
            <GifCard handleDelete={handleDelete} gif={gif} />
          </div>
        );
      })}
    </div>
  );
};

export default GifCardsGrid;

import { FC } from "react";
import Gif from "../../../utils/interfaces/gif";
import EmptyGifList from "../../atoms/empty-gif-list/empty-gif-list";
import GifCard from "../../molecules/gif-card/gif-card";

import "./gif-list.scss";

interface GifListProps {
  gifs: Gif[];
  onDelete: (id: number, url: string) => void;
}

const GifList: FC<GifListProps> = ({ gifs, onDelete }) => {
  return (
    <div className="gif-list" data-testid="giflist-testid">
      {gifs.length === 0 ? (
        <EmptyGifList />
      ) : (
        <>
          {gifs.map((gif) => (
            <GifCard key={gif.id} gif={gif} onDelete={onDelete} />
          ))}
        </>
      )}
    </div>
  );
};

export default GifList;

import { FC } from "react";
import Gif from "../../../utils/interfaces/gif";
import EmptyGifList from "../../molecules/empty-gif-list/empty-gif-list";

interface GifListProps {
  gifs: Gif[];
}

const GifList: FC<GifListProps> = ({ gifs }) => {
  return (
    <div data-testid="giflist-testid">
      {gifs.length === 0 ? <EmptyGifList /> : <div>gif list</div>}
    </div>
  );
};

export default GifList;

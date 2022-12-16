import { Gif } from "../../../utils/interfaces/gifs";

export interface GifCardsGridProps {
  gifsList: Gif[];
  handleDelete: (gif: Gif) => void;
}

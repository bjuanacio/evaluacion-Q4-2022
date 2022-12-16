import { Gif } from "../../../utils/interfaces/gifs";

export interface GifCardProps {
  gif: Gif;
  handleDelete: (gif: Gif) => void;
}

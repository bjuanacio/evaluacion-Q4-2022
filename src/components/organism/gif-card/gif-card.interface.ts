import { Gif } from "../../../utils/interfaces/gif.interface";

export interface GifCardProps {
  gif: Gif
  onDelete(): void;
}

import { Gif } from "../../../utils/interfaces/gif.interface";

export interface GifListProps {
  gifList: Gif[];
  onDelete(): void;
}

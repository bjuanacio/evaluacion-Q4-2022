import Gif from "../../../../utils/interfaces/gif";

export interface UseGifGaleryPageReturn {
  url: string;
  handleSearchInput: (value: string) => void;
  addGif: () => Promise<void>;
  error: string;
  gifs: Gif[];
  deleteGif: (id: number, url: string) => Promise<void>;
}

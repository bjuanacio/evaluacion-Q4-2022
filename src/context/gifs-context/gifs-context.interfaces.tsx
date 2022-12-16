import { Gif } from "../../utils/interfaces/gifs";

export interface GifsContextProps {
  gifList: Gif[];
  deleteGif: (gif: Gif) => void;
  addGif: (gif: Gif) => void;
  getGifList: () => void;
}

export interface GifsProviderProps {
    children: React.ReactNode;
    initialValue?: Partial<GifsContextProps>;
  }
  
import { createContext, FC, useContext } from "react";
import { Gif } from "../../utils/interfaces/gif";
import useGif from "./use-gif/use-gif";

export interface GifStateContext {
  gifList: Gif[];
  activeModal: boolean;
  handleChangeModal: () => void;
  deleteGif: (gif: Gif) => void;
  addGifs: (gif: Gif) => void;
  getGifs: () => void;
}

export interface GifProviderProps {
  children: React.ReactNode;
  initialValue?: Partial<GifStateContext>;
}

export const GifContext = createContext<GifStateContext>(
  {} as unknown as GifStateContext
);

export const useGifContext = () => useContext(GifContext);

export const GifProvider: FC<GifProviderProps> = ({
  children,
  initialValue,
}) => {
  const values = useGif(initialValue);
  return <GifContext.Provider value={values}>{children}</GifContext.Provider>;
};

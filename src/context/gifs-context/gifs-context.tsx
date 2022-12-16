import { createContext, FC, useContext } from "react";
import { Gif } from "../../utils/interfaces/gif";
import useGifs from "./use-gifs/use-gifs";

export interface GifsStateContext {
  gifsList: Gif[];
  addGif: (url: string) => void;
  deleteGif: (gif: Gif) => void;
  getGifs: () => void
}

export interface GifsProviderProps {
  children: React.ReactNode;
  initialValue?: Partial<GifsStateContext>;
}

export const GifsContext = createContext<GifsStateContext>(
  {} as unknown as GifsStateContext
);

export const useGifsContext = () => useContext(GifsContext);

export const GifsProvider: FC<GifsProviderProps> = ({
  children,
  initialValue,
}) => {
  const values = useGifs(initialValue);
  return <GifsContext.Provider value={values}>{children}</GifsContext.Provider>;
};

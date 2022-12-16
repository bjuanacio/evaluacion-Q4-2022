import { createContext, FC, useContext } from "react";
import { Gif } from "../../utils/interfaces/gif";
import useGifs from "./use-gif/use-gifs";

export interface GifsStateContext {
  gifsList: Gif[];
  deleteGif: (id: number) => void;
  addGif: (gif: Gif) => void;
  getGifs: () => void;
  activeGif: Gif | undefined
  addActiveGif: (id: number) => void
  gifUrl: string
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

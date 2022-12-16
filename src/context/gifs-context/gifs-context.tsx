import { createContext, FC, useEffect } from "react";
import { GifsContextProps, GifsProviderProps } from "./gifs-context.interfaces";
import useGifsContext from "./use-gifs-context/use-gifs-context";

export const GifsContext = createContext<GifsContextProps>(
  {} as GifsContextProps
);

export const GifsProvider: FC<GifsProviderProps> = ({
  children,
}) => {
  const values = useGifsContext();

  useEffect(() => {
    values.getGifList();
  }, []);

  return <GifsContext.Provider value={values}>{children}</GifsContext.Provider>;
};

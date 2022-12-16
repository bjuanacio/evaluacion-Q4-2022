import { useState } from "react";
import { Gif } from "../../utils/interfaces/gif";
import { GifsStateContext } from "../gifs-context";
import {
  addGif as addGifService,
  fetchGifs as getGifsService,
  deleteGif as deleteGifService,
} from "../../services/gif/gif.service";

export const useGifs = (initialValues?: Partial<GifsStateContext>) => {
  const [gifsList, setGifsList] = useState<Gif[]>(
    initialValues?.gifsList || []
  );

  const addGif = (gif: Gif) => {
    addGifService(gif).then(() => getGifs());
  };

  const getGifs = () => {
    getGifsService().then((data: Gif[]) => {
      setGifsList(data);
    });
  };

  const deleteGif = (gif: Gif) => deleteGifService(gif)

  return {
    gifsList,
    addGif,
    getGifs,
    deleteGif
  };
};

export default useGifs;

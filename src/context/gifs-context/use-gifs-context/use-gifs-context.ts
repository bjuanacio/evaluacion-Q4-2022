import { useState } from "react";
import {
  fetchGifs,
  postGif,
  deleteGif as deleteGifService,
} from "../../../services/gifs/gifs.service";
import { Gif } from "../../../utils/interfaces/gifs";
import { GifsContextProps } from "../gifs-context.interfaces";

const useGifsContext = (initialValues?: Partial<GifsContextProps>) => {
  const [gifList, setGifList] = useState<Gif[]>([]);

  const getGifList = async () => {
    fetchGifs().then((res) => {
      setGifList(res as Gif[]);
    });
  };

  const addGif = (gif: Gif) => {
    postGif(gif).then(() => {
      getGifList();
    });
  };

  const deleteGif = (gif: Gif) => {
    deleteGifService(gif).then(() => {
      getGifList();
    });
  };

  return {
    gifList,
    getGifList,
    addGif,
    deleteGif,
  };
};

export default useGifsContext;

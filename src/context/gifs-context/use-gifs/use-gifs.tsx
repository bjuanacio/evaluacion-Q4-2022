import { useState } from "react";
import { Gif } from "../../../utils/interfaces/gif";
import { GifsStateContext } from "../gifs-context";
import { AUTHOR_ID } from "../../../utils/constants/author";

import {
  addGif as addGifService,
  fetchGifs as getGifsService,
  deleteGif as deleteGifService,
} from "../../../services/gif/gif.service";

export const useGifs = (initialValues?: Partial<GifsStateContext>) => {
  const [gifsList, setGifsList] = useState<Gif[]>(
    initialValues?.gifsList || []
  );

  const addGif = (url: string) => {
    const gif = {
      author_id: AUTHOR_ID ?? '',
      url: url,
      id: '1'
    };
    addGifService(gif).then(() => getGifs());
  };

  const getGifs = () => {
    getGifsService().then((data: Gif[]) => {
      setGifsList(data);
    });
  };

  const deleteGif = (gif: Gif) => deleteGifService(gif);

  return {
    gifsList,
    addGif,
    getGifs,
    deleteGif,
  };
};

export default useGifs;

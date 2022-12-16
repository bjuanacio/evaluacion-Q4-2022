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

  const addGif = async (url: string) => {
    const gif = {
      author_id: parseInt(AUTHOR_ID ?? "0"),
      url: url,
    };
    await addGifService(gif);
    await getGifs();
  };

  const getGifs = async () => {
    const data = await getGifsService();
    setGifsList(data);
  };

  const deleteGif = async (gif: Gif) => await deleteGifService(gif);

  return {
    gifsList,
    addGif,
    getGifs,
    deleteGif,
  };
};

export default useGifs;

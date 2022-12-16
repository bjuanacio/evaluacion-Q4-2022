import { useState } from "react";
import { Gif } from "../../../utils/interfaces/gif";
import {
  fetchGifs,
  addGif as addGifService,
  deleteGif as deleteGifService,
} from "../../../services/gif/gif.service";
import { GifsStateContext } from "../gifs-context";

const useGifs = (initialValues?: Partial<GifsStateContext>) => {
  const [gifsList, setGifsList] = useState<Gif[]>(
    initialValues?.gifsList || []
  );
  const [activeGif, setActiveGif] = useState<Gif | undefined>(
    initialValues?.activeGif || undefined
  );
  const [gifUrl, setGifUrl] = useState(initialValues?.gifUrl || '')

  const getGifs = () => {
    fetchGifs().then((res) => {
      setGifsList(res);
    });
  };

  const addGif = (Gif: Gif) => {
    addGifService(Gif).then(() => {
      getGifs();
    });
  };

  const deleteGif = (id: number) => {
    deleteGifService(id).then(() => {
      getGifs();
    });
  };
  const handleGifUrl = (term: string) => {
    setGifUrl(term);
  };

  const addActiveGif = (gifId: number) => {
    const gif = gifsList.find(({ id }) => id === gifId);
    setActiveGif(gif);
  };

  return {
    gifsList,
    addGif: initialValues?.addGif ?? addGif,
    deleteGif,
    getGifs: initialValues?.getGifs ?? getGifs,
    activeGif,
    addActiveGif,
    handleGifUrl,
    gifUrl
  };
};

export default useGifs;

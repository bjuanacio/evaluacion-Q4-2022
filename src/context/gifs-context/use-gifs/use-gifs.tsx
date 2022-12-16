import { useState } from "react";
import { GifsStateContext } from "../gifs-context";
import {
  fetchGifs,
  deleteGif as deleteGifService,
  addGif as addGifService,
} from "../../../services/gifs/gifs";
import { Gif } from "../../../utils/interfaces/gif";
import { AUTHOR_ID } from "../../../utils/constants/gifs";

const useGifs = (initialValues?: Partial<GifsStateContext>) => {
  const [gifsList, setGifsList] = useState(initialValues?.gifsList || []);
  const [validUrl, setValidUrl] = useState<boolean>(
    initialValues?.validUrl || true
  );

  const getGifs = () => {
    fetchGifs()
      .then((res) => {
        setGifsList(res);
      })
      .catch(() => setGifsList([]));
  };

  const addGif = (url: string) => {
    if (url.length !== 0) {
      setValidUrl(true);
      setGifsList([
        ...gifsList,
        { id: Math.floor(Math.random() * 200), url: url, author_id: AUTHOR_ID },
      ]);
      // addGifService({ url: url, author_id: AUTHOR_ID })
      //   .then(() => {
      //     getGifs();
      //   })
      //   .catch(() => {
      //     setValidUrl(false);
      //   });
    } else {
      setValidUrl(false);
    }
  };

  const deleteGif = (gif: Gif) => {
    // deleteGifService(gif).then(() => {
    //   getGifs();
    // });
    setGifsList(gifsList.filter((filterGif) => filterGif.id !== gif.id));
  };

  return {
    gifsList,
    getGifs: initialValues?.getGifs ?? getGifs,
    addGif,
    deleteGif,
    validUrl,
  };
};

export default useGifs;

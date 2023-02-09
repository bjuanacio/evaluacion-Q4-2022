import { useEffect, useState } from "react";
import {
  addGif,
  getGifs,
  removeGif,
} from "../../../../services/gif/gif-services";
import { Gif } from "../../../../utils/interfaces/gif";

function useGalery() {
  const [gifs, setGifs] = useState<Gif[]>([]);

  useEffect(() => {
    getGifs().then((list) => setGifs(list));
  }, []);

  const handleAddGif = (urlGif: string) => {
    addGif(urlGif).then((newGif) => {
      setGifs([...gifs, newGif]);
    });
  };

  const handleDeleteGif = (gif: Gif) => {
    removeGif(gif).then((isOkRemove) => {
      if (isOkRemove) {
        const newGifs = gifs.filter((item) => item.id !== gif.id);
        setGifs(newGifs);
      }
    });
  };

  return {
    gifs,
    handleAddGif,
    handleDeleteGif,
  };
}

export default useGalery;

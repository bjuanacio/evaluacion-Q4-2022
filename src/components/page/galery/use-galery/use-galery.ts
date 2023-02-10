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
    const getList = async () => {
      const response = await getGifs();
      setGifs(response);
    };

    getList();
  }, []);

  const handleAddGif = async (urlGif: string) => {
    try {
      const response = await addGif(urlGif);
      setGifs([...gifs, response]);
    } catch (error) {}
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

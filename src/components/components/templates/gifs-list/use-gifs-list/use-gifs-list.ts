import { useEffect } from "react";
import { useGifsContext } from "./../../../../../context/gifs-context/gifs-context";

const useGifsList = () => {
  const { getGifs, gifsList, deleteGif, addGif, validUrl } = useGifsContext();
  useEffect(() => {
    getGifs();
  }, []);
  return {
    getGifs,
    gifsList,
    deleteGif,
    addGif,
    validUrl,
  };
};

export default useGifsList;

import { useEffect, useState } from "react";
import { Gif } from "../../../../utils/interfaces/gif";
import { useGifsContext } from "../../../../context/gifs-context/gifs-context";

export const useGallery = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [errorInService, setErrorInService] = useState(false);
  const { addGif, gifsList, deleteGif, getGifs } = useGifsContext();

  const handleUrlInputChange = (text: string) => setInputUrl(text);

  const handleAddClick = () => {
    try {
      addGif(inputUrl);
    } catch (e) {
      setErrorInService(true);
    }
  };

  const handleDeleteClick = (gif: Gif) => {
    try{
      deleteGif(gif)
    }catch(e){
      setErrorInService(true)
    }
  };

  const fetchGifs = () => getGifs();

  useEffect(() => {
    fetchGifs();
  }, []);

  return {
    inputUrl,
    setInputUrl,
    handleUrlInputChange,
    handleAddClick,
    handleDeleteClick,
    gifsList,
    errorInService,
  };
};

export default useGallery;

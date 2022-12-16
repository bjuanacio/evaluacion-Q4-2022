import { useEffect, useState } from "react";
import { Gif } from "../../../../utils/interfaces/gif";
import { useGifsContext } from "../../../../context/gifs-context/gifs-context";

export const useGallery = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [errorInService, setErrorInService] = useState(false);
  const { addGif, gifsList, deleteGif, getGifs } = useGifsContext();

  const mockGifs = [
    {
      author_id: 15,
      id: 1,
      url: `https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif`,
    },
    {
      author_id: 15,
      id: 2,
      url: `https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif`,
    },
    {
      author_id: 15,
      id: 3,
      url: `https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif`,
    },
    {
      author_id: 15,
      id: 4,
      url: `https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif`,
    },
    {
      author_id: 15,
      id: 5,
      url: `https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif`,
    },
    {
      author_id: 15,
      id: 6,
      url: `https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif`,
    },
  ];

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
    mockGifs,
    gifsList,
    errorInService,
  };
};

export default useGallery;

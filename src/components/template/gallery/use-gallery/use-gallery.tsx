import { useState } from "react";
import { Gif } from "../../../../utils/interfaces/gif";

export const useGallery = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [gifs, setGifs] = useState("");

  const handleUrlInputChange = (text: string) => setInputUrl(text);

  const handleAddClick = () => console.log(inputUrl);

  const handleDeleteClick = (gif: Gif) => console.log(gif);


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

  return {
    inputUrl,
    setInputUrl,
    handleUrlInputChange,
    handleAddClick,
    handleDeleteClick,
    mockGifs,
    gifs,
    setGifs
  };
};

export default useGallery;
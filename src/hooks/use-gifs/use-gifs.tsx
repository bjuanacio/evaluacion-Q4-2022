
import { FC, useEffect, useState } from 'react';
import { createGif, getGifs, deleteGif } from '../../services/gifs-services/gif-service';
import { Gif } from '../../utils/interfaces/gif';

export const UseGifs = () => {
  const [gifsList, setGifsList] = useState<Gif[]>([]);

  useEffect(() => {
    getGifs().then((data) => setGifsList(data))
  }, [])

  const addGif = (gif: Gif) => {
    createGif(gif)
  }

  const removeGif = (gif: Gif) => {
    deleteGif(gif)
  }

  return { gifsList, addGif, removeGif }
}


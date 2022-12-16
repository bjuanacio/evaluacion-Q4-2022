import { useState } from 'react'
import { GIFS_LIST } from '../../constants/gifs';
import { Gif } from '../../interfaces/gif';

export const useManageGifs = () => {
  const [gifList, setGifsList] = useState<Gif[]>(GIFS_LIST);
  const handleAddGif = (gif: Gif) => {
    const newGif:Gif = {...gif,id: gifList.length }
    setGifsList((gifList => ([...gifList, newGif])))
  }
  return {
    gifList,
    handleAddGif
  }
}
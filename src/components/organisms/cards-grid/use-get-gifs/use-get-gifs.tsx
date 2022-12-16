import { useEffect, useState } from 'react'
import { useManageGifs } from '../../../../utils/hooks/use-manage-gifs/use-manage-gifs';
import { Gif } from '../../../../utils/interfaces/gif';

export const useGetGifs = () => {
  const { gifList } = useManageGifs();
  const [gifsList, setGifsList] = useState<Gif[]>([]);
  const fetchData = () => {
    setGifsList(gifList);
  }
  useEffect(
    () => fetchData(),
    []
  );
  useEffect(
    () => {

    },
    [gifList]
  );

  return {
    gifsList
  }
}
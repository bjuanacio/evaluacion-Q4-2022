import axios from "axios";
import { AUTHOR_ID, URL_SERVICE } from "../../utils/constants/services";
import { Gif } from "../../utils/interfaces/gif";

export const getGifs = async (): Promise<Gif[]> => {
  const responseGetGifs = await axios.get<Gif[]>(
    `${URL_SERVICE}/?author_id=${AUTHOR_ID}`
  );

  return responseGetGifs.data;
};

export const addGif = async (urlGif: string): Promise<Gif> => {
  const responseAddGifs = await axios.post<Gif>(`${URL_SERVICE}`, {
    url: urlGif,
    author_id: AUTHOR_ID,
  });

  return responseAddGifs.data;
};

export const removeGif = async (gifToRemove: Gif): Promise<boolean> => {
  const responseRemoveGifs = await axios.delete<Gif>(`${URL_SERVICE}`, {
    data: {
      author_id: AUTHOR_ID,
      ...gifToRemove,
    },
  });

  if (
    (responseRemoveGifs.data as unknown as { code_error: string })?.code_error
  ) {
    return false;
  }

  return true;
};

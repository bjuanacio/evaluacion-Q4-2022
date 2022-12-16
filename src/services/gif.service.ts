import { Gif } from "../utils/interfaces/gif";
import axios from "axios";
import { AUTHOR_ID, GIFS_SERVICE } from "../utils/constants/author";

axios.defaults.timeout = 2000;

export const getGif = async () => {
  const response = await axios.get<Gif[]>(
    `${GIFS_SERVICE}/?author_id=${AUTHOR_ID}`
  );
  console.log(response);
  return response.data;
};

export const addGif = async (gif: Gif) => {
  const response = await axios.post<Gif>(`${GIFS_SERVICE}/`, gif);
  return response.data;
};

export const deleteGif = async (gif: Gif) => {
  await axios.delete(`${GIFS_SERVICE}/`, {
    data: {
      id: gif.id!,
      url: gif.url!,
      author_id: Number(gif.author_id),
    },
  });
  return true;
};

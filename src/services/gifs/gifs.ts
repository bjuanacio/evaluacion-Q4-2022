import axios from "axios";
import { AUTHOR_ID, API_URL } from "../../utils/constants/gifs";
import { Gif } from "./../../utils/interfaces/gif";

axios.defaults.timeout = 4000;

export const fetchGifs = async () => {
  const response = await axios.get<Gif[]>(`${API_URL}/?author_id=${AUTHOR_ID}`);
  return response.data;
};

export const addGif = async (gif: Partial<Gif>) => {
  const response = await axios.post<Partial<Gif>>(`${API_URL}`, gif);
  return response.data;
};

export const deleteGif = async (gif: Gif) => {
  await axios.delete(`${API_URL}`, { data: gif });
  return true;
};

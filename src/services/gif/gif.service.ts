import { Gif } from "../../utils/interfaces/gif";
import axios from "axios";
import { AUTHOR_ID } from "../../utils/interfaces/author";

const API_URL =
  "https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/";

axios.defaults.timeout = 2000;

export const fetchGifs = async () => {
  const response = await axios.get<Gif[]>(`${API_URL}/?author_id=${AUTHOR_ID}`);
  return response.data;
};
export const deleteGif = async (id: number) => {
  await axios.delete(`${API_URL}/?author_id=${AUTHOR_ID}`);
  return true;
};
export const addGif = async (gif: Gif) => {
    const response = await axios.post<Gif>(`${API_URL}`, gif)
    return response.data
}


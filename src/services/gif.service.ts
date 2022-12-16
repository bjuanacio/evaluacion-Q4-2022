import axios from 'axios';
import { AUTHOR_ID } from '../utils/constants/author';
import { GIFS_LIST } from '../utils/constants/gifs';
import { Gif } from '../utils/interfaces/gif';
const API_URL = 'https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws'
export const getGifs = async () => {
  const response = await axios.get<Gif[]>(`${API_URL}/?author_id=${AUTHOR_ID}`)
  return response.data;
}

export const addGif = async (gif: Gif) => {
  const newGif = {url: gif.url, author_id: AUTHOR_ID}
  const response = await axios.post<Gif[]>(`${API_URL}`,newGif)
  return response.data;
}

export const getDefaultGifs = () => {
  return GIFS_LIST;
}
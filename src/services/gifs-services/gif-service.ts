import axios from 'axios'
import { Gif } from '../../utils/interfaces/gif'

const API_URL = 'https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/'

export const getGifs = async () => {
  const { data } = await axios.get<Gif[]>(`${API_URL}?author_id=7`)
  return data
}

export const createGif = async (newGif: Gif): Promise<Gif> => {
    const response = await axios.post<Gif>(API_URL, newGif)
    return response.data
}


export const deleteGif = async (gif: Gif) => {
  const response = await axios.delete<Gif>(API_URL, gif)
  return response.data
}
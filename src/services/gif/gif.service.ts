import { Gif } from '../../utils/interfaces/gif'
import axios from 'axios'
import { AUTHOR_ID } from '../../utils/constants/author'

const API_URL = 'https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws'

export const fetchGifs = async () => {
  const headers = {
    author: AUTHOR_ID!
  }
  const response = await axios.get<Gif[]>(`${API_URL}`, { headers })
  return response.data
}

export const deleteGif = async (id: number) => {
  await axios.delete(`${API_URL}/gif/${id}`)
  return true
}

export const addGif = async (gif: Gif) => {
  const response = await axios.post<Gif>(`${API_URL}/gif`, gif)
  return response.data
}

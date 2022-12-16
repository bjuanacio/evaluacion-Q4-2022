import { Gif } from '../../utils/interfaces/gif'
import axios from 'axios'
import { AUTHOR_ID } from '../../utils/constants/author'

const API_URL = 'https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws'

axios.defaults.timeout = 2000

export const fetchGifs = async () => {
  const headers = {
    author_id: AUTHOR_ID!
  }
  const response = await axios.get<Gif[]>(`${API_URL}`, { headers })
  return response.data
}

export const deleteGif = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`)
  return true
}

export const addGif = async (player: Gif) => {
  const response = await axios.post<Gif>(`${API_URL}`, player)
  return response.data
}


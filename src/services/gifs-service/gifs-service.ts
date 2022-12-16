import axios from 'axios'
import { API_ENDPOINT, AUTHOR_ID } from '../../utils/constants/environment'
import { IGif } from '../../utils/interfaces/gif'

export const getAllGifs = async () => {
  const response = await axios.get(API_ENDPOINT, { params: { author_id: AUTHOR_ID } })
  return response.data as IGif[]
}

export const postGif = async (url: string) => {
  const response = await axios.post(API_ENDPOINT, { url, author_id: AUTHOR_ID })
  return response.data as IGif
}

export const deleteGifById = async (props: IGif) => {
  const response = await axios.delete(API_ENDPOINT, { data: props })
  return response.data as IGif
}

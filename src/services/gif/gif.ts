import axios from 'axios'
import { Gif } from '../../utils/interfaces/Gif'

const API_URL = 'https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws'

export class GifService {
  static async getGifs() {
    const { data } = await axios.get<Gif[]>(API_URL, { params: { author_id: '2' } })
    return data
  }

  static async deleteGif(gif: Gif) {
    await axios.delete(API_URL, { data: gif })
  }

  static async createGif(gif: Gif) {
    const { data } = await axios.post(API_URL, { ...gif, author_id: 2 })
    return data as Gif
  }
}
import axios from "axios";
import { AUTHOR_ID, BASE_URL } from "../../utils/constants/gifUrlConstants";
import { Gif } from "../../utils/interfaces/gif.interface";

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: { "Content-Type": "application/json" },
});

export class GifService {
  static async getGifs() {
    try {
      const { data } = await axiosInstance.get(`?author_id=${AUTHOR_ID}`);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  static async addNewGif(gif: Gif) {
    try {
      const body = {
        url: gif.url,
        author_id: gif.author_id,
      };
      const { data } = await axiosInstance.post("", body);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  static async deleteGif(gif: Gif) {
    try {
      const body = {
        id: gif.id,
        url: gif.url,
        author_id: AUTHOR_ID,
      };
      const { data } = await axiosInstance.delete("", body);
      if (data) {
        return data;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

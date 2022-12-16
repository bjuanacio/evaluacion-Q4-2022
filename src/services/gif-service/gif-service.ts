import axios from "axios";
import Gif from "../../utils/interfaces/gif";

export default class GifService {
  private static URL = process.env.REACT_APP_URL || "";
  private static AUTHOR_ID = process.env.REACT_APP_AUTHOR_ID || 9;

  static async getGifsByAuthorId() {
    const response = await axios.get<Gif[]>(
      `${this.URL}/?author_id=${this.AUTHOR_ID}`
    );
    return response.data;
  }

  static async postNewGif(url: string) {
    const response = await axios.post<Gif>(`${this.URL}/`, {
      url,
      author_id: this.AUTHOR_ID,
    });
    return response.data;
  }

  static async deleteGif(id: number, url: string) {
    const response = await axios.delete<Gif>(`${this.URL}/`, {
      data: {
        id,
        url,
        author_id: this.AUTHOR_ID,
      },
    });
    return response.data;
  }
}

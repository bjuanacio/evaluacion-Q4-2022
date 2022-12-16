import axios from "axios";
import { Gif } from "../store/reducers/gifs";

class GifAPI {
  static getAll = async () => {
    const { data } = await axios.get(
      `https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/?author_id=6`
    );
    return data;
  };
  static create = async (gif: Partial<Gif>) => {
    const { data } = await axios.post(
      "https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/",
      gif
    );
    return data;
  };
  static delete = async (gif: Gif) => {
    const { data } = await axios.delete(
      `https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/`,
      {data:gif}
    );
    return data;
  };
}

export default GifAPI;

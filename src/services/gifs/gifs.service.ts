import axios from "axios";
import { Gif } from "../../utils/interfaces/gifs";

const API_URL =
  "https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws";

const AUTHOR_ID = 11;

export const fetchGifs = async () => {
  const headers = { params: { author_id: AUTHOR_ID } };
  try {
    const result = await axios.get<Gif[]>(`${API_URL}`, headers);
    return result.data;
  } catch (e: any) {
    console.log(e);
    alert(e.message + " check console for details...");
  }
};

export const deleteGif = async (gif: Gif) => {
  try {
    const response = await axios.delete<Gif>(`${API_URL}`, {
      data: { ...gif, author_id: AUTHOR_ID },
    });
    return true;
  } catch (e: any) {
    console.log(e);
    alert(e.message + " check console for details...");
  }
};

export const postGif = async (gif: Gif) => {
  try {
    const response = await axios.post<Gif>(`${API_URL}`, {
      ...gif,
      author_id: AUTHOR_ID,
    });
    return response.data;
  } catch (e: any) {
    console.log(e);
    alert(e.message + " check console for details...");
  }
};

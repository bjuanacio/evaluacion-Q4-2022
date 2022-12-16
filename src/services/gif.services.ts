import axios from "axios";
import { AUTHOR_ID } from "../utils/constants/author";
import { GiftProps } from "../utils/interfaces";

const API_URL = process.env.REACT_APP_API_URL as string;

export const fetchGifts = async () => {
  const response = await axios.get<GiftProps[]>(
    `${API_URL}?author_id=${AUTHOR_ID}`
  );
  return response.data;
};

export const createGif = async (gif: GiftProps) => {
  const response = await axios.post<GiftProps>(`${API_URL}`, gif);
  return response.data;
};

export const deleteGif = async (gif: GiftProps) => {
  await axios.delete(`${API_URL}`, {data: gif});
  return true;
};

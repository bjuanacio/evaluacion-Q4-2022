import axios from "axios";
import { AUTHOR_ID } from "../../utils/constants/author";

const API_URL =
  "https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/";

export const fetchGifs = async () => {
  const params = {
    author_id: AUTHOR_ID,
  };
  const response = await axios.get(`${API_URL}`, { params });
  return response.data;
};

export const addGif = async (url: string) => {
  const data = { url: url, author_id: AUTHOR_ID };
  const response = await axios.post(`${API_URL}`, data);
  fetchGifs();
  return response.data;
};

export const deleteGif = async (id: number) => {
  const data = { id: id, url: "/", author_id: AUTHOR_ID };
  const response = await axios.delete(`${API_URL}`, { data });
  fetchGifs();
  return response.data;
};

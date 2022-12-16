import axios from "axios";
import { AUTHOR_ID } from "../utils/constants/author";
import { Gift } from "../utils/interfaces/gift";

const API_URL =
  "https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/";
const author_id = AUTHOR_ID;

axios.defaults.timeout = 2000;

export const getGifts = async () => {
  const response = await axios.get<Gift[]>(
    `${API_URL}/?author_id=${author_id}`
  );
  return response.data;
};

export const deleteGift = async (id: number) => {
  const body = {
    id: id,
    url: "example.com",
    author_id: author_id,
  };
  await axios.delete(`${API_URL}`, body);
};

export const addGift = async (url: string) => {
  const body = {
    url: url,
    author_id: author_id,
  };
  await axios.post(`${API_URL}`, body);
};

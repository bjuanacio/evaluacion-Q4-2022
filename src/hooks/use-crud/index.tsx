import axios from "axios";
import { useMemo } from "react";
import { AUTHOR_ID, BASE_URL } from "../../utils/constants/app";
import { Gif } from "../../utils/interfaces/gif.interface";

export const useCrud = () => {

  const buildRequestBody = (gif: Gif) => {
    return {
      ...gif,
      author_id: AUTHOR_ID,
    };
  }

  const post = useMemo(() => async (gif: Gif): Promise<Gif> => {
    const response = await axios.post(`${BASE_URL}`, buildRequestBody(gif));
    const { data } = response;
    return data;
  }, []);

  const get = useMemo(() => async (): Promise<Gif[]> => {
    const response = await axios.get<Gif[]>(`${BASE_URL}?author_id=${AUTHOR_ID}`);
    const { data } = response;
    return data;
  }, []);

  const remove = useMemo(() => async (gif: Gif): Promise<Gif> => {
    const response = await axios.delete(`${BASE_URL}`, { data: buildRequestBody(gif) });
    const { data } = response;
    return data;
  }, []);

  return { get, post, remove };
};

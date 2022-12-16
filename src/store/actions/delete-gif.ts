import { createAsyncThunk } from "@reduxjs/toolkit";
import GifAPI from "../../services/gif-service";
import { Gif } from "../reducers/gifs";

const deleteGif = createAsyncThunk(
  "gifs/delete",
  async (gif: Gif, thunkAPI) => {
    const data = await GifAPI.delete(gif);
    return data;
  }
);
export default deleteGif;

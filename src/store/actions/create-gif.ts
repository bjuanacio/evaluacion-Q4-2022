import { createAsyncThunk } from "@reduxjs/toolkit";
import GifAPI from "../../services/gif-service";
import { Gif } from "../reducers/gifs";


const createGif = createAsyncThunk(
  "gifs/create",
  async (gif: Partial<Gif>, thunkAPI) => {
    await GifAPI.create(gif);
    const response = await GifAPI.getAll();
    return response as Gif[];
  }
);
export default createGif;

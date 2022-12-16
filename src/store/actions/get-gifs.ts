import { createAsyncThunk } from "@reduxjs/toolkit";
import GifAPI from "../../services/gif-service";
import { Gif } from "../reducers/gifs";

//TODO:CHANGE AUTHORID

const getAllGifs = createAsyncThunk(
  "gifs/getAll",
  async (_, thunkAPI) => {
    const response = await GifAPI.getAll();
    return response as Gif[];
  }
);
export default getAllGifs;

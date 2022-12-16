import { createSlice } from "@reduxjs/toolkit";
import createGif from "../actions/create-gif";
import deleteGif from "../actions/delete-gif";
import getAllGifs from "../actions/get-gifs";

export type Loading = "idle" | "pending" | "succeeded" | "failed";

export interface Gif {
  id: number;
  url: string;
  author_id: number;
}

export interface GifReducerState {
  gifs: Gif[];
  state: Loading;
}

const initialState = { gifs: [], state: "idle" } as GifReducerState;

const gifSlice = createSlice({
  name: "Gifs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGifs.pending, (state) => {
      state.state = "pending";
    });
    builder.addCase(getAllGifs.rejected, (state) => {
      state.state = "failed";
    });
    builder.addCase(getAllGifs.fulfilled, (state, action) => {
      state.state = "succeeded";
      state.gifs = action.payload;
    });
    builder.addCase(deleteGif.pending, (state, action) => {
      state.gifs = state.gifs.filter((gif) => gif.id !== action.meta.arg.id);
    });
    builder.addCase(deleteGif.rejected, (state, action) => {
      state.state = "failed";
      state.gifs.unshift(action.meta.arg);
    });
    builder.addCase(createGif.rejected, (state) => {
      state.state = "failed";
    });
    builder.addCase(createGif.fulfilled, (state, action) => {
      state.state = "succeeded";
      state.gifs = action.payload;
    });
  },
});

export default gifSlice.reducer;

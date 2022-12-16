import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Gif } from "../../../utils/interfaces/gif.interface";

export interface GifsReducerState {
  fetchingGifs: boolean;
  deletingGif: boolean;
  addingGif: boolean;
  addGifError: string;
  gifsList: Gif[];
}

export const gifsReducerInitialState: GifsReducerState = {
  fetchingGifs: false,
  deletingGif: false,
  addingGif: false,
  addGifError: "",
  gifsList: [],
};

export const gifsSlice = createSlice({
  name: "pokemon",
  initialState: gifsReducerInitialState,
  reducers: {
    setFetchingGifs: (state, { payload: fetching }: PayloadAction<boolean>) => {
      state.fetchingGifs = fetching;
    },
    setDeletingGif: (state, { payload: deleting }: PayloadAction<boolean>) => {
      state.deletingGif = deleting;
    },
    setAddingGif: (state, { payload: adding }: PayloadAction<boolean>) => {
      state.addingGif = adding;
    },
    setAddGifError: (state, { payload: error }: PayloadAction<string>) => {
      state.addGifError = error;
    },
    setGifs: (state, { payload: gifs }: PayloadAction<Gif[]>) => {
      state.gifsList = gifs;
    },
    removeGif: (state, { payload: id }: PayloadAction<number>) => {
      state.gifsList = state.gifsList.filter((gif) => gif.id !== id);
    },
    addGif: (state, { payload: gif }: PayloadAction<Gif>) => {
      state.gifsList = [...state.gifsList, gif];
    },
  },
});

export default gifsSlice.reducer;

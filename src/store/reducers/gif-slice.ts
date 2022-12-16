import { createSlice } from "@reduxjs/toolkit";
import { Gif } from "../../utils/interfaces/gif";

interface GifInterface {
  gifList: Array<Gif>;
}

const initialState: GifInterface = {
  gifList: [],
};

export const gifSlice = createSlice({
  name: "gif",
  initialState,
  reducers: {
    setGifList: (state, action) => {
      state.gifList = action.payload;
    },
  },
});

export const { setGifList } = gifSlice.actions;

export default gifSlice.reducer;

import { RootState } from "../store";

export const selectFetchingGifs = (state: RootState) => state.gifs.fetchingGifs;
export const selectGifsList = (state: RootState) => state.gifs.gifsList;
export const selectAddingGif = (state: RootState) => state.gifs.addingGif;
export const selectAddGifError = (state: RootState) => state.gifs.addGifError;
export const selectDeletingGif = (state: RootState) => state.gifs.deletingGif;

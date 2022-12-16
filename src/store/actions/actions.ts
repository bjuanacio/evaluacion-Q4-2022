import {
  getGifs,
  deleteGif,
  createGif,
} from "../../services/gif-service/gif-service";
import { gifsSlice } from "../reducers/gifs-reducer/gifs-reducer";
import { AppThunk } from "../store";

export const {
  setFetchingGifs,
  setGifs,
  setDeletingGif,
  removeGif,
  setAddingGif,
  addGif,
  setAddGifError,
} = gifsSlice.actions;

export const startFetchingGifs = (): AppThunk => async (dispatch, getState) => {
  dispatch(setFetchingGifs(true));
  try {
    const { data: gifs } = await getGifs();
    dispatch(setGifs(gifs));
    dispatch(setFetchingGifs(false));
  } catch (error) {
    console.log(error);
    dispatch(setFetchingGifs(false));
    window.alert("Hubo un problema al cargar los Gifs");
  }
};

export const startDeletingGif =
  (id: number, url: string): AppThunk =>
  async (dispatch, getState) => {
    dispatch(setDeletingGif(true));
    try {
      await deleteGif({ id, url });
      dispatch(removeGif(id));
      dispatch(setDeletingGif(false));
    } catch (error) {
      console.log(error);
      dispatch(setDeletingGif(false));
      window.alert("Hubo un problema al borrar el Gif");
    }
  };

export const startAddingGif =
  (url: string): AppThunk =>
  async (dispatch, getState) => {
    dispatch(setAddingGif(true));
    try {
      const { data: gif } = await createGif({ url });
      dispatch(setAddingGif(false));
      dispatch(addGif(gif));
      dispatch(setAddGifError(""));
    } catch (error) {
      console.log(error);
      dispatch(setAddingGif(false));
      dispatch(setAddGifError("Hubo un problema al agregar el Gif"));
    }
  };

import { gifsReducerInitialState, GifsReducerState } from "./gifs-reducer";
import gifsSlice from "./gifs-reducer";
import {
  setFetchingGifs,
  setDeletingGif,
  setAddingGif,
  setAddGifError,
} from "../../actions/actions";
describe("Reducer One", () => {
  const initialState: GifsReducerState = gifsReducerInitialState;

  test("should handle initial state", () => {
    expect(gifsSlice(undefined, { type: "unknown" })).toEqual(initialState);
  });

  test("should change fetching gif flag value", () => {
    let state = gifsSlice(initialState, setFetchingGifs(true));
    expect(state.fetchingGifs).toBeTruthy();

    state = gifsSlice(initialState, setFetchingGifs(false));
    expect(state.fetchingGifs).toBeFalsy();
  });

  test("should change adding gif flag", () => {
    let state = gifsSlice(initialState, setAddingGif(true));
    expect(state.addingGif).toBeTruthy();

    state = gifsSlice(initialState, setAddingGif(false));
    expect(state.addingGif).toBeFalsy();
  });

  test("should change deleting gif flag", () => {
    let state = gifsSlice(initialState, setDeletingGif(true));
    expect(state.deletingGif).toBeTruthy();

    state = gifsSlice(initialState, setDeletingGif(false));
    expect(state.deletingGif).toBeFalsy();
  });

  test("should change addign Gif Error value", () => {
    let state = gifsSlice(
      initialState,
      setAddGifError("Hubo un problema al agregar el gif")
    );
    expect(state.addGifError).toBe("Hubo un problema al agregar el gif");
  });
});

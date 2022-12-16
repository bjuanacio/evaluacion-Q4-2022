import { RootState } from "../store";
import {
  selectFetchingGifs,
  selectGifsList,
  selectAddingGif,
  selectDeletingGif,
  selectAddGifError,
} from "./selectors";
import { gifsReducerInitialState } from "../reducers/gifs-reducer/gifs-reducer";
describe("Selectors tests", () => {
  const INIT_DATA: RootState = {
    gifs: gifsReducerInitialState,
  };

  it("should return fetchingGifs", () => {
    expect(selectFetchingGifs(INIT_DATA)).toBe(INIT_DATA.gifs.fetchingGifs);
  });

  it("should return gifs list", () => {
    expect(selectGifsList(INIT_DATA)).toBe(INIT_DATA.gifs.gifsList);
  });
  it("should return Adding Gif Flag", () => {
    expect(selectAddingGif(INIT_DATA)).toBe(INIT_DATA.gifs.addingGif);
  });
  it("should return Deleting Gif Flag", () => {
    expect(selectDeletingGif(INIT_DATA)).toBe(INIT_DATA.gifs.deletingGif);
  });
  it("should return Error Adding Gif", () => {
    expect(selectAddGifError(INIT_DATA)).toBe(INIT_DATA.gifs.addGifError);
  });
});

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import gifsSlice from "./reducers/gifs-reducer/gifs-reducer";

export const store = configureStore({
  reducer: {
    gifs: gifsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

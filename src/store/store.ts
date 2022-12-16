import { configureStore } from "@reduxjs/toolkit";
import gifReducer from "./reducers/gifs";

const store = configureStore({
  reducer: gifReducer,
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

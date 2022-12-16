import DeleteIcon from "./assets/delete-icon.svg";
import WarningIcon from "./assets/warning-icon.svg";

import "./app.scss";
import { deleteGif, fetchGifs } from "./services/gif-service/gif-service";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { setGifList } from "./store/reducers/gif-slice";
import GifCard from "./components/molecules/gif-card/gif-card";
import AddGifInput from "./components/atoms/add-gif-input/add-gif-input";

const App = () => {
  const dispatch = useAppDispatch();
  const fetchGifList = async () => {
    dispatch(setGifList(await fetchGifs()));
  };
  useEffect(() => {
    fetchGifList();
  }, []);

  const gifList = useAppSelector((state) => state.gif.gifList);

  return (
    <div className="app">
      <h1 className="app__title">Gif Galery</h1>
      <AddGifInput />
      <div className="app__gifContainer">
        {gifList.map((gif) => (
          <GifCard url={gif.url} id={gif.id!} key={gif.id} />
        ))}
      </div>
    </div>
  );
};

export default App;

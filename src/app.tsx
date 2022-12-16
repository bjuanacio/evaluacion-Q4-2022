import DeleteIcon from "./assets/delete-icon.svg";
import WarningIcon from "./assets/warning-icon.svg";

import "./app.scss";
import Button from "./components/atoms/button/button";
import Input from "./components/atoms/input/input";
import { MouseEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import getAllGifs from "./store/actions/get-gifs";
import createGif from "./store/actions/create-gif";
import Card from "./components/molecules/card/card";

const App = () => {
  const dispatch = useAppDispatch();
  const { gifs, state } = useAppSelector((state) => state);
  const [newGifInput, setNewGifInput] = useState<string>("");
  useEffect(() => {
    dispatch(getAllGifs());
  }, [dispatch]);
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(createGif({ url: newGifInput, author_id: 6 }));
  };

  return (
    <div className="app">
      <div>
        <Input
          placeholder="Gift URL"
          onChange={(e) => setNewGifInput(e.target.value)}
          value={newGifInput}
        />
        <Button onClick={(e) => handleSubmit(e)}>Agregar</Button>
      </div>
      <div>
        {Boolean(gifs?.length) &&
          gifs.map((gif) => <Card gif={gif} key={gif.id} />)}
      </div>
      <div>{Boolean(state === "failed") && 
      <div>
        <img src={WarningIcon} alt="Warning" />
        <span>Something went wrong</span>
      </div>
      }</div>
    </div>
  );
};

export default App;

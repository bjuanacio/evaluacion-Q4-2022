import Input from "./components/atoms/input/input";
import { useContext, useState } from "react";
import { GifProvider } from "./context/GifContext";
import GifContext from "./context/GifContext";
import "./app.scss";
import React from "react";

const App = () => {
  const [text, setText] = useState("");
  const gifs = useContext(GifContext);

  const handleTextChange = ({ target: { value } }: any) => {
    setText(value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setText("");
    console.log(gifs);
  };

  return (
    <GifProvider>
      <div className="app">
        <div className="form-container">
          <h1 className="title">Gif Galery</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <Input
                name={"gif"}
                placeholder="gift URL"
                value={text}
                onChange={handleTextChange}
              />
              <button className="button" type="submit">
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </GifProvider>
  );
};

export default App;

import "./app.scss";
import Header from "./components/organisms/header/header";
import { useState } from "react";
import Card from "./components/molecules/card/card";
import { Gif } from "./utils/interfaces/gif";

const App = () => {
  const [inputUrl, setInputUrl] = useState("");

  const handleUrlInputChange = (text: string) => setInputUrl(text);

  const handleAddClick = () => console.log(inputUrl);

  const handleDeleteClick = (gif: Gif) => console.log(gif);

  return (
    <div className="app">
      <Header
        handleAddClick={handleAddClick}
        handleUrlInputChange={handleUrlInputChange}
        title="Gif Gallery"
      />

      <Card
        gif={{
          author_id: 15,
          id: 1,
          url: `https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif`,
        }}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default App;

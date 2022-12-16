import { useEffect, useState } from "react";
import GifService from "../../../services/gif-service/gif-service";
import Gif from "../../../utils/interfaces/gif";
import SearchGif from "../../molecules/search-gif/search-gif";
import GifList from "../../organisms/gif-list/gif-list";

const GifGaleryPage = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSearchInput = (value: string) => {
    setError("");
    setUrl(value);
  };

  const addGif = async () => {
    try {
      const responseGif = await GifService.postNewGif(url);
      setGifs([...gifs, responseGif]);
      setUrl("");
    } catch (error) {
      setError("Error al agregar gif");
    }
  };

  const getGifs = async () => {
    try {
      const responseGifs = await GifService.getGifsByAuthorId();
      setGifs(responseGifs);
    } catch (error) {
      setError("Error al obtener gifs");
    }
  };

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <div data-testid="gifgalerypage-testid">
      <h1>Gif Galery</h1>
      <SearchGif
        inputValue={url}
        onChange={handleSearchInput}
        onClick={addGif}
        errorMessage={error}
      />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifGaleryPage;

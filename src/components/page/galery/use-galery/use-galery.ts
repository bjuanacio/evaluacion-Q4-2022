import { useEffect, useState } from "react";
import {
  addGif,
  getGifs,
  removeGif,
} from "../../../../services/gif/gif-services";
import { Gif } from "../../../../utils/interfaces/gif";

function useGalery() {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    getGifs()
      .then((responseGifs) => setGifs(responseGifs))
      .catch(() => {
        setErrorMessage("No se pudo obtener los GIFs");
      });
  }, []);

  const handleAddGif = (urlGif: string) => {
    setValue(urlGif);
    addGif(urlGif)
      .then((response) => setGifs([...gifs, response]))
      .catch(() => {
        setValue("");
        setErrorMessage("No se pudo agregar el GIF");
      });
  };

  const handleDeleteGif = (gif: Gif) => {
    removeGif(gif)
      .then(() => {
        const newGifs = gifs.filter((item) => item.id !== gif.id);
        setGifs(newGifs);
      })
      .catch(() => {
        setErrorMessage("No se pudo eliminar el GIF");
      });
  };

  return {
    gifs,
    handleAddGif,
    handleDeleteGif,
    errorMessage,
    value,
  };
}

export default useGalery;

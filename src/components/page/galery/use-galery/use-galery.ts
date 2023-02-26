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

  const handleAddGif = async (urlGif: string) => {
    try {
      setValue(urlGif);

      if (!urlGif) {
        throw new Error("Debe agregar una cadena de texto");
      }

      const response = await addGif(urlGif);
      setGifs([...gifs, response]);
    } catch (error) {
      setValue("");
      setErrorMessage(
        (error as { message: string })?.message ?? "No se pudo agregar el GIF"
      );
    }
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

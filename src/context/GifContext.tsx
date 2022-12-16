import { createContext, useState, useEffect } from "react";
import { GifContextType, IGif } from "./types";

const GifContext = createContext<GifContextType | null>(null);

export const GifProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [gifs, setGifs] = useState<IGif[]>([
    {
      id: "392",
      url: "https://media.tenor.com/ooc8rKAkdlwAAAAd/captain-america-avengers.gif",
      author_id: "5",
    },
    {
      id: "393",
      url: "https://media.tenor.com/z8OOIl8B7dwAAAAC/avengers-thor.gif",
      author_id: "5",
    },
    {
      id: "396",
      url: "https://media.tenor.com/ZnhwH25PoVgAAAAC/avengers-assemble.gif",
      author_id: "5",
    },
  ]);

  useEffect(() => {
    fetchGif();
  }, []);

  const fetchGif = async () => {
    /*const response = await axios
      .get("https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/?author_id=5")
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));*/
    const response = await fetch(
      `https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/?author_id=5`
    );
    const data = await response.json();
    setGifs(data);
    setIsLoading(false);
    console.log(gifs);
    setIsLoading(false);
  };

  return (
    <GifContext.Provider
      value={
        {
          gifs,
          isLoading,
        } as GifContextType
      }
    >
      {children}
    </GifContext.Provider>
  );
};

export default GifContext;

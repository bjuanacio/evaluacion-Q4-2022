import React, { useContext } from "react";
import { GifsContext } from "../../../context/gifs-context/gifs-context";

const useGifs = () => {
  const { gifList, addGif, deleteGif } = useContext(GifsContext);
  return { gifList, addGif, deleteGif };
};

export default useGifs;

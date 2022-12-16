import { useEffect } from "react";
import { useGifContext } from "./../../../../context/gif-context/gif-context";

const useLanding = () => {
  const { handleChangeModal, gifList, deleteGif, activeModal, getGifs } =
    useGifContext();

  const fetchData = () => {
    getGifs();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    handleChangeModal,
    gifList,
    deleteGif,
    fetchData,
    activeModal,
  };
};

export default useLanding;

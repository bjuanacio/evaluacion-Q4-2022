import { useEffect, useState } from "react";
import { Gif } from "../../../utils/interfaces/gif";
import {
  getGif as getGifService,
  addGif as addGifService,
  deleteGif as deleteGifService,
} from "../../../services/gif.service";
import { GifStateContext } from "../gif-context";

const useGif = (initialValues?: Partial<GifStateContext>) => {
  const [activeModal, setActiveModal] = useState(
    initialValues?.activeModal || false
  );
  const [gifList, setGifList] = useState<Gif[]>(initialValues?.gifList || []);

  const handleChangeModal = () => {
    setActiveModal(!activeModal);
  };

  const getGifs = () => {
    getGifService().then((res) => {
      setGifList(res);
    });
  };

  const addGifs = async (gif: Gif) => {
    console.log(gif);
    await addGifService(gif);
    getGifs();
    setActiveModal(false);
  };

  const deleteGif = (gif: Gif) => {
    console.log("DATA", gif);
    deleteGifService(gif).then(() => {
      getGifs();
    });
  };

  return {
    gifList,
    activeModal,
    addGifs: initialValues?.addGifs ?? addGifs,
    handleChangeModal,
    deleteGif,
    getGifs: initialValues?.getGifs ?? getGifs,
  };
};

export default useGif;

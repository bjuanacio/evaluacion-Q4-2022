import { useState } from "react";
import { Gif } from "../../../../utils/interfaces/gif";
import { GifFormProps } from "../gif-form";
import { EMPTY_GIF } from "../../../../utils/constants/gif";

const useGifForm = ({ initialValues, onSubmit }: GifFormProps) => {
  const [gif, setGif] = useState<Gif>(initialValues || EMPTY_GIF);

  const isButtonEnabled = () => {
    const { url } = gif;
    console.log(url);
    return url;
  };

  const handleChangeInput = (value: string | number, key?: keyof Gif) => {
    setGif({
      ...gif,
      [key!]: value,
    });
  };

  const controlGif = () => {
    onSubmit(gif);
  };

  return {
    gif,
    isButtonEnabled,
    handleChangeInput,
    controlGif,
  };
};

export default useGifForm;

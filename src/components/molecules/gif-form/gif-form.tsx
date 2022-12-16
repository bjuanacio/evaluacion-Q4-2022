import React, { FC } from "react";
import { Input } from "../../atoms/input/input";
import { Gif } from "../../../utils/interfaces/gif";
import useGifForm from "./use-gif-form/use-gif-form";
import { Button } from "../../atoms/button/button";
import { DEFAULT_IMAGE } from "../../../utils/constants/gif";
import "./gif-form.scss";

export interface GifFormProps {
  initialValues?: Gif;
  onSubmit: (gif: Gif) => void;
}

const GifForm: FC<GifFormProps> = (props) => {
  const { handleChangeInput, gif, isButtonEnabled, controlGif } =
    useGifForm(props);
  let disabled = true;
  if (gif.url.length > 0) {
    disabled = false;
  }
  return (
    <div className="gif-form__container">
      <div className="gif-form__image-column">
        <img
          className="gif-form__image"
          src={gif.url ? gif.url : DEFAULT_IMAGE}
          alt={"gif-" + gif.id}
        />
      </div>
      <Input
        label="Url Gif"
        placeholder="Url"
        onChange={handleChangeInput}
        value={gif.url}
        variant={gif.url ? "normal" : "error"}
        errorMessage={gif.url ? "" : "Url invalida"}
        name="url"
      />
      <Button disabled={disabled} onClick={controlGif}>
        Agregar Gif
      </Button>
    </div>
  );
};

export default GifForm;

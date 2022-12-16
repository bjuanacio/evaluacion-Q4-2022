import { FC } from "react";
import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";

import "./search-gif.scss";
import {infoText} from "../../../utils//enums/info-text"
interface SearchGifProps {
  onChange: (value: string) => void;
  onClick: () => void;
  inputValue: string;
  errorMessage?: string;
}

const SearchGif: FC<SearchGifProps> = ({
  onChange,
  onClick,
  inputValue,
  errorMessage,
}) => {
  return (
    <div className="search-gif">
      <Input
        onChange={onChange}
        placeholder={infoText.PLACEHOLDER_GIF_TITLE}
        value={inputValue}
        error={errorMessage}
      />
      <Button text={infoText.ADD_GIF_MODAL_BUTTON} onClick={onClick} />
    </div>
  );
};

export default SearchGif;

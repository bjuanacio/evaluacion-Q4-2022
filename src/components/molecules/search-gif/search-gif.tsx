import { FC } from "react";
import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";

import "./search-gif.scss";

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
  const isButtonDisabled = !inputValue;

  return (
    <div className="search-gif">
      <Input
        onChange={onChange}
        placeholder="Gif URL"
        value={inputValue}
        error={errorMessage}
      />
      <Button text="Agregar" onClick={onClick} disabled={isButtonDisabled} />
    </div>
  );
};

export default SearchGif;

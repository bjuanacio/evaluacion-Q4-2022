import { FC, useRef, useState } from "react";
import { Button } from "../../atoms/button/button";
import { Input } from "../../atoms/input/input";
import "./top-bar.scss";

interface TopBarProps {
  handleUrlInputChange: (url: string) => void;
  handleAddClick: () => void;
  errorInService: boolean
}

export const TopBar: FC<TopBarProps> = ({
  handleUrlInputChange,
  handleAddClick,
  errorInService = false
}) => {
  const [inputState, setInputState] = useState<"normal" | "error">("normal");
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if(inputRef?.current?.value.trim() === '') {
      setInputState("error")
      return;
    }
    setInputState("normal")
    handleAddClick();
  };

  return (
    <div className="top-bar">
      <Input
        placeholder="Gift URL"
        onChange={handleUrlInputChange}
        className="top-bar__field"
        variant={errorInService? 'error' : inputState}
        inputRef={inputRef}
      />
      <Button onClick={handleClick}>Agregar</Button>
    </div>
  );
};

export default TopBar;

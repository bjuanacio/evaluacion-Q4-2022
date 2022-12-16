import { FC } from "react";
import { Button } from "../../atoms/button/button";
import { Input } from "../../atoms/input/input";
import "./top-bar.scss";

interface TopBarProps {
  handleUrlInputChange: (url: string) => void;
  handleAddClick: () => void;
}

export const TopBar: FC<TopBarProps> = ({
  handleUrlInputChange,
  handleAddClick,
}) => {
  return (
    <div className="top-bar">
      <Input placeholder="Gift URL" onChange={handleUrlInputChange} className="top-bar__field" />
      <Button onClick={handleAddClick}>Agregar</Button>
    </div>
  );
};

export default TopBar;

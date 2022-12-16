import { FC } from "react";
import { Button } from "../../atoms/button/button";
import { Input } from "../../atoms/input/input";
import './top-bar.scss'

interface TopBarProps {
  handleAddGift: () => void;
  handleTerm: (term: string) => void;
  term: string;
}

export const TopBar: FC<TopBarProps> = (props) => {
  return (
    <div className="top-bar">
      <Input
        value={props.term}
        placeholder="Gift URL"
        onChange={props.handleTerm}
        type="text"
      />
      <Button onClick={props.handleAddGift}>Agregar</Button>
    </div>
  );
};

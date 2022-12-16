import { FC, useState } from "react";
import deleteGif from "../../../store/actions/delete-gif";
import { useAppDispatch } from "../../../store/hooks";
import { Gif } from "../../../store/reducers/gifs";
import Button from "../../atoms/button/button";
import DeleteIcon from "../../../assets/delete-icon.svg";
export interface CardProps {
  gif: Gif;
}

const Card: FC<CardProps> = ({ gif }) => {
  const dispatch = useAppDispatch();
  const [showSettings, setShowSettings] = useState(false);
  return (
    <div>
      <Button onClick={() => setShowSettings(true)} variant="secondary" data-testid={'delete'}>
        <img className="app__icon" src={DeleteIcon} alt="Delete icon" />
      </Button>
      <img src={gif.url} alt={gif.url} />
      {showSettings && (
        <div>
          <span>Deseas eliminar este gif?</span>
          <Button onClick={() => dispatch(deleteGif(gif))}>Eliminar</Button>
          <Button onClick={() => setShowSettings(false)}>Cancelar</Button>
        </div>
      )}
    </div>
  );
};
export default Card;

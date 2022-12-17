import { FC } from "react";
import { Button } from "../../atoms/button.tsx/button";
import "./card.scss";
import imgDelete from "../../../assets/delete-icon.svg";
import { useState } from "react";
interface cardProps {
  onClick: (id: any, url: any) => void;
  item: any;
}
export const Card: FC<cardProps> = ({ onClick, item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="container">
      {hover && (
        <div className="hover">
          <h4 className="hover__title">¿Desea eliminar este gif?</h4>

          <div className="content-button">
            <Button
              className="content-button__button-delete"
              onClick={() => onClick(item.id, item.url)}
            >
              Eliminar
            </Button>
            <Button
              className="content-button__button-cancel"
              onClick={() => setHover(false)}
            >
              Cancelar
            </Button>
            /
          </div>
        </div>
      )}
      <div className="header">
        <Button
          onClick={() =>  setHover(true)}
          className="header__button"
        >
          <img data-testid="delete" onClick={() => setHover(true)} src={imgDelete} />
        </Button>
      </div>
      <img src={item.url} className="container__img" alt="gif" />
    </div>
  );
};

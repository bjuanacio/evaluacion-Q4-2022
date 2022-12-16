import { FC } from "react";
import { Button } from "../../atoms/button.tsx/button";
import "./card.scss";
import imgDelete from "../../../assets/delete-icon.svg";
interface cardProps {
  onClick: (id: any, url:any) => void;
  item: any;
}
export const Card: FC<cardProps> = ({ onClick, item }) => {
  return (
    <div className="container">
      <div className="header">
        <Button
          onClick={() => onClick(item.id,item.url )}
          className="header__button"
        >
          <img   onClick={() => onClick(item.id,item.url )} src={imgDelete} />
        </Button>
      </div>
      <img src={item.url} className="container__img" alt="gif" />
    </div>
  );
};

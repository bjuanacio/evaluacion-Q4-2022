import { FC } from "react";
import { Gif } from "../../../utils/interfaces/gif";
import { Button } from "../../atoms/button/button";
import { Input } from "../../atoms/input/input";
import "./add.scss";

interface SearchProps {
  handleChangeModal: () => void;
}

const Add: FC<SearchProps> = (props) => {
  return (
    <>
      <div className="search">
        <div className="search__button">
          <Button onClick={props.handleChangeModal}>Nuevo</Button>
        </div>
      </div>
    </>
  );
};

export default Add;

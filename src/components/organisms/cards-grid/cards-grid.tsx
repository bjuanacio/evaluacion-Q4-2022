import React, { FC, useEffect } from "react";
import { Gift } from "../../../utils/interfaces/gift";
import WarningIcon from "../../../assets/warning-icon.svg";
import "./cards-grid.scss";
import { CardGif } from "../../molecules/card/card";

interface ListGiftProps {
  giftsList: Gift[];
}

const CardsGrid: FC<ListGiftProps> = (props) => {
  if (props.giftsList.length === 0)
    return (
      <div className="no-data">
        <img className="app__icon" src={WarningIcon} alt="Warning icon" />
        <span>No posee gifs</span>
      </div>
    );

  return (
    <>
      {props.giftsList.map((gif: Gift) => {
        <div>
          <h1>HOLA</h1>
        </div>;
      })}
    </>
  );
};

export default CardsGrid;

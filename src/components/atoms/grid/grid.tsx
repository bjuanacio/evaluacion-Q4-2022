import React, { FC } from "react";
import "./grid.scss";

interface GridProps {}

export const Grid: FC<GridProps> = ({}) => {
  return (
    <section className="grid">
      <div className="box">
        <img
          src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg"
          height="150"
        ></img>
      </div>

      <div className="box">
        <img
          src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background-748x421.jpg"
          height="150"
        ></img>
      </div>
      
    </section>

    
  );
};

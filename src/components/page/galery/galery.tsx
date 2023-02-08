import { useState } from "react";
import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
import AddInput from "../../molecules/add-input/add-input";
import "./galery.scss";

function Galery() {
  return (
    <div className="galery">
      <Input placeHolder="Gift URL" messageError="esto es un error" />
      <AddInput onAdd={(value) => console.log(value)} placeHolder="Gift URL" />
      <h1>Galey</h1>
      <section>
        <div>Input</div>
        <Button onClick={() => {}}>Agregar</Button>
      </section>
      <section>Galery</section>
    </div>
  );
}

export default Galery;

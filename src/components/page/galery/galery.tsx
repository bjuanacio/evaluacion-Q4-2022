import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
import "./galery.scss";

function Galery() {

  return (
    <div className="galery">
      <Input placeHolder="Gift URL"  messageError="esto es un error"/>
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

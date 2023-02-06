import Button from "../../atoms/button/button";
import "./galery.scss"

function Galery() {
  return (
    <div className="galery">
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

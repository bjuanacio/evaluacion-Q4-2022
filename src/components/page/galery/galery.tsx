import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
import AddInput from "../../molecules/add-input/add-input";
import Card from "../../molecules/card/card";
import "./galery.scss";

function Galery() {
  return (
    <div className="galery">
      <Input placeHolder="Gift URL" messageError="esto es un error" />
      <AddInput onAdd={(value) => console.log(value)} placeHolder="Gift URL" />
      <Card
        gif={{
          id: 2,
          url: "https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif",
        }}
        onDeleteGif={(gif) => {
          console.log("este gif se va a eliminar:", gif);
        }}
      />
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

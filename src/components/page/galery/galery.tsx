import EmptyMessage from "../../atoms/empty-message/empty-message";
import AddInput from "../../molecules/add-input/add-input";
import Card from "../../molecules/card/card";
import useGalery from "./use-galery/use-galery";

import "./galery.scss";

function Galery() {
  const { gifs, errorMessage, value, handleAddGif, handleDeleteGif } =
    useGalery();

  return (
    <div className="galery">
      <section className="galery__container">
        <div className="galery__title">
          <h1 className="galery__title-h1">Gif Galery</h1>
        </div>
        <div className="galery__input-container">
          <AddInput
            onAdd={handleAddGif}
            placeHolder="Gift URL"
            messageError={errorMessage}
            value={value}
          />
        </div>

        <div className="galery__grid">
          {gifs.length > 0 &&
            gifs.map((card) => (
              <Card key={card.id} gif={card} onDeleteGif={handleDeleteGif} />
            ))}
        </div>
        {gifs.length === 0 && <EmptyMessage message="No posee gifs" />}
      </section>
    </div>
  );
}

export default Galery;

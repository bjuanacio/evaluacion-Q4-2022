import { useGifsContext } from "../../../context/gif-context/gifs-context";
import { CardsGrid } from "../../organisms/cards-grid/cards-grid";
import { TopBar } from "../../organisms/top-bar/top-bar";
import useDeck from "./use-deck/use-deck";
import { InfoText } from "../../../utils/enums/info-text";

const Deck = () => {
  const {
    addGif,
    gifsList,
    addActiveGif,
    deleteGif,
    handleGifUrl,
    gifUrl
  } = useDeck();

  return (
    <div className="deck">
      <h1 className="deck__title">{InfoText.TITLE}</h1>
      <TopBar
        handleGifUrl={handleGifUrl}
        gifsList={gifsList}
        handleAddGif={addGif!}
        gifUrl={gifUrl}
      />
      <CardsGrid
        gifsList={gifsList}
        deleteGif={deleteGif!}
        setActiveGif={addActiveGif!}
      />
    </div>
  );
};

export default Deck;

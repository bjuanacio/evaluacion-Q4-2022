import { TopBar } from "../../organisms/top-bar/top-bar";
import useDeck from "./use-deck/use-deck";
import './deck.scss';
import CardsGrid from "../../organisms/cards-grid/cards-grid";

const Deck = () => {
  const { term, giftsList, handleAddGift, handleTerm } = useDeck();
  return (
    <div className="deck">
      <h1>Gif Galery</h1>
      <TopBar
        term={term}
        handleAddGift={handleAddGift}
        handleTerm={handleTerm}
      />
      <CardsGrid giftsList={giftsList}/>
    </div>
  );
};

export default Deck

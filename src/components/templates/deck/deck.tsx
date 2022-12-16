import { TopBar } from "../../organisms/top-bar/top-bar";
import useDeck from "./use-deck/use-deck";
import './deck.scss';

const Deck = () => {
  const { term, handleAddGift, handleTerm } = useDeck();
  return (
    <div className="deck">
      <h1>Gif Galery</h1>
      <TopBar
        term={term}
        handleAddGift={handleAddGift}
        handleTerm={handleTerm}
      />
    </div>
  );
};

export default Deck

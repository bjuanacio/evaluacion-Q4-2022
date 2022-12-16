import { TopBar } from "../../organisms/top-bar/top-bar";
import useDeck from "./use-deck/use-deck";

const Deck = () => {
  const { term, handleAddGift, handleTerm } = useDeck();
  return (
    <div className="deck">
      <TopBar
        term={term}
        handleAddGift={handleAddGift}
        handleTerm={handleTerm}
      />
    </div>
  );
};

export default Deck

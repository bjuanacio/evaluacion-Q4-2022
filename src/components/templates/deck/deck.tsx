
import useDeck from './use-deck/use-deck'
import CardsGrid from '../../organisms/cards-grid/cards-grid';
import TopBar from '../../organisms/top-bar/top-bar';

const Deck = () => {
  const {
    gifsList,
    addGif,
    deleteGif,
    handleChangeInput,
    inputValue,
  } = useDeck()

  return (
    <div className="deck">

      <TopBar
        value={inputValue}
        handleChangeInput={handleChangeInput}
        addGif={addGif!}
      />

      <CardsGrid
        gifsList={gifsList}
        deleteGif={deleteGif!}
      />
      
    </div>
  )
}

export default Deck

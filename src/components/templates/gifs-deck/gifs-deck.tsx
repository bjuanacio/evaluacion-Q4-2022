import { CardsGrid } from '../../organisms/cards-grid/cards-grid';
import { useGetGifs } from '../../organisms/cards-grid/use-get-gifs/use-get-gifs'
import { GifForm } from '../../organisms/gif-form/gif-form';
import WarningIcon  from '../../../assets/warning-icon.svg';
import './gifs-deck.scss'
export const GifsDeck = () => {
  const { gifsList } = useGetGifs();
  return (
    <div className="deck">
      <p className='deck__title'>Gif Gallery</p>
      <GifForm/>
      <CardsGrid gifs={gifsList}/>
      { gifsList.length <= 0 && <div className="deck__empty-wrapper">
        <img className="deck__empty-icon" src={WarningIcon}></img>
        <span className="deck__empty-message">No posee gifs</span>
      </div> }
    </div>
  )
}
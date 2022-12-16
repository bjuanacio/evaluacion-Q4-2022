import './cards-grid.scss'

import Card from '../../molecules/card/card'
import { FC } from 'react'
import { GiftProps } from '../../../utils/interfaces/index';
import DeleteIcon from '../../../assets/warning-icon.svg'
interface DeckListProps {
  gifsList: GiftProps[]
  deleteGif: (gif: GiftProps) => void
}
const CardsGrid: FC<DeckListProps> = (props) => {

  if ( props.gifsList.length === 0 ) {
    return (
      <div className='no-gifs'>
        <div>
          <img className="no-gifs__icon" src={DeleteIcon} alt="delete-icon" />
        </div>
        <h2 className='no-gifs__text'>
            No posee gifs
        </h2>
      </div>
    )
  }

  return (
    <div className="cards-grid">
      {props.gifsList.map((gif, index) => (
        <div key={`card-item-${index}`} className="cards-grid__item">
          <Card
            gif={gif}
            deleteGif={props.deleteGif}
            key={`player-card-${index}`}
          />
        </div>
      ))}
    </div>
  )
}

export default CardsGrid

import './cards-grid.scss'
import { Gif } from '../../../utils/interfaces/gif'
import Card from '../../molecules/card/card'
import { FC } from 'react'
import WarningIcon from "./../../../assets/warning-icon.svg";
import './cards-grid.scss'

interface DeckListProps {
  gifsList: Gif[]
  deleteGif: (id: number) => void
  searchTerm: string
}

const CardsGrid: FC<DeckListProps> = (props) => {
  if (props.gifsList.length === 0) return (
    <div className='cards-grid__message'>
        <img src={WarningIcon} alt="warning-icon" />
        <h2 className='cards-grid__text'>No posee gifs</h2>
    </div>
  )

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

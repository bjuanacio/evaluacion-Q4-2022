import './cards-grid.scss'
import { Gif } from '../../../utils/interfaces/gif'
import Card from '../../molecules/card/card'
import { FC } from 'react'
interface DeckListProps {
  playersList: Gif[]
  deleteGif: (id: number) => void
}
const CardsGrid: FC<DeckListProps> = (props) => {

  return (
    <div className="cards-grid">
      {props.playersList.map((gif, index) => (
        <div key={`card-item-${index}`} className="cards-grid__item">
          <Card
            gif={gif}
            deleteGif={props.deleteGif}
            key={`gif-card-${index}`}
          />
        </div>
      ))}
    </div>
  )
}

export default CardsGrid
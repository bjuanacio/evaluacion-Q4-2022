import './cards-grid.scss'
import { Gif } from '../../../utils/interfaces/gif'
import Card from '../../molecules/card/card'
import { FC } from 'react'
import warningIcon from '../../../assets/warning-icon.svg'
interface DeckListProps {
  gifsList: Gif[]
  deleteGif: (id: number) => void
  setActiveGif: (id: number) => void
}
export const CardsGrid: FC<DeckListProps> = (props) => {
  if (props.gifsList.length === 0) return (
  <div className='cards-grid-empty'>
    {warningIcon}
    <h2>No Posee Gifs</h2>
  </div>
  )

  return (
    <div className="cards-grid">
      {props.gifsList.map((gif, index) => (
        <div key={`card-item-${index}`} className="cards-grid__item">
          <Card
            gif={gif}
            deleteGif={props.deleteGif}
            setActiveGif={props.setActiveGif}
            key={`gif-card-${index}`}
          />
        </div>
      ))}
    </div>
  )
}

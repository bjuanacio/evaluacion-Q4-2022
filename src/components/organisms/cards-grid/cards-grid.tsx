import { FC } from 'react'
import { Gif } from '../../../utils/interfaces/gif'
import { Card } from '../../molecules/card/card'
import './cards-grid.scss'

interface CardsGridProps {
  gifs: Gif[]
}
export const CardsGrid: FC<CardsGridProps> = ({ gifs }) => {
  return (
    <div className='grid'>
      {gifs.map((gif) => (
        <Card key={gif.id} gif={gif.url}/>
      ))}
    </div>
  )
}
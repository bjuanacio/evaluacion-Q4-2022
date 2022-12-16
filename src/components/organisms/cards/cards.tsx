import './cards.scss'
import { FC } from 'react'

import Card from '../../molecules/card/card'
import { Gif } from '../../../utils/interfaces/gif'
import WarningIcon from "../../../assets/warning-icon.svg";

interface CardsProps {
  gifList: Gif[]
}

const Cards: FC<CardsProps> = ({ gifList }) => {

  if (gifList.length === 0) return (
    <>
      <img className="app__icon" src={WarningIcon} alt="Warning icon" />
      <h2>No posee gifs.</h2>
    </>
  )


  const deleteGift = (id: any) => {
    console.log(id)
  }
  return (
    <div className="cards">
      {gifList.map((gif) => (
        <div key={`card-item-${gif.id}`} className="cards__item">
          <Card
            gif={gif}
            key={`card-${gif.id}`}
          />
        </div>
      ))}
    </div>
  )
}

export default Cards

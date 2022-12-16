import { FC } from 'react'
import { Gif } from '../../../utils/interfaces/gif'
import { Button } from '../../atoms/button/button'
import DeleteIcon from '../../../assets/delete-icon.svg'
import './card.scss'

interface CardProps {
  gif: Gif
  deleteGif: (id: number) => void
}

const Card: FC<CardProps> = (props) => {
  return (
    <div className="card">
      <div className="card__header">
        <div className='card-body__containerButton'>
            <Button size="small" onClick={() => props.deleteGif(props.gif.id!)} >
                <img className="card-body__icon" src={DeleteIcon} alt="delete-icon" />
            </Button>
        </div>
        <img
          src={props.gif.url}
          className="card__image"
        ></img>
      </div>
    </div>
  )
}

export default Card

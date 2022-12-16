import { FC } from 'react'
import { Gif } from '../../../utils/interfaces/gif'
import { Button } from '../../atoms/button/button'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'
import './card.scss'

interface CardProps {
  gif: Gif
  deleteGif: (id: number) => void
}

const Card: FC<CardProps> = (props) => {
  return (
    <div className="card">
      <div className="card__header">
        <img
          src={props.gif.url}
          className="card__image"
          alt={`${props.gif.id}`}
        />
      </div>
        <div className="card__buttons-wrapper">
          <Button size="small" onClick={() => props.deleteGif(props.gif.id!)}>
            <img className="card-body__icon" src={DeleteIcon} alt="delete-icon" />
          </Button>
        </div>
      </div>
    
  )
}

export default Card
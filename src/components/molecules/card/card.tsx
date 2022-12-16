import { FC, useState } from 'react';

import { GiftProps } from '../../../utils/interfaces/index';
import DeleteIcon from '../../../assets/delete-icon.svg'
import './card.scss'
import { Button } from '../../atoms/button/button';

interface CardProps {
  gif: GiftProps
  deleteGif: (gif: GiftProps) => void
}

const Card: FC<CardProps> = (props) => {

  const [displayDelete, setDisplayDelete] = useState(false)
  return (
    <div className="card" data-testId="card">
      <div className="card__header">
        <img
          src={props.gif.url}
          className="card__image"
          alt={`${props.gif.url}`}
        />
        <div className="card__info-wrapper">
          { displayDelete &&
            <>
              <span className="card__gif-message">
                ¿Deseas eliminar este gif?
              </span>
              <Button onClick={() => props.deleteGif(props.gif)}>
                Eliminar
              </Button>
              <br/>
              <Button btnSecundary={true} onClick={() => setDisplayDelete(false)}>
                Cancelar
              </Button>
            </>
          }
        </div>
      </div>
      <div className="card__buttons-wrapper">
          <div onClick={() => setDisplayDelete(true)}>
            <img className="card-body__icon" src={DeleteIcon} alt="delete-icon" />
          </div>
        </div>

    </div>

  )
}

export default Card

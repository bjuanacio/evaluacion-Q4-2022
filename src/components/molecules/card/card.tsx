import { FC, useState } from 'react';
import { ButtonBP } from '../../atoms/button/button'
import DeleteIcon from '../../../assets/delete-icon.svg'
import './card.scss'
import { Gif } from '../../../utils/interfaces/gif'
import { UseGifs } from '../../../hooks/use-gifs/use-gifs';

interface CardProps {
  gif: Gif
}

const Card: FC<CardProps> = ({ gif }) => {
  const { removeGif } = UseGifs()

  const [showConfirmMsg, setShowConfirmMsg] = useState(false);

  const getConfirmMsg = () => {
    setShowConfirmMsg(true)
  }
  const hideMsg = () => {
    setShowConfirmMsg(false)
  }

  const HandleDeleteGif = (gif: Gif) => {
    removeGif(gif)
  }

  const confirmMessage = () => {
    if (showConfirmMsg) {
      return (
        <div className='card__msg'>
          <h2>Deseas eliminar este GIF?</h2>
          <ButtonBP label='Eliminar' onClick={() => HandleDeleteGif(gif)} />
          <ButtonBP label="Cancelar" variant='secondary' onClick={() => hideMsg()}  />
        </div>
      )
    }
  }

  return (
    <div className="card">
      <div className="card__header">
        {confirmMessage()}
        <img className="card__icon" src={DeleteIcon} alt="Delete icon" onClick={() => getConfirmMsg()} />
        <img
          src={gif.url}
          className="card__image"
          alt={`img${gif.id}`}
        />
      </div>
    </div>
  )
}

export default Card

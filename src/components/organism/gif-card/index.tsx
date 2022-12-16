import { FC } from "react"
import DeleteIcon from "../../../assets/delete-icon.svg"
import { Button } from "../../atoms/button"
import { GifCardProps } from "./gif-card.interface"
import './gif-card.scss'
import { useGifCard } from "./use-gif-card"

export const GifCard: FC<GifCardProps> = ({ gif, onDelete }) => {

  const { showModal, swichShowModal, removeGif } = useGifCard(onDelete)
  return (
    <div className='gif-card'>
      <img data-testid='deleteIcon' className='gif-card__icon' src={DeleteIcon} alt='Delete icon' onClick={swichShowModal} />
      <img src={gif.url} height='300' width='210' alt={gif.url} />
      {showModal &&
        <div className='gif-card__modal'>
          <p className='gif-card__modal__text'>¿Desea eliminar este gif?</p>
          <Button variant='primary' onClick={() => removeGif(gif)}>Eliminar</Button>
          <Button variant='secondary' onClick={swichShowModal}>Cancelar</Button>
        </div>
      }
    </div>
  )
}
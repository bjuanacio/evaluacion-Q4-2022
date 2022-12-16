import { FC } from 'react'
import DeleteIcon from '../../../assets/delete-icon.svg'
import { Button } from '../../atoms/button/button'
import './card.scss'
import { useDeleteGif } from './use-delete-gif/use-delete-gif'

interface CardProps {
  name?: string
  gif: string
}
export const Card: FC<CardProps> = ({ gif, name = "gif" }) => {
  const { enableDelete, handleOpenDelete, handleCancel } = useDeleteGif();
  return (
    <div className="card">
      { enableDelete && (<div className='card__delete-wrapper'>
        <span className="card__delete-title">¿Deseas eliminar este gif?</span>
        <Button>Eliminar</Button>
        <Button onClick={() => handleCancel()} variant='inverse'>Cancelar</Button>
      </div>)}
      <img className="card__gif" src={gif} alt={name} />
      <div className='card__actions-wrapper'>
        <Button variant='void' size='small' onClick={() => handleOpenDelete()}>
          <img className='card__button-icon' src={DeleteIcon} alt="delete-icon" />
        </Button>
      </div>
    </div>
  )
}
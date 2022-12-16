import { useState } from 'react';

import Button from '../../atoms/button/button'
import Modal from '../modal/modal';

import DeleteIcon from "../../../assets/delete-icon.svg";

import { useAppContext } from '../../../context/app-context';
import { GifService } from '../../../services/gif/gif';


import './card.scss'
import { Gif } from '../../../utils/interfaces/Gif';

export interface CardProps {
  card: Gif
}

const Card: React.FC<CardProps> = ({ card }) => {
  const { gifReducer } = useAppContext()
  const { gifDispatch } = gifReducer
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const closeModal = () => {
    setOpenModal(false)
  }

  const onDelete = async() => {
    try{
      GifService.deleteGif(card)
      closeModal()
      gifDispatch({type: 'deleteGif', payload: card.id || -1})
    }catch(e){
    }
  }

  return (
    <>
      <div className="card" data-testid="card">
        <img className="card__gif" src={card.url} alt={`Card #${card.id}`} />
        <div className="card__icon">
          <Button variant="transparent" onClick={handleOpenModal}>
            <img src={DeleteIcon} alt="Delete icon" />
          </Button>
        </div>
        <Modal open={openModal} onDelete={onDelete} onCancele={closeModal} />
      </div>
    </>
  )
}

export default Card
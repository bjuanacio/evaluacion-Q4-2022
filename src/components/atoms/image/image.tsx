import { FC } from 'react'
import classNames from 'classnames'
import './image.scss'
import { Gift } from '../../../utils/interfaces/interfaces'
import DeleteIcon from '../../../assets/delete-icon.svg'
import Button from '../button/button'

interface ImageProps {
  gift: Gift
  isDeleted?: boolean
  deleteGift: () => void
}

const Image: FC<ImageProps> = ({ gift, isDeleted, deleteGift }) => {
  
  return (
  <div className='image'>
      <section className="image__card">
      {isDeleted && (
      <section className={classNames('image__modal', { 'image__modal--hide-modal': isDeleted })}>
        <p>Deseas eliminar este gift?</p>
        <Button>Eliminar</Button>
        <Button>Cancelar</Button>
      </section>
    )}
        <img className={classNames('image__container', { 'image__container--hide-image': isDeleted })} src={gift.url} />
        <img
              src={DeleteIcon}
              alt="close-icon"
              className="image__closeIcon"
            />
      </section>
  </div>
  )
}
export default Image

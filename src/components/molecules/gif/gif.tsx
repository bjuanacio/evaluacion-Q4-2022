import type { IGif } from '../../../utils/interfaces/gif'
import { Styles } from './gif.styles'
import deleteImage from '../../../assets/delete-icon.svg'
import Modal from '../../organisms/modal/modal'
import { useGif } from './use-gif/use-gif'

const Gif: React.FC<IGif> = (props) => {
  const { onDelete, showModal, toggleModal } = useGif()

  return (
    <Styles>
      <div className="gif__image" data-testid="gif-testid">
        <img src={props.url} className="gif__image--size" />
      </div>
      <div className="gif__close" onClick={toggleModal}>
        <img src={deleteImage} alt="close" />
      </div>
      {showModal && <Modal onCancel={toggleModal} onDelete={() => onDelete(props)} />}
    </Styles>
  )
}

export default Gif

import Button from '../../atoms/button/button'
import './modal.scss'

export interface ModalProps {
  open?: boolean
  onDelete?: () => void
  onCancele?: () => void
}

const Modal: React.FC<ModalProps> = ({ open, onDelete, onCancele }) => {

  return (
    <>
      {
        open && (
          <div className="modal">
            <h5>Deseas eliminar este GIF?</h5>
            <Button onClick={onDelete}>Eliminar</Button>
            <Button variant='secondary' onClick={onCancele}>Cancelar</Button>
          </div>
        )
      }
    </>
  )
}

export default Modal
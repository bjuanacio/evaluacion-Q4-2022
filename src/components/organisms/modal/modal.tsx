import Button from '../../atoms/button/button'
import { Styles } from './modal.styles'

interface ModalProps {
  onCancel: () => void
  onDelete: () => void
}

const Modal: React.FC<ModalProps> = ({ onCancel, onDelete }) => {
  return (
    <Styles>
      <div className="modal__content" data-testid="modal-testid">
        <h4>¿Deseas eliminar este GIF?</h4>
        <Button type="primary" onClick={onDelete}>
          Eliminar
        </Button>
        <br />
        <Button type="secondary" onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </Styles>
  )
}

export default Modal

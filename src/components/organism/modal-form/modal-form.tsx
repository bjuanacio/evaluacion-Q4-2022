import Modal from "../../atoms/modal/modal";
import GifForm from "../../molecules/gif-form/gif-form";
import useModalForm from "./use-modal-form/use-modal-form";

const ModalForm = () => {
  const { activeModal, onSubmit, handleChangeModal } = useModalForm();
  return (
    <>
      {activeModal && (
        <Modal handleChangeModal={handleChangeModal}>
          <GifForm onSubmit={onSubmit} />
        </Modal>
      )}
    </>
  );
};
export default ModalForm;

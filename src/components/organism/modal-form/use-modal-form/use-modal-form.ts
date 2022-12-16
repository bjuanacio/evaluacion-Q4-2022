import { useGifContext } from "../../../../context/gif-context/gif-context";
import { Gif } from "../../../../utils/interfaces/gif";

const useModalForm = () => {
  const { activeModal, addGifs, handleChangeModal } = useGifContext();

  const onSubmit = (gif: Gif) => {
    addGifs!(gif);
  };

  return {
    activeModal,
    onSubmit,
    handleChangeModal,
  };
};

export default useModalForm;

import { FC, useState } from "react";
import "./gallery-item.scss";
import DeleteIcon from "../../../assets/delete-icon.svg";
import { useAppDispatch } from "../../../store/hooks/reduxHooks";
import { startDeletingGif } from "../../../store/actions/actions";

interface GalleryItemProps {
  id: number;
  url: string;
}

export const GalleryItem: FC<GalleryItemProps> = ({ id, url }) => {
  const dispatch = useAppDispatch();
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleConfirmDelete = () => dispatch(startDeletingGif(id, url));
  const handleDelete = () => setConfirmDelete(true);
  const handleCancelDelete = () => setConfirmDelete(false);

  return (
    <div className="gallery-item">
      <img className="gallery-item__image" src={url} alt={url}></img>
      {!confirmDelete && (
        <img
          className="gallery-item__delete-icon"
          src={DeleteIcon}
          alt="Delete icon"
          onClick={handleDelete}
        />
      )}
      {confirmDelete && (
        <div className="gallery-item__delete-confirmation">
          <h2 className="">¿Deseas eliminar este GIF?</h2>
          <button
            className="gallery-item__button gallery-item__button--delete"
            onClick={handleConfirmDelete}
          >
            Eliminar
          </button>
          <button
            className="gallery-item__button gallery-item__button--cancel"
            onClick={handleCancelDelete}
          >
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
};

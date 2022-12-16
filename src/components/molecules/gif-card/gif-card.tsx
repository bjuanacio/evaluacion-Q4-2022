import { FC, useState } from "react";
import "./gif-card.scss";
import DeleteIcon from "../../../assets/delete-icon.svg";
import {
  deleteGif,
  fetchGifs,
} from "../../../services/gif-service/gif-service";
import { useAppDispatch } from "../../../store/hooks";
import { setGifList } from "../../../store/reducers/gif-slice";

interface GifCardProps {
  url: string;
  id: number;
}

const GifCard: FC<GifCardProps> = ({ url, id }) => {
  const [remove, setRemove] = useState(false);
  const dispatch = useAppDispatch();
  const fetchGifList = async () => {
    dispatch(setGifList(await fetchGifs()));
  };
  return (
    <div className="gifcard">
      <div className="gifcard__container">
        <img
          className="gifcard__deleteIcon"
          src={DeleteIcon}
          alt="Delete icon"
          onClick={() => setRemove(true)}
        />
        <img className="gifcard__image" src={url} />

        {remove && (
          <div className="gifcard__remove">
            <p className="gifcard__question">¿Deseas eliminar este GIF?</p>
            <div className="gifcard__buttons">
              <button
                className="gifcard__deletebtn"
                onClick={() =>
                  deleteGif(id).then(() => {
                    fetchGifList();
                  })
                }
              >
                Eliminar
              </button>
              <button
                className="gifcard__cancelbtn"
                onClick={() => setRemove(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GifCard;

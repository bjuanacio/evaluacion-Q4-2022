import { FC, useState } from "react";
import { addGif, fetchGifs } from "../../../services/gif-service/gif-service";
import { useAppDispatch } from "../../../store/hooks";
import { setGifList } from "../../../store/reducers/gif-slice";
import "./add-gif-input.scss";

const AddGifInput: FC = () => {
  const [gifURL, setGifURL] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();
  const fetchGifList = async () => {
    dispatch(setGifList(await fetchGifs()));
  };
  const handleSend = () => {
    if (gifURL !== "") {
      addGif(gifURL).then(() => fetchGifList());
      return;
    }
    setError(true);
  };
  return (
    <div className="addinput">
      <input
        className={`addinput__input${error && gifURL === "" ? "--error" : ""}`}
        placeholder="Gift URL"
        onChange={(e) => setGifURL(e.target.value)}
      />
      {error && gifURL === "" && (
        <p className="addinput__error">Ingresa una URL</p>
      )}
      <button className="addinput__button" onClick={handleSend}>
        Agregar
      </button>
    </div>
  );
};

export default AddGifInput;

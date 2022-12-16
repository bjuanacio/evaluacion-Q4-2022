import useGifsList from "./use-gifs-list/use-gifs-list";
import CardsList from "../../organisms/cards-list/cards-list";
import TopBar from "../../molecules/top-bar/top-bar";
import "./gifs-list.scss";
import { Info } from "../../../../utils/enums/info";

const GifsList = () => {
  const { gifsList, deleteGif, addGif, validUrl } = useGifsList();

  return (
    <div className="gifs-list">
      <h1 className="gifs-list__title">{Info.TITLE}</h1>
      <TopBar validUrl={validUrl} addGif={addGif} />
      <CardsList deleteGif={deleteGif} gifs={gifsList} />
    </div>
  );
};

export default GifsList;

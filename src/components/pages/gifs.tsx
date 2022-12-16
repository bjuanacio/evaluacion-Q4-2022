import "./gifs.scss";
import AddHeader from "../molecules/add-header/add-header";
import GifCardsGrid from "../organism/gif-cards-grid/gif-cards-grid";
import {
  GifsContext,
  GifsProvider,
} from "../../context/gifs-context/gifs-context";
import { useContext, useEffect } from "react";
import useGifs from "./use-gifs/use-gifs";

const test = [
  {
    id: 1,
    url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
    author_id: 11,
  },
  {
    id: 2,
    url: "https://media.tenor.com/ooc8rKAkdlwAAAAM/captain-america-avengers.gif",
    author_id: 11,
  },
  {
    id: 3,
    url: "https://media.tenor.com/-SELJ9J3DdkAAAAM/thor-marvel.gif",
    author_id: 11,
  },
  {
    id: 4,
    url: "https://media.tenor.com/rQ2RsH8Jb4oAAAAM/film-marvel.gif",
    author_id: 11,
  },
  {
    id: 5,
    url: "https://media.tenor.com/9LTaB5Ezn0UAAAAM/reface.gif",
    author_id: 11,
  },
  {
    id: 6,
    url: "https://media.tenor.com/32g9ZstNXGMAAAAM/avengers-endgame-captain-america.gif",
    author_id: 11,
  },
];

const Gifs = () => {
  const { gifList, addGif, deleteGif } = useContext(GifsContext);

  return (
    <div className="gifs">
      <h1>Gif Gallery</h1>
      <AddHeader handleCreate={addGif} />
      <GifCardsGrid gifsList={gifList} handleDelete={deleteGif} />
    </div>
  );
};

export default Gifs;

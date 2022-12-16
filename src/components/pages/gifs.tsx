import "./gifs.scss";
import AddHeader from "../molecules/add-header/add-header";
import GifCard from "../molecules/gif-card/gif-card";
import GifCardsGrid from "../organism/gif-cards-grid/gif-cards-grid";

const test = [
  {
    id: 1,
    url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
    author_id: 11,
  },
  {
    id: 1,
    url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
    author_id: 11,
  },
  {
    id: 1,
    url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
    author_id: 11,
  },
  {
    id: 1,
    url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
    author_id: 11,
  },
  {
    id: 1,
    url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
    author_id: 11,
  },
  {
    id: 1,
    url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
    author_id: 11,
  },
];

const gifs = () => {
  return (
    <div className="gifs">
      <h1>Gif Gallery</h1>
      <AddHeader handleCreate={() => {}} />
      <GifCardsGrid gifsList={test} handleDelete={() => {}} />
    </div>
  );
};

export default gifs;

import SearchGif from "../../molecules/search-gif/search-gif";
import GifList from "../../organisms/gif-list/gif-list";

import "./gif-galery-page.scss";
import useGifGaleryPage from "./use-gif-galery-page/use-gif-galery-page";

const GifGaleryPage = () => {
  const { addGif, deleteGif, error, gifs, handleSearchInput, url } =
    useGifGaleryPage();

  return (
    <div className="gif-galery-page" data-testid="gifgalerypage-testid">
      <h1>Gif Galery</h1>
      <SearchGif
        inputValue={url}
        onChange={handleSearchInput}
        onClick={addGif}
        errorMessage={error}
      />
      <GifList gifs={gifs} onDelete={deleteGif} />
    </div>
  );
};

export default GifGaleryPage;

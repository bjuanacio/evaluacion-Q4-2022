import Header from "../../organisms/header/header";
import ImageGrid from "../../organisms/image-grid/image-grid";
import "./gallery.scss";
import useGallery from "./use-gallery/use-gallery";
import WarningIcon from "../../../assets/warning-icon.svg";
export const Gallery = () => {
  const {
    handleAddClick,
    handleUrlInputChange,
    gifsList,
    handleDeleteClick,
    errorInService,
  } = useGallery();

  const renderEmptyState = () => {
    return gifsList.length === 0 && (
      <div className="gallery__warningContainer">
        <div className="app__icon-description">
          <img className="app__icon" src={WarningIcon} alt="Warning icon" />
          <span className="app__color-title">Warning icon</span>
        </div>
        <p className="gallery__warningText">No posee gifs </p>
      </div>
    );
  };

  const renderGrid = () => {
    return gifsList.length > 0 && (
      <ImageGrid gifs={gifsList} handleGifDelete={handleDeleteClick} />
    )
  }

  return (
    <div className="gallery">
      <Header
        handleAddClick={handleAddClick}
        handleUrlInputChange={handleUrlInputChange}
        title="Gif Gallery"
        errorInService={errorInService}
      />

      {renderGrid()}
      {renderEmptyState()}
    </div>
  );
};

export default Gallery;

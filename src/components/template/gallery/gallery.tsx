import Header from "../../organisms/header/header";
import ImageGrid from "../../organisms/image-grid/image-grid";
import "./gallery.scss";
import useGallery from "./use-gallery/use-gallery";

export const Gallery = () => {
  const { handleAddClick, handleUrlInputChange, mockGifs, handleDeleteClick } =
    useGallery();

  return (
    <div className="gallery">
      <Header
        handleAddClick={handleAddClick}
        handleUrlInputChange={handleUrlInputChange}
        title="Gif Gallery"
      />

      <ImageGrid gifs={mockGifs} handleGifDelete={handleDeleteClick} />
    </div>
  );
};

export default Gallery;

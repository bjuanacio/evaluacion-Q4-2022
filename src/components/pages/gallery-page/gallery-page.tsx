import { GalleryItem } from "../../atoms/gallery-item/gallery-item";
import "./gallery-page.scss";
import { CustomInput } from "../../atoms/custom-input/custom-input";
import WarningIcon from "../../../assets/warning-icon.svg";
import { useGalleryPage } from "./use-gallery-page/use-gallery-page";

export const GalleryPage = () => {
  const {
    fetchingGifs,
    formErrors,
    url,
    addGifError,
    gifs,
    onChange,
    handleAdd,
  } = useGalleryPage();

  return (
    <div className="gallery-page">
      {fetchingGifs && <h1 className="gallery-page__loading">Loading...</h1>}
      {!fetchingGifs && (
        <>
          <h1 className="gallery-page__title">Gif Gallery</h1>
          <div className="gallery-page__form">
            <CustomInput
              name="url"
              onChange={onChange}
              value={url}
              error={formErrors["url"][0] || addGifError}
            />
            <button onClick={handleAdd} className="gallery-page__btn">
              Agregar
            </button>
          </div>
          {gifs.length > 0 ? (
            <div className="gallery-page__list">
              {gifs.map(({ url, id }) => (
                <GalleryItem key={id} id={id} url={url} />
              ))}
              {/* <div className="gallery-page__list--spacer"></div> */}
            </div>
          ) : (
            <div className="gallery-page__no-items">
              <img
                className="gallery-page__icon"
                src={WarningIcon}
                alt="Warning icon"
              />
              <h2 className="gallery-page__no-items-title">No posee gifs</h2>
            </div>
          )}
        </>
      )}
    </div>
  );
};

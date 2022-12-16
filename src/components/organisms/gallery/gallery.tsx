import { FC } from "react";
import { Gif } from "../../../utils/interfaces/gif";
import Card from "../../molecules/card/card";
import "./gallery.scss";

interface GalleryProps {
  gifs: Gif[];
  handleGifDelete: (gif: Gif) => void;
}

export const Gallery: FC<GalleryProps> = ({ gifs, handleGifDelete }) => {
  const renderItem = (gif: Gif) => (
    <Card key={gif.id} gif={gif} handleDeleteClick={handleGifDelete} />
  );
  return (
    <div className="gallery" data-testID="gallery">{gifs.map((gif: Gif) => renderItem(gif))}</div>
  );
};

export default Gallery;

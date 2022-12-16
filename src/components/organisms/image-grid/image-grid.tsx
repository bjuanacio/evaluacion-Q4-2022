import { FC } from "react";
import { Gif } from "../../../utils/interfaces/gif";
import Card from "../../molecules/card/card";
import "./image-grid.scss";

interface ImageGridProps {
  gifs: Gif[];
  handleGifDelete: (gif: Gif) => void;
}

export const ImageGrid: FC<ImageGridProps> = ({ gifs, handleGifDelete }) => {
  const renderItem = (gif: Gif) => (
    <Card key={gif.id} gif={gif} handleDeleteClick={handleGifDelete} />
  );
  return (
    <div className="image-grid" data-testID="image-grid">{gifs.map((gif: Gif) => renderItem(gif))}</div>
  );
};

export default ImageGrid;

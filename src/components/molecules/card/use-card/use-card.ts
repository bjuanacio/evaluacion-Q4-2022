import { useState } from "react";
import { Gif } from "../../../../utils/interfaces/gif";

interface UseCardProps {
  gif: Gif;
  onDeleteGif: (gif: Gif) => void;
}

function useCard({ gif, onDeleteGif }: UseCardProps) {
  const [isVisibleRemovePanel, setIsVisibleRemovePanel] = useState(false);

  const handleOnClick = () => {
    setIsVisibleRemovePanel(!isVisibleRemovePanel);
  };

  const handleDelete = () => {
    onDeleteGif(gif);
    setIsVisibleRemovePanel(false);
  };

  return {
    handleOnClick,
    handleDelete,
    isVisibleRemovePanel,
  };
}

export default useCard;

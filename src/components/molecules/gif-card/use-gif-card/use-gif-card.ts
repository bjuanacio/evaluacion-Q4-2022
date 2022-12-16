import { useState } from "react";
import { GifCardProps } from "../gif-card.interfaces";

const useGifCard = (props: GifCardProps) => {
  const [showDeleteMessage, setShowDeleteMessage] = useState<boolean>(false);

  const handleDeleteIcon = () => {
    setShowDeleteMessage(true);
  };

  const handleCancel = () => {
    setShowDeleteMessage(false);
  };

  const handleDelete = () => {
    props.handleDelete(props.gif);
  };

  return {
    showDeleteMessage,
    handleDeleteIcon,
    handleCancel,
    handleDelete,
  };
};

export default useGifCard;

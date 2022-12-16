import { useState } from "react";

const useCard = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const handleChangeShowOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return {
    showOverlay,
    handleChangeShowOverlay,
  };
};

export default useCard;

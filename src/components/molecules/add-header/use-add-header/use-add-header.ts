import { useEffect, useState } from "react";
import { Gif } from "../../../../utils/interfaces/gifs";

export interface UseAddHeaderprops {
  value?: string;
  defaultValue?: string;
  handleCreate: (gif: Gif) => void;
}

const DEFAULT_VALUE = "";

const useAddHeader = (props?: UseAddHeaderprops) => {
  const [currentValue, setCurrentValue] = useState(
    props?.defaultValue ?? DEFAULT_VALUE
  );

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setCurrentValue(props?.value || props?.defaultValue || DEFAULT_VALUE);
  }, [props?.value]);

  useEffect(() => {
    if (showError && currentValue != "") {
      setShowError(false);
    }
  }, [currentValue]);

  const handleCurrentValue = (valueTarget: string) => {
    setCurrentValue(valueTarget);
  };

  const handleCreateButton = () => {
    if (currentValue != "") {
      const newGif: Gif = {
        url: currentValue,
        author_id: 0,
      };
      props?.handleCreate(newGif);
    } else {
      setShowError(true);
    }
  };

  return {
    currentValue,
    showError,
    handleCurrentValue,
    handleCreateButton,
  };
};

export default useAddHeader;

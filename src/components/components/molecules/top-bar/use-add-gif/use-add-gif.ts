import { useState } from "react";
const useAddGif = () => {
  const [url, setUrl] = useState("");

  const handleAddUrl = (value: string) => {
    setUrl(value);
  };

  return { url, setUrl, handleAddUrl };
};

export default useAddGif;

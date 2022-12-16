import { useState } from "react";
import { GiftStateContext } from "../gift-context";

const useGifts = (initialValues?: Partial<GiftStateContext>) => {
  const [term, setTerm] = useState(initialValues?.term || '');

  const handleAddGift = (url: string) => {
    console.log(url)
  }

  const handleTerm = () => {
    console.log()
  }

  return {
    term,
    handleAddGift,
    handleTerm
  }
};

export default useGifts;

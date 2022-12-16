import { useState } from "react";
import { GiftStateContext } from "../gift-context";

const useGifts = (initialValues?: Partial<GiftStateContext>) => {
  const [term, setTerm] = useState(initialValues?.term || '');

  const handleAddGift = () => {
    console.log(term)
  }

  const handleTerm = (term: string) => {
    setTerm(term)
  }

  return {
    term,
    handleAddGift,
    handleTerm
  }
};

export default useGifts;

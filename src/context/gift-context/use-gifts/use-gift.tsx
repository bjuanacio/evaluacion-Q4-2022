import { useState } from "react";
import { getGifts } from "../../../services/gift.service";
import { GiftStateContext } from "../gift-context";

const useGifts = (initialValues?: Partial<GiftStateContext>) => {
  const [term, setTerm] = useState(initialValues?.term || '');
  const [giftsList, setGiftsList] = useState(initialValues?.giftsList || [])

  const handleAddGift = () => {
    console.log(term)
  }

  const handleTerm = (term: string) => {
    setTerm(term)
  }

  const getGiftsList = () => {
    getGifts().then((res) => {
      setGiftsList(res)
    })
  }

  return {
    term,
    handleAddGift,
    handleTerm,
    giftsList,
    getGiftsList
  }
};

export default useGifts;

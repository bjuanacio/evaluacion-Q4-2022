import { createContext, FC, useContext } from "react";
import { Gift } from "../../utils/interfaces/gift";
import useGifts from "./use-gifts/use-gift";

export interface GiftStateContext {
  term: string;
  giftsList: Gift[];
  handleAddGift: any;
  handleTerm: any;
  getGiftsList: any;
}

export interface GiftsProviderProps {
  children: React.ReactNode;
  initialValue?: Partial<GiftStateContext>;
}

export const GiftContext = createContext<GiftStateContext>(
  {} as unknown as GiftStateContext
);

export const useGiftContext = () => useContext(GiftContext);

export const GiftsProvider: FC<GiftsProviderProps> = ({ children, initialValue }) => {
  const values = useGifts(initialValue);
  return (
    <GiftContext.Provider value={values}>{children}</GiftContext.Provider>
  );
};

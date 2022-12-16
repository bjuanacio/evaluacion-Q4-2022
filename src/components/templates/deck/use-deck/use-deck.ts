import { useGiftContext } from "../../../../context/gift-context/gift-context"

const useDeck = () => {
    const {
        term, 
        handleAddGift, 
        handleTerm
    } = useGiftContext()

    return {
        term, 
        handleAddGift, 
        handleTerm
    }
}

export default useDeck

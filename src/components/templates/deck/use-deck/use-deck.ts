import { useEffect } from "react"
import { useGiftContext } from "../../../../context/gift-context/gift-context"

const useDeck = () => {
    const {
        term,
        giftsList, 
        handleAddGift, 
        handleTerm,
        getGiftsList
    } = useGiftContext()

    const fetchData = () => {
        getGiftsList()
    }

    useEffect(() => {
      fetchData()
    }, [])
    

    return {
        term,
        giftsList, 
        handleAddGift, 
        handleTerm
    }
}

export default useDeck

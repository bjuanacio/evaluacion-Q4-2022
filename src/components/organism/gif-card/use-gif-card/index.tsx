import { useState } from "react"
import { useCrud } from "../../../../hooks/use-crud"
import { useFetchData } from "../../../../hooks/use-fetch-data"
import { Gif } from "../../../../utils/interfaces/gif.interface"

export const useGifCard = (onDelete: () => void) => {

  const [showModal, setshowModal] = useState(false)

  const { remove } = useCrud()
  const { fetchData } = useFetchData()

  const removeGif = (gif: Gif) => {
    fetchData(remove(gif), onDelete)
    swichShowModal()
  }

  const swichShowModal = () => {
    setshowModal((current) => !current)
  }

  return { showModal, swichShowModal, removeGif }

}
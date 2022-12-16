import { useEffect, useState } from 'react'
import { Gif } from '../../../utils/interfaces/gif'
import {
  fetchGifs,
  addGif as addGifService,
  deleteGif as deleteGifService,
} from '../../../services/gif/gif.service'
import { GifsStateContext } from '../gifs-context'

const useGifs = (initialValues?: Partial<GifsStateContext>) => {
  const [activeModal, setActiveModal] = useState(initialValues?.activeModal || false)
  const [gifsList, setGifsList] = useState<Gif[]>(initialValues?.gifsList || [])
  const [searchTerm, setSearchTerm] = useState(initialValues?.searchTerm || '')
  const [isEditing, setIsEditing] = useState(initialValues?.isEditing || false)
  const [activeGif, setActiveGif] = useState<Gif | undefined>(
    initialValues?.activeGif || undefined
  )
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(
    initialValues?.showLoadingOverlay || false
  )

  const handleChangeModal = () => {
    if (isEditing) {
      setActiveGif(undefined)
      setIsEditing(false)
    }
    setActiveModal(!activeModal)
  }

  const handleSearchTerm = (term: string) => {
    setSearchTerm(term)
  }

  const getGifs = () => {
    setShowLoadingOverlay(true)
    fetchGifs().then((res) => {
      setGifsList(res)
      setShowLoadingOverlay(false)
      setSearchTerm('')
    })
    setShowLoadingOverlay(false)
    setSearchTerm('')
  }

  const addGif = (player: Gif) => {
    setShowLoadingOverlay(true)
    addGifService(player).then(() => {
      getGifs()
    })
    setSearchTerm('')
    setShowLoadingOverlay(false)
    setActiveModal(false)
  }

  const deleteGif = (id: number) => {
    setShowLoadingOverlay(true)
    deleteGifService(id).then(() => {
      getGifs()
    })
    setShowLoadingOverlay(false)
    setSearchTerm('')
  }


  return {
    gifsList,
    searchTerm,
    isEditing,
    activeModal,
    activeGif,
    showLoadingOverlay,
    addGif: initialValues?.addGif ?? addGif,
    handleChangeModal,
    deleteGif,
    handleSearchTerm,
    getGifs: initialValues?.getGifs ?? getGifs,
  }
}

export default useGifs

import { useState } from 'react'

import {
  fetchGifts,
  createGif as addGifService,
  deleteGif as deleteGifService,
} from '../../../services/gif.services'
import { GifsStateContext } from '../gifs-context'
import { GiftProps } from '../../../utils/interfaces/index';

const useGifs = (initialValues?: Partial<GifsStateContext>) => {
  const [activeModal, setActiveModal] = useState(initialValues?.activeModal || false)
  const [gifsList, setGifsList] = useState<GiftProps[]>(initialValues?.gifsList || [])
  const [inputValue, setInputValue] = useState(initialValues?.inputValue || '')
  const [displayDelete, setDisplayDelete] = useState(false)
  const [activeGif, setActiveGif] = useState<GiftProps | undefined>(
    initialValues?.activeGif || undefined
    
  )
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(
    initialValues?.showLoadingOverlay || false
  )

  const handleChangeModal = () => {

    setActiveModal(!activeModal)
  }

  const handleChangeInput = (term: string) => {
    setInputValue(term)
  }

  const getGifs = () => {
    setShowLoadingOverlay(true)
    fetchGifts().then((res) => {
      setGifsList(res)
      setShowLoadingOverlay(false)
      setInputValue('')
    })
    setShowLoadingOverlay(false)
    setInputValue('')
  }


  const addGif = (gif: GiftProps) => {
    setShowLoadingOverlay(true)
    addGifService(gif).then(() => {
      getGifs()
    })
    setInputValue('')
    setShowLoadingOverlay(false)
    setActiveModal(false)
  }

  const addActiveGif = (gifId: number) => {
    const gif = gifsList.find(({ id }) => id === gifId)
    setActiveGif(gif)
    setActiveModal(true)
  }

  const deleteGif = (gif: GiftProps) => {
    setShowLoadingOverlay(true)
    deleteGifService(gif).then(() => {
      getGifs()
    })
    setShowLoadingOverlay(false)
    setInputValue('')
  }

  const handleDisplayDelete = (value: boolean) => {
    setDisplayDelete(value)
  }


  return {
    gifsList,
    inputValue,
    activeModal,
    activeGif,
    showLoadingOverlay,
    addGif: initialValues?.addGif ?? addGif,
    handleChangeModal,
    addActiveGif,
    deleteGif,
    handleChangeInput,
    getGifs: initialValues?.getGifs ?? getGifs,
    displayDelete,
    handleDisplayDelete
  }
}

export default useGifs

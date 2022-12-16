import { useEffect } from 'react'
import { useGifsContext } from '../../../../context/gifs-context/gifs-context'

const useDeck = () => {
  const {
    handleChangeModal,
    gifsList,
    addGif,
    showLoadingOverlay,
    deleteGif,
    handleChangeInput,
    inputValue,
    getGifs,
    displayDelete,
    handleDisplayDelete
  } = useGifsContext()

  const fetchData = () => {
    getGifs()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    handleChangeModal,
    gifsList,
    addGif,
    showLoadingOverlay,
    deleteGif,
    handleChangeInput,
    inputValue,
    fetchData,
    displayDelete,
    handleDisplayDelete
  }
}

export default useDeck

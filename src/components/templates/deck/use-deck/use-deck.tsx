import { useEffect } from 'react'
import { useGifsContext } from './../../../../context/gifs-context/gifs-context'

const useDeck = () => {
  const {
    handleChangeModal,
    gifsList,
    showLoadingOverlay,
    deleteGif,
    addGif,
    handleSearchTerm,
    searchTerm,
    getGifs,
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
    showLoadingOverlay,
    deleteGif,
    addGif,
    handleSearchTerm,
    searchTerm,
    fetchData
  }
}

export default useDeck

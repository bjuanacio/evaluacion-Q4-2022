import { useEffect } from 'react'
import { useGifsContext } from '../../../../context/gif-context/gifs-context'

const useDeck = () => {
  const {
    addGif,
    gifsList,
    addActiveGif,
    deleteGif,
    getGifs,
    handleGifUrl,
    gifUrl
  } = useGifsContext()

  const fetchData = () => {
    getGifs()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    addGif,
    gifsList,
    addActiveGif,
    deleteGif,
    handleGifUrl,
    gifUrl
  }
}

export default useDeck

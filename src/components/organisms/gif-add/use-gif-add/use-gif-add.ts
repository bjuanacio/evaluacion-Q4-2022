import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { postGif } from '../../../../services/gifs-service/gifs-service'
import { queryClient } from '../../../../services/query-service/query-service'

const useGifAdd = () => {
  const [gifUrl, setGifUrl] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const { mutate } = useMutation({
    mutationFn: postGif,
    onError: () => {
      setErrorMessage('Hubo un error en el servicio')
    },
    onSuccess: () => {
      setGifUrl('')
      queryClient.invalidateQueries({ queryKey: ['gif'] })
    }
  })

  const handleOnAdd = () => {
    if (/https:.*\.gif/.test(gifUrl)) mutate(gifUrl)
    else setErrorMessage('Coloca una url de gif válida')
  }

  const handleInputChange = (e: string) => {
    setGifUrl(e)
    setErrorMessage('')
  }

  return {
    gifUrl,
    errorMessage,
    handleOnAdd,
    handleInputChange
  }
}

export { useGifAdd }

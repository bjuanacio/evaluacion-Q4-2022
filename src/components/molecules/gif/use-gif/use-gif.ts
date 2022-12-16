import { useMutation } from '@tanstack/react-query'
import { deleteGifById } from '../../../../services/gifs-service/gifs-service'
import { IGif } from '../../../../utils/interfaces/gif'
import { useState } from 'react'
import { queryClient } from '../../../../services/query-service/query-service'

const useGif = () => {
  const [showModal, setShowModal] = useState(false)

  const { mutate } = useMutation({
    mutationFn: deleteGifById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['gif'] })
    }
  })

  const toggleModal = () => setShowModal((prev) => !prev)

  const onDelete = (gif: IGif) => {
    mutate(gif)
    toggleModal()
  }

  return { showModal, onDelete, toggleModal }
}

export { useGif }

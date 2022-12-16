import { useState } from 'react'

export const useDeleteGif = () => {
  const [enableDelete, setEnableDelete] = useState<boolean>(false);
  const handleOpenDelete = () => {
    setEnableDelete((enableDelete) => (!enableDelete));
  }
  const handleCancel = () => {
    setEnableDelete(false);
  }
  return {
    enableDelete,
    handleOpenDelete,
    handleCancel
  }
}
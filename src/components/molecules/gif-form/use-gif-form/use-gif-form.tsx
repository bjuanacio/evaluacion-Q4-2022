import { useEffect, useState } from "react"
import { useCrud } from "../../../../hooks/use-crud"
import { useFetchData } from "../../../../hooks/use-fetch-data"

export const useGifForm = (onSave: () => void) => {

  const [gifUrl, setGifUrl] = useState<string>('')
  const [error, setError] = useState<string>('')

  const { post } = useCrud()
  const { error: errorFetch, fetchData } = useFetchData()
 
  const save = async () => {
    fetchData(post({
      url: gifUrl,
    }), onSave)
  }

  const onClickHandle = () => {
    setError('')
    if (!gifUrl) {
      setError('Gif url es requerido')
      return
    }
    save()
    setGifUrl('')
  }

  useEffect(() => {
    if (errorFetch) {
      setError('Se ha producido un error al comsumir el servicio')
    }
  }, [errorFetch])


  return { gifUrl, error, setGifUrl, onClickHandle }

}
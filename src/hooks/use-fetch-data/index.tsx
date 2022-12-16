import { useMemo, useState } from "react"

export const useFetchData = () => {

  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<boolean>(false)

  const fetchData = useMemo(() => async (request: Promise<any>, callback?: () => void) => {
    try {
      const data = await request;
      setData(data)
      if (callback) {
        callback()
      }
    } catch (error) {
      setError(true)
    }
  }, [])

  return { data, error, fetchData }

}
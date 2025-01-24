import { useEffect, useState } from 'react'
import { BASEURL } from '../../../path/internalPaths'
import { DataFetchProp } from '../type/dataFetchProp'

const INITIALDATA = {
  created: '',
  episode: [],
  gender: '',
  id: 0,
  image: '',
  location: { name: '', url: '' },
  name: '',
  origin: { name: '', url: '' },
  species: '',
  status: '',
  type: '',
  url: '',
}

export const useFetch = (QUERY: string) => {
  const [data, setData] = useState<DataFetchProp>(INITIALDATA)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<boolean | null | unknown>(null)

  useEffect(() => {
    getAsyncData(QUERY)
    setIsLoading(true)
  }, [QUERY])

  useEffect(() => {
    if (error !== null) {
      setError(true)
      setIsLoading(false)
    }
  }, [error])

  async function getAsyncData(query: string, startpoint = BASEURL.base) {
    try {
      // eslint-disable-next-line no-self-assign
      query ? (query = query) : (query = '')
      await fetch(`${startpoint}${query}`)
        .then((res) => {
          if (!res.ok) throw new Error('Ошибка получения данных')
          return res.json()
        })
        .then((data) => setData(data))
      setIsLoading(false)
    } catch (error) {
      setError(error)
    }
  }

  return {
    data,
    isLoading,
    error,
  }
}

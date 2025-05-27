import { useEffect, useState } from 'react'
import axios, { Canceler } from 'axios'
import { BASEURL } from '../../../path/internalPaths.ts'
import { DataFetchProp } from '../type/dataFetchProp.ts'

const useSearchData = (query: string, pageNumber: number, endPoint: string) => {
  const [data, setData] = useState<DataFetchProp[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setData([])
  }, [query])

  useEffect(() => {
    setIsLoading(true)
    setError(false)
    let cancel: Canceler
    axios({
      method: 'GET',
      url: BASEURL.base + endPoint,
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setData((prevState) => {
          return [...prevState, ...res.data.results]
        })
        setHasMore(res.data.results.length > 0)
        setIsLoading(false)
      })
      .catch((e) => {
        if (axios.isCancel(e)) {
          return
        }
        setError(true)
        setIsLoading(false)
        console.log('errAxios', e)
      })
    return () => cancel()
  }, [query, pageNumber, endPoint])

  const getDataId = (id: string) => {
    const itemId = data.find((item) => {
      if (item.id === Number(id)) {
        return item
      }
    })
    return itemId
  }

  return {
    data,
    isLoading,
    error,
    hasMore,
    getDataId,
  }
}

export default useSearchData

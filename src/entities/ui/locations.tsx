import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Locationslist from '../../entities/page/locations/locationsList'
import useSearchData from '../../shared/lib/hooks//useSearchData'
import { useLastNode } from '../../shared/lib/hooks/useLastNode'

const Locations = () => {
  const { pathname } = useLocation()
  const endPoint = pathname

  const [pageNumber, setPageNumber] = useState(1)
  const { data, isLoading, error, hasMore } = useSearchData(
    '',
    pageNumber,
    endPoint
  )

  const lastNodeRef = useLastNode(isLoading, hasMore, setPageNumber)
  return (
    <>
      {error && <p> Ошибка получения данных</p>}
      {isLoading && <h1>Загрузка данных</h1>}
      {data &&
        (data.length === 0 ? (
          'Список пуст'
        ) : (
          <Locationslist data={data} lastNodeRef={lastNodeRef} />
        ))}
    </>
  )
}

export default Locations

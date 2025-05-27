import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../../../src/index.css'
import HeroesList from '../../entities/page/heroes/heroesList'
import useSearchData from '../../shared/lib/hooks/useSearchData'
import { useLastNode } from '../../shared/lib/hooks/useLastNode'

const Heroes = () => {
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
      {error && <p>- Ошибка получения данных</p>}
      {isLoading && <h1>Загрузка данных</h1>}
      {data &&
        (data.length === 0 ? (
          'Список пуст'
        ) : (
          <HeroesList data={data} lastNodeRef={lastNodeRef} />
        ))}
    </>
  )
}

export default Heroes

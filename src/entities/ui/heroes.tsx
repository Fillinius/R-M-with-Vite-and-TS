import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../../../src/index.css'
import HeroesList from '../../entities/page/heroes/heroesList'
import useSearchData from '../../shared/lib/hooks/useSearchData'
import { useLastNode } from '../../shared/lib/hooks/useLastNode'
import { DataFetchProp } from '../../shared/lib/type/dataFetchProp'

const Heroes = () => {
  const { pathname } = useLocation()
  const endPoint = pathname

  const [pageNumber, setPageNumber] = useState(1)

  const { data, isLoading, error, hasMore } = useSearchData(
    pageNumber,
    endPoint
  )
  const [allData, setAllData] = useState<DataFetchProp[]>([])

  useEffect(() => {
    if (data && data.length > 0) {
      setAllData((prev) => [...prev, ...data])
    }
  }, [data])
  // Сброс данных при изменении endpoint
  useEffect(() => {
    setAllData([])
    setPageNumber(1)
  }, [endPoint])
  const handleAsc = () => {
    setPageNumber((p) => (p < 42 ? Number(p) + 2 : p))
  }
  const handleDesc = () => {
    setPageNumber((p) => (p > 0 ? Number(p) - 2 : p))
  }

  const lastNodeRef = useLastNode(isLoading, hasMore, setPageNumber)

  return (
    <>
      {error && <p>- Ошибка получения данных</p>}
      {isLoading && <h1>Загрузка данных</h1>}
      <div className="absolute">
        <Stack spacing={2} direction="row">
          <Button
            variant="outlined"
            onClick={handleAsc}
            disabled={!hasMore || isLoading}
          >
            Next
          </Button>
          <Button
            variant="outlined"
            onClick={handleDesc}
            disabled={!hasMore || isLoading}
          >
            Previos
          </Button>
        </Stack>
      </div>
      {data &&
        !isLoading &&
        !error &&
        (data.length === 0 ? (
          'Список пуст'
        ) : (
          <HeroesList data={allData} lastNodeRef={lastNodeRef} />
        ))}
    </>
  )
}

export default Heroes

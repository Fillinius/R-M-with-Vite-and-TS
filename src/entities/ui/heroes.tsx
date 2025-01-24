import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useCallback, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../../../src/index.css'
import { HeroesListPage } from '../page/heroes/HeroesListPage'
import { useSearchData } from '../../shared/lib/hooks/useSearchData'

export const Heroes = () => {
  const { pathname } = useLocation()
  const endPoint = pathname

  const [pageNumber, setPageNumber] = useState(1)
  const { data, isLoading, error, hasMore } = useSearchData(
    pageNumber,
    endPoint
  )

  const handleAsc = () => {
    setPageNumber((p) => (p < 42 ? Number(p) + 2 : p))
  }
  const handleDesc = () => {
    setPageNumber((p) => (p > 0 ? Number(p) - 2 : p))
  }

  const observer = useRef<IntersectionObserver | null>(null)
  const lastNodeRef = useCallback(
    (node: Element) => {
      // console.log(node);
      if (isLoading) return
      if (observer.current) {
        observer.current.disconnect()
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1)
          console.log('visible')
        }
      })
      if (node) {
        observer.current.observe(node)
      }
    },
    [isLoading, hasMore]
  )

  return (
    <>
      {error && <p>- Ошибка получения данных</p>}
      {isLoading && <h1>Загрузка данных</h1>}
      <div className="absolute">
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={handleAsc}>
            Next
          </Button>
          <Button variant="outlined" onClick={handleDesc}>
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
          <HeroesListPage data={data} lastNodeRef={lastNodeRef} />
        ))}
    </>
  )
}

import { useCallback, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../../../src/index.css'
import HeroesList from '../../entities/page/heroes/heroesList'
import useSearchData from '../../shared/lib/hooks/useSearchData'

const Heroes = () => {
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
        <button onClick={handleAsc}>Next</button>
        <button onClick={handleDesc}>Previos</button>
      </div>
      {data &&
        !isLoading &&
        !error &&
        (data.length === 0 ? (
          'Список пуст'
        ) : (
          <HeroesList data={data} lastNodeRef={lastNodeRef} />
        ))}
    </>
  )
}

export default Heroes
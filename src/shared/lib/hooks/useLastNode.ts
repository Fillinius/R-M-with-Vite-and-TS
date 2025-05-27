import { useCallback, useRef, useEffect } from 'react'

interface UseLastNodeOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number
}

export const useLastNode = (
  loading: boolean,
  hasMore: boolean,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  options?: UseLastNodeOptions
): ((node: HTMLElement | null) => void) => {
  const observer = useRef<IntersectionObserver | null>(null)

  const lastNodeRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return

      // Отключаем предыдущий observer
      if (observer.current) {
        observer.current.disconnect()
      }

      // Создаем новый observer если есть еще элементы и node существует
      if (node && hasMore) {
        observer.current = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting && hasMore && !loading) {
              setPage((prevState) => prevState + 1)
            }
          },
          {
            root: options?.root || null,
            rootMargin: options?.rootMargin || '200px',
            threshold: options?.threshold || 0.5,
          }
        )

        observer.current.observe(node)
      }
    },
    [
      loading,
      hasMore,
      setPage,
      options?.root,
      options?.rootMargin,
      options?.threshold,
    ]
  )

  // Очищаем observer при размонтировании
  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [])

  return lastNodeRef
}

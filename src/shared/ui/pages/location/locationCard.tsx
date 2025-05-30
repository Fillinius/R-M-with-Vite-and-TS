import { Button } from '@mui/material'
import { useFetch } from '../../../lib/hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'

export const LocationCard = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { data } = useFetch(pathname)

  const handleClick = () => {
    navigate('/location')
  }
  return (
    <>
      <div className="cardById">
        <h2 className="card-title">{data.name}</h2>
        <p className="card-text">Dimension - {data.dimension}</p>

        <p className="card-text">Type - {data.type}</p>
      </div>
      <Button variant="outlined" onClick={handleClick}>
        Вернуться к списку
      </Button>
    </>
  )
}

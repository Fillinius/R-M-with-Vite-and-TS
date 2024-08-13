import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import useFetch from '../../../lib/hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'

const HeroCard = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { data } = useFetch(pathname)

  const handleClick = () => {
    navigate('/character', { replace: true })
  }
  return (
    <>
      {typeof data === 'undefined' ? (
        <div>
          <p>"Ошибка загрузки данных"</p>
          <Button variant="outlined" onClick={handleClick}>
            Вернуться к списку
          </Button>
        </div>
      ) : (
        <>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={data.name + ' logo'}
              image={data.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p className="card-text">Gender - {data.gender}</p>
                <p className="card-text">Species - {data.species}</p>
                <p className="card-text">Status - {data.status}</p>
              </Typography>
              <CardActions>
                <Button variant="outlined" size="small" onClick={handleClick}>
                  Вернуться к списку
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </>
      )}
    </>
  )
}

export default HeroCard

import { DataFetchProp } from '../../../shared/lib/type/dataFetchProp'
import './style.css'
import { Link, useLocation } from 'react-router-dom'

export const HeroesList = ({
  data,
  lastNodeRef,
}: {
  data: DataFetchProp[]
  lastNodeRef: React.RefAttributes<HTMLLIElement> | undefined | any
}) => {
  const { pathname } = useLocation()
  return (
    <div className="card">
      <ul className="card-list">
        {data.map((item, index) => {
          if (data.length === index + 1) {
            return (
              <li key={item.id} ref={lastNodeRef}>
                <Link to={pathname + '/' + item.id} className="card-link">
                  <img src={item.image} alt={item.name + ' logo'} />
                  <h2 className="card-title">{item.name}</h2>
                  <p className="card-text">Gender - {item.gender}</p>
                  <p className="card-text">Species - {item.species}</p>
                  <p className="card-text">Status - {item.status}</p>
                </Link>
              </li>
            )
          } else {
            return (
              <li key={item.id}>
                <Link to={pathname + '/' + item.id} className="card-link">
                  <img src={item.image} alt={item.name + ' logo'} />
                  <h2 className="card-title">{item.name}</h2>
                  <p className="card-text">Gender - {item.gender}</p>
                  <p className="card-text">Species - {item.species}</p>
                  <p className="card-text">Status - {item.status}</p>
                </Link>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}

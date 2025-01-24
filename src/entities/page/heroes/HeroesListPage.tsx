import { UI_LINKS } from '../../../path/internalPaths'
import { DataFetchProp } from '../../../shared/lib/type/dataFetchProp'
import './style.css'
import { Link } from 'react-router-dom'

interface HeroesListPageProp {
  data: DataFetchProp[]
  lastNodeRef: React.RefObject<HTMLElement>
}

export const HeroesListPage = ({ data, lastNodeRef }: HeroesListPageProp) => {
  return (
    <div className="card">
      <ul className="card-list">
        {data.map((item, index) => {
          if (data.length === index + 1) {
            return (
              <li key={item.id} ref={lastNodeRef}>
                <Link
                  to={UI_LINKS.characterDetail(item.id)}
                  className="card-link"
                >
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
                <Link
                  to={UI_LINKS.characterDetail(item.id)}
                  className="card-link"
                >
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

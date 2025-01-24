import { Link } from 'react-router-dom'
import { DataFetchProp } from '../../../shared/lib/type/dataFetchProp'
import { UI_LINKS } from '../../../path/internalPaths'

interface LocationslistPageProp {
  data: DataFetchProp[]
  lastNodeRef: React.RefObject<HTMLElement>
}

export const LocationslistPage = ({
  data,
  lastNodeRef,
}: LocationslistPageProp) => {
  return (
    <div className="card">
      <ul className="card-list ">
        {data.map((item, index) => {
          if (data.length === index + 1) {
            return (
              <li
                key={item.id}
                className="card-list--location"
                ref={lastNodeRef}
              >
                <Link
                  to={UI_LINKS.locationDetail(item.id)}
                  className="card-link "
                >
                  <h2 className="card-title">{item.name}</h2>
                  <p className="card-text">Dimension - {item.dimension}</p>
                  <p className="card-text">Type - {item.type}</p>
                  <p className="card-text">Status - {item.status}</p>
                </Link>
              </li>
            )
          } else {
            return (
              <li key={item.id} className="card-list--location">
                <Link
                  to={UI_LINKS.locationDetail(item.id)}
                  className="card-link "
                >
                  <h2 className="card-title">{item.name}</h2>
                  <p className="card-text">Dimension - {item.dimension}</p>
                  <p className="card-text">Type - {item.type}</p>
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

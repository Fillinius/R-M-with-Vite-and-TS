import { Link } from 'react-router-dom'
import { DataFetchProp } from '../../../shared/lib/type/dataFetchProp'
import { UI_LINKS } from '../../../path/internalPaths'

export const EpisodiesList = ({
  data,
  lastNodeRef,
}: {
  data: DataFetchProp[]
  lastNodeRef: any
}) => {
  return (
    <div className="card">
      <ul className="card-list">
        {data.map((item, index) => {
          if (data.length === index + 1) {
            return (
              <li
                key={item.id}
                ref={lastNodeRef}
                className="card-list--location"
              >
                <Link
                  to={UI_LINKS.episodeDetail(item.id)}
                  className="card-link"
                >
                  <h2 className="card-title">{item.name}</h2>
                  <p className="card-text">Air_data - {item.air_date}</p>
                  <p className="card-text">Episode - {item.episode}</p>
                </Link>
              </li>
            )
          } else {
            return (
              <li key={item.id} className="card-list--location">
                <Link
                  to={UI_LINKS.episodeDetail(item.id)}
                  className="card-link"
                >
                  <h2 className="card-title">{item.name}</h2>
                  <p className="card-text">Air_data - {item.air_date}</p>
                  <p className="card-text">Episode - {item.episode}</p>
                </Link>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}

import logo from '../../public/assets/favicon.ico'
import { Link } from 'react-router-dom'
import { UI_LINKS } from '../path/internalPaths.ts'

export const NavBar = () => {
  return (
    <header>
      <nav className="header">
        <div className="header_logo">
          <Link to={UI_LINKS.home} className="header_logo-link">
            <img className="header_logo-img" src={logo} alt="logo"></img>
            main
          </Link>
        </div>
        <ul className="header_list">
          <li className="header_list-item">
            <Link className="header_list-link" to={UI_LINKS.characters}>
              Hero
            </Link>
          </li>
          <li>
            <Link className="header_list-link" to={UI_LINKS.location}>
              Location
            </Link>
          </li>
          <li>
            <Link className="header_list-link" to={UI_LINKS.episode}>
              Episode
            </Link>
          </li>
        </ul>
        <div>
          <Link className="header_list-link" to={UI_LINKS.signIn}>
            SignIn
          </Link>
          <Link className="header_list-link" to={UI_LINKS.signOut}>
            SignOut
          </Link>
        </div>
      </nav>
    </header>
  )
}

import './Navbar.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logoFit.png'
import UserLogged from './UserLogged/UserLogged';


const Navbar = () => {
  return (
    <nav className="sidebar">
      <img src={Logo} className="sidebar__logo" alt='FIT logo'></img>
      <UserLogged />
      <ul>
        <li>
          <Link to="/charlas">
            Charlas Tácticas
          </Link>
        </li>
        <li>
          <Link to="#">
            Partidos
          </Link>
        </li>
        <li>
          <Link to="#">
            Estadísticas
          </Link>
        </li>
        <li>
          <Link to="#">
            Prensa
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import './Navbar.scss';
import { Link } from 'react-router-dom';
import { MdOutlineVideoLibrary, MdOutlineEditNote } from 'react-icons/md';
import { TbSoccerField } from 'react-icons/tb';
import { GoGraph } from 'react-icons/go';
import Logo from '../../assets/logoFit.png'
import UserLogged from './UserLogged/UserLogged';


const Navbar = () => {
  return (
    <nav className="sidebar">
      <Link to="/">   
        <img src={Logo} className="sidebar__logo" alt='FIT logo'></img>
      </Link>
      <UserLogged />
      <ul>
        <li>
          <Link className='li_content' to="/charlas">
            <MdOutlineVideoLibrary /> 
            <p>Charlas Tácticas</p>
          </Link>
        </li>
        <li>
          <Link to="/partidos" className='li_content' >
            <TbSoccerField/>
            <p>Partidos</p>
          </Link>
        </li>
        <li>
          <Link to="/estadisticas" className='li_content' >
            <GoGraph />
            <p>Estadísticas</p>  
          </Link>
        </li>
        <li>
          <Link to="/prensa" className='li_content'>
            <MdOutlineEditNote />
            <p>Prensa</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

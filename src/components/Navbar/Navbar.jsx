import './Navbar.scss';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineVideoLibrary,  MdLogout, MdHomeFilled, MdMenu, MdMenuOpen} from 'react-icons/md';
import { TbSoccerField } from 'react-icons/tb';
//import { GoGraph } from 'react-icons/go';
import UserLogged from './UserLogged/UserLogged';
import { userAuthContext } from '../../context/UserAuthContext';




const Navbar = () => {

  const {logOut} = useContext(userAuthContext);

  /* const [active, setActive] = useState(true);
  const toggleActive = () => setActive(!active); */

  return (

    <nav className='active sidebar'>
      
      {/* <NavLink to="/">   
        <img src={Logo} className="sidebar__logo" alt='FIT logo'></img>
      </NavLink> */}
      
      <UserLogged />

      <ul className='nav'>
        <li>
          <NavLink className='li_content open' to="/">
            <MdHomeFilled className='logo'/> 
            { open && <p>Inicio</p>}
            
          </NavLink>
        </li>
        <li>
          <NavLink className='li_content open' to="/charlas">
            <MdOutlineVideoLibrary className='logo'/> 
            { open && <p>Charlas</p>}
          </NavLink>
        </li>
        <li>
          <NavLink to="/partidos" className='li_content open' >
            <TbSoccerField className='logo'/>
            { open && <p>Partidos</p>}
          </NavLink>
        </li>
        <li>
          
        </li>
       {/*  <li>
          <NavLink to="/estadisticas" className='li_content' >
            <GoGraph />
            <p>Estadísticas</p>  
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to="/prensa" className='li_content'>
            <MdOutlineEditNote />
            <p>Prensa</p>
          </NavLink>
        </li> */}
      </ul>
      
      <div onClick={logOut} className='logOut' >
            <MdLogout />
            <p>LogOut</p>
      </div>
    </nav>
  );
}

export default Navbar;

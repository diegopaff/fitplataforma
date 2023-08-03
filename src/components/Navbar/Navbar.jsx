import './Navbar.scss';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineVideoLibrary, MdOutlineEditNote, MdLogout, MdHomeFilled, MdMenu, MdMenuOpen} from 'react-icons/md';
import { TbSoccerField } from 'react-icons/tb';
//import { GoGraph } from 'react-icons/go';
import Logo from '../../assets/logoFit.png'
import UserLogged from './UserLogged/UserLogged';
import { userAuthContext } from '../../context/UserAuthContext';



const Navbar = () => {
  const [active, setActive] = useState(true);
  const {logOut} = useContext(userAuthContext);

  return (

    <nav className={`${active ? 'active' : ' '} sidebar`}>
      <div className='toggleButton' onClick={() => setActive(!active)}>
        {active ? <MdMenuOpen/> : <MdMenu/>}
      </div>
      
      <Link to="/">   
        <img src={Logo} className="sidebar__logo" alt='FIT logo'></img>
      </Link>
      
      <UserLogged />

      <ul>
        <li>
          <Link className='li_content' to="/">
            <MdHomeFilled /> 
            <p>Inicio</p>
          </Link>
        </li>
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
          
        </li>
       {/*  <li>
          <Link to="/estadisticas" className='li_content' >
            <GoGraph />
            <p>Estadísticas</p>  
          </Link>
        </li> */}
        {/* <li>
          <Link to="/prensa" className='li_content'>
            <MdOutlineEditNote />
            <p>Prensa</p>
          </Link>
        </li> */}
      </ul>
      
      <div onClick={logOut} className='li_content' >
            <MdLogout/>
            <p>LogOut</p>
      </div>
    </nav>
  );
}

export default Navbar;

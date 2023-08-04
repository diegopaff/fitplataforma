import './VideoPlay.scss';
import PropTypes from 'prop-types';
import db from '../../../utilities/firebase'
import {useEffect , useState, useContext}  from 'react';
import { doc, getDoc } from 'firebase/firestore';

import {NavLink, useParams} from 'react-router-dom';
import { userAuthContext } from '../../context/UserAuthContext';

const VideoPlay = ({tipo}) => {

    const {user} = useContext(userAuthContext); //usuario logueado
    const [partido, setPartido] = useState({});
    const {partidoID} = useParams();
    console.log(user)
    
    useEffect(() => {
        const itemRef = doc(db, user.uid, '2023', 'partidos', partidoID);
        getDoc(itemRef).then((snapshot) => {
          if (snapshot.exists()) {
            setPartido({ id: snapshot.id, ...snapshot.data() });
          }
        });
      }, [partidoID, user.uid]);

    const partidoUrl = partido.partido;
    const accionesUrl = partido.acciones;

   
   
  return (
    <div className='VideoPlay'>
        <h2 className='section_title'> {tipo == 'partido' ? 'Partido Completo' : 'Acciones'}</h2>
        <iframe className='VideoPlay__player' src={tipo == 'partido' ? partidoUrl : accionesUrl} allow="autoplay" allowFullScreen ></iframe>

        <p className='VideoPlay__title'> {partido.local}  {partido.golesLocal}  vs  {partido.golesVisita}  {partido.visita}</p>
        <p className='VideoPlay__title'> {partido.minutosJugados} minutos jugados.</p>
        <NavLink to="/partidos"> <button> Volver</button></NavLink>
    </div>
  )
};

VideoPlay.propTypes = {
  tipo: PropTypes.string

}

export default VideoPlay
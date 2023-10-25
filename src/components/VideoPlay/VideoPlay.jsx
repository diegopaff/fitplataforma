import './VideoPlay.scss';
import PropTypes from 'prop-types';
import {NavLink, useParams} from 'react-router-dom';
import { UserDataContext } from '../../context/UserDataContext';
import { useContext } from 'react';

const VideoPlay = ({tipo}) => {


    const {partidoID} = useParams();
    const { getMatchById } = useContext(UserDataContext);

    const partido = getMatchById(partidoID);
    
    const partidoUrl = partido.partido;
    const accionesUrl = partido.acciones;

   
   
  return (
    <div className='VideoPlay'>
      <div className='page-container'>

          <h2 className='VideoPlay_title'> {tipo == 'partido' ? 'Partido Completo' : 'Acciones'}</h2>
          <iframe className='VideoPlay__player' src={tipo == 'partido' ? partidoUrl : accionesUrl} allow="autoplay" allowFullScreen ></iframe>

          <p className='VideoPlay__details'> {partido.local}  {partido.golesLocal}  vs  {partido.golesVisita}  {partido.visita}</p>
          <p className='VideoPlay__details'> {partido.minutosJugados} minutos jugados.</p>
          <NavLink to="/partidos"> <button> Volver</button></NavLink>
      </div>
    </div>
  )
};

VideoPlay.propTypes = {
  tipo: PropTypes.string

}

export default VideoPlay
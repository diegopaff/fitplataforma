import './PartidoCard.scss';
import PropTypes from 'prop-types';
import { GiSoccerKick, GiSoccerField, GiPlayButton } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import PartidoIcons from '../PartidoIcons/PartidoIcons';

const PartidoCard = ({imagen, local, visita, golesLocal, golesVisita, id, date, minutosJugados, golesJugador, asistenciasJugador}) => {
  
  
  return (
    <div 
      className='PartidoCard' style={{backgroundImage: `url(${imagen})`}}>
      <div className='partido__info'>
        <PartidoIcons value={minutosJugados} tipo='minutos'/>
        { golesJugador > 0 && <PartidoIcons value={golesJugador} tipo='goles'/>}
        { asistenciasJugador > 0 && <PartidoIcons value={asistenciasJugadorJugador} tipo='asistencias'/>}
        
        <p className='partido__info-resultado'> {local} {golesLocal} vs {golesVisita} {visita} </p>
        <div className='button_container'>
          <NavLink className='button' to={`/partidos/${id}`}>
            <GiSoccerField size='2.5em'/>
            <p>Partido</p>
           {/*  <GiPlayButton /> */}
          </NavLink>
          <NavLink className='button acciones' to={`/acciones/${id}`}>
            <GiSoccerKick size='2em' />
            <p>Acciones</p>
           {/*  <GiPlayButton/> */}
          </NavLink>
        </div>
      </div>
    
        

    </div>
  )
};

PartidoCard.propTypes = {
  imagen: PropTypes.string,
  local: PropTypes.string,
  visita: PropTypes.string,
  acciones: PropTypes.string,
  partido: PropTypes.string,
  golesLocal: PropTypes.number,
  golesVisita: PropTypes.number,
  id: PropTypes.string

}

export default PartidoCard
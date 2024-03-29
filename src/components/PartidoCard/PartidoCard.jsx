import './PartidoCard.scss';
import PropTypes from 'prop-types';
import { GiSoccerKick, GiSoccerField } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import PartidoIcons from '../PartidoIcons/PartidoIcons';


const PartidoCard = ({imagen, local, visita, golesLocal, golesVisita, id, date, minutosJugados, golesJugador, asistenciasJugador}) => {
  

  return (
    <div 
      className='PartidoCard' style={{backgroundImage: `url(${imagen})`}}>
      <div className='partido__info' >
        <div className='partido__info-details'>
          <div className='icons'>
            <PartidoIcons value={minutosJugados} tipo='minutos'/>
            <PartidoIcons value={golesJugador} tipo='goles'/>
            <PartidoIcons value={asistenciasJugador} tipo='asistencias'/>
          </div>
          <p className='date'>{date}</p>
        </div>
        
        
        <p className='partido__info-resultado'> {local} {golesLocal} vs {golesVisita} {visita} </p>
        
        <div className='button_container'>
          <NavLink className='button' to={`/partidos/${id}`} >
            <GiSoccerField size='2.5em'/>
            <p>Partido</p>
           {/*  <GiPlayButton /> */}
          </NavLink>
          <NavLink className='button acciones' to={`/partidos/acciones/${id}`}>
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
import './PartidoCard.scss';
import PropTypes from 'prop-types';
import { GiSoccerKick, GiSoccerField, GiPlayButton } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const PartidoCard = ({imagen, local, visita, golesLocal, golesVisita, id, date, minutosJugados, golesJugador, asistenciasJugador}) => {
  
  
  return (
    <div 
      className='PartidoCard' 
      style={{ 
      backgroundImage: `url(${imagen})`
    }}>
    {/*   <div className="partido__info">
          <p className='date'>{date}</p>
          <p className='local'>{local}</p>
          <p className='versus'> vs </p>
          <p className='visitante'> {visita} </p>
          <p className='goles_local'>{golesLocal} </p>
          <p className='goles_visitante'> {golesVisita} </p>
          
          <NavLink className='button' to={`/partidos/${id}`}>
            <GiSoccerField size='2.5em'/>
            <p>Partido</p>
            <GiPlayButton />
          </NavLink>
          <NavLink className='button acciones' to={`/acciones/${id}`}>
            <GiSoccerKick size='2em'/>
            <p>Acciones</p>
            <GiPlayButton/>
          </NavLink>
          
      </div> */}
     {/*  <div className='partido'>
           <img className='partido__image' src={imagen}></img>  
      </div> */}

     {/*  <div className='overlay'></div> */}
      <div className='partido__info'>

        <p className='partido__info-minutos'>{minutosJugados}</p>
        {}
        <p className='partido__info-resultado'> {local} {golesLocal} vs {golesVisita} {visita} </p>

        <NavLink className='button' to={`/partidos/${id}`}>
            <GiSoccerField size='2.5em'/>
            <p>Partido</p>
            <GiPlayButton />
          </NavLink>
          <NavLink className='button acciones' to={`/acciones/${id}`}>
            <GiSoccerKick size='2em'/>
            <p>Acciones</p>
            <GiPlayButton/>
          </NavLink>
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
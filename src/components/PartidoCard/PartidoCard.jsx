import './PartidoCard.scss';
import { GiSoccerKick, GiSoccerField, GiPlayButton } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const PartidoCard = ({imagen, local, visita, acciones, partido, golesLocal, golesVisita, id}) => {
  
  return (
    <div className='PartidoCard'>
        <div className='partido'>
           <img className='partido__image' src={imagen}></img>  
        </div>
        <div className="partido__info">
          <p className='date'>01/01/2023</p>
          <p className='local'>{local}</p>
          <p className='versus'> vs </p>
          <p className='visitante'> {visita} </p>
          <p className='goles_local'>{golesLocal} </p>
          <p className='goles_visitante'> {golesVisita} </p>
          
          <Link className='button' to={`/partidos/${id}`}>
            <GiSoccerField size='2.5em'/>
            <p>Partido</p>
            <GiPlayButton />
          </Link>
          <Link className='button acciones' to={`/acciones/${id}`}>
            <GiSoccerKick size='2em'/>
            <p>Acciones</p>
            <GiPlayButton/>
          </Link>
          
        </div>



    </div>
  )
}

export default PartidoCard
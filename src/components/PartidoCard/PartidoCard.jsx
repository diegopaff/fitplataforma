import './PartidoCard.scss';
import partidoImage from '../../assets/partido.jpg'
const PartidoCard = () => {
  return (
    <div className='PartidoCard'>
        <div className='partido partido__image'>
           <img src={partidoImage}></img>
        </div>
        <div className="partido__info">
          <p className='date'>01/01/2023</p>
          <p className='local'> $Local </p>
          <p className='versus'> vs </p>
          <p className='visitante'> $Visitante </p>
          <p className='goles_local'> $0 </p>
          <p className='goles_visitante'> $2 </p>
          
         
          <button> Partido completo </button>
          <button> Mis acciones </button>
        </div>



    </div>
  )
}

export default PartidoCard
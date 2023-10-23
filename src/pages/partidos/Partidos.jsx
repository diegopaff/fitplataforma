//import db from '../../../utilities/firebase'
import PartidoCard from '../../components/PartidoCard/PartidoCard';
import './Partidos.scss'
//import { collection, getDocs} from "firebase/firestore";
//import { useEffect, useState, useContext} from 'react';
//import { userAuthContext } from '../../context/UserAuthContext';
import PartidoCardSkeleton from '../../components/PartidoCard/PartidoCardSkeleton';
import { useGetPartidos } from '../../hooks/useGetPartidos';



const Partidos = () => {

  const matches = useGetPartidos();
  const skeletons = new Array('hola','perro','como','estas','gracias');

  return (
    
    <div className='partidos-container'>
      <div className='page-container'> 
        <div className='section_title' >
          <h1>Partidos</h1>
        </div>
        <div className='cards-container'>

          {matches.length <= 0 && skeletons.map((el, index) => (
            <PartidoCardSkeleton 
              key={`PartidoCardSkeleton${index}`}
            />
          ))}

          {matches.length > 0 && matches.map((part)=> (
            <PartidoCard
              key={part.id}
              id={part.id}
              date={part.date}
              imagen={part.imagen}
              local={part.local}
              visita={part.visita}
              golesLocal={part.golesLocal}
              golesVisita={part.golesVisita}
              partido={part.partido}
              acciones={part.acciones}
              minutosJugados={part.minutosJugados}
              golesJugador={part.golesJugador}
              asistenciasJugador={part.asistenciasJugador}
            /> 
          ))}
          
        </div>
        
      </div>
      
    </div>
  )
  

}

export default Partidos
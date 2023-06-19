import db from '../../../utilities/firebase'
import PartidoCard from '../../components/PartidoCard/PartidoCard';
import './Partidos.scss'
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState} from 'react';

//console.log('esto es db' ,db);
const Partidos = () => {
  const [partidos, setPartidos] = useState([]);
  
  useEffect(() => {
    (async () => {
      const collectionRef = collection(db, 'BrunoAbbate');
      const snapshots = await getDocs(collectionRef);
      const docs = snapshots.docs.map((doc)  => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      setPartidos(docs);

    })();
  }, []);


  return (
    <div className='partidos_container'>
      <h1 className='section_title'>Partidos</h1>
      {partidos.map((part)=> (
        
        <PartidoCard
          key={part.id}
          id={part.id}
          imagen={part.imagen}
          local={part.local}
          visita={part.visita}
          golesLocal={part.golesLocal}
          golesVisita={part.golesVisita}
          partido={part.partido}
          acciones={part.acciones}
        />
        
      ))}
      
    </div>
  )
}

export default Partidos
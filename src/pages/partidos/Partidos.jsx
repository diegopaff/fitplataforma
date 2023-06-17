import db from '../../../utilities/firebase'
import PartidoCard from '../../components/PartidoCard/PartidoCard';
import './Partidos.scss'
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState} from 'react';

//console.log('esto es db' ,db);
const Partidos = () => {
  const [partidos, setPartidos] = useState([]);
  
  /* useEffect(() => {
    
    
    (async () => {
      const collectionRef = collection(db, 'BrunoAbbate');
      const snapshots = await getDocs(collectionRef);
      const docs = snapshots.docs.map(doc => doc.data());
      
      setPartidos(docs)
    })()

  }, []);

  console.log(partidos) */




  


  


  

  return (
    <div className='partidos_container'>
      <h1 className='section_title'>Partidos</h1>
      <PartidoCard/>
    </div>
  )
}

export default Partidos
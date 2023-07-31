import db from '../../../utilities/firebase'
import PartidoCard from '../../components/PartidoCard/PartidoCard';
import './Partidos.scss'
import { collection, getDocs} from "firebase/firestore";
import { useEffect, useState, useContext} from 'react';
import { userAuthContext } from '../../context/UserAuthContext';


const Partidos = () => {
  const [matches, setMatches] = useState([]);
  const {user} = useContext(userAuthContext); //usuario logueado
  console.log(user.uid)
  
  useEffect(() => {
    (async () => {
      const collectionRef = collection(db, user.uid, '2023', 'partidos');
    
      const snapshots = await getDocs(collectionRef);
      const docs = snapshots.docs.map((doc)  => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      setMatches(docs);
      

    })();
  }, []);


console.log(matches)



  return (
    <div className='partidos_container'>
      <div className='section_title' >
        <h1>Partidos</h1>
      </div>
      <div className='cards_container'> 

      {matches.map((part)=> (
        
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
        />
        
      ) 
      
      )}
      </div>
      
    </div>
  )
}

export default Partidos
import db from '../../utilities/firebase'
import { collection, getDocs} from "firebase/firestore";
import { useEffect, useState, useContext} from 'react';
import { userAuthContext } from '../context/UserAuthContext';

export const useStats = ()=> {

  const [matchesStats, setMatchesStats] = useState([]);
  const {user} = useContext(userAuthContext); //usuario logueado

  useEffect(() => {
    (async () => {
      const collectionRef = collection(db, user.uid, '2023', 'estadisticas');
    
      const snapshots = await getDocs(collectionRef);
      const docs = snapshots.docs.map((doc)  => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      setMatchesStats(docs);
      

    })();
  }, [user.uid]);

  const getSumAll = (propiedad) => {

    const total = matchesStats.reduce((accumulator, object) => {
      return accumulator + object[propiedad];
    }, 0);

    const ganados = matchesStats.reduce((accumulator, object) => {
      return accumulator + object[`${propiedad}Ganados`];
    }, 0);
   
      return {total: total, ganados: ganados}
  }

  const getNameItem = (propiedad) => {
    switch(propiedad){
      case 'duelosDefensivos' :
       return 'Duelos defensivos'
      case 'duelosOfensivos' :
        return 'Duelos ofensivos'
      case 'duelosAereos' :
        return 'Duelos aéreos'
      case 'pasesLaterales' :
        return 'Pases laterales'
      case 'pasesProgresivos':
        return 'Pases progresivos'
      case 'pasesHaciaAtras' :
        return 'Pases hacia atrás'
      case 'minutosJugados' :
        return 'Minutos jugados'
      
    } 
  }

  const getArrayItems = [
    'duelosDefensivos',
    'goles',
    'asistencias',
    'remates',
    'duelosOfensivos',
    'regate',
    'dueloAereo',
    'pasesLaterales',
    'pasesProgresivos',
    'pasesHaciaAtras'

  ]


  
  return {
    matchesStats,
    getSumAll,
    getNameItem,
    getArrayItems
    
}



}
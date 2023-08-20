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
  }, []);

  const getSumAll = (propiedad) => {
    const total = matchesStats.reduce((accumulator, object) => {
      
      return accumulator + object[propiedad];
    }, 0);

      return total
    }
  


/*   function calculateSum(array, property) {
    const total = array.reduce((accumulator, object) => {
      return accumulator + object[property];
    }, 0);
  
    return total;
  } */

  return {
    matchesStats,
    getSumAll
    
}



}
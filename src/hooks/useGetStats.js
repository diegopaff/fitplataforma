import db from '../../utilities/firebase'
import { collection, getDocs} from "firebase/firestore";
import { useEffect, useContext} from 'react';
import { userAuthContext } from '../context/UserAuthContext';
import { UserDataContext } from '../context/UserDataContext';



export const useGetStats = ()=> {
    const {matchesStats, setMatchesStats} = useContext(UserDataContext);
    const {user} = useContext(userAuthContext);

   //usuario logueado
    useEffect(() => {
        if(matchesStats.length < 1){
            (async () => {
            const collectionRef = collection(db, user.uid, '2023', 'estadisticas');
      
            const snapshots = await getDocs(collectionRef);
            const docs = snapshots.docs.map((doc)  => ({
                id: doc.id,
                ...doc.data(),
            }));
        
            setMatchesStats(docs);
  
            })();
        }
    }, [matchesStats]);

    
    return matchesStats
}
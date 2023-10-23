import db from '../../utilities/firebase'
import { collection, getDocs} from "firebase/firestore";
import { useEffect, useState, useContext} from 'react';
import { userAuthContext } from '../context/UserAuthContext';


export const useGetPartidos = () =>{

    
    const [matches, setMatches] = useState([]);
    const {user} = useContext(userAuthContext); //usuario logueado
    
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
    }, [user.uid]);



    return matches
}
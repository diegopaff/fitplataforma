import db from '../../utilities/firebase'
import { collection, getDocs} from "firebase/firestore";
import { useEffect, useContext} from 'react';
import { userAuthContext } from '../context/UserAuthContext';
import { UserDataContext } from '../context/UserDataContext'


export const useGetPartidos = () =>{

    
    //const [matches, setMatches] = useState([]);
    const {setMatches, matches} = useContext(UserDataContext);
    const {user} = useContext(userAuthContext); //usuario logueado
    
    
    useEffect(() => {
      if(matches.length < 1){
        (async () => {
          const collectionRef = collection(db, user.uid, '2023', 'partidos');
        
          const snapshots = await getDocs(collectionRef);
          const docs = snapshots.docs.map((doc)  => ({
            id: doc.id,
            ...doc.data(),
          }));
          
          setMatches(docs);
          
      
        })();
      }
      }, [user.uid]);



    
    return matches
}

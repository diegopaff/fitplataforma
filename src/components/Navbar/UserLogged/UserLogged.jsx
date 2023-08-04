import './UserLogged.scss'
import { useContext } from 'react';
import { userAuthContext } from '../../../context/UserAuthContext';


const UserLogged = () => {

  const { user } = useContext(userAuthContext);
  console.log(user.photoURL)
/*   const [userInfo, setUserInfo] = useState({});
  useEffect(()=> {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user !== null) {
      user.providerData.forEach((profile) => {
        setUserInfo ({
          nombre: profile.displayName,
          photoURL: profile.photoURL
        })
        
      });
    }

  },[]); */

  
  
  return (
    <div className="UserLogged">
      <div className='UserLogged__picture'>
        <img src={user.photoURL}></img>
      </div>
    
      <p className='UserLogged__username'>{user.displayName}</p>
    </div>
  )
}

export default UserLogged







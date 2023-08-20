import './UserLogged.scss'
import { useContext } from 'react';
import { userAuthContext } from '../../../context/UserAuthContext';


const UserLogged = () => {

  const { user } = useContext(userAuthContext);


  
  
  return (
    <div className='UserLogged'>
      <div className='UserLogged__picture'>
        <img src={user.photoURL}></img>
      </div>
    
      <p className='UserLogged__username'>{user.displayName}</p>
    </div>
  )
}

export default UserLogged







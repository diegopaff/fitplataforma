import './UserLogged.scss'
import { getAuth, } from "firebase/auth";
import { useEffect, useState } from 'react';

const UserLogged = () => {

  const [userInfo, setUserInfo] = useState({});
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

  },[]);

  
  
  return (
    <div className="UserLogged">
      <div className='UserLogged__picture'>
        <img src={userInfo.photoURL}></img>
      </div>
    
      <p className='UserLogged__username'>{userInfo.nombre}</p>
    </div>
  )
}

export default UserLogged






